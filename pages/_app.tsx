import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
} from "wagmi/chains";
const projectId = "828203d46d0e4b5f290a0bc2946a2ee4";


// 2. Configure wagmi client
const chains = [
  mainnet,
  polygon,
  optimism,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
];

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ chains, projectId }),
  ],
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
        <WagmiConfig config={wagmiConfig}>
  <Component {...pageProps} />
  </WagmiConfig>
  <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="dark"
      />
  </> )
}
