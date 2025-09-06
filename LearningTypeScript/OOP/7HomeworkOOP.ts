//TUESDAY LAST QUESTIONS

// Create a class called InstagramPage
// Add two properties:
// - expectedTitle: string = 'Instagram'
// - expectedWelcomeMessage: string = 'Welcome to Instagram'
//
// Add four methods:
// 1. clickHomeButton(): void - prints 'Clicking home button...'
// 2. typeUsernameAndPassword(username: string, password: string): void 
//    - prints 'typing username = ' + username
//    - prints 'typing password = ' + password
// 3. validatePostText(postText: string): boolean
//    - check if postText contains 'a'
//    - if yes return true, else return false
// 4. validateUsernameLength(username: string): boolean
//    - check if username length is more than 5
//    - if yes return true, else return false
//
// Create an object and test all methods:
// - Test clickHomeButton()
// - Test typeUsernameAndPassword() with 'john_doe' and 'password123'
// - Test validatePostText() with 'amazing photo' and print the result
// - Test validateUsernameLength() with 'bob' and print the result

// Your mission:
// - Create methods with 2 arguments (like our FacebookLoginPage example)
// - Create methods that return boolean values (like validateMessage example)
// - Test each method and print the boolean results
class  InstagramPage{
expectedTitle: string = 'Instagram'
expectedWelcomeMessage: string = 'Welcome to Instagram'

clickHomeButton(): void { 
    console.log ('Clicking home button...')
}
 typeUsernameAndPassword(username: string, password: string): void {
    console.log ('typing username = ' + username)
    console.log ('typing password = ' + password)
 }
 validatePostText(postText: string): boolean {
    if(postText.includes("a")){
        return true
    }else{
        return false
    }
 }
 validateUsernameLength(username: string): boolean{
    if(username.length>5){
        return true
    }else{
        return false
    }
 }
}
let InstagramPageCopy = new InstagramPage()
InstagramPageCopy.clickHomeButton()
InstagramPageCopy.typeUsernameAndPassword("jonDoe", "password1234")
InstagramPageCopy.validatePostText("amazing photo!")
console.log(InstagramPageCopy.validatePostText("amazing photo!"))
InstagramPageCopy.validateUsernameLength("bob")
console.log(InstagramPageCopy.validateUsernameLength("bob"))

// Create a class called UserLoginTestPage
// Add three properties for validation:
// - expectedLoginTitle: string = 'Sign In'
// - expectedErrorMessage: string = 'Invalid credentials'
// - expectedSuccessMessage: string = 'Welcome back!'
//
// Add six methods for testing:
// 1. navigateToLoginPage(): void - prints 'Navigating to login page...'
// 2. enterCredentials(username: string, password: string): void 
//    - prints 'Entering username: ' + username
//    - prints 'Entering password: ' + password
// 3. clickLoginButton(): void - prints 'Clicking login button...'
// 4. validateCredentials(username: string, password: string, minLength: number): boolean
//    - check if BOTH username length >= minLength AND password length >= minLength
//    - if yes return true, else return false
// 5. validateEmailFormat(email: string): boolean
//    - check if email contains '@'
//    - if yes return true, else return false
// 6. validatePasswordStrength(password: string): boolean
//    - check if password length is more than 8
//    - if yes return true, else return false
//
// Create an object and perform complete testing:
// 1. Navigate to page
// 2. Enter credentials with 'testuser@email.com' and 'password123'
// 3. Click login button
// 4. Test validateCredentials() with 'bob', 'pass', 5 and print result
// 5. Test validateEmailFormat() with 'test@email.com' and print result
// 6. Test validatePasswordStrength() with 'short' and print result

// Your mission:
// - Create methods with 3 arguments (username, password, minLength)
// - Create validation methods that return boolean (like our class examples)
// - Test all validation methods and print the boolean results
// - This shows real QA validation patterns!


