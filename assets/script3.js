// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

var specialChars = ["!", "@", "#", "$", "$", "%", "^", "&", "*", "?", "~"];

let passwordChars = [];



// let passwordLength = [];


function generatePassword() {

    var password = "";

    var passwordLength = "";

    //ask the user to choose a password length between 1 and 128 characters

    var passwordLength = parseInt(prompt("Please choose the length of your password between 8 and 128 characters"));

    // if the password is not between 8 and 128 characters, alert user that their option is invalid and take them back to the start

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid input. You must choose between 8 and 128 characters.");
        return generatePassword();

    }

    //move on to next criteria prompt

    let upper = window.confirm("Would you like to include uppercase characters?");


    //lower case prompt

    let lower = window.confirm("Would you like to include lowercase characters?");

    //numbers prompt

    let numbers = window.confirm("Would you like to include numbers?");

    //special characters

    let special = window.confirm("Would you like to include special characters?");

    //depending on what options the user has selected as true, add/concat those character arrays into a string.

    if
        (upper === true)
        passwordChars = upperCaseLetters.concat(passwordChars);

    (lower === true)
    passwordChars = lowerCaseLetters.concat(passwordChars);

    (numbers === true)
    passwordChars = numbs.concat(passwordChars);

    (special === true)
    passwordChars = specialChars.concat(passwordChars);


    //generate our password based on the password length that the user has chosen and select randomly from the passwordChars string

    // var password = "";

    for (var i = 0; i < passwordLength; i++); {
        password += passwordChars[Math.floor(Math.random() * passwordLength.length)];
    }

    return (password);
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

