//logical operators

let isButtonVisible: boolean = true; 
let isButtonContainingHello: boolean = true; 

//AND (at th same time (just say it in mind)) = &&, OR = ||,  NOT = !
//boolean better to start with IS something happening


//if I have a car and at the same time
//  In have a gas then it should be true

let isCarExisting: boolean = true
let isGasExisting: boolean = true
console.log (isCarExisting && isGasExisting)


// if you have money on the card and the same time the card is activated then you can buy something

let isMoneyOnTheCard: boolean = true
let isCardActivated: boolean = true
console.log (isMoneyOnTheCard && isCardActivated)


let isOutsideWarm: boolean = false
let isNotRaining: boolean = false
console.log('we can go out have fun = ' + (isOutsideWarm && isNotRaining))

let isPorscheAvailable: boolean = true
let isBmwAvailable: boolean = true
console.log ( "I will buy a car: " + (isPorscheAvailable || isBmwAvailable))


let isDennisOpen: boolean = true
let isWendysOpen: boolean = false
console.log ( "I will eat burger:" + (isDennisOpen || isWendysOpen))