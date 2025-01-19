import { Shield, Info } from "lucide-react";

export default function TrustIndicators() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <Shield className="text-green-400 mr-2" />
        <span>Secure Transaction</span>
      </div>
      <div className="text-sm text-gray-400">
        <p className="mb-2">
          <Info className="inline mr-1" size={16} />
          Gas fees may apply depending on network conditions.
        </p>
        <p>
          <Info className="inline mr-1" size={16} />
          This NFT is minted on the Ethereum network.
        </p>
      </div>
    </div>
  );
}
