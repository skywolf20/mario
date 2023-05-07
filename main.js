function preload() {
		mario_gameover = loadSound("gameover.wav");
		mario_jump = loadSound("jump.wav");
		mario_coin = loadSound("coin.wav");
		mario_kick = loadSound("kick.wav");
		mario_die = loadSound("nariodie.wav");
		world_start = loadSound("world_start.wav");
		setSprites();
		MarioAnimation();
}


function setup(){
	canvas = createCanvas(1240,236);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(808,400);
	video.parent('game_console');
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}
	function modelLoaded(){
	console. log('¡Modelo cargado!');
	}
	
	
	function gotPoses (results)
{
	 if(results.length > 0)
	 {
	 console.og(results);
	 moseX = results[8].pose.nose.x;
	 noseY = results[8].pose.nose.y;
	 }
	}

function draw() {
	game()
}