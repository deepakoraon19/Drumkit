var size = document.querySelectorAll(".drum").length;
var i;

for(i=0;i<size;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function zinda(){
        var key = this.innerHTML;
        makeSound(key);
    })
}

function animate(key)
{
    var obj = document.querySelector("."+key);
    obj.classList.add("pressed");
    setTimeout(function (){
        obj.classList.remove("pressed")
    }, 100);

    
}

document.addEventListener("keypress", function(event)
{
    // alert(event.key);
    makeSound(event.key);
    animate(event.key);
})


function makeSound(key)
{
    switch(key)
    {
        case 'w':   var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
        case 'a':   var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
        case 's':   var kick_bass = new Audio("sounds/kick-bass.mp3");
                    kick_bass.play();
                    break;            
        case 'd':   var tom_1 = new Audio("sounds/tom-1.mp3");
                    tom_1.play();
                    break;
        case 'j':   var tom_2 = new Audio("sounds/tom-2.mp3");
                    tom_2.play();
                    break;
        case 'k':   var tom_3 = new Audio("sounds/tom-3.mp3");
                    tom_3.play();
                    break;
        case 'l':   var tom_4 = new Audio("sounds/tom-4.mp3");
                    tom_4.play();
                    break;
                }
}