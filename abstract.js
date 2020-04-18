function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(random(250), random(250), random(250));
  some_figures(400, 400, 75, 75, 50)

}

function some_figures(border_x, border_y, size_x, size_y, n_tops) {

  for (let c = 0; c < n_tops; c = c + 1) {

    //Что рисуем? 
    draw_type = int(random(6));

    push();
    strokeWeight(random(2));
    fill(int(random(255)), int(random(255)), int(random(255)));

    switch (draw_type) {
      case 0:
        start_x = random(border_x);
        start_y = random(border_y);
        point(start_x, start_y);
        break;
      case 1:
        start_x = random(border_x);
        start_y = random(border_y);
        finish_x = random(border_x);
        finish_y = random(border_y);
        line(start_x, start_y, finish_x, finish_y);
        break;
      case 2:
        rectMode(CORNER);
        start_x = random(border_x - size_x);
        start_y = random(border_y - size_y);
        side_x = int(random(size_x));
        side_y = int(random(size_y));
        rect(start_x, start_y, side_x, side_y);
        break;
      case 3:
        start_x = int(random(size_x * 0.5, border_x - size_x * 0.5));
        start_y = int(random(size_y * 0.5, border_y - size_y * 0.5));
        side_x = int(random(size_x));
        side_y = int(random(size_y));
        ellipse(start_x, start_y, side_x, side_y);
        break;
      case 4:
        start_x = random(border_x - size_x);
        start_y = random(border_y - size_y);
        finish_x = random(start_x, border_x);
        finish_y = random(start_y, border_y);
        x_1 = random(start_x, finish_x);
        y_1 = random(start_y, finish_y);
        x_2 = random(start_x, finish_x);
        y_2 = random(start_y, finish_y);
        x_3 = random(start_x, finish_x);
        y_3 = random(start_y, finish_y);
        triangle(x_1, y_1, x_2, y_2, x_3, y_3);
        break;
      case 5:
        start_x = int(random(size_x * 0.5, border_x - size_x * 0.5));
        start_y = int(random(size_y * 0.5, border_y - size_y * 0.5));
        side_x = int(random(size_x));
        side_y = int(random(size_y));
        start_angle = random(360);
        finish_angle = start_angle + random(360);
        arc(start_x, start_y, side_x, side_y, start_angle, finish_angle);
        break;
        pop();
    }

  }
}

function draw() {

}