import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Balance from './Balance';
import Order from './Order';

import config from '../config.json';

import { 
  loadProvider, 
  loadNetwork, 
  loadAccount,
  loadTokens,
  loadExchange,
  subscribeToEvents, 
  loadAllOrders
} from '../store/interactions';
import Markets from './Markets';

import Navbar from './Navbar';
import OrderBook from './OrderBook';
import PriceChart from './PriceChart';
import Trades from './Trades';
import Transactions from './Transactions';
import Alert from './Alert';

function App() {

  const dispatch = useDispatch()
    
  const loadBlockchainData = async () => {

    //Connect Ethers to Blockchain
    const provider = loadProvider(dispatch)

    
    //Fetch Network's ChainId
    const chainId = await loadNetwork(provider, dispatch)

    window.ethereum.on('chainChanged', async () => {
      window.location.reload()
    })

    //Fetch current account and balance from metamask when changed
    window.ethereum.on('accountsChanged', async () => {
      await loadAccount(provider, dispatch)
    })

    //Load token Smart Contracts
    const elephant = config[chainId].Elephant
    const shark = config[chainId].Shark
    await loadTokens(provider, [elephant.address, shark.address], dispatch)

    //Load Exchange Smart Contract
    const exchangeConfig = config[chainId].exchange
    const exchange = await loadExchange(provider, exchangeConfig.address, dispatch)
    
    //Fetch All Orders
    loadAllOrders(provider, exchange, dispatch)
    
    //Listen to events
    subscribeToEvents(exchange, dispatch)
  }

  useEffect(() => {
    loadBlockchainData();
  })

  return (
    <div>

      <Navbar/>

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          <Markets/>

          <Balance/>

          <Order />

        </section>
        <section className='exchange__section--right grid'>

          <PriceChart/>

          <Transactions/>

          <Trades/>

          <OrderBook/>

        </section>
      </main>

      <Alert/>

    </div>
  );
}

export default App;
