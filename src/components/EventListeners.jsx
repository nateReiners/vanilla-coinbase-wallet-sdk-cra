import { useEffect, useState } from 'react';
import provider from '../cbwProvider';
import { ComponentWrapper } from './ComponentWrapper';

export const EventListeners = () => {
  const [connect, setConnect] = useState(null);
  const [disconnect, setDisconnect] = useState(null);
  const [chainChanged, setChainChanged] = useState(null);
  const [message, setMessage] = useState(null);

    useEffect(() => {
        provider.on('connect', (info) => {
            setConnect(info)
        });
        provider.on('disconnect', (error) => setDisconnect(error));
        provider.on('chainChanged', (chainId) => setChainChanged(chainId));
        provider.on('message', (message) => setMessage(message));
    }, [])
    
  return (
    <ComponentWrapper componentName="EventListeners">
        <div>
            <p>Connect Event: {connect}</p>
            <p>Disconnect Event: {JSON.stringify(disconnect)}</p>
            <p>Chain Changed Event: {JSON.stringify(chainChanged)}</p>
            <p>Message Event: {JSON.stringify(message)}</p>
        </div>
    </ComponentWrapper>
  );
};
