// question#1
class NetflixHomePage{
 mainPageMessage: string = "Netflix"
clickWatchNowButton():void{
console.log('Clicking Watch Now button...')
}
}
const homePage = new NetflixHomePage();

// question#2
class AmazonSearchPage{
 searchPageTitle: string = "Amazon"
 searchForProduct(productName: string): void{
console.log('Searching for ' + productName)
}
}
const searchPage = new AmazonSearchPage()
console.log(searchPage.searchPageTitle)
searchPage.searchForProduct("laptop");
searchPage.searchForProduct("books");  

//question#3
class YouTubePage{
 pageMessage: string = 'YouTube'
playVideo(): void{
console.log('Playing video...')
}
pauseVideo(): void{
console.log ( 'Pausing video...')  
}
likeVideo(): void{
console.log ('Clicking like button...')
}
}
const myObject = new YouTubePage()
myObject.playVideo();              
myObject.pauseVideo();            
myObject.likeVideo();  

// question#4
class InstagramPage {
    expectedTitle: string = 'Instagram'
    expectedWelcomeMessage: string = 'Welcome to Instagram'

    clickHomeButton(): void {
        console.log('Clicking home button...')
    }

    typeUsernameAndPassword(username: string, password: string): void {
        console.log('Typing username = ' + username)
        console.log('Typing password = ' + password)
    }

    validatePostText(postText: string): boolean {
        if (postText.includes('a')) {
            return true
        } else {
            return false
        }
    }

    validateUsernameLength(username: string): boolean {
        if (username.length > 5) {
            return true
        } else {
            return false
        }
    }
}

// Create object
const myObject1 = new InstagramPage()

// Use methods
myObject1.clickHomeButton()
myObject1.typeUsernameAndPassword('john_doe', 'password123')

// Validate post text
const postIsValid = myObject1.validatePostText('amazing photo')
console.log("The post text is valid? " + postIsValid)

// Validate username length
const usernameValid = myObject1.validateUsernameLength('bob')
console.log("Is 'bob' a valid username? " + usernameValid)

// question#5
class UserLoginTestPage {
    expectedLoginTitle: string = 'Sign In'
    expectedErrorMessage: string = 'Invalid credentials'
    expectedSuccessMessage: string = 'Welcome back!'

    navigateToLoginPage(): void {
        console.log('Navigating to login page...')
    }

    enterCredentials(username: string, password: string): void {
        console.log('Entering username: ' + username)
        console.log('Entering password: ' + password)
    }

    clickLoginButton(): void {
        console.log('Clicking login button...')
    }

    validateCredentials(username: string, password: string, minLength: number): boolean {
        return username.length >= minLength && password.length >= minLength
    }

    validateEmailFormat(email: string): boolean {
        return email.includes('@')
    }

    validatePasswordStrength(password: string): boolean {
        return password.length > 8
    }
}

const myObject2 = new UserLoginTestPage()

myObject2.navigateToLoginPage()
myObject2.enterCredentials('user123', 'mypassword')
myObject2.clickLoginButton()

const credentialsValid = myObject2.validateCredentials('user123', 'mypassword', 6)
console.log('Are credentials valid? ' + credentialsValid)

const emailValid = myObject2.validateEmailFormat('user@example.com')
console.log('Is email format valid? ' + emailValid)

const passwordStrong = myObject2.validatePasswordStrength('mypassword')
console.log('Is password strong? ' + passwordStrong)
