import { game } from "./script.js";

export class Controlls {
    constructor(buttons, txt) {
        this.buttons = [...buttons.children];
        this.count = 0;
        this.txt = txt;
    }

    play(e) {
        try {
            this.buttons.forEach((btn, i) => {
                if (btn === e.target) {
                    if (!!game.playing && !this.count) {
                        game.stop();
                        btn.textContent = 'CLEAR';
                        this.count++;
                    } else if (this.count === 1 || game.getWinner()) {
                        game.clear();
                        btn.textContent = this.txt[i];
                        this.count = 0;
                        setTimeout(() => this.removeDisable(), 0);
                    } else {
                        game.start(2000 - 450 * (i + 1));
                        btn.textContent = 'STOP';
                        this.count = 0;
                    }
                } else {
                    this.disable(btn);
                }
            })
        } catch (err) {
            if (!this.buttons || !this.txt) {
                console.warn(`${err}: Вы не передали массив элементов`);
            } else {
                console.warn(err);
            }
        }
    }

    disable(el) {
        el.setAttribute('disabled', true);
    }

    removeDisable() {
        this.buttons.forEach(el => el.removeAttribute('disabled'));
    }

    setTextContent() {
        this.buttons.forEach((btn, i) => btn.textContent = this.txt[i]);
    }
}