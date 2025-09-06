// Create a class for NetflixHomePage
// This class will help us test Netflix's homepage functionality
// Add 3 variables to store important testing data:
// Variable 1: Store the expected homepage title as text (like "Netflix - Watch TV Shows Online, Watch Movies Online")
// Variable 2: Store the default video quality setting as a whole number (like 1080 or 4K could be 2160)
// Variable 3: Store the maximum profiles allowed per account as a whole number (like 5 or 10)
// Add 3 methods that perform different Netflix testing actions:
// Method 1: Navigate to homepage
    // This method takes no arguments (nothing gets passed into it)
    // This method doesn't give anything back when it finishes
    // When called, it should print a message saying it's loading Netflix homepage
    // Then print a message confirming the page loaded successfully
// Method 2: Calculate monthly viewing time
    // This method takes two arguments: daily hours watched as a decimal number, and days in month as a whole number
    // This method gives back total monthly hours as a decimal number
    // Calculate total hours: daily hours × days in month
    // Give back the calculated total
// Method 3: Filter content by genre and rating
    // This method takes two arguments: desired genre as text (like "action" or "comedy"), and minimum rating as a decimal number
    // This method gives back a list of matching movie titles (multiple pieces of text)
    // STEP 1: Inside the method, create an array with at least 8 different movie titles with genre and rating
    //         Examples: "action-Avengers-4.5", "comedy-Friends-4.8", "action-Batman-4.2", "drama-Crown-4.9", "comedy-Office-4.7", "action-Matrix-4.6", "drama-Stranger-4.4", "comedy-Parks-4.3"
    // STEP 2: Create an empty array to store movies that match both criteria
    // STEP 3: Write a for loop that goes through each movie in the array
    // STEP 4: Inside the loop, split the current movie by "-" to get parts: [genre, title, rating]
    // STEP 5: Check if the genre part equals the desired genre
    // STEP 6: Convert the rating part to a number and check if it's >= minimum rating
    // STEP 7: If BOTH the genre matches AND the rating is high enough, add the title part to your matching array
    // STEP 8: After the loop finishes, give back the array of matching movie titles
// After creating your class:
// Create a copy of your class using the 'new' keyword
// Print all 3 variables from your class copy
// Call all 3 methods from your class copy
// For methods that give something back, print what they return
// For the method that doesn't give anything back, just call it

class NetflixHomePage{
    homePageTitle:string = "Netflix - Watch TV Shows Online, Watch Movies Online"
    defaultVideoQualitySetting: number = 1080
     maximumProfilesAllowed: number = 10
     navigateToHomePage(): void{
        console.log("Loading Netflix Homepage ")
        console.log("Message loaded successfully!")
     }
     monthlyViewingTimeCalculation(dailyHoursWatched:number, daysInTheMonths: number):number{
       let totalHours = dailyHoursWatched * daysInTheMonths
       return totalHours
     }

     filteredGenreAndRating(desiredGenre: string, minimumRating: number): string[] {
        let everyMovieList = ["action-Avengers-4.5", "comedy-Friends-4.8", "action-Batman-4.2", "drama-Crown-4.9", "comedy-Office-4.7", "action-Matrix-3.9", "drama-Stranger-4.4", "comedy-Parks-4.3"]
        let filteredMovies: string[] = []
        // action, 4.0

        // for each loop, this works with array and some other multiple data in variable things. 
        for (let i = 0; i < everyMovieList.length; i++) {
            let currentMovie = everyMovieList[i]
            let currentMovieSplitted = currentMovie.split('-')

            let currentMovieGenre = currentMovieSplitted[0]
            let currentMovieName: string = currentMovieSplitted[1]
            let currentMovieRating: number = parseFloat(currentMovieSplitted[2])

            if (desiredGenre === currentMovieGenre && currentMovieRating >= minimumRating) {
                filteredMovies.push(currentMovieName)
            }
        }

        return filteredMovies;
    }
}


let netflixHomePageCopy = new NetflixHomePage()
let returnedMovies = netflixHomePageCopy.filteredGenreAndRating('action', 4.2)
// console.log(returnedMovies)






class LinkedInHomePage {
    homepageTitle: string =  "LinkedIn - The World's Largest Professional Network"
    maxConnectionAllowed: number = 30000
    minimumCompletenessPercentage: number = 75

    navigateToDashboard(){
        console.log( "it's loading LinkedIn dashboard")
        console.log("professional network loaded successfully")
    }
    networkingScoreCalculation(totalConnections: number, profileViewsPerWeek: number):number{ 
        let networkingEffectivenessScore =  ((totalConnections/100) + (profileViewsPerWeek*2))

        return networkingEffectivenessScore
    }
    filteredJobPostings(industry: string, minExperienceYears: number){
       let  jobPostingsArray: string[] = ["tech-Software Engineer-3", "finance-Investment Analyst-2", "tech-Product Manager-5",
         "healthcare-Nurse-1", "finance-Financial Advisor-4", "tech-Data Scientist-6", "marketing-Brand Manager-2", "tech-DevOps Engineer-4"]
        let jobPostingsSaved: string [] = []
        for (let i=0; i<jobPostingsArray.length; i++){
            let currentJob = jobPostingsArray[i]
            let currentJobSplitted = currentJob.split("-")


            let industryName = currentJobSplitted[0]
            let jobName = currentJobSplitted[1]
            let yearsOfExperience = parseFloat(currentJobSplitted[2])

            if(industryName === industry && yearsOfExperience >= minExperienceYears){
                jobPostingsSaved.push(jobName)
            }
            }
            return jobPostingsSaved

    }

}
 let LinkedInHomePageCopy = new LinkedInHomePage()
console.log( LinkedInHomePageCopy.homepageTitle)
console.log( LinkedInHomePageCopy.maxConnectionAllowed)
console.log( LinkedInHomePageCopy.minimumCompletenessPercentage)
LinkedInHomePageCopy.navigateToDashboard()
LinkedInHomePageCopy.networkingScoreCalculation(10, 10)
LinkedInHomePageCopy.filteredJobPostings("tech", 4)