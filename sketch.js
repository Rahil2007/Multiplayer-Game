var gameState = 0;
var playerCount;
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
}
