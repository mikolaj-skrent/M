
const imie = "Marek"
const nazwisko = "Kochanowski"
let wiek = 34
let wzrost = 183


console.log(imie)
console.log(nazwisko)
console.log(wiek)
console.log(wzrost)


function checkAge() {
    if (wiek > 18) {

        console.log("jest pełnoletni")

    } else if (wiek < 18) {
        console.log("nie jest pełnoletni")
    }
}

function getAge(a, b) {
    return a + b
}
console.log(getAge(6,9))

