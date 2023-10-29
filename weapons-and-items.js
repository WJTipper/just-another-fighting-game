class Item {
    constructor (itemName, statBoostName, statBoostAmount, abilityUnlocked, itemDescription) {
        this.itemName = itemName // str
        this.statBoostName = statBoostName // str or null
        this.statBoostAmount = statBoostAmount // non -ve int
        this.abilityUnlocked = abilityUnlocked // str or null
        this.itemDescription = itemDescription // str or null
    }

    getItemDetails() {
        return [
            "Name: " + this.itemName,
            "Stat Boosted: " + this.statBoostName,
            "Boost Amount: " + this.statBoostAmount,
            "Ability Unlocked: " + this.abilityUnlocked,
            "Description: " + this.itemDescription
        ]
    }
}

class Weapon {
    constructor (weaponName, weaponType, weaponWeight, weaponDamageDice, weaponDescription) {
        this.weaponName = weaponName // str
        this.weaponType = weaponType // str (sword, spear etc)
        this.weaponWeight = weaponWeight // str (Light/Medium/Heavy)
        this.weaponDamageDice = weaponDamageDice // array w/2 elems: #dice & dice value e.g. [2,4] for 2d4
        this.weaponDescription = weaponDescription // str
    }

    getWeaponDetails() {
        return [
            "Name: " + this.weaponName,
            "Type: " + this.weaponType,
            "Weight: " + this.weaponWeight,
            "Damage: " + this.weaponDamageDice[0] + "d" + this.weaponDamageDice[1],
            "Description: " + this.weaponDescription
        ]
    }
}
