
var a = 200;
var b = 175;
var New;

function setup(){
  createCanvas(600,400)
  background(0)
  var New = a + b
}

function draw(){
  noStroke();
  fill(240);
  background(0);
  ellipse(mouseX, mouseY, a, b)
  
  if(mouseX > 200){
    background(230,150,255);
  }
  else{
   background(0); 
  }
}

size = [10, 20, 40, 80, 160];

for(var a = 0; a < 5; a++){
 ellipse((a+1)*100, 200, size[b], size[b]);
}


