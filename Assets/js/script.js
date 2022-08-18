// Password generator that wil provide 8-128 charachters based on the criterias user specifics.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Var Declarations
var passwordLength;
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var userChoices;

// Var Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8","9"];
var specialCharacter = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "/", ",", ".", "-", "=", "_", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

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

if (!confirmLowerCase && !confirmUpperCase && !confirmNumericCharacter && !confirmNumericCharacter) {
  userChoices = alert("You must choose a criteria:");

} else if (confirmLowerCase && confirmUpperCase && confirmNumericCharacter && confirmSpecialCharacter) {
  userChoices = lowerCase.concast(upperCase, numbers, special);
  console.log(userChoices);
}

else if (confirmLowerCase && confirmUpperCase && confirmNumericCharacter) {
  userChoices = lowerCase.concat(upperCase, numbers, special);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacter) {
  userChoices = lowerCase.concat(upperCase, special);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumericCharacter && confirmNumericCharacter) {
  userChoices = lowerCase.concat(numbers, special);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmNumericCharacter && confirmSpecialCharacter) {
  userChoices = upperCase.concat(numbers,special);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmUpperCase) {
  userChoices = lowerCase.concat(upperCase);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmNumericCharacter) {
  userChoices = lowerCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmLowerCase && confirmSpecialCharacter) {
  userChoices = lowerCase.concat(special);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmNumericCharacter) {
  userChoices = upperCase.concat(numbers);
  console.log(userChoices);
}
else if (confirmUpperCase && confirmSpecialCharacter) {
  userChoices = upperCase.concat(special);
  console.log(userChoices);
}
else if (confirmNumericCharacter && confirmSpecialCharacter) {
  userChoices = numbers.concat(special);
  console.log(userChoices);
}
else if (confirmLowerCase) {
  userChoices = lowerCase;
  console.log(userChoices);
}
else if (confirmUpperCase) {
  userChoices = upperCase;
  console.log(userChoices);
}
else if (confirmNumericCharacter) {
  userChoices = numbers;
  console.log(userChoices);
}
else if (confirmSpecialCharacter) {
  userChoices = special;
  console.log(userChoices);
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