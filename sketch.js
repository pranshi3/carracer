var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState=0
var car1,car2,car1img,car2img,cars=[],track
var allPlayers=[]

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1img=loadImage('assets/car1.png')
  car2img=loadImage('assets/car2.png')
  track=loadImage('assets/track.jpg')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount==2){
game.updateState(1)

  }

  if (gameState==1){
  game.play()
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
