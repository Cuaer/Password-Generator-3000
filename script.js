// Assignment Code. This is tied to the generate id found in the html.
var generateBtn = document.querySelector("#generate");

//Values of the Special Characters
var specChars = [" ", "!", "#", "\"", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~"]; //will be using variable i
var numberValues = [0123456789]; //will be using variable i to pick
var upperCase = [ABCDEFGHIJKLMNOPQRSTUVWXYZ]; //will be using variable i?
var lowerCase = [abcdefghijklmnopqrstuvwxyz];
var passLength =  {8>= i && i =< 128} min= 8 max = 128;

//Password length prompt. If the password lengths are less than 8 or more than 128, prompt message to pick valid option. This passLengthValue will have to be a numerical value that fits the limits of the characters
passLength.prompt ("Please pick a the length of your password (8-128 characters)");
function passLengthValue(passLength){
  if (passLength < 8) {
    passlength = null;
    alert ("Please make a valid input.");
    return;
  } else if (passLength > 128){
    passLength= null;
    alert ("Please make a valid input.");
    return;
  }  
}
console.log (passLength());

//List of confirmations. Confirmation windows to limit user to yes/no responses. The function is then stated underneath.
//Based on these responses, the userInput variable will trigger a series of events based on the responses to each of the confirmations above the boolean will be either true or false.
var lowerCase = confirm ("Would you like to include lowercase letters in your password? Click OK to confirm.");
function lowerCaseValue (lowerCase){
  if {
    var included = true;
    lowerCase= true;
    lowerCase= lowerCaseValue;
    lowerCaseValue();
  }
};


upperCase.confirm ("Would you like to include uppercase letters in your password? Click OK to confirm.");
function upperCaseValue(){

};

numericalCharacters.confirm ("Would you like to include numbers in your password? Click OK to confirm.");
function numCharVal(){

};

specialCharacters.confirm ("Would you like to include special characters in your password? Click OK to confirm.")?;
function specCharVal(true, false){

};


function writePassword = {
  passlength
};

// Write password to the #password input. This function carries is dependent on the variable 'password' that will provide the code found in generatePassword. The variable passwordText will then connect with the id password in the html and replace the value with the generated password which will result in the writePassword log. Write password is currently an undefined variable
function writePassword() {
  var password = generatePassword(specChars, numberValues, upperCase, lowerCase, passLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button. Once clicked will return the items in the writePassword log/fx
generateBtn.addEventListener("click", writePassword);

/*function{
var passLength = {
  var 
}
//if passLength (0 < 7){
  window.prompt("Please make a valid input between 8-128 characters")
  }
//if passLength (129 > 0){
  window.prompt("Please make a valid input between 8-128 characters")
  }
  else if (8, 128){
    var numberValue = passLength
  }
};
*/

function userInput () {
  
}



//Will define what are the special characters within the variable specChars

//Variable that will collect the input of all the variables
//function writePassword ()


//Prompts for user code guidelines. Include Return prompts and troubleshoot to make sure user cannot cancel or proceed without input 

/* TO DO LIST:
✔️Organize in order of appearance
✔️Variable for special characters (expanded). 
❌Include prompt if they want to include special characters


❌On buttonClick (make prompts show)
❌ Create prompt to ask for length (may have to add variables/several conditions for passwords to range 8-25. Try using "Input the length of your password (8-128 characters)"
✔️ Prompt requesting which character types (this is where the list of characters comes in):
  ✔️"lowercase" ✔️uppercase ✔️numeric ✔️special characters

❌Make sure one item is selected, otherwise, request user to "Please make an appropriate selection" "Add option for no additional special characters"
❌ If user inputs 'd' as opposed to 'D' use && to mean that input is same
❌Add button to "cancel" or "ok" or "done" or "finish"
if (!passLength){
  return;
}
if (!specialCharacters){
  return;
}
❌On last input, password is generated
Maybe add copy button or message to state to copy using right-click or ctrl-c
*/


//in the end, all prompts must lead to function that will ultimately put everything together

