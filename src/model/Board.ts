import { IElements } from './IElements';

export class Board {
  private width: number;
  private height: number;
  private playing: boolean;
  private gameOver: boolean;
  private bars: IElements[];
  private ball?: IElements;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.gameOver = false;
    this.bars = [];
  }
  getElements(): IElements[] {
    let elements = this.bars;
    // elements.push(this.ball);
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
}
