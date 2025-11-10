class Escombro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 3;
    this.tam = 25;
  }

  actualizar() {
    this.y = this.y + this.vy;
  }

  mostrar() {
    push();
    rectMode(CENTER);
    fill(140);
    stroke(60);
    rect(this.x, this.y, this.tam, this.tam);
    pop();
  }

  colisionaCon(p) {
    if (
      this.x - this.tam / 2 < p.pos.x + p.w / 2 &&
      this.x + this.tam / 2 > p.pos.x - p.w / 2 &&
      this.y - this.tam / 2 < p.pos.y + p.h / 2 &&
      this.y + this.tam / 2 > p.pos.y - p.h / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}
