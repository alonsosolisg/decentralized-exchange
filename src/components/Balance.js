import elph from '../assets/elph.svg'
import shk from '../assets/shk.svg'
import tiger from '../assets/tiger.svg'
import camel from '../assets/camel.svg'
import cat from '../assets/cat.svg'
import cow from '../assets/cow.svg'
import dog from '../assets/dog.svg'
import dolphin from '../assets/dolphin.svg'
import donkey from '../assets/donkey.svg'
import duck from '../assets/duck.svg'
import fish from '../assets/fish.svg'
import fox from '../assets/fox.svg'
import goat from '../assets/goat.svg'
import iguana from '../assets/iguana.svg'
import needlefish from '../assets/needlefish.svg'
import platypus from '../assets/platypus.svg'
import scorpion from '../assets/scorpion.svg'
import vulture from '../assets/vulture.svg'
import wolf from '../assets/wolf.svg'


import { useDispatch, useSelector } from 'react-redux';
import { loadBalances, transferTokens } from '../store/interactions';
import { useEffect, useState, useRef } from 'react';


const Balance = () => {
  const [isDeposit, setIsDeposit] = useState(true)
  const [token1TransferAmount, setToken1TransferAmount] = useState(0)
  const [token2TransferAmount, setToken2TransferAmount] = useState(0)
  const [currentNetworkImage, setCurrentNetowkImage] = useState(shk)

    const dispatch = useDispatch()

    const provider = useSelector(state => state.provider.connection)
    const account = useSelector(state => state.provider.account)

    const exchange = useSelector(state => state.exchange.contract)
    const exchangeBalances = useSelector(state => state.exchange.balances)
    const transferInProgress = useSelector(state => state.exchange.transferInProgress)

    const tokens = useSelector(state => state.tokens.contracts)
    const symbols = useSelector(state => state.tokens.symbols)
    const tokenBalances = useSelector(state => state.tokens.balances)

    const depositRef = useRef(null)
    const withdrawRef = useRef(null)

    useEffect(() => {
      if(symbols[1] === 'SHK') {
        setCurrentNetowkImage(shk)
      } else if(symbols[1] === 'TIG') {
        setCurrentNetowkImage(tiger)
      } else if(symbols[1] === 'WLF') {
        setCurrentNetowkImage(wolf)
      } else if(symbols[1] === 'DDAI') {
        setCurrentNetowkImage(dolphin)
      } else if(symbols[1] === 'FOX') {
        setCurrentNetowkImage(fox)
      } else if(symbols[1] === 'CAM') {
        setCurrentNetowkImage(camel)
      } else if(symbols[1] === 'PLA') {
        setCurrentNetowkImage(platypus)
      } else if(symbols[1] === 'CAT') {
        setCurrentNetowkImage(cat)
      }else if(symbols[1] === 'COW') {
        setCurrentNetowkImage(cow)
      } else if(symbols[1] === 'IGI') {
        setCurrentNetowkImage(iguana)
      } else if(symbols[1] === 'NEE') {
        setCurrentNetowkImage(needlefish)
      } else if(symbols[1] === 'DOG') {
        setCurrentNetowkImage(dog)
      } else if(symbols[1] === 'GOAT') {
        setCurrentNetowkImage(goat)
      } else if(symbols[1] === 'FISH') {
        setCurrentNetowkImage(fish)
      } else if(symbols[1] === 'SCP') {
        setCurrentNetowkImage(scorpion)
      } else if(symbols[1] === 'DONK') {
        setCurrentNetowkImage(donkey)
      } else if(symbols[1] === 'VVR') {
        setCurrentNetowkImage(vulture)
      } else if(symbols[1] === 'DUCK') {
        setCurrentNetowkImage(duck)
      }
    })

    const tabHandler = (e) => {
      if(e.target.className !== depositRef.current.className) {
        e.target.className = 'tab tab--active'
        depositRef.current.className = 'tab'
        setIsDeposit(false)
      } else {
        e.target.className = 'tab tab--active'
        withdrawRef.current.className = 'tab'
        setIsDeposit(true)
      }
    }

    const amountHandler = (e, token) => {
      if (token.address === tokens[0].address) {
        setToken1TransferAmount(e.target.value)
      } else {
        setToken2TransferAmount(e.target.value)
      }
    }

    // 1. Do Transfer
    // 2. Notify App That Transfer Is Pending
    // 3. Get Confirmation From Blockchain That Transfer Was Successful
    // 4. Notify App That Transfer Was Successful
    // 5. Handle Transfer Failed

    const depositHandler = (e, token) => {
      e.preventDefault()

      if (token.address === tokens[0].address) {
        transferTokens(provider, exchange, 'Deposit', token, token1TransferAmount, dispatch)
        setToken1TransferAmount(0)
      } else {
        transferTokens(provider, exchange, 'Deposit', token, token2TransferAmount, dispatch)
        setToken2TransferAmount(0)
      }
    }

    const withdrawHandler = (e, token) => {
      e.preventDefault()

      if (token.address === tokens[0].address) {
        transferTokens(provider, exchange, 'Withdraw', token, token1TransferAmount, dispatch)
        setToken1TransferAmount(0)
      } else {
        transferTokens(provider, exchange, 'Withdraw', token, token2TransferAmount, dispatch)
        setToken2TransferAmount(0)
      }
    }

    useEffect(() => {
      if(exchange && tokens[0] && tokens[1] && account) {
        loadBalances(exchange, tokens, account, dispatch)
      }
    }, [exchange, tokens, account, transferInProgress, dispatch])

    return (
      <div className='component exchange__transfers'>
        <div className='component__header flex-between'>
          <h2>Balance</h2>
          <div className='tabs'>
            <button onClick={tabHandler}  ref={depositRef} className='tab tab--active'>Deposit</button>
            <button onClick={tabHandler} ref={withdrawRef} className='tab'>Withdraw</button>
          </div>
        </div>
  
        {/* Deposit/Withdraw Component 1 (ELPH) */}
  
        <div className='exchange__transfers--form'>
          <div className='flex-between'>
            <p><small>Token</small><br/><img src={elph} alt="Token Logo"/>{symbols && symbols[0]}</p>
            <p><small>Wallet</small><br/>{tokenBalances && tokenBalances[0]}</p>
            <p><small>Exchange</small><br/>{exchangeBalances && exchangeBalances[0]}</p>
          </div>
  
          <form onSubmit={isDeposit ? (e) => depositHandler(e, tokens[0]) : (e) => withdrawHandler(e, tokens[0])}>
            <label htmlFor="token0">{symbols && symbols[0]} Amount</label>
            <input 
              type="text" 
              id='token0' 
              placeholder='0.0000' 
              value={token1TransferAmount === 0 ? '' : token1TransferAmount}
              onChange={(e) => amountHandler(e, tokens[0])} 
            />
  
            <button className='button' type='submit'>
              
            {isDeposit ? (
              <span>Deposit</span>
            ) : (
              <span>Withdraw</span>
            )}

            </button>
          </form>
        </div>
  
        <hr />
  
        {/* Deposit/Withdraw Component 2 (SHK) */}
  
        <div className='exchange__transfers--form'>
          <div className='flex-between'>
            <p><small>Token</small><br/><img src={currentNetworkImage} alt="Token Logo"/>{symbols && symbols[1]}</p>
            <p><small>Wallet</small><br/>{tokenBalances && tokenBalances[1]}</p>
            <p><small>Exchange</small><br/>{exchangeBalances && exchangeBalances[1]}</p>
          </div>
  
          <form onSubmit={isDeposit ? (e) => depositHandler(e, tokens[1]) : (e) => withdrawHandler(e, tokens[1])}>
            <label htmlFor="token1">{symbols && symbols[1]} Amount</label>
            <input 
              type="text" 
              id='token1' 
              placeholder='0.0000'
              value={token2TransferAmount === 0 ? '' : token2TransferAmount}
              onChange={(e) => amountHandler(e, tokens[1])}
            />
  
            <button className='button' type='submit'>

            {isDeposit ? (
              <span>Deposit</span>
            ) : (
              <span>Withdraw</span>
            )}

            </button>
          </form>
        </div>
  
        <hr />
      </div>
    );
  }
  
  export default Balance;