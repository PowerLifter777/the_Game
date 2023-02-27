import { Element } from "./Element.js";
import { Game } from "./Game.js";
import { Controlls } from "./Controlls.js";
import { Counter } from "./Counter.js";

const tableWrapper = document.querySelector('#table');
const controllPanel = document.querySelector('.controlls');
const playersScore = document.querySelectorAll('.score');
const [player1, player2] = playersScore;
export const game = new Game(tableWrapper);
const tableCells = new Element('div', 'cell grid', 100);
const btn = new Element('button', 'btn btn', 3);
export const counter = new Counter(player1, player2);

tableCells.create();
tableCells.render(tableWrapper);

btn.create();
btn.render(controllPanel);

const txt = ['START Light', 'START Normal', 'START Hard'];

const controlls = new Controlls(controllPanel, txt);
controlls.setTextContent();

tableWrapper.addEventListener('click', (e) => {
    game.catchCell(e);
});

controllPanel.addEventListener('click', (e) => {
    controlls.play(e);
    counter.update(game.countWin, game.countFalse);
});