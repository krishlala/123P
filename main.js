name = document.getElementById("name").value;
noseX=0;
noseY=0;
difference = 0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    document.getElementById("square_side").innerHTML = "Width and Height of the square is = " + difference + "px";
    background('#ADD8E6');
    textSize(difference);
    fill("#22E496");
    text(name, 50, 400);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);

    }
}


function name() {
    draw();
}
