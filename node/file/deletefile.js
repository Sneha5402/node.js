var fs =require('fs');

fs.unlink('newfile.txt',function(err,data){
    if(err) throw err;
    console.log('File is deleted')
})
