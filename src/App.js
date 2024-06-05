import {Connect} from './components/Connect';
import { EthChainId } from './components/EthChainId';
import { EventListeners } from './components/EventListeners';



function App() {
  return (
    <div>
      <EventListeners />
      <Connect />
      <EthChainId />
    </div>
  );
}

export default App;
