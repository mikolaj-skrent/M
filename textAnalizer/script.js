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

function analyzeText() {
    countWords();
    countSigns();
}


//////////////////////////////////////////////////////
//           GŁÓWNA FUNKCJA ANALIZY TEKSTU          //
//////////////////////////////////////////////////////



// 1. liczba znaków - osobno ze spacjami i bez
function countSigns() {
    const textWithSpaces = document.getElementById("user-input").value
    const textTrimmed = text.trim()
    const textWithoutSpaces = 
    document.getElementById("count-signs-with-spaces").innerText = text.length
    document.getElementById("count-signs-without-spaces").innerText = textWithoutSpaces.length

}



// 2. liczba słów
function countWords() {
    const text = document.getElementById("user-input").value
    const textTrimmed = text.trim()
    const words = textTrimmed.split(" ")

    document.getElementById("count-words").innerText = words.length

}



// 3. najdłuższe słowo
function longestWord() {

}



// 4. średnia długość słowa
function avgLenght() {

}



// 5. procent wielkich liter w tekście
function bigLetters() {

}



// 6. czas czytania, zakładając 200 słów na minutę
function readSpeed() {

}





