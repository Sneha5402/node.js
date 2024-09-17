// const fs = require('fs')
// fs.writeFileSync('note.txt','My name is Sneha!')
// fs.appendFileSync('note.txt','Hello this is sneha')


// const add=require('./utils.js')
// const sum=add(3,4)
// console.log(sum)

const getNotes=require('./notes.js')
const note= getNotes()
console.log(note)