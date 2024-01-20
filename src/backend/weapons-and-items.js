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
const lvlOneDagger = new Weapon("Rusty Dagger", "Dagger", "Light", [1,4], 4, "A rusty dagger, it'll do in a pinch.")
const lvlOneSpear = new Weapon("Crooked Spear", "Spear", "Light", [1,4], 4, "A slightly crooked spear, it looks like it's a bit worse for wear.")
const lvlOneSword = new Weapon("Blunt Sword", "Sword", "Medium", [1,8], 2, "This sword is about as sharp as a butter knife.")
const lvlOneStaff = new Weapon("Splintered Staff", "Staff", "Medium", [1,8], 2, "The splinters are the most dangerous thing about this staff.")
const lvlOneWarhammer = new Weapon("Rusty Warhammer", "Warhammer", "Heavy", [1,12], 0, "Your opponents will need a tetanus jab after fighting you.")
const lvlOneGreataxe = new Weapon("Chipped Greataxe", "Greataxe", "Heavy", [1,12], 0, "The blade of this axe could do with a good sharpen.")
const lvlTwoRapier = new Weapon("Steel Rapier", "Rapier", "Light", [2,4], 8, "A lightweight and balanced finesse weapon.")
const lvlTwoDagger = new Weapon("Iron Dagger", "Dagger", "Light", [2,4], 8, "Not fancy, but still effective.")
const lvlTwoSword = new Weapon("Iron Sword", "Sword", "Medium", [2,8], 4, "'This is a good sword.'")
const lvlTwoMaul = new Weapon("Spiked Maul", "Maul", "Medium", [2,8], 4, "Big bark, big bite.")
const lvlTwoHalberd = new Weapon("Iron Halberd", "Halberd", "Heavy", [2,12], 0, "A piercing & a slashing weapon combined into one!")
const lvlTwoGreataxe = new Weapon("Sharpened Greataxe", "Greataxe", "Heavy", [2,12], 0, "The blade of this axe has been carefully honed to a razor edge.")
const lvlThreeRapier = new Weapon("Duelist's Rapier", "Rapier", "Light", [3,4], 12, "Designed never to lose one-on-one.")
const lvlThreeSpear = new Weapon("Centurion's Spear", "Spear", "Light", [3,4], 12, "Lead your legion from the front with this trusty spear.")
const lvlThreeFlail = new Weapon("Berserker's Flail", "Flail", "Medium", [3,8], 6, "AAAHHHHHHRRRRRRRRRRRGGGGGGGGGGG!!!")
const lvlThreeStaff = new Weapon("Shaolin Staff", "Staff", "Medium", [3,8], 6, "For when the diplomatic approach fails.")
const lvlThreeWarhammer = new Weapon("Captain's Warhammer", "Warhammer", "Heavy", [3,12], 0, "This hammer commands respect, especially when it's covered in blood and brains.")
const lvlThreeHalberd = new Weapon("Viking Halberd", "Halberd", "Heavy", [3,12], 0, "Unleash your inner Viking!")
const lvlFourDagger = new Weapon("Flame Dagger", "Dagger", "Light", [4,4], 16, "Translucent flames silently lick the blade of this dagger.")
const lvlFourSpear = new Weapon("Lightning Spear", "Spear", "Light", [4,4], 16, "Pale blue energy crackles across the head and shaft of this spear.")
const lvlFourSword = new Weapon("Shadow Sword", "Sword", "Medium", [4,8], 8, "Dark shadow envelopes the weilder of this sword.")
const lvlFourStaff = new Weapon("Radiant Staff", "Staff", "Medium", [4,8], 8, "A warm white light emits from the weilder of this staff.")
const lvlFourWarhammer = new Weapon("Tempest Hammer", "Warhammer", "Heavy", [4,12], 0, "Thunder echoes when this hammer strikes a foe.")
const lvlFourGreataxe = new Weapon("Tsunami Greataxe", "Greataxe", "Heavy", [4,12], 0, "The roar of winds & waves can be heard when this axe strikes a foe.")
const lvlFiveRapier = new Weapon("Forgotten Soul's Rapier", "Rapier", "Light", [5,4], 20, "Crafted by a master swordsman of ages past, now lost to time.")
const lvlFiveDagger = new Weapon("Dagger of The Wandering Heart", "Dagger", "Light", [5,4], 20, "Legend says anyone who betrays the owner of this dagger will eventually meet their end by its blade.")
const lvlFiveFlail = new Weapon("Flail of the Nine Hells", "Flail", "Medium", [5,8], 10, "Infused with the fire & brimstone of hell, distant screams can be heard when this flail is swung.")
const lvlFiveMaul = new Weapon("Maul of the Astral Plane", "Maul", "Medium", [5,8], 10, "Infused with the power of the cosmos, bright starfire & inky void drip from the head of this maul.")
const lvlFiveHalberd = new Weapon("Eldritch Halberd", "Halberd", "Heavy", [5,12], 0, "The ancient runes and patterns inscribed on this halberd can send lesser men mad, best not to look for too long.")
const lvlFiveGreataxe = new Weapon("Greataxe of the Old Guard", "Greataxe", "Heavy", [5,12], 0, "This axe has been a stalwart companion to great warriors in countless battles.")
const lvlSixDagger = new Weapon("Fang", "Dagger", "Light", [6,4], 24, "Bite hard & fast.")
const lvlSixSpear = new Weapon("Tiger's Bite", "Spear", "Light", [6,4], 24, "A tiger always catches their prey.")
const lvlSixRapier = new Weapon("Stem The Tide", "Rapier", "Light", [6,4], 24, "Hold them back, & let none pass.")
const lvlSixSword = new Weapon("Angel's Song", "Sword", "Medium", [6,8], 12, "Mercy takes many forms.")
const lvlSixMaul = new Weapon("Vanguard", "Maul", "Medium", [6,8], 12, "First into the fray.")
const lvlSixFlail = new Weapon("Roaring Wind", "Flail", "Medium", [6,8], 12, "The might of the Anemoi.")
const lvlSixStaff = new Weapon("Cherry Blossom", "Staff", "Medium", [6,8], 12, "Beauty & ferocity in equal measure.")
const lvlSixWarhammer = new Weapon("Oakenfist", "Warhammer", "Heavy", [6,12], 0, "Never yield, no matter the odds.")
const lvlSixHalberd = new Weapon("Giantsbane", "Halberd", "Heavy", [6,12], 0, "Cut them down to size.")
const lvlSixGreataxe = new Weapon("Pestilence", "Greataxe", "Heavy", [6,12], 0, "Spread the rot.")

module.exports = {
    lvlOneDagger,lvlOneSpear,lvlOneSword,lvlOneStaff,lvlOneWarhammer,lvlOneGreataxe,
    lvlTwoRapier,lvlTwoDagger,lvlTwoSword,lvlTwoMaul,lvlTwoHalberd,lvlTwoGreataxe,
    lvlThreeRapier,lvlThreeSpear,lvlThreeFlail,lvlThreeStaff,lvlThreeWarhammer,lvlThreeHalberd,
    lvlFourDagger,lvlFourSpear,lvlFourSword,lvlFourStaff,lvlFourWarhammer,lvlFourGreataxe,
    lvlFiveRapier,lvlFiveDagger,lvlFiveFlail,lvlFiveMaul,lvlFiveHalberd,lvlFiveGreataxe,
    lvlSixDagger,lvlSixSpear,lvlSixRapier,lvlSixSword,lvlSixMaul,lvlSixFlail,lvlSixStaff,lvlSixWarhammer,lvlSixHalberd,lvlSixGreataxe
}