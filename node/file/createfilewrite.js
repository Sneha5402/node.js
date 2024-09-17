var fs =require('fs');

fs.writeFile('newfile3.txt',"hi",function(err,data){
    if(err) throw err;
    console.log('File created')
})