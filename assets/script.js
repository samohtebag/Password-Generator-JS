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
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialcase = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordArray = [];

// declaring variables
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmspecialcase;
var confirmNumbers;

// Declaring function getPassLength
function generatePassword() {

  // Creating initial prompt user receives when clicking "Generate Password"
  var confirmLength = prompt("Hey! Let's make a password! Why don't you start by choosing a number between 8 and 128?");

  // if the user enters a number lower than or equal to 7, a number greater than or equal to 129, or a character that isn't a number, we are brought back to the initial prompt
  while(confirmLength <= 7 || confirmLength >= 129 || isNaN(parseInt(confirmLength))) {
    alert ("Ack! I'm sorry, but I really need you to choose a number between 8 and 128, and make sure it's a number!");
    var confirmLength = prompt("OK, let's try this again. Why don't you start by choosing a number between 8 and 128?");
  }

  // user will select Ok or Cancel to the following options for the contents of the password
  var confirmUpperCase = confirm("Do you want this password to have uppercase letters?")
  var confirmLowerCase = confirm("Do you want this password to have lowercase letters?")
  var confirmspecialcase = confirm("Do you want this password to have special characters?");
  var confirmNumbers = confirm ("Do you want this password to have numbers?");

  // if user clicks cancel to all of the choices, they'll be prompted to select something, and the choices will present themselves again
  while(confirmUpperCase === false && confirmLowerCase === false && confirmspecialcase === false && confirmNumbers === false) {
    alert("You need to choose SOMETHING! Let's try this again....");
    var confirmUpperCase = confirm("Do you want this password to have uppercase letters?")
    var confirmLowerCase = confirm("Do you want this password to have lowercase letters?")
    var confirmspecialcase = confirm("Do you want this password to have special characters?");
    var confirmNumbers = confirm ("Do you want this password to have numbers?");
    } 

  // using if statements to make the chosen options appear in a new array based on the users choices
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

  // declaring new variable and using a for loop to create the password, based on characters and length, and generate the password

  var passwordFinal = "";

  for (var i = 0; i < confirmLength; i++) {
    passwordFinal = passwordFinal + passwordArray[Math.floor(Math.random() * passwordArray.length)];
  }

// displays the actual password
  return passwordFinal;
}

// copy to clipboard function. created the button in the HTML (line 29) using an onclick event to copy it to the clipboard/browser.
function copied() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("The password has been copied to your clipboard!");
}


// || isNaN(parseInt(confirmLength))