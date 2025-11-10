let juego;
let sobreJugar = false;
let sobreReiniciar = false;

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  background(20);
  juego.actualizar();
  juego.mostrar();

  // Botones según el estado
  if (juego.estado === "inicio") {
    dibujarBotonJugar();
  } else if (juego.estado === "perdio" || juego.estado === "gano") {
    dibujarBotonReiniciar();
  }
}

function dibujarBotonJugar() {
  let x = width / 2 - 70;
  let y = height / 2 + 50;
  let w = 140;
  let h = 45;

  // Detectar si el mouse está encima
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    sobreJugar = true;
    fill("#5b47d3");
  } else {
    sobreJugar = false;
    fill("#4030a0");
  }

  noStroke();
  rect(x, y, w, h, 10);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("JUGAR", x + w / 2, y + h / 2);
}

function dibujarBotonReiniciar() {
  let x = width / 2 - 85;
  let y = height / 2 + 50;
  let w = 170;
  let h = 45;

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    sobreReiniciar = true;
    fill("#d34747");
  } else {
    sobreReiniciar = false;
    fill("#a03030");
  }

  noStroke();
  rect(x, y, w, h, 10);

  fill(255);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("REINICIAR", x + w / 2, y + h / 2);
}

function mousePressed() {
  // Si estamos en el inicio y clickeamos sobre JUGAR
  if (juego.estado === "inicio" && sobreJugar === true) {
    juego.empezar();
  }

  // Si estamos en perder o ganar y clickeamos sobre REINICIAR
  if ((juego.estado === "perdio" || juego.estado === "gano") && sobreReiniciar === true) {
    juego.reiniciar();
  }
}

function keyPressed() {
  juego.teclaPresionada(key);
}

function keyReleased() {
  juego.teclaSoltada(key);
}
