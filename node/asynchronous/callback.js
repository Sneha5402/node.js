function uploadVideo(callback){
    console.log('uploading video');
    setTimeout(()=>{
        console.log('uploading done');
        callback();
    },3000);
}

function publishVideo(publishcallback){
    console.log('publishing video');
    setTimeout(()=>{
        console.log('publishing done');
        publishcallback();
    },2000);
}

function notifyVideo(){
    console.log('notification sent');
}

// uploadVideo();
// publishVideo();
// notifyVideo();

uploadVideo(function(){
    publishVideo(function(){
        notifyVideo();
    })
})

