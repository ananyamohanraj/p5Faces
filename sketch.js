function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  strokeWeight(2);
  fill(400);
  circle(200, 200, 200);
  
  
  fill(200);
  noStroke();
  triangle(200, 100, 100, 180, 100, 10);
  triangle(200, 100, 300, 180, 300, 10);
  
  fill(10);
  circle(200,260,50);
  
  stroke(10);
  noFill();
  ellipse(200,190,50, 30);
  fill(10);
  circle(200,190,30);
  noFill();
  arc(200, 155, 60, 40, 0, PI);
  
  strokeWeight(4);
  arc(200, 225, 30, 20, PI, 0);
  
  fill(10);
  arc(100, 190, 80, 60, PI/2, 3*PI/2);
  arc(300, 190, 80, 60, 3*PI/2, PI/2);
  
  triangle(190, 105, 100, 180, 100, 130);
  triangle(210, 105, 300, 180, 300, 130);
  
  
  arc(145, 125, 150, 70, PI - QUARTER_PI , 0 - QUARTER_PI/2);
  arc(255, 125, 150, 70,  PI + QUARTER_PI/2 , 0 + QUARTER_PI);
  
  
    if(keyIsPressed){//if a key is pressed
        if(key == 'b'){//if that key is g
            fill(10);
            ellipse(200,190,50, 30);
        }else{//if no key is pressed
            //don't add a fill
        }
    }
}