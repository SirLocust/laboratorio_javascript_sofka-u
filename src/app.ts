import { Bar } from './model/Bar';
import { Board } from './model/Board';
import './style.css';
import { BoardView } from './view/BoardView';

const main = (): void => {
  document.addEventListener('keydown', (ev: KeyboardEvent) => {
    if (ev.key === 'ArrowDown') {
      bar.moveDown();
    }
    if (ev.key === 'ArrowUp') {
      bar.moveUp();
    }
  });
  const board = new Board(260, 150);
  const bar = new Bar(20, 50, 20, 50, board);
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const boardView = new BoardView(canvas, board);
  boardView.drawAll();
};
window.addEventListener('load', main);
