function red(){
    var btnRed = document.getElementsByClassName("red");
    btnRed[0].style.backgroundColor = "red";

}

function green(){
    var btnGreen = document.getElementsByClassName('green');
    btnGreen[0].style.backgroundColor = "green";
}

function blue(){
    var btnBlue = document.getElementsByClassName("blue");
    btnBlue[0].style.backgroundColor = "blue";
}

function reset(){
    var allBtn = document.getElementsByClassName("btn");
   for(i=0;i<allBtn.length;i++){
    allBtn[i].style.backgroundColor = "black";
   }
}