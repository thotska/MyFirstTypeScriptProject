//User Input Text Formatter <span class="points">10 points</span></h3>

//question 1
 let userInput: string = 'HeLLo WoRLd'  
 console.log (userInput.toUpperCase())    
// question 1.2

let messyInput: string = '   user data entry   ';
let cleanedData: string = messyInput.trim();

if (cleanedData.length >= 10) {
    console.log("Valid data entry - sufficient length");
} else if (cleanedData.length >= 5) {
    console.log("Acceptable data entry - minimum requirement met");
} else if (cleanedData.length >= 1) {
    console.log("Data too short - please provide more information");
} else {
    console.log("Empty data entry - input required");
}

//question 1.3
let productDescription: string = 'Wireless Bluetooth Headphones with Noise Cancellation';
let searchTerm: string = 'bluetooth';
if (productDescription.toLowerCase().includes("wireless headphones")){
    console.log('Product match found: "wireless headphones' )
}else {
    console.log ("No matching products for: wireless headphones")
}
 //question 2
 let patientID: string = 'ER2024001'
 if (patientID.startsWith('ER') === true){
    console.log ('Emergency patient - Priority medical attention required!')
 }  if (patientID.startsWith('CARD') === true){
    console.log ('Cardiology patient - Heart specialist assigned')
  } if (patientID.startsWith('PED') === true){
    console.log ('Pediatric patient - Child care protocols activated')
  } if (patientID.startsWith('SURG') === true){
    console.log ('Surgery patient - Operating room scheduled')
  } if (patientID.startsWith('GEN') === true) {
    console.log ('General patient - Standard care protocols')
  } else {'Invalid patient ID format - Please verify and re-enter'}

  //question 2.1
  let websiteURL: string = 'https://mycompany.com';

if (websiteURL.endsWith('.com') === true) {
    console.log('Commercial website - Business or company site');
} else if (websiteURL.endsWith('.org') === true) {
    console.log('Organization website - Non-profit or community site');
} else if (websiteURL.endsWith('.edu') === true) {
    console.log('Educational website - School or university site');
} else if (websiteURL.endsWith('.gov') === true) {
    console.log('Government website - Official government site');
} else if (websiteURL.endsWith('.net') === true || websiteURL.endsWith('.io') === true) {
    console.log('Tech website - Technology or networking site');
} else if (websiteURL.endsWith('.co.uk') === true || websiteURL.endsWith('.ca') === true) {
    console.log('Country-specific website - Regional domain');
} else {
    console.log('Unknown domain type - Unable to categorize website');
}


// question 2.3
let websiteURL1: string = 'https://secure.banking.com';

if (websiteURL1.startsWith('https://') === true && websiteURL1.includes('banking') === true) {
    console.log('Secure banking website - Safe to proceed');
} else if (websiteURL1.startsWith('https://') === true && websiteURL1.includes('shopping') === true) {
    console.log('Secure shopping site - SSL protected');
} else if (websiteURL1.startsWith('https://') === true) {
    console.log('Secure website with HTTPS encryption');
} else if (websiteURL1.startsWith('http://') === true) {
    console.log('Warning: Unsecure connection - Data may not be protected');
} else {
    console.log('Invalid URL format');
}

// question 3.1
let fullName: string = 'John Smith';
let spacePosition: number = 4; 
let firstName: string = fullName.slice(0, spacePosition);
let lastName: string = fullName.slice(spacePosition + 1);
if (firstName.length >= 3 && lastName.length >= 3) {
    console.log ('Valid name format: [firstName] [lastName]')
} if (firstName.length >= 2 || lastName.length >= 2) {
    console.log ('Acceptable name format but consider full names')
} else ('Name too short - please provide full first and last name') 


// question 3.2
let productCodeT: string = 'PRD-2024-XL';

// Use productCode.charAt() method to examine specific positions in the string
// Check the character at position 0 using charAt(0) and store in firstChar variable
// Check the character at position 4 using charAt(4) and store in fifthChar variable
// Check the character at position 9 using charAt(9) and store in tenthChar variable
// If firstChar === 'P' AND fifthChar === '2' -> print 'Valid product code format - Current year product'
// If firstChar === 'P' AND tenthChar === 'X' -> print 'Valid product code - Extra Large size detected'
// If firstChar === 'P' -> print 'Valid product prefix - Standard product format'
// If productCode.length >= 10 -> print 'Product code meets minimum length requirements'
// Otherwise -> print 'Invalid product code format'
// Remember: Use .charAt() method, === operator, && operator, >= operator

let firstChar: string = productCodeT.charAt(0)
let fifthChar: string = productCodeT.charAt(4)
let tenthChar: string = productCodeT.charAt(9)
let productCodeLength: number = productCodeT.length
if(firstChar === 'P' && fifthChar === '2'){
    console.log ('Valid product code format - Current year product')
}else if((firstChar === 'P') && (tenthChar === 'X')){
    console.log ("Valid product code - Extra Large size detected")
 }else if (firstChar === 'P'){
    console.log ('Valid product prefix - Standard product format')
 } else if (productCode.length >= 10){
    console.log ('Product code meets minimum length requirements')
 }else {
    console.log ('Invalid product code format')
 }
    
// Bonus question

let username: string = '  AdminUser_2024  ';
let accountAge: number = 45; // days since account creation

// First clean the username by removing extra spaces
// Check if cleaned username.length >= 8 AND cleaned username.length <= 20 -> then 'Username length is valid'
// Second check if cleaned username.includes('Admin') === true OR cleaned username.includes('User') === true -> then 'System account detected'
// If accountAge >= 30 AND cleaned username.endsWith('_2024') === true -> then 'VERIFIED: Trusted admin account with current year validation!'
//else if accountAge >= 30 -> then 'VERIFIED: Trusted admin account - consider adding year suffix'
//else if cleaned username.endsWith('_2024') === true -> then 'PENDING: New admin account with current year validation'
//  otherwise -> 'REVIEW: Admin account requires verification'
//else if cleaned username.startsWith('Test') === true AND accountAge < 7 -> then 'TEMPORARY: Test account - will expire soon'
// otherwise -> 'STANDARD: Regular user account - basic permissions'
// else if cleaned username.length < 8 -> then 'USERNAME TOO SHORT: Minimum 8 characters required'
// otherwise -> 'USERNAME TOO LONG: Maximum 20 characters allowed'
let cleanUsername: string = username.trim()
let cleanUsernameLength: number = username.length

if (cleanUsernameLength >= 8 && cleanUsernameLength <= 20) {
    console.log('Username length is valid')
} else if (cleanUsernameLength < 8) {
    console.log('USERNAME TOO SHORT: Minimum 8 characters required')
} else {
    console.log('USERNAME TOO LONG: Maximum 20 characters allowed')
}


if (cleanUsername.includes('Admin') || cleanUsername.includes('User')) {
    console.log('System account detected')
}
if (accountAge >= 30 && cleanUsername.endsWith('_2024')) {
    console.log('VERIFIED: Trusted admin account with current year validation!')
} else if (accountAge >= 30) {
    console.log('VERIFIED: Trusted admin account - consider adding year suffix')
} else if (cleanUsername.endsWith('_2024')) {
    console.log('PENDING: New admin account with current year validation')
} else if (cleanUsername.startsWith('Test') && accountAge < 7) {
    console.log('TEMPORARY: Test account - will expire soon')
} else {
    console.log('STANDARD: Regular user account - basic permissions')
}