// Instructions
// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.
// Words may also contain numbers, for example "Hello world123 567.

let sen1 = "Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string.";
let sen2 = "If there are two or more words that are the same length, return the first word from the string with that length.";
let sen3 = "Ignore punctuation and assume sen will not be empty.";
let sen4 = "Words may also contain numbers, f.o.r.?!?!? example Hello world123 567.";
let sen5 = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation?";

function longestWord(sen) { 
    let puntuationless = sen.replace(/[.?,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    let newArr = puntuationless.split(" ");
    let longestWord = "";
    for(let i=0; i<newArr.length; i++){
        if(newArr[i].length > longestWord.length){
            longestWord = newArr[i];
        }
    }
    return longestWord; 
  
  }
  console.log(longestWord(sen1));
  console.log(longestWord(sen2));
  console.log(longestWord(sen3));
  console.log(longestWord(sen4));
  console.log(longestWord(sen5));