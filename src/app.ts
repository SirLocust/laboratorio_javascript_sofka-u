import { Ball } from './model/Ball';
import { Bar } from './model/Bar';
import { Board } from './model/Board';
import './style.css';
import { BoardView } from './view/BoardView';

document.addEventListener('keydown', (ev: KeyboardEvent) => {
  if (ev.key === 'ArrowDown') {
    ev.preventDefault();
    bar.moveUp();
  }
  if (ev.key === 'ArrowUp') {
    ev.preventDefault();
    bar.moveDown();
  }

  if (ev.key === 'w') {
    ev.preventDefault();
    bar2.moveUp();
  }
  if (ev.key === 's') {
    ev.preventDefault();
    bar2.moveDown();
  }
});
const board = new Board(260, 150);
const bar = new Bar(20, 50, 4, 30, board);
const bar2 = new Bar(240, 50, 4, 30, board);

const ball = new Ball(50, 130, 3, board);
board.setBall(ball);
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const boardView = new BoardView(canvas, board);

const main = (): void => {
  boardView.play();

  window.requestAnimationFrame(main);
};
window.requestAnimationFrame(main);
