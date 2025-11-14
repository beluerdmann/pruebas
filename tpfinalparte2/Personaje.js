class Personaje {
  constructor() {
    this.posX = 200;
    this.posY = 331;
    this.ancho = 75;
    this.anchoS = 125;
    this.alto = 150;
    this.velX = 4;
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
    if (this.velY < 0) {
      image(insSalto, this.posX - 25, this.posY, this.anchoS, this.alto);
    } else if (this.velY > 0 && this.piso === false && this.plataforma === false) {
      image(insSalto, this.posX - 25, this.posY, this.anchoS, this.alto);
    } else if (this.der === true) {
      image(insDerecha, this.posX, this.posY, this.ancho, this.alto);
    } else if (this.izq === true) {
      image(insIzquierda, this.posX, this.posY, this.ancho, this.alto);
    } else {
      image(insQuieto, this.posX, this.posY, this.ancho, this.alto);
    }
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

    if (this.plataforma === true) {
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

    if (tecla === " " && presionado === true && (this.piso === true || this.plataforma === true)) {
      this.velY = this.salto;
      this.piso = false;
      this.plataforma = false;
      salto.play();
    }
  }

  arribaPlataforma(plataforma) {
    if (this.posY + this.alto >= plataforma.posY &&
      this.posY + this.alto <= plataforma.posY + 10 &&
      this.posX + this.ancho/2 > plataforma.posX &&
      this.posX + this.ancho/5 < plataforma.posX + plataforma.tamX) {

      this.posY = plataforma.posY - this.alto + 8;
      this.velY = 0;
      this.plataforma = true;
    }
  }
}
