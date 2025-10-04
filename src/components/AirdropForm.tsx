"use client"

import InputField from "@/components/ui/InputField";
import { useEffect, useMemo, useState } from "react";
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/constants";
import { useChainId, useConfig, useAccount, useWriteContract, useReadContracts } from "wagmi";
import { readContract, waitForTransactionReceipt } from "@wagmi/core";
import { calculateTotal } from "@/utils";
import TransactionDetails from "./TransactionDetails";

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("");
    const [recipients, setRecipients] = useState("");
    const [amounts, setAmounts] = useState("");
    const chainId = useChainId();
    const config = useConfig();
    const account = useAccount();
    const total: number = useMemo(() => calculateTotal(amounts), [amounts]);
    const {data: hash, isPending, writeContractAsync } = useWriteContract()
    const tokenContract = {
        abi: erc20Abi,
        address: tokenAddress as `0x${string}`,
    }
    const { data: token } = useReadContracts({
        contracts: [
            {
                ...tokenContract,
                functionName: "balanceOf",
                args: [account.address],
            },
            {
                ...tokenContract,
                functionName: "name",
            },
            {
                ...tokenContract,
                functionName: "decimals",
            },
        ],
    }) as {data: [{ result: number | undefined }, { result: string | undefined }, { result: number | undefined }] | undefined };

    async function getApprovedAmount(tSenderAddress: string | null): Promise<number> {
        if (!tSenderAddress) {
            alert("TSender address is not defined for this chain");
            return 0;
        }
        const response = await readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tSenderAddress as `0x${string}`],
        });

        return response as number;
    }

    async function handleSubmit() {
        const tSenderAddress = chainsToTSender[chainId]["tsender"];
        console.log("TSender Address:", tSenderAddress);
        console.log("ChainID:", chainId);
        const approvedAmount = await getApprovedAmount(tSenderAddress);
            
        if (approvedAmount < total) {
            const approvalHash = await writeContractAsync({
                abi: erc20Abi,
                address: tokenAddress as `0x${string}`,
                functionName: "approve",
                args: [tSenderAddress as `0x${string}`, BigInt(total)],
            });
            const approvalReceipt = await waitForTransactionReceipt(config, { hash: approvalHash });

            console.log("Approval Transaction Receipt:", approvalReceipt);

            await writeContractAsync({
                abi: tsenderAbi,
                address: tSenderAddress as `0x${string}`,
                functionName: "airdropERC20",
                args: [
                    tokenAddress,
                    // Comma or new line separated
                    recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
                    amounts.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
                    BigInt(total),
                ],
            });
        } else {
            await writeContractAsync({
                abi: tsenderAbi,
                address: tSenderAddress as `0x${string}`,
                functionName: "airdropERC20",
                args: [
                    tokenAddress,
                    // Comma or new line separated
                    recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
                    amounts.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
                    BigInt(total),
                ],
            });
        }
    }

    useEffect(() => {
        const savedTokenAddress = localStorage.getItem('tokenAddress')
        const savedRecipients = localStorage.getItem('recipients')
        const savedAmounts = localStorage.getItem('amounts')

        if (savedTokenAddress) setTokenAddress(savedTokenAddress)
        if (savedRecipients) setRecipients(savedRecipients)
        if (savedAmounts) setAmounts(savedAmounts)
    }, [])

    useEffect(() => {
        localStorage.setItem('tokenAddress', tokenAddress)
    }, [tokenAddress])

    useEffect(() => {
        localStorage.setItem('recipients', recipients)
    }, [recipients])

    useEffect(() => {
        localStorage.setItem('amounts', amounts)
    }, [amounts])

    return (
        <div className="w-full p-8 bg-white rounded-lg shadow-xl border-2 border-blue-600">
            <InputField
                label="Token Address"
                placeholder="0x"
                value={tokenAddress}
                onChange={e => setTokenAddress(e.target.value)}
            />
            <InputField
                label="Recipients"
                placeholder="0x1234,0x12345"
                value={recipients}
                large={true}
                onChange={e => setRecipients(e.target.value)}
            />
            <InputField
                label="Amounts"
                placeholder="100,200,300,..."
                value={amounts}
                large={true}
                onChange={e => setAmounts(e.target.value)}
            />
            <TransactionDetails tokenName={token && token[1].result ? token[1].result : '-'} totalAmount={total} tokenDecimals={token && token[2].result ? token[2].result : 0} />
            <button 
                onClick={handleSubmit}
                disabled={isPending || !tokenAddress || !recipients || !amounts || (token && token[0].result !== undefined && token[0].result < total)}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
                {
                    isPending ? 
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-r-3 border-white-200"></div>
                            Processing…
                        </>
                    : !tokenAddress || !recipients || !amounts ? "Preencha todos os campos" 
                    : token && token[0].result !== undefined && token[0].result < total ? "Insufficient balance" : "Submit Airdrop"
                }
            </button>
        </div>
    )
}