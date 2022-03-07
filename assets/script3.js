// Assignment Code
var generateBtn = document.querySelector("#generate");

//defining vars for password characters

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var specialChars = ["!", "@", "#", "$", "$", "%", "^", "&", "*", "?", "~", ">", "<", ".", "/"];

//defining vars for password criteria

var passwordLength = [];
var upper = "";
var lower = "";
var numbers = "";
var special = "";
var passwordCharacters = [];



function generatePassword() {

    //ensure that the password characters array is clear

    if (passwordCharacters !== []) {
        passwordCharacters = [];
    }

    //Just to see if it works
    console.log("clear!");

    //ask the user to choose a password length between 1 and 128 characters

    passwordLength = Number(prompt("Please choose the length of your password between 8 and 128 characters."));

    // if the password is not between 8 and 128 characters, or is not a numeric value, alert user that their option is invalid and take them back to the start

    if (passwordLength < 8 || passwordLength > 128 || passwordLength != passwordLength) {
        alert("Invalid input. You must choose between 8 and 128 characters.");
        return generatePassword();
    }

    //uppercase prompt

    upper = window.confirm("Would you like to include uppercase characters? OK for Yes, Cancel for No.");
    //Just to make sure it was working
    console.log(upper);


    //lowercase prompt

    lower = window.confirm("Would you like to include lowercase characters? OK for Yes, Cancel for No.");
    //Just to make sure it was working
    console.log(lower);

    //numbers prompt

    numbers = window.confirm("Would you like to include numbers? OK for Yes, Cancel for No.");
    //Just to make sure it was working
    // console.log(numbers);

    //special characters

    special = window.confirm("Would you like to include special characters? OK for Yes, Cancel for No.");
    //Just to make sure it was working
    console.log(special);
    // console.log(passwordLength);


    //if user selects cancel/no for all four password criteria, tell them they need to choose at least one and return them to the top of the generate password prompts to choose again.

    if (upper === false && lower === false && numbers === false && special === false) {

        alert("Please choose at least ONE (1) of the criteria: uppercase, lowercase, numbers and/or special characters");

        return generatePassword();
    }


    //depending on what options the user has selected as true, concat those character arrays into another array.
    //Big thank you to Italy S for posting a similar solution on stackoverflow. I was stuck for hours on this because I wanted a more concise way of adding the characters: https://stackoverflow.com/questions/69851109/js-password-generator-character-length-not-working


    if (upper === true)
        passwordCharacters = passwordCharacters.concat(upperCaseLetters);

    if (lower === true)
        passwordCharacters = passwordCharacters.concat(lowerCaseLetters);

    if (numbers === true)
        passwordCharacters = passwordCharacters.concat(numbs);

    if (special === true)
        passwordCharacters = passwordCharacters.concat(specialChars);


    //Just to make sure it was working
    console.log(passwordCharacters);


    //generate a password based on the password length that the user has chosen and select randomly from the passwordCharacters array

    // ATTEMPT NUMBER INFINITY at the whole making the random generation more secure. Okay. So. This below code (and following function) will generate a string based on the required password length AND criteria, then shuffle that based on the principle of the Fisher-Yates (and Durstenfeld's more recent update to it) algorithm.

    // Big big thank you to Ryan Shillington on Stack Overflow for providing the below solution to a question someone else posted: https://stackoverflow.com/questions/9719570/generate-random-password-string-with-requirements-in-javascript/51540480#51540480

    // Pretty sure I wouldn't have been able to do this without their solution.

    var randomPassword = Array(passwordLength);

    //all of this is so that any password that is true for all 4 criteria will have at least one character of each category in the password. Otherwise, the password will only have characters from the requested criteria.

    if (upper === true) {
        randomPassword[0] = (upperCaseLetters);
    } else {
        randomPassword[0] = (passwordCharacters);
    }

    if (lower === true) {
        randomPassword[1] = (lowerCaseLetters);
    } else {
        randomPassword[1] = (passwordCharacters);
    }

    if (special === true) {
        randomPassword[2] = (specialChars);
    } else {
        randomPassword[2] = (passwordCharacters);
    }

    if (numbers === true) {
        randomPassword[3] = (numbs);
    } else {
        randomPassword[3] = (passwordCharacters);
    }

    //fill the randomPassword array with characters from the passwordCharacters array

    randomPassword = randomPassword.fill(passwordCharacters, 4);

    //Just so I can see what is happening
    console.log(passwordCharacters);

    //generate the password

    console.log(randomPassword);

    return shuffleArray(randomPassword.map(function (createPassword) { return createPassword[Math.floor(Math.random() * createPassword.length)] })).join("");

}

//shuffle using the Durstenfeld algorithm (based on the Fisher-Yates algorithm).

function shuffleArray(passwordCharacters) {
    for (var i = passwordCharacters.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = passwordCharacters[i];
        passwordCharacters[i] = passwordCharacters[j];
        passwordCharacters[j] = temp;

        // Just to see if it's working
        // console.log(passwordCharacters);

    }

    return passwordCharacters;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



