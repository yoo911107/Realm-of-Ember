//Replace with the start frame of state A
let startA = 0;
//Replace with the end frame of state A
let endA = 1000;
//Replace with the start frame of state B
let startB = 0;
//Replace with the end frame of state B
let endB = 1000;
let didPlay = false;
let anim
let lottie;
let scene=0;

let x = 0;

let animData;

function preload() {
  animData = loadJSON('animation.json');
}

function setup() {
  createCanvas(1920, 1080);
  background(0);
  lottie = createDiv();
  let params = {
    container: lottie.elt,
    loop: false,
    autoplay: true,
    animationData: animData,
    renderer: 'svg',
  };
  anim = bodymovin.loadAnimation(params);
  //lottie.background("#000");
  lottie.style('background','#000');
  lottie.mousePressed(animate);
  lottie.position(0,0);
  anim.setSpeed(1);
  anim.addEventListener('complete', destroyAnim);
  ////////////////
  strokeWeight(2);
  stroke(255);
  noFill();
  t = 0;

}

function draw() {
  if (scene == 0) //menu
  background(0,0,0);
  {
    for (var count = 0; count < 2; count++) {
      if (mouseX > 250 && mouseX < 250 + 200 &&
        mouseY > 300 + count * 75 && mouseY < 300 + count * 75 + 60)
        fill(160);
      else fill(200);

      rect(200, 300 + count * 75, 200, 60, 30);
    }
    fill(0);
    textSize(25);
    text("START", 250, 340);
    text("EXIT", 250, 340+75);
  }
  if (scene == 1) //start
  {
    background(200, 0, 0);
    text("START", 1920/2, 1080/2);
  }
  if (scene == 2) //exit
  {
    background(0, 200, 0);
    text("EXIT", 1920/2, 1080/2)
  }
 
  if (scene > 0) {
    fill(0);
    triangle(0, 10, 10, 0, 10, 20);
    rect(10, 5, 10, 10);
  }
}
function mouseClicked() {
  if (scene == 0) {
    for (var count = 0; count < 3; count++) {
      if (mouseX > 250 && mouseX < 250 + 200 &&
        mouseY > 300 + count * 75 && mouseY < 300 + count * 75 + 60)
        scene = count + 1;
    }
  }
  else {
    if (mouseX > 0 && mouseX < 20
      && mouseY > 0 && mouseY < 20)
      scene = 0;
  }
}




function animate() {
  let targetFrames = [0, 0];
  if (!didPlay) {
    didPlay = true;
    targetFrames = [startA, endA];
  } else {
    didPlay = false;
    targetFrames = [startB, endB]
  }
  anim.playSegments([targetFrames], true);
}


function destroyAnim(){

  anim.destroy();

}