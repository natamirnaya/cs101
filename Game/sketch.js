let counter = 0;
let obs_on_screen = false;
robot_speed = 0;
let obs;
let check;
let start_game = true;
let game_over = false;
let robot_y = 215;

function define_sprite(sprite_obj, sprite_x, sprite_y) {
  sprite_img = loadImage(sprite_obj.image);
  sprite = createSprite(sprite_x, sprite_y);
  sprite.addImage(sprite_img);
  sprite.scale = sprite_obj.scale;
  switch (sprite_obj.collider) {
      case 'rectangle':
        sprite.setCollider(sprite_obj.collider, 0, 0, sprite_obj.width,sprite_obj.height);
        break;
      case 'circle':
        sprite.setCollider(sprite_obj.collider, 0, 0, sprite_obj.radius);
        break;
  }
  sprite.depth = sprite_obj.depth;
  return sprite;
}


function end_game(){
  game_over = true;
  ost_over.play();
  background(end_title);
  textSize(48);
  textFont('Georgia');
  text('Points earned: ' + str(counter), 60, 285);
}

function add_point(){
  obs_on_screen = false;
  counter = counter + 1;
  obs.remove();
  check.remove();
}
  

function setup() {
  createCanvas(480, 300);
  game_back = loadImage('assets/game_background.png');
  end_title = loadImage('assets/end_title.jpg');
  begin_title = loadImage('assets/begin_title.jpg');
  ost_jump = loadSound('assets/jump.mp3');
  ost_over = loadSound('assets/game_over.wav');
  
}

function draw() {
  
  if (start_game==true){
    background(begin_title);
    fill(0);
    textSize(48);
    textFont('Georgia');
    text('Click to start', 100, 285);
    fill(255,0,0);
    textSize(20);
    textFont('Georgia');
    text('Use arrow UP to jump', 140, 50);
    if (mouseIsPressed){
      start_game = false;
      background(game_back);
      robot = define_sprite(robot_spec, 50, robot_y);
      obs_on_screen = false;
    }}
    
  if (game_over==false && start_game==false){
  background(game_back);
  fill(255,0,0);
  textSize(20);
  textFont('Georgia');
  text('Points: ' + str(counter), 350, 20);
  robot.setVelocity(0, robot_speed);
  drawSprites();
  
  if (keyIsPressed===true && keyCode == UP_ARROW && robot.position.y==robot_y){
    robot_speed = -12;
    ost_jump.play();
  }
  
  if (robot.position.y<robot_y){
    robot_speed = robot_speed +0.4;
  }
  
  if (robot.position.y>=robot_y && robot.previousPosition.y<robot_y){
    robot_speed = 0;
    robot.position.y=robot_y;
  }
  
  robot.setVelocity(0, robot_speed);
  
  if (obs_on_screen == true){
    //obs.rotation += obs.getSpeed()*0.5;
    obs.overlap(robot, end_game);
    obs.overlap(check, add_point);
  }
  
  if (obs_on_screen == false){
    check = createSprite(0, 220, 1, 250);
    check.shapeColor = color(107, 136, 254);
    obs_spec = random([obs_1_spec, obs_2_spec, obs_3_spec, obs_4_spec, obs_5_spec, obs_6_spec, obs_7_spec, obs_8_spec]);
    obs = define_sprite(obs_spec, 480, 220);
    obs.setVelocity(-2.5 - counter/10, 0);
    obs_on_screen = true;
  }
    
  }

} 


let robot_spec = {
    image: 'assets/mf_robot.png',
    scale: 0.23,
    collider: 'rectangle',
    width: 400, 
    height: 430,
    depth: 2
  };

let obs_1_spec = {
    image: 'assets/obs_1.png',
    scale: 0.19,
    collider: 'circle',
    radius: 200,
    depth: 1
  };

let obs_2_spec = {
    image: 'assets/obs_2.png',
    scale: 0.13,
    collider: 'circle',
    radius: 200,
    depth: 1
  };

let obs_3_spec = {
    image: 'assets/obs_3.png',
    scale: 0.23,
    collider: 'rectangle',
    width: 120, 
    height: 198,
    depth: 1
  };

let obs_4_spec = {
    image: 'assets/obs_4.png',
    scale: 0.23,
    collider: 'rectangle',
    width: 137, 
    height: 195
  };

let obs_5_spec = {
    image: 'assets/obs_5.png',
    scale: 0.15,
    collider: 'circle',
    radius: 62,
    depth: 1
  };

let obs_6_spec = {
    image: 'assets/obs_6.png',
    scale: 0.15,
    collider: 'circle',
    radius: 112,
    depth: 1
  };

let obs_7_spec = {
    image: 'assets/obs_7.png',
    scale: 0.23,
    collider: 'rectangle',
    width: 130, 
    height: 195,
    depth: 1
  };

let obs_8_spec = {
    image: 'assets/obs_8.png',
    scale: 0.15,
    collider: 'circle',
    radius: 198,
    depth: 1
  };