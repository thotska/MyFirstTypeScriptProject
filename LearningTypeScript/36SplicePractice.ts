// if the username 0 is ending with 123 then replace it without 123 version
    // 'alice123' -> 'alice'
// if the username is starting with lowercase 'b' then replace it with uppercase
    // "bob456" -> "Bob456"
let usernames: string[] = ["alice123", "bob456", "charlie789", "diana012", "eve345"];
if(usernames[0].endsWith("123")){
    usernames.splice(0,1,"alice")
}
console.log(usernames)

if(usernames[1].startsWith("b")){
    usernames.splice(1,1,"Bob456")
}
console.log(usernames)
if(usernames[2].startsWith("c") && usernames[2].endsWith("789")){
    usernames.splice(2,1,"Charlie")
}
console.log(usernames)
if (usernames[3].includes("ronaldo") === true){
    usernames.splice(3,1) 
}
console.log(usernames)

//// question 2
// Create an array of test case names

// If test case at index 0 contains underscore then replace underscore with space
// "login_test" -> "login test"
// If test case at index 1 is all uppercase then convert to title case
// "SEARCH_functionality" -> "Search_functionality"
// If test case at index 2 contains hyphen then replace with underscore
// "checkout-process" -> "checkout_process"
// Print the formatted test cases array

let testCases1: string[] = ["login_test", "SEARCH_functionality", "checkout-process", "Payment_Gateway"];
if(testCases1[0].includes("_"))
    testCases1.splice(0,1,"login test")
console.log(testCases1)

if (testCases1[1].includes("SEARCH")){
    testCases1.splice(1,1, "Search_functionality")
}
console.log(testCases1)

if (testCases1[2].includes("-")){
    testCases1.splice(2,1,"checkout_process")
}
console.log(testCases1)



//question #3
// Create an array: [" 500 USD", " 20 ", "true", "junior", "150USD"]
// Remove spaces from the first element, extract the number, subtract 100 ( - )
// Trim the second element, convert to number, divide by 2
// Convert the third element to boolean and negate it (true → false)
// Replace the fourth element with "Senior"
// Extract number from the last element, add 50
// Print each result and the final array

// let info: string[] = [" 500 USD", " 20 ", "true", "junior", "150USD"]
// let first = info[0].trim()
// let number  = parseFloat(first)
// let subtractedNumber = number - 100
// console.log (subtractedNumber)
// let second = info[1].trim()
// let secondNumber = parseFloat(second)
// let dividedNumber = secondNumber / 2
// console.log (dividedNumber)
// let booleanWord = info[2] === "true"
// let convertedBoolean = !booleanWord
// console.log (convertedBoolean) 

// let thirdElement = info.splice(3,1,"Senior")
// console.log (thirdElement)

// let lastNumber = parseInt(info[4]);
// let total = lastNumber + 50
// console.log(total)

// // same 
// let extractedNumber = info[4].slice(0,3)
// let convertedNumber = parseFloat(extractedNumber)
// let subTotal = convertedNumber + 50

// console.log(subTotal)
// // same
// let replacedElement = info.splice(3,1,"Senior")
// console.log(replacedElement)

//same
let info: string[] = [" 500 USD", " 20 ", "true", "junior", "150USD"]
let secondElement = info[1].trim()
console.log(secondElement)
let secondElementNumber = parseFloat(secondElement)/2
console.log(secondElementNumber)


//different question
// Start with: ["100USD", "temporary", "false", "80"]
// Remove "temporary" from the array
// Insert "permanent" at index 1
// Convert "100USD" to number, subtract 40
// Replace "false" with "true"
// Add "bonus:20" at the end using splice
// Extract the number from "bonus:20" and multiply by 3

// let myMixedValue = ["100USD", "temporary", "false", "80"]
// let myRemovedValue = myMixedValue.splice(1,1)
// console.log(myRemovedValue)
// let myInsertedValue = myMixedValue.splice(1,1,"permanent")
// console.log(myInsertedValue)
// let convertedNumberString = myMixedValue[0].slice(0,3)
// console.log (convertedNumberString)
// let convertedNumberNumber = parseFloat(convertedNumberString) - 40
// console.log (convertedNumberNumber)
// let myReplacedBoolean = myMixedValue.splice(2,1,"true")
// console.log(myReplacedBoolean)
// let addedBonus = myMixedValue.splice(myMixedValue.length -1, 0, "bonus:20")
// console.log(addedBonus)

// let extractedNumber = myInsertedValue[3].slice(7,9)
// console.log(extractedNumber)
// let extractedNumberNumber = parseFloat(extractedNumber) * 3