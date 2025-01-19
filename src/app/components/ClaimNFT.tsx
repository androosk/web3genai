"use client";

import { useState } from "react";
import { useAccount } from "wagmi";

export default function ClaimNFT() {
  const { isConnected } = useAccount();
  const [isClaiming, setIsClaiming] = useState(false);

  const handleClaim = async () => {
    setIsClaiming(true);
    // Implement claiming logic here
    setTimeout(() => setIsClaiming(false), 2000); // Simulating a delay
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Claim Your NFT</h3>
      <button
        onClick={handleClaim}
        disabled={!isConnected || isClaiming}
        className={`w-full py-3 px-4 rounded font-bold transition-colors ${
          isConnected
            ? "bg-purple-500 hover:bg-purple-600 text-white"
            : "bg-gray-500 text-gray-300 cursor-not-allowed"
        }`}
      >
        {isClaiming ? "Claiming..." : "Claim NFT"}
      </button>
      {!isConnected && (
        <p className="mt-2 text-sm text-gray-400">
          Connect your wallet to claim
        </p>
      )}
    </div>
  );
}
