import React, { useEffect } from 'react'
import { useAccount } from 'wagmi';

interface indexProps {

}

const Index: React.FC<indexProps> = ({}) => {
        const { isConnected, address } = useAccount();
        useEffect(() => {
            if(!isConnected || !address) {
                window.location.href = '/connect'
            }
        }, [isConnected, address])

        return (
            <>
            
            </>
        );
}

export default Index