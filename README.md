# Password-Generator
Generate new, secure password based on certain criteria selected by the user

## Link to Deployed Site
https://lundyc0917.github.io/Password-Generator/

## Motivation
Create a password generator to generate strong, secure passwords based on the users criteria.  This allows for the user to generate a random, strong password to be used.

## Build Status

build | passing

## Screen Shots
![password-generator-homePage](https://user-images.githubusercontent.com/71233342/99009121-7b69bc00-2515-11eb-821d-b5210b7b3c6c.png)

![password-generator-prompt](https://user-images.githubusercontent.com/71233342/99009055-56754900-2515-11eb-8111-b9f7a8852089.png)

![password-generator-newPassword](https://user-images.githubusercontent.com/71233342/99008906-13b37100-2515-11eb-9535-f3b2b97f08d6.png)


## Framework Used

Built Using:
 - JavaScript
 - HTML
 - CSS

## Features

When the page is opened up, the user sees an empty box and a "Generate Password" button.  

Once the button is pressed, the user is given a series of prompts and confirm statements:

1) User is asked to enter a number that is more than 8 and less than 128.  If the user enters a value outside of this range, or a non-numeric value, an alert informs the user of the incorrect input.

2) User is then asked four seperate confirm messages asking the user if they would like Lower Case Letters, Upper Case Letters, Numbers, and/or Special Characters.  The user must select to use at least one of these character types.  If the user does not select one of the character types, they are alerted with an error message.

3) After the user has defined the character length and types of characters to use, the page returns an appropriate password in the middle of the page.

## Code Example

.js code:


``````````````````````````
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

  // Char Types for user to select: lowercase, uppercase, numeric, and/or special chars
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

````````````````````````````



