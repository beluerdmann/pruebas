class Juego {
  constructor() {
    this.propIniciales();
  }

  propIniciales() {
    this.estado = "inicio";
    this.cantPlat = 16;
    this.plataformas = [];
    this.cantEsc = 5;
    this.escombros = [];
    this.fondo = new Fondo();
    this.personaje = new Personaje();
    for (let i=0; i<this.cantPlat; i++) {
      this.plataformas[i] = new Plataforma (random(90, 390), 350 + i * -140, 175, 40);
    }
    for (let i=0; i<this.cantEsc; i++) {
      this.escombros[i]= new Escombro (40 + i * 100 + random(-30, 30), -200 * i + random(-100, 0), 45, 38);
    }
  }

  iniciar() {
    this.estado = "jugando";
  }

  dibujar() {
    if (this.estado ==="inicio") {
      image(fondoIn, 0, 0, width, height);
      image(titulo, width/2 - 175, 80, 350, 80);
      image(jugar, 245, 350, 150, 50);
    }
    if (this.estado === "jugando") {
      this.fondo.dibujarFondo();

      for (let i=0; i<this.cantPlat; i++) {
        this.plataformas[i].dibujar();
      }

      this.actualizar();
      this.subirPlataforma();
      this.personaje.dibujar();
      this.personaje.dibujarVidas();
      
      for (let i=0; i<this.cantEsc; i++) {
        this.escombros[i].dibujar();
      }

      if (this.personaje.piso === true && this.personaje.yaSalto === true) {
        this.estado = "perdio"
      }
    }
    if (this.estado === "perdio") {
      background (255, 0, 0);
      image(insPerdio, width/2 - 150, height/2 - 150, 300, 300);
      perdio.amp(0.2);
      perdio.play();
    }
  }

  actualizar() {
    this.personaje.mover();
    for (let i = 0; i < this.escombros.length; i++) {
      this.escombros[i].mover();
    }

    if (this.personaje.subiendo() && this.personaje.posY < 150) {
      this.personaje.posY = 150;
      this.fondo.posY += 7;
      for (let i = 0; i < this.cantPlat; i++) {
        this.plataformas[i].posY += 7;
      }
      for (let i = 0; i < this.cantEsc; i++) {
        this.escombros[i].posY += 7;
      }
    }
  }

  subirPlataforma() {
    this.personaje.plataforma = false;
    for (let i = 0; i < this.cantPlat; i++) {
      this.personaje.arribaPlataforma(this.plataformas[i]);
    }
  }

  teclaPresionada(tecla) {
    this.personaje.moverTeclas(tecla, true);
  }

  teclaSoltada(tecla) {
    this.personaje.moverTeclas(tecla, false);
  }
}
