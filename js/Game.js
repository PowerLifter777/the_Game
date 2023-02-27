import { counter } from "./script.js";
export class Game {
    constructor(field) {
        this.field = field;
        this.playing = null;
        this.redTimeout = null;
        this.random = 0;
        this.colorCells = [];
        this.countFalse = 0;
        this.countWin = 0;
    }

    start(delay) {
        this.random = this.randomizer();

        if (!!this.colorCells.length) {
            while (this.checkDublicat()) this.random = this.randomizer();
        }

        this.colorCells.push(this.random);
        this.paint('blue');

        this.redTimeout = setTimeout(() => this.paint('red'), delay);
        this.playing = setTimeout(() => this.start(delay), delay);
    }

    stop() {
        clearInterval(this.playing);
        clearTimeout(this.redTimeout);
        this.playing = false;
        this.colorCells = [];
    }

    clear() {
        [...this.field.children].forEach(el => el.style.backgroundColor = 'white');
        this.countFalse = 0;
        this.countWin = 0;
        counter.clear();
    }

    paint(color) {
        if (color === 'red') {
            this.countFalse++;
            counter.update(this.countWin, this.countFalse);
        } else if (color === 'green') {
            this.countWin++;
            counter.update(this.countWin, this.countFalse);
        }

        this.getWinner();
        this.field.children[this.random].style.backgroundColor = color;
        clearTimeout(this.redTimeout);
    }

    randomizer() {
        return Math.floor(Math.random() * 100);
    }

    checkDublicat() {
        return this.colorCells.some(cell => cell === this.random);
    }

    getWinner() {
        if (this.countWin > 50) {
            this.stop();
            this.colorCells = [];
            return 'player';
        } else if (this.countFalse > 50) {
            this.stop();
            return 'computer';
        }
        return false;
    }

    catchCell(e) {
        const color = e.target.style.backgroundColor;
        color === 'blue' && this.paint('green');
    }
}