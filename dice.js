let rollDice = (numOfDice, diceValue) => {
    let totalRoll = 0
    for (i = 0; i < numOfDice; i++) {
        totalRoll += Math.floor(1 + Math.random() * diceValue)
    }
    return totalRoll
}

module.exports = rollDice;