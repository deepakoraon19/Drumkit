var x=0;
var times=document.querySelectorAll(".drum").length;
var audio = new Audio("sounds/crash.mp3")
for(x=0;x<times;x++)
{
    document.querySelectorAll("button")[x].addEventListener("click", function nacho(){
        this.style.color="#fff";
    });
    
}