class UserLoginTestPage{
expectedLoginTitle: string = 'Sign In'
expectedErrorMessage: string = 'Invalid credentials'
expectedSuccessMessage: string = 'Welcome back!'
navigateToLoginPage(): void {
console.log ( 'Navigating to login page...')
}
enterCredentials(username: string, password: string): void {
console.log('Entering username: ' + username) 
console.log('Entering password: ' + password)
}
clickLoginButton(): void{
    console.log('Clicking login button...')
}
validateCredentials(username: string, password: string, minLength: number): boolean{
if(username.length>= minLength && password.length >= minLength){
 return true
}else{
    return false
}
}
checkEmailFormat(email: string): boolean {
    if (email.includes("@")) {
        return true;
    } else {
        return false;
    }
}
validatePasswordStrength(password: string): boolean{
if(password.length > 8){
     return true
 } else{ 
    return false
 }
 }

}
let UserLoginTestPageCopy = new UserLoginTestPage()
UserLoginTestPageCopy.navigateToLoginPage()
UserLoginTestPageCopy.enterCredentials('testuser@email.com', 'password123')
UserLoginTestPageCopy.clickLoginButton()
UserLoginTestPageCopy.validateCredentials('bob', 'pass', 5)
console.log(UserLoginTestPageCopy.validateCredentials('bob', 'pass', 5))
UserLoginTestPageCopy.checkEmailFormat('test@email.com')
console.log(UserLoginTestPageCopy.checkEmailFormat('test@email.com'))
UserLoginTestPageCopy.validatePasswordStrength("short")


// Create a class called EcommerceProductPage
// Add four properties:
// - productTitle: string = 'Product Details'
// - expectedPrice: string = '$99.99'
// - expectedStock: string = 'In Stock'
// - expectedRating: string = '4.5 stars'
//
// Add five methods:
// 1. viewProductDetails(): void - prints 'Viewing product details...'
// 2. selectQuantity(quantity: string): void - prints 'Selecting quantity: ' + quantity
// 3. addToCart(): void - prints 'Adding product to cart...'
// 4. selectColor(color: string): void - prints 'Selecting color: ' + color
// 5. checkoutProduct(): void - prints 'Proceeding to checkout...'
//
// Create an object and perform a complete shopping test:
// 1. View details
// 2. Select quantity '2'
// 3. Select color 'blue'  
// 4. Add to cart
// 5. Checkout
//
// This should demonstrate a realistic e-commerce testing scenario!

// Bonus challenge:
// - Use descriptive variable names
// - Follow all TypeScript syntax rules
// - Create a realistic test flow
// - Think like a real QA automation engineer!

class EcommerceProductPage{

productTitle: string = 'Product Details'
expectedPrice: string = '$99.99'
expectedStock: string = 'In Stock'
expectedRating: string = '4.5 stars'
viewProductDetails(): void{
console.log('Viewing product details...')
} 
 selectQuantity(quantity: string): void{
console.log('Selecting quantity: ' + quantity)
 }
addToCart(): void{
console.log('Adding product to cart...')
} 
selectColor(color: string): void{
console.log('Selecting color: ' + color)
} 
checkoutProduct(): void{
console.log('Proceeding to checkout...')
}
}
let EcommerceProductPageCopy = new EcommerceProductPage()
EcommerceProductPageCopy.viewProductDetails()
EcommerceProductPageCopy.selectQuantity("2")
EcommerceProductPageCopy.selectColor("blue")
EcommerceProductPageCopy.addToCart()
EcommerceProductPageCopy.checkoutProduct()




// WEDNESDAY HOMEWORK
// Create a class for CostcoTestPage
// This class will help us test Costco's website functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the store location name as text (like "Costco Wholesale Seattle")
// Variable 2: Store the membership fee amount as a whole number (like 60 or 120)
// Variable 3: Store the maximum bulk quantity allowed per item as a whole number (like 50 or 100)

// Add 3 methods that perform different Costco testing actions:

// Method 1: Check store hours
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print the store location name
    // Then print a message about store hours (like "Store open 10am-8pm")

// Method 2: Calculate membership savings
    // This method takes two arguments: original price as a decimal number, and member discount percentage as a whole number
    // This method gives back the savings amount as a decimal number
    // Calculate how much money is saved: (original price × discount percentage ÷ 100)
    // Give back the calculated savings amount

