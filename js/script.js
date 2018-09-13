
$(function(){
    Vhat();
});

function Vhat(){
        
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
        {video: true, audio: true},
        function(mediaStream){
            var socket = io();
            socket.emit('video', window.URL.createObjectURL(mediaStream));
            socket.on('src',function(data){
                var video = document.createElement("video");
                $("#chats").append(video);
                video.controls = true;
                video.src = data;
                video.play();
                video.onloadedmetadata = function(e){
                    console.log(e);
                }
            });
        },
        function(error){
            console.log(error);
        }
    );
    }