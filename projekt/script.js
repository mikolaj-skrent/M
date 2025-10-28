let age = 34
let yearOfBirth = 1990
const monthOfBirth = "March"
let firstName = "John"
let sureName = "Smith"
const dayOfBirth = 13
const currentYear = 2024


// Function to show chosen birthday 
function showBirthData() {
    console.log("----")
    console.log(monthOfBirth)
    console.log(dayOfBirth)
    console.log(yearOfBirth)
    console.log("----")
}


// Function to show personal info
function showPerson() {
    console.log("----")
    console.log(firstName)
    console.log(sureName)
    console.log(age)
    console.log("----")
}


// Function to check if age matches year of birth
function checkAgeAndYear() {
    console.log("----")
    const calculatedAge = currentYear - yearOfBirth;
    if (calculatedAge === age) {
        console.log("Wiek zgadza się z rokiem urodzenia.");
    } else {
        console.log("Wiek NIE zgadza się z rokiem urodzenia.");
    }
    console.log("----")
}


// Functions to increase/decrease age or year of birth

function increaseAge() {
    age += 1;
    console.log("----")
    console.log("Wiek został zwiększony o 1. Nowy wiek: " + age);
    console.log("----")
}

function decreaseAge() {
    age -= 1;
    console.log("----")
    console.log("Wiek został zmniejszony o 1. Nowy wiek: " + age);
    console.log("----")
}

function increaseYearOfBirth() {
    yearOfBirth += 1;
    console.log("----")
    console.log("Rok urodzenia został zwiększony o 1. Nowy rok urodzenia: " + yearOfBirth);
    console.log("----")
}

function decreaseYearOfBirth() {
    yearOfBirth -= 1;
    console.log("----")
    console.log("Rok urodzenia został zmniejszony o 1. Nowy rok urodzenia: " + yearOfBirth);
    console.log("----")
}


// Function to reset all data to original values
function SetToOriginal() {
    age = 34;
    yearOfBirth = 1990;
    console.log("Wszystkie dane zostały zresetowane do oryginalnych wartości.");

}



// You can change the data above to test other possibilities
// You can also call the functions in the console or use the buttons on the page`
// Enjoy!
// Code written by Mikołaj S.