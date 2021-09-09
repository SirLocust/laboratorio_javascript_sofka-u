import { Bar } from './Bar';
import { Board } from './Board';
import { IElements } from './IElements';

export class Ball implements IElements {
  posY: number;
  posX: number;

  kindFigure: string;
  radius: number;
  board: Board;
  speedX: number;
  speedY: number;
  width: number;
  height: number;
  direction: number;
  bounceAngle: number;
  maxBounceAngle: number;
  constructor(
    posY: number,
    posX: number,

    radius: number,
    board: Board
  ) {
    this.posY = posY;
    this.posX = posX;

    this.radius = radius;
    this.board = board;
    this.kindFigure = 'circle';
    this.speedX = 2;
    this.speedY = 0;
    this.direction = 1;
    this.bounceAngle = 0;
    this.maxBounceAngle = Math.PI / 12;
    this.width = this.radius * 2;
    this.height = this.radius * 2;
  }

  move(): void {
    this.posX += this.speedX * this.direction;
    this.posY += this.speedY;
  }

  getKindFigure(): string {
    return this.kindFigure;
  }
  resetPosAndAngle(): void {
    this.posX = 130;
    this.posY = 50;
    this.bounceAngle = 0;
    this.speedX = 2;
    this.speedY = 0;
  }
  collision(bar: Bar): any {
    let cal = bar.height / 2;
    let relative_intersect_y = bar.posY + cal - this.posY;

    let normalized_intersect_y = relative_intersect_y / (bar.height / 2);

    this.bounceAngle = normalized_intersect_y * this.maxBounceAngle;

    this.speedY = 3 * -Math.sin(this.bounceAngle);
    this.speedX = 3 * Math.cos(this.bounceAngle);

    if (this.posX > this.board.$width / 2) this.direction = -1;
    else this.direction = 1;
  }
}
