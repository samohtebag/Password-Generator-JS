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
  var confirmLength = prompt("Hey! Let's make a password! Why don't you start by choosing a number between 8 and 128?");

  
  while(confirmLength <= 7 || confirmLength >= 129) {
    alert ("Ack! I'm sorry, but I really need you to choose a number between 8 and 128")
    var confirmLength = prompt("OK, let's try this again. Why don't you start by choosing a number between 8 and 128?");
  } 

  var confirmUpperCase = confirm("Do you want this password to have uppercase letters?")
  var confirmLowerCase = confirm("Do you want this password to have lowercase letters?")
  var confirmspecialcase = confirm("Do you want this password to have special characters?");
  var confirmNumbers = confirm ("Do you want this password to have numbers?");

  while(confirmUpperCase === false && confirmLowerCase === false && confirmspecialcase === false && confirmNumbers === false) {
    alert("You need to choose SOMETHING! Let's try this again....");
    var confirmUpperCase = confirm("Do you want this password to have uppercase letters?")
    var confirmLowerCase = confirm("Do you want this password to have lowercase letters?")
    var confirmspecialcase = confirm("Do you want this password to have special characters?");
    var confirmNumbers = confirm ("Do you want this password to have numbers?");
    } 

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