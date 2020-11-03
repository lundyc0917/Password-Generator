// Assignment Code
var generateBtn = document.querySelector("#generate");

//Special Char for the function
const specialChar = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

function generatePassword () {
    // Length - Enter an Integer between 8 - 128 Characters
  var passwordLength = prompt ("Enter the number of characters you would like.  It must be more than 8 and less than 128.");

  if (isNaN(passwordLength)===true){12
    alert("Must be more than 8 characters.");
    return;
  }
  if (passwordLength < 8){
    alart("Must be more than 8 characters.");
    return;
  }
  if (passwordLength > 128){
    alert("Must be less than 128 characters.");
    return;
  }
    // Char Types - select: lowercase, uppercase, numeric, and/or special chars
  var lowerCase = confirm ("Do you want lowercase characters in your password?");

  var upperCase = confirm ("Do you want uppercase characters in your password?");

  var numeric = confirm ("Do you want numbers in your password?");

  var specialChar = confirm ("Do you want special characters in your password?");

  if (
    lowerCase === false&&
    upperCase === false&&
    numeric === false&&
    specialChar === false
  ){
    alert ("You must select one type of character.");
    return;
  }
  var userInput = {passwordLength:passwordLength, lowerCase:lowerCase, upperCase:upperCase, specialChar:specialChar};
  return userInput;
}
// End of 



if (lowerCase === true) {
  minLowerCase = functionArray[1];
  miniChar++;

}

if (upperCase === true) {
  minUpperCase = functionArray[2];
  minChar++;

}

if (numeric === true) {
  minNumeric = functionArray[0];
  minChar++;

}

if (specialChar === true) {
  minSpecialChar = functionArray[3];
  minChar++;
}




return randomPasswordGenerated;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
