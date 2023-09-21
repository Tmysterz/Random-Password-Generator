// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  var length = parseInt(prompt("Enter password length from 8 to 128 characters"));

  if (length < 8 || length > 128) {
    alert("Invalid Length");
    return;
  }

  alert("Please add lowercase, uppercase,  ")
  var lowercase = confirm("Would you like to include lower case characters?");
  
  




}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
