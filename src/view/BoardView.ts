import { IElements } from './../model/IElements';
import { Board } from '../model/Board';
import { Bar } from '../model/Bar';
import { Ball } from '../model/Ball';

export class BoardView {
  private canvas: HTMLCanvasElement;
  private board: Board;
  private contextCanvas: CanvasRenderingContext2D | null;
  constructor(canvas: HTMLCanvasElement, board: Board) {
    this.canvas = canvas;
    this.board = board;
    this.canvas.width = board.$width;
    this.canvas.height = board.$height;
    this.contextCanvas = canvas.getContext('2d');
  }

  drawAll(): void {
    for (const element of this.board.getElements()) {
      if (this.contextCanvas) {
        this.draw(this.contextCanvas, element);
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D, element: IElements): void {
    switch (element.getKindFigure()) {
      case 'rectangle':
        const rectangle = element as Bar;
        ctx.fillRect(
          rectangle.posX,
          rectangle.posY,
          rectangle.width,
          rectangle.height
        );
        break;
      case 'circle':
        const circle = element as Ball;
        ctx.beginPath();
        ctx.arc(circle.posX, circle.posY, circle.radius, 0, 7);
        ctx.fill();
        ctx.closePath();
        break;
    }
  }

  isBallOutWall(ball: Ball | null) {
    if (!ball) {
      return;
    }

    if (ball.posX > this.board.$width || ball.posX < 0) {
      // this.board.tog glePlaying();
      ball.resetPosAndAngle();
    }
    if (ball.posY > this.board.$height || ball.posY < 0) {
      // this.board.tog glePlaying();
      ball.resetPosAndAngle();
    }
  }
  hit(a: IElements, b: IElements): boolean {
    //Revisa si a colisiona con b
    let hit = false;
    if (a instanceof Ball) {
      return false;
    }
    //Colisiones horizontales
    if (b.posX + b.width >= a.posX && b.posX < a.posX + a.width) {
      //Colisiona verticales
      if (b.posY + b.height >= a.posY && b.posY < a.posY + a.height) hit = true;
    }

    //Colisión de a con b
    if (b.posX <= a.posX && b.posX + b.width >= a.posX + a.width) {
      if (b.posY <= a.posY && b.posY + b.height >= a.posY + a.height)
        hit = true;
    }

    //Colision b con a
    if (a.posX <= b.posX && a.posX + a.width >= b.posX + b.width) {
      //Colisiona verticales
      if (a.posY <= b.posY && a.posY + a.height >= b.posY + b.height)
        hit = true;
    }

    return hit;
  }

  checkCollisions(): void {
    for (const bar of this.board.$bars) {
      if (this.hit(bar, this.board.getBall() as IElements)) {
        this.board.getBall()?.collision(bar);
      }
    }
  }

  play() {
    if (this.board.getPlaying()) {
      this.clean();
      this.drawAll();
      this.isBallOutWall(this.board.getBall());
      this.checkCollisions();
      this.board.getBall()?.move();
    }
  }

  clean(): void {
    this.contextCanvas?.clearRect(0, 0, this.board.$width, this.board.$height);
  }
}
