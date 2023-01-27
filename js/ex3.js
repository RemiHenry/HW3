/* Tutorial 4
   Example 3 JavaScript code
*/
const day = prompt("Enter the 3 first letter of a day of the week in lower case:");
switch (true) {
  case (day === "mon"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: tue");
    break;
  case (day === "tue"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: wed");
    break;
  case (day === "wed"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: thu");
    break;
  case (day === "thu"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: fri");
    break;
  case (day === "fri"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: sat");
    break;
  case (day === "sat"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: sun");
    break;
  case (day === "sun"):
    console.log(`You entered: ${day}`);
    console.log("The following day is: mon");
    break;
  default:
    console.log("You entered an invalid day.");
    break;
}