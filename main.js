function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);

}

function draw() {
    background('aqua');
}

function modelLoaded() {
    console.log('PoseNet model Loaded!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}