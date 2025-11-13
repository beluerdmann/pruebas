class Plataforma {
  constructor(posX, posY, tamX, tamY) {
  this.posX = posX;
  this.posY = posY;
  this.tamX = tamX;
  this.tamY = tamY;
  //this.encima = false;
  }
  
  dibujar() {
    image (plataforma1, this.posX, this.posY, this.tamX, this.tamY);
  
  }
  
  derrumbar() {
  
  }
  
  actualizar() {
  
  }
  
}
