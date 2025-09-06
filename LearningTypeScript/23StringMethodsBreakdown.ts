// //1️⃣ String Methods
// //1. .toUpperCase()
// //What it does: Converts all letters in a string to uppercase.

// let name = "john";
// console.log(name.toUpperCase()); // "JOHN"

// //2. .toLowerCase()

// //What it does: Converts all letters in a string to lowercase.

// Example:

// let name = "John";
// console.log(name.toLowerCase()); // "john"

// 3. .includes()

// What it does: Checks if a string contains a substring. Returns true or false.

// Example:

// let text = "I love TypeScript";
// console.log(text.includes("love")); // true
// console.log(text.includes("hate")); // false

// 4. .trim()

// What it does: Removes whitespace from the start and end of a string.

// Example:

// let word = "   hello   ";
// console.log(word.trim()); // "hello"

// 5. .length

// What it does: Returns the number of characters in a string. ⚠️ No parentheses.

// Example:

// let city = "Paris";
// console.log(city.length); // 5

// 6. .slice()

// What it does: Extracts part of a string (from start index up to, but not including, end index).

// Example:

// let fruit = "Banana";
// console.log(fruit.slice(0, 3)); // "Ban"
// console.log(fruit.slice(3));    // "ana"

// 7. .startsWith()

// What it does: Checks if a string begins with a specified substring. Returns true/false.

// Example:

// let url = "https://google.com";
// console.log(url.startsWith("https")); // true

// 8. .endsWith()

// What it does: Checks if a string ends with a specified substring. Returns true/false.

// Example:

// let file = "report.pdf";
// console.log(file.endsWith(".pdf")); // true

// 9. .charAt()

// What it does: Returns the character at a specific position (index starts at 0).

// Example:

// let word = "Hello";
// console.log(word.charAt(0)); // "H"
// console.log(word.charAt(4)); // "o"

// 10. .indexOf() and .lastIndexOf()

// What it does: Returns the index of the first (or last) occurrence of a substring. Returns -1 if not found.

// Example:

// let text = "I love apples";
// console.log(text.indexOf("love")); // 2
// console.log(text.indexOf("z"));    // -1
// console.log(text.lastIndexOf("apples")); // 7

// 11. .replace('old', 'new')

// What it does: Replaces the first occurrence of a substring.

// Example:

// let sentence = "I like cats, cats are cute";
// console.log(sentence.replace("cats", "dogs")); 
// // "I like dogs, cats are cute"

// 12. .replaceAll('old', 'new')

// What it does: Replaces all occurrences of a substring.

// Example:

// let sentence = "I like cats, cats are cute";
// console.log(sentence.replaceAll("cats", "dogs")); 
// // "I like dogs, dogs are cute"

// 2️⃣ Number ↔ String Conversions
// Number → String
// let num = 123;
// let str1 = num.toString();
// let str2 = String(num);
// console.log(str1, str2); // "123" "123"

// String → Number
// let str1 = "123";
// let str2 = "123.45";

// let num1 = parseInt(str1);    // 123
// let num2 = parseFloat(str2);  // 123.45
// let num3 = Number(str2);      // 123.45

// 3️⃣ Practical Examples
// Uppercase & Trim
// let myName: string = "   Tetiana Hotska  ";
// console.log(myName.toUpperCase()); // "   TETIANA HOTSKA  "
// console.log(myName.trim());        // "Tetiana Hotska"

// Includes / StartsWith / EndsWith
// let sentence = "Hello I am learning string methods today.";
// console.log(sentence.includes("learning")); // true
// console.log(sentence.startsWith("Hello"));  // true
// console.log(sentence.endsWith("."));        // true

// Conditional Checks
// let flightNumber: string = "UA345";
// if(flightNumber.startsWith("UA")){
//     console.log("This is a United Airlines flight");
// }else{
//     console.log("This is a different airline");
// }

// let fileName: string = "document.csv";
// if(fileName.endsWith(".pdf")){
//     console.log("PDF file");
// }else if(fileName.endsWith(".csv")){
//     console.log("CSV file");
// }else{
//     console.log("Unsupported file type");
// }

// Slice & CharAt
// let fullName = "Tetiana Hotska";
// console.log(fullName.slice(0, 7));   // "Tetiana"
// console.log(fullName.charAt(8));     // "H"