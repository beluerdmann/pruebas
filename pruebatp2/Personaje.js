class Personaje {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.w = 30;
    this.h = 45;
    this.enSuelo = false;
    this.movIzq = false;
    this.movDer = false;
    this.vidas = 3;
    this.tocoPiso = false;
    this.yaSalto = false;
  }

  actualizar(plataformas) {
    let speed = 3.5;

    if (this.movIzq === true) {
      this.vel.x = -speed;
    } else if (this.movDer === true) {
      this.vel.x = speed;
    } else {
      this.vel.x = 0;
    }

    this.vel.y = this.vel.y + 0.35;
    this.pos.add(this.vel);
    this.enSuelo = false;

    // plataformas
    for (let i = 0; i < plataformas.length; i = i + 1) {
      let p = plataformas[i];

      if (this.pos.x + this.w / 2 > p.x && this.pos.x - this.w / 2 < p.x + p.ancho) {
        if (this.vel.y >= 0 &&
            this.pos.y + this.h / 2 > p.y &&
            this.pos.y + this.h / 2 < p.y + p.alto + 8) {
          this.pos.y = p.y - this.h / 2;
          this.vel.y = 0;
          this.enSuelo = true;
          p.activar();
        }
      }
    }

    // piso
    let pisoY = height - 20;
    if (this.pos.y + this.h / 2 >= pisoY) {
      this.pos.y = pisoY - this.h / 2;
      this.vel.y = 0;
      this.enSuelo = true;
      if (this.yaSalto === true) {
        this.tocoPiso = true;
      }
    }

    // bordes
    if (this.pos.x < this.w / 2) {
      this.pos.x = this.w / 2;
    } else if (this.pos.x > width - this.w / 2) {
      this.pos.x = width - this.w / 2;
    }
  }

  mostrar() {
    push();
    rectMode(CENTER);
    fill(200, 220, 255);
    stroke(0);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    pop();
  }

  saltar() {
    if (this.enSuelo === true) {
      this.vel.y = -8.5;
      this.enSuelo = false;
      this.yaSalto = true;
    }
  }

  teclaPresionada(k) {
    if (k === "a" || k === "A") {
      this.movIzq = true;
    }
    if (k === "d" || k === "D") {
      this.movDer = true;
    }
    if (k === " ") {
      this.saltar();
    }
  }

  teclaSoltada(k) {
    if (k === "a" || k === "A") {
      this.movIzq = false;
    }
    if (k === "d" || k === "D") {
      this.movDer = false;
    }
  }

  recibirGolpe() {
    this.vidas = this.vidas - 1;
    this.vel.y = -4;
  }

  getCamY() {
    let valor = this.pos.y - height / 2;
    if (valor < 0) {
      return valor;
    } else {
      return 0;
    }
  }
}
