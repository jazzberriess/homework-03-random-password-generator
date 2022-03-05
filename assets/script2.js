// Assignment Code
var generateBtn = document.querySelector("#generate");

//arrays for characters

let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];

let specialChars = ["!", "@", "#", "$", "$", "%", "^", "&", "*", "?", "~"];

//defining vars

var passwordLength = [];
var upper = "";
var lower = "";
var special = "";
var numbers = "";


function generatePassword() {


    var passwordLength = [];


    //CHOOSE YOUR PASSWORD LENGTH

    var passwordLength = parseInt(prompt("Please choose the length of your password between 8 and 128 characters."));

    //IF USER CHOOSES LESS THAN 8 OR GREATER THAN 128 CHARACTERS, ASK THEM TO CHOOSE AGAIN

    if ((passwordLength < 8) || (passwordLength > 128)) {
        parseInt(prompt("Please choose between 8 and 128 characters."));

        //IF THEY HAVE CHOSEN BETWEEN 8 AND 128 CHARACTERS, PROGRESS TO NEXT QUESTION
    } else if ((passwordLength > 7) || (passwordLength < 129)) {

        console.log("You have chosen " + passwordLength);
    }

    //UPPERCASE?

    var upper = window.confirm("Would you like to include uppercase characters? OK for Yes, Cancel for No.");
    console.log("You have chosen " + upper);

    //LOWERCASE

    var lower = window.confirm("Would you like to include lowercase letters? OK for Yes, Cancel for No.");
    console.log("You have chosen " + lower);

    //NUMBERS

    var numbers = window.confirm("Would you like to include numbers? OK for Yes, Cancel for No.");
    console.log("You have chosen " + numbers);

    //SPECIAL CHARACTERS

    var special = window.confirm("Would you like to include special characters? OK for Yes, Cancel for No.");
    console.log("You have chosen " + special);

    //IF USER SELECTS CANCEL/NO/FALSE FOR ALL FOUR PASSWORD CRITERIA, TELL THEM THEY NEED TO CHOOSE AT LEAST ONE AND RETURN THEM TO THE TOP OF THE GENERATE PASSWORD PROMPTS.

    if (upper && lower && numbers && special === false) {
        var passwordLength = window.prompt("Please choose at least ONE (1) of the criteria: uppercase, lowercase, numbers, special characters.");
        generatePassword();
    } else {
        console.log("We are getting somewhere");

        console.log(passwordLength);

    }

    //Putting all the characters in an array based on if user selected true or false

    var passwordArray = [];

    if (upper === true)
        passwordArray = passwordArray.concat(upperCaseLetters);

    if (lower === true)
        passwordArray = passwordArray.concat(lowerCaseLetters);

    if (numbers === true)
        passwordArray = passwordArray.concat(numbs);

    if (special === true)
        passwordArray = passwordArray.concat(specialChars);

    console.log(passwordArray);

    var password = "";

    for (var i = 0; i < passwordLength; i++) {

        password += passwordArray[Math.floor(Math.random() * passwordArray.length)];

    }
    return (password);

}

//TRYING TO FIGURE OUT HOW THE FUCK TO GENERATE A RANDOM STRING OF LETTERS AND NUMBERS.


// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
