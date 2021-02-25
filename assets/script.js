// Define the variables
var generateBtn = document.querySelector("#generate");

// defining variables
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var specialcharacters = ["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var numbers = ["1234567890"];
var password = [uppercase, lowercase, specialcharacters, numbers];

// Declaring function getPassLength
function getPassLength() {
  // Creating initial prompt
  var confirmLength = parseInt(prompt("Please choose a password length between 8 and 128 characters?"));
  console.log(confirmLength);
  // Alerts to set if the length is too small or large
  if (confirmLength < 8) {
    alert("Please choose a password larger than 8 characters");
    return;
  };
  if (confirmLength > 128) {
    alert("Please choose a password smaller than 128 characters")
    return;
  };

  var confirmUpperCase = confirm("Should the password include uppercase letters?")
  console.log(confirmUpperCase);
  var confirmLowerCase = confirm("Should the password include lowercase letters?")
  console.log(confirmLowerCase);
  var confirmspecialcase = confirm("Should the password include special characters?");
  console.log(confirmspecialcase);
  var confirmNumbers = confirm ("Should this password include numbers?");
  console.log(confirmNumbers);
}

getPassLength();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);