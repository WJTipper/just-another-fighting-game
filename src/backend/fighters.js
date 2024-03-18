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
        this.currentWeapon = null // Weapon object
        this.itemList = [] // list containing Item objects
        // Abilities
        this.rallyingCry = false // bool
        this.perfectRecovery = false // bool
        this.kidneyShot = false // bool
        this.venomStrike = false // bool
        this.smokeBomb = false // bool
        this.swiftStrike = false // bool
        this.wildStrike = false // bool
        this.vampiricLeach = false // bool
        // Ability availability indicators
        this.rallyingCryIsAvailable = false // bool
        this.perfectRecoveryIsAvailable = false // bool
        this.kidneyShotIsAvailable = false // bool
        this.venomStrikeIsAvailable = false // bool
        this.smokeBombIsAvailable = false // bool
        this.swiftStrikeIsAvailable = false // bool
        this.wildStrikeIsAvailable = false // bool
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

    getFighterInventory() {
        return [
            "Current Weapon: " + this.currentWeapon,
            "Items: " + this.itemList
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
        this.vampiricLeachIsAvailable = this.vampiricLeach
    }

    setStat(stat, value) {
        switch(stat) {
            case "fighterName":
                this.fighterName = value.toString()
                break;
            case "attackBonus":
                this.attackBonus = Number.parseInt(value)
                break;
            case "damageDice":
                this.damageDice = value
                break;
            case "damageBonus":
                this.damageBonus = Number.parseInt(value)
                break;
            case "critThreshold":
                if (Number.parseInt(value) >= 5 && Number.parseInt(value) <= 7) {
                    this.critThreshold = Number.parseInt(value)
                }
                break;
            case "maxHealthPoints":
                this.maxHealthPoints = Number.parseInt(value)
                break;
            case "currentHealthPoints":
                this.currentHealthPoints = Number.parseInt(value)
                break;
            case "armourThreshold":
                if (Number.parseInt(value) >= 2 && Number.parseInt(value) <= 5) {
                    this.armourThreshold = Number.parseInt(value)
                }
                break;
            case "resistBonus":
                this.resistBonus = Number.parseInt(value)
                break;
            default:
                break;
        }
    }

    boostStat(stat, value) {
        switch(stat) {
            case "attackBonus":
                this.attackBonus += Number.parseInt(value)
                break;
            case "damageBonus":
                this.damageBonus += Number.parseInt(value)
                break;
            case "maxHealthPoints":
                this.maxHealthPoints += Number.parseInt(value)
                break;
            case "armourThreshold":
                this.armourThreshold += Number.parseInt(value)
                break;
            case "resistBonus":
                this.resistBonus += Number.parseInt(value)
                break;
            default:
                break;
        }
    }

    setCondition(condition, isCondition) {
        switch(condition) {
            case "blinded":
                this.isBlinded = isCondition
                if (isCondition) {
                    this.attackBonusBuff -= 1
                    this.critThresholdBuff += 10
                } else {
                    this.attackBonusBuff += 1
                    this.critThresholdBuff -= 10
                }
                break;
            case "stunned":
                this.isStunned = isCondition
                if (isCondition) {
                    this.armourThresholdBuff -= 1
                } else {
                    this.armourThresholdBuff += 1
                }
                break;
            case "poisoned":
                this.isPoisoned = isCondition
                if (isCondition) {
                    this.damageDiceBuff -= 1
                } else {
                    this.damageDiceBuff += 1
                }
                break;
            default:
                break;
        }
    }

    setWeapon(weapon) {
        // need to test if this implementation works, an alternative implementation is commented out below
        this.currentWeapon = weapon
        this.setStat("damageDice", weapon.weaponDamageDice)
        this.setStat("damageBonus", weapon.weaponDamageBonus)
        // this.damageDice = weapon.weaponDamageDice
        // this.damageBonus = weapon.weaponDamageBonus
    }

    setAbility(ability, isAvailable) {
        switch(ability) {
            case "rallyingCry":
                this.rallyingCry = isAvailable
                break;
            case "perfectRecovery":
                this.perfectRecovery = isAvailable
                break;
            case "kidneyShot":
                this.kidneyShot = isAvailable
                break;
            case "smokeBomb":
                this.smokeBomb = isAvailable
                break;
            case "swiftStrike":
                this.swiftStrike = isAvailable
                break;
            case "wildStrike":
                this.wildStrike = isAvailable
                break;
            case "vampiricLeach":
                this.vampiricLeach = isAvailable
                break;
            default:
                break;
        }
    }

    addItem(item) {
        this.itemList.push(item)
        this.boostStat(item.statBoostName, item.statBoostAmount)
        this.setAbility(item.abilityUnlocked, true)
    }
}
