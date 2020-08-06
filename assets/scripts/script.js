// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordLength = prompt("How many characters do you want in your password, with a minimum of 8 characters?");
  const wantSymbols = confirm("Would you like symbols in your password?");
  const wantNumb = confirm("Would you like numbers in your password?");
  const wantUpper = confirm("Would you like uppercase Letters in your password?");
  const wantLower = confirm("Would you like lowercase letters in your password?")

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

