//Question 1: Splice Remove Examples

// let originalLanguages: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Rust']
// let zremovedLanguages = originalLanguages.splice(1,3)
// let languageRemoved = originalLanguages.splice(3,1)
// console.log (originalLanguages.length)
// console.log (originalLanguages)

// Question 2: Splice Add Examples

let fruitsArray: string[] = ['apple', 'banana']
fruitsArray.splice(1,0,'orange')
fruitsArray.splice(0,0,'grape')
fruitsArray.splice(4,0,'mango')
fruitsArray.splice(1,0,'kiwi')
fruitsArray.splice(6,0, 'pear', 'peach')

// Question 3: Splice Replace Examples

let originalBookCollection: string[] = ['Mystery Novel', 'Old Fantasy', 'Romance']
originalBookCollection.splice(1,1,'New Fantasy')
console.log(originalBookCollection)
originalBookCollection.splice(2,1,'Adventure Story')
console.log(originalBookCollection)
originalBookCollection.splice(0,1,'Science Fiction')
console.log(originalBookCollection)
originalBookCollection.splice(0,3)
originalBookCollection.splice(0,0,"Reading time")
console.log(originalBookCollection)

// Question 4: Splice with If/Else Examples

// let memberName: string[] =  ['Anna', 'Ben', 'Christina', 'Dan', 'Elena']
// if( memberName[0].startsWith("A")){
//     memberName.splice(0,1)
// } 
// console.log(memberName)
// if(memberName[1].length === 3){
//     memberName.splice(1,1, "New Member")
// }
// console.log(memberName)
// if(memberName[2].length === 5){
//     memberName.splice (1,0, "Senior")
// }
// console.log(memberName)
// if(memberName[3].length === 5){
//     memberName.splice (2,1, "New Member")
// }
// console.log(memberName)
// if (memberName[4].length === 5){
//     memberName.splice(3,0,"Senior")
// }

// question #5
let dataString: string[] = ["200", "15", "false", "intern", "75"];



//NEW Homework

//Question#1

// Start with an empty array called testQueue
// Add 5 test cases using push(): "Login Test", "Search Test", "Cart Test", "Payment Test", "Logout Test"
// Print the queue after adding all tests and the current queue length
// Insert "Security Test" at position 1 using splice()
// Replace the test at position 3 with "Updated Cart Test" using splice()
// Process (remove) the last 2 tests using pop() and print what was removed
// Add "Priority Test" using push() and "Emergency Fix Test" at the beginning using splice()
// Print the final queue and its length
//  let testQueue1: string[  ] = []
//  testQueue.push('Login Test', 'Search Test', 'Cart Test', 'Payment Test', 'Logout Test')
//  console.log(testQueue)
//  console.log(testQueue.length)
// testQueue.splice(1,0,"Security Test")
//  console.log(testQueue)
//  testQueue.splice(3,1,"Updated Cart Test")
//  console.log(testQueue)
// let removedTest1 = testQueue.pop();
// let removedTest2 = testQueue.pop();
// console.log("Removed tests:", removedTest1, removedTest2);
//  console.log(testQueue)
//  testQueue.push("Priority Test")
// testQueue.splice(0,0,"Emergency Fix Test")
// console.log(testQueue)
// console.log(testQueue1qwe.length)

//question#2
//Create an array userTypes with: ["admin", "tester", "developer"]
// Create an array activeUsers with: ["alice", "bob", "charlie"]
// Check if userTypes includes "admin" - if yes, insert "super-admin" at position 1 using splice()
// Check if activeUsers includes "bob" - if yes, replace "charlie" with "bob-backup" using splice()
// Check if userTypes includes "manager" - if no, add it at the beginning using splice()
// Remove the last userType using pop() and add it to activeUsers using push()
// Print both arrays and their lengths after each operation
// Print how many total users and user types we have

let userType = ["admin", "tester", "developer"]
let activeUsers = ["alice", "bob", "charlie"]
if(userType.includes("admin")){
    userType.splice(1,0,"super-admin")
} 
    console.log(userType)
if(activeUsers.includes("bob")){
    activeUsers.splice(2,1,"bob-backup")
}
    console.log(activeUsers)

