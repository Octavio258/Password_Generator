// Assignment code here

var characterPrompt = function () {
  characterLength = prompt("How many characters will your new password be?");

  if (characterLength <8 || characterLength > 128 || isNaN(characterLength)){
    alert ("Hold up now, make sure your password is between 8-128 characters!");
    return characterPrompt();
  }
}

var userPrompt = function() {
  var SpecialChar = confirm ("Do you want special characters for your password?");

  if (SpecialChar) {
    passCharacters = passCharacters.concat(SpecialCharacters)
    securePassword += generateRandomItems(SpecialCharacters)
  }
}

var generateRandomItems = function(characterArray) {
  console.log(characterArray);
  guaranteeCharacters = characterArray[Math.floor(Math.random() * characterArray.characterLength)];
  return guaranteeCharacters;
}





var numbers = ['0', '1','2','3','4','5','6','7','8','9'];
var SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var Alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var CapitalAlphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var passCharacters = [];
var securePassword = "";
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
