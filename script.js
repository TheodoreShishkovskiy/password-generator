// Assignment Code
var generateBtn = document.querySelector("#generate");

// Var Declarations
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// Var Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "/", ",", ".", "-", "=", "_", "+"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function for Password Generator

function generatePassword() {
  passwordLength = prompt("How many characters would you like you password to be? Choose between 8 to 128");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    alert("Required Value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose a password between 8 to 128 characters");
    console.log("Password length " + passwordLength);

  }  else {
      confirmLower = confirm("will this password contain lower case letters?");
      console.log("Lower case " + confirmLower);
      confirmUpper = confirm("Will this password contain upper case letters?");
      console.log("Upper case " + confirmUpper);
      confirmNumber = confirm("Will this password contain numbers?");
      console.log("Number " + confirmNumber);
      confirmSpecial = confirm("Will this password contain special charachters?");
      console.log("Special Character " + confirmSpecial);
      
};
// No password generated
if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("You must choose a criteria:");
// all options are executed
} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
// Only 3 options are executed
else if (confirmLower && confirmUpper && confirmNumber) {
  userChoices = lowerCase.concat(upperCase, numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmUpper && confirmSpecial) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber && confirmSpecial) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber && confirmSpecial) {
  userChoices = upperCase.concat(numbers,special);
  console.log(userChoices);
}
// Only 2 options are executed
else if (confirmLower && confirmUpper) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLower && confirmNumber) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLower && confirmSpecial) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}
else if (confirmUpper && confirmNumber) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpper && confirmSpecial) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}
else if (confirmNumber&& confirmSpecial) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
else if (confirmLower) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpper) {
  userChoices = upperCase;
  console.log(userChoices);
}
else if (confirmNumber) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSpecial) {
  userChoices = special;
  console.log(userChoices);
};

// An empty variable to set password length
var passwordBlank = [];

for (var i=0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

//Seting the password to join and return
var password = passwordBlank.join("");
console.log("Your New Password is: " + password);
return password;


}