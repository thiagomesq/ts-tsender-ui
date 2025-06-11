interface TransactionDetailsProps {
    tokenName: string;
    totalAmount: number;
    tokenDecimals: number;
}
export default function TransactionDetails({ tokenName, totalAmount, tokenDecimals }: TransactionDetailsProps) {
    return (
        <div className="mt-6 p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Transaction Details</h3>
            <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                    <span>Token Name:</span>
                    <span className="font-bold">{tokenName}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Amount (wei):</span>
                    <span className="font-bold">{totalAmount}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Amount (tokens):</span>
                    <span className="font-bold">{tokenDecimals ? (totalAmount / Math.pow(10, tokenDecimals)).toFixed(2) : '-'}</span>
                </div>
            </div>
        </div>
    )
}