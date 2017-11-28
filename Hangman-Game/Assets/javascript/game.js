window.onload = function () {
    var words = ["morty"];
    var blankDictionary = {};
    var lives = 6;

    var on_off_control = 1;
    var guessHistory = {};
    var guessContent = 0;


    //kick starts game
    if (on_off_control > 0) {
        //writes value of lives to lives span in the html
        document.getElementById("lives-span").innerHTML = lives;
        //Get random word from 'words' array
        var randomWord = words[Math.floor(Math.random() * words.length)];
        //Convert integer to string
        var randomWordString = String(randomWord);
        //Calucalte number of characters in that string
        var wordLength = randomWordString.length;
        //The following loop loops through the character string and catalogues the character as a key and the value as an underscore. 
        for (var i = 0; i <= wordLength; i++) {
            var characterLog = randomWordString.charAt(i);
            blankDictionary[characterLog] = '_ ';
        }
        //This loop displays the value of the key (underscore)
        var blanksToDisplay = "";
        for (var key in blankDictionary) {
            if (blankDictionary.hasOwnProperty(key)) {
                blanksToDisplay = blanksToDisplay + blankDictionary[key];
            }
        }
        //This actually writes the underscores to the document    
        document.getElementById("character-word").innerHTML = blanksToDisplay;


        //Capture keyboard input. 
        document.onkeyup = function (event) {

            /* Captures the key press, converts it to string, and saves it to userGuess variable. Saves userGuess to guess, 
            saves guess to guessHistory object with guess content as key. Loops through word to cross check guessHistory dictionary with 
            blankDictionary (where random word characters are stored). If the key matches the key in blankDictionary, it should swap 
            the value (so exchange the underscore for letter). This was working, but only for one character. When I added in the else it broke further. 
            the else says if the key does not match, take away a life and store the letter guessed in a word bank under the word.                 */
            //This loop needs to happen 
                // if lives > 0
                // if there are blanks


            for (var key in blankDictionary) {
                var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                console.log(userGuess);
                var guess = userGuess;
                guessHistory[guessContent] = guess;
                if (blankDictionary.hasOwnProperty(key)) {
                    if (key === guessHistory[guessContent]) {
                        blankDictionary[key] = guess;
                        guessContent = guessContent + 1;
                        for (var key in blankDictionary) {
                            document.getElementById("character-word").innerHTML = blankDictionary[key];
                        }
                    } else {
                        lives--;
                        document.getElementById("lives-span").innerHTML = (lives);
                        var letterBankDiv = document.getElementById("letter-bank");
                        var letterInBank = document.createTextNode(guess + ", ");
                        letterBankDiv.appendChild(letterInBank);
                        // document.getElementById("letter-bank").appendChild(letterBankDiv);


                    }
                }
            }
            // if lives are 0 alert the user has lost, show word. 
            // if there are no more blanks alert the user has won, show word
        }

        // reset code and pick a new random word. 
    }
}

