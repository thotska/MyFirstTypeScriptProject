//Question #3
//PartA
let wirelessMousePrice: number = 25.99
let stockAvailable: number = 150
let minimumStockLevel: number = 20
let shippingPricePerOrder: number = 5.99
console.log ((wirelessMousePrice * 3) + shippingPricePerOrder)

//question 4
let pointsPerEnemy = 100;
let pointsPerTreasure = 50;
let pointsPerLifeLost = -200;
let bonusUnder5Min = 500;

let enemiesDefeated = 8;
let treasuresCollected = 12;
let livesLost = 1;
let levelTime = 4.5;

let scoreFromEnemies = enemiesDefeated * pointsPerEnemy;
let scoreFromTreasures = treasuresCollected * pointsPerTreasure;
let scoreFromLivesLost = livesLost * pointsPerLifeLost;

//Question #5
let homeworkScore = 85;
let midtermScore = 92;
let finalScore = 88;

let homeworkWeight = 0.30;  
let midtermWeight = 0.35;   
let finalWeight = 0.35;    

let weightedHomework = homeworkScore * homeworkWeight;
let weightedMidterm = midtermScore * midtermWeight;
let weightedFinal = finalScore * finalWeight;

let weightedAverage = weightedHomework + weightedMidterm + weightedFinal;

console.log("Weighted Average: " + weightedAverage);

let passingRate: number = 70
console.log (weightedAverage >= passingRate);
console.log ("Student passed: " + (weightedAverage >= passingRate));
