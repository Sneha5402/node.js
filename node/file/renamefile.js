var fs =require('fs');

fs.rename('newfile3.txt','hello',function(err,data){
    if(err)throw err;
    console.log('File renamed')
})
