console.log("heyyyyyyyy that's a start");
//PLAN
// SET BACKGROUND
// CREATE PLAYER
class MainPlayer {
constructor () {
    this.positionX = 30;
    this.positionY = 0;
    this.width = 100;
    this.height = 100;
    this.isJumping = false;
    this.velocityY = 0;
    this.velocityX = 0;
    this.jumpStrength = 16;
    this.gravity = -1;
    this.MainPlayerElm = document.getElementById("mainPlayer");

    this.updateUI();

}

updateUI() {
    this.MainPlayerElm.style.left = this.positionX + "px";
    this.MainPlayerElm.style.bottom = this.positionY + "px";
    this.MainPlayerElm.style.width = this.width + "px";
    this.MainPlayerElm.style.height = this.height + "px";
}

moveRight() {
    this.positionX += 5;
    this.updateUI();
}

jumpAscent() {
    if (!this.isJumping) {
    this.isJumping = true;
    this.velocityY = this.jumpStrength;
    this.velocityX += this.jumpStrength*0.6 ;
}
     this.updateUI(); 
}

jumpDescent() {
    if (this.isJumping) {
        this.velocityY += this.gravity;
        this.positionY += this.velocityY
        this.positionX += this.velocityX
    };
      
    if (this.positionY <= 0) {
        this.positionY = 0; 
        this.isJumping = false; 
        this.velocityY = 0; 
        this.velocityX = 0;
}
this.updateUI();
}
}

class AngryCat {
constructor() {
    this.width = 100;
    this.height = 100;
    //this.positionX formula aims to avoid cats being generated where the player is at the beginning, while also avoiding cat being generated outside the width of the background 
    this.positionX = Math.floor(Math.random()* (1920 - this.width*2))+this.width;
    this.positionY = 0;

    this.createCatElement()
}
createCatElement() {
    // STEP 1 create element
this.catElm = document.createElement("img");

//STEP2 : add content or modify
this.catElm.setAttribute("src", "./styles/img/angry-cat.png");
this.catElm.setAttribute("alt", "angry cat");
this.catElm.id = "angryCat";
this.catElm.style.width = this.width + "px";
this.catElm.style.height = this.height + "px";
this.catElm.style.left = this.positionX + "px";
this.catElm.style.bottom = this.positionY + "px";


//step3: append to the dom: `parentElm.appendChild()`
this.parentElm = document.getElementById("background");
this.parentElm.appendChild(this.catElm);
}

}

//functionalities related to MainPlayer instances
const firstPlayer = new MainPlayer();
console.log(firstPlayer);

document.addEventListener("keydown", (event) => {
if (event.code === "ArrowRight") {
firstPlayer.moveRight();
}
});

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
    firstPlayer.jumpAscent();
    }
    });

function updateJump() {
        firstPlayer.jumpDescent(); 
        requestAnimationFrame(updateJump); 
    }

   //functionalities related to AngryCat instances
   const cat1 = new AngryCat();
   const cat2 = new AngryCat();
   const cat3 = new AngryCat();
   let catCrew = [];
   catCrew.push(cat1, cat2, cat3);
   console.log(catCrew);

   setInterval(() => {
   catCrew.forEach(function(cat) {
if (
    firstPlayer.positionX < cat.positionX + cat.width &&
    firstPlayer.positionX + firstPlayer.width > cat.positionX &&
    firstPlayer.positionY < cat.positionY + cat.height &&
    firstPlayer.positionY + firstPlayer.height > cat.positionY 
) 
{
    window.location.href("")
}
   })
}, 60
   )
    //functions invocation
    updateJump();
/*
functionalities
move right
jump
bark 
//CREATE OBSTACLE
generation
constraints
//CREATE POINTS
Image: bones
generation 
counter increment
//CREATE Ennemy 1 : CATS
move quickly to the left. More quickly than naughty dogs ?
fades when touched by bark
//CREATE BONUS : DOG BUDDIES
don't move
limited generation
when touched, move at the back of the player ??
when touched add one live the live counter
//CREATE Ennemy 2 : Naughty Dogs
move slowly to the left. Can't be barked at. 
// CREATE SCREEN GAME OVER
*/


