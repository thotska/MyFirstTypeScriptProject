//question 1.1
// If cuisine is 'italian', print 'Welcome to our Italian restaurant!'</span>
// If cuisine is 'mexican', print 'Bienvenidos to our Mexican cantina!'</span>
// If cuisine is 'chinese', print 'Welcome to our Chinese kitchen!'</span>
// Otherwise, print 'Welcome to our general restaurant!'

let restaurantCuisine: string = "chinese"
if(restaurantCuisine === "italian"){
    console.timeLog ("Welcome to our Italian restaurant!")
}else if (restaurantCuisine === " mexican") {
    console.log ("Bienvenidos to our Mexican cantina!")
} else if (restaurantCuisine === "chinese"){
    console.log ("Welcome to our Chinese kitchen!")
}else{
    console.log ("Welcome to our general restaurant!")
}

//question 1.2
let browserName: string = "chrome"
if (browserName === "chrome") {
    console.log("Running tests on Chrome - excellent compatibility")
} else if (browserName === "firefox") {
    console.log("Running tests on Firefox - good compatibility")
} else if (browserName === "safari") {
    console.log("Running tests on Safari - limited features")
} else if (browserName === "edge") {
    console.log("Running tests on Edge - moderate compatibility")
} else {
    console.log("Unsupported browser for testing")
}

//question1.3
let difficulty: string = 'hard'
let playerLevel: number = 25

if (difficulty === 'easy') {
    console.log("Relax and enjoy the game!")
} else if (difficulty === 'medium' && playerLevel >= 20) {
    console.log("Good challenge for your level!")
} else if (difficulty === 'medium' && playerLevel < 20) {
    console.log("Might be challenging for your level")
} else if (difficulty === 'hard' && playerLevel >= 30) {
    console.log("Perfect! You can handle this!")
} else if (difficulty === 'hard' && playerLevel < 30) {
    console.log("This will be very challenging!")
} else {
    console.log("Unknown difficulty setting")
}
 //question 2.1
 // If age >= 18 AND passedWrittenTest is true, print 'Eligible for driving license!'</span>
// If age >= 16 AND age < 18 AND passedWrittenTest is true, print 'Eligible for learner permit!'</span>
// If age >= 16 AND passedWrittenTest is false, print 'Need to pass written test first'</span>
// Otherwise (age < 16), print 'Too young for any driving permit'</span>

let age: number = 17;
let passedWrittenTest: boolean = true;

if (age >= 18 && passedWrittenTest === true) {
    console.log("Eligible for driving license!");
} else if (age >= 16 && age < 18 && passedWrittenTest === true) {
    console.log("Eligible for learner permit!");
} else if (age >= 16 && passedWrittenTest) {
    console.log("Need to pass written test first");
} else {
    console.log("Too young for any driving permit");
}

//question2.2
let memberAge: number = 25;
let isPremiumMember: boolean = true;
let monthlyVisits: number = 15;

if (isPremiumMember === true && monthlyVisits >= 20) {
    console.log("Premium reward: Free personal trainer session!");
} else if (isPremiumMember === true && monthlyVisits >= 10) {
    console.log("Premium member: Access to all facilities");
} else if (isPremiumMember && monthlyVisits >= 15) {
    console.log("Great commitment! Consider premium upgrade");
} else if (memberAge >= 65 || memberAge <= 18) {
    console.log("Special discount available!");
} else {
    console.log("Standard membership benefits apply");
}

//question 2.3
let temperature: number = 85; 
let humidity: number = 75;    
let isRaining: boolean = false;

if (temperature > 90 && humidity > 80) {
    console.log("Extreme heat warning! Stay indoors!");
} else if (temperature > 85 && humidity > 70 && isRaining === false) {
    console.log("Hot and humid - drink lots of water!");
} else if (temperature < 32 && isRaining ) {
    console.log("Freezing rain warning!");
} else if (temperature >= 70 && temperature <= 85 && isRaining === false) {
    console.log("Perfect weather for outdoor activities!");
} else if (isRaining) {
    console.log("Take an umbrella!");
} else {
    console.log("Check weather updates regularly");
}

//question 3.1
let testScore: number = 87
if (testScore >= 90) {
    console.log("Grade: A - Excellent work!");
} else if (testScore >= 80) {
    console.log("Grade: B - Good job!");
} else if (testScore >= 70) {
    console.log("Grade: C - Satisfactory");
} else if (testScore >= 60) {
    console.log("Grade: D - Needs improvement");
} else {
    console.log("Grade: F - Please retake the test");
}
//question 3.2
let performanceScore: number = 75;
let yearsWithCompany: number = 3;

if (performanceScore >= 95) {
    console.log("Performance: A - Outstanding! Promotion recommended!");
} else if (performanceScore >= 90 && yearsWithCompany >= 2) {
    console.log("Performance: A - Excellent! Bonus eligible!");
} else if (performanceScore >= 90) {
    console.log("Performance: A - Excellent work!");
} else if (performanceScore >= 80) {
    console.log("Performance: B - Good performance, keep it up!");
} else if (performanceScore >= 70) {
    console.log("Performance: C - Meets expectations");
} else {
    console.log("Performance: Needs improvement - Additional training required");
}

// question 3.3
let testCoverage: number = 92;  
let codeStyleScore: number = 85;  
let hasDocumentation: boolean = true;  
let average: number = (testCoverage + codeStyleScore) / 2

if (average >= 90 && hasDocumentation === true) {
    console.log("Code Quality: A - Professional grade automation!");
} else if (average >= 90) {
    console.log("Code Quality: A - Excellent automation code!");
} else if (average >= 80) {
    console.log("Code Quality: B - Good automation practices");
} else if (average >= 70) {
    console.log("Code Quality: C - Acceptable, room for improvement");
} else {
    console.log("Code Quality: Needs significant improvement");
}

