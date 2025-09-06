//question 1.

//first checking carAvailable === true -> then 'Great! We have that car in stock.'</span>
//   second check creditScore >= 650 -> true then 'Your credit is approved! You can finance the car.'</span>
//     else if creditScore >= 550 -> true then 'You qualify but need a co-signer or higher down payment.'</span>
//     otherwise -> 'Unfortunately, your credit score is too low for financing.'</span>
// otherwise -> 'Sorry, that car is not available.'</span>

let carAvailable: boolean = true
let creditScore: number = 680

if (carAvailable) {
    console.log('Great! We have that car in stock.')
    if (creditScore >= 650) {
        console.log("Your credit is approved! You can finance the car.")
    } else if (creditScore >= 550) {
        console.log('You qualify but need a co-signer or higher down payment.')
    } else {
        console.log('Unfortunately, your credit score is too low for financing.')
    }
} else {
    console.log('Sorry, that car is not available.')
}


// question 1.2
//<p>Create an advanced car dealer system with income verification and car type preferences.</p>
let carAvailable1: boolean = true
let creditScore1: number = 720
let annualIncome: number = 75000
let carType: string = "economy" // 'economy', 'mid-range', 'luxury'

// first checking carAvailable === true -> then 'Excellent! Your desired car is in stock.'</span>
//     second check creditScore >= 750 AND annualIncome >= 80000 -> true then 'VIP financing approved with 0% interest!'</span>
//     else if creditScore >= 700 AND carType !== 'luxury' -> true then 'Great credit! Standard financing approved.'</span>
//     else if creditScore >= 650 -> true then 'Good credit! Financing approved with competitive rates.'</span>
//     else if creditScore >= 550 AND annualIncome >= 50000 -> true then 'Conditional approval - requires 20% down payment.'</span>
//     otherwise -> 'Unable to approve financing at this time.'</span>
// otherwise -> 'Unfortunately, that car model is currently out of stock.'</span>
if (carAvailable1) {
    console.log('Excellent! Your desired car is in stock.')
    if (creditScore1 >= 750 && annualIncome >= 80000) {
        console.log('VIP financing approved with 0% interest!')
    } else if (creditScore1 >= 700 && carType !== "luxury") {
        console.log('Great credit! Standard financing approved.')
    } else if (creditScore1 >= 650 && annualIncome >= 50000) {
        console.log('Conditional approval - requires 20% down payment.')
    } else {
        console.log('Unable to approve financing at this time.')
    }
} else {
    console.log('Unfortunately, that car model is currently out of stock.')
}

//question 2.1
let isRestaurantOpen: boolean = true
let haveMoney: number = 18

// first checking restaurantOpen === true -> then 'Welcome to Tony's Pizza! We are open for business.'</span>
// second check money >= 25 -> true then 'You can order our premium specialty pizzas!'</span>
// else if money >= 15 -> true then 'You can get our delicious combo meals with pizza and sides!'</span>
// else if money >= 8 -> true then 'You can afford our budget personal pizzas!'</span>
// otherwise -> 'Sorry, you need at least $8 for our cheapest pizza.'</span>
// otherwise -> 'Sorry, we are currently closed. Come back during business hours!'
if (isRestaurantOpen) {
    console.log("Welcome to Tony's Pizza! We are open for business.")
    if (haveMoney >= 25) {
        console.log('You can order our premium specialty pizzas!')
    } else if (haveMoney >= 15) {
        console.log('You can get our delicious combo meals with pizza and sides!')
    } else if (haveMoney >= 8) {
        console.log('You can afford our budget personal pizzas!')
    } else {
        console.log('Sorry, you need at least $8 for our cheapest pizza.')
    }
} else {
    console.log('Sorry, we are currently closed. Come back during business hours!')
}
//question 3

//// first checking restaurantOpen === true -> then 'Welcome to Le Gourmet! We are delighted to serve you.'</span>
//     second check isVIPMember === true AND money >= 50 -> true then 'VIP table ready! Our chef's special tasting menu awaits!'</span>
//     else if hasReservation === true AND money >= 30 -> true then 'Your reserved table is ready! Enjoy our full menu.'</span>
//     else if money >= 40 AND partySize <= 4 -> true then 'We have a table available! Premium dining experience.'</span>
//     else if money >= 20 AND partySize <= 2 -> true then 'Small table available! Regular menu options.'</span>
//     else if partySize > 6 -> true then 'Large parties require reservations. Please call ahead.'</span>
//     otherwise -> 'We are fully booked or your budget may not cover our current offerings.'</span>
// otherwise -> 'Sorry, we are closed. Please visit us during operating hours.'</span>

let restaurantOpen: boolean = true
let money: number = 45
let hasReservation: boolean = false
let isVIPMember: boolean = true
let partySize: number = 4

if (restaurantOpen) {
    console.log('Welcome to Le Gourmet! We are delighted to serve you.')
    if (isVIPMember && money >= 50) {
        console.log("VIP table ready! Our chef's special tasting menu awaits!")
    } else if (hasReservation && money >= 30) {
        console.log('Your reserved table is ready! Enjoy our full menu.')
    } else if (money >= 40 && partySize <= 4) {
        console.log('We have a table available! Premium dining experience.')
    } else if (money >= 20 && partySize <= 2) {
        console.log('Small table available! Regular menu options.')
    } else if (partySize > 6) {
        console.log('Large parties require reservations. Please call ahead.')
    } else {
        console.log('We are fully booked or your budget may not cover our current offerings.')
    }
} else {
    console.log('Sorry, we are closed. Please visit us during operating hours.')
}

//question 3.1
let vacationDaysAvailable: number = 10;
let budget: number = 8500;

