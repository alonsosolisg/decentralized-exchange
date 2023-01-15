const { ethers } = require("hardhat")

async function main() {
  console.log(`Preparing Deployment...\n`)
  //Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  const Exchange = await ethers.getContractFactory("Exchange")

  const accounts = await ethers.getSigners()

  console.log(`Accounts Fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

  //Deploy the contract
  const elephant = await Token.deploy("Elephant Exchange", "ELPH", "500000")
  await elephant.deployed()
  console.log(`Elephant Exchange Deployed to: ${elephant.address}`)

  const shark = await Token.deploy("Stable Shark", "SHK", "1000000000")
  await shark.deployed()
  console.log(`Stable Shark Deployed to: ${shark.address}`)

  const tiger = await Token.deploy("Tiger Token", "TIG", "13000")
  await tiger.deployed()
  console.log(`Tiger Token Deployed to: ${tiger.address}`)

  const wolf = await Token.deploy("Wrapped Wolf", "WLF", "250000")
  await wolf.deployed()
  console.log(`Wrapped Wolf Deployed to: ${wolf.address}`)

  const dolphin = await Token.deploy("Dolphin Dai", "DDAI", "8000000")
  await dolphin.deployed()
  console.log(`Dolphin Dai Deployed to: ${dolphin.address}`)

  const fox = await Token.deploy("Fungible Fox", "FOX", "20000")
  await fox.deployed()
  console.log(`Fungible Fox Deployed to: ${fox.address}`)

  const camel = await Token.deploy("Camel Classic", "CAM", "20000000")
  await camel.deployed()
  console.log(`Camel Classic Deployed to: ${camel.address}`)

  const platypus = await Token.deploy("Platypus Protocol", "PLA", "300000")
  await platypus.deployed()
  console.log(`Platypus Protocol Deployed to: ${platypus.address}`)

  const cat = await Token.deploy("Cat Cash", "CAT", "600000000")
  await cat.deployed()
  console.log(`Cat Cash Deployed to: ${cat.address}`)

  const cow = await Token.deploy("Cow Coin", "COW", "1000000000")
  await cow.deployed()
  console.log(`Cow Coin Deployed to: ${cow.address}`)

  const iguana = await Token.deploy("Iguana Infinity", "IGI", "250000")
  await iguana.deployed()
  console.log(`Iguana Infinity Deployed to: ${iguana.address}`)

  const needlefish = await Token.deploy("Needlefish Network", "NEE", "1000000000")
  await needlefish.deployed()
  console.log(`Needlefish Network Deployed to: ${needlefish.address}`)

  const dog = await Token.deploy("Dog Dollar", "DOG", "1000000000")
  await dog.deployed()
  console.log(`Dog Dollar Deployed to: ${dog.address}`)

  const goat = await Token.deploy("Goat Gold", "GOAT", "1000000000")
  await goat.deployed()
  console.log(`Goat Gold Deployed to: ${goat.address}`)

  const fish = await Token.deploy("Fish Finance", "FISH", "3500000000000")
  await fish.deployed()
  console.log(`Fish Finance Deployed to: ${fish.address}`)
  
  const scorpion = await Token.deploy("Scorpion Swap", "SCP", "500000000")
  await scorpion.deployed()
  console.log(`Scorpion Swap Deployed to: ${scorpion.address}`)

  const donkey = await Token.deploy("Donkey Dapp", "DONK", "40000000")
  await donkey.deployed()
  console.log(`Donkey Dapp Deployed to: ${donkey.address}`)

  const vulture = await Token.deploy("Vulture VR", "VVR", "20000")
  await vulture.deployed()
  console.log(`Vulture VR Deployed to: ${vulture.address}`)

  const duck = await Token.deploy("Duck DAO", "DUCK", "1150000000")
  await duck.deployed()
  console.log(`Duck DAO Deployed to: ${duck.address}`)

  const exchange = await Exchange.deploy(accounts[1].address, 10)
  await exchange.deployed()
  console.log(`Exchange Deployed to: ${exchange.address}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
