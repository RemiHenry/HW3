/* Tutorial 4
   Example 7 JavaScript code
*/
let hour = Number(prompt("Enter an hour:"));
let minute = Number(prompt("Enter a minute:"));
let second = Number(prompt("Enter a second:"));
if (Number.isInteger(hour) && Number.isInteger(minute) && Number.isInteger(second)) {
  if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59) {
    console.log(`Time input: ${hour}h${minute}m${second}s`);
    if (second < 59) {
      second++;
    } else {
      second = 0;
      if (minute < 59) {
        minute++;
      } else {
        minute = 0;
        if (hour < 23) {
          hour++;
        } else {
          hour = 0;
        }
      }
    }
    console.log(`One second later: ${hour}h${minute}m${second}s`);
  } else {
    console.log("You entered an invalid time.");
  }
} else {
  console.log("You entered an invalid time.");
}