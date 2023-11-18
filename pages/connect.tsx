import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useWeb3Modal } from '@web3modal/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { open, close } = useWeb3Modal()

  return (
    <div className="flex flex-col py-2 px-2">
    <h1
      className='text-6xl font-bold text-gray-900
        underline py-2
      '
    >
      DESURANCE
    </h1>

    <p className="text-2xl font-bold text-gray-900">
      Provide Job insurance for all Startup workers across
      <br/>
       the world while keeping their data anonymous.
    </p>


      <div className="bg-gray-100 rounded-xl
        flex flex-col justify-center items-center py-24 px-2
        mt-10
        w-1/3 mx-auto py
      ">
        Conenct your wallet to get started

        <button
          onClick={open}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect Wallet
        </button>
        </div>
    </div>


  )
}
