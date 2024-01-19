// CONSTRUCTORS

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
    constructor (weaponName, weaponType, weaponWeight, weaponDamageDice, weaponDamageBonus, weaponDescription) {
        this.weaponName = weaponName // str
        this.weaponType = weaponType // str (sword, spear etc)
        this.weaponWeight = weaponWeight // str (Light/Medium/Heavy)
        this.weaponDamageDice = weaponDamageDice // array w/2 elems: #dice & dice value e.g. [2,4] for 2d4
        this.weaponDamageBonus = weaponDamageBonus // int
        this.weaponDescription = weaponDescription // str
    }

    getWeaponDetails() {
        return [
            "Name: " + this.weaponName,
            "Type: " + this.weaponType,
            "Weight: " + this.weaponWeight,
            "Damage: " + this.weaponDamageDice[0] + "d" + this.weaponDamageDice[1] + "+" + this.weaponDamageBonus,
            "Description: " + this.weaponDescription
        ]
    }
}


// WEAPON LIST
const lvlOneDagger = new Weapon("Rusty Dagger", "Dagger", "Light", [1,4], 4, "placeholder-description")
const lvlOneSpear = new Weapon("Crooked Spear", "Spear", "Light", [1,4], 4, "placeholder-description")
const lvlOneSword = new Weapon("Blunt Sword", "Sword", "Medium", [1,8], 2, "placeholder-description")
const lvlOneStaff = new Weapon("Splintered Staff", "Staff", "Medium", [1,8], 2, "placeholder-description")
const lvlOneWarhammer = new Weapon("Rusty Warhammer", "Warhammer", "Heavy", [1,12], 0, "placeholder-description")
const lvlOneGreataxe = new Weapon("Chipped Greataxe", "Greataxe", "Heavy", [1,12], 0, "placeholder-description")
const lvlTwoRapier = new Weapon("Steel Rapier", "Rapier", "Light", [2,4], 8, "placeholder-description")
const lvlTwoDagger = new Weapon("Iron Dagger", "Dagger", "Light", [2,4], 8, "placeholder-description")
const lvlTwoSword = new Weapon("Iron Sword", "Sword", "Medium", [2,8], 4, "placeholder-description")
const lvlTwoMaul = new Weapon("Spiked Maul", "Maul", "Medium", [2,8], 4, "placeholder-description")
const lvlTwoHalberd = new Weapon("Iron Halberd", "Halberd", "Heavy", [2,12], 0, "placeholder-description")
const lvlTwoGreataxe = new Weapon("Sharpened Greataxe", "Greataxe", "Heavy", [2,12], 0, "placeholder-description")
const lvlThreeRapier = new Weapon("Duelist's Rapier", "Rapier", "Light", [3,4], 12, "placeholder-description")
const lvlThreeSpear = new Weapon("Centurion's Spear", "Spear", "Light", [3,4], 12, "placeholder-description")
const lvlThreeFlail = new Weapon("Berserker's Flail", "Flail", "Medium", [3,8], 6, "placeholder-description")
const lvlThreeStaff = new Weapon("Shaolin Staff", "Staff", "Medium", [3,8], 6, "placeholder-description")
const lvlThreeWarhammer = new Weapon("Captain's Warhammer", "Warhammer", "Heavy", [3,12], 0, "placeholder-description")
const lvlThreeHalberd = new Weapon("Viking Halberd", "Halberd", "Heavy", [3,12], 0, "placeholder-description")
const lvlFourDagger = new Weapon("Flame Dagger", "Dagger", "Light", [4,4], 16, "placeholder-description")
const lvlFourSpear = new Weapon("Lightning Spear", "Spear", "Light", [4,4], 16, "placeholder-description")
const lvlFourSword = new Weapon("Shadow Sword", "Sword", "Medium", [4,8], 8, "placeholder-description")
const lvlFourStaff = new Weapon("Radiant Staff", "Staff", "Medium", [4,8], 8, "placeholder-description")
const lvlFourWarhammer = new Weapon("Tempest Hammer", "Warhammer", "Heavy", [4,12], 0, "placeholder-description")
const lvlFourGreataxe = new Weapon("Tsunami Greataxe", "Greataxe", "Heavy", [4,12], 0, "placeholder-description")
const lvlFiveRapier = new Weapon("Forgotten Soul's Rapier", "Rapier", "Light", [5,4], 20, "placeholder-description")
const lvlFiveDagger = new Weapon("Dagger of The Wandering Heart", "Dagger", "Light", [5,4], 20, "placeholder-description")
const lvlFiveFlail = new Weapon("Flail of the Nine Hells", "Flail", "Medium", [5,8], 10, "placeholder-description")
const lvlFiveMaul = new Weapon("Maul of the Astral Plane", "Maul", "Medium", [5,8], 10, "placeholder-description")
const lvlFiveHalberd = new Weapon("Eldritch Halberd", "Halberd", "Heavy", [5,12], 0, "placeholder-description")
const lvlFiveGreataxe = new Weapon("Greataxe of the Old Guard", "Greataxe", "Heavy", [5,12], 0, "placeholder-description")
const lvlSixDagger = new Weapon("Fang", "Dagger", "Light", [6,4], 24, "placeholder-description")
const lvlSixSpear = new Weapon("Tiger's Bite", "Spear", "Light", [6,4], 24, "placeholder-description")
const lvlSixRapier = new Weapon("Stem The Tide", "Rapier", "Light", [6,4], 24, "placeholder-description")
const lvlSixSword = new Weapon("Angel's Song", "Sword", "Medium", [6,8], 12, "placeholder-description")
const lvlSixMaul = new Weapon("Vanguard", "Maul", "Medium", [6,8], 12, "placeholder-description")
const lvlSixFlail = new Weapon("Roaring Wind", "Flail", "Medium", [6,8], 12, "placeholder-description")
const lvlSixStaff = new Weapon("Cherry Blossom", "Staff", "Medium", [6,8], 12, "placeholder-description")
const lvlSixWarhammer = new Weapon("Oakenfist", "Warhammer", "Heavy", [6,12], 0, "placeholder-description")
const lvlSixHalberd = new Weapon("Giantsbane", "Halberd", "Heavy", [6,12], 0, "placeholder-description")
const lvlSixGreataxe = new Weapon("Pestilence", "Greataxe", "Heavy", [6,12], 0, "placeholder-description")