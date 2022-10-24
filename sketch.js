var song;
var slider;
var button;
var mgr;

//var affirmations
var affirmations = [
  "i am in the right place at the right time.",
  "what is mine will find me.",
  "i can go with the flow.",
  "the best is coming to me.",
  "the more i let go, the higher i rise.",
  "i trust my own process.",
  "i am relaxed and centered.",
  "i am now creating my life as i want it.",
  "i am the creator of my life.",
  "divine love & light flows through me.",
  "everything good is coming to me easily.",
  "i receive the blessings of this universe.",
  "i am willing to be happy and successful.",
  "there is plenty for all of us.",
  "i am stronger than my mind.",
  "the earth is always watching over me.",
  "my dreams are at my fingertips.",
  "i am a powerful, loving & creative being.",
];
var index = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //setup scene manager
  mgr = new SceneManager();
  mgr.addScene(Scene0);
  mgr.addScene(Scene1);
  mgr.addScene(Scene2);
  mgr.showNextScene();

  //setup gradient background
  background(255);
  noStroke();
  rectMode(CENTER);
  pixelDensity(3);
  rect_dims = [80, 450];
  n_patches = 5;
  rect_locations_top = [];
  rect_locations_bottom = [];
  m = 30;

  //scene1 colours
  colors = [
    [100, 87, 166],
    [157, 172, 255],
    [118, 229, 252],
    [75, 192, 217],
  ];

  colors2 = [
    [75, 192, 217],
    [118, 229, 252],
    [157, 172, 255],
    [100, 87, 166],
  ];

  //scene2 colours
  colors3 = [
    [249, 219, 189],
    [252, 161, 125],
    [218, 98, 125],
    [154, 52, 142],
  ];

  colors4 = [
    [249, 219, 189],
    [241, 135, 1],
    [252, 161, 125],
    [252, 161, 125],
  ];

  //scene0 colours
  colors5 = [
    [109, 97, 243],
    [104, 157, 241],
    [243, 189, 178],
    [178, 170, 219],
    [247, 206, 140],
  ];

  colors6 = [
    [104, 157, 241],
    [161, 103, 234],
    [224, 120, 214],
    [252, 166, 181],
    [247, 206, 140],
  ];

  for (i = 0; i < n_patches; i++) {
    rect_locations_top.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) + m,
          (width / n_patches) * (i + 1) + 100
        ),
      ],
      [random(-m, m), random(height - m, height + m)],
    ]);
    rect_locations_bottom.push([
      [
        random((width / n_patches) * i - m, (width / n_patches) * i + m),
        random(
          (width / n_patches) * (i + 1) - m,
          (width / n_patches) * (i + 1) + m
        ),
      ],
      [
        random(height / 2 + 50, height / 2 + 100),
        random(height - m, height + m),
      ],
    ]);
  }

  //setup affirmation text
  textSize(50);
  textFont("Georgia");
  textAlign(CENTER);

  //setup sound
  song = loadSound("meditationsound.mp3");
  slider = createSlider(0, 1, 0.5, 0.01);
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

//play & pause button sound
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}

function draw() {
  song.setVolume(slider.value());

  mgr.draw();
}

function mousePressed() {
  mgr.handleEvent("mousePressed");
}

function keyPressed() {
  // You can optionaly handle the key press at global level...
  switch (key) {
    case "1":
      mgr.showScene(Scene1);
      break;
    case "2":
      mgr.showScene(Scene2);
      break;
    case "3":
      mgr.showScene(Scene3);
      break;
  }
  // ... then dispatch via the SceneManager.
  mgr.handleEvent("keyPressed");
}

//welcome page
function Scene0() {
  this.enter = function () {
    print("ENTER");
  };

  this.setup = function () {
    print("SETUP");
  };

  this.draw = function () {
    // print("DRAW");
    for (j = 0; j < 30; j++) {
      for (k = 0; k < n_patches; k++) {
        draw_rect(
          colors5[k % colors.length],
          rect_locations_top[k][0],
          rect_locations_top[k][1]
        );
        if (random() < 0.75) {
          draw_rect(
            colors6[k % colors.length],
            rect_locations_bottom[k][0],
            rect_locations_bottom[k][1]
          );
        }
      }
    }

    //to stop animation
    // noLoop();

    //welcome page: reground
    //reground.
    push();
    textSize(100);
    textStyle(BOLDITALIC);
    fill(255, 255, 255);
    text("reground.", width / 2, height / 2);
    pop();

    //press any key to
    push();
    textSize(35);
    textStyle(ITALIC);
    fill(255, 255, 255, 60);
    text("(press any key to)", width / 2, height * 0.41);
    pop();
  };

  function draw_rect(color, x, y) {
    r = random();
    if (r < 0.5) {
      blendMode(HARD_LIGHT);
    } else {
      blendMode(BLEND);
    }
    fill(color[0], color[1], color[2], random(0, 6));
    rect(
      random(x[0], x[1]),
      random(y[0], y[1]),
      random(rect_dims[0], rect_dims[1]),
      random(rect_dims[0], rect_dims[1])
    );
  }

  this.keyPressed = function () {
    print("KEYPRESSED");
    this.sceneManager.showNextScene();
    clear();
  };
}

