var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player;
var game;
var form;
var cars = [];
var car1,car2,car3,car4;
var car1Img,car2Img, car3Img, car4Img;
var trackImg,groundImg,backgroundTrackImg;

function preload(){
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");
  groundImg = loadImage("images/ground.png");
  backgroundTrackImg = loadImage("images/track.png");
}

function setup(){
  createCanvas(displayWidth -100 ,displayHeight- 150);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(backgroundTrackImg);
  if(playerCount === 4){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
  
}
