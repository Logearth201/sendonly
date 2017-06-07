function kakunin(){
  ret = confirm("「一番になるっていったよな？日本一なるっつったよな！\nぬるま湯なんかつかってんじゃねぇよお前！！\n言い訳してるんじゃないですか？\nできないこと、無理だって、諦めてるんじゃないですか？\n駄目だ駄目だ！あきらめちゃだめだ！\nできる！できる！絶対にできるって！\nなんで諦めるんだそこで！気持ちの問題だ！\n 諦めんなよ！諦めんなよ、お前！！\nどうしてそこでやめるんだ、そこで！！もう少し頑張ってみろよ！\nダメダメダメ！諦めたら！周りのこと思えよ！\n応援してる人たちのこと思ってみろって！\nあともうちょっとのところなんだから！\nもっと熱くなれよ熱い血燃やしてけよ！\n人間熱くなった時が本当の自分に出会えるんだ！！\nだからこそもっと熱くなれよおおおおおおおおおお！！！」\n 修造にここまで言われてもクイズをやめますか？");
  if (ret == true){
    location.href = "index.html";
  }
}



$(function(){

    $('#quiz1').dialog({autoOpen:false});
    $('#quiz1').dialog({width:"500px"});
    $('#quiz2').dialog({autoOpen:false});
    $('#quiz2').dialog({width:"500px"});
    $('#quiz3').dialog({autoOpen:false});
    $('#quiz3').dialog({width:"500px"});
    $('#quiz4').dialog({autoOpen:false});
    $('#quiz4').dialog({width:"500px"});
    $('#quiz5').dialog({autoOpen:false});
    $('#quiz5').dialog({width:"500px"});
    $('#opener').click(function(){
        $('#quiz1').dialog("open")
    })


    $('#quiz1').dialog(
        {buttons:[
            {
                text: "1",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "2",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "3",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "4",
                click: function(){
                    $( this ).dialog( "close" );
                    $('#quiz2').dialog( "open" );
                }
            },
            {
                text: "5",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            }
        ]}
    )
    $('#quiz2').dialog(
        {buttons:[
            {
                text: "1",
                click: function(){
                    $( this ).dialog( "close" );
                    $('#quiz3').dialog( "open" );
                }
            },
            {
                text: "2",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "3",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "4",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "5",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            }
        ]}
    )
    $('#quiz3').dialog(
        {buttons:[
            {
                text: "1",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "2",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "3",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "4",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "5",
                click: function(){
                    $( this ).dialog( "close" );
                    $('#quiz4').dialog( "open" );
                }
            }
        ]}
    )
    $('#quiz4').dialog(
        {buttons:[
            {
                text: "1",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "2",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "3",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "4",
                click: function(){
                    $( this ).dialog( "close" );
                    $('#quiz5').dialog( "open" );
                }
            },
            {
                text: "5",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            }
        ]}
    )
    $('#quiz5').dialog(
        {buttons:[
            {
                text: "1",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "2",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "3",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("<全問☆正解>\n君は、本当に神になるつもりかい？");
                    setTimeout(function(){
                        window.location.href="index6.html";
                    },100);
                }
            },
            {
                text: "4",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            },
            {
                text: "5",
                click: function(){
                    $( this ).dialog( "close" );
                    window.alert("こんなところで間違えるなんて、\nあたしって、ほんとバカ");
                    setTimeout(function(){
                        window.location.href="index7.html";
                    },100);
                }
            }
        ]}
    )
})