//gradient blue background
function Scene1() {
  this.enter = function () {
    print("ENTER");
  };

  this.setup = function () {
    print("SETUP");
  };

  this.draw = function () {
    for (j = 0; j < 30; j++) {
      for (k = 0; k < n_patches; k++) {
        draw_rect(
          colors[k % colors.length],
          rect_locations_top[k][0],
          rect_locations_top[k][1]
        );
        if (random() < 0.75) {
          draw_rect(
            colors2[k % colors.length],
            rect_locations_bottom[k][0],
            rect_locations_bottom[k][1]
          );
        }
      }
    }

    //to stop animation
    // noLoop();

    //draw affirmation text
    fill(255);
    textStyle(ITALIC);
    text(affirmations[index], width / 2, height / 2);

    //click to affirm text
    push();
    textSize(20);
    textStyle(ITALIC);
    fill(255, 255, 255, 80);
    text("(click -> affirm)", width / 2, height * 0.85);
    pop();

    //press key to change scenery text
    push();
    textSize(20);
    textStyle(ITALIC);
    fill(255, 255, 255, 80);
    text("(press key -> change scenery)", width / 2, height * 0.87);
    pop();
  };

  function draw_rect(color, x, y) {
    r = random();
    if (r < 0.5) {
      blendMode(HARD_LIGHT);
    } else {
      blendMode(BLEND);
    }
    fill(color[0], color[1], color[2], random(0, 6));
    rect(
      random(x[0], x[1]),
      random(y[0], y[1]),
      random(rect_dims[0], rect_dims[1]),
      random(rect_dims[0], rect_dims[1])
    );
  }

  this.keyPressed = function () {
    print("KEYPRESSED");
    this.sceneManager.showNextScene();
    clear();
  };

  this.mousePressed = function () {
    print("MOUSEPRESSED");
    index = floor(random(affirmations.length));

    console.log(index);

    if (index == affirmations.length) {
      index = 0;
    }
    clear();
  };
}

//gradient background vibrant
function Scene2() {
  this.enter = function () {
    // print("ENTER");
  };

  this.setup = function () {
    // print("SETUP");
  };

  this.draw = function () {
    for (j = 0; j < 10; j++) {
      // draw_rect([255,0,110], [0,width/2], [0,height])
      draw_rect([131, 56, 236], [width / 2, width], [0, height]);
      draw_rect([251, 86, 7], [width / 2, width], [0, height / 3]);
      draw_rect([255, 190, 11], [0, width / 2], [0, height / 2]);

      for (k = 0; k < n_patches; k++) {
        draw_rect(
          colors3[k % colors.length],
          rect_locations_top[k][0],
          rect_locations_top[k][1]
        );
        if (random() < 0.75) {
          draw_rect(
            colors4[k % colors.length],
            rect_locations_bottom[k][0],
            rect_locations_bottom[k][1]
          );
        }
      }
    }
    // // to stop animation
    // noLoop();

    //draw affirmation text
    fill(255);
    textStyle(ITALIC);
    text(affirmations[index], width / 2, height / 2);

    //click to affirm text
    push();
    textSize(20);
    textStyle(ITALIC);
    fill(255, 255, 255, 40);
    text("(click -> affirm)", width / 2, height * 0.85);
    pop();

    //press key to change scenery text
    push();
    textSize(20);
    textStyle(ITALIC);
    fill(255, 255, 255, 40);
    text("(press key -> change scenery)", width / 2, height * 0.87);
    pop();
  };

  function draw_rect(color, x, y) {
    r = random();
    if (r < 0.5) {
      blendMode(HARD_LIGHT);
    } else {
      blendMode(BLEND);
    }
    fill(color[0], color[1], color[2], random(0, 6));
    rect(
      random(x[0], x[1]),
      random(y[0], y[1]),
      random(rect_dims[0], rect_dims[1]),
      random(rect_dims[0], rect_dims[1])
    );
  }

  this.keyPressed = function () {
    print("KEYPRESSED");
    this.sceneManager.showNextScene();
    clear();
  };

  this.mousePressed = function () {
    print("MOUSEPRESSED");
    index = floor(random(affirmations.length));

    console.log(index);

    if (index == affirmations.length) {
      index = 0;
    }
    clear();
  };

  //resize canvas for full screen
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
}