if(userType.includes("manager")){

}else{
    userType.splice(0,0,"manager")
}
console.log(userType)
let removedUser = userType.pop()
if (removedUser !== undefined) { ////// ask this!!!!!!
    activeUsers.push(removedUser);
}
console.log (userType.length)
console.log(activeUsers.length)


  //question #3
// Start with bugReports: ["Low Bug 1", "Medium Bug 1", "High Bug 1"]
// Insert "Critical Bug 1" at the beginning using splice() (highest priority first)
// Add "Low Bug 2" and "High Bug 2" using push()
// Check if the array includes any "Critical" bugs - if yes, replace "Medium Bug 1" with "Priority Bug 1" using splice()
// Insert "Emergency Bug" at position 1 using splice() (second highest priority)
// Check if array length is greater than 5 - if yes, remove the last 2 bugs using pop()
// Replace the last remaining bug with "Final Bug" using splice()
// Print the bug reports and count after each major change
let bugReports =  ["Low Bug 1", "Medium Bug 1", "High Bug 1"]
  bugReports.splice(0,0,"Critical Bug 1") 
  bugReports.push("Low Bug 2", "High Bug 2")
    console.log(bugReports.length)
  if(bugReports.includes("Critical")){
    bugReports.splice(1,1,"Priority Bug 1")
  }
  bugReports.splice(1,0,"Emergency Bug")
  let arrayLength = bugReports.length
  if(arrayLength > 5){
    bugReports.pop()
    bugReports.pop()
  }
  bugReports.splice(bugReports.length - 1,1,"Final Bug")
    console.log(bugReports)
  console.log(bugReports.length)


  //question #4
// Create features: ["login", "search", "checkout"]
// Create testedFeatures: empty array
// For each feature, check if it includes "login" - if yes, move it to testedFeatures using splice and push
// Insert "authentication" at the beginning of features using splice()
// Replace "search" with "advanced-search" in features using splice() (find its position first)
// Add "profile" to features using push()
// Check if testedFeatures length is greater than 0 - if yes, insert "Testing Started" at the beginning of testedFeatures
// Remove the last feature using pop() and add it to testedFeatures with "Tested: " prefix
// Print both arrays and their lengths after each major operation
let features: string[] = ["login", "search", "checkout"]
let testedFeatures:string[] = []
if (features.includes("login")){

}
if (testedFeatures.includes("login") !== true){
    testedFeatures.push("login")
}
console.log(testedFeatures)
features.splice(0,0,"authentication")
console.log(features)
features.splice(2,1,"advanced-search")
features.push("profile")
console.log(features)
if(testedFeatures.length > 0){
    testedFeatures.splice(0,0,"Testing Started")
}
console.log(testedFeatures)
let removedFeature = features.pop()
testedFeatures.push("Tested " + removedFeature)
console.log(testedFeatures.length)
console.log(features.length)

//question #5
// Create environments: ["dev", "staging"]
// Create activeEnvironments: empty array
// Insert "production" at position 1 in environments using splice()
// Check if environments includes "dev" - if yes, move it to activeEnvironments using splice() and push()
// Check if environments includes "testing" - if no, insert it at the beginning using splice()
// Replace "staging" with "pre-production" in environments using splice()
// Remove the last environment using pop() and insert it at position 1 in activeEnvironments using splice()
// Check if activeEnvironments length equals 2 - if yes, add "All Systems Go" using push()
// Insert "Monitor Active" at the beginning of activeEnvironments using splice()
// Print both arrays and their lengths after each major operation
let environments: string[] = ["dev", "staging"]
let activeEnvironments: string[] = []
environments.splice(1,0,"production")
if(environments.includes("dev")){
    activeEnvironments.push("dev") ///////wrong?
}
console.log(activeEnvironments)
if(environments.includes("testing")){

}else{
    environments.splice(0,0,"testing")
}
console.log(environments)
environments.splice(3,1,"pre-production")
console.log(environments)
let removedEnvir = environments.pop()
activeEnvironments.splice(0,0,removedEnvir!)////wrong?
console.log(activeEnvironments)
if (activeEnvironments.length === 2){
    activeEnvironments.push("All systems Go")
}
activeEnvironments.splice(0,0,"Monitor Active")
console.log(activeEnvironments)
console.log(environments)
console.log(activeEnvironments.length)
console.log(environments.length)




