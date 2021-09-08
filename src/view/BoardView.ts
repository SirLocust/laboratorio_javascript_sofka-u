import { IElements } from './../model/IElements';
import { Board } from '../model/Board';

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
        console.log('hola');
        ctx.fillRect(element.posX, element.posY, element.width, element.height);
        break;
    }
  }
}
