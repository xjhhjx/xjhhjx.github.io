
var i=0;

function aboutMe(){
    var introduce = document.getElementById("introduce");
    var introduce2 = document.getElementById("introduce2");
    if(i==0){
        i=1;
        introduce.style.height="40vw";
        introduce2.innerHTML="这里是一个无名小站";
    } else {
        i=0;
        introduce.style.height="20vw";
        introduce2.innerHTML="Nogame Nolife";
    }

}
/*时间*/
Date.prototype.format = function (fmt) {
    var o = {
        "y+": this.getFullYear, //年
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds() //秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
setInterval("document.getElementById('dateTime').innerHTML = (new Date()).format('yyyy-MM-dd hh:mm:ss');", 1000);