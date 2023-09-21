// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {

  alert("Please add lower case, upper case, numeric, and special characters");

  var inputPasswordLength = parseInt(prompt("Please enter a number from 8 to 128 characters to create the length"));

  if (inputPasswordLength < 8 || inputPasswordLength > 128) {
    alert("Invalid Length");
     return; 
  }
  
  var inputLowerCase = confirm("Would you like to include lower case characters?");
  var inputUpperCase = confirm("Would you like to include upper case characters?");
  var inputNum = confirm("Would you like to include numeric characters?");
  var inputSpecialCharacters = confirm("Would you like to include special characters?");

  if (inputLowerCase || inputUpperCase || inputNum || inputSpecialCharacters) {
    alert("Thank you for selecting at least on character type.");
    return;
  }

  if (!inputLowerCase && !inputUpperCase && !inputNum && !inputSpecialCharacters) {
    alert("Please select at least one character type for your password");
    return;
  }
  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var specialCharacters = "!@#$%^&*()_-+=<>?/\|}{;:";

  var allCharacters = lowerCase + upperCase + num + specialCharacters;

  for (var i = 0; i < inputPassword.length; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    generatePassword += allCharacters[index];
  }

  console.log(generatePassword);
  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
