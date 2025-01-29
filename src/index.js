//console.log("heyyyyyyyy that's a start");
//PLAN
// SET BACKGROUND
// CREATE PLAYER
function playMainTheme() {
const mainTheme = document.getElementById("themeSong");
mainTheme.play();
}

playMainTheme();

// SET BACKGROUND BEHAVIOUR
const backgroundElm = document.getElementById("background");




// implement classes
class MainPlayer {
constructor () {
    this.positionX = 200;
    this.positionY = -15;
    this.width = 100;
    this.height = 100;
    this.isJumping = false;
    this.velocityY = 0;
    this.velocityX = 0;
    this.jumpStrength = 25;
    this.gravity = -1;
    this.movingRight = false;
    this.speed = 5;
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
    const step = () => {
        if (this.movingRight) {
            this.positionX += this.speed;
            this.updateUI();
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

jumpAscent() {
    if (!this.isJumping) {
    this.isJumping = true;
    this.velocityY = this.jumpStrength;
    //this.velocityX += this.jumpStrength*0.4 ;
}
     this.updateUI(); 
}

jumpDescent() {
    if (this.isJumping) {
        this.velocityY += this.gravity;
        this.positionY += this.velocityY
        //this.positionX += this.velocityX
    };
      
    if (this.positionY <= 0) {
        this.positionY = 0; 
        this.isJumping = false; 
        this.velocityY = 0; 
        //this.velocityX = 0;
}
this.updateUI();
}

}


class AngryCat {
constructor() {
    this.width = 90;
    this.height = 90;
    //this.positionX formula aims to avoid cats being generated where the player is at the beginning, while also avoiding cat being generated outside the width of the background 
    this.positionX = 300 + Math.floor(Math.random()* (1920 - this.width-300));
    this.positionY = 0;

    this.createCatElement()
}
createCatElement() {
    // STEP 1 create element
this.catElm = document.createElement("img");

//STEP2 : add content or modify
this.catElm.setAttribute("src", "./styles/img/animated cat.gif");
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

updateUI() {
    this.catElm.style.left = this.positionX + "px";
    this.catElm.style.bottom = this.positionY + "px";
    this.catElm.style.width = this.width + "px";
    this.catElm.style.height = this.height + "px";
}

moveLeft(speed) {
    const catInterval = setInterval(() => {
        this.positionX -= speed;
        this.updateUI();
}, 16);
}


remove() {
    this.catElm.remove();
}

}

class NaughtyDog {
    constructor() {
        this.width = 100;
        this.height = 100; 
        this.positionX = 500 + Math.floor(Math.random()* (1920 - this.width - 500));
        this.positionY = 0;

        this.createDogElement();
    }
    createDogElement() {
        // STEP 1 create element
    this.badDogElm = document.createElement("img");
    
    //STEP2 : add content or modify
    this.badDogElm.setAttribute("src", "./styles/img/crazy banana (1).gif");
    this.badDogElm.setAttribute("alt", "bad dog");
    this.badDogElm.id = "badDog";
    this.badDogElm.style.width = this.width + "px";
    this.badDogElm.style.height = this.height + "px";
    this.badDogElm.style.left = this.positionX + "px";
    this.badDogElm.style.bottom = this.positionY + "px";
    
    
    //step3: append to the dom: `parentElm.appendChild()`
    this.parentElm = document.getElementById("background");
    this.parentElm.appendChild(this.badDogElm);
    }

    updateUI() {
        this.badDogElm.style.left = this.positionX + "px";
        this.badDogElm.style.bottom = this.positionY + "px";
        this.badDogElm.style.width = this.width + "px";
        this.badDogElm.style.height = this.height + "px";
    }

    moveLeft(speed) {
        const dogInterval = setInterval(() => {
            this.positionX -= speed;
            this.updateUI();
    }, 16);
    }

}


class BarkBullet {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.positionX = firstPlayer.positionX;
        this.positionY = firstPlayer.positionY;

        this.createbulletBarkElm();
    }
    createbulletBarkElm () {
        this.bulletBarkElm = document.createElement("img");
    
        //STEP2 : add content or modify
        this.bulletBarkElm.setAttribute("src", "./styles/img/bark-sound.png");
        this.bulletBarkElm.setAttribute("alt", "bark");
        this.bulletBarkElm.id = "bark";
        this.updateUI();
        
        
        //step3: append to the dom: `parentElm.appendChild()`
        this.parentElm = document.getElementById("background");
        this.parentElm.appendChild(this.bulletBarkElm); 

         
}

updateUI() {
    this.bulletBarkElm.style.left = this.positionX + "px";
    this.bulletBarkElm.style.bottom = this.positionY + "px";
    this.bulletBarkElm.style.width = this.width + "px";
    this.bulletBarkElm.style.height = this.height + "px";
    this.bulletBarkElm.style.position = "absolute"
}

bulletMove(speed) {
   const bulletInterval = setInterval(() => {
        this.positionX += speed;
        this.updateUI();
}, 16);

setTimeout(() => {
    clearInterval(bulletInterval);
    this.bulletBarkElm.remove();
}, 1000)
}

remove() {
    this.bulletBarkElm.remove();
}
}

class Bones {
    constructor() {
        this.width = 30;
        this.height = 30; 
        this.positionX = Math.floor(Math.random()* (1920 - this.width));
        this.positionY = Math.floor(Math.random()*300);

        this.createBoneElm();
    }

    createBoneElm () {
        this.boneElm = document.createElement("img");
    
        //STEP2 : add content or modify
        this.boneElm.setAttribute("src", "./styles/img/bone.png");
        this.boneElm.setAttribute("alt", "bone");
        this.boneElm.id = "bone";
        this.boneElm.style.width = this.width + "px";
        this.boneElm.style.height = this.height + "px";
        this.boneElm.style.left = this.positionX + "px";
        this.boneElm.style.bottom = this.positionY + "px";
        
        //step3: append to the dom: `parentElm.appendChild()`
        this.parentElm = document.getElementById("background");
        this.parentElm.appendChild(this.boneElm); 
    }

    updateUI() {
        this.boneElm.style.left = this.positionX + "px";
        this.boneElm.style.bottom = this.positionY + "px";
        this.boneElm.style.width = this.width + "px";
        this.boneElm.style.height = this.height + "px";
    }

    moveLeft(speed) {
        const boneInterval = setInterval(() => {
            this.positionX -= speed;
            this.updateUI();
    }, 16);
    }

        remove() {
            this.boneElm.remove();
        }

}

//functionalities related to MainPlayer instances
const firstPlayer = new MainPlayer();
//console.log(firstPlayer);

/* document.addEventListener("keydown", (event) => {
if (event.code === "ArrowRight" && !firstPlayer.movingRight) {
    firstPlayer.movingRight = true;
    firstPlayer.moveRight();
}
});

document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowRight") {
        firstPlayer.movingRight = false;
    }
}); */

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
    firstPlayer.jumpAscent();
    }
    });

