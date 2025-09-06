//NUMBER TO A STRING

let myAge: number = 99
// method 1
let myAgeString: string = myAge.toString()
// method 2 -> thing it as you are filling and EMPTY string with a number
let myAgeString2: string = '' + myAge
// method 3
let myAgeString3: string = String(myAge)
//console.log(myAgeString)
//console.log(myAgeString2)
//console.log(myAgeString3)

let myNumber: number = 24
let myStringNumber1: string = myNumber.toString()
let myStringNumber2: string = "" + myNumber
let myStringNumber3: string = String(myNumber)
console.log(myStringNumber1)
console.log(myStringNumber2)
console.log(myStringNumber3)

// STRING TO NUMBER
let stringNumber: string = '499';
// Method 1
let numberVersion: number = Number(stringNumber)
// Method 2 parseInt() and parseFloat()
// parseInt() is a method converting string to number
// parseFloat() is a method and converting decimal string to number -----!!! THIS IS IMPORTANT
// 14 whole number AND this is 14.2 a decimal number
let numberVersion2: number = parseInt(stringNumber)
let numberVersion3: number = parseFloat(stringNumber)
console.log(numberVersion)
console.log(numberVersion2)
console.log(numberVersion3)

let myPaycheck: string = "10000"
let myPaycheck1: number = parseFloat(myPaycheck)
console.log(myPaycheck1)



let myPaycheck2: string = "10000.59"
let myPaycheck3: number = parseFloat(myPaycheck2)
console.log(myPaycheck3)



// we are an automation engineer at purple.com
// we do have 3 decimal string prices
// one is purpleMattress -> '499'
// another one is purplePillow -> '59'
// and the web application says the total is -> '999'
// we need to check if the total of purpleMattress AND purplePillow EQUALS to 558
// if the total matches then 'Total calculation is RIGHT.'
// otherwise 'Total calculation FAILED'
// 1. convert it to number
// 2. do math operation addition with the items
// 3. create an true or false expression with comparison ===
// 4. put your expression in the if else
let purpleMattress1: string = '499'
let purplePillow1: string = '59'
let webAppTotal1: string = '999'
console.log(purpleMattress1 + purplePillow1) // '49959' WRONG
let numberPurpleMattress: number = parseFloat(purpleMattress1)
let numberPurplePillow: number = parseFloat(purplePillow1)
let numberWebAppTotal: number = parseFloat(webAppTotal1)
let expectedTotalNumber: number = numberPurpleMattress + numberPurplePillow
if (expectedTotalNumber === numberWebAppTotal) { // 558 === 999
    console.log('Total calculation is RIGHT.')
} else {
    console.log('Total calculation is FALSE.')
}





// we are an automation engineer at purple.com
// we do have 3 decimal string prices
// one is purpleMattress -> '499.99'
// another one is purplePillow -> '59.99'
// and the web application says the total is -> '559.98'
// we need to check if the total of purpleMattress AND purplePillow EQUALS to 559.98
// if the total matches then 'Total calculation is RIGHT.'
// otherwise 'Total calculation FAILED'
let purpleMattress: string = '499.99'
let purplePillow: string = '59.99'
let webAppTotal: string = '559.98'

let purpleMattressPrice: number = parseFloat(purpleMattress)
let purplePillowPrice: number = parseFloat(purplePillow)
let webAppTotalPrice: number = parseFloat(webAppTotal)

let expectedTotal: number = purpleMattressPrice + purplePillowPrice
if (webAppTotalPrice === expectedTotal) {
    console.log('Total calculation is RIGHT.')
} else {
    console.log('Total calculation FAILED')
}


//
// we are on budget and we are saving money
// streaming services has to go
// we get rid of all the services which is more than 15 dollars
// if the streaming service is more than 15 dollars then say 'We are canceling you.'
// otherwise say 'We will keep it.'
let netflixCost: string = '13.99'
let disneyCost: string = '17.99'
let youtubePremium: string = '22.99'
// 3 separate if else
if (parseFloat(netflixCost) > 15) {
    console.log('We are canceling you.')
} else {
    console.log('We will keep it.')
}

if (parseFloat(disneyCost) > 15) {
    console.log('We are canceling you.')
} else {
    console.log('We will keep it.')
}

if (parseFloat(youtubePremium) > 15) {
    console.log('We are canceling you.')
} else {
    console.log('We will keep it.')
}

// we are going to the dealer and we do have 2 different porsche taycans
//  we will buy all the porsche taycans which is less than 55000.00
// if the price is good then say 'we are buying you'
// otherwise say 'deal is off'
let porsche1: string = '53999.99'
let porsche2: string = '52999.99'
if (parseFloat(porsche1) < 55000.00) {
    console.log('we are buying you')
} else {
    console.log('deal is off')
}

if (parseFloat(porsche2) < 55000.00) {
    console.log('we are buying you')
} else {
    console.log('deal is off')
}