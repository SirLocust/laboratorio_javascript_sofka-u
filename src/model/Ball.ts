import { Board } from './Board';
import { IElements } from './IElements';

export class Ball implements IElements {
  posY: number;
  posX: number;

  kindFigure: string;
  radius: number;
  Board: Board;
  speedX: number;
  speedY: number;
  constructor(
    posY: number,
    posX: number,

    radius: number,
    Board: Board
  ) {
    this.posY = posY;
    this.posX = posX;

    this.radius = radius;
    this.Board = Board;
    this.kindFigure = 'circle';
    this.speedX = 0;
    this.speedY = 3;
  }

  getKindFigure(): string {
    return this.kindFigure;
  }
}
