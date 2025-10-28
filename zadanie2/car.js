// wprowadzenie - obiektowosc

const car = {
    // key: value
    wheelCount: 4,
    doorCount: 5,
    color: "red",
    registration: "GD 2137",
    windowCount: 6,
    isWindowTinted: true,
    mileage: 150420,
    blachas: "amelinums",
    passangers: ["Marek Marucha", "Maciuk", "Bagietson"],
    illegalImmigrantsCount: 4,
    newKołpak: "Chłopie czołpak",

    engine: {
        type: "V8",
        gasType: "Gas",
        horsePower: 450,
        volume: "4.5L",
        isBroken: false
    }
}


console.log(car)
console.log(car.engine.type)



function carCreation() {
    const carColor = ""
    const carRegistration = ""

    const myCar = createCar(carColor, carRegistration)

    console.log(myCar)

}


function createCar(color, registration) {
return {
    color: userColor,
    registration: userRegistration,

    wheelCount: 4,
    
}



}