//question #1
//create arrays regularTests and priorityTests.
//  Start with regularTests: ["login-test", "ui-test", "api-test"].
//  Check if it includes "login-test" - if yes, move it to priorityTests using splice. 
// Add "database-test" to regularTests. 
// Insert "smoke-test" at the beginning of priorityTests.
//  Replace the last item in regularTests with "integration-test". 

import { WatchDirectoryFlags } from "typescript"

// Print both arrays and their combined length.
let regularTests: string[] =  ["login-test", "ui-test", "api-test"]
let priorityTests: string[] = []
if (regularTests.includes("login-test")){
    regularTests.splice(0,1)                // ["ui-test", "api-test"]
    priorityTests.splice(0,0,"login-test")   // ["login-test"]
}
regularTests.push("database-test")        /// ["ui-test", "api-test", "database-test"]
priorityTests.splice(0,0,"smoke-test")     /// ["smoke-test, "login-test"]
regularTests.splice((regularTests.length -1), 1, "integration-test") /// ["ui-test", "api-test", "integration-test"]

console.log(regularTests)
console.log(priorityTests)
console.log(regularTests.length + priorityTests.length)


//question #2
//Create arrays testQueue: ["chrome-test", "firefox-test", "safari-test"] and completedTests: empty. 
// Check if testQueue includes "chrome-test" - if yes, move it to completedTests and add "PASSED-" prefix. 
// Add "edge-test" to testQueue. 
// Replace "firefox-test" with "firefox-mobile-test". 
// Insert "priority-test" at the beginning of testQueue. 
// Remove the last item from completedTests and store it.
//  Print both arrays and the stored test.

let testQueue: string[] =  ["chrome-test", "firefox-test", "safari-test"]
let completedTests:string[] =  []
if(testQueue.includes("chrome-test")){
    completedTests.push("PASSED-" + testQueue[0])   ///["chrome-test"]
}
testQueue.push('edge-test') /// ["firefox-test", "safari-test", "edge-test"]
testQueue.splice(testQueue.indexOf["firefox-test"], 1)   /// ["safari-test", "edge-test"]
testQueue.splice(0,0,"firefox-mobile-test")  //["firefox-mobile-test", "safari-test", "edge-test"]
testQueue.splice(0,0,"priority-test")  // ["priority-test","firefox-mobile-test", "safari-test", "edge-test"]
let lastCompletedTestItemRemoved = completedTests.pop()
console.log(testQueue)
console.log(completedTests)
console.log(completedTests, testQueue, lastCompletedTestItemRemoved)

// question#3
//Create endpoints: ["login-api", "payment-api", "logout-api"] and testedEndpoints: empty.
// Check the first endpoint (index 0) - if it includes "login", move it to testedEndpoints and add "VERIFIED-" prefix.
//  Check the second endpoint (index 1) - if it includes "payment", replace it with "secure-payment-api". 
// Add "profile-api" to endpoints. Insert "health-check" at the beginning of testedEndpoints.
//  Calculate total endpoints across both arrays.
let endpoints: string[]= ["login-api", "payment-api", "logout-api"]
let testedEndpoints: string[]= []
if(endpoints[0].includes("login")){
     let removed = endpoints.splice(0, 1)[0];                
    testedEndpoints.push("VERIFIED-" + removed); 
}
if(endpoints[1].includes("payment")){
    endpoints.splice(endpoints.indexOf("payment-api"),1)
    endpoints.splice(1,0,"secure-payment-api")
}
console.log(endpoints)
console.log(testedEndpoints)
endpoints.push("profile-api")
testedEndpoints.splice(0,0,"health-check")
console.log(endpoints.length + testedEndpoints.length)

//question #4
//Create devices: ["iphone-12", "android-samsung", "ipad-pro"] and connectedDevices: empty. 
// Check if devices includes "iphone-12" - if yes, move it to connectedDevices and add "CONNECTED-" prefix. 
// Replace "android-samsung" with "android-pixel". 
// Add "tablet-surface" to devices. Insert "emulator" at the beginning of connectedDevices.
//  Remove the last device and store it in a variable. 
// Print all arrays and the stored device.
let devices: string[] = ["iphone-12", "android-samsung", "ipad-pro"]
let connectedDevices: string[] = []
if(devices.includes("iphone-12")){
    let removedDevice = devices.splice(0,2)[0]
    connectedDevices.push("CONNECTED-" + removedDevice)
} 
console.log(connectedDevices)

devices.splice(1,1,"android-pixel")
devices.push("tablet-surface")
connectedDevices.splice(0,0,"emulator")
let lastDeviceRemoved = devices.pop()
console.log(devices, connectedDevices, lastDeviceRemoved)

//question #5
// Task: Create connections: ["mysql-prod", "redis-cache", "mongo-dev"]
// and activeConnections: empty. Check the first connection (index 0) -
// if it includes "mysql", move it to activeConnections and add "SECURED-"
// prefix. Check the second connection (index 1) - if it includes "redis",
// replace it with "redis-cluster". Add "postgres-test" to connections.
// Insert "monitor-connection" at the beginning of activeConnections.
// Remove the last connection from activeConnections and add "BACKUP-"
// prefix to it. Calculate total connections.

let connections: string[] = ["mysql-prod", "redis-cache", "mongo-dev"]
let activeConnections: string [] = []

if(connections[0].includes( "mysql")){
    activeConnections.push("SECURED-" + connections.splice(0,1)[0])
}
console.log(activeConnections)
if(connections[0].includes("redis-cache")){
    connections.splice(connections.indexOf("redis-cache"), 1, "redis-cluster")
}
connections.push("postgres-test")
activeConnections.splice(0,0, "monitor-connection")
let lastConnectionRemoved = "BACKUP-" + activeConnections.pop()
console.log(lastConnectionRemoved)
console.log("Total Connections: " + (connections.length + activeConnections.length))
console.log(connections)
console.log(activeConnections)

// Create rawData: ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
// and cleanData: empty. For each item in rawData, check if it includes "valid" -
// if yes, move it to cleanData and replace "valid" with "verified". Insert "data-header"
//  at the beginning of cleanData. Remove the last item from rawData and add "processed-"
// prefix before adding to cleanData. Print the processing results.
// Skills practiced: String manipulation with arrays, conditional moving, prefix operations
let rawData: string[] = ["valid-email", "invalid-phone", "valid-address", "corrupt-data"]
let cleanData:string[] = []
if(rawData[0].includes("valid")){
    cleanData.push(rawData[0].replace("valid","verified"))
}
if (rawData[1].includes("valid")) {
    cleanData.push(rawData[1].replace("valid", "verified"));
}
if (rawData[2].includes("valid")) {
    cleanData.push(rawData[2].replace("valid", "verified"));
}
if (rawData[3].includes("valid")) {
    cleanData.push(rawData[3].replace("valid", "verified"));
}

cleanData.splice(0,0,"data-header")
let removedItem = rawData.pop()
cleanData.push("processed-" + removedItem)
console.log(cleanData)
console.log(rawData)
console.log(cleanData.length)