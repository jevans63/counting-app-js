const display = document.querySelector(".display");

////////////////////////////////////////////////////////////////
var num = 0;

//
function displayUpdate(value){
    if(num < 10){
        num += parseFloat(value);
        display.innerHTML = num;
    }

    if(num == 10){
        display.innerHTML = "GOAL";
        document.getElementById("display1").style.backgroundColor = "lightgreen";
    }
}
////////////////////////////////////////////////////////////////