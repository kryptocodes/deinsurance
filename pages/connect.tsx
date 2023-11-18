import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { open, close } = useWeb3Modal()
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if(isConnected && address) {
       API(address)
    }
  }, [isConnected, address])

  const API = async (wallet:string) => {
    try{
       const response = await fetch('/api/signin',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({wallet})
       })
        const data = await response.json()
        window.location.href = '/'
    }
    catch(error){
      console.log(error)
    }
  }

  const logo = ()=> {
    return (
      <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd_35_41)">
<rect x="3" y="1" width="42" height="42" rx="4.66667" fill="black"/>
<path d="M20.5278 10C27.0272 10 32.22 15.2598 32.22 21.7257C32.22 28.1916 27.0272 33.4514 20.5278 33.4514H15V10H20.5278ZM20.5278 29.6991C24.9501 29.6991 28.5348 26.1479 28.5348 21.7257C28.5348 17.3034 24.9501 13.7522 20.5278 13.7522H18.7187V29.6991H20.5278Z" fill="white"/>
</g>
<defs>
<filter id="filter0_dd_35_41" x="0.48" y="0.16" width="47.04" height="48.72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.36"/>
<feGaussianBlur stdDeviation="1.26"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_35_41"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="0.84"/>
<feGaussianBlur stdDeviation="0.84"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_35_41" result="effect2_dropShadow_35_41"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_35_41" result="shape"/>
</filter>
</defs>
</svg>

    )
  }

  return (
    <div className="flex bg-slate-100 min-h-screen flex-col py-2 px-2">
    <h1
      className='text-6xl font-bold text-gray-900
        underline py-2
      '
    >
      DESURANCE
    </h1>

    <p className="text-xl font text-gray-900">
      Provide Job insurance for all Startup workers across
      <br/>
       the world while keeping their data anonymous.
    </p>


      <Card className=" rounded-xl
        flex flex-col justify-center items-center py-24 px-2
        mt-10
        w-1/3 mx-auto py
      ">
        {logo()}
        <h2 className=' text-2xl font-semibold pb- pt-4'>Connect wallet</h2>
        Connect your wallet to get started

        <Button
          onClick={open}
        className=" mt-4 font-bold py-2 px-4 rounded">
          Connect Wallet
        </Button>
        </Card>
    </div>


  )
}