// Method 3: Find products by category
    // This method takes one argument: category name as text (like "electronics" or "food")
    // This method gives back a list of matching product names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 6 different product names
    //         Examples: "electronics-TV", "food-apples", "electronics-laptop", "clothing-shirt", "food-bread", "electronics-phone"
    // STEP 2: Create an empty array to store the products that match
    // STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
    // STEP 4: Inside the loop, get the current product name using the i variable
    // STEP 5: Use the startsWith string method to check if the current product name starts with the category name
    //         Example: if category is "electronics", check if product.startsWith("electronics")
    // STEP 6: If the product starts with the category name, add it to your matching products array
    // STEP 7: After the loop finishes, give back the array of matching products

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class CostcoTestPage{
costcoLocationName: string = "Costco Wholesale Seattle"
costcoMembershipPrice: number = 60
maximumQuantityAllowedPerItem: number = 10

checkStoreHours(){
    console.log(this.costcoLocationName)
    console.log("Store open 10am-8pm")
}
calculatedMembershipSavings(originalPrice: number, discountPercentage: number): number{
 let moneySaved = (originalPrice * discountPercentage / 100)
 return moneySaved
}
productByCategory(category: string): string[] {
    let listOfProducts: string[] = [
        "electronics-TV",
        "food-apples", 
        "electronics-laptop", 
        "clothing-shirt", 
        "food-bread", 
        "electronics-phone"
    ]
    let productsMatched: string[] = []

    for (let i = 0; i < listOfProducts.length; i++) {
        let currentProductName: string = listOfProducts[i]

        if (currentProductName.startsWith(category)) {
            productsMatched.push(currentProductName)
        }
    }
    return productsMatched 
}
}
let CostcoTestPageCopy = new CostcoTestPage()
 console.log(CostcoTestPageCopy.costcoLocationName) 
 console.log(CostcoTestPageCopy.costcoMembershipPrice)
 console.log(CostcoTestPageCopy.maximumQuantityAllowedPerItem)
 CostcoTestPageCopy.checkStoreHours()
 CostcoTestPageCopy.calculatedMembershipSavings(14,0.15)
 console.log(CostcoTestPageCopy.calculatedMembershipSavings(14, 0.15))
 CostcoTestPageCopy.productByCategory("electronics")
 console.log(CostcoTestPageCopy.productByCategory("electronics"))



// Create a class for SpotifyTestPage
// This class will help us test Spotify's music streaming functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the current user's subscription type as text (like "Free" or "Premium")
// Variable 2: Store the maximum song skip limit per hour as a whole number (like 6 or unlimited could be 999)
// Variable 3: Store the default audio quality setting as a whole number (like 160 or 320)

// Add 3 methods that perform different Spotify testing actions:

// Method 1: Start music streaming
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message about starting the music app
    // Then print the current subscription type

// Method 2: Calculate monthly listening time
    // This method takes two arguments: daily minutes listened as a whole number, and number of days in month as a whole number
    // This method gives back total monthly minutes as a whole number
    // Calculate total minutes: daily minutes × number of days
    // Give back the calculated total

// Method 3: Filter songs by file format
    // This method takes one argument: desired file extension as text (like ".mp3" or ".flac")
    // This method gives back a list of matching song filenames (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 6 different song filenames including file extensions
    //         Examples: "song1.mp3", "track2.flac", "music3.mp3", "beat4.wav", "tune5.mp3", "sound6.flac"
    // STEP 2: Create an empty array to store the songs that match the desired file format
    // STEP 3: Write a for loop that starts at i = 0, goes while i is less than the array length, and increases i by 1 each time
    // STEP 4: Inside the loop, get the current song filename using the i variable
    // STEP 5: Use the endsWith string method to check if the current filename ends with the desired file extension
    //         Example: if desired extension is ".mp3", check if filename.endsWith(".mp3")
    // STEP 6: If the filename ends with the desired extension, add it to your matching songs array
    // STEP 7: After the loop finishes, give back the array of matching song filenames

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it


class SpotifyTestPage{
currentSubscription: string = "free"
maximumSongSkipLimitPerHour: number = 5
defaultAudioQualitySetting: number= 320

startMusicStreaming(): void{
console.log("starting the music app")
console.log(this.currentSubscription)
}
calculatedMonthlyListeningTime(dailyMinutesListened: number, numberOfDaysInMonth: number): number{
let totalMonthlyMinutes = (dailyMinutesListened * numberOfDaysInMonth)
return totalMonthlyMinutes
}
filteredSongsByFileFormat(desiredFileExtension: string): string[] {
let songNamesWithExtensions =
    ["song1.mp3", 
    "track2.flac", 
    "music3.mp3", 
    "beat4.wav", 
    "tune5.mp3", 
    "sound6.flac"]
let matchedSongsByFormat: string[] = []
    for(let i=0; i<songNamesWithExtensions.length; i++){
        let currentSong = songNamesWithExtensions[i]
        if(currentSong.endsWith(".mp3")){
            matchedSongsByFormat.push(currentSong)
        }

    }
      return matchedSongsByFormat
}
}
let spotifyPage = new SpotifyTestPage()

