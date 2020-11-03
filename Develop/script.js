// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

function generatePasword () {
    // Length - Enter an Integer between 8 - 128 Characters
  var passwordLength = prompt ("Enter the number of characters you would like.  It must be more than 8 and less than 128.");

    // Char Types - select: lowercase, uppercase, numeric, and/or special chars
  var lowerCase = confirm ("Do you want lowercase characters in your password?");

  var upperCase = confirm ("Do you want uppercase characters in your password?");

  var numeric = confirm ("Do you want numbers in your password?");

  var specialChar = confirm ("Do you want special characters in your password?");

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
