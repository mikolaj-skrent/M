const character = {
    name: "John Marston",
    role: "Outlaw",
    level: 5,
    skills: ["Deadeye", "Rob", "Gunpoint"],
    equipment: {
        weapons: ["Revolver", "Hunting knife"],
        armor: "Poncho set",
        items: ["Snake toic", "Lasso", "Dynamite"],
    }
}

function createCharacter(userCallSign, userRole, userCharacterLevel, userCharacterEquipment) {
    return {
        callsign: userCallSign,
        role: userRole,
        characterLevel: userCharacterLevel,
        characterEquipment: userCharacterEquipment
    }
}

let callSign = "Legolas"
let role = "Ranger"
let characterLevel = 6
let characterEquipment = {
    weapons: ["Bow", "Dagger"],
    armor: "Light ranger armor",
    items: ["Arrows", "Healing potion"],
}



let sword = "sword"
let mace = "mace"

function addItem(character, item) {
(characterEquipment(weapons)) + sword 



}







//console.log(character)
console.log(createCharacter(callSign, role, characterLevel, characterEquipment))