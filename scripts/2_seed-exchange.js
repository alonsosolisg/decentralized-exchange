const { ethers } = require("hardhat")
const config = require("../src/config.json")

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}

const wait = (seconds) => {
    const milliseconds = seconds * 1000
    return new Promise(resolve => setTimeout(resolve,milliseconds))
}

async function main() {
    const accounts = await ethers.getSigners()

    const { chainId } = await ethers.provider.getNetwork()
    console.log(`Using chainId: ${chainId}`)

    //Fetch Tokens
    const Elephant = await ethers.getContractAt('Token', config[chainId].Elephant.address)
    console.log(`Token Fetched: ${Elephant.address}`)

    const Shark = await ethers.getContractAt('Token', config[chainId].Shark.address)
    console.log(`Token Fetched: ${Shark.address}`)

    const Tiger = await ethers.getContractAt('Token', config[chainId].Tiger.address)
    console.log(`Token Fetched: ${Tiger.address}`)
    
    const Wolf = await ethers.getContractAt('Token', config[chainId].Wolf.address)
    console.log(`Token Fetched: ${Wolf.address}`)

    const Dolphin = await ethers.getContractAt('Token', config[chainId].Dolphin.address)
    console.log(`Token Fetched: ${Dolphin.address}`)

    const Fox = await ethers.getContractAt('Token', config[chainId].Fox.address)
    console.log(`Token Fetched: ${Fox.address}`)

    const Camel = await ethers.getContractAt('Token', config[chainId].Camel.address)
    console.log(`Token Fetched: ${Camel.address}`)

    const Platypus = await ethers.getContractAt('Token', config[chainId].Platypus.address)
    console.log(`Token Fetched: ${Platypus.address}`)

    const Cat = await ethers.getContractAt('Token', config[chainId].Cat.address)
    console.log(`Token Fetched: ${Cat.address}`)

    const Cow = await ethers.getContractAt('Token', config[chainId].Cow.address)
    console.log(`Token Fetched: ${Cow.address}`)

    const Iguana = await ethers.getContractAt('Token', config[chainId].Iguana.address)
    console.log(`Token Fetched: ${Iguana.address}`)

    const Needlefish = await ethers.getContractAt('Token', config[chainId].Needlefish.address)
    console.log(`Token Fetched: ${Needlefish.address}`)

    const Dog = await ethers.getContractAt('Token', config[chainId].Dog.address)
    console.log(`Token Fetched: ${Dog.address}`)

    const Goat = await ethers.getContractAt('Token', config[chainId].Goat.address)
    console.log(`Token Fetched: ${Goat.address}`)

    const Fish = await ethers.getContractAt('Token', config[chainId].Fish.address)
    console.log(`Token Fetched: ${Fish.address}`)

    const Scorpion = await ethers.getContractAt('Token', config[chainId].Scorpion.address)
    console.log(`Token Fetched: ${Scorpion.address}`)

    const Donkey = await ethers.getContractAt('Token', config[chainId].Donkey.address)
    console.log(`Token Fetched: ${Donkey.address}`)

    const Vulture = await ethers.getContractAt('Token', config[chainId].Vulture.address)
    console.log(`Token Fetched: ${Vulture.address}`)

    const Duck = await ethers.getContractAt('Token', config[chainId].Duck.address)
    console.log(`Token Fetched: ${Duck.address}`)

    //Fetch Exchange
    const exchange = await ethers.getContractAt('Exchange', config[chainId].exchange.address)
    console.log(`Exchange Fetched: ${exchange.address}`)

    //Give Tokens To Account[1]
    const sender = accounts[0]
    const receiver = accounts[1]
    let amount = tokens(10000)
    let amount2 = tokens(1000)

    //user1 transfers 10,000 Stable Shark
    let transaction, result
    transaction = await Shark.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} SHK from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 1,000 Tiger Tokens
    transaction = await Tiger.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount2} TIG from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Wrapped Wolf
    transaction = await Wolf.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} WLF from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Dolphin Dai
    transaction = await Dolphin.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} DDAI from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 1,000 Fungible Fox
    transaction = await Fox.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount2} FOX from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Camel Classic
    transaction = await Camel.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} CAM from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Platypus Protocol
    transaction = await Platypus.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} PLA from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Cow Coin
    transaction = await Cow.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} COW from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Cat Cash
    transaction = await Cat.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} CAT from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Iguana Infinity
    transaction = await Iguana.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} IGI from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Needlefish Network
    transaction = await Needlefish.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} NEE from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Dog Dollar
    transaction = await Dog.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} DOG from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Goat Gold
    transaction = await Goat.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} GOAT from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Fish Finance
    transaction = await Fish.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} FISH from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Scorpion Swap
    transaction = await Scorpion.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} SCP from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Donkey Dapp
    transaction = await Donkey.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} DONK from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Vulture VR
    transaction = await Vulture.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} VVR from ${sender.address} to ${receiver.address}\n`)
    //user1 transfers 10,000 Duck DAO
    transaction = await Duck.connect(sender).transfer(receiver.address, amount)
    console.log(`Transferred ${amount} DUCK from ${sender.address} to ${receiver.address}\n`)

    //Set Up Exchange Users
    const user1 = accounts[0]
    const user2 = accounts[1]
    amount = tokens(10000)

    //User1 approves 10,000 Elephant Exchange
    transaction = await Elephant.connect(user1).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} ELPH from ${user1.address}`)

    //User1 deposits 10,000 Elephant Exchange
    transaction = await exchange.connect(user1).depositToken(Elephant.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} ELPH from ${user1.address}\n`)

    //User2 approves Stable Shark
    transaction = await Shark.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} SHK from ${user2.address}`)
    //User2 deposits 10,000 Stable Shark
    transaction = await exchange.connect(user2).depositToken(Shark.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} SHK from ${user2.address}\n`)

    //User2 approves Wrapped Wolf
    transaction = await Wolf.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} WLF from ${user2.address}`)
    //User2 deposits 10,000 Wrapped Wolf
    transaction = await exchange.connect(user2).depositToken(Wolf.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} WLF from ${user2.address}\n`)

    //User2 approves Tiger Token
    transaction = await Tiger.connect(user2).approve(exchange.address, amount2)
    await transaction.wait()
    console.log(`Approved ${amount2} TIG from ${user2.address}`)
    //User2 deposits 1,000 Tiger Token
    transaction = await exchange.connect(user2).depositToken(Tiger.address, amount2)
    await transaction.wait()
    console.log(`Deposited ${amount2} TIG from ${user2.address}\n`)

    //User2 approves Dolphin Dai
    transaction = await Dolphin.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} DDAI from ${user2.address}`)
    //User2 deposits 10,000 Dolphin Dai
    transaction = await exchange.connect(user2).depositToken(Dolphin.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} DDAI from ${user2.address}\n`)

    //User2 approves Fungible Fox
    transaction = await Fox.connect(user2).approve(exchange.address, amount2)
    await transaction.wait()
    console.log(`Approved ${amount2} FOX from ${user2.address}`)
    //User2 deposits 1,000 Fungible Fox
    transaction = await exchange.connect(user2).depositToken(Fox.address, amount2)
    await transaction.wait()
    console.log(`Deposited ${amount2} FOX from ${user2.address}\n`)

    //User2 approves Camel Classic
    transaction = await Camel.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} CAM from ${user2.address}`)
    //User2 deposits 10,000 Camel Classic
    transaction = await exchange.connect(user2).depositToken(Camel.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} CAM from ${user2.address}\n`)

    //User2 approves Platypus Protocol
    transaction = await Platypus.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} PLA from ${user2.address}`)
    //User2 deposits 10,000 Platypus Protocol
    transaction = await exchange.connect(user2).depositToken(Platypus.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} PLA from ${user2.address}\n`)

    //User2 approves Cat Cash
    transaction = await Cat.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} CAT from ${user2.address}`)
    //User2 deposits 10,000 Cat Cash
    transaction = await exchange.connect(user2).depositToken(Cat.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} CAT from ${user2.address}\n`)

    //User2 approves Cow Coin
    transaction = await Cow.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} COW from ${user2.address}`)
    //User2 deposits 10,000 Cow Coin
    transaction = await exchange.connect(user2).depositToken(Cow.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} COW from ${user2.address}\n`)

    //User2 approves Iguana Infinity
    transaction = await Iguana.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} IGI from ${user2.address}`)
    //User2 deposits 10,000 Iguana Infinity
    transaction = await exchange.connect(user2).depositToken(Iguana.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} IGI from ${user2.address}\n`)

    //User2 approves Needlefish Network
    transaction = await Needlefish.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} NEE from ${user2.address}`)
    //User2 deposits 10,000 Needlefish Network
    transaction = await exchange.connect(user2).depositToken(Needlefish.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} NEE from ${user2.address}\n`)

    //User2 approves Dog Dollar
    transaction = await Dog.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} DOG from ${user2.address}`)
    //User2 deposits 10,000 Dog Dollar
    transaction = await exchange.connect(user2).depositToken(Dog.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} DOG from ${user2.address}\n`)

    //User2 approves Goat Gold
    transaction = await Goat.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} GOAT from ${user2.address}`)
    //User2 deposits 10,000 Goat Gold
    transaction = await exchange.connect(user2).depositToken(Goat.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} GOAT from ${user2.address}\n`)

    //User2 approves Fish Finance
    transaction = await Fish.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} FISH from ${user2.address}`)
    //User2 deposits 10,000 Fish Finance
    transaction = await exchange.connect(user2).depositToken(Fish.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} FISH from ${user2.address}\n`)

    //User2 approves Scorpion Swap
    transaction = await Scorpion.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} SCP from ${user2.address}`)
    //User2 deposits 10,000 Scorpion Swap
    transaction = await exchange.connect(user2).depositToken(Scorpion.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} SCP from ${user2.address}\n`)

    //User2 approves Donkey Dapp
    transaction = await Donkey.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} DONK from ${user2.address}`)
    //User2 deposits 10,000 Donkey Dapp
    transaction = await exchange.connect(user2).depositToken(Donkey.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} DONK from ${user2.address}\n`)

    //User2 approves Vulture VR
    transaction = await Vulture.connect(user2).approve(exchange.address, amount2)
    await transaction.wait()
    console.log(`Approved ${amount2} VVR from ${user2.address}`)
    //User2 deposits 10,000 Vulture VR
    transaction = await exchange.connect(user2).depositToken(Vulture.address, amount2)
    await transaction.wait()
    console.log(`Deposited ${amount2} VVR from ${user2.address}\n`)

    //User2 approves Duck DAO
    transaction = await Duck.connect(user2).approve(exchange.address, amount)
    await transaction.wait()
    console.log(`Approved ${amount} DUCK from ${user2.address}`)
    //User2 deposits 10,000 Duck DAO
    transaction = await exchange.connect(user2).depositToken(Duck.address, amount)
    await transaction.wait()
    console.log(`Deposited ${amount} DUCK from ${user2.address}\n`)

      //------------------------//
     // Seed a Cancelled Order //
    //------------------------//

    //User1 makes order to get tokens
    let orderId
    transaction = await exchange.connect(user1).makeOrder(Shark.address, tokens(100), Elephant.address, tokens(5)) 
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //User1 cancels order
    orderId = result.events[0].args.id
    transaction = await exchange.connect(user1).cancelOrder(orderId)
    result = await transaction.wait()
    console.log(`Cancelled order from ${user1.address}`)

    //Wait 1 second
    await wait(1)

      //--------------------//
     // Seed Filled Orders //
    //--------------------//

    //User1 makes order
    transaction = await exchange.connect(user1).makeOrder(Shark.address, tokens(100), Elephant.address, tokens(10)) 
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //User2 fills order
    orderId = result.events[0].args.id
    transaction = await exchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)

    //Wait 1 second
    await wait(1)

    //User1 makes another order
    transaction = await exchange.connect(user1).makeOrder(Shark.address, tokens(50), Elephant.address, tokens(15)) 
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //User2 fills the order again
    orderId = result.events[0].args.id
    transaction = await exchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)

    //Wait 1 second
    await wait(1)

    //User1 makes final order
    transaction = await exchange.connect(user1).makeOrder(Shark.address, tokens(200), Elephant.address, tokens(20)) 
    result = await transaction.wait()
    console.log(`Made order from ${user1.address}`)

    //User2 fills the order again
    orderId = result.events[0].args.id
    transaction = await exchange.connect(user2).fillOrder(orderId)
    result = await transaction.wait()
    console.log(`Filled order from ${user1.address}\n`)

    //Wait 1 second
    await wait(1)

      //------------------//
     // Seed Open Orders //
    //------------------//

    //User1 makes orders for all tokens
    for(let i = 1; i <= 5; i++) {
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Shark.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Tiger.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Wolf.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Dolphin.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Fox.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Camel.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Platypus.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Cat.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Cow.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Iguana.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Needlefish.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Dog.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Goat.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Fish.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Scorpion.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Donkey.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Vulture.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user1).makeOrder(Duck.address, tokens(i), Elephant.address, tokens(10))
        result = transaction.wait()
        console.log(`Made order from ${user1.address}`)
        //Wait 1 second
        await wait(1)
    }

    //User2 makes orders for all tokens
    for(let i = 1; i <= 5; i++) {
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Shark.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Tiger.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Wolf.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Dolphin.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Fox.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Camel.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Platypus.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Cat.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Cow.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Iguana.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Needlefish.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Dog.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Goat.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Fish.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Scorpion.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Donkey.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Vulture.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
        //Transaction logic
        transaction = await exchange.connect(user2).makeOrder(Elephant.address, tokens(10), Duck.address, tokens(i))
        result = transaction.wait()
        console.log(`Made order from ${user2.address}`)
        //Wait 1 second
        await wait(1)
    }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
