$(document).ready(function(){
    $('#hide').hide();
    $('h1,h2').css('color','silver');

    $('button').css({
        height:32,
        width:100,
        color:"black",
        background:"linear-gradient(white,grey)"
    });

    $('.navList li').hover(function(e){
        $(this).css('color','white');
    },function(){
        $(this).css('color','silver');
    })

    $('#togHead').click(function(){
        $('.head').toggle();
    });

    $('#slDown').click(function(){
        $('.head').slideDown();
    });

    $('#slUp').click(function(){
        $('.head').slideUp();
    })

    $('#fIn').click(function(){
        $('h1').fadeIn();
    });

    $('#fOut').click(function(){
        $('h1').fadeOut();
    });

    $('#addHTML').click(function(){
        $('.footer').html('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt ligula non metus semper blandit. Maecenas mollis, mauris at gravida elementum, ligula eros ultricies nisi, nec accumsan augue nulla sit amet purus. Quisque consequat nibh justo, sit amet dignissim neque mollis in.</p>');
    });

    $('#doBefore').click(function(){
        this.before("BEFORE THIS BUTTON");
    });

    $('#doAfter').click(function(){
        this.after("AFTER THIS BUTTON");
    });

    $('#imgAttr').click(function(){
        if(this.isDown){
            $('#hide').attr("src","https://camo.githubusercontent.com/02ed3f6695f288aedec24c2a329c667281efef5f/687474703a2f2f707265636973696f6e2d736f6674776172652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031342f30342f6a5175726572792e676966");
            this.isDown = false;
        }else{
            $('#hide').attr("src","http://www.vikaskbh.com/wp-content/uploads/2014/01/jquery_logo.png");
            this.isDown = true;
        }
    });

    $('#getVal').hover(function(){
        alert($('#inp').val());
    });

    $('#replTxt').click(function(){
        $(this).text("I've been replaced :/");
    });

    $('#doData').click(function(){
        $(this).data("info",{
            name:"Tony Morris",
            email:"gibsonlpsb@gmail.com",
            github:"morrantho@github.com"
        });

        $('.head h2').text(
            $(this).data("info").name+"\n"+
            $(this).data("info").email+"\n"+
            $(this).data("info").github
        );
    });

    $('#btnRed').click(function(){
        if(this.isDown){
            $('#pRed').removeClass('red');
            this.isDown = false;
        }else{
            $('#pRed').addClass('red');
            this.isDown = true;
        }
    });

    $('#btnHideImg').click(function(){
        $('#hide').slideToggle();
    });

    $('#btnAppend').click(function(){
        $('#pApp').append(" Keep clicking me for more text!");
    });

    $('#headTog').click(function(){
        $('.head').toggle();
    });
});
