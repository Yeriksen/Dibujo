noseX=0;
noseY=0;
difference = 0;
rightWrisrX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(600,400);
    canvas.position(550, 180);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('turquoise');
    document.getElementById("square_side").innerHTML = "El ancho y alto del cuadrado,será ="+ difference +"px";
    fill('#CDA434');
    stroke('blue');
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log('PoseNet se inicializo');
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+noseX +" noseY = " + noseY);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.y;
    difference = leftWristX - rightWristX;

    console.log("leftWristX = " + leftWristX +"righWristX =" + rightWrisrX +"difference = "+ difference);
}
}