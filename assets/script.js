// Define the variables
var generateBtn = document.querySelector("#generate");

// defining variables
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcase = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var password = [uppercase, lowercase, specialcase, numbers];

var passwordFinal="";

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
  if (confirmUpperCase) {
    passwordFinal += uppercase[Math.floor(Math.random()*uppercase.length)];
  }
  console.log(passwordFinal);

  var confirmLowerCase = confirm("Should the password include lowercase letters?")
  console.log(confirmLowerCase);
  if (confirmLowerCase) {
    passwordFinal += lowercase[Math.floor(Math.random()*lowercase.length)];
  }
  console.log(passwordFinal);

  var confirmspecialcase = confirm("Should the password include special characters?");
  if (confirmspecialcase) {
    passwordFinal += specialcase[Math.floor(Math.random()*specialcase.length)];
  }
  console.log(passwordFinal);

  var confirmNumbers = confirm ("Should this password include numbers?");
  if (confirmNumbers) {
    passwordFinal += numbers[Math.floor(Math.random()*numbers.length)];
    console.log(passwordFinal);
  }

  // how many characters should there be in the string
     
}

  // make a function to check the password for uppercase
  // check for lowercase
  // check for special characters
  // check numbers 

getPassLength();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);