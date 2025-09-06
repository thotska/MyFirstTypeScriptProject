// We have fruits stored as a comma-separated string

// Your mission:
// You need to examine each fruit individually
// For fruits that contain the letter 'a' → display "EATING: [fruit name]"
// For fruits that don't contain 'a' → display "THROWING AWAY: [fruit name]"
// Think about:
// - How can you work with each fruit separately?
// - How can you check every fruit one by one?
// - How can you determine if a fruit contains a specific letter?
let fruit: string = 'apple,kiwi,mango,pear';
let fruitArray: string[]= fruit.split(",")  //[ 'apple', 'kiwi', 'mango', 'pear' ]
console.log(fruitArray)

for (let i=0; i<fruitArray.length; i++){
    if(fruit[i].includes("a")){
        console.log("Eating " + fruitArray[i] )
    }else{
        console.log("THROWING AWAY:" + fruitArray[i]  )
    }
}



// ★★☆☆☆ (2/5)
// We have drinks stored as a comma-separated string
// Your mission:
// You need to examine each drink and categorize them with these priorities:
// - First priority: drinks that contain the letter 'a' → display "DRINKING: [drink name]"
// - Second priority: drinks that begin with the letter 't' → display "TASTING: [drink name]"
// - Everything else → display "SKIPPING: [drink name]"
// Think about:
// - How can you work with each drink separately?
// - How can you check multiple conditions in order of importance?
// - How can you determine what letter a word begins with?
// - What happens when a drink matches multiple conditions?


let drinks: string = 'cola,water,tea,juice,milk';
let drinkArray:string[]= drinks.split(",")
for(let i=0; i<drinkArray.length; i++){
    if(drinkArray[i].includes("a")){
        console.log("Drinking:" + drinkArray[i])
    }else if (drinkArray[i].startsWith("t")){
        console.log("tasting" + drinkArray[i])
    }else[
        console.log("skipping " + drinkArray[i])
    ]
}


// I am checking cars
// carsOnline = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// savedCars = []
// check every single car -> loop
// check the current car -=> dynamic if
// and if the current car is what I am looking for 'Porsche'-> if true
// then I save -> push, splice
// What I saved = []
// How many cars I saved

let carsWeb: string[] = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
let shoppingCardCars: string[] = []
for(let i=0; i<carsWeb.length; i++){
    if(carsWeb[i].includes("Genesis")){
        console.log(shoppingCardCars.push("Genesis"))
    }
}
console.log(shoppingCardCars)
console.log(shoppingCardCars.length)


// we are at costco, and we have a shopping list
// and if the shopping list current item includes letter 'a'
// then add to cart
 let shoppingList = ['eggs', 'apples', 'protein bar', 'milk']
let myCart = []


// if my current vacation place is 'Ukraine'
// add it to my saved place
let vacationPlaces:string[] = ['Hawaii', 'Porte rico', 'Ukraine', 'Poland']
let mySavedPlaces: string[] = []

while( vacationPlaces.length> 0){
    let currentPlace = vacationPlaces.pop()!
     if(currentPlace.includes("Ukraine")){
        mySavedPlaces.push(currentPlace)
    console.log(mySavedPlaces)
}
}

// we are checking clothes.
// if the current clothe is red add it to cart
// let clothes = ['red dress', 'blue shirt', 'white socks', 'black glasses']
// let myClothCart: string[] = []
// while (clothes.length > 0) {
//     // ?? or ! or ? filters out the 'undefined' or 'null'
//     let currentCloth = clothes.pop()!
//     if (currentCloth.includes('red')) {
//         myClothCart.push(currentCloth)
//     }



// We have a box of items (last item is on top)

// We'll keep unpacking until the box is empty
// if the item includes 'e' then print
// console.log("KEEPING: " + item);
// else
// console.log("DISCARDING: " + item);

