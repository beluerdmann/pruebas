class Escombro {
  constructor(posX, posY, tamX, tamY) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
  }

  dibujar() {
    image (escombro, this.posX, this.posY, this.tamX, this.tamY);
  }

  mover() {
    this.posY += 2;

  if (this.posY > height) {
    this.posY = -random(200, 800);
    this.posX = random(60, 430);
  }
  }
}
