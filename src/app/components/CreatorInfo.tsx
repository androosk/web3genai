import { Twitter, Instagram, Globe } from "lucide-react";

export default function CreatorInfo() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-2">Creator: Stella Nova</h3>
      <p className="text-gray-300 mb-4">
        Stella Nova is a digital artist known for her captivating cosmic-themed
        NFTs that blend science and art.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-400 hover:text-blue-300">
          <Twitter size={24} />
        </a>
        <a href="#" className="text-pink-400 hover:text-pink-300">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-green-400 hover:text-green-300">
          <Globe size={24} />
        </a>
      </div>
    </div>
  );
}
