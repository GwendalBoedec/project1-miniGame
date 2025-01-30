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
    constructor() {
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
        this.positionX = 500 + Math.floor(Math.random() * (1920));
        this.positionY = 0;
        this.speed = 3;

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

    moveLeft() {
        this.positionX -= this.speed;
        this.updateUI();
    }


    remove() {
        this.catElm.remove();
    }

}

class CrazyBanana {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.positionX = 1920;
        this.positionY = 0;
        this.speed = Math.random() * (10 - 8) + 8;

        this.createBananaElement();
    }
    createBananaElement() {
        // STEP 1 create element
        this.crazyBananaElm = document.createElement("img");

        //STEP2 : add content or modify
        this.crazyBananaElm.setAttribute("src", "./styles/img/crazy banana (1).gif");
        this.crazyBananaElm.setAttribute("alt", "bad dog");
        this.crazyBananaElm.id = "badDog";
        this.crazyBananaElm.style.width = this.width + "px";
        this.crazyBananaElm.style.height = this.height + "px";
        this.crazyBananaElm.style.left = this.positionX + "px";
        this.crazyBananaElm.style.bottom = this.positionY + "px";


        //step3: append to the dom: `parentElm.appendChild()`
        this.parentElm = document.getElementById("background");
        this.parentElm.appendChild(this.crazyBananaElm);
    }

    updateUI() {
        this.crazyBananaElm.style.left = this.positionX + "px";
        this.crazyBananaElm.style.bottom = this.positionY + "px";
        this.crazyBananaElm.style.width = this.width + "px";
        this.crazyBananaElm.style.height = this.height + "px";
    }

    moveLeft() {
        this.positionX -= this.speed;
        this.updateUI();
    }

}


class BarkBullet {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.positionX = firstPlayer.positionX;
        this.positionY = firstPlayer.positionY;
        this.speed = 10;
        this.timerId = setTimeout(() => {
            bulletArr.shift();
            this.remove();
        }, 1000);

        this.createbulletBarkElm();
    }
    createbulletBarkElm() {
        this.bulletBarkElm = document.createElement("img");

        //STEP2 : add content or modify
        this.bulletBarkElm.setAttribute("src", "./styles/img/bark-sound.png");
        this.bulletBarkElm.setAttribute("alt", "bark");
        this.bulletBarkElm.style.position = "absolute"
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
    }

    bulletMove() {

        this.positionX += this.speed;
        this.updateUI();
    }


    remove() {
        this.bulletBarkElm.remove();
        this.updateUI();
        clearTimeout(this.timerId);
    }
}

class Bones {
    constructor() {
        this.width = 30;
        this.height = 30;
        this.positionX = Math.floor(Math.random() * (1920 - this.width));
        this.positionY = Math.floor(Math.random() * 300);
        this.speed = 3;

        this.createBoneElm();
    }

    createBoneElm() {
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

    moveLeft() {
        this.positionX -= this.speed;
        this.updateUI();
    };

    remove() {
        this.boneElm.remove();
    }

}

let catCrew = [];
let bananaCrew = [];
let bulletArr = [];
let boneCollection = [];

//functionalities related to MainPlayer instances
const firstPlayer = new MainPlayer();

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
        firstPlayer.jumpAscent();
    }
});



document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        const bullet = new BarkBullet();
        //console.log(bullet);
        makeDogNoise()
        bulletArr.push(bullet);
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

function makeGameOverDogNoise() {
    let GameOverNoise = document.getElementById("gameover noise");
    GameOverNoise.play();
}

//functionalities related to bones instances

setInterval(() => {
    const newBone = new Bones();
    movingItems.boneCollection.push(newBone);
}, 2000);


function MakeBoneRewardNoise() {
    let boneRewardNoise = document.getElementById("boneReward");
    boneRewardNoise.play();
}

