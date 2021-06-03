var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player;
var game;
var form;

function setup(){
  createCanvas(800,800);
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
