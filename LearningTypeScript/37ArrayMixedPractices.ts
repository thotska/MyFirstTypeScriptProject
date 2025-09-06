// #Question 1: Shopping Cart Priority Management**

// Create arrays `regularItems` and `priorityItems`. Start with regularItems: `["milk", "bread", "eggs"]`. Check if it includes 
// "bread" - if yes, move it to priorityItems using splice. Add "cheese"
// to regularItems.
//  Insert "urgent-medicine" at the beginning of priorityItems.
// Replace the last item in regularItems with "organic-eggs" with pop() and add with splice(indexDynamic).
// Print both arrays and their combined length.
// **Skills practiced**: Basic splice operations, includes(), moving between arrays


let regularItems:string[] = ["milk", "bread", "eggs"]
let priorityItems: string [] = []
if(regularItems.includes("bread")){
    regularItems.splice(1,1)
    priorityItems.splice(0,0,"bread")
}

regularItems.push('cheese')
priorityItems.splice(0,0,"urgent-medicine")
regularItems.pop()
regularItems.splice(regularItems.length, 0, "organic-eggs" )
console.log( regularItems.length + priorityItems.length)



//question2
// Create three arrays: 
// `pending`: `["app-v1", "api-v2"]`,
// `deploying`: empty, 
// `deployed`: empty.
//  Move the first pending item to deploying.
// Replace "v1" with "v1.1" in any array that contains it.
//  Add "database-v1" to pending.
// If deploying length equals 1, move its item to deployed and add "SUCCESS" suffix (put it before).
// Insert "MONITOR" at the beginning of deployed. Show the deployment pipeline status.
// **Skills practiced**: Multi-array management, conditional operations, string replacement
let pending: string[] = ["app-v1", "api-v2"]
let deploying: string[]  = []
let deployed: string[]  = []

// Pending first -> deploying -> deployed
let removedPendingVariables = pending.splice(0, 1)
deployed.splice(0, 0, removedPendingVariables[0])
// deployed.splice(0, 1, 'app-v1.1')
deployed.splice(0, 1, removedPendingVariables[0].replace('v1', 'v1.1'))
pending.push('database-v1')
if (deploying.length === 1) {
    let removedDeployedVariables = pending.splice(0, 1)
    deployed.push('SUCCESS-' + removedDeployedVariables[0])
}
deployed.splice(0, 0, 'MONITOR')
console.log(pending)
console.log(deploying)
console.log(deployed)

//CORRECT VERSION Upper

//question#3
// Start with `lowBugs`: `["ui-glitch", "typo-fix", "color-issue"]`, `mediumBugs`: `["login-slow"]`,
//  `criticalBugs`: empty. 
// Check each lowBug - if it includes "glitch", move it to mediumBugs and add
//  "urgent-" prefix. Replace lowBugs containing "fix" with "patch-required". If mediumBugs length > 1,
//   move the first one to criticalBugs. Insert "ESCALATED" at the beginning of criticalBugs.
//   Add "new-report" to lowBugs and remove the last criticalBug. Calculate total bugs across all severities.
// **Skills practiced**: Complex conditional logic, prefix/suffix operations, manual array checking


// let lowBugs: string[ ] = ["ui-glitch", "typo-fix", "color-issue"]
// let mediumBugs: string[] = ["login-slow"]
// let criticalBugs: string[] = []

// if (lowBugs[0].includes("glitch")){
//     lowBugs.splice(0,1)
//     mediumBugs.push("urgent-" + lowBugs.splice(0,1)[0] )
// }
// console.log(mediumBugs)
// if(lowBugs[1].includes("glitch")){

// }
// if(lowBugs[2].includes("glitch")){

// }


// lowBugs.splice(1,1)
// lowBugs.splice(1,0,"patch-required")

// if(mediumBugs.length > 1){
//     let movedBug = mediumBugs.splice(0, 1)[0];
//     criticalBugs.push("login-slow")
// }

// criticalBugs.splice(0,0,"ESCALATED")
// lowBugs.push("new-report")
// criticalBugs.pop()

// let totalBugs = lowBugs.length + mediumBugs.length + criticalBugs.length
// console.log(totalBugs)






