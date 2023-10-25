const rollDice = require("./dice.js")

test ("test individual d1s", () => {
    let testRolls = []

    for (let i = 0; i < 100; i++) {
        testRolls.push(rollDice(1,1))
    }

    expect(Math.min(...testRolls)).toBe(1)
    expect(Math.max(...testRolls)).toBe(1)
})

test ("test individual d2s", () => {
    let testRolls = []

    for (let i = 0; i < 100; i++) {
        testRolls.push(rollDice(1,2))
    }

    expect(Math.min(...testRolls)).toBeGreaterThanOrEqual(1)
    expect(Math.max(...testRolls)).toBeLessThanOrEqual(2)    
})

test ("test multiple d100s", () => {
    let testRolls = []

    for (let i = 0; i < 100; i++) {
        testRolls.push(rollDice(100,100))
    }

    expect(Math.min(...testRolls)).toBeGreaterThanOrEqual(100)
    expect(Math.max(...testRolls)).toBeLessThanOrEqual(10000)    
})