// creating my first loop

for(let i=1; i<8; i++){
    // console.log("
    // 
    //("Creating my first loop!")
    // console.log(i)
    console.log(i<8)
} 

for(let dayNumber=0; dayNumber<7; dayNumber++){
console.log("Days count " + dayNumber)
}


// 
for(let daysOfTheMonth = 1; daysOfTheMonth<31; daysOfTheMonth++){
    console.log("Counting days of the month " + daysOfTheMonth)
}

for(let grades = 1; grades<13; grades++){
    console.log("Possible grades " + grades)
}

//
let daysOfTheWeek = ["monday", "tuesday", "wednesday","thursday", "friday", "saturday","sunday"]
for(let days = 0; days < 7; days++ ){
     console.log(daysOfTheWeek[days])
}


//
let daysOfWeek = ["monday", "tuesday", "wednesday","thursday", "friday", "saturday","sunday"]
for(let i =0; i <daysOfTheWeek.length; i ++){
    if(daysOfTheWeek[i].includes("tuesday")){
        console.log("This day is " + daysOfTheWeek[i])
    }
}


// we are going to the dealer
// inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
// if the current car is starting with 'Porsche'
// then print 'This is what I am looking for Porsche Taycan'
 let inventory = ['Porsche Taycan', 'GTR', 'Camry', 'Genesis', 'GT3 RS', 'Audi', 'Porsche Carrera']
 for(let i=0; i<inventory.length; i++){
    if(inventory[i].includes("Camry")){
        console.log("this is what I am looking for " + inventory[i])
    }
 }

 // we are a bouncer in front of a club
// we do not let people who are younger than 21
// age = [15, 16, 77, 99, 29, 18, 21]
// when there is someone older or equal to 21
// we should say 'WELCOME'
// otherwise 'Bugger off, get out!'

let age = [15, 16, 77, 99, 29, 18, 21]
for(let i=0; i<age.length; i++){
    if(age[i] >= 21){
        console.log("You can come in!")
    }else if(age[i]>=18){
        console.log("You can come in but can't drink.")
    }else{
        console.log('Bugger off, get out!')
    }

    }

//// I have fruits string = 'cherry,orange,mango,banana'
// check every fruit and if it's including letter 'a'
// we are eating that fruit
// otherwise we are throwing it to trash


let fruits: string = 'cherry,orange,mango,banana'
let fruitsClean: string[] = fruits.split(",")  //[cherry orange mango banana]
for(let i=0; i<fruitsClean.length; i++){
    if(fruitsClean[i].includes("a")){
        console.log("We are eating this fruit")
    }else{
        console.log ("We are throwing it to trash.")
    }
}




