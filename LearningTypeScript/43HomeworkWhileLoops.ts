//question#1
let developers = ['Sarah', 'Mike', 'Jessica', 'Tom', 'Lisa', 'John']
let seniorDevelopers = ['Sarah', 'Jessica', 'John']
let experiencedTeam: string[] = []
let seniorCount = 0
while(developers.length>0){
 let eachDeveloper =  developers.pop()!
if(seniorDevelopers.includes(eachDeveloper)){
experiencedTeam.push(eachDeveloper)
seniorCount++
}
}console.log(" We have " + seniorCount +"experienced developers leading our projects!")

//question#2

let tickets = ['Login Issue', 'Button Color', 'Data Loss', 'Slow Loading', 'Crash Error']
let criticalBugs = ['Data Loss', 'Crash Error']
let urgentList: string[] = []
while(tickets.length>0){
let singleTicket = tickets.pop()!
if(criticalBugs.includes(singleTicket)){
urgentList.push(singleTicket)
}
}console.log("urgent list tickets: " + urgentList)

// question#3
let testCases = ['Login', 'Register', 'Payment', 'Search', 'Profile']
let complexTests: string[] = []
while(testCases.length>0){
let simpleTestCase = testCases.pop()!
if(simpleTestCase.length > 6){
complexTests.push(simpleTestCase.toUpperCase())
}
}

// question#4
let apiUrls = ['api.microsoft.com/users', 'api.google.com/search', 'graph.microsoft.com/me', 'api.github.com/repos']
let microsoftApis: string[] = []
let microsoftCount = 0
while(apiUrls.length>0){
 let singleApiUrl =  apiUrls.pop()!
if(singleApiUrl.includes("microsoft")){
microsoftApis.push(singleApiUrl)
microsoftCount++
}
}console.log("Microsoft APIs:", microsoftApis);
console.log("Count:", microsoftCount);


//question#5
let testResults = ['Login:95', 'Cart:80', 'Checkout:92', 'Search:75', 'Profile:88']
let excellentResults: string[] = []
let excellentCount = 0

while(testResults.length>0){

 let singleTestResult = testResults.pop()!
let parts = singleTestResult.split(":")//["Login", "95"]
 let testName = parts[0]; //["Login"]
  let score = parseInt(parts[1]); ["95"]
if(score>85 && testName.includes("e")){
excellentResults.push(singleTestResult)
excellentCount++
}
}console.log("There are " + excellentCount + " excellent results!")

//bonus question
// let testers = [
//     {name: 'Sarah', experience: 5, bugsFound: 120},
//     {name: 'Mike', experience: 4, bugsFound: 98},
//     {name: 'Sam', experience: 6, bugsFound: 145},
//     {name: 'Emma', experience: 2, bugsFound: 67},
//     {name: 'Steve', experience: 4, bugsFound: 110}
// ]
// let seniorTesters = []
// let totalBugs = 0
// let testerCount = 0
//       while(testers.length>0){
//  if (testers.experience > 3 && testers.name.toUpperCase().startsWith('S')) {
//     seniorTesters.push(testers)    
//     totalBugs = testers.bugsFound  
//     testerCount++ 
//  }
// } 
