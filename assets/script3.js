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
var password = "";
var createAnother = "";
var passwordText = "";
var passwordCharacters = [];



function generatePassword() {

    //ensure text area is clear before generating password


    //ask the user to choose a password length between 1 and 128 characters

    passwordLength = parseInt(prompt("Please choose the length of your password between 8 and 128 characters"));

    // if the password is not between 8 and 128 characters, or is not a numeric value, alert user that their option is invalid and take them back to the start

    if (passwordLength < 8 || passwordLength > 128 || passwordLength != passwordLength) {
        alert("Invalid input. You must choose between 8 and 128 characters.");
        return generatePassword();
    }

    //uppercase prompt

    upper = window.confirm("Would you like to include uppercase characters? OK for Yes, Cancel for No.");
    console.log(upper);


    //lowercase prompt

    lower = window.confirm("Would you like to include lowercase characters? OK for Yes, Cancel for No.");
    console.log(lower);

    //numbers prompt

    numbers = window.confirm("Would you like to include numbers? OK for Yes, Cancel for No.");
    console.log(numbers);

    //special characters

    special = window.confirm("Would you like to include special characters? OK for Yes, Cancel for No.");
    console.log(special);

    console.log(passwordLength);

    //if user selects cancel/no for all four password criteria, tell them they need to choose at least one and return them to the top of the generate password prompts to choose again.

    if (upper === false && lower === false && numbers === false && special === false) {

        alert("Please choose at least ONE (1) of the criteria: uppercase, lowercase, numbers and/or special characters");

        return generatePassword();
    }


    //depending on what options the user has selected as true, concat those character arrays into another array.
    //Big thank you to Italy S for posting a similar solution on stackoverflow. I was stuck for hours on this: https://stackoverflow.com/questions/69851109/js-password-generator-character-length-not-working


    if (upper === true)
        passwordCharacters = passwordCharacters.concat(upperCaseLetters);

    if (lower === true)
        passwordCharacters = passwordCharacters.concat(lowerCaseLetters);

    if (numbers === true)
        passwordCharacters = passwordCharacters.concat(numbs);

    if (special === true)
        passwordCharacters = passwordCharacters.concat(specialChars);


    console.log(passwordCharacters);
}

//generate a password based on the password length that the user has chosen and select randomly from the passwordCharacters array

//THIS WAY ISN'T AS SECURE BUT IT WORKS

// var password = "";

// for (var i = 0; i < passwordLength; i++) {

//     password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
// }
// //if the password result does not include any of the required categories, generate another.

// if (!password.includes(numbs) && !password.includes(specialChars) && !password.includes(upper) && !password.includes(lower)) {

//     for (var i = 0; i < passwordLength.length; i++)
//         password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

//     return password;
// }

// }






//CAN PROBABLY DELETE THIS.


// if (password != numbs || password != specialChars || password != upper || password != lower); {

//     for (var i = 0; i < passwordLength; i++) {

//         password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

//         console.log(passwordLength);

//     }
// return (password);
// }
// }


//     console.log(passwordLength);
// }

// return (password);





//TRYING TO MAKE IT MORE SECURE

// var password = "";

for (var i = passwordCharacters.length - 1; i > 0; i--) {
    var password = Math.floor(Math.random() * (i + 1));
    var temp = passwordLength[i];
    passwordLength[i] = passwordCharacters[password];
    passwordCharacters[password] = temp;



    password += passwordCharacters[index];

    console.log(password);

    // return (password);

}

// }

// return (password);
// }


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



