var gemY = -300;
var gemVel = 5;
var timer = 0;
var isFading = false;
var fade = 0;
var w = 0;
var scene = "logo";
var pressSpaceTimer = 0;
var canClick = 0;
var y = 100;
var speed = 3;
var burgerSpeed = +speed;

var score = 0;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  scene = "logo";

  
}


function hexagon(xPos, yPos, size, rot, fillCol, strokeCol,stretch,isStroke) {
      push();
    scale(1,stretch);
    fill(fillCol);
    if(isStroke) {
    stroke(strokeCol);
    strokeWeight(2);
    } else {
     noStroke();   
    }
    beginShape();
    for (var r = 0 + rot; r < 360 + rot; r += 60) {
        var x = size/2 * cos(r) + xPos;
        var y = size/2 * sin(r) + yPos;
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}

function logo(x,y,size) {
  push();
  translate(x,y);
    scale(size);
    strokeWeight(4);
  stroke(0);
hexagon(0,0,200,90,color(25, 158, 83),color(8, 120, 25),1.2,true);
    hexagon(0,0,165,90,color(255,255,255,70),color(0),1.2,false);
    noStroke();
    fill(255,255,255,100);
    triangle(0,-117,-85,-60,0,0);
    fill(255,255,255,50);
    triangle(85,59,0,0,86,-59);
    fill(255,255,255,60);
    triangle(-85,59,-85,-60,0,0);
    fill(0,0,0,20);
    triangle(0,117,0,0,-85,59);
    fill(0,0,0,10);
    triangle(0,118,87,58,0,0);
    triangle(0,-118,0,0,85,-60);
    
      rectMode(CENTER);

    fill(73, 201, 73);
    textFont("Ubuntu");
    textSize(20);
    textAlign(CENTER,CENTER);
    text("Captain",0,150);
    fill(42, 150, 42);
    text("Productions",0,175);
    textSize(10);
    text("EST 2002",0,200);
  
    stroke(42,150,0);
    strokeWeight(2);
    line(-55,190,55,190);

       
  pop();
}
function patty(x,y, size) {
    push();
    translate(x, y);
    scale(size);
  noStroke();
  fill(92, 64, 64);
  
  fill(145, 63, 0);
  ellipse(0,0,130,130);
    fill(0, 0, 0, 120);
    push();
    translate(-17, 11);
        rotate(12);
    ellipse(+-15,-16,5,90);
    ellipse(+-26,-16,5,71);
    ellipse(+20,-16,5,108);
    ellipse(+40,-16,5,71);
    ellipse(+58,-20,5,65);
   ellipse(+-2,-16,5,90);
    ellipse(20,-16,108,5);
    ellipse(30,-36,71,5);
    ellipse(+20,+14,80,5);
    pop();
    rotate(18);
    fill(0, 0, 0,50);
    arc(0,0,130,130,0,180);
    fill(158, 145, 82);
    ellipse(20, -37, 7, 9);
    ellipse(-25, -30, 9, 5);
    ellipse(-1, 35, 4, 8);
    ellipse(35, 11, 9, 8);
    ellipse(6, 10, 7, 5);
    ellipse(-5, -14, 13, 6);
    pop();
    
};
function titleFont(txt, x, y, c1, c2, size){
    textFont("Ubuntu");
    textSize(size);
    textLeading(55);
    textAlign(CENTER,CENTER);
    fill(c2);
    for(var i = 0; i < 335; i += 5){
        text(txt, x + sin(i) * 5, y + cos(i) * 5);
    }
    fill(0, 0, 0, 50);
    text(txt, x, y+2);
    fill(c1);
    text(txt,x,y);
    textFont("Ubuntu");
};
function bg() {
  patty(width/2,height/2,2);
  fill(255,255,255,200);
  rect(0,0,width,height);
  

}

function draw() {
  cursor(ARROW);
  
  noStroke();
  if(scene === "logo") {
    timer ++;
    background(255);
    logo(width/2, gemY, 1);
    gemY += gemVel;
    gemVel -= 0.029;
    if(gemVel < 0) {
      gemVel = 0;
    }
    if(timer > 200) {
    isFading = true;  
    }
    if(isFading) {
      fade +=5;
    }
    else {
      fade -=5;  
    }
    if(fade < 0) {
    fade = 0;  
    }
    if(fade > 255) {
      isFading = false;  
      scene = "menu";
    }
    fill(255,255,255,fade);
    rect(0,0,width,height);
    
  }
  if(scene === "menu") {
    bg();
    titleFont("BURGER\n\nMASTER",width/2,height/2.5,color(255,0,0),color(255,104,0),80);
    fill(255,104,0);
    textSize(14);
    text("Captain || August 2016",width/2,height/1.65);
    fill(255,104,0);
    text("> Press Space <",width/2,height/1.27);
    fill(255,255,255,100+sin(frameCount*5)*50);
    rect(200,380,100,100);
    logo(470,470,0.1);
  }
  if(scene === "how") {
  bg();
  pressSpaceTimer ++;
  textFont("Ubuntu");
  titleFont("HOW TO",width/2,height/4,color(255,0,0),color(255,104,0),80);
  fill(255,104,0);
  textSize(15);
  text("Press the mouse to place the burger patty.\nThe closer to the center you are, the more points you get.\nIf you miss, you lose.\n\nBe a Burger Master!",width/2,height/2);
  if(pressSpaceTimer < 200) {
    text("Actually read this...",width/2,height/1.5);
  }
  else {
  text("Press space to begin!",width/2,height/1.5);  
  }
  }

  if(scene ==="game") {
  background(255,255,255);
  textFont("Ubuntu");
  strokeWeight(3);
  stroke(217, 185, 4);
  fill(255, 228, 76);
  ellipse(width/2,height/2,130,130);
  noStroke();
  fill(0,0,0,10);
  ellipse(width/2.1,height/2.2,60,60);
  patty(width/2,y,1);
  fill(255,104,0);
  text("Score: " + score,100,100);
  
  y = y +burgerSpeed;
  
  if(y > 450) {
  burgerSpeed = -speed;
  }
  if(y < 50) {
  burgerSpeed = +speed;
  }
  speed +=0.005;
  }
  if(scene === "lose") {
    bg();
    titleFont("YOU LOST",width/2,height/4,color(255,0,0),color(255,104,0),80);  
    fill(255,104,0);
    textSize(20);
    text("With a score of: " + score,width/2,height/2);
      canClick ++;
      if(canClick > 100) {
      scene = "game";
      }
  }
  
  
  fill(255,255,255,w);
  rect(0,0,width,height);
  w/=0.5;
  w = constrain(w,0,255);
  
  
}
function keyPressed() {
  if(scene === "menu" && key.toString() === " ")  {
  scene = "how";
  }
  if(scene ==="how" && key.toString() === " " && pressSpaceTimer > 200) {
  scene = "game";  
  }
  
  
}
function mousePressed() {
if(scene === "game") {
  canClick = 0;
  if(dist(200,y,200,200) > 130) {
  scene = "lose";
  }
  if(dist(200,y,200,200) > 100 && dist(200,y,200,200)< 130) {
  score ++;  
  }
  if(dist(200,y,200,200) > 70 && dist(200,y,200,200) < 100) {
  score +=2;
  }
  if(dist(200,y,200,200) > 30 && dist(200,y,200,200) < 70) {
  score +=5;
  }
  if(dist(200,y,200,200) > 0 && dist(200,y,200,200) < 30) {
  score +=10;
  } 

}
if(scene === "lose") {

  y = 100;
  speed = 3;
  burgerSpeed = +speed;
  score = 0;
}

}