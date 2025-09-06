//>,<, =<,!==, >=

//compare my age with my brothers age

//compare your age with your partner
// my age = 25
// my partner age = 30

let myAge: number = 25
let myPartnerAge: number = 30
console.log (myPartnerAge>myAge);


//we are designing a race car and if race car goes less than 4 seconds to 0-60 mph
// if it is more than 3 seconds its fast
//it is not fast if less than 2.9

let zeroToSixty1: number = 2.9
let acceptableFastSeconds: number = 3
console.log (acceptableFastSeconds > zeroToSixty1)


//exam has the passing rate 85 or above 85 included
// acceptablePassRate = 85
// grade = 85 => true, 86 => true 
let acceptablePassRate: number = 85
let grade: number = 92
console.log (acceptablePassRate <= grade)


//acceptable price = 2000
// actual price = 1998, 2000, 20001 => false
let acceptablePrice: number  = 2000
let actualPrice: number = 2025
console.log (acceptablePrice >= actualPrice)
console.log (acceptablePrice <= actualPrice )


// diet with calorie counting 
// if my food is more than 200 calories
// 200 -> true
let acceptableCalories: number = 200
let foodCalories: number = 267
console.log (foodCalories <= acceptableCalories)
