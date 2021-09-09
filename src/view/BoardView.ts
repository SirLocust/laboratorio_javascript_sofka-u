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

  play() {
    this.clean();
    this.drawAll();
  }

  clean(): void {
    this.contextCanvas?.clearRect(0, 0, this.board.$width, this.board.$height);
  }
}
