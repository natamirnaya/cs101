//инопланетянин при нажатии на стрелку вверх один раз подпрыгивает и плавно опускается на уровень земли

let position;
let pressed_up;
let x_ufo = 100;
let y_ufo = 300;
let velocity_0 = 0;
let acceleration_0 = 0;
let time_0 = 0;
let previous_y = y_ufo;


function setup() {
  createCanvas(1000, 500);
  angleMode(DEGREES);
  background(200);
  position = createVector (x_ufo, y_ufo);
  pressed_up = createVector (0, 0);
}

function draw_ufo (x_start, y_start) {
  push();
  stroke (0, 255, 0);
  strokeWeight (2);
  fill (0, 255, 0);
  
  leg_height = 15;
  leg_width = 12;
  finger_shift = 5;
  body_height = 30;
  body_width = 36;
  head_radius = 18;
  corn_shift = 8;
  corn_diameter = 7;
  eye_outer_diameter = 28;
  eye_inner_diameter = 21;
  
  
  // рисуем тело
  body_x1 = x_start;
  body_y1 = y_start - leg_height;
  body_x2 = x_start + body_width;
  body_y2 = body_y1;
  body_x3 = x_start + body_width / 2;
  body_y3 = body_y1 - body_height;
  triangle(body_x1, body_y1, body_x2, body_y2, body_x3, body_y3);
  
  // рисуем ноги
  left_leg_x1 = x_start;
  left_leg_y1 = y_start;
  left_leg_x2 = x_start + leg_width;
  left_leg_y2 = left_leg_y1;
  line(left_leg_x1, left_leg_y1, left_leg_x2, left_leg_y2);
  left_leg_x3 = left_leg_x2;
  left_leg_y3 = left_leg_y2 - leg_height;
  line(left_leg_x2, left_leg_y2, left_leg_x3, left_leg_y3);
  right_leg_x1 = x_start + body_width;
  right_leg_y1 = y_start;
  right_leg_x2 = right_leg_x1 - leg_width;
  right_leg_y2 = right_leg_y1;
  line(right_leg_x1, right_leg_y1, right_leg_x2, right_leg_y2);
  right_leg_x3 = right_leg_x2;
  right_leg_y3 = right_leg_y2 - leg_height;
  line(right_leg_x2, right_leg_y2, right_leg_x3, right_leg_y3);
  
  // рисуем руки
  left_hand_x = x_start;
  hand_y = y_start - leg_height - body_height * 2 / 3;
  right_hand_x = x_start + body_width;
  line(left_hand_x, hand_y, right_hand_x, hand_y);
  left_finger_x = left_hand_x - finger_shift;
  right_finger_x = right_hand_x + finger_shift;
  lower_finger_y = hand_y + finger_shift;
  upper_finger_y = hand_y - finger_shift;
  line(left_hand_x, hand_y, left_finger_x, hand_y);
  line(left_finger_x, upper_finger_y, left_hand_x, hand_y);
  line(left_finger_x, lower_finger_y, left_hand_x, hand_y);
  line(right_hand_x, hand_y, right_finger_x, hand_y);
  line(right_finger_x, upper_finger_y, right_hand_x, hand_y);
  line(right_finger_x, lower_finger_y, right_hand_x, hand_y);
  
  // рисуем голову
  head_x_center = x_start + body_width / 2;
  head_y_center = y_start - leg_height - body_height - head_radius;
  head_diameter = head_radius * 2;
  ellipse(head_x_center, head_y_center, head_diameter, head_diameter);
  left_corn_x = head_x_center - head_radius - corn_shift;
  right_corn_x = head_x_center + head_radius + corn_shift;
  corn_y = head_y_center - head_radius - corn_shift;
  line(head_x_center, head_y_center, left_corn_x, corn_y);
  line(head_x_center, head_y_center, right_corn_x, corn_y);
  ellipse(left_corn_x, corn_y, corn_diameter, corn_diameter);
  ellipse(right_corn_x, corn_y, corn_diameter, corn_diameter);
  
  // рисуем глаз
  fill(255,255,255);
  noStroke();
  ellipse(head_x_center, head_y_center, eye_outer_diameter, eye_outer_diameter);
  fill(0);
  noStroke();
  ellipse(head_x_center, head_y_center, eye_inner_diameter, eye_inner_diameter);
pop ();  
}



function draw() {
  background (220);
  stroke (0, 0, 255);
  ground_weight = 2;
  strokeWeight (ground_weight);
  ground_y = y_ufo + ground_weight;
  line (0, ground_y, 1000, ground_y); // линия уровня земли
  if ((keyIsPressed == true) && (keyCode == UP_ARROW) && (position.y == y_ufo)) {
    time_0 = frameCount - 1;
    velocity_0 = -7;
    acceleration_0 = 0.2;
        
  }
  time_current = frameCount - time_0;

  previous_y = position.y;
  pressed_up.y = velocity_0 * time_current + acceleration_0 * time_current **2 /2;
  position.add (pressed_up);

  
  if ((previous_y < y_ufo) && (position.y == y_ufo)) {
      velocity_0 = 0;
      acceleration_0 = 0;
  }
  
  draw_ufo (position.x, position.y);

}

