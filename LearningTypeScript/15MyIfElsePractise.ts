// write a code which print out 'your expression was true' when the expression is true
// and it should print out 'your expression was false' when the expression was false

import { BlobOptions } from "buffer";

//



if (true) {
    //your expression was true
    console.log("Your expression was true");
} else {
    //your expression was false
    console.log("Your expression was not true");
}

if (false) {
    //your expression was true
    console.log("Your expression was true");
} else {
    console.log("Your expression was not true");
}
//your expression was false
// console.log ("Your expression was not true");


if (true) {
    console.log("You did a good job!")
} else {
    console.log("Try again.")
}


if (false) {
    console.log("You did a good job!")
} else {
    console.log("Try again.")
}

//if Wendys is open
//true => we are eating Dave's Double
//fasle => we are going to eat nothing
let wendysIsOpen = true
let wendysIsClosed = false
if (true){
    console.log ("We are eating Dave's Double")
}else{
    console.log ("We are going to eat nothing")
}


if(false){
    console.log ("We are eating Dave's Double")
}else{
    console.log ("We are going to eat nothing")
}

if(wendysIsOpen){
     console.log ("We are eating Dave's Double")
}else{
    console.log ("We are going to eat nothing")
}



let dealerIsOpen = false
if(dealerIsOpen){
    console.log ("We are buying a car!")
}else{
    console.log ("We are not buying a car!")
}

//if im tired i am skipping gym today otherwise I am going to the gym
let iAmTired1: boolean = false
if(iAmTired1){
    console.log ("I am skipping the gym today.")
}else{
    console.log ("I am going to the gym today")
}
//// if I am hungry OR if wendys is open then I am eating, otherwise I am not eating.
let hungry: boolean = true
let WendysOpen: boolean = true
if(hungry || WendysOpen){
    console.log ("I am eating")
}else{
    console.log ("I am NOT eating")
}

//// I am going to a car dealer
// and I like to buy either a BMW or Porsche
// if the dealer has BMW OR
// Porsche then I am buying
// true -> 'I have a cool car now!'
// false -> 'I am still riding honda civic'

let isBmwAvailable1: boolean = true
let isPorcheAvailable: boolean = false
if(isBmwAvailable1 || isPorcheAvailable){
    console.log ('I have a cool car now!')
}else{
    console.log ('I am still riding honda civic')
}

//&& -> AND at the same time
// ||-> OR is one of them okay


// I like burgers it's 2 am
// if the dennies is open OR
// Wendys is open
// I am going to eat burger
// I am eating the yogurt from the fridge
let denniesIsOpen: boolean = true
let wendysIsOpen1: boolean = false
if(denniesIsOpen || wendysIsOpen1){
    console.log (" I am going to eat burger!")
}else{
    console.log ("I am eating the yogurt from the fridge")
}

//// I am at bar and I want a drink.
// olderThan21 -> true/false
// hasID -> true/false
// put the && or || operator (ONLY one of them is true)
// 'I will have a drink'
// 'I will drink milk in the corner'

let olderThan21: boolean = true
let hasID: boolean = false
if(olderThan21 && hasID){
    console.log ('I will have a drink')
}else{
    console.log ('I will drink milk in the corner')
}

// if I will solve this practice OR do the homework And at the same time
// I will be present at class
// then I am taking a lunch break
// otherwise
// I am coding at the lunch break

let solveTheProblem: boolean = true
let doTheHomework: boolean = false
let presentInClass: boolean = true
if((solveTheProblem || doTheHomework) && presentInClass) {
    console.log ("I am taking a lunch break")
}else{
    console.log ("I am coding at the lunch break")
}

// if I am older or equal to 21
// 'I will drink a beer'
// otherwise
// 'I am drinking milk'
// number variable age
// myAge compare to 21 (<, >, <=, >=)
 let myAge: number = 20
 if(myAge >= 21){
    console.log ( "I will drink beer")
 }else{
    console.log ("I will drink milk")
 }


let myAge3: number = 26
let hasFakeID: boolean = true
if ((myAge >= 21) || hasFakeID){
     console.log ( "I will drink beer")
}else{
     console.log ("I will drink milk")
}



