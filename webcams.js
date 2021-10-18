(function(){
    var video= document.getElementById('video'),
        vendorUrl= window.URL|| window.webkitURL;
    navigator.getMedia= navigator.getUserMedia||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.mozGetUserMedia;
    navigator.getMedia({
            video: true, 
            audio: false
    }, function(stream){
        vendor.src= vendorUrl.createObjectURL(stream);
        video.play();
    }, function(error){
        //an error ocurred
        //error.code
    })
});