import { Ball } from './Ball';
import { Bar } from './Bar';
import { IElements } from './IElements';

export class Board {
  private width: number;
  private height: number;
  private playing: boolean;
  private gameOver: boolean;
  private bars: IElements[];
  private ball?: Ball;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.gameOver = false;
    this.bars = [];
  }
  getElements(): IElements[] {
    let elements = this.bars;
    if (this.ball) {
      elements.push(this.ball);
    }
    return elements;
  }

  /**
   * Getter $width
   * @return {number}
   */
  public get $width(): number {
    return this.width;
  }

  /**
   * Getter $height
   * @return {number}
   */
  public get $height(): number {
    return this.height;
  }
  public getPlaying(): boolean {
    return this.playing;
  }
  public togglePlaying(): void {
    this.playing = !this.playing;
  }

  /**
   * Getter $bars
   * @return {any[] }
   */
  public get $bars(): any[] {
    return this.bars;
  }

  /**
   * Setter $width
   * @param {number} value
   */
  public set $width(value: number) {
    this.width = value;
  }

  /**
   * Setter $height
   * @param {number} value
   */
  public set $height(value: number) {
    this.height = value;
  }

  /**
   * Setter $bars
   * @param {any[] } value
   */
  public set $bars(value: any[]) {
    this.bars = value;
  }
  setBall(ball: Ball): void {
    this.ball = ball;
  }
  getBall(): Ball | null {
    return this.ball || null;
  }
}
