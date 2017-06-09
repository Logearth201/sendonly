/*
    ラウンジのコメントを取得するJS
*/

function Lounge(){
    this.datas = [];
    this.loaded = false;
    lounge_get_comment();
}
Lounge.prototype.insert = function(data){
    this.data = this.datas.unshift(data).splice(0,100);
};
Lounge.prototype.print_html = function(){
    var str = "";
    for(var i=0;i<this.datas.length;i++){
        str += '<div id="message_container">';
        str += '<div class="message_single">';
        str += '<div class="message_single_header">';

        str += '<div class="message_single_face">';
        str += '<img src="/static/img/feature3.jpg">';
        str += '</div>';
        str += '<div class="message_single_name">';
        str += '<a href="/user/'+this.datas[i].user_id+'/">' + this.datas[i].name + '</a><br/>';
        str += '<span>111ステキ！</span>';
        str += '<button type="button"  class="message_single_button" onClick="send_suteki('+this.datas[i].id+')">ステキ！</button>';
        str += '</div>';

        str += '</div>';
        str += '<div class="message_content">';
        str += this.datas[i].data;
        str += '</div>';
        str += '</div>';
        str += '</div>';
    }
    $("#message_container").html(str);
};
Lounge.prototype.get_min_id = function(){
    return this.datas[this.datas.length - 1].id;
};
Lounge.prototype.get_max_id = function(){
    return this.datas[0].id;
};

function lounge_get_member(from,to){

}

function lounge_get_comment(last){
    //リクエストの送信
    var num = $("#lounge_id").val();
    console.log(num);
    $.ajax({
        url:"/lounge/"+Number(num)+"/comment/",
        data:{last:last},
        method:"GET",
        success:function(e){
            //コメントの入力
            datas = JSON.parse(e);
            lounge.datas = datas;
            console.log(datas);
            lounge.print_html();
        }
    });
}
