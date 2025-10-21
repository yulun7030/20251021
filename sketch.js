let rc;
let cnv;
let roughness = 4;
let strokeWidth = 4;
function setup() {
  cnv = createCanvas(600, 450);
  rc = rough.canvas(cnv.elt);
  noLoop();
  drawScene();
}

function drawScene() {
  background(255);

  let margin = floor(random(70, 100));
  let x = margin+10;
  let y = margin;
  let w = width - margin * 2;
  let h = height - margin * 2;

  // --- pot ---
  let potCount = floor(random(3, 7)); 
  let potY = y + h; 

  for (let i = 0; i < potCount; i++) {
    let potW = random(w / (potCount * 1.8), w / (potCount * 1.2));
    let potH = random(20, 90);
    let px = x + i * (w / potCount) + random(2, 10);
    let py = potY - potH;

		let potColor = color(random(90, 160),random(40, 80),random(20, 40));
   
		rc.rectangle(px, py, potW, potH, {
      // stroke: 'none',
      fill: potColor,
      fillStyle: 'solid',
      roughness: roughness,
      strokeWidth: strokeWidth,
      disableMultiStroke: true,
    });

    // --- grass ---
    let plantW = random(4, potW * 0.4);

    let maxPlantH = py - y; 
    let plantH = random(40, min(120, maxPlantH));

    let stemX = px + potW / 2 - plantW / 2; 
    let stemTop = py - plantH;

    let grassCount = floor(random(5, 10));
    for (let i = 0; i < grassCount; i++) {
      let plantColor = color(random(40, 100), random(120, 200), random(40, 120));

      rc.line(stemX + i * random( - 5, 5), stemTop + i * random(5, 10), stemX, stemTop + plantH, {
        strokeWidth: strokeWidth,
        stroke: plantColor,
        roughness: roughness,
        disableMultiStroke: true,
        // bowing: -6,
      });

    }

    // --- flower ---
    let flowerCount = floor(random(1, 2));
    for (let f = 0; f < flowerCount; f++) {
      let flowerSize = random(16, 24);
      let fx = stemX + random(- flowerSize / 2, flowerSize / 2); 
      let fy = stemTop;
      let flowerColor = color(random(180, 255), random(80, 180), random(80, 200))
      rc.circle(fx, fy, flowerSize, {
        stroke: 'none',
        fill: flowerColor,
        fillStyle: 'solid',
        roughness: 1.2,
      });
    }
  }
}

function mousePressed() {
  drawScene();
}