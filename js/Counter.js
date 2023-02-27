export class Counter {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.playerCounter = null;
        this.computerCounter = null;
    }

    update(player, computer) {

        if (player > this.playerCounter && player < 51) {
            this.playerCounter = player;
            this.player.textContent = this.playerCounter;
        } else if (computer > this.computerCounter && computer < 51) {
            this.computer.textContent = this.computerCounter + 1;
            this.computerCounter = computer;
        } else if (player > 50) {
            this.player.textContent = 'YOU WIN!';
            this.computer.textContent = 'COMPUTER LUSE!';
        } else if (computer > 50) {
            this.computer.textContent = 'COMPUTER WIN!';
            this.player.textContent = 'YOU LUSE!';
        }
    }

    clear() {
        this.playerCounter = 0;
        this.computerCounter = 0;
        this.player.textContent = '0';
        this.computer.textContent = '0';
    }
}
