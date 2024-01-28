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
            if (attackRoll >= offensiveFighter.critThreshold) {
                damageRoll = rollDice(offensiveFighter.damageDice[0] * 2, offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
                actionOutcome.outcomeText = "Critical Hit."
            } else if (attackRoll + offensiveFighter.attackBonus >= defensiveFighter.armourThreshold) {
                damageRoll = rollDice(offensiveFighter.damageDice[0], offensiveFighter.damageDice[1]) + offensiveFighter.damageBonus
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
                offensiveFighter.kidneyShotIsAvailable = false
                defensiveFighter.setCondition("stunned", true)
                const extraAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.outcomeText = "Stunned condition inflicted. " + extraAttack[2].outcomeText
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
                offensiveFighter.smokeBombIsAvailable = false
                defensiveFighter.setCondition("blinded", true)
                const extraAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.outcomeText = "Blinded condition inflicted. " + extraAttack[2].outcomeText
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
                offensiveFighter.venomStrikeIsAvailable = false
                defensiveFighter.setCondition("poisoned", true)
                const extraAttack = takeAction(offensiveFighter, defensiveFighter, "attack")
                actionOutcome.outcomeText = "Poisoned condition inflicted. " + extraAttack[2].outcomeText
            }
            break


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