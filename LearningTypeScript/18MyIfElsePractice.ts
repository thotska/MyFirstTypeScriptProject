//
//
// // we are the QA automation engineers of Purple
// when we go to web app sometimes there is a pop up
// IF the popup is existing then dismiss it, 'popup dismissed'
// otherwise just say 'popup didn't appear'
let popUpExsisting: boolean = false
if (popUpExsisting){
    console.log ("Pop up exsisting")
}else 
    console.log ("Pop up did not appear")

// 
// we are checking our tissue types string
// if the tissue equals to lung, print 'You need to breath'
// if the tissue equals to hear, print 'You need to keep pumping'
// Everything else print 'Just chillax'

let tissue1: string = "lung"
if(tissue1 === "lung"){
    console.log ("You need to breath")
} else if (tissue1 === "heart"){
    console.log ('You need to keep pumping')
} else 
    console.log ('Just chillax') 
    //STEPS
    //1. create a syntax
    //2. Create a variable
    //3. fill the expressions
    //4. print out


    // {} -  CODE Blocks -  having multiple lines of code together
    // () - EXPRESSION- if it an expression and you want to separate thing a bit
    


let tissue: string = "lung"
if(tissue === "lung"){

    console.log ("You need to breath")

} else if (tissue === "heart"){

    console.log ('You need to keep pumping')

 } else if (tissue === "muscle"){

    console.log ('You need to keep exercise')

} else if (tissue === "kidney"){

    console.log ('You need to keep work')

} else if (tissue === "skin"){

    console.log ('You need to get tanned')

} else if (tissue === "gut"){

    console.log ('You need to be healthy')

} else {
    console.log ('Just chillax') 
}

// create a variable my traffic sign color
// red => stop
// yellow => wait, about to be red
// green => GOOOO!
// myTrafficSignColor
// if(string check here)
// else if(string check here)
// else if()
// 

let myTrafficColor: string  = "green"
if(myTrafficColor === "red"){
    console.log ("STOP!!!")
} else if (myTrafficColor === "yellow"){
    console.log ("Wait, about ot be red ")
} else if (myTrafficColor === "green"){
    console.log ("Go go go!")
}


// you are a restaurant owner
// there has 5 customers who allergies
// 'peanut', 'milk', 'chicken', 'shellfish', 'eggs'
// if any of these allergies will be in your myFood variable
// myFood = 'peanut' -> stop, this has peanut.
// if there are no allergy food, you should say 'eat with peace'

let myFood: string = "gluten products"

if (myFood === "peanut"){
    console.log ("STOP, this has peanut!!!")
} else if (myFood === "milk"){
    console.log ("STOP, this has milk!!!")
} else if ( myFood === "chicken"){
    console.log ("STOP, this has chicken!!!")
} else if (myFood === "shellfish"){
    console.log ("STOP, this has shellfish!!!")
} else if (myFood === "eggs") {
    console.log ("STOP, this has eggs!!!")
} else{
    console.log ("Eat with peace")
}
// using if else if when checking A one VARIABLE
// 

let tissue3: string = "heart"
if (tissue3 === "lung" || tissue3 === "heart" || tissue3 === "muscle" || tissue3 === "kidney" ||
tissue3 === "skin" || tissue3 === "gut"){
    console.log ("BE AWARE OF THESE TISSUES!" )
} else {
    console.log ('Just chillax') 
}


// You are a movie theater owner
// There are 4 age restrictions for movies:
// 'G' -> All ages
// 'PG' -> Under 13 need parental guidance
// 'PG-13' -> Must be 13 or older
// 'R' -> Must be 17 or older
//
// Check your variable movieRating
// If the rating is 'G', say: "Enjoy the movie!"
// If the rating is 'PG', say: "Kids under 13 need parental guidance."
// If the rating is 'PG-13', say: "Only 13 and older can watch this."
// If the rating is 'R', say: "Only 17 and older can watch this."
// If the rating is something else, say: "Invalid rating."
//
// Example:
// movieRating = 'PG-13' -> Only 13 and older can watch this.
let movieRating = "PG-13"
if (movieRating === "G"){
    console.log ("Enjoy the movie!")
} else if (movieRating === "PG"){
    console.log ("Kids under 13 need parental guidance.")
} else if ( movieRating === "PG-13"){
    console.log ("Only 13 and older can watch this.")
} else if (movieRating === "R") {
    console.log ("Only 17 and older can watch this.")
}else{
    console.log ("Invalid rating!")
}

if (movieRating === "G" || movieRating ==="PG" || movieRating === "PG-13" || movieRating ==="R") {
    console.log ("You can watch a movie!")
} else {
    console.log ("Invalid rating!")
}
 

// TWO STRING CHECK
// __________________________________________________________
//  I am going to a dealer.
//  if my name is 'Zelensky' AND if I want at the same time "BMW"
//          I will have a %100 discount
//  if my name is 'Salih' and any car is fine
//          I will get %50 discount
//  if I want 'Tesla'
//          You can have government credit
//  Everything else
//          You will have the full price
let myName: string =   "Tania"
let car:  string =  "Hyundai"

if (myName === "zelensky" && car === "BMW"){
    console.log (" I will have a %100 discount")
}else if (myName === "Tania" && car === "Hyundai"){
    console.log ("You get %25% discount")
} else if (myName === "Salih"){
    console.log ("I will get %50 discount" )
}else if (car === "Tesla") {
    console.log ("You can have government credit")
}else{
    console.log ("You will have the full price")
}
//name and dish variables:
// If the guest is "Anna" AND she orders "Borshch"
//        → It’s free, with extra pampushky
//
// If the guest is "Vova" AND (he orders "Varenyky" OR "Holubtsi")
//        → 50% discount, because he’s a VIP regular
//
// If the guest is "Alina" AND it is "Friday"
//        → Free kompot drink
//
// If the dish is "Varenyky" OR "Deruny"
//        → Free sour cream
//
// Everything else
//        → Normal price
let guest: string = "Alina"
let dish3: string = "Varenyky"
let day: string = "Friday"
if (guest === "Anna" && dish3 === "Borshch"){
    console.log ("It’s free, with extra pampushky")
} else if ((guest === "Vova") && (dish3 === "Borshch" || dish3 === "Deruny")){
    console.log ("50% discount, because he’s a VIP regular")
} else if (guest === "Alina"){
    console.log ("Free kompot drink")
}else if (dish3 === "Varenyky" || dish3 === "Deruny"){
    console.log ("Free sour cream")
}else{
    console.log ("Normal Price.")
}


