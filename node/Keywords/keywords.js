var message="Hello,Node.js!";
console.log(message);

let count=5;
if(count>0){
    let insideBlock="Block-scoped";
    console.log(insideBlock);
}
// console.log(insideBlock);

const pi=3.14159;
console.log(`The value is ${pi}`);

const user = { name: 'Sakshi', age: 30 };
user.name = "sneha"; 
console.log(user); 

// var vs let
function testVar() {
    var x = 1;
    if (true) {
        var x = 2; 
        console.log(x); 
    }
    console.log(x);
}
function testLet() {
    let x = 1;
    if (true) {
        let x = 2;
        console.log(x); 
    }
    console.log(x); 
}

testVar();
testLet();

// console.log('For loop example:');
// for (let i = 0; i < 5; i++) {
//     console.log(`Iteration ${i}`);
// }

// console.log('\nWhile loop example:');
// let counts = 0;
// while (counts < 3) {
//     console.log(`Count is ${count}`);
//     count++;
// }

// console.log('\nDo...while loop example:');
// let num = 0;
// do {
//     console.log(`Number is ${num}`);
//     num++;
// } while (num < 3);

// // Importing the built-in 'fs' module (File System)
// const fs = require('fs');

// // Using `let` to declare variables
// let fileName = 'example.txt';
// const content = 'This is a sample content for Node.js example';

// // Asynchronous function to write content to a file
// async function writeFile() {
//     try {
//         // Using await to handle asynchronous file write
//         await fs.promises.writeFile(fileName, content, 'utf8');
//         console.log(`Content written to ${fileName}`);
//     } catch (error) {
//         console.error('Error writing file:', error);
//     }
// }

// // Call the async function
// writeFile();

// // Using `process` to interact with the system (e.g., reading environment variables)
// console.log('NODE_ENV:', process.env.NODE_ENV);

// // Exporting a function for use in another file
// module.exports = { writeFile };

// // arrow function
// const add = (a, b) => a + b;
// console.log(add(3, 4)); 

// // without arrow
// function add(a, b) {
//     return a + b;
//   }
  
//   console.log(add(3, 4)); 
  
