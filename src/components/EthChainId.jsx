import { useState } from "react"
import { ComponentWrapper } from "./ComponentWrapper"
import provider from '../cbwProvider'

export const EthChainId = () => {
    const [chainId, setChainId] = useState(null)
    const [error, setError] = useState(null)
    
    const requestChainId = async () => {
        try {
            const chainId = await provider.request({ method: 'eth_chainId' })
            setChainId(chainId)
        } catch (error) {
            setError(error)
        }
    }

    return (<ComponentWrapper componentName={"eth_chainId"}>
        <div>
            <button onClick={requestChainId}>Request Chain Id</button>
            <p>Chain Id: {chainId}</p>
            {error && <div>{JSON.stringify(error)}</div>}
        </div>
    </ComponentWrapper>)
}