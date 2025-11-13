class Personaje {
  constructor() {
    this.posX = 200;
    this.posY = 331;
    this.ancho = 75;
    this.alto = 150;
    this.velX = 3;
    this.velY = 0;
    this.salto = -13;
    this.caida = 0.6;
    this.piso = false
    this.izq = false;
    this.der = false;
    this.plataforma = false;
    //this.vidas = new Vidas();
  }

  dibujar() {
    image (insQuieto, this.posX, this.posY, this.ancho, this.alto);
  }

  mover() {
    
    // Aplica la gravedad
    this.posY = this.posY + this.velY;
    this.velY = this.velY + this.caida;
    
    // Movimiento lateral
    
    if (this.izq === true) {
      this.posX = this.posX - this.velX;
    }

    if (this.der === true) {
      this.posX = this.posX + this.velX;
    }
    
    // Choque con el piso
    
    if (this.posY + this.alto >= 480) {
      this.posY = 480 - this.alto;
      this.velY = 0;
      this.piso = true;
    }
    
    // Choque con los bordes
    
    if (this.posX < 0) {
      this.posX = 0;
    } else if (this.posX > width - this.ancho) {
      this.posX = width - this.ancho;
    }
    
    if(this.plataforma = true){
      this.velY = 0;
    }
  }

   moverTeclas(tecla, presionado) {
     
     // Teclas de movimiento
    
    if (tecla === "a" || tecla === "A") {
      this.izq = presionado;
    }

    if (tecla === "d" || tecla === "D") {
      this.der = presionado;
    }

    if (tecla === " " && presionado === true && this.piso === true) {
      this.velY = this.salto;
      this.piso = false;
      salto.play();
    }
  }
  
  arribaPlataforma(plataforma){
    if(this.tamY<=plataforma.posY){
      this.plataforma = true;
    }
  }
}
