class Juego {
  constructor() {
    this.propIniciales();
  }

  propIniciales() {
    //this.estado = "inicio";
    this.personaje = new Personaje();
    this.fondo = new Fondo();
    this.plataforma = new Plataforma(width/2, height-140, 150, 35);
    //this.cantEsc = cantidad;
    //this.cantPlat = cantidad;
    //this.plataformas = [];
    //this.escombros = [];
  }

  iniciar() {
    this.estado = "jugando";
  }

  dibujar() {

    this.fondo.dibujarFondo();
    this.plataforma.dibujar();
    this.personaje.dibujar();
  }

  actualizar() {
    this.personaje.mover();
  }
  
  subirPlataforma() {
    this.personaje.arribaPlataforma(this.plataforma);
  }

  teclaPresionada(tecla) {
    this.personaje.moverTeclas(tecla, true);
  }

  teclaSoltada(tecla) {
    this.personaje.moverTeclas(tecla, false);
  }
}
