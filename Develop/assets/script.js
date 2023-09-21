// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {

  alert("Please add lowercase, uppercase, numeric, and special characters");

  var length = parseInt(prompt("Enter password length from 8 to 128 characters"));

  if (length < 8 || length > 128) {
    alert("Invalid Length");
    return; 
  } 

  
  var inputLowerCase = confirm("Would you like to include lower case characters?");
  var inputUpperCase = confirm("Would you like to include upper case characters?");
  var inputNum = confirm("Would you like to include numeric characters?");
  var inputSpecialCharacters = confirm("Would you like to include special characters?");

  if (!inputLowerCase && !inputUpperCase && !inputNum && !inputSpecialCharacters) {
    alert("Please select at least one character type for your password");
    return;
  }
  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var specialCharacters = "!@#$%^&*()_-+=<>?/\|}{;:";

  var allCharacters = lowerCase + upperCase + num + specialCharacters;


  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
