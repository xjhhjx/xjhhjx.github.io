
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
