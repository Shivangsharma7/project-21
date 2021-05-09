var box1, box2, box3, box4, movingBox;
var music, canvas;

function preload() {
    music = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(500, 500);

    //create 4 different surfaces
    box1 = createSprite(60, 480, 80, 25);
    box2 = createSprite(180, 480, 80, 25);
    box3 = createSprite(300, 480, 80, 25);
    box4 = createSprite(420, 480, 80, 25);
    movingBox = createSprite(Math.round(random(70, 450)));
    movingBox.veloxityX = 5;
    movingBox.velocityY = 5;
    box1.shapecolor = "red";
    box2.shapecolor = "green";
    box3.shapecolor = "blue";
    box3.shapecolor = "yellow";



}

function draw() {
    background("black");
    createEdgeSprites();

    //add condition to check if box touching surface and make it box
    if (movingBox.isTouching(box1)) {
        movingBox.shapecolor = "red";
        movingBox.bounceOff();
    }

    if (movingBox.isTouching(box2)) {
        movingBox.shapecolor = "green";
        movingBox.bounceOff();
    }

    if (movingBox.isTouching(box3)) {
        movingBox.shapecolor = "blue";
        movingBox.bounceOff();
    }

    if (movingBox.isTouching(box4)) {
        movingBox.shapecolor = "yellow";
        movingBox.bounceOff();
    }

    drawSprites();
}
