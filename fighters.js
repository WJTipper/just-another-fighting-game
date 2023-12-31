class Fighter {
    constructor (fighterName, attackBonus, damageDice, damageBonus, critThreshold, maxHealthPoints, armourThreshold, resistBonus) {
        // Basic stats
        this.fighterName = fighterName //str
        this.attackBonus = attackBonus // int
        this.damageDice = damageDice // array w/2 elems: #dice & dice value e.g. [2,4] for 2d4
        this.damageBonus = damageBonus // int
        this.critThreshold = critThreshold // int (7,6 or 5)
        this.maxHealthPoints = maxHealthPoints // int
        this.currentHealthPoints = maxHealthPoints // int (hp should be at max when fighter is created)
        this.armourThreshold = armourThreshold // int (2-5)
        this.resistBonus = resistBonus // int
        // Condition Indicators
        this.isBlinded = false // bool
        this.isStunned = false // bool
        this.isPoisoned = false // bool
        // Buffs/Debuffs from Conditions & Abilities
        this.attackBonusBuff = 0 // int: +ve for buff & -ve for debuff
        this.damageDiceBuff = 0 // int: +ve for buff & -ve for debuff
        this.critThresholdBuff = 0 // int: +ve for buff & -ve for debuff
        this.armourThresholdBuff = 0 // int: +ve for buff & -ve for debuff
        // Inventory: weapons & items
        this.currentWeapon = null // tbd how to handle this, probably import items & weapons into this module & set this variable to a weapon object
        this.itemList = []
        // Abilities
        this.rallyingCry = false // bool
        this.perfectRecovery = false // bool
        this.kidneyShot = false // bool
        this.venomStrike = false // bool
        this.smokeBomb = false // bool
        this.swiftStrike = false // bool
        this.wildStrike = false // bool
        this.finishingStrike = false // bool
        this.vampiricLeach = false // bool
        // Ability availability indicators
        this.rallyingCryIsAvailable = false // bool
        this.perfectRecoveryIsAvailable = false // bool
        this.kidneyShotIsAvailable = false // bool
        this.venomStrikeIsAvailable = false // bool
        this.smokeBombIsAvailable = false // bool
        this.swiftStrikeIsAvailable = false // bool
        this.wildStrikeIsAvailable = false // bool
        this.finishingStrikeIsAvailable = false // bool
        this.vampiricLeachIsAvailable = false // bool
    }

    getFighterDetails() {
        return [
            "Name: " + this.fighterName,
            "Attack Bonus: " + this.attackBonus,
            "Damage Dice: " + this.damageDice[0] + "d" + this.damageDice[0],
            "Crit Threshold: " + this.critThreshold,
            "Max Health Points: " + this.maxHealthPoints,
            "Current Health Points: " + this.currentHealthPoints,
            "Armour Threshold: " + this.armourThreshold,
            "Resist Bonus: " + this.resistBonus
        ]
    }

    resetConditionsAndBuffs() {
        this.isBlinded = false
        this.isStunned = false
        this.isPoisoned = false
        this.attackBonusBuff = 0
        this.damageDiceBuff = 0
        this.critThresholdBuff = 0
        this.armourThresholdBuff = 0
    }

    resetAbilityAvailabilityIndicators() {
        this.rallyingCryIsAvailable = this.rallyingCry
        this.perfectRecoveryIsAvailable = this.perfectRecovery
        this.kidneyShotIsAvailable = this.kidneyShot
        this.venomStrikeIsAvailable = this.venomStrike
        this.smokeBombIsAvailable = this.smokeBomb
        this.swiftStrikeIsAvailable = this.swiftStrike
        this.wildStrikeIsAvailable = this.wildStrike
        this.finishingStrikeIsAvailable = this.finishingStrike
        this.vampiricLeachIsAvailable = this.vampiricLeach
    }

    // functions needed: (& tests)
    // getFighterInventory: lists names of weapon & items
    // setStat
    // setWeapon : call setStat for damage
    // setConditionAndDebuff : use this for adding & removing conditions & the associated debuff
    // addItem : pop item name into list & call setStat or unlockAbility depending on item effect
    // unlockAbility
}
