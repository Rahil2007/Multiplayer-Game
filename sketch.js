var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player;
var game;
var form;
var cars = [];
var car1,car2,car3,car4;

function setup(){
  createCanvas(displayWidth -100 ,displayHeight- 150);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(150);
  if(playerCount === 4){
    game.updateState(1);
  }

  if(gameState === 1){
    game.play();
  }
}
