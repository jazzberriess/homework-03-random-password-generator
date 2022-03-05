// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";

//arrays for uppercase, lowercase, numbers and special characters

// var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var passwordNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"];

var numbs = ["1234567890"];

var specialChar = ["!#$%&*+-?@^~"];



// Ask user to choose parameters for their password

// function choosePasswordCriteria() {

//   var passwordLength = window.prompt("Please choose the length of your password between 8 and 128 characters.");

//   if ((passwordLength < 8) || (passwordLength > 128)) {
//     window.prompt("Please choose between 8 and 128 characters.");
//   } else if ((passwordLength > 7) || (passwordLength < 129)) {
//     var password = window.confirm("Would you like to include Uppercase characters?");
//   }

//   var upperCaseLetters = window.confirm("Would you like to include Uppercase letters? OK for Yes, Cancel for No");
// } if (passwordChar === true) {
//   var passwordChar = window.confirm("Would you like to ")

// var passwordLengthNumbs = parseInt(prompt("Enter a value between 8 and 128")


// Write password to the #password input

function writePassword() {

  var passwordLength = window.prompt("Please choose the length of your password between 8 and 128 characters.");

  if ((passwordLength < 8) || (passwordLength > 128) || (passwordLength === undefined)) {
    window.prompt("Please choose between 8 and 128 characters.");
  } else if ((passwordLength > 7) || (passwordLength < 129)) {
    console.log("You entered" + passwordLength);
  }

  var upperCaseLetters = window.confirm("Would you like to include Uppercase characters?");
  console.log("You entered" + upperCaseLetters);

  var lowerCaseLetters = window.confirm("Would you like to include Lowercase characters?");
  console.log("You entered" + lowerCaseLetters);

  var numbs = window.confirm("Would you like to include numbers?");
  console.log("You entered" + numbs);

  var specialChars = window.confirm("Would you like to include Special characters?");
  console.log("You entered" + specialChars);

  var password = Math.floor(Math.random() * passwordLength.length);
  console.log(password);


  //generate password

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// choosePasswordCriteria();