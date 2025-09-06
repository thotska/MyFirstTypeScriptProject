

let movies = ["comedy", "fiction", "horror"]
console.log (movies[0])
console.log (movies[2])


let salih = ["Salih", "Aydin", 99, true]
console.log (salih.length)

// 1. Create an empty shopping list array
let shoppingList = [""];
// 2. Add 5 items to your list using push()
// Your code here...
// 3. Display the length of your list
// Your code here...
// 4. Remove the last item using pop()
// Your code here...
// 5. Display your final list
// Your code here...

shoppingList.push("coffee", "bread", "butter", "eggs", "apples")
 console.log ("shopping list:" + shoppingList)

 shoppingList.length
 console.log ("List length:" + shoppingList.length)

 shoppingList.pop()
 console.log(shoppingList.pop())

 let removedITem = shoppingList.pop()
  console.log ("Removed item:" + removedITem)

  console.log ("Final shopping list:" + shoppingList)


// create an empty array arrayName : (somethingHere)[] = []
// after that push 4 new elements and don't store or print it.
// after that push 2 new elements and print it
// after that push 3 new elements and store it and print it with a message.
// also send me your guess what's inside your array without running your code.
  let theBurger: ( string | number | boolean )[] = []
 theBurger.push("bread","tomato", "pickles", "meat")
 theBurger.push("ketchup", "lettuce")
console.log (theBurger)
let theBurger3 = theBurger.push("oil","olives","bacon")
console.log (theBurger)




// Simulating a real QA automation scenario: Managing test cases for Google.com
// create an empty array for storing your test cases.
// add 'Login Test' to that array.
// add 'Search Test' to that array
// I want you to print all the amount of test cases you have after you add a new one.
let testCases: string[] = []
let testCaseNumber = testCases.push('Login Test')
console.log(testCaseNumber)
testCaseNumber = testCases.push('Search Test')
console.log(testCaseNumber)

// 'Checkout Test'

testCaseNumber = testCases.push("Checkout Test")
console.log (testCaseNumber)

// New USer Test
testCaseNumber = testCases.push("New User Test")
console.log (testCaseNumber)

console.log (testCases.length)