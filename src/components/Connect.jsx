import {useState,useEffect} from 'react';
import provider from '../cbwProvider';
import { ComponentWrapper } from './ComponentWrapper';

export const Connect = () => {
    const [address, setAddress] = useState(null)
    const [error, setError] = useState(null)

    const connect = async () => {
        try {
            const [address] = await provider.request({ method: 'eth_requestAccounts' })
            setAddress(address)
            setError(null)
        } catch (error) {
            setError(error)
        }
    }

    const disconnect = async () => {
        try {
            provider.disconnect()
            provider.close()
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        // check if already connected
        provider.request({ method: 'eth_accounts' }).then(([address]) => setAddress(address)).catch(() => setAddress(null))
        // clear address on disconnect
        provider.on('disconnect', () => setAddress(null));
    }, [])

    return (
        <ComponentWrapper componentName="Connect">
            {!address ? <button onClick={connect}>Connect Wallet</button> : <div><p>Connected with address: {address}</p><button onClick={disconnect}>Disconnect</button></div>}
            {error && <div>{JSON.stringify(error)}</div>}
        </ComponentWrapper>
    )
}