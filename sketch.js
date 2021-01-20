var hr;
var mn;
var sc ;

function preload(){
  timeSound = loadSound("sound.mp3");
}

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);

  //timeSound.play()
  
  
  
  hr = hour();
  mn = minute();
  sc = second();

  
  translate(200,200);
  rotate(-90);

  scAngle = map(sc, 0, 60, 0 , 360);
  mnAngle = map(mn, 0, 60, 0 , 360);
  hrAngle = map(hr, 0, 60, 0 , 360);

  push();
  rotate(scAngle);
  stroke('red');
  strokeWeight(7);
  line(0,0,110,0);
  pop();

  push();
  rotate(mnAngle);
  stroke('blue');
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  push();
  rotate(hrAngle);
  stroke('green');
  strokeWeight(7);
  line(0,0,60,0);
  pop();

  strokeWeight(3)
  noFill();

  stroke("red")
  arc(0,0,330,330,0,scAngle);

  stroke("blue")
  arc(0,0,290,290,0,mnAngle);
  
  stroke("green")
  arc(0,0,250,250,0,hrAngle);


  

  drawSprites();
}
