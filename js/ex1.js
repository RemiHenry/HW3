/* Tutorial 4
   Example 1 JavaScript code
*/
const number = prompt("Enter a number between 1 and 100:");
if (number > 0 && number <= 100 && number != '') {
  console.log(`Thank you! You entered ${number}, a valid number.`);
} else {
  console.log(`Sorry, ${number} is not a valid entry.`);
}