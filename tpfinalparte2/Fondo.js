class Fondo {
  constructor() {
    this.posX = 0;
    this.posY = -2020;
  }
  
  dibujarFondo() {
    image(fondo, this.posX, this.posY);
    this.moverFondo();
  }

  moverFondo() {
    if (this.posY<0) {
      this.posY++;
    }
  }
}
