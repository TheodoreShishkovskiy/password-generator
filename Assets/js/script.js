// Password generator that wil provide 8-128 charachters based on the criterias user specifics.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Var Arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "/", ",", ".", "-", "=", "_", "+"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Var Declarations
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);