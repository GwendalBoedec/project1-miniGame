//console.log("heyyyyyyyy that's a start");
//PLAN
// SET BACKGROUND
// CREATE PLAYER


class MainPlayer {
constructor () {
    this.positionX = 30;
    this.positionY = -15;
    this.width = 100;
    this.height = 100;
    this.isJumping = false;
    this.velocityY = 0;
    this.velocityX = 0;
    this.jumpStrength = 20;
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

moveRight(speed) {
    this.positionX += speed;
    this.updateUI();
}

jumpAscent() {
    if (!this.isJumping) {
    this.isJumping = true;
    this.velocityY = this.jumpStrength;
    this.velocityX += this.jumpStrength*0.4 ;
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


remove() {
    this.catElm.remove();
}

}

class NaughtyDog {
    constructor() {
        this.width = 200;
        this.height = 100; 
        this.positionX = 500 + Math.floor(Math.random()* (1920 - this.width - 500));
        this.positionY = 0;

        this.createDogElement();
    }
    createDogElement() {
        // STEP 1 create element
    this.badDogElm = document.createElement("img");
    
    //STEP2 : add content or modify
    this.badDogElm.setAttribute("src", "./styles/img/big dog.gif");
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
        this.width = 90;
        this.height = 90; 
        this.positionX = Math.floor(Math.random()* (1920 - this.width));
        this.positionY = Math.floor(Math.random()*150);
    }
}

//functionalities related to MainPlayer instances
const firstPlayer = new MainPlayer();
//console.log(firstPlayer);

document.addEventListener("keydown", (event) => {
if (event.code === "ArrowRight") {
firstPlayer.moveRight(15);
}
});

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

//functionalities related to AngryCat instances
   const cat1 = new AngryCat();
   const cat2 = new AngryCat();
   const cat3 = new AngryCat();
   let catCrew = [];
   catCrew.push(cat1, cat2, cat3);
   //console.log(catCrew);

   function makeCatNoise() {
    let catNoise = document.getElementById("catAudio");
    catNoise.play();
    }

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
    badDog.moveLeft(0);
   })

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


