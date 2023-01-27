/* Tutorial 4
   Example 2 JavaScript code
*/
const userName = prompt("Enter your name:");
const unitsNumber = Number(prompt("Enter your number of units:"));
let gradeStanding = '';

if (userName === '') {
  console.log("You entered an invalid name");
} else if (!Number.isInteger(unitsNumber) || unitsNumber < 0 || unitsNumber == '') {
  console.log("You entered an invalid number of units");
} else {
  switch (true) {
    case (unitsNumber >= 0 && unitsNumber <= 30):
      gradeStanding = "Freshman";
      break;
    case (unitsNumber >= 31 && unitsNumber <= 60):
      gradeStanding = "Sophomore";
      break;
    case (unitsNumber >= 61 && unitsNumber <= 90):
      gradeStanding = "Junior";
      break;
    case (unitsNumber >= 91):
      gradeStanding = "Senior";
      break;
  }
  console.log(`Hello ${userName}`);
  console.log(`Your grade standing is ${gradeStanding}`);
}