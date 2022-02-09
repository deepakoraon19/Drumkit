var size = document.querySelectorAll(".drum").length;
var i;

for(i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function zinda(){
        alert("zindabad");
    })
}
