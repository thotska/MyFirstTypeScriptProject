// question1a.

import { BlobOptions } from "buffer"
import { buffer } from "stream/consumers"

let expectedUser: string = "test123"
let actualUser: string = "test1234"
console.log (expectedUser === actualUser)
console.log (expectedUser !== actualUser)

//question 1b
let expectedPassword: string = "MySecurePassword"
let actualPassword: string = "mysecurepassword"
//messages
// Passwords are the same 
//Passwords are not the same
if(expectedPassword === actualPassword){
    console.log ("Passwords are the same")
}else {
    console.log ("Passwords are not the same")
}


if(expectedPassword !== actualPassword){
    console.log ("Passwords are the same")
}else {
    console.log ("Passwords are not the same")
}
//question 1c
let expectedError: string = "Username is required"
let actualError: string = "Username is required"
let expectedError2: string = "Password must be 8 characters"
let actualError2: string = "Password must be 8 characters long"

console.log("Error message 1 matches:", expectedError === actualError)
console.log ("Error 2 is not matching: ", expectedError2 !== actualError2)

//question 2.1
//A website works only if both server is online AND (at the same time) database is connected. 
// Complete this code:
let serverOnline: boolean = true
let dataBaseWorking: boolean = false
console.log ("The website is working", (serverOnline && dataBaseWorking))

//question2.2
//A test passes if it works on Chrome OR Firefox. Complete this code:
let worksOnChrome: boolean = true
let worksOnFirefox: boolean = true
console.log ("Test Passed:", worksOnChrome || worksOnFirefox)

//question 2.3
let serverRunning: boolean = true
let hasInternet: boolean = true
let maintenanceMode: boolean = false
let maintenanceMode2: boolean = true
//System is ready if server is running AND has internet AND NOT in maintenance
console.log ("System ready", (serverRunning && hasInternet &&! maintenanceMode))
console.log ("System ready", (serverRunning && hasInternet &&! maintenanceMode2))

//question 2.4
//A user can access admin panel if they're an admin OR a manager, AND they're logged in:
let isAdmin: boolean = false
let isManager: boolean = true
let isLoggedIn: boolean = true
console.log ( "CAn access admin panel?", (isAdmin || isManager && isLoggedIn))

//question 3.1
let testPassed: boolean = true
if (testPassed){
    console.log ("Test successful!")
}else {
    console.log ("Test failed - needs debugging")
}
//question 3.2
let isProduction: boolean = false
if(isProduction){
    console.log ("Running in production - be careful!")
}else {
    console.log ("Safe to test - this is development")
}
//question 3.3
let apiResponseCode: number = 200
if(apiResponseCode){
    console.log ("API call successful")
}else{
    console.log ("API call NOT successful")
}
//question 3.4
let currentUsers: number = 150
let severCanHandle: number = 100
    if(currentUsers < severCanHandle){
        console.log ("Server running smoothly")
    }else {
        console.log ("Server overloaded")
    }

let currentUsers1: number = 150
let severCanHandle1: number = 100
    if(severCanHandle1 < currentUsers1){
        console.log ("Server overloaded")
    }else {
        console.log ("Server running smoothly")
    }

    //question 3.5
   let usernameCorrect: boolean = true
   let passwordCorrect: boolean = true
   let accountActive: boolean = true
   if (usernameCorrect && passwordCorrect && accountActive){
    console.log ( "Login successful")
   }else{
    console.log ("Login failed")
   }
   // question 4.1
   let bugSeverity: number = 3;

//If severity > 4 → "Critical bug - fix immediately!"
//If severity > 2 AND severity <= 4 → "High priority bug - fix today"
//Otherwise (severity <= 2) → "Low priority - fix when possible"

if(bugSeverity>4){
    console.log ("Critical bug - fix immediately!")
}else if (bugSeverity > 2 && bugSeverity <= 4){
    console.log ("High priority bug - fix today")
} else {
    console.log ("Low priority - fix when possible")
}
//question 4.2
let responseTime: number = 1500
//If response time > 3000: "Unacceptable - over 3 seconds"
// If response time > 1000 AND response time <= 3000: "Slow - needs optimization"
// Otherwise (response time <= 1000): "Good performance"
if (responseTime>3000){
    console.log ("Unacceptable - over 3 seconds")
}else if(responseTime> 1000){
    console.log ("Slow - needs optimization")
}else {
    console.log ("Good performance")
}
//question 4.3
let userRole: string = "tester"
//If role is 'admin': "Full access granted"
// <// If role is 'manager': "Management access granted"
// If role is 'tester': "Testing access granted"
//Otherwise: "Access denied"

if(userRole === "admin"){
    console.log("Full access granted" )
}else if (userRole === "manager"){
    console.log ("Management access granted")
}else if (userRole === "tester"){
    console.log ("Testing access granted")
}else {
     console.log("Access denied")
}
//question 4.4
let environment: string = "staging"
let databaseReady: boolean = true
let testsAvailable: boolean = true

//If environment === 'production': "Cannot run tests in production!"
// Else if environment === 'staging' AND databaseReady === true AND testsAvailable === true: "Ready to run staging tests"</span>
// Else if environment === 'development': "Development environment - safe to test"
// Otherwise (all other cases): "Environment not ready for testing"
if(environment === "production"){
    console.log ("Cannot run tests in production!")
}else if (environment === 'staging' && databaseReady === true && testsAvailable === true){
    console.log ("Ready to run staging tests" )
} else if ( environment = "development"){
    console.log ("Development environment - safe to test")
} else {
    console.log ("Environment not ready for testing")
}

//bonus question
let browser: string = "chrome"
let version: number = 95
// If browser === 'chrome' AND version >= 90: "Fully supported"
// Else if browser === 'chrome' AND version >= 80 AND version < 90: "Mostly supported"
// Else if browser === 'firefox' AND version >= 85: "Fully supported"
// Else if browser === 'firefox' AND version >= 75 AND version < 85: "Mostly supported"
// Otherwise (any other browser or version): "Not supported"
if (browser === "chrome" && version >= 90){
    console.log ("Fully supported")
}else if((browser === "chrome" && version >= 80)){
    console.log ("Mostly supported")

}else if ( browser === "firefox" && version >= 85){
    console.log ("Fully supported")
}else if ( browser === "firefox" && version >= 75 &&  version < 85){
    console.log ("Mostly supported")
}else 
    console.log ("Not supported")



    