const bulletArr = [];

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
    const bullet = new BarkBullet();
    //console.log(bullet);
    makeDogNoise()
    bulletArr.push(bullet);
    bulletArr.forEach((element) => {
        element.bulletMove(10);
        })
    }
    });

 

function updateJump() {
        firstPlayer.jumpDescent(); 
        requestAnimationFrame(updateJump); 
    }

    updateJump();

function makeDogNoise() {
        let dogNoise = document.getElementById("dogAudio");
        dogNoise.play();
        }

//functionalities related to bones instances
const bone1 = new Bones();
const bone2 = new Bones();
const bone3 = new Bones();
let boneArr = [];
boneArr.push(bone1, bone3, bone2);

boneArr.forEach((bone) => {
    bone.moveLeft(1.5);
   })

function MakeBoneRewardNoise() {
    let boneRewardNoise = document.getElementById("boneReward");
    boneRewardNoise.play();
    }

let boneCounter = 0;
const BoneNumRecord = document.getElementById("BoneNumber");
setInterval(() => {
    for (let i=0; i<boneArr.length;i++) 
 if (
     firstPlayer.positionX < boneArr[i].positionX + boneArr[i].width &&
     firstPlayer.positionX + firstPlayer.width > boneArr[i].positionX &&
     firstPlayer.positionY < boneArr[i].positionY + boneArr[i].height &&
     firstPlayer.positionY + firstPlayer.height > boneArr[i].positionY 
 ) 
 {
     console.log("+1 bone");
     MakeBoneRewardNoise();
     boneCounter++;
     BoneNumRecord.innerText = boneCounter;
     boneArr[i].remove();
     boneArr.splice(i, 1);
     i--;
     console.log(boneCounter);
 }
 }, 60
    )


