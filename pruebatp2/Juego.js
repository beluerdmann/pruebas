
class Juego {
  constructor() {
    this.reiniciar();
  }

  reiniciar() {
    this.estado = "inicio";
    this.pj = new Personaje(width / 2, height - 60);
    this.plataformas = [];
    this.escombros = [];
    this.metaY = -1500;
    this.ultimoEscombro = frameCount;
    this.sueloY = height - 20;

    // generar plataformas hasta acercarnos a la salida
    let prevX = width / 2 - 80;
    let baseY = this.sueloY;

    for (let i = 1; i < 40; i = i + 1) { // pongo 40 por las dudas, pero cortamos antes
      let py = baseY - i * 110;
      // si esta plataforma quedaría arriba de la salida, cortamos
      if (py < this.metaY + 60) {
        break;
      }

      let maxDx = 260;
      let px = prevX + random(-maxDx, maxDx);

      if (px < 20) {
        px = 20;
      }
      if (px > width - 180) {
        px = width - 180;
      }

      this.plataformas.push(new Plataforma(px, py, 160, 15, true));
      prevX = px;
    }
  }

  empezar() {
    this.estado = "jugando";
  }

  actualizar() {
    if (this.estado === "jugando") {
      this.pj.actualizar(this.plataformas);

      // plataformas
      for (let i = this.plataformas.length - 1; i >= 0; i = i - 1) {
        let p = this.plataformas[i];
        p.actualizar();
        if (p.eliminar === true) {
          this.plataformas.splice(i, 1);
        }
      }

      // escombros desde arriba de la cámara
      if (frameCount - this.ultimoEscombro > 70) {
        let ex = random(30, width - 30);
        let camY = this.pj.getCamY();
        let ey = camY - 80;
        this.escombros.push(new Escombro(ex, ey));
        this.ultimoEscombro = frameCount;
      }

      for (let i = this.escombros.length - 1; i >= 0; i = i - 1) {
        let e = this.escombros[i];
        e.actualizar();

        if (e.colisionaCon(this.pj) === true) {
          this.pj.recibirGolpe();
          this.escombros.splice(i, 1);
        } else if (e.y > this.pj.getCamY() + height + 200) {
          this.escombros.splice(i, 1);
        }
      }

      // condiciones
      if (this.pj.tocoPiso === true) {
        this.estado = "perdio";
      } else if (this.pj.vidas <= 0) {
        this.estado = "perdio";
      } else if (this.pj.pos.y > this.pj.getCamY() + height + 40) {
        this.estado = "perdio";
      } else if (this.pj.pos.y < this.metaY) {
        this.estado = "gano";
      }
    }
  }

  mostrar() {
    push();
    let camY = this.pj.getCamY();
    translate(0, -camY);

    // fondo
    noStroke();
    fill(45, 35, 35);
    rect(0, camY - 600, width, height + 2000);

    // piso
    fill(60, 45, 35);
    rect(0, height - 20, width, 40);

    // plataformas
    for (let i = 0; i < this.plataformas.length; i = i + 1) {
      this.plataformas[i].mostrar();
    }

    // escombros
    for (let i = 0; i < this.escombros.length; i = i + 1) {
      this.escombros[i].mostrar();
    }

    // pj
    this.pj.mostrar();

    // meta
    stroke(255, 230, 0);
    line(0, this.metaY, width, this.metaY);
    noStroke();
    fill(255, 230, 0);
    text("SALIDA", 10, this.metaY - 10);

    pop();

    // HUD
    fill(255);
    textAlign(LEFT, TOP);
    textSize(14);
    text("Vidas: " + this.pj.vidas, 10, 10);
    text("Altura: " + int(-this.pj.pos.y), 10, 28);

    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "perdio") {
      this.pantallaPerdio();
    } else if (this.estado === "gano") {
      this.pantallaGano();
    }
  }

  pantallaInicio() {
    fill(0, 150);
    rect(0, 0, width, height);
    fill(255);
    textAlign(CENTER);
    textSize(24);
    text("COLAPSO II", width / 2, height / 2 - 100);
    textSize(14);
    text("Usá A / D para moverte y ESPACIO para saltar.", width / 2, height / 2 - 70);
    text("Las plataformas desaparecen a los 3 segundos.", width / 2, height / 2 - 50);
    text("Si después de saltar volvés al piso, perdés.", width / 2, height / 2 - 30);
    text("Hacé click en 'JUGAR' para empezar.", width / 2, height / 2 - 10);
    textAlign(LEFT);
  }

  pantallaPerdio() {
    fill(0, 150);
    rect(0, 0, width, height);
    fill(255, 80, 80);
    textAlign(CENTER);
    textSize(24);
    text("DERROTA", width / 2, height / 2 - 60);
    textSize(14);
    text("Caíste al piso o perdiste todas las vidas.", width / 2, height / 2 - 30);
    text("Hacé click en 'REINICIAR' para volver a jugar.", width / 2, height / 2 - 10);
    textAlign(LEFT);
  }

  pantallaGano() {
    fill(0, 150);
    rect(0, 0, width, height);
    fill(130, 255, 130);
    textAlign(CENTER);
    textSize(24);
    text("ESCAPASTE", width / 2, height / 2 - 60);
    textSize(14);
    text("Hacé click en 'REINICIAR' para jugar de nuevo.", width / 2, height / 2 - 30);
    textAlign(LEFT);
  }

  teclaPresionada(k) {
    if (this.estado === "jugando") {
      this.pj.teclaPresionada(k);
    }
  }

  teclaSoltada(k) {
    if (this.estado === "jugando") {
      this.pj.teclaSoltada(k);
    }
  }
}
