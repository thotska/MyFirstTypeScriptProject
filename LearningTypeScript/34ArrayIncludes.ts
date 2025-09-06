

// // REMOVING AT ANY INDEX
// // Our student array
let students = ["Alice", "Bob", "Charlie", "David"];
console.log("Original:", students); // ["Alice", "Bob", "Charlie", "David"]
// Remove 1 student starting at index 1 (remove "Bob")
let removed = students.splice(2, 2); // removing charlie
console.log(students)

// create students and add your classmates.
// and remove first 3
// and remove everyone else
// print the array and make sure it is empty

let existingStudent = ["Tania", "Salih","Vova", "Dima", "Anna", "Alina", "Artem"]
let removedStudents = existingStudent.splice(0,3)
let otherRemoved = existingStudent.splice(0,4)
console.log (existingStudent)

//question#3

// create a player list and add 6 people -> soccer, etc. anything (ronaldo, messi)
// first half of the game 2 people from index 3 got injured
// print injured people's name
// then one person from the first index left
// then print the one left person
// then print the whole original array


let players = ["Messi", "Ronaldo","Mbappé", "Neymar", "Haaland", "Salah"]
let injuredPlayers = players.splice(3,2)
console.log ( injuredPlayers)
let playersLeft = players.splice(0,1)
console.log ( playersLeft)
console.log ( players)

//question#4
// Create a browser array and add "Chrome", "Firefox", "Safari", "Edge"
// Remove Safari from  browser array
// you can print here
// Remove Firefox from  browser array
// Remove Chrome from  browser array
// I want to see an array which only has 'Edge'
let browser = ["Chrome", "Firefox", "Safari", "Edge"]
let safariRemoved = browser.splice(2,1)
let firefoxRemoved = browser.splice (1,1)
let chromeRemoved = browser.splice (0,1)
console.log (browser)




//adding with .splice()

// Pet store animals
// TODO: Remove "bird" from the store (it got adopted!)
// TODO: Add "hamster" between "cat" and "fish"

let pets2 = ["dog", "cat", "bird", "fish"];
let removedBird = pets2.splice(2,1)
let addedHamster = pets2.splice(2,0,"hamster")
console.log (pets2)

//++++ add favorite animal after fish
 pets2.splice(4,0,"panda")
 console.log (pets2)



 ///question5
 // // Movie playlist

// TODO: Add "New Comedy" after "Old Comedy"
// TODO: Add "Horror Movie" at the beginning (index 0)
// TODO: Add "Documentary" at the end using splice()
// TODO: Remove the middle movie

let movies = ["Action Movie", "Old Comedy", "Drama"];
movies.splice(2,0,"New Comedy")
movies.splice(0,0,"Horror Movie")
console.log(movies)
movies.splice(5,0,"Documentary")
console.log(movies)
movies.splice(3,1)
console.log(movies)


//// replacing
let movies1 = ["Action Movie", "Old Comedy", "Drama"];
// I want to replace "Old Comedy" with "New Comedy"
movies1.splice(2, 1, 'No Drama Lama')
console.log(movies1)

//replace "Action Movie" with you fav  genre
movies1.splice(0,1, "Fiction")
console.log(movies1)

/// replacing -  remove everything and add "homework"
movies1.splice(0,3, "homework")
console.log(movies1)
