"use client";
import HomeContent from "@/components/HomeContent";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <div className="min-h-screen bg-gray-100 p-10">
        {isConnected ? (
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <HomeContent />
            </div>
          </div>
        ) : (
            <div className="bg-white rounded-lg p-8 flex justify-center items-center">
              <p className="text-xl font-semibold text-gray-800">Please connect a wallet...</p>
            </div>
        )}
    </div>
  );
}