// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for special characters, numbers, and letters
var specialCharString = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var specialArray = specialCharString.split("");
// console.log(specialArray);
var alphabetString = "abcdefghijklmnopqrstuvwxyz"
var lowerArray = alphabetString.split("");
var upperArray = alphabetString.toUpperCase().split("");
var numString = "0123456789"
var numArray = numString.split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Beginning of function generatePassword
function generatePassword() {
  var options = getOptions();
  var superArray = [];
  var results = [];

  // console.log(options)

  if(options.lowerCase) {
    superArray = superArray.concat(lowerArray)
  }
  if(options.upperCase) {
    superArray = superArray.concat(upperArray)
  }
  if(options.numeric) {
    superArray = superArray.concat(numArray)
  }
  if(options.specialChar) {
    superArray = superArray.concat(specialArray)
  } 

  // console.log(superArray)

  for(var i = 0; i < options.passwordLength; i++) {
    var index = Math.floor(Math.random() * superArray.length)
    var digit = superArray[index]
    console.log(digit)

    results.push(digit)

  }
  return results.join("")

}
// End of function generatePassword


// Beginning of function getOptions to get the user input
function getOptions() {
  // Length - Enter a number between 8 - 128 Characters
  var passwordLength = parseInt(
    prompt(
      "Enter the number of characters you would like. It must be more than 8 and less than 128."
    )
  );
  console.log(passwordLength);
  if (isNaN(passwordLength) === true) {
    alert("Must be a numeric value more than 8 and less than 128.");
    return;
  }
  if (passwordLength < 8) {
    alert("Must be more than 8 characters.");
    return;
  }
  if (passwordLength > 128) {
    alert("Must be less than 128 characters.");
    return;
  }

  // Char Types - select: lowercase, uppercase, numeric, and/or special chars
  var lowerCase = confirm("Do you want lowercase characters in your password?");

  var upperCase = confirm("Do you want uppercase characters in your password?");

  var numeric = confirm("Do you want numbers in your password?");

  var specialChar = confirm("Do you want special characters in your password?");

  if (
    lowerCase === false &&
    upperCase === false &&
    numeric === false &&
    specialChar === false
  ) {
    alert("You must select one type of character.");
    return;
  }


  var userInput = {
    passwordLength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase,
    specialChar: specialChar,
    numeric: numeric
  };


  return userInput;
}
// End of function getOptions


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


