let juego;
let fondo;
let fondoIn;
let titulo;
let jugar;
let reiniciar;
let insQuieto;
let insSalto;
let insDerecha;
let insIzquierda;
let insPerdio;
let plataforma1;
let plataforma2;
let escombro;
let salto;
let click;
let perdio;
let vidas0;
let vidas1;
let vidas2;
let vidas3;

function preload() {
  fondo = loadImage("data/fondo.jpg");
  fondoIn = loadImage("data/fondoInicio.png");
  titulo = loadImage("data/titulo.png");
  jugar = loadImage("data/jugar.png");
  reiniciar = loadImage("data/reiniciar.png");
  insQuieto = loadImage("data/insParado.png");
  insSalto = loadImage("data/insSalto.png");
  insDerecha = loadImage("data/insDerecha.png");
  insIzquierda = loadImage("data/insIzquierda.png");
  insPerdio = loadImage("data/insPerdio.png");
  plataforma1 = loadImage("data/plataforma.png");
  plataforma2 = loadImage("data/plataformaR.png");
  escombro = loadImage("data/escombro.png");
  vidas0 = loadImage("data/vidas0.png");
  vidas1 = loadImage("data/vidas1.png");
  vidas2 = loadImage("data/vidas2.png");
  vidas3 = loadImage("data/vidas3.png");
  salto = loadSound("data/salto.mp3");
  click = loadSound("data/click.mp3");
  perdio = loadSound("data/perdio.mp3");
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}


function draw() {
  background (0);
  juego.dibujar();
}

function mousePressed() {
  juego.iniciar();
}

function keyPressed() {
  juego.teclaPresionada(key);
}

function keyReleased() {
  juego.teclaSoltada(key);
}