console.log("Current Subscription:", spotifyPage.currentSubscription)
console.log("Max Skips per Hour:", spotifyPage.maximumSongSkipLimitPerHour)
console.log("Default Audio Quality:", spotifyPage.defaultAudioQualitySetting)
spotifyPage.startMusicStreaming();
console.log("Total Monthly Listening Time (minutes):",spotifyPage.calculatedMonthlyListeningTime(60, 30))
console.log("Filtered Songs (.mp3):", spotifyPage.filteredSongsByFileFormat(".mp3"))

// HOMEWORK FOR THURSDAY
// Create a class for ZillowHomePage
// This class will help us test Zillow's comprehensive real estate platform functionality

// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Zillow - Real Estate, Apartments, Mortgages & Home Values")
// Variable 2: Store the maximum saved searches allowed per user as a whole number (like 50 or 100)
// Variable 3: Store the minimum Zestimate accuracy percentage for reliable listings as a whole number (like 80 or 90)

// Add 5 methods that perform different Zillow testing actions:

// Method 1: Navigate to home search dashboard
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying it's loading Zillow home search dashboard
    // Then print a message confirming the real estate platform loaded successfully

// Method 2: Calculate property appreciation
    // This method takes two arguments: current home value as a decimal number, and years owned as a whole number
    // This method gives back estimated total appreciation as a decimal number
    // Calculate appreciation: current value × 0.03 × years owned (assuming 3% annual appreciation)
    // Give back the calculated appreciation amount

// Method 3: Filter homes by bedrooms and price range
    // This method takes two arguments: minimum bedrooms as a whole number, and maximum price as a whole number
    // This method gives back a list of matching home addresses (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different home listings with bedrooms, address, and price
    //         Examples: "3-123 Oak Street-450000", "2-456 Pine Ave-320000", "4-789 Elm Drive-520000", "3-321 Maple Lane-380000", "2-654 Cedar Way-290000", "4-987 Birch Road-475000", "1-147 Willow Court-250000", "3-258 Cherry Lane-410000"
    // STEP 2: Create an empty array to store homes that match both criteria
    // STEP 3: Write a for loop that goes through each home listing in the array
    // STEP 4: Inside the loop, split the current home by "-" to get parts: [bedrooms, address, price]
    // STEP 5: Convert the bedrooms part to a number and check if it's >= minimum bedrooms
    // STEP 6: Convert the price part to a number and check if it's <= maximum price
    // STEP 7: If BOTH the bedroom count meets requirement AND the price is within budget, add the address part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching home addresses

// Method 4: Find neighborhoods by school rating and crime level
    // This method takes two arguments: minimum school rating as a whole number (1-10), and maximum crime level as text ("low", "medium", "high")
    // This method gives back a list of matching neighborhood names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different neighborhoods with school rating, neighborhood name, and crime level
    //         Examples: "8-Downtown-medium", "9-Westside-low", "6-Eastpark-high", "9-Northhill-low", "7-Southbay-medium", "8-Riverside-low", "5-Industrial-high", "9-Greenwood-low"
    // STEP 2: Create an empty array to store neighborhoods that match both criteria
    // STEP 3: Write a for loop that goes through each neighborhood in the array
    // STEP 4: Inside the loop, split the current neighborhood by "-" to get parts: [rating, name, crime]
    // STEP 5: Convert the rating part to a number and check if it's >= minimum school rating
    // STEP 6: Check the crime level priority: if maximum crime level is "high" accept all, if "medium" accept only "low" and "medium", if "low" accept only "low"
    // STEP 7: If BOTH the school rating meets requirement AND the crime level is acceptable, add the neighborhood name to your matching array
    // STEP 8: After the loop finishes, give back the array of matching neighborhood names

