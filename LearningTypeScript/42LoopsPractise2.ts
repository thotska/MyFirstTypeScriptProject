// we will have 3 arrays.
// 1 array for current students
// 1 array for showing the online students
// 1 array for checking who is online today

// today at the class we have currentStudents online and in person mixed
// we do also have onlineStudentsBatch1 who are in the batch for online
// What I want you guys to do is give me from online students who is at
// currently class today.
// who we currently have currentOnlineStudents -> 'Anna', 'Art', 'Katya', 'Arty'
// 1. create a loop
// 2. check every single currentStudents and if they are in the
// onlineStudentsBatch1 then
// 3. put them in the currentOnlineStudents

let currentStudents = ['Vova', 'Dima', 'Anna', 'Tania', 'Art', 'Katya', 'Arty']
let onlineStudentsBatch1 = ['Anna', 'Art', 'Katya', 'Arty', 'Alina']
let currentOnlineStudents: string[] = []
for(let i=0; i<currentStudents.length; i++){
    if(onlineStudentsBatch1.includes(currentStudents[i])){
        currentOnlineStudents.push(currentStudents[i])
    } 
}console.log("current online students" + currentOnlineStudents )


while(currentStudents.length>0){
    let currentStudentsNewArray = currentStudents.pop()!
    if(onlineStudentsBatch1.includes(currentStudentsNewArray)){
        currentOnlineStudents.push(currentStudentsNewArray)
    }
}console.log("Current online student " + currentOnlineStudents)





// we are starting a trucking company
// we have truckInventory
// we have reliable trucks
// we have saved trucks
let truckInventory = ['RAM', 'Chevy', 'Ford', 'Suzuki', 'Freightliner', 'International']
let reliableTruck = ['RAM', 'Ford', 'Freightliner']
// if it is a reliable truck then we are saving
let savedTrucks: string[] = []

for (let i=0; i<truckInventory.length; i++){
    if(reliableTruck.includes(truckInventory[i])){
        savedTrucks.push(truckInventory[i])
    }
}console.log("My saved cars for buying are " + savedTrucks)





// Your mission:
// Use a fori loop to go through each item
// If item is in weapons → display "WEAPON: [item name]"
// Else if item is in defenseItems → display "DEFENSE: [item name]"
// Else → display "OTHER: [item name]"
// Think about:
// - How do you check multiple conditions?
// - What order should you check the conditions?
// - How do you display the category for each item?
let gameItems = ['sword', 'shield', 'potion', 'armor', 'bow'];
let weapons = ['sword', 'bow'];
let defenseItems = ['shield', 'armor'];
for(let i=0; i<gameItems.length; i++){
    if(weapons.includes(gameItems[i])){
        console.log("WEAPON: " + gameItems[i])
    }else if(defenseItems.includes(gameItems[i])){
        console.log("DEFENSE: " + gameItems[i])
    }else{
        console.log("OTHER:" + gameItems[i])
    }
}


// while loop only
// We are managing a guest list
// We want to COUNT guests whose name starts with "S"
// Task: Loop through guestList
// If name starts with 'S', increase guestCount
let guestList = ['Sam', 'John', 'Sophie', 'Mike', 'Steve', 'Emma']
let guestCount = 0
while(guestList.length>0){
    let guests = guestList.pop()
    if(guests?.startsWith("S")){
        guestCount++
    }
}console.log(guestCount)

// while loop only
// We are analyzing a list of words
// We want to COUNT words that start with 'a' or 'A'
// Task: Loop through words
// If word starts with 'a' or 'A', increase aWordsCount
let currentWords = ['Apple', 'banana', 'Apricot', 'orange', 'avocado']
let aWordsCount = 0
while(currentWords.length>0){
    let singleWord = currentWords.pop()
    if((singleWord?.startsWith("a")) || (singleWord?.startsWith("A"))){
        aWordsCount++
    }
}console.log(aWordsCount)



// while and for i loop
// We are reviewing customer emails
// We want to COUNT emails that end with "gmail.com"
// Task: Loop through emails
// If email ends with "gmail.com", increase gmailCount


let emails = ['alex@gmail.com', 'sara@yahoo.com', 'mike@gmail.com', 'emma@hotmail.com']
let gmailCount = 0
for(let i=0; i<emails.length; i++){
    if(emails[i].endsWith("gmail.com")){
        gmailCount++
    }
}console.log(gmailCount)


while(emails.length>0){
    let newEmail = emails.pop()
    if(newEmail?.endsWith("gmail.com")){
        gmailCount++
    }
}console.log(gmailCount)