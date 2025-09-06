// Your task: Use split() to create an array of words
// let sentence = "The quick brown fox";
// let words = sentence.split("___");  // Replace "___" with something right
// console.log(words);
// I want to have this -> ['The','quick','brown','fox']


let sentence = "The quick brown fox"
let words = sentence.split("o")
console.log(words)


//"Alice,30,QA Engineer,Premium"Your task: Split the user data into separate pieces
let userData = "Alice,30,QA Engineer,Premium";
let userDetails = userData.split(",");  // What separator?
console.log(userDetails);

//"home-products-electronics-laptops"
// Your task: Create an array of navigation pages
let urlPath = "home-products-electronics-laptops";
let navigationPages = urlPath.split("-");  // What separator?
console.log(navigationPages);

// "testuser@gmail.com"


let me = 'Salih,25,Aston Martin Vantage'
// my name is Salih
// I am 25 years old
// My favorite car is Aston Martin Vantage
let myInfo = me.split(",")
console.log(myInfo)
console.log("My name is " + myInfo[0])
console.log("I am " + myInfo[1])
console.log("My favorite car is " + myInfo[2])