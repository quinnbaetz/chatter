var newURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
console.log(newURL);
var socket = io.connect(newURL);

//var socket = io.connect('http://localhost:3000/asdf');
console.log(socket)

socket.on('message', function (data) {
  console.log("receiving");
  $('#comments').append("<li>"+data.message+"</li>");
});


$(function(){
    $('form').submit(function(){
       var msg = $('textarea').val();
       if(msg.length>0){
           console.log("emitting");
           socket.emit("message", {"message": msg});
       }
       return false; 
    });
})


