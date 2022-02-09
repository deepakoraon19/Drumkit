<<<<<<< HEAD
var size = document.querySelectorAll(".drum").length;
var i;

for(i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function zinda(){
        alert("zindabad");
    })
=======
var x=0;
var times=document.querySelectorAll(".drum").length;
var audio = new Audio("sounds/crash.mp3")
for(x=0;x<times;x++)
{
    document.querySelectorAll("button")[x].addEventListener("click", function nacho(){
        this.style.color="#fff";
    });
    
>>>>>>> 9fbd6980324436ba32f3b3a03c9a6119bdc11b1a
}
