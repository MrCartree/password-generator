// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // const list = 'abcdefghijklmnopqrstuvwxyz';

  // const max = list.length;
  // const min = 0;
  // const index = Math.trunc(max * Math.random() + min);

  // console.log(list[index]);
  const passwordLength = prompt("How many characters do you want in your password, with a minimum of 8 characters?");
  const wantSymbols = confirm("Would you like symbols in your password?");
  const wantNumb = confirm("Would you like numbers in your password?");
  const wantUpper = confirm("Would you like uppercase Letters in your password?");
  const wantLower = confirm("Would you like lowercase letters in your password?")
  
  let password = "";

  if (wantSymbols) {
    const symbols = "!@#$%^&*.,+-=";
    const max = symbols.length;
    const min = 0;
    const symIndex = Math.trunc(max * Math.random() + min);
    password += symbols[symIndex];
  }

  if (wantNumb) {
    const number = "0123456789";
    const max = number.length;
    const min = 0;
    const numIndex = Math.trunc(max * Math.random() + min);
    password += number[numIndex];
  }

  if (wantUpper) {
    const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const max = upCase.length;
    const min = 0;
    const upCaseInd = Math.trunc(max * Math.random() + min);
    password += upCase[upCaseInd];
  }

  if (wantLower) {
    const lowCase = "abcdefghijklmnopqrstuvwxyz"
    const max = lowCase.length;
    const min = 0;
    const lowCaseInd = Math.trunc(max * Math.random() + min);
    password += lowCase[lowCaseInd];
  }



  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

