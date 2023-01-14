//detecting key of html
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function handleClick(){
        var buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

//detecting keypress
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

//playing sound accorind to the keypress
function makeSound(key){
    switch(key){
        case "w":
            var audio1= new Audio('sounds_crash.mp3');
            audio1.play();
            break;
        case "a":
            var audio2= new Audio('sounds_kick-bass.mp3');
            audio2.play();
            break;

        case "s":
            var audio3= new Audio('sounds_snare.mp3');
            audio3.play();
            break;

        case "d":
            var audio4= new Audio('bongos-91170.mp3');
            audio4.play();
            break;
        
        case "j":
            var audio5= new Audio('sounds_tom-2.mp3');
            audio5.play();
            break;

        case "k":
            var audio6= new Audio('sounds_tom-3.mp3');
            audio6.play();
            break;

        case "l":
            var audio7= new Audio('sounds_tom-4.mp3');
            audio7.play();
            break;
        default:console.log(buttonInnerHtml);

    }

}

function buttonAnimation(currentKey){
      var activeButton=document.querySelector("."+currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed");
      },500);
}