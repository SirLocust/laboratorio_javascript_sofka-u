import { IElements } from './IElements';
import { Board } from './Board';

export class Bar implements IElements {
  posX: number;
  posY: number;
  width: number;
  height: number;
  private board: Board;
  kindFigure: string;

  constructor(
    $posX: number,
    $posY: number,
    $width: number,
    $height: number,
    $board: Board
  ) {
    this.posX = $posX;
    this.posY = $posY;
    this.width = $width;
    this.height = $height;
    this.board = $board;
    this.board.$bars.push(this);
    this.kindFigure = 'rectangle';
  }

  getKindFigure(): string {
    return this.kindFigure;
  }
}
