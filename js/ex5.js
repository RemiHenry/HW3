/* Tutorial 4
   Example 5 JavaScript code
*/
let i = 0;
let connected = false;
for (; i < 3; i++) {
  let password = prompt("Enter the password:");
  if (password === "secret") {
    console.log(`You entered the correct password after ${i + 1} attempt(s)`);
    connected = true;
    break;
  } else {
    console.log("Incorrect password. Try again.");
  }
}
if (!connected) {
  console.log(`Your account is locked! You failed to enter the correct password ${i} times`)
}