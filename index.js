// Import the readline-sync module to handle user input
const input = require('readline-sync');

// 1. Use readlineSync.question() to prompt for a word or phrase
let userWord = input.question("Please enter a word or phrase: ");

// 2. Prompt for an index number to find the character at that index
let indexInput = input.question("Enter an index number: ");

// 3. Use bracket notation to access the character
// Note: We convert the input to a Number to ensure it works correctly
let selectedCharacter = userWord[Number(indexInput)];

// 4. Print out the character
console.log(`The character at index ${indexInput} is: ${selectedCharacter}`);
