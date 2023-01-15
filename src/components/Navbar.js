import React from 'react'
import { useSelector } from 'react-redux'
import Blockies from 'react-blockies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../assets/logo.png'
import eth from '../assets/eth.svg'
import info from '../assets/info.svg'

import { loadAccount } from '../store/interactions'
import { useDispatch } from 'react-redux'

import config from '../config.json'
import Banner from './Banner'

const Navbar = () => { 
    
    const provider = useSelector(state => state.provider.connection)
    const chainId = useSelector(state => state.provider.chainId)
    const account = useSelector(state => state.provider.account)
    const balance = useSelector(state => state.provider.balance)

    const dispatch = useDispatch()

    const connectHandler = async () => {
        await loadAccount(provider, dispatch)
    }

    const networkHandler = async (e) => {
        await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: e.target.value}]
        })
    }

    const CustomToastWithLink = () => (
        <div>
            To use the exchange get the ELPH token by swapping it in <a href={'https://app.uniswap.org/#/swap'} target="_blank">Uniswap</a> through the Goerli Network and searching the token as pair with its address: 0xa13dB3870F314E6E230ca674cA8cA8173d06C8C3. To get Goerli ETH go to the <a href={'https://goerlifaucet.com/'} target="_blank">Goerli Faucet</a>.
        </div>
      );

    const notify = () => toast.info(CustomToastWithLink);

    return (
        <div className='exchange__header grid'>
        <div className='exchange__header--brand flex'>
            <img alt='logo' src={logo} className='logo'>
            </img>
            <h1>Elephant Exchange</h1>
                <img alt='info' src={info} className='info' onClick={notify}>
                </img>
                <ToastContainer
                    position="bottom-right"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                />
                
        </div>

        <div className='exchange__header--networks flex'>
            <img src={eth} alt="eth" className='Eth Logo'/>

            {chainId && (
                <select name='networks' id='networks' value={config[chainId] ? `0x${chainId.toString(16)}` : `0`} onChange={networkHandler}>
                <option value='0' disabled>Select Network</option>
                <option value='0x7A69' >Localhost</option>
                <option value='0x5' >Goerli</option>
                </select>
            )}

        </div>

        <div className='exchange__header--account flex'>
            
            {balance ? (
                <p><small>My Balance</small>{Number(balance).toFixed(4)} ETH</p>
            ) : (
                <p><small>My Balance</small> 0 ETH</p>
            )}

            {account ? (
                <a 
                    href={config[chainId] ? `${config[chainId].explorerUrl}/address/${account}` : `#`} 
                    target="_blank" 
                    rel='noreferrer'
                >
                    {account.slice(0,5) + "..." + account.slice(38,42)}
                    <Blockies 
                        seed={account}
                        size={10}
                        scale={3}
                        color='#2187D0'
                        bgColor='#F1F2F9'
                        spotColor='#767F92'
                        className="identicon"
                    />
                </a>
            ) : (
                <button className='button' onClick={connectHandler}>Connect</button>
            )}
        </div>
        </div>
    )
}

export default Navbar