let boneCounter = 0;
const BoneNumRecord = document.getElementById("BoneNumber");
setInterval(() => {
    for (let i = 0; i < movingItems.boneCollection.length; i++)
        if (
            firstPlayer.positionX < movingItems.boneCollection[i].positionX + movingItems.boneCollection[i].width &&
            firstPlayer.positionX + firstPlayer.width > movingItems.boneCollection[i].positionX &&
            firstPlayer.positionY < movingItems.boneCollection[i].positionY + movingItems.boneCollection[i].height &&
            firstPlayer.positionY + firstPlayer.height > movingItems.boneCollection[i].positionY
        ) {
            MakeBoneRewardNoise();
            boneCounter++;
            BoneNumRecord.innerText = `X ${boneCounter}`;
            movingItems.boneCollection[i].remove();
            movingItems.boneCollection.splice(i, 1);
            i--;
            console.log(boneCounter);
        }
}, 60
)




const movingItems = {
    catCrew: [],
    bananaCrew: [],
    boneCollection: [],
};


function gameLoop() {
    Object.values(movingItems).forEach((objectArr) => {
        objectArr.forEach((elm) => {
            elm.moveLeft();
        });
    });

    bulletArr.forEach((bullet, index) => {
        bullet.bulletMove();
    });

    requestAnimationFrame(gameLoop);
};

//functionalities related to AngryCat instances

function generateCat() {
    const newCat = new AngryCat();
    movingItems.catCrew.push(newCat);
setTimeout(generateCat, Math.random() * (3000 - 1500) + 1500);
}

generateCat();

function makeCatNoise() {
    let catNoise = document.getElementById("catAudio");
    catNoise.play();
}

const gameOverView = document.getElementById("gameOverView")
const gameOverTitle = document.getElementById("gameOverTitle");

// if collision with cat
setInterval(() => {
    movingItems.catCrew.forEach(function (cat) {
        if (
            firstPlayer.positionX < cat.positionX + cat.width &&
            firstPlayer.positionX + firstPlayer.width > cat.positionX &&
            firstPlayer.positionY < cat.positionY + cat.height &&
            firstPlayer.positionY + firstPlayer.height > cat.positionY
        ) {
            makeGameOverDogNoise();
            console.log("collision")
            gameOverView.style.display = "block";
            gameOverTitle.innerText = "Oh no, an angry cat got you!";
        }
    })
}, 60
)

// if collision between cat and bark
setInterval(() => {
    for (let i = 0; i < movingItems.catCrew.length; i++) {
        for (let y = 0; y < bulletArr.length; y++) {
            if (
                movingItems.catCrew[i].positionX < bulletArr[y].positionX + bulletArr[y].width &&
                movingItems.catCrew[i].positionX + movingItems.catCrew[i].width > bulletArr[y].positionX &&
                movingItems.catCrew[i].positionY < bulletArr[y].positionY + bulletArr[y].height &&
                movingItems.catCrew[i].positionY + movingItems.catCrew[i].height > bulletArr[y].positionY
            ) {
                makeCatNoise();
                console.log("collision detected")
                movingItems.catCrew[i].remove();
                bulletArr[y].remove();
                movingItems.catCrew.splice(i, 1);
                bulletArr.splice(y, 1);
                i--;
                y--;
            }
        }
    }
}, 60
)



//functions related to CrazyBanana class

function generateBanana() {
    const newBanana = new CrazyBanana();
    movingItems.bananaCrew.push(newBanana);
setTimeout(generateBanana, Math.random() * (4000 - 2000) + 1000);
}

generateBanana();


// if collision with banana

setInterval(() => {
    movingItems.bananaCrew.forEach(function (dog) {
        if (
            firstPlayer.positionX < dog.positionX + dog.width &&
            firstPlayer.positionX + firstPlayer.width > dog.positionX &&
            firstPlayer.positionY < dog.positionY + dog.height &&
            firstPlayer.positionY + firstPlayer.height > dog.positionY
        ) {
            makeGameOverDogNoise()
            location.href = "./gameOverPage.html"
        }
    })
}, 60
)

gameLoop();

// SET TIME
let timer;
const remainingTimeContainer = document.getElementById("RemainingTimeBox");
let RemainingTime = 120;
const minutes = Math.floor(RemainingTime / 60)
    .toString()
    .padStart(2, "0");
const seconds = (RemainingTime % 60).toString().padStart(2, "0");
remainingTimeContainer.innerText = `${minutes}:${seconds}`;

timer = setInterval(() => {
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

// CREATE SCREEN GAME OVER
*/


