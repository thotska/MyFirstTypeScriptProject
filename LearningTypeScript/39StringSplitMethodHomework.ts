//Create a string testCaseName with value "login-user-validation-test".
//  Use split("-") to break it into parts.
//  Store the result in testParts. 
// Check if testParts includes "user" - if yes, replace it with "customer". 
// Add "automated" to the end of testParts.
//  Create a new string by joining testParts with dashes. 
// Print the original string, the split array, and the final joined string.


let testCaseName: string = "login-user-validation-test"
let testParts = testCaseName.split("-")
if (testParts.includes("user")) {
    testParts[1] = testParts[1].replace("user", "customer")
}
console.log(testParts);  // ["login", "customer", "validation", "test"]
testParts.push("automated")
let finalName: string = testParts.join("-")
console.log(finalName)
console.log(testCaseName)
console.log(testParts)
//question2
//Create a string userEmail with value "john.doe@company.com". 
// Use split("@") to separate the email into parts. 
// Store in emailParts. 
// Check if the domain part (index 1) includes "company" - if yes, move it to a verifiedDomains array and add "TRUSTED-" prefix. 
// Split the username part (index 0) by "." and store in nameParts. 
// Add "qa-team" to verifiedDomains.
//  Print all arrays and their lengths.
let userEmail:  string = "john.doe@company.com"
let verifiedDomains: string [] = []
let emailParts = userEmail.split("@")
let username = emailParts[0];           // "john.doe"
let domain = emailParts[1];             // "company.com"

if (domain.includes("company")) {
    verifiedDomains.push("TRUSTED-" + domain)
}
let nameParts = username.split(".");    // ["john", "doe"]

verifiedDomains.push("qa-team");

console.log("Email Parts:", emailParts);           // ["john.doe", "company.com"]
console.log("Name Parts:", nameParts);             // ["john", "doe"]
console.log("Verified Domains:", verifiedDomains); // ["TRUSTED-company.com", "qa-team"]

console.log("emailParts:", emailParts.length);         // 2
console.log("nameParts:", nameParts.length);           // 2
console.log("verifiedDomains:", verifiedDomains.length); // 2

// question #3
//Create a string apiEndpoint with value "https://api.test.com/users/profile/settings".
//  Use split("/") to break into parts. 
// Store in urlParts.
//  Check the first part (index 0) - if it includes "https", move it to a secureProtocols array. 
// Check the third part (index 2) - if it includes "test", replace it with "prod.environment". 
// Add "v2" to the end of urlParts. 
// Insert "secure" at the beginning of secureProtocols. 
// Calculate total parts across both arrays.
let apiEndpoint: string = "https://api.test.com/users/profile/settings"
let urlParts = apiEndpoint.split("/")
let securedProtocols: string[] = []
console.log(urlParts)
if(urlParts[0].includes("https")){
    securedProtocols.push(urlParts[0])
    urlParts.splice(0,1)
}
console.log(urlParts)
console.log(securedProtocols)
if(urlParts[2].includes("test")){
    urlParts.splice(2,1,"prod.environment")
}
console.log(urlParts)
urlParts.push("v2")
securedProtocols.splice(0,0,"secure")
console.log(urlParts.length + securedProtocols.length)

//question#4
//Create a string testData with value "user123,password456,admin,active". 
// Use split(",") to separate into parts. Store in dataParts. 
// Check if dataParts includes "admin" - if yes, move it to a adminUsers array and add "ELEVATED-" prefix.
//  Replace "active" with "verified-status". 
// Add "qa-reviewed" to dataParts. 
// Insert "system-admin" at the beginning of adminUsers.
//  Remove the last item from adminUsers and store it.
//  Print all results.
let testData: string = "user123,password456,admin,active"
let adminUser:string[] = []
let dataParts =  testData.split(",")
console.log(dataParts)
if(dataParts.includes("admin")){
    let removedData = dataParts.splice(2,1) //[ 'user123', 'password456', 'active' ]
    adminUser.push("ELEVATED-" + removedData) //[ 'ELEVATED-admin' ]
}
console.log(adminUser)
console.log(dataParts)
dataParts.splice(2,1,"verified-status")
console.log(dataParts)
dataParts.push("qa-reviewed")
adminUser.splice(0,0,"system-admin")
let lastItemRemoved = adminUser.pop()
console.log(adminUser)
console.log(dataParts)

//question#5
//Create a string logPath with value "C:\\logs\\qa\\daily\\errors.txt". Use split("\\\\") to break into path parts. 
// Store in pathParts. 
// Check the first part (index 0) - if it includes "C:", move it to a systemDrives array. 
// Check the second part (index 1) - if it includes "logs", replace it with "test-logs".
//  Add "archive" to pathParts. 
// Insert "primary-drive" at the beginning of systemDrives.
//  Remove the last path part and add "BACKUP-" prefix to it.
//  Calculate total path elements.
let logPath: string = "C:\\logs\\qa\\daily\\errors.txt"
let systemDrives: string[]= []
let pathParts: string[] = logPath.split("\\")
console.log(pathParts)
if(pathParts[0].includes("C")){
    systemDrives.push(pathParts[0])
    pathParts.splice(0,1)
}
console.log(systemDrives)
console.log(pathParts)
if(pathParts[1].includes("logs")){
    pathParts.splice(1,1,"test-logs")
}
pathParts.push("archive")
systemDrives.splice(0,0,"primary-drive")
let removedLastPart = ("BACKUP-" + pathParts.pop())
console.log(removedLastPart)
console.log(systemDrives.length + pathParts.length)
