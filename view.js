exports.view = function(app){
    var io = app.socketIO;
    var chats = []
    return {
        index: function(req, res){
            console.log("location: ", req.params.loc);
            if(typeof chats[req.params.loc] === "undefined"){
                var chat = io.of('/'+req.params.loc).on('connection', function(socket){
                    socket.on('message', function(data){
                        chat.emit('message', data);
                    });
                });
                chats[req.params.loc] = chat;
            }
            res.render('index.jade', { locals: {
                    title: req.params.loc
                }
            });
        }
    }
}