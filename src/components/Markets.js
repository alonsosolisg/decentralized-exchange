import React from 'react'
import config from '../config.json';
import { useDispatch, useSelector } from 'react-redux';
import { loadTokens } from '../store/interactions';

const Markets = () => {
    const provider = useSelector(state => state.provider.connection)
    const chainId = useSelector(state => state.provider.chainId)

    const dispatch = useDispatch()

    const marketHandler = async (e) => {
        loadTokens(provider, (e.target.value).split(','), dispatch)
    }

  return (
    <div className='component exchange__markets'>
      <div className='component__header'>
        <h2>Select Market</h2>
      </div>

        {chainId && config[chainId] ? (
        <select name='markets' id='markets' onChange={marketHandler}>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Shark.address}`}>ELPH / SHK</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Tiger.address}`}>ELPH / TIG</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Wolf.address}`}>ELPH / WLF</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Dolphin.address}`}>ELPH / DDAI</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Fox.address}`}>ELPH / FOX</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Camel.address}`}>ELPH / CAM</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Platypus.address}`}>ELPH / PLA</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Cat.address}`}>ELPH / CAT</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Cow.address}`}>ELPH / COW</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Iguana.address}`}>ELPH / IGI</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Needlefish.address}`}>ELPH / NEE</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Dog.address}`}>ELPH / DOG</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Goat.address}`}>ELPH / GOAT</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Fish.address}`}>ELPH / FISH</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Scorpion.address}`}>ELPH / SCP</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Donkey.address}`}>ELPH / DONK</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Vulture.address}`}>ELPH / VVR</option>
            <option value={`${config[chainId].Elephant.address},${config[chainId].Duck.address}`}>ELPH / DUCK</option>
        </select>
        ) : (
            <div>Not Deployed To Network</div>
        )}

      <hr />
    </div>
  )
}

export default Markets