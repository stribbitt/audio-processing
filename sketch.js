var song;
var button, skipButton;
var volumeSlider, rateSlider, panSlider;
var amp, volume, size;


function preload(){
    song = loadSound("sound/LilSkies.mp3")
}



function setup(){
    createCanvas(700,500);
    background(0);
   
    button = createButton("Play");
    button.mousePressed(togglePlaying);
    button.position(20, 100);
    
    volumeSlider = createSlider(0, 1, 0.5,.05);
    volumeSlider.position(20, 150);
    
    rateSlider = createSlider(0.5, 1.5, 1, .05);
    rateSlider.position(20, 200);
    
    panSlider = createSlider(-1, 1, 0, .05);
    panSlider.position(20, 250);

    //add Cue
    //song.addCue(1,showSquare);
    
    amp = new p5. Amplitude();
}



 
function draw(){
    background(song.currentTime()*5, 0, 0);
    
    song.setVolume(volumeSlider.value());
    song.rate(rateSlider.value());
    song.pan(panSlider.value());
    
    volume = amp.getLevel();
    size = map(volume, 0, 1, 50, 500);
    showSquare();
    
    fill(255);
    rectMode(CENTER);
    rect(width/2, height/2, size*3 ,size*3);
}



function togglePlaying(){
    if(song.isPlaying()){
        song.pause();
        button.html("Play");
    }
    else{
        song.play();
        button.html("Pause");
    }
}


function showSquare(){
   
}
