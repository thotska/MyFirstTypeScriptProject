

//question 1
let testLog: string = 'Test: [Login_Test_001] Status: PASSED Time: 2.5s Score: 95';

// Your tasks:
// 1. Extract the test name (between [ and ])
// 2. Check if the test name equals "Login_Test_001"
// 3. Print "Correct Test!" if it matches, otherwise "Wrong Test!"

let extractedName0: number = testLog.indexOf("[")
let extractedName1: number = testLog.indexOf("]")
let extractedName: string = testLog.slice((extractedName0 +1), extractedName1) 
console.log (extractedName)

if(extractedName === "Login_Test_001"){
    console.log ("Correct Test!")
}else {
    console.log ("Wrong Test!" )
}

// question 2
let productInfo: string = 'Product: (iPhone 15) Category: Electronics Price: $999 Rating: 4.8';

// Your tasks:
// 1. Extract the product name (between ( and ))
// 2. Check if iPhone ends with "16" - print "Wow this is a really nice new iPhone!"
// 3. Check if iPhone ends with "15" - print "This is still nice but needs a little upgrade soon"
// 4. Check if iPhone ends with "14" - print "It's getting older"
// 5. Otherwise print "You need to upgrade your phone"

let firstParenthesis: number = productInfo.indexOf("(")
let lastParenthesis: number = productInfo.indexOf(")")
let theName: string = productInfo.slice((firstParenthesis +1),lastParenthesis)
console.log (theName)
if (theName.endsWith("16")){
    console.log ("Wow this is a really nice new iPhone!")
} else if(theName.endsWith("15") ) {
    console.log ("This is still nice but needs a little upgrade soon")
 } else if (theName.endsWith("14")){
    console.log ("It's getting older")
} else {
    console.log ("You need to upgrade your phone")
}

//question 3
let performanceData: string = 'Response Time: [150ms]';

// 1. Extract response time number (between [ and ms)
// 2. Convert to number
// 3. Check thresholds:
//    - If < 200ms → "Good"
//    - If < 300ms → "OK"
//    - Otherwise → "Not OK"

let start: number = performanceData.indexOf("[")
let end: number = performanceData.indexOf("]")
let timeNumber: string = performanceData.slice((start + 1), end)
console.log(timeNumber)
let timeNumberNumber: number = parseFloat(timeNumber)
console.log(timeNumberNumber)
if(timeNumberNumber < 200){
    console.log ("Good")
}else if (timeNumberNumber < 300){
    console.log ("OK")
}else {
    console.log ("NOT OK")
}

//question 4
let groceryList: string = 'Shopping: [5] items include fruits and vegetables';

// 1. Extract the number (between [ and ])
// 2. Convert to number
// 3. Check if shopping list includes "fruits" AND number >= 5
// 4. Check if shopping list includes "vegetables" AND number >= 3
// 5. Check if shopping list includes "meat" AND number >= 2
// 6. Otherwise print "Basic shopping list"

let firstB: number = groceryList.indexOf("[")
let secondB: number = groceryList.indexOf("]")
let itemsQuantity: string = groceryList.slice((firstB +1), secondB)
console.log (itemsQuantity)
let itemsNumber: number = parseFloat(itemsQuantity)
console.log (itemsNumber)
if(groceryList.includes("fruits") && (itemsNumber >= 5)){
    console.log ("Fruits are included")
} else if (groceryList.includes("vegetable") && (itemsNumber >= 3)){
    console.log ("Vegetable are included")
} else if (groceryList.includes("meat") && (itemsNumber >= 2)){
    console.log ("Meat is in the list")
}else {
    console.log ("Basic shopping list")
}

//question 5
let systemHealth: string = 'System: [85%] performance includes monitoring and alerts';

// 1. Extract the system performance number (between [ and %)
// 2. Convert to number
// 3. Check if system includes "monitoring" AND performance >= 90
// 4. Check if system includes "alerts" AND performance >= 80
// 5. Check if system includes "backup" AND performance >= 70
// 6. Otherwise print "System needs attention"

let frontBraket: number = systemHealth.indexOf("[")
let backBraket: number = systemHealth.indexOf("%")
let percentageNumber: string = systemHealth.slice((frontBraket +1), backBraket)
let extNumber: string = percentageNumber
console.log (extNumber)
let convertedNumber: number = parseFloat(extNumber)
console.log (convertedNumber)
if(systemHealth.includes("monitoring") && convertedNumber >= 90){
    console.log ("system is monitoring AND performance >= 90%")
}else if(systemHealth.includes("alerts") && convertedNumber >= 80){
    console.log ("system is alert AND performance is >= 80%")
}else if(systemHealth.includes("backup") && convertedNumber >= 70){
    console.log ("system is backing up AND performance is >= 70%")
}else {
    console.log ("system needs attention")
}

//bonus question
let testSuite: string = 'Test Coverage: [95%] includes automated and regression testing'
let startBracket: number = testSuite.indexOf("[")
let endPercent: number = testSuite.indexOf("%")
let coverageStr: string = testSuite.slice((startBracket+ 1), endPercent)

let coverage: number = parseFloat(coverageStr);

if (testSuite.includes("automated") && coverage >= 90) {
    console.log("Automated tests included AND coverage >= 90%")
} else if (testSuite.includes("regression") && coverage >= 80) {
    console.log("Regression tests included AND coverage >= 80%")
} else if (testSuite.includes("performance") && coverage >= 85) {
    console.log("Performance tests included AND coverage >= 85%")
} else if (testSuite.includes("security") && coverage >= 95) {
    console.log("Security tests included AND coverage >= 95%")
} else {
    console.log("Test coverage needs improvement");
}


