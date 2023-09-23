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

  console.log(inputLowerCase, inputUpperCase, inputNum, inputSpecialCharacters);

  if (inputLowerCase || inputUpperCase || inputNum || inputSpecialCharacters) {
    alert("Thank you for selecting at least one character type.");
    
  }

  if (!inputLowerCase && !inputUpperCase && !inputNum && !inputSpecialCharacters) {
    alert("Please select at least one character type for your password");
    
  }
  
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '1234567890';
  var specialCharacters = '!@#$%^&*()_-+=';

  var allCharacters = '';

  console.log(allCharacters);

  if (inputLowerCase) {
    allCharacters += lowerCaseCharacters;
  }

  if (inputUpperCase) {
    allCharacters += upperCaseCharacters;
  }

  if (inputNum) {
    allCharacters += num;
  }

  if(specialCharacters) {
    allCharacters += specialCharacters;
  }

  console.log(allCharacters);


  var password = '';

  console.log(allCharacters);

  for (var i = 0; i < inputPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  console.log(password);

  return password;
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
