function triArea(base, height) {
	return (Math.abs(base * height))/2;
}

//should return 3
let test1 = triArea(2,3);

//should return 17.5
let test2 = triArea(5,7);

//should return 8
let test3 = triArea(4,4);

//should return 48
let test4 = triArea(8,12);

//should return 48
let test5 = triArea(-8,12);


console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)