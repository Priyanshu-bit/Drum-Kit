var noOfButtons= document.querySelectorAll(".drum").length;

for (var i=0;i<noOfButtons;i++){
// document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
// function handleClick(){

//detecting button press
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       

      var buttonInnerHTML=  this.innerHTML

      makeSound(buttonInnerHTML);

      animateButton(buttonInnerHTML)
    
     });
   
}
//detecting keyboard presses
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animateButton(event.key)


})
function makeSound(key){
switch (key){
        
  case 'w':
  var crash= new Audio('sounds/crash.mp3')
  crash.play();
  break;
  case 'a':
    var tom4= new Audio('sounds/tom-4.mp3')
  tom4.play();
  
  break;
  case 's':
  var snare= new Audio('sounds/snare.mp3')
  snare.play();
  break;
  case 'd':
  var tom1= new Audio('sounds/tom-1.mp3')
  tom1.play();
  break;
  case 'j':
  var tom2= new Audio('sounds/tom-2.mp3')
  tom2.play();
  break;
  case 'k':
  var tom3= new Audio('sounds/tom-3.mp3')
  tom3.play();
  break;
  case 'l':
    var kickbass= new Audio('sounds/kick-bass.mp3')
    kickbass.play();
  break;
  
  default :console.log ( "buttonInnerHTML")


}

}

function animateButton(currKey){

  var activeButton= document.querySelector("."+currKey)
   activeButton.classList.add("pressed");


setTimeout(function(){
  activeButton.classList.remove("pressed")
},100)
}