let box: string[] = ['notebook', 'pen', 'eraser', 'marker', 'stapler'];
while(box.length>0){
    let myItem = box.pop()!
    if(myItem.includes("e")){
        console.log("KEEPING: " + myItem)
    }else{
        console.log("DISCARDING: " + myItem)
    }
}



// We have a pile of toys (last item is on top)
// We'll keep unpacking until the pile is empty
// If the toy starts with 'p' then print
// console.log("SAVING: " + toy);
// else
// console.log("GIVING AWAY: " + toy);

let toys: string[] = ['car', 'doll', 'puzzle', 'ball', 'robot'];
while(toys.length>0){
    let toyItem = toys.pop()!
    if(toyItem.startsWith("p")){
        console.log("SAVING: " + toyItem)
    }else{
        console.log("GIVING AWAY: " + toyItem)
    }
}
// We have a stack of clothes (last item is on top)
// We'll keep unpacking until the stack is empty
// If the item length is more than 4 then print
// console.log("FOLDING: " + item);
// else
// console.log("DONATING: " + item);
let clothes: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
while(clothes.length>0){
    let unpackedItems = clothes.pop()!
    if(unpackedItems.length >4){
        console.log("FOLDING: " + unpackedItems)
    }else{
        console.log("DONATING: " + unpackedItems)
    }
}
let clothes1: string[] = ['shirt', 'jeans', 'hat', 'scarf', 'jacket'];
let clothes2: string[] = []
while(clothes1.length>0){
    let unpackedItems = clothes1.pop()!
    if(unpackedItems.length >4){
        clothes2.push(unpackedItems)
    }   console.log(clothes2)
    }



 // Example 4: stationery

// Unpack until empty
// If item ends with 'r' → console.log("KEEPING: " + item)
// else → console.log("THROWING: " + item);
let stationery: string[] = ['pencil', 'eraser', 'marker', 'notebook', 'ruler'];
while(stationery.length>0){
    let supplies = stationery.pop()
    if(supplies?.endsWith("r")){
        console.log("KEEPING: " + supplies)
    }else{
        console.log("THROWING: " + supplies)
    }
}


// Example 3: books
// Unpack until empty
// If item includes letter 'a' → console.log("READING: " + item)
// else → console.log("IGNORING: " + item);

let books: string[] = ['Math', 'History', 'Art', 'Science', 'Poetry'];
while(books.length>0){
    let unpackedBooks = books.pop()
    if(unpackedBooks?.includes("a")){
    console.log("READING: " + unpackedBooks)
    }else{
        console.log("IGNORING: " + unpackedBooks )
    }
}


// Unpack until empty
// If item starts with 'h' OR ends with 't' → console.log("CUDDLING: " + item)
// else → console.log("WATCHING: " + item);
let pets: string[] = ['cat', 'parrot', 'hamster', 'dog', 'turtle'];
while(pets.length>0){
    let checkedPet = pets.pop()
    if(checkedPet?.startsWith("h") || checkedPet?.endsWith("t")){
        console.log("CUDDLING: " + checkedPet)
    }else{
        console.log("WATCHING: " + checkedPet)
    }
}

// Example 1: snacks

// for i loop
// if the current snack is ending with 's' count it

let snacks: string[] = ['chips', 'cookie', 'nuts', 'candy', 'pretzel'];
let count: number = 0

for(let i=0; i< snacks.length; i++){
    if(snacks[i].endsWith("s")){
         count++
    }
}
console.log(count)



// count the people who are sleepy
// if the current person is 'Vova' || 'Dima' || "Tania"
// count it
// when the loop is finished
// print '3 amazing people came even though they were tired!'

let classroom = ['Vova', 'Dima', "Tania", 'Alina', 'Artem', 'Anna']
let sleepyPeople = ['Vova', 'Dima', "Tania"]
let nameCount: number = 0 
for(let i=0;i<classroom.length; i++){
    if(sleepyPeople.includes(classroom[i]))
        count++
} 
console.log(sleepyPeople.length + ' amazing people came even though they were tired!')