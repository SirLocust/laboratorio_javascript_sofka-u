import { Board } from './model/Board';
import './style.css';
import { BoardView } from './view/BoardView';

const main = (): void => {
  const board = new Board(260, 150);
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const boardView = new BoardView(canvas, board);
};
window.addEventListener('load', main);
