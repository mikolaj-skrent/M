const postac0 = {
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





function stworzPostac(imie, klasa) {
    let eq = {};
    let skills = [];

    if (klasa === "Warrior") {
        eq = { bron: "sword", zbroja: "iron armor", przedmioty: ["shield", "potion"] };
        skills = ["Slash", "Block"];
    } else if (klasa === "Wizard") {
        eq = { bron: "staff", zbroja: "robe", przedmioty: ["mana potion", "scroll"] };
        skills = ["Fireball", "Magic Shield"];
    }

    return {
        imie: imie,
        klasa: klasa,
        poziom: 1,
        umiejetnosci: skills,
        ekwipunek: eq
    }
}

function dodajPrzedmiot(postac, przedmiot) {
    postac.ekwipunek.przedmioty.push(przedmiot);
}

function nauczUmiejetnosci(postac, skill) {
    if (postac.umiejetnosci.length >= 5) {
        console.log("Nie można nauczyć się więcej niż 5 umiejętności!");
        return;
    }
    postac.umiejetnosci.push(skill);
}

function awansuj(postac) {
    postac.poziom += 6;
}

function opisPostaci(postac) {
    console.log("=== KARTA POSTACI ===");
    console.log("IMIĘ:", postac.imie);
    console.log("KLASA:", postac.klasa);
    console.log("POZIOM:", postac.poziom);
    console.log("UMIEJĘTNOŚCI:", postac.umiejetnosci);
    console.log("BROŃ:", postac.ekwipunek.bron);
    console.log("ZBROJA:", postac.ekwipunek.zbroja);
    console.log("PRZEDMIOTY:", postac.ekwipunek.przedmioty);
    console.log("=====================");
}

// ===== PRZYKŁAD UŻYCIA =====

const postac1 = stworzPostac("Gandalf", "Warrior");
dodajPrzedmiot(postac1, "Magic ring");
dodajPrzedmiot(postac1, "Teleport scroll");
nauczUmiejetnosci(postac1, "Teleportacja");
awansuj(postac1);

opisPostaci(postac1);
console.log(postac0);

