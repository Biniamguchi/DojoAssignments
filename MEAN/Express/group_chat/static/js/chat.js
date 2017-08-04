$(document).ready(function(){
    let socket = io.connect();

    socket.on("OnConnect-Sv",function(data){
        while(true){
            if(data.username == undefined){
                data.username = prompt("Your name");
            }else{
                if(data.username.length < 1){
                    data.username = prompt("Your name");
                }else{
                    break;
                }
            }
        }
        socket.emit("OnConnect-Cl",data);
    })

    socket.on("OnDisconnect-Sv",function(text){
        // Tell users this user disconnected.
        $("#chatLog").append(text);
    })

    socket.on("UserConnect-Broadcast",function(text){
        // Tell users this user connected.
        $("#chatLog").append(text);
    })

    socket.on("UserConnect-Emit",function(log){
        // Add all previous chat text.
        for(text in log){
            $("#chatLog").append(log[text]);
        }
        $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    })

    $("#chatSend").click(function(){
        let txt = $("#chatEntry").val();
        if(txt.length < 1){return;}
        $("#chatEntry").val("");
        socket.emit("UserSay-Cl",txt);
    })

    $("#chatEntry").keydown(function(e){
        e.key == "Enter" ? $("#chatSend").click():false;
    })

    socket.on("UserSay-Sv",function(text){
        $("#chatLog").append(text);
        $('#chatLog').scrollTop($('#chatLog')[0].scrollHeight);
    })
})
