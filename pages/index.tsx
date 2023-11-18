import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
    </div>
  )
}
