nose_X = 0;
nose_y = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', got_poses);
}

function draw(){
   image(video, 0, 0, 300, 300);
  // fill(255, 0, 0);
  // stroke(255, 0,0);
  // circle(nose_X, nose_y, 20);
   image(clown_nose, nose_X, nose_y, 30, 30);
}

function take_snapshot(){
    save("clownface.png");
}

function model_loaded(){
    console.log("Posenet Model Has Been Initialized");
}

function got_poses(results){
     if(results.length >= 0){
        console.log(results);
        nose_X = results[0].pose.nose.x-10;
        nose_y = results[0].pose.nose.y-10;
        console.log("nose x = "+nose_X);
        console.log(" nose y = "+nose_y);
     }
}

