// Code writer Murari Lamsal, function  Enemies our player must avoid -- Enemy Constructor
// Global variables

var picureNumber = Math.random() * 10 + 75;
var counter = 0;


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


   if (picureNumber >78){
    this.sprite = 'images/enemy-bug.png';
    }
    else {
    this.sprite = 'images/Upa.png';
   // return this ;
    }
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
    this.x += this.speed * dt;
        } else {
        this.x = -180;
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
    this.width  = 50;
    this.height  = 75;
    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function (dt){
    if (this.y <=0){
        this.reset(200,410);
    }

};

// This class requires an update(), render() and
Player.prototype.render = function(){

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    ctx.font = "20pt Impact";
    ctx.textAlign = "center";
    ctx.strokeText("Number by Player Hit: " + counter, 200, 85);
};

// a handleInput() method.

Player.prototype.handleInput =function(dic){

    if (dic === 'left' && this.x > 0) {
        this.x -= 100;
    }
    if (dic === 'right' && this.x < 400) {
        this.x += 100;
    }
    if (dic === 'up' && this.y > 0) {
        this.y -= 30;
    }
    if (dic === 'down' && this.y < 400) {
        this.y += 100;
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

if (picureNumber <78){
    var E1 = new Enemy(100, 140, 100);
    var E2 = new Enemy(150, 225, 150);
    var E3 = new Enemy(200, 310, 200);
    }
    else {
    var E1 = new Enemy(100, 60, 100);
    var E2 = new Enemy(150, 145, 150);
    var E3 = new Enemy(200, 222, 200);
  };

var allEnemies = [E1, E2, E3];

// Place the player object in a variable called player
 var player = new Player(200,408);

// Rest Player

Player.prototype.reset = function (x,y){
    this.x = x;
    this.y = y;
    if(this.y <= 0){
    center += 1;
    this.reset(200,410);
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
