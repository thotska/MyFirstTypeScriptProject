// Create a class for AmazonSearchPage
// This class will help us test Amazon's product search platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Amazon - Online Shopping for Electronics, Apparel, Computers, Books")
// Variable 2: Store the maximum items allowed in shopping cart as a whole number (like 50 or 100)
// Variable 3: Store the minimum product rating for recommendations as a decimal number (like 4.2 or 4.5)
// Add 1 method that performs Amazon search testing:
// Method 1: Find products with names ending with a specific word
    // This method takes two arguments: product names array like ["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset"], and ending word as text (like "Mouse")
    // This method gives back a list of matching product names like ["Wireless Mouse"]
    // STEP 1: Create an empty array to store matching products
    // STEP 2: Use a for loop to go through each product name in the provided array

    // STEP 3: Inside the loop, use the split(" ") string method to separate the product name into word
    // 
    // STEP 4: Get the last word by using [words.length - 1] on the split result

    // STEP 5: Use the toLowerCase() string method on this last word


    // STEP 6: Check if this last word equals the ending word parameter (also convert ending word to lowercase)

    // STEP 7: If they match, add the original product name to your matching array

    // STEP 8: After the loop, give back the array of matching product names

// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findProductsEndingWithWord(["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset", "Computer Mouse", "Smart Watch"], "Mouse") and print the result

class AmazonSearchPage{
    homeTitle: string = "Amazon - Online Shopping for Electronics, Apparel, Computers, Books"
    maxItemsAllowedInShoppingCart: number = 10
    minProductRating: number = 4.5

    productSearchWithSpecificEnding(productNames: string[], endingWord: string): string[]{
       let matchingProducts: string[]= []
        for (let i=0; i<productNames.length; i++){
            let singleProduct = productNames[i]
            let singleProductsSplit = singleProduct.split(" ") //Gaming Laptop
            let lastWord = singleProductsSplit[singleProductsSplit.length -1] 
            let lowerCaseLastWord = lastWord.toLowerCase()
            if(lowerCaseLastWord.toLowerCase() === endingWord.toLowerCase()){
                matchingProducts.push(productNames[i])
            }
        }return matchingProducts
    }
}
let AmazonSearchPageCopy = new AmazonSearchPage()
console.log(AmazonSearchPageCopy.homeTitle)
console.log(AmazonSearchPageCopy.maxItemsAllowedInShoppingCart)
console.log(AmazonSearchPageCopy.minProductRating)
AmazonSearchPageCopy.productSearchWithSpecificEnding(["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset", "Computer Mouse", "Smart Watch"], "Mouse")
console.log(AmazonSearchPageCopy.productSearchWithSpecificEnding(["Gaming Laptop", "Wireless Mouse", "Bluetooth Headset", "Computer Mouse", "Smart Watch"], "Mouse"))





// Create a class for InstagramProfilePage
// This class will help us test Instagram's profile management platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Instagram - Share Your Story")
// Variable 2: Store the maximum posts allowed per hour as a whole number (like 10 or 15)
// Variable 3: Store the minimum follower engagement rate as a decimal number (like 2.8 or 4.1)


// Add 1 method that performs Instagram profile testing:
// Method 1: Find hashtags with specific length requirements
    // This method takes two arguments: hashtags array like ["#travel", "#photography", "#food"], and minimum length as a whole number (like 6)
    // This method gives back a list of matching hashtags like ["#photography"]


    // STEP 1: Create an empty array to store matching hashtags





    // STEP 2: Use a for loop to go through each hashtag in the provided array



    // STEP 3: Inside the loop, use the length property to get the total character count of the current hashtag
    // STEP 4: Check if this length is greater than or equal to the minimum length parameter
    // STEP 5: If the length requirement is met, use the toUpperCase() string method on the hashtag
    // STEP 6: Add the uppercase hashtag to your matching array
    // STEP 7: After the loop, give back the array of matching uppercase hashtags
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findHashtagsWithMinLength(["#art", "#photography", "#food", "#lifestyle", "#tech"], 6) and print the result
class InstagramProfilePage{
    homepageTitle: string  = "Instagram - Share Your Story"
    maximumPostsAllowedPerHour: number = 10
    minimumFollowerEngagementRate: number = 4.3

