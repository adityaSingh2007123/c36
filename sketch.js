var canvas,backgroundImage,gameState=0,playerCount,database,form,game,player;


function setup(){
  database = firebase.database();
  canvas=createCanvas(600,600);
 game=new Game();
 game.getState();
 game.start();
}

function draw(){
 
  
}

