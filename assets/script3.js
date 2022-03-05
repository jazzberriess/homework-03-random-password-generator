// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
var numbs = ["1234567890"];
var specialChars = ["!@#$%^&*?~"];

var upperLowerNumbsSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*?~"

// var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

// var specialChars = ["!", "@", "#", "$", "$", "%", "^", "&", "*", "?", "~"];


function generatePassword() {
    //ask the user to choose a password length between 1 and 128 characters
    var passwordLength = Number(window.prompt("Please choose between 8 and 128 characters"));

    // if the password is not between 8 and 128 characters, alert user that their option is invalid

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid option.");
        generatePassword();
    } else {
        console.log("You chose " + passwordLength);
    }

    for (var i = 0; i < passwordLength; i++); {
        writePassword(upperLowerNumbsSpecial.indexOf(Math.random() * passwordLength));
    }




}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

