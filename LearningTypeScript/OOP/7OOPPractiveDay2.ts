// create a class for wayfairHomePage
// add a variable = anything worth to store for later, can be a message, title, etc.
// add a method for searching
    // it will take one argument searchText
    // it will return the search results as string[]
    // if the searchText is 'chair' then return something making sense
    // else if the searchText is 'couch' then return something making sense

class WayfairHomePage{
    mainPaigeMessage: string = "Warehouse Clearout"
    searching(searchText: string): string [] {
        let searchResults: string[] = []
        if(searchText === "chair"){
            searchResults.push("kitchen chair", "living room chair", "outdoor chair")
        }else if (searchText === 'couch'){
            searchResults.push("fabric couch, leather couch")
        }
        return searchResults
    }

// add another method for login
    // it will take 2 arguments username and password
    // it will return nothing
    // if the username length is less then 3 print 'Bad username!'
    // else 'Good username!'
    // if the password length is less then 8 'Bad password!'
    // else 'Good password!'
    loginIn(username: string, password: string):void{
        if(username.length < 3){
            console.log('Bad username!')
        }else{
            console.log("Good user name!")
        }

        if(password.length<8){
            console.log('Bad password!')
        }else{
            console.log('Good password!')
        }
    }
}



// Create a class called CarsLoginTestPage
// Add three properties for validation:
// - yourNameHere : string = 'Sign In to Cars.com'
// - yourNameHere : string = 'Invalid username or password'
// - yourNameHere : string = 'Welcome to Cars.com!'
// 1. navigateToLoginPage(): void - prints 'Navigating to Cars.com login page...'
// 2. enterCredentials(username: string, password: string): void
//    - prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password
// create a copy of the class and store it
// call methods and print the variables
class  CarsLoginTestPage{
    mainWebSiteMessage: string = 'Sign In to Cars.com'
    errorMessage: string = 'Invalid username or password'
    welcomeMessage: string = 'Welcome to Cars.com!'

    navigateToLoginPage(): void{
        console.log('Navigating to Cars.com login page...')
    }

    enterCredentials(username: string, password: string): void{
        console.log('Entering username: ' + username)
        console.log('Entering password: ' + password)
    }
}
let CarsLoginTestPageCopy = new CarsLoginTestPage
CarsLoginTestPageCopy.navigateToLoginPage()
CarsLoginTestPageCopy.enterCredentials("tania", "password123") 
console.log(CarsLoginTestPageCopy.mainWebSiteMessage);
console.log(CarsLoginTestPageCopy.errorMessage);
console.log(CarsLoginTestPageCopy.welcomeMessage);



// Create a class for testing the Chick-fil-A mobile order login page
// Add three properties for validation:
// - The expected title text that should appear on the login screen
// - The message shown when login fails
// - The message shown when login succeeds
// 1. A method to navigate to the Chick-fil-A login screen
//    - It should print a message showing that the app is moving to the login page
// 2. A method to input the username and password
//    - It should print both the username and password being typed
// create a copy of your class
// and print class variables
// and call the 2 methods

class ChickFilALoginPage{
    mainPaigeTitle: string = "Welcome to Chick-fil-A"
    failedLogInMessage: string = "Wrong credentials"
    successfulLogIn: string = "You are Logged In"

    logInButton():void{
        console.log("Moving to the login page")
    }
    credentialsInput(): void {
         console.log("username and password being typed")
    }
}
let ChickFilALoginPageCopy = new ChickFilALoginPage
ChickFilALoginPageCopy.logInButton()
ChickFilALoginPageCopy.credentialsInput()
console.log(ChickFilALoginPageCopy.mainPaigeTitle)
console.log(ChickFilALoginPageCopy.failedLogInMessage)
console.log(ChickFilALoginPageCopy.successfulLogIn)

// Create a class for YouTubeTestPage
// This class will help us test YouTube's website functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected page title that should appear when YouTube loads (as text)
// Variable 2: Store the default video quality setting as a whole number (like 720 or 1080)
// Variable 3: Store an error message that appears when something goes wrong (as text)
// Add 3 methods that perform different YouTube testing actions:
// Method 1: Navigate to YouTube homepage
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying 'it's going to YouTube'
// Method 2: Search for videos by category
    // This method takes one argument: the search category as text (like "music" or "gaming")
    // This method gives back a list of video titles (multiple pieces of text)
    // If the category is "music" give back a list with 3 music video titles
    // If the category is "tutorial" give back a list with 3 tutorial video titles
    // If the category is anything else, give back an empty list
// Method 3: Change video playback speed
    // This method takes two arguments: current speed as a decimal number, and desired speed as a decimal number
    // This method gives back either true or false
    // If the desired speed is between 0.25 and 2.0, give back true
    // If the desired speed is outside that range, give back false
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it
class YouTubeTestPage{
    loadingMessage: string = " YouTube loading"
    videoQualitySetting: number = 780
    errorMessage: string = "Something went Wrong!"
    navigateToHomePage(): void{
        console.log("it's going to YouTube")
    }
    searchVideoCategory(category: string):void{
        if(category === "music"){
            console.log("Faded", "Feel", "In the Morning")
        } else if(category === "tutorial"){
            console.log("real estate investment", "baby steps millioners", "Dave Ramsey debt snowball" )
        }else{
            console.log("List....")
        }
    }
    changeVideoPlaybackSpeed(desiredSpeed:number ): boolean {
        if(desiredSpeed>0.25 && desiredSpeed<2.0){
            return true
        }else if(desiredSpeed >2.0 && desiredSpeed<0.25){
            return false
        }
        return false
    }
 
}
let  YouTubeTestPageCopy = new  YouTubeTestPage
console.log(YouTubeTestPageCopy.loadingMessage)
console.log(YouTubeTestPageCopy.videoQualitySetting)
console.log(YouTubeTestPageCopy.errorMessage)
YouTubeTestPageCopy.navigateToHomePage()
YouTubeTestPageCopy.searchVideoCategory("music")
YouTubeTestPageCopy. changeVideoPlaybackSpeed(2.3)
