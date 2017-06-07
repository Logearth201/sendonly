$(function(){
    $('#button').click(function(){
        window.location.href="index.html";
    })

    $('#text3').hover(function(){
        $('#mamizone').html('<img src="城之内１.jpg" width="400px">').css('padding-left','400px')
    },function(){
        $('#mamizone').html('<img src="マミ2.jpg" width="400px">')
    });
})
