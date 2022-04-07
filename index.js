alert("Test only")

let userInput = document.getElementById("input-el") // user input becomes the value
let mFeet = document.getElementById("meterfeet-el")
let lGallon = document.getElementById("litergallon-el")
let kPound = document.getElementById("kilopound-el")
/*
console.log(mFeet)
console.log(lGallon)
console.log(kPound)
*/

// calculate the input value base on the conversion formula
function converter() {
    //length 
    let mFeetValue = userInput.value + " Meters = "
    let mFeetResult = userInput.value * 3.281 
    let finalmFeet = mFeetValue + mFeetResult.toFixed(3) + " feet | "
    let fMeterValue = userInput.value + " feet = "
    let fMeterResult = userInput.value / 3.281 
    let finalfMeter = fMeterValue + fMeterResult.toFixed(3) + " meters"

    let combinedMF = finalmFeet + finalfMeter
    mFeet.textContent = combinedMF
    //volume
    let lGallonValue = userInput.value + " Liters = "
    let lGallonResult = userInput.value / 3.7585 
    let finallGallon = lGallonValue + lGallonResult.toFixed(3) + " gallons |"
    let gLitersValue = userInput.value + " Gallons = "
    let gLitersResult = userInput.value * 3.785 
    let finalgLiters = gLitersValue + gLitersResult.toFixed(3) + " liters"

    let combinedLG = finallGallon + finalgLiters
    lGallon.textContent = combinedLG
    //mass 
    let kPoundsValue = userInput.value + " Kilos = "
    let kPoundsResult = userInput.value * 2.205
    let finalkPounds = kPoundsValue + kPoundsResult.toFixed(3) + " pounds |"
    let pKilosValue = userInput.value + " Pounds = "
    let pKilosValueResult = userInput.value / 2.205
    let finalpKilos = pKilosValue + pKilosValueResult.toFixed(3) + " kilos"

    let combinedPK = finalkPounds + finalpKilos
    kPound.textContent = combinedPK
}
// done solo project 07/04/2022