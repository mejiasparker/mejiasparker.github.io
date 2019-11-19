//Lyn Parker
//makes a frog face
function frog(x,y){
push();
translate(x,y);
stroke(0);
strokeWeight(70);

noStroke();
fill('green');
ellipse(-17.5, -65, 35,35);//left eye 
ellipse(17.5, -65, 35,35);//right eye 
arc(0,-65,70,70,0, PI); //chin
fill(0);
ellipse(-14, -65, 10,18);//left eye 
ellipse(14, -65, 10, 18);//right eye
  ellipse(0, -40, 35,18);
  //mouth
}

//Barrie D
//sad face the only arc I can make
function face(x, y) {
  fill("lightBlue");
  circle(x, y, 100);
  fill(0);
  ellipse(x+20, y, 10, 50);
  ellipse(x-20, y, 10, 50);
  noFill();
  stroke(0);
  arc(x, y+40, 30, 30, PI, 0);
}

//Kate M
//makes a smiley face
function smiley(faceColor, eyeColor, x, y) {
  fill(faceColor);
  ellipse(x, y, 50, 50);
  fill(eyeColor);
  ellipse(x-10, y-5, 7, 7);
  ellipse(x+10, y-5, 7, 7);
  fill("white");
  arc(x, y+10, 30, 20, 0, PI);
}

//Patti E
//makes a bullseye with a color of your choice
function bullseye(x, y, d, col){
  fill(col);
  ellipse(x, y, d * 3);
  fill(255);
  ellipse(x, y, d * 2);
  fill(col);
  ellipse(x, y, d);
}

//Alyse
//makes a bullseye with the colors of the rainbow
function rainbow(x,y) {
    fill ("red")
    ellipse(x, y, 150, 150);
    fill ("orange");
    ellipse (x, y, 125, 125);
    fill ("yellow")
    ellipse (x, y, 100, 100);
    fill ("green")
    ellipse (x, y, 75, 75);
    fill ("blue")
    ellipse (x, y, 50, 50);
    fill ("purple")
    ellipse (x, y, 25, 25);
}

//Rob H
//makes a lollipop
function lollipop (lollyX, lollyY, lollySize, stickSize, lollyColor) {
  fill("white");
  rect(lollyX - 5, lollyY+lollySize/2, 10, stickSize);
  fill(lollyColor);
  ellipse(lollyX, lollyY, lollySize); 
}
