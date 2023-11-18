import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';

import { GenerateProof } from '@reclaimprotocol/reclaim-connect-react';


interface indexProps {

}

const Index: React.FC<indexProps> = ({}) => {
        const { isConnected, address } = useAccount();
       
        useEffect(() => {
            if(!isConnected || !address) {
                window.location.href = '/connect'
            }
        }, [isConnected, address])

        const NavBar = () => (
            <div className="flex flex-row justify-between items-center py-2 px-2
                bg-gray-100
            ">
                DESURANCE
            </div>
        )
        return (
            <>
                <NavBar />

                <div className="flex flex-col py-2 px-2
                    justify-center items-center 
                
                ">
                <h1 className="text-6xl
                text-left
                font-bold text-gray-900
                ">

                    DESURANCE 

                </h1>
                <p className="text-2xl font-bold text-gray-900 text-left">
                    Provide Job insurance for all Startup workers across
                    <br/>
                    the world while keeping their data anonymous.
                </p>
                <div className="flex flex-col py-2 px-2
                 bg-gray-100 rounded-xl mt-10
                ">
                   <h1 className="text-2xl font-bold text-gray-900 text-left mb-4 mx-auto">
                   Add your proof of employment 
                </h1>

                    <GenerateProof
      appID='55e3f565-93c9-4cbb-9c03-aee810199ce7'
      userID='dasq2easdase-asdq2e3'
      onProofSubmission={(proofs, sessionId) => {
            console.log(proofs)

      }}
      onProofSubmissionFailed={() => {
        alert('failed')
      }}
    />
                </div>
                </div>
                
            </>
        );
}

export default Index