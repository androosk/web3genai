"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletConnection() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    // connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <p className="mb-2">Connected to {address}</p>
        <button
          onClick={() => disconnect()}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <button
        // onClick={() => connect()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
      >
        Connect Wallet
      </button>
    </div>
  );
}