// Method 5: Analyze investment properties by rental yield and property age
    // This method takes two arguments: minimum rental yield percentage as a decimal number, and maximum property age in years as a whole number
    // This method gives back a list of matching investment property addresses (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different investment properties with yield, address, and age
    //         Examples: "5.2-789 Investment Blvd-12", "3.8-456 Rental Street-25", "6.1-123 Cash Flow Ave-8", "4.5-321 Profit Lane-15", "7.3-654 ROI Road-5", "3.2-987 Yield Way-30", "5.8-147 Income Court-10", "4.9-258 Return Drive-18"
    // STEP 2: Create an empty array to store properties that match both criteria
    // STEP 3: Write a for loop that goes through each investment property in the array
    // STEP 4: Inside the loop, split the current property by "-" to get parts: [yield, address, age]
    // STEP 5: Convert the yield part to a decimal number and check if it's >= minimum rental yield
    // STEP 6: Convert the age part to a number and check if it's <= maximum property age
    // STEP 7: If BOTH the rental yield meets requirement AND the property age is acceptable, add the address part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching investment property addresses

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 5 methods from your class copy with these specific test cases:
// 1. Call navigateToHomeSearchDashboard() 
// 2. Call calculatePropertyAppreciation(500000, 5) and print the result
// 3. Call filterHomesByBedroomsAndPrice(3, 400000) and print the result
// 4. Call findNeighborhoodsBySchoolAndCrime(8, "medium") and print the result
// 5. Call analyzeInvestmentProperties(5.0, 15) and print the result

class ZillowHomePage{
    expectedHomePAgeTitle: string ="Zillow - Real Estate, Apartments, Mortgages & Home Values"
    maximumSavedSearchesAllowedPerUser: number = 50
    minimumZestimateAcuracyPercentageForReliableListings: number = 50

navigateToHomeSearchDashboard(){
    let confirmationLogInMessage: string = "real estate platform loaded successfully"
        console.log("loading Zillow home search dashboard")
        console.log(confirmationLogInMessage)
}
calculatePropertyAppreciation(currentHomeValue: number, yearsOwned: number):number{
    let calculatedAppreciation = (currentHomeValue * 0.03 * yearsOwned)
        return calculatedAppreciation
} 
filteredHomeByBedroomAndPrice(minimumBedrooms: number, maximumPrice: number): string[]{
    let listOfHomes: string[] = 
    ["3-123 Oak Street-450000",
     "2-456 Pine Ave-320000", 
     "4-789 Elm Drive-520000", 
     "3-321 Maple Lane-380000", 
     "2-654 Cedar Way-290000", 
     "4-987 Birch Road-475000", 
     "1-147 Willow Court-250000", 
     "3-258 Cherry Lane-410000"]


     let matchingHomes: string[] = []

     for(let i=0; i<listOfHomes.length; i++){
        let currentHome = listOfHomes[i]
        let currentHomeSplit = currentHome.split("-") //[bedrooms, address, price]
        let bedroomNumber = parseFloat(currentHomeSplit[0])
        let priceNumber = parseFloat(currentHomeSplit[2])
        let homeAddress = currentHome[1]

        if((bedroomNumber >= 3)  && (priceNumber<=350_000)){
            matchingHomes.push(homeAddress) 
        }
     }
       return matchingHomes
        }

// Method 4: Find neighborhoods by school rating and crime level
    // This method takes two arguments: minimum school rating as a whole number (1-10), and maximum crime level as text ("low", "medium", "high")
    // This method gives back a list of matching neighborhood names (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different neighborhoods with school rating, neighborhood name, and crime level
    //         Examples: "8-Downtown-medium", "9-Westside-low", "6-Eastpark-high", "9-Northhill-low", "7-Southbay-medium", "8-Riverside-low", "5-Industrial-high", "9-Greenwood-low"
    // STEP 2: Create an empty array to store neighborhoods that match both criteria
    // STEP 3: Write a for loop that goes through each neighborhood in the array
    // STEP 4: Inside the loop, split the current neighborhood by "-" to get parts: [rating, name, crime]
    // STEP 5: Convert the rating part to a number and check if it's >= minimum school rating
    // STEP 6: Check the crime level priority: if maximum crime level is "high" accept all, if "medium" accept only "low" and "medium", if "low" accept only "low"
    // STEP 7: If BOTH the school rating meets requirement AND the crime level is acceptable, add the neighborhood name to your matching array
    // STEP 8: After the loop finishes, give back the array of matching neighborhood names

