// Enemies our player must avoid -- Enemy Constructor

var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    this.x =x;
    this.y =y;
    this.speed = speed;

    // Modified height and width
    this.width = 70;
    this.height = 60;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

   // this.speed = Math.floor(Math.random() * (200)) + 100;
    this.sprite = 'images/enemy-bug.png';
   // return this ;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if(this.x > 505) {
        this.x = 1;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class

var Player = function (x,y){
  //  this.speed = 100;
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function (dt){
    if (this.y <=0){
        this.reset(202,515);
    }
};

// This class requires an update(), render() and
Player.prototype.render =function(){
   // this.x = 200;
  //  this.y = 350;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};
// a handleInput() method.

Player.prototype.handleInput =function(dic){

    if (dic === 'left' && this.x<0) {
        this.x += 200;
    }
    if (dic === 'right' && this.x<500) {
        this.x -= 200;
    }
    if (dic === 'up' && this.y<0) {
        this.x += 100;
    }
    if (dic === 'down' && this.y<500) {
        this.x += 100;
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

    var E1 = new Enemy(100, 50, 170);
    var E2 = new Enemy(150, 145, 265);
    var E3 = new Enemy(200, 219, 225);

var allEnemies = [E1, E2, E3];

// Place the player object in a variable called player
 var player = new Player(200,380);

// Rest Player

Player.prototype.reset = function (x,y){
    this.x = x;
    this.y = y;
}

// Checks collisions using Axis-Aligned 2D Collision Detection
function checkCollisions(allEnemies, player) {
    for (var i = 0; i < allEnemies.length; i++) {
        if (allEnemies[i].x < player.x + player.width &&
            allEnemies[i].x + allEnemies[i].width > player.x &&
            allEnemies[i].y < player.y + player.height &&
            allEnemies[i].height + allEnemies[i].y > player.y) {
            player.reset(202, 415);
        }
    }
};

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
