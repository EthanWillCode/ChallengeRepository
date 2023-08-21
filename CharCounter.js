
let char1 ="a";
let char2 ="A";
let char3 ="b";
let char4 ="c"

let string1 = "edabit";
let string2 = "Chamber of secrets";
let string3 = "big fat bubble";


function charCount(myChar, str) {
	let counter = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]===myChar){
            counter++;
        }
    }
    return counter;
}

let test1 = charCount(char1,string1);
let test2 = charCount(char2,string1);
let test3 = charCount(char4, string2);
let test4 = charCount(char3, string3);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);