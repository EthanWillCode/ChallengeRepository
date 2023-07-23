// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// addUp(4) ➞ 10
// addUp(13) ➞ 91
// addUp(600) ➞ 180300



function addUp(num){
    let superSum = 0;
    for(let i = 0; i <= num; i++){
        superSum += i;
    }
    return superSum;
}

let test1 = addUp(4);
let test2 = addUp(13);
let test3 = addUp(600);
console.log(test1);
console.log(test2);
console.log(test3);