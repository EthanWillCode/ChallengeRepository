// Create a method in the Person class which returns how another person's age compares.
// Given the instances p1, p2 and p3,
// which will be initialised with the attributes name and age, return a sentence in the following format:
// {other person name} is {older than / younger than / the same age as} me.


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		// Write code here!
		if(this.age<other.age){
            return `${other.name} is older than me`;
        }else if(this.age===other.age){
            return `${other.name} is the same age as me.`;
        }else{
            return `${other.name} is younger than me.`;
        }
	}
}

let p1 = new Person("Samuel", 24)
let p2 = new Person("Joel", 36)
let p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2))
console.log(p1.compareAge(p3))

console.log(p2.compareAge(p1))
console.log(p2.compareAge(p3))

console.log(p3.compareAge(p1))
console.log(p3.compareAge(p2))