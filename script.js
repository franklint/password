//Assignment code here


// Get references to the #generate element
var generateBtn =  document.querySelector("#generate");

//passwordlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
};

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()* 26) + 65);
}; 

function getNumberRando(){
  return String.fromCharCode(Math.floor(Math.random()* 10)+ 48);
}; 

function getSymbol (){
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random()* symbols.length)]; 
}

function generatePassword(){

   
  console.log("Hey! you clicked the button! "); 
  var pwLength = prompt("Please enter a password length between 8 and 128 to generate a Password");
  var lowerCase = prompt("Would you like a password with lower case? If No, pls skip with enter");  
  var upperCase= prompt("Would you like a password with upper case? If No, pls skip with enter"); 
  var numberCase = prompt("Would you like a password with numbers? If No, pls skip with enter"); 
  var symbolCase= prompt("Would you like a password with symbols? If No, pls skip with enter"); 

  console.log(lowerCase); 

  if (lowerCase) {
    var lower = 1; 
  }

  if(upperCase) {
    var upper = 1; 
  }
  
  if(numberCase) {
    var number = 1; 
  }

  if(symbolCase) {
    var symbol = 1; 
  }


  //var typeCount = lower + upper + number + symbol;
  //console.log('typesCount: ', typeCount);  

  const pwChoice = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

  console.log('pwChoice:', pwChoice); 

  const randomFunc = {
    lower: getRandomLower, 
    upper: getRandomUpper, 
    number: getNumberRando, 
    symbol: getSymbol
  }; 


  var password = ""; 


      if(pwLength >= 8 && pwLength <= 128){
        {
         
            for (let i=0; i< pwLength; i += pwChoice.length )
                {
                  pwChoice.forEach(type => {
                    const funcName = Object.keys(type)[0]; 
                    console.log('funcName: ', funcName);

                      password += randomFunc[funcName](); 
                      console.log(password); 

                  });
                }
          
        }
      }  
  else {
    window.alert("Please enter a length between 8 and 128"); 
  }

  return password; 

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);