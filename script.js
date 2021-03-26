// Assignment Code
var generateBtn = document.querySelector("#generate");

//Prompts for user code guidelines. Include Return prompts and troubleshoot to make sure user cannot cancel or proceed without input //
/* 

❌ Organize in order of appearance
❌Codes for all password special characters accepted. 
❌Include prompt if they want to include special characters
Character	Name	Unicode
 	Space	U+0020
!	Exclamation	U+0021
”	Double quote	U+0022
#	Number sign (hash)	U+0023
$	Dollar sign	U+0024
%	Percent	U+0025
&	Ampersand	U+0026
’	Single quote	U+0027
(	Left parenthesis	U+0028
)	Right parenthesis	U+0029
*	Asterisk	U+002A
+	Plus	U+002B
,	Comma	U+002C
-	Minus	U+002D
.	Full stop	U+002E
/	Slash	U+002F
:	Colon	U+003A
;	Semicolon	U+003B
<	Less than	U+003C
=	Equal sign	U+003D
>	Greater than	U+003E
?	Question mark	U+003F
@	At sign	U+0040
[	Left bracket	U+005B
\	Backslash	U+005C
]	Right bracket	U+005D
^	Caret	U+005E
_	Underscore	U+005F
`	Grave accent (backtick)	U+0060
{	Left brace	U+007B
|	Vertical bar	U+007C
}	Right brace	U+007D
~	Tilde	U+007E

❌On buttonClick (make prompts show)
❌ Create prompt to ask for length (may have to add variables/several conditions for passwords to range 8-25. Try using "Input the length of your password (8-128 characters)"
❌ Prompt requesting which character types (this is where the list of characters comes in):
  ❌"lowercase" ❌uppercase ❌numeric ❌special characters
❌Make sure one item is selected, otherwise, request user to "Please make an appropriate selection" "Add option for no additional special characters"
❌ If user inputs 'd' as opposed to 'D' use && to mean that input is same
❌Add button to "cancel" or "ok" or "done" or "finish"
❌On last input, password is generated
Maybe add copy button or message to state to copy using right-click or ctrl-c
*/


prompt()

//


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
