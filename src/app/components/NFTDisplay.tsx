import Image from "next/image";

export default function NFTDisplay() {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg transition-transform hover:scale-105">
      <Image
        src="/placeholder.svg"
        alt="NFT Artwork"
        width={500}
        height={500}
        className="w-full h-auto rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Cosmic Dreamscape #42</h2>
      <p className="text-gray-300">
        A mesmerizing digital artwork that captures the essence of interstellar
        exploration and the boundless creativity of the human imagination.
      </p>
    </div>
  );
}
