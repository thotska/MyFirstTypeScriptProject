// 1. Create an empty array called fruits
// 2. Add "apple" using push() and store the return value in a variable
// 3. Print "Now I have [number] fruits" using the return value
// 4. Add "banana" using push() and store the return value
// 5. Print "Now I have [number] fruits" using the new return value
// 6. Remove the last fruit using pop() and store what was removed
// 7. Print "I removed [fruit name]"

let fruits: (string | number | boolean)[] = []
fruits.push("apple")
let fruitsAppleStored = fruits.push()
console.log ("Now I have " + fruits.length + " fruit." )
let fruitsBananaStored = fruits.push("banana")
console.log ("Now I have " + fruits.length + " fruits." )
let fruitsAll = fruits.pop()
console.log ("I removed banana")
console.log ( fruits )


// question #2
// 1. Create an empty array called aboutMe
// 2. Add your name (text) using push() and store the return value
// 3. Print "My list has [number] things" using the return value
// 4. Add your age (number) using push() and store the return value
// 5. Print "My list has [number] things" using the new return value
// 6. Add true or false if you like pizza using push()
// 7. Remove the last item using pop() and store what was removed
// 8. Print "I removed [value]"

let aboutMe: (string | number | boolean)[] = []
let myName = aboutMe.push("Tetiana")
console.log("My list has " + aboutMe.length + " thing.")
let myAgeNumber = aboutMe.push(25)
console.log("My list has " + aboutMe.length + " things.")
let likeOrNotPizza = aboutMe.push(true)
let removedBoolean = aboutMe.pop()
console.log ("I removed " + removedBoolean)
console.log(aboutMe)

// question #3
// 1. Create an empty array called colors
// 2. Add "red" using push() and store the return value
// 3. Print "I have [number] colors" using the return value
// 4. Add "blue" using push() but don't store the return value
// 5. Add "green" using push() and store the return value
// 6. Print "I have [number] colors" using the new return value
// 7. Remove the last color using pop() and store what was removed
// 8. Print "I removed [color name]"

let colors: (string | number | boolean)[] = []
let colorCount = colors.push("red")
console.log("I have " + colors.length + " colors") 
colors.push("blue")
console.log("I have " + colors.length + " colors")
let updatedColorCount = colors.push("green")
console.log ("I have " + colors.length + " colors")
let lastColorRemoved = colors.pop()
console.log ("I removed " + lastColorRemoved)


//question #4
// 1. Create an empty array called numbers
// 2. Add the number 1 using push() and store the return value
// 3. Print "Array length is now [number]" using the return value
// 4. Add the number 2 using push() and store the return value
// 5. Print "Array length is now [number]" using the new return value
// 6. Add the number 3 using push() without storing the return value
// 7. Remove the last number using pop() and store what was removed
// 8. Print "I removed the number [number]" 

let numbers: (string | number | boolean)[] = []
let addedNumbers = numbers.push (1)
console.log ("Array length is now " + numbers)
let addedTwoNumbers = numbers.push(2)
console.log ("Array length is now " + numbers)
numbers.push(3)
let deletedNumber = numbers.pop()
console.log ("I removed the number " + deletedNumber)

//question #5
// 1. Create an empty array called pets
// 2. Add "dog" using push() and store the return value
// 3. Print "I have [number] pets" using the return value
// 4. Add "cat" using push() and store the return value
// 5. Print "I have [number] pets" using the new return value
// 6. Add "fish" using push() and store the return value
// 7. Print "I have [number] pets" using the newest return value
// 8. Remove the last pet using pop() and store what was removed
// 9. Print "I removed my [pet name]"
let pets: (string | number | boolean)[] = []
let dog = pets.push("dog")
console.log ("I have " + pets.length + " pets")
let cat = pets.push("cat")
console.log ("I have " + pets.length + " pets")
let fish = pets.push('fish')
console.log ("I have " + pets.length + " pets")
let takenOutPet = pets.pop()
console.log ("I removed " + takenOutPet )

//bonus question
// 1. Create an empty array called mixedList
// 2. Add your favorite food (text) using push() and store the return value
// 3. Print "My list has [number] things" using the return value
// 4. Add your lucky number using push() and store the return value
// 5. Print "My list has [number] things" using the new return value
// 6. Add true or false if you like ice cream using push()
// 7. Remove the last thing using pop() and store what was removed
// 8. Print "I removed [value]"
// 9. Add "fun" using push() and store the return value
// 10. Print "My final list has [number] things"

let mixedList: (string | number | boolean)[] = []
let myFavFood = mixedList.push("pasta")
console.log ("My list has " + mixedList.length +  " things")
let myLuckyNumber = mixedList.push(9)
console.log ("My list has " + mixedList.length +  " things")
let likeIceCream = mixedList.push(true)
let removedItem = mixedList.pop()
console.log ("I removed " + removedItem)
let fun = mixedList.push("fun")
console.log ("my final list has " + mixedList.length + " things.")

