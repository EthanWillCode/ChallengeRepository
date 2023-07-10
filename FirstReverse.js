// Have the function FirstReverse(str) take the str parameter being passed
//and return the string in reversed order.
//For example: if the input string is "Hello World and Coders",
//then your program should return the string sredoC dna dlroW olleH.

function firstReverse(str) { 
    let arr = str.split("");
    let newArr = [];
    for(let i = arr.length-1; arr > 0; i--){
        newArr.push(arr[i]);
    }
    return newArr.toString();
}

let test1 = firstReverse("Hello World!");

console.log(test1);