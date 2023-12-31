const rollDice = require("./dice.js")

/*
Notes:
while loop checking for valid action will go outside takeAction method inside the main battle method containing the structure for alternating turns
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
            if (attackRoll >= offensiveFighter.critThreshold) {
                damageRoll = rollDice(offensiveFighter.damageDice[0] * 2, offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
                actionOutcome.outcomeText = "Critical Hit"
            } else if (attackRoll + offensiveFighter.attackBonus >= defensiveFighter.armourThreshold) {
                damageRoll = rollDice(offensiveFighter.damageDice[0], offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
                actionOutcome.outcomeText = "Hit"
            } else {
                actionOutcome.outcomeText = "Miss"
            }
            defensiveFighter.currentHealthPoints -= damageRoll
            actionOutcome.attackRoll = attackRoll
            actionOutcome.damageRoll = damageRoll
            break
        
        // Defensive Actions
        case "rallyingCry":
            actionOutcome.actionChosen = "Rallying Cry"
            if (offensiveFighter.rallyingCry != true) {
                actionIsValid = false
                invalidActionMessage = "Rallying Cry not unlocked."
            } else if (offensiveFighter.rallyingCryIsAvailable != true) {
                actionIsValid = false
                invalidActionMessage = "Rallying Cry not available, ability has been used."
            } else {
                actionOutcome.hpRegained = Math.ciel(0.4 * offensiveFighter.maxHealthPoints) - offensiveFighter.currentHealthPoints
                offensiveFighter.currentHealthPoints = Math.ciel(0.4 * offensiveFighter.maxHealthPoints)
            }
            break
        case "perfectRecovery":
            actionOutcome.actionChosen = "Perfect Recovery"
            if (offensiveFighter.perfectRecovery != true) {
                actionIsValid = false
                invalidActionMessage = "Perfect Recovery not unlocked."
            } else if (offensiveFighter.perfectRecoveryIsAvailable != true) {
                actionIsValid = false
                invalidActionMessage = "Perfect Recovery not available, ability has been used."
            } else {
                actionOutcome.outcomeText = "All conditions removed."
                offensiveFighter.isBlinded = false
                offensiveFighter.isStunned = false
                offensiveFighter.isPoisoned = false
            }
            break
        
        // Inflict Condition Actions
        // kidneyShot,venomStrike,smokeBomb


        // Modified Attack Actions
        // swiftStrike,wildStrike,finishingStrike


        // Steal HP
        // vampiricLeach


        // Unknown/Invalid Action
        default:
            actionIsValid = false
            invalidActionMessage = "Unknown Action."
    }

    return [offensiveFighter, defensiveFighter, actionOutcome, actionIsValid, invalidActionMessage]
}