//functionalities related to AngryCat instances
   const cat1 = new AngryCat();
   const cat2 = new AngryCat();
   const cat3 = new AngryCat();
   let catCrew = [];
   catCrew.push(cat1, cat2, cat3);
   //console.log(catCrew);

   catCrew.forEach((cat) => {
    cat.moveLeft(1.5);
   })

   function makeCatNoise() {
    let catNoise = document.getElementById("catAudio");
    catNoise.play();
    }

    // if collision with cat
   setInterval(() => {
   catCrew.forEach(function(cat) {
if (
    firstPlayer.positionX < cat.positionX + cat.width &&
    firstPlayer.positionX + firstPlayer.width > cat.positionX &&
    firstPlayer.positionY < cat.positionY + cat.height &&
    firstPlayer.positionY + firstPlayer.height > cat.positionY 
) 
{
    console.log("gameover")
    location.href = "gameOverPage.html"
}
   })
}, 60
   )

    // if collision between cat and bark
   setInterval(() => {
    for (let i=0; i<catCrew.length;i++) {
        for (let y=0; y<bulletArr.length; y++) {
 if (
    catCrew[i].positionX < bulletArr[y].positionX + bulletArr[y].width &&
    catCrew[i].positionX + catCrew[i].width > bulletArr[y].positionX &&
    catCrew[i].positionY < bulletArr[y].positionY + bulletArr[y].height &&
    catCrew[i].positionY + catCrew[i].height > bulletArr[y].positionY 
 ) 
 {
    makeCatNoise();
    catCrew[i].remove();
    bulletArr[y].remove();
    catCrew.splice(i, 1);
    bulletArr.splice(y, 1);
    i--;
    y--;
 }
    }}
 }, 60
    ) 


    //functions related to NaughtyDog class
   const badDog1 = new NaughtyDog();
   const badDog2 = new NaughtyDog();
   const badDog3 = new NaughtyDog();
   let badDogCrew = [];
   badDogCrew.push(badDog1, badDog2, badDog3);

   badDogCrew.forEach((badDog) => {
    badDog.moveLeft(6);
   })

    // if collision with bad dog

   setInterval(() => {
    badDogCrew.forEach(function(dog) {
 if (
     firstPlayer.positionX < dog.positionX + dog.width &&
     firstPlayer.positionX + firstPlayer.width > dog.positionX &&
     firstPlayer.positionY < dog.positionY + dog.height &&
     firstPlayer.positionY + firstPlayer.height > dog.positionY 
 ) 
 {
     console.log("gameover")
     location.href = "./gameOverPage.html"
 }
    })
 }, 60
    )
   
// SET TIME
let timer;
const remainingTimeContainer = document.getElementById("RemainingTimeBox");
let RemainingTime = 120;
const minutes = Math.floor(RemainingTime / 60)
    .toString()
    .padStart(2, "0");
const seconds = (RemainingTime % 60).toString().padStart(2, "0");
remainingTimeContainer.innerText = `${minutes}:${seconds}`;

timer = setInterval (() => {
    RemainingTime--;
    const minutes = Math.floor(RemainingTime / 60)
    .toString()
    .padStart(2, "0");
const seconds = (RemainingTime % 60).toString().padStart(2, "0");
remainingTimeContainer.innerText = `${minutes}:${seconds}`;
    
    if (RemainingTime === 0) {
        clearInterval(timer);
        location.href = "./resultPage.html"
    }
}, 1000)



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


