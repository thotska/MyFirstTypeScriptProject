let restaurantName: string = "The Cozy Corner";
let mainDishPrice: number = 18.50;
let drinkPrice: number = 4.25;
let dessertPrice: number = 7.80;

let totalBill: number = mainDishPrice + drinkPrice + dessertPrice;

console.log(" Welcome to " + restaurantName + "!");
console.log(" Main dish: $" + mainDishPrice);
console.log(" Drink: $" + drinkPrice);
console.log(" Dessert: $" + dessertPrice);
console.log(" Total bill: $" + totalBill);



let dailyStepGoal: number = 10000;
let dailyWaterGoal: number = 8;
let dailyWorkoutGoal: number = 1;

let stepsToday: number = 12500;
let waterToday: number = 6;
let workoutsToday: number = 1;

let stepsMet: boolean = stepsToday >= dailyStepGoal;
let waterMet: boolean = waterToday >= dailyWaterGoal;
let workoutMet: boolean = workoutsToday >= dailyWorkoutGoal;

console.log("Steps goal met: " + stepsMet);
console.log("Water goal met: " + waterMet);
console.log("Workout goal met: " + workoutMet);
//PArt B
let mondaySteps: number = 8500;
let tuesdaySteps: number = 11200;
let wednesdaySteps: number = 9800;

let averageSteps: number = (mondaySteps + tuesdaySteps + wednesdaySteps) / 3;
let onTrack: boolean = averageSteps >= dailyStepGoal;

console.log("Average steps over 3 days: " + averageSteps);
console.log("On track for daily goal: " + onTrack);


let monthlyIncome: number = 2345.2
let monthsInAYear: number = 12
let myYearlyIncome: number = monthlyIncome * monthsInAYear
console.log ( " My yearly income is " + myYearlyIncome)
console.log ( "My yearly income is " + (monthlyIncome * monthsInAYear));


//calculate the yearly income from the given values from below.
    // daily income is 2345.2
    //days in a month is 30
    // month in a year is 12
    // 'My yearly income is $1231231.123"

let monthlyIncome1: number = 2345.2
let daysInAMonth: number = 30
let monthsInAYear1: number = 12
let myYearlyIncome1: number = monthlyIncome1 * monthsInAYear1 * daysInAMonth
console.log ( " My yearly income is " + myYearlyIncome1)
console.log ( "My yearly income is " + (monthlyIncome1 * monthsInAYear1 * daysInAMonth));

let yearlyIncome: number = 123121.123
let daysInMonth: number = 30
let monthsInYear: number = 12
let myDailyIncome: number = yearlyIncome / monthsInYear / daysInAMonth
console.log ("My daily income is " + myDailyIncome)


//acceptablePullUp = 25
//actualPullUp = 1
// I passed the army test = (true/false)
let acceptablePullUp:  number = 25
let actualPullUp: number = 1
let passedTest: boolean = actualPullUp > acceptablePullUp
console.log ( "I passed the army test: " + passedTest ) // first way
console.log ( "I passed the army test: " + (actualPullUp > acceptablePullUp)) //second way

let acceptableHeat = 80
let middayHeat = 84
let morningHeat = 70
let nightHeat = 60

console.log ("Is outside cool enough? = " + (acceptableHeat > middayHeat))

console.log ("Is  outside cool enough? = " + (acceptableHeat > morningHeat))
console.log ("Is  outside cool enough? = " + (acceptableHeat > nightHeat))

