const rollDice = require("./dice.js")

/*
Notes:
while loop checking for valid action will go outside takeAction method inside the main battle method containing the structure for alternating turns
add a conditionRecovery method that gets called at the start of every turn: chance for offensiveFighter to roll to break each condition they have, adding their recovery bonus, DC 5
*/

let takeAction = (offensiveFighter, defensiveFighter, action) => {
    let actionIsValid = true
    let invalidActionMessage = ""
    let actionOutcome = {
        actionChosen: "",
        outcomeText: "",
        attackRoll: 0,
        damageRoll: 0,
        hpRegained: 0,
        conditionInflicted: "",
        hpStolen: 0
    }

    switch (action) {
        // Basic Attack Action
        case "attack":
            actionOutcome.actionChosen = "Attack"
            let attackRoll = rollDice(1,6)
            let damageRoll = 0
            if (attackRoll >= offensiveFighter.critThreshold + offensiveFighter.critThresholdBuff) {
                damageRoll = rollDice(2 * (offensiveFighter.damageDice[0] + offensiveFighter.damageDiceBuff), offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
                actionOutcome.outcomeText = "Critical Hit."
            } else if (attackRoll + offensiveFighter.attackBonus + offensiveFighter.attackBonusBuff >= defensiveFighter.armourThreshold + defensiveFighter.armourThresholdBuff) {
                damageRoll = rollDice(offensiveFighter.damageDice[0] + offensiveFighter.damageDiceBuff, offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
                actionOutcome.outcomeText = "Hit."
            } else {
                actionOutcome.outcomeText = "Miss."
            }
            defensiveFighter.currentHealthPoints -= damageRoll
            actionOutcome.attackRoll = attackRoll
            actionOutcome.damageRoll = damageRoll
            break
        
        // Defensive Actions
        case "rallyingCry":
            actionOutcome.actionChosen = "Rallying Cry"
            if (offensiveFighter.rallyingCry !== true) {
                actionIsValid = false
                invalidActionMessage = "Rallying Cry not unlocked."
            } else if (offensiveFighter.rallyingCryIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Rallying Cry not available, ability has been used."
            } else {
                offensiveFighter.rallyingCryIsAvailable = false
                actionOutcome.hpRegained = Math.ciel(0.4 * offensiveFighter.maxHealthPoints) - offensiveFighter.currentHealthPoints
                offensiveFighter.currentHealthPoints = Math.ciel(0.4 * offensiveFighter.maxHealthPoints)
                actionOutcome.outcomeText = "HP restored to 40% of maximum."
            }
            break
        case "perfectRecovery":
            actionOutcome.actionChosen = "Perfect Recovery"
            if (offensiveFighter.perfectRecovery !== true) {
                actionIsValid = false
                invalidActionMessage = "Perfect Recovery not unlocked."
            } else if (offensiveFighter.perfectRecoveryIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Perfect Recovery not available, ability has been used."
            } else {
                offensiveFighter.perfectRecoveryIsAvailable = false
                actionOutcome.outcomeText = "All conditions removed."
                offensiveFighter.setCondition("blinded", false)
                offensiveFighter.setCondition("stunned", false)
                offensiveFighter.setCondition("poisoned", false)
            }
            break
        
        // Inflict Condition Actions
        case "kidneyShot":
            actionOutcome.actionChosen = "Kidney Shot"
            if (offensiveFighter.kidneyShot !== true) {
                actionIsValid = false
                invalidActionMessage = "Kidney Shot not unlocked."
            } else if (offensiveFighter.kidneyShotIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Kidney Shot not available, ability has been used."
            } else {
                const kidneyShotAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.attackRoll = kidneyShotAttack[2].attackRoll
                actionOutcome.damageRoll = kidneyShotAttack[2].damageRoll
                actionOutcome.outcomeText = kidneyShotAttack[2].outcomeText
                if (kidneyShotAttack[2].outcomeText !== "Miss!") {
                    offensiveFighter.kidneyShotIsAvailable = false
                    defensiveFighter.setCondition("stunned", true)
                    actionOutcome.outcomeText = "Stunned condition inflicted. " + kidneyShotAttack[2].outcomeText
                    actionOutcome.conditionInflicted = "Stunned"
                }
            }
            break
        case "smokeBomb":
            actionOutcome.actionChosen = "Smoke Bomb"
            if (offensiveFighter.smokeBomb !== true) {
                actionIsValid = false
                invalidActionMessage = "Smoke Bomb not unlocked."
            } else if (offensiveFighter.smokeBombIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Smoke Bomb not available, ability has been used."
            } else {
                const smokeBombAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.attackRoll = smokeBombAttack[2].attackRoll
                actionOutcome.damageRoll = smokeBombAttack[2].damageRoll
                actionOutcome.outcomeText = smokeBombAttack[2].outcomeText
                if (smokeBombAttack[2].outcomeText !== "Miss!") {
                    offensiveFighter.smokeBombIsAvailable = false
                    defensiveFighter.setCondition("blinded", true)
                    actionOutcome.outcomeText = "Blinded condition inflicted. " + smokeBombAttack[2].outcomeText
                    actionOutcome.conditionInflicted = "Blinded"
                }
            }
            break
        case "venomStrike":
            actionOutcome.actionChosen = "Venom Strike"
            if (offensiveFighter.venomStrike !== true) {
                actionIsValid = false
                invalidActionMessage = "Venom Strike not unlocked."
            } else if (offensiveFighter.venomStrikeIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Venom Strike not available, ability has been used."
            } else {
                const venomStrikeAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.attackRoll = venomStrikeAttack[2].attackRoll
                actionOutcome.damageRoll = venomStrikeAttack[2].damageRoll
                actionOutcome.outcomeText = venomStrikeAttack[2].outcomeText
                if (venomStrikeAttack[2].outcomeText !== "Miss!") {
                    offensiveFighter.venomStrikeIsAvailable = false
                    defensiveFighter.setCondition("poisoned", true)
                    actionOutcome.outcomeText = "Poisoned condition inflicted. " + venomStrikeAttack[2].outcomeText
                    actionOutcome.conditionInflicted = "Poisoned"
                }
            }
            break

        // Modified Attack Actions
        case "swiftStrike":
            actionOutcome.actionChosen = "Swift Strike"
            if (offensiveFighter.swiftStrike !== true) {
                actionIsValid = false
                invalidActionMessage = "Swift Strike not unlocked."
            } else if (offensiveFighter.swiftStrikeIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Swift Strike not available, ability has been used."
            } else {
                offensiveFighter.armourThresholdBuff -= 2
                const swiftStrikeAttack1 = takeAction(offensiveFighter, defensiveFighter, "attack")
                const swiftStrikeAttack2 = takeAction(offensiveFighter, defensiveFighter, "attack")
                const swiftStrikeAttack3 = takeAction(offensiveFighter, defensiveFighter, "attack")
                // not sure yet how to format actionOutcome.attackRoll: leave as 0 / array of all 3 rolls / string of all 3 rolls?
                actionOutcome.attackRoll = 999
                actionOutcome.damageRoll = swiftStrikeAttack1[2].damageRoll + swiftStrikeAttack2[2].damageRoll + swiftStrikeAttack3[2].damageRoll
                actionOutcome.outcomeText = swiftStrikeAttack1[2].outcomeText + " " + swiftStrikeAttack2[2].outcomeText + " " + swiftStrikeAttack3[2].outcomeText
            }
            break
        case "wildStrike":
            actionOutcome.actionChosen = "Wild Strike"
            if (offensiveFighter.wildStrike !== true) {
                actionIsValid = false
                invalidActionMessage = "Wild Strike not unlocked."
            } else if (offensiveFighter.wildStrikeIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Wild Strike not available, ability has been used."
            } else {
                offensiveFighter.attackBonusBuff -= 1
                offensiveFighter.damageDiceBuff += 2 * offensiveFighter.damageDice[0]
                const wildStrikeAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                offensiveFighter.attackBonusBuff += 1
                offensiveFighter.damageDiceBuff -= 2 * offensiveFighter.damageDice[0]
                actionOutcome.attackRoll = wildStrikeAttack[2].attackRoll
                actionOutcome.damageRoll = wildStrikeAttack[2].damageRoll
                actionOutcome.outcomeText = wildStrikeAttack[2].outcomeText
                if (wildStrikeAttack[2].outcomeText !== "Miss!") {
                    offensiveFighter.wildStrikeIsAvailable = false
                }
            }
            break

        // Steal HP
        case "vampiricLeach":
            actionOutcome.actionChosen = "Vampiric Leach"
            if (offensiveFighter.vampiricLeach !== true) {
                actionIsValid = false
                invalidActionMessage = "Vampiric Leach not unlocked."
            } else if (offensiveFighter.vampiricLeachIsAvailable !== true) {
                actionIsValid = false
                invalidActionMessage = "Vampiric Leach not available, ability has been used."
            } else {
                let healthStolen = rollDice(offensiveFighter.damageDice[0] + offensiveFighter.damageDiceBuff, offensiveFighter.damageDice[1])
                defensiveFighter.currentHealthPoints -= healthStolen
                offensiveFighter.currentHealthPoints += healthStolen
                actionOutcome.hpStolen = healthStolen
            }
            break

        // Unknown/Invalid Action
        default:
            actionIsValid = false
            invalidActionMessage = "Unknown Action."
    }

    return [offensiveFighter, defensiveFighter, actionOutcome, actionIsValid, invalidActionMessage]
}