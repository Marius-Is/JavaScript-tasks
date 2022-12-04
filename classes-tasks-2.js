console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  // ... code
  class Player {
	
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    
    getAge = () => `${this.name} is age ${this.age}`;
    getHeight = () => `${this.name} is ${this.height}cm`;
    getWeight = () => `${this.name} weighs ${this.weight}kg`;
  
  }
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  // ... code
  class Calculator {
    //write functions to add(), subtract(), multiply() and divide()//
    add = (a,b) => a + b;
    subtract = (a,b) =>  a - b;
    multiply = (a,b) => a * b;
    divide = (a,b) => a / b;
  }
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  // ... code
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      // Complete the code!
      this.fullname = `${firstname} ${lastname}`;
      this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
  }
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  // ... code
  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
      
    compareAge(other) {
      let i = Math.sign(other.age - this.age),
          x = ["the same age as", "older than"][i] || "younger than";
      return `${other.name} is ${x} me.`;
    }
  }
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  // ... code
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }
  
  
  class Circle {
    // put your code here
    constructor(r){
      this.r = r
    }
    getArea(){ return this.r ** 2 *Math.PI}
    getPerimeter(){return this.r *2*Math.PI}
  }
  
  
  // unquote and use run to test these cases:
  
  /*
  let q = new Circle(4.44);
  console.log(q.getArea());
  console.log(q.getPerimeter());
  */
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  // ... code
  class Name {
    constructor(f, l) {
      this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
      this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
      this.fullname = `${this.fname} ${this.lname}`;
      this.initials = `${this.fname[0]}.${this.lname[0]}`;
    }
  }
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  // ... code
  function sweetestIcecream(arr) {
    var sweetVal = {
      "Plain" : 0,
      "Vanilla" :	5,
      "ChocolateChip" :	5,
      "Strawberry"	: 10,
      "Chocolate" :	10
    };
    
    var res = arr.map(elem => sweetVal[elem["flavor"]] + elem["numSprinkles"]);
    return Math.max(...res);
  }
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  // ... code
  // Your OnesThreesNines class here!

class OnesThreesNines{
	constructor(n){
		this.ones = Math.floor(n / 1);
		this.threes = Math.floor(n / 3);
		this.nines = Math.floor(n / 9);
	}
}
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
  class User {
    static userCount=0;
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  }
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  // ... code
  //function Book(title, author) {
	// Write your properties and methods here
//}

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
	
	getTitle() {
		return `Title: ${this.title}`
	}
	
	getAuthor() {
		return `Author: ${this.author}`
	}
}

// Instantiate your Book constructor here
const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');
}
console.groupEnd();
