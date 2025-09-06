//question1
// create an array of pets and you can put their name for example: Knopa, Escobar, etc.
// Create it empty first
// Then add your first pet name
// Print the new length
// Then add the second pet name
// Print the new length
// Print the array itself
// Remove the last pet
// Print the removed pet
// Print the array itself
// Print the length of the new array

let pet: string[] = []
console.log (pet.push("Lola"))
pet.push("Knopa")
console.log(pet.length)
console.log(pet)
console.log(pet.pop())
console.log (pet)
console.log (pet.length)

//question 2
// 1. Create an empty array called mixedData that can hold any data type
// 2. Add your name (string) using push()
// 3. Add your age (number) using push()
// 4. Add true or false if you like coding (boolean) using push()
// 5. Add the text "student" using push()
// 6. Add the number 100 using push()
// 7. Print the array itself
// 8. Print "My name is [name]" using index 0
// 9. Print "I am [age] years old" using index 1
// 10. Print "Do I like coding? [true/false]" using index 2
// 11. Print "My role is [role]" using index 3
// 12. Print "My score is [score]" using index 4
// 13. Print the first item (index 0) and the last item (calculate using .length)
// 14. Print "Array has [number] different pieces of information"
// 15. Remove the last item using pop() and print what was removed

let mixedData: (string | number | boolean)[] = []
mixedData.push("Tania")
mixedData.push(25)
mixedData.push(true)
mixedData.push("student")
mixedData.push(100)
console.log(mixedData)
console.log("My name is " + mixedData[0])
console.log(" I am " + mixedData[1] + "years old")
console.log("Do I like coding? " + mixedData[2])
console.log ("My role is " + mixedData[3] )
console.log ("My score is " + mixedData[4] )
console.log ("The first item ", mixedData[0])
console.log ("the last item " , mixedData[mixedData.length - 1])
console.log ("Array has " + mixedData.length + " different pieces of information")
let removedItems = mixedData.pop()
console.log (removedItems)
console.log (mixedData.pop())








