// <!-- Stwórz stronę z polem tekstowym, do którego można wpisać tekst i po kliknięciu przycisku aplikacja wyświetli:-->

// <!-- 1. liczbę znaków - osobno ze spacjami i bez -->
// <!-- 2. liczbę słów -->
// <!-- 3. najdłuższe słowo -->
// <!-- 4. średnią długość słowa -->
// <!-- 5. procent wielkich liter w tekście -->
// <!-- 6. czas czytania, zakładając 200 słów na minutę -->



//////////////////////////////////////////////////////
//           GŁÓWNA FUNKCJA ANALIZY TEKSTU          //
//////////////////////////////////////////////////////
document.getElementById("count-words").innerHTML = 0;
document.getElementById("count-signs-with-spaces").innerHTML = 0;
document.getElementById("count-signs-without-spaces").innerHTML = 0;
document.getElementById("read-speed").innerHTML = 0;



function analyzeText() {
    countWords();
    countSigns();
    countSignsWithoutSpaces();
    readSpeed();
}


//////////////////////////////////////////////////////
//           GŁÓWNA FUNKCJA ANALIZY TEKSTU          //
//////////////////////////////////////////////////////



// 1. liczba znaków - osobno ze spacjami i bez
function countSigns() {
    const textarea = document.querySelector('textarea');
    const text = textarea.value;
    const characterCount = text.length;
    document.getElementById("count-signs-with-spaces").innerHTML = " " + characterCount;

}
function countSignsWithoutSpaces() {
    const textarea = document.querySelector('textarea');
    const text = textarea.value;
    let letterCounter = 0
    const textTrimmed = text.trim()


    for (let i = 0; i < textTrimmed.length; i++) {
        const letter = textTrimmed.charAt(i);

        if (letter !== ' ') {
            letterCounter += 1
            console.log(letterCounter)
        }
      
    }


    document.getElementById("count-signs-without-spaces").innerText = letterCounter
}


// 2. liczba słów
function countWords() {
    const text = document.getElementById("user-input").value
    const textTrimmed = text.trim()
    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

}



// // 3. najdłuższe słowo
// function longestWord() {

// }



// // 4. średnia długość słowa
// function avgLenght() {

// }



// // 5. procent wielkich liter w tekście
// function bigLetters() {

//     const textarea = document.querySelector('textarea');
//     const text = textarea.value;
//     let bigLetters = 0
//     const textTrimmed = text.trim()


//     for (let i = 0; i < textTrimmed.length; i++) {
//         const letter = textTrimmed.charAt(i);

//         if (letter !== ' ') {
//             bigLetters += 1
//             console.log(bigLetters)
//         }

//     }




//     document.getElementById("count-signs-without-spaces").innerText = letterCounter



// }



// 6. czas czytania, zakładając 200 słów na minutę
function readSpeed() {
    const letterCounter = countSignsWithoutSpaces()




    const characterReadPerMinute = 200
 const  minutes = letterCounter / characterReadPerMinute
 console.log(minutes)

const seconds = minutes * 60
console.log(seconds)

document.getElementById("read-speed").innerText = seconds
}
