const fs = require('fs');

// write a file in a synchronous and blocking way 
 fs.writeFileSync('note.txt','My name is Sneha!')
 const filepath = 'note.txt';
 
// Reads a file in a synchronous and blocking way 
const data = fs.readFileSync(filepath, 'utf-8');
console.log(data);

let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);
