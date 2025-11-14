class Juego {
  constructor() {
    this.propIniciales();
  }

  propIniciales() {
    //this.estado = "inicio";
    this.cantPlat = 40;
    this.plataformas = [];
    
    //this.cantEsc = cantidad;
    //this.escombros = [];
    
    this.fondo = new Fondo();
    
    this.personaje = new Personaje();
    
    for (let i=0; i<this.cantPlat; i++) {
      this.plataformas[i] = new Plataforma (random(30, 450), i * 130, 150, 35);
    }
  }

  iniciar() {
    this.estado = "jugando";
  }

  dibujar() {

    this.fondo.dibujarFondo();
    for (let i=0; i<this.cantPlat; i++) {
      this.plataformas[i].dibujar();
    }
    this.personaje.dibujar();
    
  }

    actualizar() {
      this.personaje.mover();
    }

    subirPlataforma() {
      this.personaje.plataforma = false
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
