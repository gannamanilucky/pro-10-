var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d6324063-b7de-4689-8af8-2067cdf973ad","7e46eb2a-e085-4bea-9437-827c4f7f01b4"],"propsByKey":{"d6324063-b7de-4689-8af8-2067cdf973ad":{"name":"boxcar_09_1","sourceUrl":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png"},"7e46eb2a-e085-4bea-9437-827c4f7f01b4":{"name":"kid_15_walking_1","sourceUrl":null,"frameSize":{"x":217,"y":380},"frameCount":1,"looping":true,"frameDelay":12,"version":"uFb9znov9xhNN4AzE795U3oSaAKHJovF","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":217,"y":380},"rootRelativePath":"assets/7e46eb2a-e085-4bea-9437-827c4f7f01b4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// creating rectangles and cars and player

var boundary1 = createSprite(198, 344,400,4);
var boundary2 = createSprite(198, 125,400,4);
var life=0

// creating rect1

var rect1 = createSprite(30, 231,60,220);
rect1.shapeColor="lightblue";

// creating sam

var sam = createSprite(22, 200,5,5);
sam.setAnimation("kid_15_walking_1");
sam.scale= 0.2;

// creating car1

var car1 = createSprite(102, 170,20,20);
car1.shapeColor="red";
car1.velocityY=+12;

// creating car2

var car2 = createSprite(170, 295,20,20);
car2.shapeColor="red";
car2.velocityY=-12;

// creating car3

var car3 = createSprite(250, 170,20,20);
car3.shapeColor="red";
car3.velocityY=+12

// creating car4

var car4 = createSprite(306, 295,20,20);
car4.shapeColor="red";
car4.velocityY=-12

// creating rect2

var rect2 = createSprite(370, 231,60,220);
rect2.shapeColor="yellow"

// adding sound for the game



playSound("assets/category_background/eerie_beginnings.mp3", true);

   








    


  
 

function draw() {
background("black");

// making cars to bounceoff from the boundaries

car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

// Making the sam move according to the keys when pressed on them


if(keyDown("right")){ sam.x = sam.x + 4; } if(keyDown("left")){ sam.x = sam.x - 4; }
if( sam.isTouching(car1)|| sam.isTouching(car2)|| sam.isTouching(car3)|| sam.isTouching(car4)) { sam.x = 20; sam.y = 190; life = life + 1; }
fill("");
textSize(30)
text("Deaths:"+ life,250,50,60);

// Giving the condition for the sam when touches the rect2 

if(sam.isTouching(rect2)){
  sam.x=20;
  sam.y=190;
  fill("white");
  textSize(20);
  text("You Won",200,200);
}






drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
