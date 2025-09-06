//question#1
// Your mission:
// Use a for i loop to go through each car
// If the car is in reliableCars → display "RELIABLE: [car name]"
// Otherwise → display "UNRELIABLE: [car name]"

// Think about:
// - How do you check if an item exists in another array?
// - How do you loop through all cars?
// - How do you display the results?

let carsExisting: string[] = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera'];
let reliableCars: string[] = ['Camry', 'Genesis', 'GT3 RS'];

for(let i=0; i<carsExisting.length; i++){
    if(reliableCars.includes(carsExisting[i])){
        console.log("RELIABLE:" + carsExisting[i])
    }else{
        console.log("UNRELIABLE: " + carsExisting[i])
    }
}
//question#2
// Your mission:
// 1. Split the fruits string into an array
// 2. Use a for i loop to go through each fruit
// 3. If fruit is in freshFruits → display "FRESH: [fruit name]"
// 4. Otherwise → display "ROTTEN: [fruit name]"

// Think about:
// - How do you convert a string to an array?
// - How do you check if a fruit exists in freshFruits?
// - How do you display the results?

let generalFruits = 'apple,kiwi,mango,pear';

let freshFruits = ['apple', 'mango', 'pear'];
let generalFruitsArray: string [] = generalFruits.split(",")
console.log(generalFruitsArray)
for(let i=0; i < generalFruitsArray.length; i++  ){
    if(freshFruits.includes(generalFruitsArray[i])){
        console.log("FRESH: " + generalFruitsArray[i] )
    }else{
        console.log("ROTTEN: " + generalFruitsArray[i])
    }
}

//question#3
// Your mission:
// 1. Use a while loop to process books until none left
// 2. Remove books one by one using pop()
// 3. If book is in favoriteBooks → display "READING: [book name]"
// 4. Otherwise → display "SKIPPING: [book name]"

// Think about:
// - How do you set up the while loop condition?
// - How do you remove books from the array?
// - How do you check if a book is in favoriteBooks?

let generalBooks = ['mystery', 'science fiction', 'romance', 'thriller', 'fantasy'];
let favoriteBooks = ['mystery', 'thriller'];

while(generalBooks.length>0){
    let book = generalBooks.pop()!
    if(favoriteBooks.includes(book)){
        console.log("READING: " + book)
    }else{
        console.log("SKIPPING: " + book)
    }
}

//question#4

// Your mission:
// 1. Split the items string into an array
// 2. Create a new empty array: let healthyFound = []
// 3. Use a fori loop to go through each item
// 4. If item is in healthyItems → add it to healthyFound
// 5. After loop, display the healthyFound array

// Think about:
// - How do you add items to a new array?
// - How do you check if an item is healthy?
// - How do you display the final array?

let items = 'apple,chips,carrot,ice cream,spinach';
let healthyItems: string[] = ['apple', 'carrot', 'spinach'];
let itemsArray: string[] = items.split(",")
let healthyFound: string[] = []
for (let i=0; i<itemsArray.length; i++){
    if(healthyItems.includes(itemsArray[i])){
       healthyFound.push(itemsArray[i])
    }console.log("Healthy food found: " + itemsArray[i])
}console.log("Final list of healthy items: ", healthyFound)


// //question#5
// // Your mission:
// // Use a fori loop to go through each item
// // If item is in weapons → display "WEAPON: [item name]"
// // Else if item is in defenseItems → display "DEFENSE: [item name]"
// // Else → display "OTHER: [item name]"

// // Think about:
// // - How do you check multiple conditions?
// // - What order should you check the conditions?
// // - How do you display the category for each item?

// let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
// let weapons = ['sword', 'bow'];
// let defenseItems = ['shield', 'armor'];
// for(let i=0;i<gameItems.length; i++){
//     if(defenseItems.includes(gameItems[i])){
//         console.log("DEFENSE: " + gameItems[i])
//     } else if(weapons.includes(gameItems[i])){
//         console.log("WEAPON: " + gameItems[i])
//     }else{
//         console.log("OTHER: " + gameItems[i])
//     }
// }
//BONUS QUESTION

// Your mission:
// 1. Create a counter starting at 0
// 2. Use while loop to process products until none left
// 3. Remove products one by one using pop()
// 4. If product is in portableProducts → increase counter
// 5. After loop, display "Portable products: [count]"

// Think about:
// - How do you set up the while loop?
// - How do you check if a product is portable?
// - Where should you display the final count?
let products = ['laptop', 'phone', 'tablet', 'monitor', 'keyboard'];
let portableProducts = ['phone', 'tablet'];
let productCount = 0
while(products.length>0){
    let removedProduct = products.pop()!
    if(portableProducts.includes(removedProduct)){
        productCount++
        console.log("Portable products: " + productCount)
    }
}