        neighborhoodsBySchoolRatingAndCrimeLevel(minSchoolRating: number, minCrimeLevel: string): string[]{
           let listOfSchoolNeighborhoodCrime = 
           ["8-Downtown-medium", 
            "9-Westside-low", 
            "6-Eastpark-high", 
            "9-Northhill-low", 
            "7-Southbay-medium", 
            "8-Riverside-low", 
            "5-Industrial-high", 
            "9-Greenwood-low"]

            let matchingSchoolAndCrime: string[] = []
            
            let crimeLevels = ["low", "medium", "high"];
            let maxCrimeLevelIndex = crimeLevels.indexOf("high");

            for(let i=0; i<listOfSchoolNeighborhoodCrime.length; i++){
            let currentNeighborhood = listOfSchoolNeighborhoodCrime[i]   ///"8-Downtown-medium"
            let currentNeighborhoodSplit = currentNeighborhood.split("-") //"8 Downtown medium"
            let ratingNumber = parseFloat(currentNeighborhoodSplit[0]) //8
            let neighborhoodName = currentNeighborhoodSplit[1]; //Downtown 
            let crimeLevel = currentNeighborhoodSplit[2]; //medium

            let crimeLevelIndex = crimeLevels.indexOf(crimeLevel);

        
        if (ratingNumber >= minSchoolRating && crimeLevelIndex <= maxCrimeLevelIndex) {
            matchingSchoolAndCrime.push(neighborhoodName); 
        }
        }
                return matchingSchoolAndCrime;

            }

// Method 5: Analyze investment properties by rental yield and property age
    // This method takes two arguments: minimum rental yield percentage as a decimal number, and maximum property age in years as a whole number
    // This method gives back a list of matching investment property addresses (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different investment properties with yield, address, and age
    //         Examples: "5.2-789 Investment Blvd-12", "3.8-456 Rental Street-25", "6.1-123 Cash Flow Ave-8", "4.5-321 Profit Lane-15", "7.3-654 ROI Road-5", "3.2-987 Yield Way-30", "5.8-147 Income Court-10", "4.9-258 Return Drive-18"
    // STEP 2: Create an empty array to store properties that match both criteria
    // STEP 3: Write a for loop that goes through each investment property in the array
    // STEP 4: Inside the loop, split the current property by "-" to get parts: [yield, address, age]
    // STEP 5: Convert the yield part to a decimal number and check if it's >= minimum rental yield
    // STEP 6: Convert the age part to a number and check if it's <= maximum property age
    // STEP 7: If BOTH the rental yield meets requirement AND the property age is acceptable, add the address part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching investment property addresses

            propertiesByRentalYieldAndPropertyAge(minRentalYieldPercentage: number, maxPropertyAge:number ): string[]{
                let investmentProperties = 
                ["5.2-789 Investment Blvd-12", 
                "3.8-456 Rental Street-25", 
                "6.1-123 Cash Flow Ave-8", 
                "4.5-321 Profit Lane-15", 
                "7.3-654 ROI Road-5", 
                "3.2-987 Yield Way-30", 
                "5.8-147 Income Court-10", 
                "4.9-258 Return Drive-18"]

                let matchedProperties: string[] = []
                    for(let i=0; i<investmentProperties.length; i++){
                        let currentProperty = investmentProperties[i]
                        let currentPropertySplit = currentProperty.split("-")
                        let yieldNumber = parseFloat(currentPropertySplit[0])
                        let ageNumber = parseFloat(currentPropertySplit[2])
                        let propertyAddress = currentPropertySplit[1]
                        if(yieldNumber>= 3.2 && ageNumber<=20){
                            matchedProperties.push(propertyAddress)
                        }


                    }
                    return matchedProperties

            }

        }

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 5 methods from your class copy with these specific test cases:
// 1. Call navigateToHomeSearchDashboard() 
// 2. Call calculatePropertyAppreciation(500000, 5) and print the result
// 3. Call filterHomesByBedroomsAndPrice(3, 400000) and print the result
// 4. Call findNeighborhoodsBySchoolAndCrime(8, "medium") and print the result
// 5. Call analyzeInvestmentProperties(5.0, 15) and print the result
 

//  STILL WORKING ON THE LAST STEP





















