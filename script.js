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

/*********************************************************************************************************************************************** */
// Assignment code here
  

// GIVEN I need a new, secure password
 function generatePassword() {
   window.alert("Please select your type of password: ");  

  // Store password length the user wants to go with
   var pswrLength = prompt("How many characters do you want your password to be?\n Minimum 8 characters.");
  
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria 
// Make sure the length is between 7 and 129
let invalid = true;
  while (invalid) {
    if (pswrLength > 7 && pswrLength < 129) {
      invalid = false;
    } else {
     alert("Invalid password please try again!");
     pswrLength = prompt("How many characters do you want your password to be?\n Minimum password length is 8 characters.");
   }
}

 let numbersLen = Number(pswrLength);

 alert("Your password length is: " + pswrLength);

// WHEN prompted for password criteria
let lowerCase = confirm("Do you want your password to include lower case letters?");

// THEN I select which criteria to include in the password
let upperCase = confirm("Do you want your password to include upper case letters?");

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
let numbers = confirm("Do you want your password to include numbers?");

// WHEN asked for character types to include in the password
let charSymbol = confirm("Do you want your password to include special characters?")

// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
alert("You chose the following options.\nLower case letters: " + lowerCase + "\nUpper case letters: "
 + upperCase + "\nNumbers: " + numbers + "\nCharacter symbol: " + charSymbol );

// WHEN I answer each prompt
let invalidAgain = true;

  // THEN my input should be validated and at least one character type should be selected
  while (invalidAgain) {
    if (lowerCase == true || upperCase == true || charSymbol == true ||numbers == true) {
      invalidAgain = false;
    } else {
        alert("Your input was invalid. \nAt least one character must be selected.");
        lowerCase = confirm("Do you want your password to include lower case letters?");
        upperCase = confirm("Do you want your password to include upper case letters?");
        numbers = confirm("Do you want your password to include number?");
        charSymbol = confirm("Do you want your password to include special characters?");
        alert(
          "You chose the following options.\nLower case letters: " + lowerCase + 
          "\nUppercase letters: " + upperCase + "\nNumbers: " + numbers + 
          "\nCharacter symbol: " + charSymbol);
        }
    }   

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// if else statement strings of all possible choices letters, numbers, and characters
if (lowerCase) {
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
} else {
  lowerCase = " ";
}

if (upperCase) {
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
} else {
  upperCase = " ";
}

if (numbers) {
  numbers = "0123456789";
} else {
  numbers = " ";
}

if (charSymbol) {
  charSymbol = ",.<>?;:!@#$%^&*()-_=+"; 
} else {
  charSymbol = " ";
}
 
// // WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
 let bigString = charSymbol.concat(numbers, upperCase, lowerCase);

let randomNumber = " ";
for (var i = 0; i < numbersLen; i++) {
     randomNumber += bigString[Math.floor(Math.random() * bigString.length)];
   }
   return randomNumber;
  }

generatePassword();






















