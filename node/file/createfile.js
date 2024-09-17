var fs =require('fs');
fs.appendFile('newfile.txt','Hello World 12344',function(err,data){
    if (err) throw err;
    console.log("File has been created")
});