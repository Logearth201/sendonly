$(function(){
 setTimeout(function(){
   $('#text1').fadeIn(2000);
 },100)
 setTimeout(function(){
   $('#text2').fadeIn(2000);
 },1000)
 setTimeout(function(){
   $('#qb').fadeIn(2000);
 },2000)
 setTimeout(function(){
   $('#homura-button').fadeIn(1000);
 },3000)
 setTimeout(function(){
   $('.counter').fadeIn(500);
 },4000)

var i = 0;
 $('#homura-button').click(function(){
   if(i===0){
     i++;
     $('#gazo').html('<img src="きゅうべえ３.jpg" width="500px">')
     .fadeOut(2000);
     $(this).html('<input type="submit" size="20" value="ほむらちゃん...">');
     $('#text1').html('君たち人間はいつもそうだね。');
     $('#text2').html('わけがわからないよ。');
    $('body').css('background-color','red');
  }
   else if(i===1){
     i++;
     $(this).html('<input type="submit" size="20" value="忠告を無駄にしないよう、祈ってるわ。">');
     $('#gazo').html('<img src="ほむら１.jpg" width="500px">')
     .fadeIn(2000);
     $('#text1').html('一度魔法少女になってしまったら、もう救われる望みなんてない').css('color','white');
     $('#text2').html('絶対にお前の思い通りにはさせない。キュゥべえ……いいえ、インキュベーター').css('color','white');
     $('body').css('background-color','black');
     $('#text3').css('color','white');
     $('#text4').css('color','white');

   }else if(i===2){
     window.location.href = "index.html";
   }
 })






})
