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
      setConnect(info);
    });
    provider.on('disconnect', (error) => setDisconnect(error));
      provider.on('chainChanged', (chainId) => setChainChanged(chainId));
    provider.on('message', (message) => setMessage(message));
  }, []);

  return (
    <ComponentWrapper componentName="EventListeners">
      <div>
        <h2>Data received from EIP-1193 events:</h2>
        <p>'connect': {JSON.stringify(connect)}</p>
        <p>'disconnect': {JSON.stringify(disconnect)}</p>
        <p>'chainChanged': {JSON.stringify(chainChanged)}</p>
        <p>'message': {JSON.stringify(message)}</p>
      </div>
    </ComponentWrapper>
  );
};
