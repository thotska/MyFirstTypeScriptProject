// I am a truck a driver and if my load is more than 2100 pounds
// I am getting pulled over
// there is no else
// myLoad -> number
// comparison operator <, >, <=, >=
// 'You got pulled over!'
let myLoad12: number = 2000
if (myLoad12 > 2100) {
    console.log('You got pulled over!')
}
// I am a restaurant owner
// if I have the profit more than 2500
// I will survive!
// There  is NO ELSE
let myProfit12: number = 2503
if(myProfit12 > 2500){
    console.log ("I will survive!")
}

//// I am a cop
// speed limit is 45
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over


let speedLimit: number = 45
if (speedLimit < 55){
    console.log ("you will get a ticket")
}
if (speedLimit> 45){
    console.log ("you will not be pulled over")
}
if ((speedLimit>45 && speedLimit<55)){
    console.log ("you will get a warning")
}

// I am a cop
// speed limit is 45
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled ove

let mySpeed5: number = 120

if (mySpeed5 > 55){
    console.log ("I will have a ticket")

}

if ((mySpeed5 >45) && (mySpeed5 <55)){
    console.log ("I will get a warning")
}

if (mySpeed5 <45){
    console.log ( "I will not be pulled over")
}

// I am going to party
// and if I am older than 21 I can drink and have driver's license
//if I am older than 18 AND at the same time younger than 21,
//     I can have drivers license but I can't drink
//if I am younger than 18, I can have nothing.

let age: number = 26
if (age > 21){ 
    console.log ("I can drink and have driver's license")
}
if ((age > 18) && (age < 21)){
    console.log ("I can have drivers license but I can't drink")
}
if (age < 18){
    console.log ("I can have nothing")
}

// I am a cop
// speed limit is 45
// outcomes 3 -> means I need 3 code blocks 3 statements
//
// if you drive over 55 mph you will get a ticket
// if you drive between 45 and 55, you will get a warning
// if you drive less than 45 mph then you will not be pulled over

let speedLimit1: number = 120
if (speedLimit1 > 55){
    //every speed more than 55
    //56,74, etc
    console.log ("you will get a ticket")
}else if (speedLimit1 > 45){
    //45-55, 
    console.log ("you will get a warning")
} else {
    //0-45
    console.log (" You will not be pulled over ")
}
















