
/******* ENEMY'S CLASS & METHODS  ******/


/* TO DO 
 - The Enemy function, which initiates the Enemy by:
        Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
        Setting the Enemy initial location (you need to implement)
        Setting the Enemy speed (you need to implement)
- The update method for the Enemy
        Updates the Enemy location (you need to implement)
        Handles collision with the Player (you need to implement)
- You can add your own Enemy methods as needed

*/

// Enemies our player must avoid

class Enemy {
    constructor(x, y, s) {
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
   
        // Setting the Enemy initial location (you need to implement)
        this.x = x;
        this.y = y;

        // Setting the Enemy speed (you need to implement)
        this.speed = s; 

    }

    // ADD METHODS HERE 

        // Update the enemy's position OR LOCATION, required method for game
        // Parameter: dt, a time delta between ticks
        // Handles collision with the Player (you need to implement)
    update(dt) { 
        this.speed * dt; 
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    } 
    
        // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }


}


/* -------------------------------------------------------------- *
       OLD ENEMY OBJECTS  

// var Enemy = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started - 
//     /* The actual object is an instance.*/

//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/enemy-bug.png';
// };

// METHODS

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };

// // Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// // };

/* -------------------------------------------------------------- *

/******* PLAYER'S OBJECTS & METHODS ******/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor(x, y) {
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y; 
    }

    // ADD METHODS HERE 

        // Update the enemy's position OR LOCATION, required method for game
        // Parameter: dt, a time delta between ticks
        // Handles collision with the Player (you need to implement)
    update(dt) { 

    } 
    
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }

    // handleInput() {

    // }

}


/******* INSTANTIATE MY OBJECTS ******/

const player = new Player(202, 400); 
const enemy1 = new Enemy(50, 63); 
const enemy2 = new Enemy(30, 145); 
const enemy3 = new Enemy(20, 230); 
const allEnemies = [enemy1, enemy2, enemy3]



// NOTE TO MYSELF
// Then we go ahead and invoke Hero and instantiate a few new objects (Taylor). 
// Calling this function with a NEW instantiates a new object which 
// is referenced by the TAYLOR variable over here:
// const taylor = new Hero('Taylor', 'mother');

// NOTES FROM UDACITY 
// Now instantiate your objects.
// Create 3 object bugs with different positions and speed and put them all
// in an ARRAY 


/******* LISTENER ******/

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
