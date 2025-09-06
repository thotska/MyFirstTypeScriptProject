// create a facebook login page class
// create a method for typing your password
    // method will take 1 argument
    // argument will be password
    // print 'typing the password myPassword'


    class FacebookLoginPage{
        typingPassword(myPassword: string): void{
            console.log('typing the password' + myPassword)
        }
    }



// create class for amazon login page
// this is a void (returns NOTHING) method
// crete a type username and password method
// print both of them in your method
class AmazonLoginPage{
    typingUserName(myUserName:string, myPassword: string){
        console.log("My user name is" + myUserName)
        console.log("My password is" + myPassword)
    }
   validateSearchMessage(searchText: string): boolean{
        if(searchText.length> 8){
            return true
        }else{
            return false
        }
    }

// Create method which will take an argument
    // argument will be userName
    // check if the userName not containing '!'
    // if yes return true
    // else return false 

validateUSerName(userName:string): boolean {
    if(!userName.includes("!")){
        return true
    }else{
        return false
    }
}
}




//Create method which will take an argument
    // argument will be searchText
    // check if the searchText length more than 8
    // if yes return true
    // else return false

