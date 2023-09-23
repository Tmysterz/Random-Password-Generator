// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  //first webpage alert 
  alert("Please add lower case, upper case, numeric, and special characters");
  //convert the users answer into a integer 
  var inputPasswordLength = parseInt(prompt("Please enter a number from 8 to 128 characters to create the length"));
  // returns invalid length message if it does not meet the length requirements
  if (inputPasswordLength < 8 || inputPasswordLength > 128) {
    alert("Invalid Length");
     return; 
  }
  //asks users 4 different criterias for the random password
  var inputLowerCase = confirm("Would you like to include lower case characters?");
  var inputUpperCase = confirm("Would you like to include upper case characters?");
  var inputNum = confirm("Would you like to include numeric characters?");
  var inputSpecialCharacters = confirm("Would you like to include special characters?");
  //validates user for selecting one of the criteria
  if (inputLowerCase || inputUpperCase || inputNum || inputSpecialCharacters) {
    alert("Thank you for selecting at least one character type.");
    
  }
  //alerts the user if they did not select a single one of the criteria and sends them back to start
  if (!inputLowerCase && !inputUpperCase && !inputNum && !inputSpecialCharacters) {
    alert("Please select at least one character type for your password");
    return;
  }
  
  var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var num = '1234567890';
  var specialCharacters = '!@#$%^&*()_-+=';

  var allCharacters = '';
  //goes through a variety of if statements to see which criteria characters were selected by the user
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

  var password = '';
  // this for loop creates the random password for the user
  for (var i = 0; i < inputPasswordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