    findingHashtags(hashtags: string[], minLength: number): string[]{ //["#travel", "#photography", "#food"]
       let matchingHashtags: string[] = []

        for(let i=0; i<hashtags.length; i++){
            let currentHashtag =  hashtags[i] //#travel
            if(currentHashtag.length >= minLength){
               matchingHashtags.push(currentHashtag.toUpperCase())
            }
        } return matchingHashtags

    }
}
let  InstagramProfilePageCopy = new InstagramProfilePage()
console.log(InstagramProfilePageCopy.homepageTitle)
console.log(InstagramProfilePageCopy.maximumPostsAllowedPerHour)
console.log(InstagramProfilePageCopy.minimumFollowerEngagementRate)
console.log(InstagramProfilePageCopy.findingHashtags(["#art", "#photography", "#food", "#lifestyle", "#tech"], 6))




// Create a class for TwitterFeedPage
// This class will help us test Twitter's social media feed platform functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Twitter - What's Happening")
// Variable 2: Store the maximum tweets allowed per day as a whole number (like 300 or 500)
// Variable 3: Store the minimum retweet rate for trending as a decimal number (like 1.5 or 2.3)
// Add 1 method that performs Twitter feed testing:
// Method 1: Find usernames that start and end with specific characters
    // This method takes three arguments: usernames array like ["@john_doe", "@sarah123", "@mike_pro"], starting character as text (like "@"), and ending character as text (like "e")
    // This method gives back a list of matching usernames like ["@john_doe"]
    // STEP 1: Create an empty array to store matching usernames


    // STEP 2: Use a for loop to go through each username in the provided array

    // STEP 3: Inside the loop, use the charAt(0) string method to get the first character of the current username

    // STEP 4: Use the charAt(username.length - 1) string method to get the last character of the current username

    // STEP 5: Check if the first character equals the starting character parameter AND the last character equals the ending character parameter
    // STEP 6: If both conditions match, use the replace("@", "") string method to remove the @ symbol
    // STEP 7: Add the username without @ symbol to your matching array
    // STEP 8: After the loop, give back the array of matching usernames without @ symbols
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call the method from your class copy with this specific test case:
// Call findUsernamesStartingAndEnding(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e") and print the result

class  TwitterFeedPage{
    expectedHomepageTitle: string = "Twitter - What's Happening"
    maxTweetsAllowedPerDay: number = 20
    minimumRetweetRateForTrending: number = 1.5

     twitterFeedTesting( usernamesArray: string[], startingCharacter:  string, endingCharacter: string): string[]{ 
        //["@john_doe", "@sarah123", "@mike_pro"]
       let matchingUsernames:  string[] = []
        for(let i=0; i<usernamesArray.length; i++){
            let firstCharacterUsername = usernamesArray[i].charAt(0)
            let lastCharacterUsername = usernamesArray[i].charAt(usernamesArray[i].length - 1)
            if(firstCharacterUsername === startingCharacter && lastCharacterUsername === endingCharacter){
               matchingUsernames.push(usernamesArray[i].replace("@"," "))
            }
        } return matchingUsernames
     }
}
let TwitterFeedPageCopy = new TwitterFeedPage
console.log(TwitterFeedPageCopy.expectedHomepageTitle)
console.log(TwitterFeedPageCopy.maxTweetsAllowedPerDay)
console.log(TwitterFeedPageCopy.minimumRetweetRateForTrending)
console.log(
    TwitterFeedPageCopy.twitterFeedTesting(["@jane", "@bob_code", "@alice", "@tom_dev", "@mike"], "@", "e")
)