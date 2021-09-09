import { Bar } from '../model/Bar';
import { Board } from '../model/Board';
import { BoardView } from '../view/BoardView';

export class BoardController {
  board: Board;
  barOne: Bar;
  barTwo: Bar;
  boardView: BoardView;

  constructor(board: Board, barOne: Bar, barTwo: Bar, boardView: BoardView) {
    this.board = board;
    this.barOne = barOne;
    this.barTwo = barTwo;
    this.boardView = boardView;
    this.listenerKey();
  }
  init(): void {
    this.boardView.play();
  }
  listenerKey(): void {
    document.addEventListener('keydown', (ev: KeyboardEvent) => {
      console.log(ev.code);
      if (ev.key === 'ArrowDown') {
        ev.preventDefault();
        this.barOne.moveDown();
      }
      if (ev.key === 'ArrowUp') {
        ev.preventDefault();
        this.barOne.moveUp();
      }

      if (ev.key === 'w') {
        ev.preventDefault();
        this.barTwo.moveUp();
      }
      if (ev.key === 's') {
        ev.preventDefault();
        this.barTwo.moveDown();
      }
      if (ev.key === ' ') {
        ev.preventDefault();
        this.board.togglePlaying();
      }
    });
  }
}
