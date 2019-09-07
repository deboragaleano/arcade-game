

/******* ENEMY'S CLASS & METHODS  ******/

class Enemy {
    constructor(x, y, s) {
        this.sprite = 'images/enemy-bug.png';
           this.x = x;
        this.y = y;
        this.speed = s; 
        this.height = 65;
        this.width = 95; 
    }

    update(dt) { 
        
        // manages on/off canvas randomly 
        if(this.x > ctx.canvas.width + this.width) {
            this.x = -200 * Math.floor(Math.random() * 4) + 1; 
        } else {
            this.x += this.speed * dt; 
        }

        // handles collision
        if (this.x < player.x + player.width  && 
            this.x + this.width  > player.x && 
            this.y < player.y + player.height && 
            this.y + this.height > player.y) {
                player.x = 202;
                player.y = 400; 
        }
    } 
    
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

    update() { 
        // RESET Method: player goes back to initial position when reaching the water 
        const positionsX = [2, 102, 202, 302, 402]; 
        const positionY = -5
        
        positionsX.forEach(position => {
            if(player.x === position && player.y === positionY) {
                setTimeout(() => {
                    player.x = 202;
                    player.y = 400; 
                }, 400)
            }
        });     
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
}
  

/******* INSTANTIATE OBJECTS ******/

const player = new Player(202, 400); 
const enemy1 = new Enemy(-100, 63, 400); 
const enemy2 = new Enemy(20, 145, 250); 
const enemy3 = new Enemy(-80, 230, 300); 
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