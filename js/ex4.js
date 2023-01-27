/* Tutorial 4
   Example 4 JavaScript code
*/
const firstNumber = Number(prompt("Enter first number:"));
const secondNumber = Number(prompt("Enter second number:"));
if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${firstNumber + secondNumber}`);
  console.log(`The difference of ${firstNumber} and ${secondNumber} is ${firstNumber - secondNumber}`);
  console.log(`The product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);
  console.log(`The quotient of ${firstNumber} and ${secondNumber} is ${firstNumber / secondNumber}`);
  console.log(`The remainder of ${firstNumber} and ${secondNumber} is ${firstNumber % secondNumber}`);
} else {
  console.log("One of your number intered is invalid number.");
}