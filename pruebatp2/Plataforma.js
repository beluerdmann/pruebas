class Plataforma {
  constructor(x, y, ancho, alto, desaparece) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.activada = false;
    this.frameActivada = 0;
    this.eliminar = false;
    this.desaparece = desaparece;
  }

  activar() {
    if (this.activada === false) {
      this.activada = true;
      this.frameActivada = frameCount;
    }
  }

  actualizar() {
    if (this.desaparece === true && this.activada === true) {
      // 180 frames ~ 3 segundos
      if (frameCount - this.frameActivada > 180) {
        this.eliminar = true;
      }
    }
  }

  mostrar() {
    if (this.desaparece === true && this.activada === true) {
      let framesPasados = frameCount - this.frameActivada;
      // aviso a los 150 frames (2.5 s)
      if (framesPasados > 150) {
        fill(200, 80, 80);
      } else {
        fill(120, 90, 60);
      }
    } else {
      fill(90, 70, 50);
    }
    noStroke();
    rect(this.x, this.y, this.ancho, this.alto);
  }
}
