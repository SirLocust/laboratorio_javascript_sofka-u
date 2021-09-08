import { IElements } from './IElements';
import { Board } from './Board';

export class Bar implements IElements {
  posX: number;
  posY: number;
  width: number;
  height: number;
  private board: Board;
  kindFigure: string;
  private speed: number;
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
    this.speed = 10;
  }

  getKindFigure(): string {
    return this.kindFigure;
  }
  moveDown(): void {
    this.posX += this.speed;
  }
  moveUp(): void {
    this.posX -= this.speed;
  }
}
