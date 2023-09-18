

const kep = document.querySelector('#kijelzo');
kep.addEventListener("mouseclick",move_img)
var seb = 1;
function move_img(){
    var step = 1;
    var y = document.getElementById('kep').offsetLeft;
    var x = document.getElementById('kep').offsetTop;

    if(y<1720 && x < 770){
        y= y + step;
        document.getElementById('kep').style.left= y + "px";
    }
    else if(x<770){
        var x=document.getElementById('kep').offsetTop;
        x= x + step;
    }
    else if(y<=1721 && x == 770){
        var y=document.getElementById('kep').offsetLeft;
        y= y - step;
    }else if(x<=770 && y == 1200){
        x= x -step;
        document.getElementById('kep').style.top= x + "px";
    }
}
setInterval(move_img,seb);