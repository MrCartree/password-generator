// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  const passwordLength = prompt("How many characters do you want in your password, with a minimum of 8 characters and a maximum of 128?");
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length does not meet parameters. Please try again.");
  }
  else {
    const wantSymbols = confirm("Would you like symbols in your password?");
    const wantNumb = confirm("Would you like numbers in your password?");
    const wantUpper = confirm("Would you like uppercase Letters in your password?");
    const wantLower = confirm("Would you like lowercase letters in your password?");
    
    let password = "";
  
    while(password.length < parseInt(passwordLength)) {
  
      if (wantSymbols) {
        const symbols = "!@#$%^&*.,+-=";
        const symIndex = Math.trunc(symbols.length * Math.random());
        password += symbols[symIndex];
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }
    
      if (wantNumb) {
        const number = "0123456789";
        const numIndex = Math.trunc(number.length * Math.random());
        password += number[numIndex];
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }
    
      if (wantUpper) {
        const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const upCaseInd = Math.trunc(upCase.length * Math.random());
        password += upCase[upCaseInd];
        if (password.length === parseInt(passwordLength)) {
          return password;
        }
      }
    
      if (wantLower) {
        const lowCase = "abcdefghijklmnopqrstuvwxyz"
        const lowCaseInd = Math.trunc(lowCase.length * Math.random());
        password += lowCase[lowCaseInd];
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

