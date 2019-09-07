
/******* ENEMY'S CLASS & METHODS  ******/


/* TO DO 
 - The Enemy function, which initiates the Enemy by:
        Setting the Enemy speed (you need to implement)
- The update method for the Enemy
        Handles collision with the Player (you need to implement)

*/

class Enemy {
    constructor(x, y, s) {
        this.sprite = 'images/enemy-bug.png';
           this.x = x;
        this.y = y;

        // Setting the Enemy speed (you need to implement)
        this.speed = s; 
        this.height = 65;
        this.width = 95; 

    }

        // Update the enemy's position OR LOCATION, required method for game
        // Parameter: dt, a time delta between ticks
    update(dt) { 
        this.x += 150 * dt; 
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        // handles collision
        if (this.x < player.x + player.width  && 
            this.x + this.width  > player.x && 
            this.y < player.y + player.height && 
            this.y + this.height > player.y) {
                player.x = 202;
                player.y = 400; 
        }
    } 
    
        // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }


}

/******* PLAYER'S CLASS & METHODS ******/

class Player {
    constructor(x, y) {
        this.sprite = 'images/char-pink-girl.png';
        this.x = x;
        this.y = y; 
        this.height = 75;
        this.width = 65; 
    }

    // The update method for the Player (can be similar to the one for the Enemy) 
    update(dt) { 

    } 
    
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }

    handleInput(direction) {
        const horizontal = 100, 
              vertical = 81; 

        if(direction === 'left' && this.x >= 100) {
            this.x -= horizontal; 
        } else if(direction === 'right' && this.x <= 400) {
            this.x += horizontal; 
        } else if(direction === 'up' && this.y >= 50) {
            this.y -= vertical; 
        } else if(direction === 'down' && this.y <= 380) {
            this.y += vertical;
        }
    }

    // reset() {
    //     if(player )
    //     // ADD 
    // }

  /* TO DO 
    If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that)
    */ 

}
  


/******* INSTANTIATE OBJECTS ******/

// Create 3 object bugs with different positions and speed and put them all
// in an ARRAY 
const player = new Player(202, 400); 
const enemy1 = new Enemy(-100, 63); 
const enemy2 = new Enemy(20, 145); 
const enemy3 = new Enemy(-80, 230); 
const allEnemies = [enemy1, enemy2, enemy3]


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


/* -------------------------------------------------------------- */ 