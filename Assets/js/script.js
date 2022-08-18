// Password generator that wil provide 8-128 charachters based on the criterias user specifics.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Var Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "/", ",", ".", "-", "=", "_", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Var Declarations
var passwordLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var userChoices;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordLength = prompt("How many characters would you like you password to be? Choose between 8 to 128");
  console.log("Password length " + passwordLength);

  if(!passwordLength) {
    alert("Required Value");

  } else if (passwordLength <= 8 || passwordLength >= 128) {
    passwordLength = prompt("You must choose a password between 8 to 128 characters");
    console.log("Password length " + passwordLength);

  }  else {
      confirmLowerCase = confirm("will this password contain lower case letters?");
      console.log("Lower case " + confirmLowerCase);
      confirmUpperCase = confirm("Will this password contain upper case letters?");
      console.log("Upper case " + confirmUpperCase);
      confirmNumericCharacter = confirm("Will this password contain Numbers?");
      console.log("Number " + confirmNumber);
      confirmSpecialCharacter = confirm("Will this password contain special charachters?");
      console.log("Special Character " confirmSpecialCharacter);
    }
};

var passwordBlank = [];

for (var i=0; i < passwordLength; i++) {
  var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
  passwordBlank.push(allChoices);
  console.log(allChoices);
}

var password = passwordBlank.join(""); {
console.log("Your password is: " + password);
return password;


}