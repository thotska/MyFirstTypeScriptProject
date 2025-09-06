//first practice
// Extract/Take part of a string => slice()
// When you need to do some math or comparison with a number
// you also need to CONVERT the data type.
// Get the length/size of a string or part of it. => length
// 1. Extract battery percentage (between [ and %)
// 2. Convert to number
// 3. Check conditions:
//    - If battery >= 90 → "Battery is healthy"
//    - If battery >= 70 → "Battery is okay"

import { on } from "events";
import { setDefaultHighWaterMark } from "stream";

//    - Otherwise → "Battery needs attention"
let batteryInfo: string = 'Battery: [87%] Status: Charging';
let before: number = batteryInfo.indexOf("[")
let after: number = batteryInfo.indexOf("%")
let givenNumber: string = batteryInfo.slice((before + 1), after)
console.log(givenNumber)
let givenNumberNumber: number = parseFloat(givenNumber)
console.log(givenNumberNumber)
if (givenNumberNumber >= 90) {
    console.log("Battery is healthy")
} else if (givenNumberNumber >= 70) {
    console.log("Battery is okay")
} else {
    console.log("Battery needs attention")
}


// practice #2
// 1. Extract the weight (between [ and kg)
// 2. Convert to decimal number
// 3. If includes "fragile" AND weight <= 15 → "Handle with care"
// 4. If weight > 20 → "Heavy load, additional charges apply"
// 5. Otherwise → "Standard shipping"

let shippingBox: string = 'Weight: [12.5kg] includes fragile items';
let startB: number = shippingBox.indexOf("[")
let lastB: number = shippingBox.indexOf("kg")
let weightString: string = shippingBox.slice((startB + 1), lastB)
console.log(weightString)
let weightNumber: number = parseFloat(weightString)
console.log(weightNumber)
if (shippingBox.includes("fragile") && weightNumber <= 15) {
    console.log("Handle with care")
} else if (weightNumber > 20) {
    console.log("Heavy load, additional charges apply")
} else {
    console.log("Standard shipping")
}


//practice question #3
// 1. Extract the amount (between [$ and ])
// 2. Remove comma using replace()
// 3. Convert to number
// 4. If amount >= 1000 AND amount <= 5000 → "High Value Transaction"
//    Else if amount < 1000 → "Standard Transaction"
//    Else → "Check Transaction"
let transactionLog: string = 'Transaction: [$1,250] Status: Completed'
let firstIndex: number = transactionLog.indexOf("$")
let secondIndex: number = transactionLog.indexOf("]")
let amountMoney: string = transactionLog.slice((firstIndex + 1), secondIndex)
console.log(amountMoney)
let correctMoneyNumber: string = amountMoney.replace(",", "")
console.log(correctMoneyNumber)
let moneyNumber: number = parseFloat(correctMoneyNumber)
console.log(moneyNumber)
if (moneyNumber >= 1000 && moneyNumber <= 5000) {
    console.log("High Value Transaction")
} else if (moneyNumber < 1000) {
    console.log("Standard Transaction")
} else {
    console.log("Check Transaction")
}

//question#4
// 1. Extract the role name (between [ and ])
// 2. If startsWith "Senior" AND includes "Automation" → "High-level Automation Role"
//    Else if includes "QA" → "QA Role"
//    Else → "Other Role"
let jobDescription: string = 'Role: [Senior QA Automation Engineer] Location: Remote';
let oneBracket: number = jobDescription.indexOf("[")
let twoBracket: number = jobDescription.indexOf("]")
let roleName: string = jobDescription.slice((oneBracket + 1), twoBracket)
console.log(roleName)
if (roleName.startsWith("Senior") && roleName.includes("Automation")) {
    console.log("High-level Automation Role")
} else if (roleName.includes("QA")) {
    console.log("QA Role")
} else {
    console.log("Other Role")
}


//question#5 
// 1. Extract percentage (between [ and %)
// 2. Convert to number
// 3. If usage >= 90 →
//       if includes "backups" → "Critical: Backups consuming space"
//       else → "Critical: Free up space"
//    Else if usage >= 75 → "Warning: High usage"
//    Else → "Normal usage"

let storageData: string = 'Storage: [92%] includes backups'
let oneBr: number = storageData.indexOf("[")
let twoBr: number = storageData.indexOf("%")
let storageData1: string = storageData.slice((oneBr + 1), twoBr)
console.log(storageData1)
let storageDataNumber: number = parseFloat(storageData1)
console.log(storageDataNumber)
if (storageDataNumber >= 90) {
    if (storageData.includes("backups")) {
        console.log("Critical: Backups consuming space")
    } else {
        console.log("Critical: High usage")
    }
} else if (storageDataNumber >= 75) {
    console.log("Warning: High usage")
} else {
    console.log("Normal usage")
}

// question 6
// 1. Extract label (between [ and ])
// 2. Use trim() to clean spaces
// 3. Use replace to normalize spacing
// 4. If startsWith "Express" →
// if includes "Fragile" → "Express Fragile Shipping"
// else → "Express Shipping"
// Else →
// if includes "insurance" → "Standard Shipping with Insurance"
// else → "Standard Shipping"
let labelData: string = 'Label: [ Express  -  Fragile ] includes insurance'
let fBraket: number = labelData.indexOf("[")
let sBraket: number = labelData.indexOf("]")
let label: string = labelData.slice((fBraket + 1), sBraket)
console.log(label)
let cleanLabel: string = label.trim()
console.log(cleanLabel)
let normalSpaceLabel: string = cleanLabel.replaceAll("  ", " ")
console.log(normalSpaceLabel)

if (normalSpaceLabel.startsWith("Express")) {
    if (normalSpaceLabel.includes("Fragile")) {
        console.log("Express Fragile Shipping")
    } else {
        console.log("Express Shipping")
    }
} else {
    if (normalSpaceLabel.includes("Insurance")) {
        console.log("Standard Shipping with Insurance")
    } else {
        console.log("Standard Shipping")
    }
}