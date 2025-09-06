
//IMPORTANT!!!!!
// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.


// question 1
let logEntry: string = '[INFO] Test started [ERROR] Login failed [INFO] Retrying [ERROR] Timeout';

let firstErrorPos: number = logEntry.indexOf('[ERROR]'); // 
let lastErrorPos: number = logEntry.lastIndexOf('[ERROR]');
let firstInfoPos: number = logEntry.indexOf('[INFO]');

console.log("First [ERROR] position:", firstErrorPos);
console.log("Last [ERROR] position:", lastErrorPos);
console.log("First [INFO] position:", firstInfoPos);

let charsBetween: number = lastErrorPos - firstErrorPos;
console.log("Characters between first and last [ERROR]:", charsBetween);

//question 2
let productCode: string = 'PROD-ELEC-2024-SMART-XL';

// Your tasks:
// 1. Find the position of the first '-' character
// 2. Find the position of the last '-' character
// 3. Extract the category (between first and second '-')
// 4. Extract the size (after the last '-')
// 5. Print the extracted information

let firstDahs: number = productCode.indexOf("-")
let secondDash: number =  productCode.lastIndexOf("-")
let extractedMessage: string = productCode.slice (4,20)
let size: string = productCode.slice(0, 21)

//question 3
let messyData: string = 'test_id:001,test_name:login,test_status:pass,test_result:success';

// Your tasks:
// 1. Remove all 'test_' prefixes using replaceAll()
// 2. Replace all commas with ' | ' separators
// 3. Replace all colons with ': ' for better readability
// 4. Print the original and cleaned data
// 5. Count how many replacements were made
let myTestExt: string = messyData.replaceAll("test_","")
let myComaExt: string =  messyData.replaceAll(',', '|')
let myColonsExt: string = messyData.replaceAll(':', ": ")
console.log ("Original: ", messyData)
console.log ("Cleaned:", myColonsExt + myTestExt + myComaExt)

//question 4

let configData: string = '{"maxUsers": "100", "timeout": "30", "debug": "false", "version": "2.1", "enabled": "true"}';

// Your tasks:
// 1. Parse the JSON string to get the configuration object
// 2. Convert maxUsers from string to number
// 3. Convert timeout from string to number
// 4. Convert debug from string to boolean
// 5. Convert version from string to number (parseFloat)
// 6. Convert enabled from string to boolean
// 7. Validate that maxUsers is between 1-1000
// 8. Validate that timeout is between 5-300 seconds
// 9. Print all converted values with their types
// 10. Check if all conversions were successful using typeof

let configuration = JSON.parse(configData)
let maxUsers: number =  parseFloat("100")
let timeOut: number = parseFloat("30")
// let debug: boolean = 
let dataVersion: number =  parseFloat("2.1")






// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.







//REVIEW HOMEWORK IN CLASS
//'My dream mattress is &Purple Mattress&'
//slice(), indexOf(), lastIndex()
let myDreamMattress: string = "My dream mattress is &Purple Mattress&"
let extractedSentence1: string = myDreamMattress.slice(22, 39)
console.log ("_____________________________________________")
console.log (extractedSentence1)
let firstSign: number = myDreamMattress.indexOf("&")
let lastSign: number = myDreamMattress.lastIndexOf("&")
console.log (lastSign, firstSign )



// EXAMPLE BY SALIH
// let myMattress: string = 'Purple Mattress';
let myMattressString: string = 'My dream mattress is &Purple Mattress&';
//
// indexOf(), lastIndexOf()
//
let firstIndexOfAndSign: number = myMattressString.indexOf('&')
let lastIndexOfAndSign: number = myMattressString.lastIndexOf('&')
// first sign is included because slice is including the first number character
// last sign is not included because slice method is not including the last index
let purpleMattressString1: string = myMattressString.slice(21, 36)
let purpleMattressString2: string = myMattressString.slice(firstIndexOfAndSign + 1, lastIndexOfAndSign)
//
console.log(purpleMattressString1);
console.log(purpleMattressString2);



// slice() => return a piece of string
// first index of [
// last index of ]
// and these 2 indexes will go into my slice method.

// 1. From which variable you will call method.
// 2. what method you will call.
// 3. what to put inside or leave empty.

let myCityString: string = 'Welcome to [New York City]!'
let firstBraket: number = myCityString.indexOf("[")
let lastBraket: number = myCityString.lastIndexOf("]")

let myCity: string = myCityString.slice(12, 25)
let myCity1: string = myCityString.slice(firstBraket +1, lastBraket)
console.log (myCity1)


let myCityLength: number = myCity1.length

// question
// slice() => return a piece of string
// first index of <
// last index of >
// and these 2 indexes will go into my slice method.
let myEmail: string = 'Contact me at <hello@example.com>'
let firstComparisonSign: number = myEmail.indexOf("<")
let lastComparisonSign: number = myEmail.lastIndexOf(">")
 let myEmailExt: string = myEmail.slice(firstComparisonSign + 1, lastComparisonSign)
 console.log (myEmailExt)
 let myEmailLength: number = myEmailExt.length
 console.log (myEmailLength)



 // dealer
// we are on car.com
// and we see messages just like the example -> 'This car is (Mercedes)'
// if the car is Mercedes then 'we are going to dealer'
// otherwise 'we keep browsing'

let websiteMessage: string = 'This car is Mercedes'
let firstQuotation: number = websiteMessage.indexOf("(")
let lastQuotation: number = websiteMessage.lastIndexOf(")")
let myMessage: string = websiteMessage.slice(firstQuotation,  lastQuotation )
if(myMessage === 'Mercedes'){
 console.log ('we are going to dealer')
}else{
    console.log ('we keep browsing')
}


// vacation
// we are on expedia.com
// and we see messages just like the example -> 'This vacation is at -Jamaica-'
// if the location spot is 'Jamaica' OR 'Singapore' then 'we are going to travel'
// otherwise 'we keep browsing'
// websiteMessage => 'This vacation is at -Jamaica-'
// extract -> Jamaica OR Singapore
// check if the vacation location is either Jamaica OR Singapore

let expediaMessage: string = 'This vacation is at -Jamaica-'
let firstQuoteMark: number = expediaMessage.indexOf("-")
let lastQuoteMArk: number =  expediaMessage.lastIndexOf("-")
let myExtractedMessage: string = expediaMessage.slice(firstQuoteMark + 1, lastQuoteMArk)
console.log (myExtractedMessage)
if((myExtractedMessage === "Jamaica") || (myExtractedMessage === "Singapore")){
    console.log ('This vacation is at -Jamaica-')
}else {
    console.log ('we keep browsing')
}



// grocery
// we are on a grocery website
// message: 'Fresh apples at |$3.49| per lb'
// if the price is lower or equal to $5 then 'buy the item'
// otherwise 'skip it'

// Tasks for the student:
// 1. Find the first and last index of |
// 2. Extract the price using slice()
// 3. Remove the $ sign and convert the string to a number
// 4. Check if the price is <= 5
// 5. Print 'buy the item' if true
// 6. Print 'skip it' if false
let webMessage: string = "Fresh apples at |$3.49| per lb"
let startSign: number = websiteMessage.indexOf("$")
let endSign: number = websiteMessage.lastIndexOf("|")
let myGroceryMessage: string = webMessage.slice(startSign, endSign)
console.log (myGroceryMessage)
