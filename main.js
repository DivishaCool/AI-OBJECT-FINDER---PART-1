video = ""

function preload(){
  video = createVideo("video.mp4");
  video.hide();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Object(s)"
  
}

function setup(){
  canvas = createCanvas(480 , 380);
  canvas.center();
}

function draw(){
image(video , 0 , 0 , 480 , 380);
}

function modelLoaded(){
  console.log("Model Is Initialized");
  video.loop();
  video.volume(0);
  video.speed(1);
}

