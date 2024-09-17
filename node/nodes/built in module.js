// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const fs = require('fs')
fs.writeFileSync('note.txt','My name is Sneha!')
fs.appendFileSync('note.txt','Hello this is sneha')

