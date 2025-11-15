class Escombro {
  constructor(posX, posY, tamX, tamY) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
    this.activa = true;
  }

  dibujar() {
    image (escombro, this.posX, this.posY, this.tamX, this.tamY);
  }

  mover() {
    this.posY += 2;

    if (this.posY > height) {
      this.posY = random(-800, -200);
      this.posX = random(60, 430);
      this.activa = true;
    }
  }

  desactivarEscombro() {
    this.activa = false;
  }
}
