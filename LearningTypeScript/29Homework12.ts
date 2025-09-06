//question#1

// 1. Find start position using indexOf('[') and end using indexOf(']')
// 2. Extract environment name using slice()
// '  Production  '
// 3. Use trim() to clean spaces
// 'Production'
// 4. If startsWith "Prod" →
//       if includes "smoke" → "Production Smoke Testing"
//       else → "Production Basic Testing"
//    Else →
//       if endsWith "ment" → "Development Environment"
//       else → "Unknown Environment"
let testConfig: string = 'Environment: [  Production  ] includes smoke tests and regression';
let testCofigStart: number = testConfig.indexOf("[")
let testConfigEnd: number = testConfig.indexOf("]")
let environmentString: string = testConfig.slice((testCofigStart + 1), testConfigEnd)
console.log(environmentString)
let environment: string = environmentString.trim()
console.log(environment)
if (environment.startsWith("Prod")) {
    if (environment.includes("smoke")) {
        console.log("Production Smoke Testing")
    } else {
        console.log("Production Basic Testing")
    }
} else {
    if (environment.endsWith("ment")) {
        console.log("Development Environment")
    } else {
        console.log("Unknown")
    }
}

//question #2
// 1. Use indexOf() to find '[' and lastIndexOf() to find ']'
// 2. Extract browser info using slice()
// 'Chrome__120__beta'
// 3. Use replace() to replace first '__' with ' '
// 'Chrome 120__beta'
// 4. Use replaceAll() to replace remaining '__' with ' '
// 'Chrome 120 beta'
// 5. If startsWith "Chrome" →
//       if endsWith "beta" → "Chrome Beta Version"
//       else → "Chrome Stable Version"
//    Else →
//       if includes "Firefox" → "Firefox Browser"
//       else → "Other Browser"
let browserData: string = 'Browser: [Chrome__120__beta] supports automation and headless mode';
let fbr: number = browserData.indexOf("[")
let sbr: number = browserData.indexOf("]")
let BrowserString: string = browserData.slice((fbr + 1), sbr)
console.log(BrowserString)
let BrowserData: string = BrowserString.replaceAll("__", " ")
console.log(BrowserData)
if (BrowserData.startsWith("Chrome")) {
    if (BrowserData.endsWith("Beta")) {
        console.log("Chrome Beta Version")
    } else {
        console.log("Chrome Stable Version")
    }
} else {
    if (BrowserData.includes("Firefox")) {
        console.log("Firefox Browser")
    } else {
        console.log("Other Browser")
    }

}

//question #3

// 1. Use indexOf() to find '[' position
// 2. Use lastIndexOf() to find ']' position from the end
// 3. Extract status using slice()
// '  PASSED__123  '
// 4. Use trim() to remove spaces
// 'PASSED__123'
// 5. Use replace() to remove '__123'
// 'PASSED'
// 6. If startsWith "PASS" →
//       if includes "automated" → "Automated Test Passed"
//       else → "Manual Test Passed"
//    Else →
//       if endsWith "ED" → "Test Failed"
//       else → "Test Status Unknown"
let testReport: string = 'Status: [  PASSED__123  ] includes automated and regression tests';
let frBr: number = testReport.indexOf("[")
let seBr: number = testReport.indexOf("]")
let testReportString: string = testReport.slice((frBr + 1), seBr)
console.log(testReportString)
let testReportTrim: string = testReportString.trim()
console.log(testReportTrim)
let cleanTestReport: string = testReportTrim.replace("__123", "")
console.log(cleanTestReport)
if (cleanTestReport.startsWith("PASS")) {
    if (testReport.includes("automated")) {
        console.log("Automated Test Passed")
    } else {
        console.log("Manual Test Passes")
    }
} else {
    if (cleanTestReport.endsWith("ED")) {
        console.log("Test Failed")
    } else {
        console.log("Test Status Unknown")
    }
}

//question #4

// 1. Use indexOf() to find '[' and slice() to extract content
// '  Playwright--v1.40--stable  '
// 2. Use trim() to remove outer spaces
// 'Playwright--v1.40--stable'
// 3. Use replaceAll() to replace all '--' with ' '
// 'Playwright v1.40 stable'
// 4. Use lastIndexOf() to find last space for version checking
// 5. If startsWith "Playwright" →
//       if endsWith "stable" → "Playwright Stable Version"
//       else → "Playwright Beta Version"
//    Else →
//       if includes "Selenium" → "Selenium Framework"
//       else → "Unknown Framework"
let frameworkConfig: string = 'Framework: [  Playwright--v1.40--stable  ] includes headless and parallel'
let firBr: number = frameworkConfig.indexOf("[")
let secBr: number = frameworkConfig.indexOf("]")
let frameworkConfigString: string = frameworkConfig.slice((firBr + 1), secBr)
    console.log(frameworkConfigString)
let cleanFrameworkConfig: string = frameworkConfigString.trim()
    console.log(cleanFrameworkConfig)
let Framework: string = cleanFrameworkConfig.replaceAll("--"," ")
    console.log(Framework)
let lastIndexOfVersion: number = Framework.lastIndexOf(" ")
    console.log(lastIndexOfVersion)
    if(Framework.startsWith("Playwright")){
        if (Framework.endsWith("stable")){
            console.log("Playwright Stable Version")
        }else{
            console.log("Playwright Beta Version")
        }
    }else{
        if(Framework.includes("Selenium")){
            console.log ("Selenium Framework")
        }else{
            console.log("Unknown Framework")
        }
    }

    // question #5
// 1. Use indexOf() to find '[' and lastIndexOf() to find ']'
// 2. Extract log level using slice()
// '  ERROR::timeout::critical  '
// 3. Use trim() to clean spaces
// 'ERROR::timeout::critical'
// 4. Use replace() to replace first '::' with ' - '
// 'ERROR - timeout::critical'
// 5. Use replaceAll() to replace remaining '::' with ' - '
// 'ERROR - timeout - critical'
// 6. If startsWith "ERROR" →
//       if endsWith "critical" → "Critical Error Found"
//       else → "Standard Error Found"
//    Else →
//       if includes "WARNING" → "Warning Message"
//       else → "Info Message"

let logMessage: string = 'Log: [  ERROR::timeout::critical  ] includes database and connection issues'

let firstBracket: number = logMessage.indexOf("[")
let lastBracket: number = logMessage.lastIndexOf("]")
let logMessageString: string = logMessage.slice(firstBracket + 1, lastBracket)
    console.log(logMessageString)
let cleanLog: string = logMessageString.trim()
    console.log(cleanLog)
let formattedLog: string = cleanLog.replaceAll("::", " - ")
    console.log(formattedLog)
    if(formattedLog.startsWith("ERROR")){
        if(formattedLog.endsWith("critical")){
            console.log ("Critical Error Found")
        }else{
            console.log ("Standard Error Found")
        }
    }else{
        if(formattedLog.includes("WARNING")){
            console.log ("Warning Message")
        }else{
            console.log("Info Message")
        }
    }