if (vacationDaysAvailable >= 7) {
    console.log("Perfect! You have enough time for a luxury tropical getaway.");

    if (budget >= 15000) {
        console.log("Ultimate paradise package with private jet and overwater villa!");
    } else if (budget >= 8000) {
        console.log("Premium tropical resort with first-class flights and ocean view suite!");
    } else if (budget >= 5000) {
        console.log("Deluxe beach resort with business-class flights and beachfront room!");
    } else {
        console.log("Standard tropical package with economy flights and garden view room.");
    }

} else {
    console.log("You need at least 7 days for our tropical vacation packages.");
}
//question 3.2
//// if vacationDaysAvailable >= 10 -> 'Excellent! Perfect duration for a luxury multi-destination experience.'
//     if budget >= 20000 AND isFirstClassTraveler === true -> 'Ultimate world tour: Private jets, Michelin star dining, and presidential suites!'
//     else if budget >= 15000 AND preferredDestination === 'maldives' -> 'Maldives VIP: Private island resort with butler and yacht!'
//     else if budget >= 12000 AND preferredDestination === 'switzerland' AND travelExperience === 'expert' -> 'Swiss Alps adventure: Luxury ski resort with helicopter transfers and alpine spa!'
//     else if budget >= 10000 AND preferredDestination === 'dubai' -> 'Dubai luxury: Seven-star hotel with desert safari and shopping spree!'
//     else if budget >= 8000 AND travelExperience !== 'beginner' -> 'Premium cultural tour with luxury accommodations and guided experiences!'
//     else if budget >= 5000 -> 'Deluxe vacation package with high-end hotels and curated activities!'
//     else -> 'Standard luxury package available within your budget range.'
// else if vacationDaysAvailable >= 7 -> 'Good duration for a focused luxury experience, but consider extending for full packages.'
// else -> 'Minimum 7 days required for our luxury vacation experiences.'
let vacationDaysAvailable1: number = 14;
let budget1: number = 12000;
let preferredDestination: string = 'switzerland'; // maldives, switzerland, dubai, japan
let isFirstClassTraveler: boolean = true;
let travelExperience: string = 'expert'; // beginner, intermediate, expert

if (vacationDaysAvailable1) {
    console.log('Excellent! Perfect duration for a luxury multi-destination experience.')
    if (budget >= 20000 && isFirstClassTraveler) {
        console.log('Ultimate world tour: Private jets, Michelin star dining, and presidential suites!')
    } else if (budget >= 15000 && preferredDestination === 'maldives') {
        console.log('Maldives VIP: Private island resort with butler and yacht!')
    } else if (budget >= 12000 && preferredDestination === 'switzerland' && travelExperience === 'expert') {
        console.log('Swiss Alps adventure: Luxury ski resort with helicopter transfers and alpine spa!')
    } else if (budget >= 10000 && preferredDestination === 'dubai') {
        console.log('Dubai luxury: Seven-star hotel with desert safari and shopping spree!')
    } else if (budget >= 8000 && travelExperience !== 'beginner') {
        console.log('Premium cultural tour with luxury accommodations and guided experiences!')
    } else if (budget >= 5000) {
        console.log('Deluxe vacation package with high-end hotels and curated activities!')
    } else {
        console.log('Standard luxury package available within your budget range.')
    }
} else if (vacationDaysAvailable >= 7) {
    console.log('Good duration for a focused luxury experience, but consider extending for full packages.')
} else {
    console.log('Minimum 7 days required for our luxury vacation experiences.')
}

//bonus question
let vacationDaysAvailable2: number = 21;
let budget2: number = 25000;
let loyaltyStatus: string = 'platinum'; // 'bronze', 'silver', 'gold', 'platinum', 'diamond'
let seasonalPeriod: string = 'peak'; // 'off-season', 'regular', 'peak'
let groupSize: number = 2;
let hasSpecialRequests: boolean = true; // dietary, accessibility, celebration, etc.
let preferredActivity: string = 'adventure'; // 'relaxation', 'culture', 'adventure', 'luxury'
if (vacationDaysAvailable2 >= 14) {
    console.log('Outstanding! Extended vacation allows for our most exclusive experiences.')
    if ((loyaltyStatus === "platinum" && budget2 >= 30000) && seasonalPeriod !== "peak") {
        console.log('PLATINUM EXCLUSIVE: Multi-destination luxury with off-season perks and VIP access!')
    } else if (budget2 >= 25000 && preferredActivity === 'luxury' && hasSpecialRequests) {
        console.log('ULTRA-PREMIUM: Fully customized luxury experience with personal staff and exclusive venues!')
    } else if (budget2 >= 20000 && groupSize <= 4 && loyaltyStatus !== 'bronze') {
        console.log('PREMIUM ELITE: Private villa with chef, luxury transport, and curated experiences!')
    } else if (budget2 >= 15000 && seasonalPeriod === 'off-season') {
        console.log('LUXURY ADVANTAGE: High-end resorts with off-season pricing and exclusive access!')
    } else if (budget2 >= 12000 && preferredActivity === 'adventure') {
        console.log('ADVENTURE LUXURY: Premium adventure tours with luxury accommodations and expert guides')
    } else if (budget2 >= 8000) {
        console.log('DELUXE EXPERIENCE: High-quality accommodations with selected premium amenities!')
    } else {
        console.log('STANDARD LUXURY: Beautiful resorts with luxury touches within your budget.')
    }
} else if (vacationDaysAvailable2 >= 7) {
    console.log('Good time frame, but consider extending to 14+ days for our premium multi-destination packages.')
} else {
    console.log('Our luxury experiences require a minimum of 7 days to ensure proper relaxation and enjoyment.')
}