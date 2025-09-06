//question 1
let perfectScore: number = 100;
let myScore: number = 95;
console.log ('Did I get perfect score? ' + (perfectScore === myScore)) // false

//question2
let requiredSpeed: number = 15;  
let mySpeed: number = 12;         
console.log ("Is the speed greater than required " + (mySpeed > requiredSpeed)) //false
console.log ("Is my speed less than or equal to required " + (requiredSpeed >= mySpeed)) //true
console.log ("Is my speed is greater than or equal to 10 km/h: " + (mySpeed >= 10)) // true

//question3
//You can only have the party if your parents are away AND (at the same time) you cleaned your room.

let parentsAway: boolean = true
let cleanedRoom: boolean = true
console.log ("Can I have a house party? " + (parentsAway && cleanedRoom)) //true

let areParentsAway: boolean = true;
let isRoomCleaned: boolean = false;  // Oops, forgot to clean!

console.log('Can I have the party? ' + (parentsAway && cleanedRoom)) //true

//question4
// You'll charge it if the battery is below 20% OR 
// you're going to bed soon (either reason is enough)

let isBatteryLow: boolean = false;     // Battery is at 35%
let isGoingToBedSoon: boolean = true;  // It's bedtime!

console.log('Should I charge my phone? ' + (isBatteryLow || isGoingToBedSoon)) //true

//question5
//You'll watch a movie if you have popcorn AND the movie is good. Write code to check this
let havePopcorn: boolean = true
let movieIsGood: boolean = false
console.log ("Will I watch a movie? " + (havePopcorn && movieIsGood)) //fasle

//You'll order takeout if you're hungry OR you're too lazy to cook. Write code for this scenario
let iAmHungry: boolean = true
let tooLazyToCook: boolean = false
console.log ("Will I order takeout? " + (iAmHungry || tooLazyToCook)) //true

//Bonus question
// You can enter if you're skilled enough AND (at the same time) you have time, OR if you're a VIP member
let skilledEnough: boolean = true
let haveTime: boolean = true
let vipMember: boolean = false
console.log ("Will I enter the tournament? " + (skilledEnough && haveTime || vipMember))

