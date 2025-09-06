//question 1
let commentData: string = 'Comment: [   Amazing work!!!   ] includes praise';
// 1. Extract comment (between [ and ])
// 2. Use trim() to remove extra spaces
// 3. If comment includes "!!!" →
//       if comment includes "praise" → "Excited Praise"
//       else → "Excited Comment"
//    Else if comment includes "good" →
//       if comment includes "work" → "Positive Work Comment"
//       else → "Positive Comment"
//    Else → "Neutral Comment"

let fB: number = commentData.indexOf("[")
let sB: number = commentData.indexOf("]")
let commentDataString: string = commentData.slice((fB + 1), sB)
console.log(commentDataString)
let commentDataStringTrimmed: string = commentDataString.trim()
console.log(commentDataStringTrimmed)
if (commentDataStringTrimmed.includes("!!!")){
    if (commentData.includes("praise")) {
        console.log("Excited Praise")
    } else {
     console.log("Excited Comment")
    }
} else if (commentData.includes("good")) {

    if (commentDataStringTrimmed.includes("work")){
        console.log("Positive Work Comment")
    } else {
        console.log("Positive Comment")
    }
} else {
    console.log("Neutral Comment")
}

//question 2
let fileData: string = 'File: [document.pdf] size: [2.5MB] includes backup';
// 1. Extract file size (between second [ and ])
// 2. Use replace() to remove "MB" and convert to Number
// 3. If size > 1.0 →
//       if size > 5.0 → "Large File with Backup"
//       else → "Medium File with Backup"
//    Else if size > 0.5 →
//       if fileData includes "backup" → "Small File with Backup"
//       else → "Small File"
//    Else → "Tiny File"

let firstBr: number = fileData.lastIndexOf("[")
let secondBr: number = fileData.lastIndexOf("]")
let fileDataString: string = fileData.slice((firstBr +1), secondBr)
console.log (fileDataString)
let fileDataString1: string = fileDataString.replace("MB","")
console.log (fileDataString1)
let fileDataNumber: number = parseFloat(fileDataString1)
console.log (fileDataNumber)

if(fileDataNumber > 1.0){
    if(fileDataNumber > 5.0){
        console.log ("Large File with Backup")
    }else{
        console.log ("Medium File with Backup")
    }
}else if(fileDataNumber > 0.5){
    if(fileData.includes("backup")){
        console.log ("Small File with Backup")
    }else{
        console.log ("Small File")
    }
}else{
    console.log ("Tiny File")
}


//question 3
let ratingData: string = 'Rating: [4.8] reviews: [127] includes verified';
// 1. Extract rating (between first [ and ])
// 2. Extract review count (between second [ and ]) and convert both to parseFloat
// 3. If rating > 4.5 →
//       if reviews > 100 → "Excellent High-Volume Rating"
//       else → "Excellent Rating"
//    Else if rating > 4.0 →
//       if ratingData includes "verified" → "Good Verified Rating"
//       else → "Good Rating"
//    Else → "Average Rating"

//extracting rating reviews total
let ratingReviews: string = ratingData.slice(ratingData.indexOf("[")+1, ratingData.indexOf("]"));
console.log (ratingReviews)
let ratingReviewsNumber: number = parseFloat(ratingReviews)
console.log (ratingReviewsNumber)

// extracting VERIFIED rating reviews
let verifiedReviews: string = ratingData.slice(ratingData.lastIndexOf("[")+1, ratingData.lastIndexOf("]"));
console.log (verifiedReviews)
let verifiedReviewsNumber: number = parseFloat(verifiedReviews)
console.log (verifiedReviewsNumber)

if(ratingReviewsNumber > 4.5){
    if(ratingReviewsNumber > 100){
        console.log ("Excellent High-Volume Rating")
    }else{
        console.log ("Excellent Rating")
    }
}else if(ratingReviewsNumber > 4.0){
    if(ratingData.includes("verified")){
        console.log ("Good Verified Rating")
    }else{
        console.log ("Good Rating")
    }
}else{
    console.log ("Average Rating")
}

