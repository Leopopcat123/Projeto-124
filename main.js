noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0; 

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(550, 550);
    canvas.position(560,150);


    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on('pose', gotPoses); 
}

function modelLoad() {
console.log('PoseNet Is Initialized');
}


function gotPoses(results) {

}