function preload() {
  soundFormats('mp3', 'ogg');
  ost = loadSound('assets/beat.mp3');

}

function setup() {
  frameRate(10);
  createCanvas(800, 800);
  background(220);
  angleMode(DEGREES);
  cur_angle = 10;
  cur_shift = 50;

  ost.setVolume(0.2);
  ost.play();
  ost.loop();

}





function draw_mandala(x_centre, y_centre, n_rays, start_shift, start_rad,
  decline_rate, inner_decline_rate, angle_shift) {
  for (let i = 0; i < n_rays; i++) {
    push();
    noStroke();
    fill(int(random(255)), int(random(255)), int(random(255)));
    translate(x_centre, y_centre);
    rotate(360 / n_rays * i + angle_shift);
    current_x = start_shift;
    current_y = 0;
    current_rad = start_rad;
    while (current_rad > 1) {
      ellipse(current_x, 0, current_rad, current_rad);
      inner_rad = current_rad * inner_decline_rate;
      while (inner_rad > 1) {
        fill(int(random(255)), int(random(255)), int(random(255)));
        ellipse(current_x, 0, inner_rad, inner_rad);
        inner_rad = inner_rad * inner_decline_rate;
      }
      current_x = current_x + current_rad * 0.5 + current_rad * decline_rate * 0.8;
      current_rad = current_rad * decline_rate;
    }
    pop();
  }
}

function draw() {
  background(220);
  //scale(sin(cur_angle*3)+1.5);
  draw_mandala(380, 380, 20, cur_shift, 50, 0.83, 0.75, cur_angle);
  cur_angle = cur_angle + 0.2;
  cur_shift = int(50 * abs(sin(cur_angle * 5)));

}