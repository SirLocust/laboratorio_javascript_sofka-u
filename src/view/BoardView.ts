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
}
