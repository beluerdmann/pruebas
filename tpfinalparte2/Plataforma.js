class Plataforma {
  constructor(posX, posY, tamX, tamY) {
    this.posX = posX;
    this.posY = posY;
    this.tamX = tamX;
    this.tamY = tamY;
  }

  dibujar() {
    image (plataforma, this.posX, this.posY, this.tamX, this.tamY);
  }
}
