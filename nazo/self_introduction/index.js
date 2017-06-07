$(function(){
    $('#death-button').click(function(){
        var i = Number($("#sel").val());
        if(i===1){
            $('body').css('background-image','url("マミ.gif")')
            .css('background-size','10% auto').css('color','red');
            $('#mami').fadeIn(1500);
        }else if(i===2){
            window.location.href = "index3.html";
        }else if(i===3){
            window.location.href = "index4.html";
        }else if(i===4){
            window.location.href = "index5.html";
        }else if(i===5){

            $('#all').snowfall({
                flakeCount : 70,
                flakeColor : "",
                flakeIndex : "888",
                minSize : 40,
                maxSize : 70,
                minSpeed : 4,
                maxSpeed : 8,
                round : false,
                shadow : false,
                image : "にんにく.png"
            });
        }
    })
    $('#qb').click(function(){
        window.location.href="https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%A5%E3%82%A5%E3%81%B9%E3%81%88";
    })
    $('#j').click(function(){
        window.location.href="https://ja.wikipedia.org/wiki/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E4%BA%8C%E9%83%8E";
    })



})
