// literal
let name = 'Alice';
let age = 25;

// ES5 way
let person1 = { name: name, age: age };

// ES6 way (shorthand)
let person2 = { name, age };

console.log(person2);  

// computed
// es5
var emp = {  
    id : 101,  
    name : 'Amit'  
}  
var department = 'dep_name';  
emp[department]='Sales';  
console.log(emp);  

// es6
var department = 'dep_name';  
var emp = {  
    id : 102,  
    name : 'Anil',  
    [department]:'Production'  
}  
console.log(emp); 

// // object destructing
// const person = { name: 'sneha', age: 22, job: 'Developer' };

// // Destructuring
// const { name, age } = person;

// console.log(name);  // Output: Dana
// console.log(age);   // Output: 28
