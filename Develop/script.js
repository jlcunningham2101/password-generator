// declare variables
var randomLowercase = ["abcdefghijklmnopqrstuvwxyz"];
var randomUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var randomNumeric = ["0123456789"];
var randomSpecialCharacters = ["@#$%^&*()+<>/="];
var randomPassword =
  randomLowercase + randomUppercase + randomNumeric + randomSpecialCharacters;

//prompt for password length
function generatePassword() {
  var passwordLength = prompt(
    "How long would you like your password to be? Please be advised it must be 8 characters at min. and not exceed 128 characters."
  );

  //prompt for password length not being met//
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      "Your password is either less than 8 characters or more than 128 characters. Please attempt to re-enter a password that is 8 characters at min. or no more than 128 characters to proceed!"
    );
    return generatePassword();
  }
  //prompts for password criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
    //prompt for password lowercase
    var randomLowercase = confirm(
      "Click OK if you would like to include lowercase letters in your password or click Cancel to set other conditions."
    );
    //prompt for uppercase
    var randomUppercase = confirm(
      "Click OK if you would like to include uppercase letters in your password or click Cancel to set other conditions."
    );
    //prompt for numeric value
    var randomNumeric = confirm(
      "Click OK if you would like to include numeric values in your password or click Cancel to set other conditions."
    );
    //prompt for special character
    var randomSpecialCharacters = confirm(
      "Click OK if you would like to include special characters in your password or click Cancel to set other conditions."
    );
  }

  //for loop
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var trueRandom =
      randomPassword[Math.floor(Math.random() * randomPassword.length)];
    password += trueRandom;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
