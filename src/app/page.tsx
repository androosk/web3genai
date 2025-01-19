import NFTDisplay from "./components/NFTDisplay";
import CreatorInfo from "./components/CreatorInfo";
import WalletConnection from "./components/WalletConnection";
import ClaimNFT from "./components/ClaimNFT";
import TrustIndicators from "./components/TrustIndicators";
import PromotionalBanner from "./components/PromotionalBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          Claim Your Exclusive NFT
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <NFTDisplay />
          <div className="space-y-8">
            <CreatorInfo />
            <WalletConnection />
            <ClaimNFT />
            <TrustIndicators />
          </div>
        </div>
        <PromotionalBanner />
      </div>
    </main>
  );
}
