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
    this.caida = 0.5;
    this.vidas = 3;
    this.posXV = 15;
    this.posYV = 0;
    this.tamV = 100;
    this.piso = false;
    this.yaSalto = false;
    this.izq = false;
    this.der = false;
    this.plataforma = false;
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

  dibujarVidas() {
    if (this.vidas === 3) {
      image(vidas3, this.posXV, this.posYV, this.tamV, this.tamV/2);
    } else if (this.vidas === 2) {
      image(vidas2, this.posXV, this.posYV, this.tamV, this.tamV/2);
    } else if (this.vidas === 1) {
      image(vidas1, this.posXV, this.posYV, this.tamV, this.tamV/2);
    } else {
      image(vidas0, this.posXV, this.posYV, this.tamV, this.tamV/2);
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
    } else {
      this.piso = false;
    }

    // Choque con los bordes

    if (this.posX < 0) {
      this.posX = 0;
    } else if (this.posX > width - this.ancho) {
      this.posX = width - this.ancho;
    }
  }

  subiendo() {
    let subiendo = this.velY < 0
      return subiendo;
  }

  chocarEscombro(escombro) {
    let chocar = this.posX + this.ancho - 20 > escombro.posX && this.posX + 20 < escombro.posX + escombro.tamX &&
      this.posY + this.alto - 20 > escombro.posY + 20 && this.posY < escombro.posY + escombro.tamY;

    return chocar;
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
      this.yaSalto = true;
      this.piso = false;
      this.plataforma = false;
      salto.play();
    }
  }

  arribaPlataforma(plataforma) {
    if (this.posY + this.alto >= plataforma.posY &&
      this.posY + this.alto<= plataforma.posY + 10 &&
      this.posX + this.ancho/2 > plataforma.posX &&
      this.posX + this.ancho/5 < plataforma.posX + plataforma.tamX) {

      this.posY = plataforma.posY - this.alto + 8;
      this.velY = 0;
      this.plataforma = true;
      this.piso = false;
    }
  }
}
