var upperCaseArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  
  var lowerCaseArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  var symbolArr = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~"
  ];
  
  var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  
  var passOptions = {
    length: 0,
    upperCase: false,
    lowerCase: false,
    symbol: false,
    number: false
  };

  
  
  function setPassOptions() {
    var lengthInput = prompt(
      "How Many Character Your Password Wants To Be ? (Between 8 to 128 character) "
    );
    //console.log(lengthInput)
  
    if (parseInt(lengthInput) < 8 || parseInt(lengthInput) > 128) {
      alert("You Must Choose Number Between 8 to 128");
      setPassOptions();
    } else {
      var length = parseInt(lengthInput);
    }
  
    var upperInput = confirm("Do you want to choose uppercase letters?");
    var lowerInput = confirm("Do you want to choose lowercase letters?");
    var symbolInput = confirm("Do you want to choose symbols?");
    var numberInput = confirm("Do you want to choose numbers?");
  
    passOptions.length = length;
    passOptions.upperCase = upperInput;
    passOptions.lowerCase = lowerInput;
    passOptions.symbol = symbolInput;
    passOptions.number = numberInput;
  
    console.log(length);
    return passOptions;
  }
  //initialised a function to genereate a random a number
  //use that random number as an index for a array, which then selects the element for out password
  //return element
  function getRandomNumber(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  
    return randomElement;
  }
     
  function generatePassword() {
    var options = setPassOptions();
    console.log(options);
    var password = [];
    // convert character strings to arrays
    // prompt for the rest of the options and save answers to passOptions object
    // conditional statement in this function that checks passOptions, and adds to the password string as appropriate
    var userPassword = [];
  
    if (options.upperCase) {
      password = password.concat(upperCaseArr);
    }
    if (options.lowerCase) {
      password = password.concat(lowerCaseArr);
    }
    if (options.symbol) {
      password = password.concat(symbolArr);
    }
    if (options.number) {
      password = password.concat(numberArr);
    }
    // password =password[Math.floor(Math.random() * options.length)];
    // console.log(length);
  
    //for however long the users length is (8 for testing)
    for (var i = 0; i < options.length; i++) {
      //create a character variable that is assigned to the element that the random function returns
      // pass password array through my function to grab a random element at a random index
      var character = getRandomNumber(password);
      //push the character into my empty userpassword
      userPassword.push(character);
    }
    // put the passord inside the textarea.
    document.getElementById("textbox").value = userPassword.join("");
    //turn my userpassword array into a string a return in
    console.log(userPassword);
    console.log(userPassword.join(""));
    return userPassword.join("");
    
  
      }

      var generateBtn = document.querySelector("#generate");
      generateBtn.addEventListener("click", generatePassword);
  


  
  
  // copy text to the clip board


  function copyClipboard(){
    document.getElementById("textbox").select();
    document.execCommand("copy");
    alert("password copied to clipboard !");

  }






  

  //  var copyBtn = document.getElementById("copy");
  // copyBtn.addEventListener("click",() =>{
  //   var textera = document.createElement("textarea");
  //   var password = generatePassword.innerText;
    
  //   if(!password){
  //     return;
  //   }
  //   textera.value = password;
  //   document.body.appendChild(textera);
  //   textera.select();
  //   document.execCommand("copy");
  //   textera.remove();
  //   alert("password copied to clipboard!")
  // } );

  // console.log(copyBtn);

  

  
 
 
