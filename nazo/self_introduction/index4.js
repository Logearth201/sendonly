// function calc_run(i) {
//      if (i == "=") {
//    document.calc1.text1.value =
//        eval(document.calc.text.value);
//      } else if (i == "C") {
//    document.calc1.text1.value = "";
//      } else {
//    document.calc1.text1.value += i;
//      }
// }

var num = "";
var mark = "";

function calc_run(i){
var t = document.calc1.text1.value;
var x = document.calc1.text2.value;
    if(i.match(/[0-9]/)){
        t = t + i;
        document.calc1.text1.value = t;
        x = x + i;
        document.calc1.text2.value = x;
    }else if(i==="C"){
        num = "";
        mark = "";
        t="";
        document.calc1.text1.value = "";
        document.calc1.text2.value = "";
    }else if(i==="."){
        t = t + i;
        document.calc1.text1.value = t;
        x = x + i;
        document.calc1.text2.value = x;
    }else{
        if(num===""){
            num = Number(t);
            document.calc1.text1.value = "";
            if(i==="+"){
                mark = "+";
            }else if(i==="-"){
                mark = "-";
            }else if(i==="*"){
                mark = "*";
            }else if(i==="/"){
                mark = "/";
            }
            x = x + i;
            document.calc1.text2.value = x;
        }else if(i==="="){
            if(mark==="+"){
                num += Number(t)
                document.calc1.text1.value = num;
            }else if(mark==="-"){
                num -= Number(t);
                document.calc1.text1.value = num;
            }else if(mark==="*"){
                num = num * Number(t);
                document.calc1.text1.value = num;
            }else if(mark==="/"){
                num = num / Number(t);
                document.calc1.text1.value = num;
            }
            if(document.calc1.text1.value==="NaN" || document.calc1.text1.value==="Infinity"){
                window.alert("0で割ったり２個以上ドット打つなら、\nみんな死ぬしかないじゃない！！！");
                window.location.href="index7.html";
            }
            mark="";
            t="";
            num ="";
            x = x + i;
            document.calc1.text2.value = x;
        }else{
            if(mark==="+"){
                num += Number(t)
                document.calc1.text1.value = num;
            }else if(mark==="-"){
                num -= Number(t);
                document.calc1.text1.value = num;
            }else if(mark==="*"){
                num = num * Number(t);
                document.calc1.text1.value = num;
            }else if(mark==="/"){
                num = num / Number(t);
                document.calc1.text1.value = num;
            }
            t="";
            num=Number(document.calc1.text1.value);
            document.calc1.text1.value="";
            mark = i;
            x = x + i;
            document.calc1.text2.value = x;
        }
    }
}






function kakunin(){
    ret = confirm("戻るゲソ？");
    if (ret == true){
        location.href = "index.html";
    }
}

$(function(){

    $('#sayaka').click(function(){
        window.location.href="https://ja.wikipedia.org/wiki/%E7%BE%8E%E6%A8%B9%E3%81%95%E3%82%84%E3%81%8B";
    })

})
