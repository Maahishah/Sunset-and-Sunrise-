const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,bgImg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
 
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(bgImg){
    background(bgImg);}
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
 
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var JSON = await res.json();
    // write code slice the datetime
    var dt = JSON.datetime;
    // add conditions to change the background images from sunrise to sunset
    var hr = dt.slice(11,13);
    console.log(hr);
    //load the image in backgroundImg variable here
    
    if(hr>=06 && hr<7){
    bg= "sunrise1.png";}

    else if(hr>=7 && hr<9){
    bg="sunrise2.png"}

     else if(hr>=9 && hr<11){
    bg = "sunrise3.png";}

    else if(hr>=11 && hr<14){
    bg="sunrise4.png"; }
    
    else if(hr>=14 && hr<16){
    bg = "sunrise5.png";}

    else if(hr>=16 && hr<17){
    bg= "sunrise6.png";}

    else if(hr>=17 && hr<18){
    bg= "sunset7.png";}

    else if(hr>=18 && hr<19){
    bg= "sunset8.png";}

    else if(hr>=19 && hr<20){
    bg= "sunset9.png";}

    else if(hr>=20 && hr<21){
    bg= "sunset10.png";}

    else if(hr>=21 && hr<22){
    bg= "sunset11.png";}
 
     else{
    bg= "sunset12.png";}
    bgImg=loadImage(bg)





}
