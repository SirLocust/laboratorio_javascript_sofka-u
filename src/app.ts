import { BoardController } from './controller/BoardController';
import { Ball } from './model/Ball';
import { Bar } from './model/Bar';
import { Board } from './model/Board';
import './style.css';
import { BoardView } from './view/BoardView';

const board = new Board(260, 150);
const bar = new Bar(20, 60, 4, 30, board);
const bar2 = new Bar(240, 60, 4, 30, board);

const ball = new Ball(75, 130, 3, board);
board.setBall(ball);
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const boardView = new BoardView(canvas, board);
const boardController = new BoardController(board, bar, bar2, boardView);
const main = (): void => {
  boardController.init();

  window.requestAnimationFrame(main);
};
window.requestAnimationFrame(main);
