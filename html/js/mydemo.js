//获取到HTML文档中的九个div；
var div = document.getElementsByTagName("div");

//声明一个变量，数据类型为一个包含九种颜色数组；
var colors = ["red", "blue", "green", "plum", "cyan", "black", "pink", "gray", "brown"];

btnfirst.onclick = function(){//点击开始闪
    c = setInterval(function () {//使用定时器
        start();//调用函数
    }, 1000)//设置时间
};
btntwo.onclick = function () {//停止按钮的
    for (i = 0; i < div.length; i++) {
        div[i].style.background = "#FFA600";//遍历清除颜
    }
    clearInterval(c);//停止定时器
};
function start() {
    for (var i = 0; i < div.length; i++) {
        //每次随机颜色是将遍历背景色；
        div[i].style.backgroundColor = "#ffa600";
    }

    var arr=[];
    for (var m=0;m<9;m++){
        arr.push(m);
    }
    arr.sort(function () {
       return 0.5-Math.random()
    });
    arr.length=3;
    console.log(arr);

    for(var i=0;i<arr.length;i++){//将随机产生的颜色给随机的div
        div[arr[i]].style.background = colors[i];
    }
}



