/* Tutorial 4
   Example 6 JavaScript code
*/
const number = Number(prompt("Enter a number:"));
if (Number.isInteger(number)) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} X ${i} = ${number * i}`);
  }
} else {
  console.log("You entered an invalid number.");
}