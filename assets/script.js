// Define the variables
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creating the arrays for the variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcase = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordArray = [];

// declaring variable
var confirmLength = "";
var confirmUpperCase;
var confirmNumbers;
var confirmLowerCase;
var confirmspecialcase;

// Declaring function getPassLength
function generatePassword() {

  // Creating initial prompt
  var confirmLength = prompt("Please choose a password length between 8 and 128 characters?");
  console.log(confirmLength);

  while(confirmLength <= 7 || confirmLength >= 129) {
    alert ("Password length must be between 8 and 128 character, please retry")
    var confirmLength = prompt("Please choose a password length between 8 and 128 characters?");
  }

  var confirmUpperCase = confirm("Should the password include uppercase letters?")
  var confirmLowerCase = confirm("Should the password include lowercase letters?")
  var confirmspecialcase = confirm("Should the password include special characters?");
  var confirmNumbers = confirm ("Should this password include numbers?");

  if (confirmUpperCase) {
    passwordArray = passwordArray.concat(uppercase); 
  }

  if (confirmLowerCase) {
    passwordArray = passwordArray.concat(lowercase); 
  }

  if (confirmspecialcase) {
    passwordArray = passwordArray.concat(specialcase); 
  }

  if (confirmNumbers) {
    passwordArray = passwordArray.concat(numbers); 
  }

  // how many characters should there be in the string

  var passwordFinal = "";

  for (var i = 0; i < confirmLength; i++) {
    passwordFinal = passwordFinal + passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

  return passwordFinal
}

function copied() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("The password has been copied to your clipboard!");
}