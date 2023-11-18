import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';

import { GenerateProof } from '@reclaimprotocol/reclaim-connect-react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


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
            <div className="flex flex-row font-bold text-lg fixed top-0 left-0 right-0 justify-between items-center py-3 shadow-sm px-10 bg-white">
                DESURANCE
            </div>
        )
        return (
            <div className='w-full bg-gray-100 h-screen flex justify-center items-center'>
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
                <p className="text-xl text-center text-gray-900 ">
                    Provide Job insurance for all Startup workers across
                    <br/>
                    the world while keeping their data anonymous.
                </p>
                <Card className="flex flex-col p-6 mt-10 items-center justify-center
                ">
                   <h1 className="text-2xl font-semibold shado   text-gray-900 text-left mb-4 mx-auto">
                   Add your proof of employment 
                </h1>

                    <GenerateProof
                    customize={{
                        triggerButton:{style:{
                            backgroundColor:'rgb(132 204 22)',
                            color:'white',
                            boxShadow:'none'
                        }}
                    }}
      appID='e454f7f1-7d6e-4885-a894-aac999580d8a'
      userID={uuidv4()}
      onProofSubmission={(proofs, sessionId) => {
            alert('success')

      }}
      onProofSubmissionFailed={() => {
        alert('failed')
      }}
    />
                </Card>
                </div>
                
            </div>
        );
}

export default Index