var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3b830b53-8e6f-4976-876b-d86c41eb41b0","8a78625c-23d4-4c31-9a06-e409e95e8746","6f98ce1b-3fa0-4a8c-9a7e-f1acd696c30e","35225a97-062d-4155-b176-fff36e557118","e913d9e4-d880-49d4-af70-8944b0b25a67","756141c6-2117-4706-9386-d3f260cfe671","158e0da0-d5a6-4682-9ba4-f9099144b811","f9c13cbe-1903-455e-81a1-c3ccbb7901c3","be26af59-cc47-4a29-b85a-053645edebb7","8fd31e0a-13f2-4197-9bb3-1b96d37f5ee5","921f7344-bb45-4004-b816-b4cbeb61c6ac","efbd44c7-ea1b-44bd-a6e6-4e2c64a5f19f","4bfae645-a4eb-44a4-9ee1-8aeb5747289f","44b5b750-cd81-4a98-acac-8efd2846fc2a","e8c13a6d-d5e7-4791-b045-4e7f50d7b705","f34b3ee7-e1b3-46e9-8b99-cf1ea17f79d4","2b99d6f6-e957-4812-bfc0-921908700f05","0eec999e-6022-4129-951c-f7cfecbda071"],"propsByKey":{"3b830b53-8e6f-4976-876b-d86c41eb41b0":{"name":"frank_celebration","sourceUrl":null,"frameSize":{"x":90,"y":93},"frameCount":3,"looping":true,"frameDelay":3,"version":"78H.Nz3K_qyhxmCtVP3GQVVHfpN.LocT","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":186},"rootRelativePath":"assets/3b830b53-8e6f-4976-876b-d86c41eb41b0.png"},"8a78625c-23d4-4c31-9a06-e409e95e8746":{"name":"frank_shoot","sourceUrl":null,"frameSize":{"x":114,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"NVEdMQBpiXfRlkqOMc0TDd250uA1nGpA","loadedFromSource":true,"saved":true,"sourceSize":{"x":114,"y":93},"rootRelativePath":"assets/8a78625c-23d4-4c31-9a06-e409e95e8746.png"},"6f98ce1b-3fa0-4a8c-9a7e-f1acd696c30e":{"name":"zombie","sourceUrl":null,"frameSize":{"x":78,"y":89},"frameCount":1,"looping":true,"frameDelay":12,"version":"TEpWE9Gj.2xao57PmOkzwg_8jwPvgeec","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":89},"rootRelativePath":"assets/6f98ce1b-3fa0-4a8c-9a7e-f1acd696c30e.png"},"35225a97-062d-4155-b176-fff36e557118":{"name":"blank","sourceUrl":null,"frameSize":{"x":1024,"y":576},"frameCount":3,"looping":true,"frameDelay":12,"version":"2ZglnULppg4Gg70he3.IdY.7fkRv5i9t","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1728},"rootRelativePath":"assets/35225a97-062d-4155-b176-fff36e557118.png"},"e913d9e4-d880-49d4-af70-8944b0b25a67":{"name":"frank_left","sourceUrl":null,"frameSize":{"x":90,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"EXTAKDsxAX_ODxPDBMGkcFHtbE4UaBN.","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":93},"rootRelativePath":"assets/e913d9e4-d880-49d4-af70-8944b0b25a67.png"},"756141c6-2117-4706-9386-d3f260cfe671":{"name":"hunger","sourceUrl":null,"frameSize":{"x":45,"y":45},"frameCount":1,"looping":true,"frameDelay":12,"version":"1zsN9acuObAi9D09dhD2.b4IgNu8qoTK","loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":45},"rootRelativePath":"assets/756141c6-2117-4706-9386-d3f260cfe671.png"},"158e0da0-d5a6-4682-9ba4-f9099144b811":{"name":"steak","sourceUrl":null,"frameSize":{"x":63,"y":75},"frameCount":1,"looping":true,"frameDelay":12,"version":"04n0QCoYP9BVoVX14xLQs.aMcfMUSJpj","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":75},"rootRelativePath":"assets/158e0da0-d5a6-4682-9ba4-f9099144b811.png"},"f9c13cbe-1903-455e-81a1-c3ccbb7901c3":{"name":"carrot","sourceUrl":null,"frameSize":{"x":30,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"3b4rpLV8XjLbNu5804k42Eaf0m_3btT.","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":81},"rootRelativePath":"assets/f9c13cbe-1903-455e-81a1-c3ccbb7901c3.png"},"be26af59-cc47-4a29-b85a-053645edebb7":{"name":"Citybackground.png","sourceUrl":null,"frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"Sqsb4smbKi_vJGrdHxKyuKiq1Bg2jGKv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/be26af59-cc47-4a29-b85a-053645edebb7.png"},"8fd31e0a-13f2-4197-9bb3-1b96d37f5ee5":{"name":"frank_right","sourceUrl":null,"frameSize":{"x":90,"y":93},"frameCount":1,"looping":true,"frameDelay":12,"version":"2iKaBgiiTMf2Vo2DznYBNRdtZHkdlgZo","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":93},"rootRelativePath":"assets/8fd31e0a-13f2-4197-9bb3-1b96d37f5ee5.png"},"921f7344-bb45-4004-b816-b4cbeb61c6ac":{"name":"frank_running_right","sourceUrl":null,"frameSize":{"x":87,"y":99},"frameCount":4,"looping":true,"frameDelay":12,"version":"9mGzHgzb9nfLss51oGxTUlY7rP8oVkkp","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":198},"rootRelativePath":"assets/921f7344-bb45-4004-b816-b4cbeb61c6ac.png"},"efbd44c7-ea1b-44bd-a6e6-4e2c64a5f19f":{"name":"frank_running_left","sourceUrl":null,"frameSize":{"x":87,"y":99},"frameCount":4,"looping":true,"frameDelay":12,"version":"mTFBQhzj8_jIa2epwcs0O0S_XLzro5QF","loadedFromSource":true,"saved":true,"sourceSize":{"x":174,"y":198},"rootRelativePath":"assets/efbd44c7-ea1b-44bd-a6e6-4e2c64a5f19f.png"},"4bfae645-a4eb-44a4-9ee1-8aeb5747289f":{"name":"zombie_attack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":4,"looping":true,"frameDelay":12,"version":"FSz2iOmPFhB8aSbVygovVlw0PYdxIcft","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":200},"rootRelativePath":"assets/4bfae645-a4eb-44a4-9ee1-8aeb5747289f.png"},"44b5b750-cd81-4a98-acac-8efd2846fc2a":{"name":"health","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"zEhzgtXV4lXFbZOTP9m3zwpUsaEDl4o3","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/44b5b750-cd81-4a98-acac-8efd2846fc2a.png"},"e8c13a6d-d5e7-4791-b045-4e7f50d7b705":{"name":"coin","sourceUrl":null,"frameSize":{"x":36,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"Z6qsogi7dypN__IhodRalhq5oEmwIBY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":36},"rootRelativePath":"assets/e8c13a6d-d5e7-4791-b045-4e7f50d7b705.png"},"f34b3ee7-e1b3-46e9-8b99-cf1ea17f79d4":{"name":"boy_walking","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"1V3j.vMTdOzCjxSM1aFiFJPYIJfNW1HL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/f34b3ee7-e1b3-46e9-8b99-cf1ea17f79d4.png"},"2b99d6f6-e957-4812-bfc0-921908700f05":{"name":"boy","sourceUrl":null,"frameSize":{"x":78,"y":89},"frameCount":1,"looping":true,"frameDelay":12,"version":"rp2ta4xypybIdxqjyEjDMGdE2Qz3fKxv","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":89},"rootRelativePath":"assets/2b99d6f6-e957-4812-bfc0-921908700f05.png"},"0eec999e-6022-4129-951c-f7cfecbda071":{"name":"boy_fall","sourceUrl":null,"frameSize":{"x":125,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"yCbAmG2RV1_Q36cfRq79_g.Cmpss1.1l","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":125},"rootRelativePath":"assets/0eec999e-6022-4129-951c-f7cfecbda071.png"}}};
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

var cityBackground = createSprite(200, 200, 50, 50);
cityBackground.scale = 0.8;
cityBackground.setAnimation("Citybackground.png");

var health;
var healthMeter = 100;
var hunger;
var hungerMeter = 100;

var bullet;

var ground = createSprite(0,400, 1600, 50);

var zombie;

var frank = createSprite(70, 340, 50, 50);
frank.scale = 1;
frank.setAnimation("frank_right");

var zombieGroup = new Group();
var bulletGroup = new Group();
var healthGroup= new Group();

function draw() {
  background("white");

  if(cityBackground.x < 0){
      cityBackground.x = 200
  }
  cityBackground.velocityX = -1;

  ground.shapeColor = "black";
  frank.collide(ground);
  
  showHealth();
  
  showHunger(); 
  
  frank.velocityY = frank.velocityY + 0.8;
  
  if (keyDown("a")) {
    frank.x = frank.x - 3;
    frank.setAnimation("frank_running_left");
  }
  
  if (keyDown("d")) {
    frank.x = frank.x + 3;
    frank.setAnimation("frank_running_right");
  }
  
  if (keyDown("space")&& frank.y >= 320) {
    frank.velocityY = -12;
  }

  
  if (keyDown("x")) {
    spawnBullets();
        
  }
  spawnZombie();

  if(zombieGroup.isTouching(frank)){
    healthMeter= healthMeter-20;
    showHealth();
    console.log("Istouching");
    zombieGroup.destroyEach();
    healthGroup.destroyEach();
  }
  
  drawSprites();
}
function spawnBullets(){
  bullet = createSprite(frank.x + 55, frank.y + 7, 10, 5);
  bullet.velocityX = 30;
  bulletGroup.add(bullet);
  bulletGroup.lifeTime = 100;
    
}

function showHealth(){
  var position=20;
  var y =healthMeter/20;
  console.log(healthMeter+ " " + y)
  
  for(var i = 0; i<y;  i++){    

      health = createSprite(position, 20, 30, 30);
      health.scale = 0.3;
      health.setAnimation("health");
      position=position+20;
      healthGroup.add(health);
      
     
    }
  
    
  }


function showHunger(){
  for(var i = 20; i<120; i = i + 20){
    hunger = createSprite(i, 50, 30, 30);
      hunger.scale = 0.6;
      hunger.setAnimation("hunger");
  }
}
function spawnZombie(){
  if(frameCount%260==0){
  zombie = createSprite(500, 340, 50,50);
  zombie.setAnimation("zombie_attack");
  
    zombie.velocityX = -2;

          zombieGroup.add(zombie);
    }
}


function mousePressed(){
  console.log("checking");
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