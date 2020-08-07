// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomChar(chars) {
  const index = Math.trunc(chars.length * Math.random());
  return chars[index];
}

function generatePassword() {

  const passwordLength = parseInt(prompt("How many characters do you want in your password, with a minimum of 8 characters and a maximum of 128?"));
  if (isNaN(passwordLength)) {
    alert("Invalid user input. Please use numbers.");
    return "";
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length does not meet parameters. Please try again.");
  }
  else {
    const wantSymbols = confirm("Would you like symbols in your password?");
    const wantNumb = confirm("Would you like numbers in your password?");
    const wantUpper = confirm("Would you like uppercase Letters in your password?");
    const wantLower = confirm("Would you like lowercase letters in your password?");

    let password = "";

    while (password.length < parseInt(passwordLength)) {

      if (wantSymbols) {
        password += getRandomChar("!@#$%^&*.,+-=");
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }

      if (wantNumb) {
        password += getRandomChar("0123456789");
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }

      if (wantUpper) {
        password += getRandomChar("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }

      if (wantLower) {
        password += getRandomChar("abcdefghijklmnopqrstuvwxyz");
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }

    }

    return password;
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

