export class Element {
    constructor(element, className = '', amount = 1, textContent = '') {
        this.element = element;
        this.className = className;
        this.textContent = textContent;
        this.amount = amount;
        this.node = [];
    }

    create() {
        this.node = Array(this.amount).fill(1).map(_ => {
            const el = document.createElement(`${this.element}`);
            el.textContent = this.textContent;
            return el;
        });
        const arr = this.node;

        if (!!arr.length && arr.length > 1) {
            arr.forEach((el, i) => el.className = `${this.className}_${i + 1}`);
        } else {
            arr.forEach(el => el.className = `${this.className}`);
        }
    }

    render(parent) {
        try {
            this.node.forEach(el => parent.append(el));
        } catch (err) {
            console.warn(`${err}: Сначала создайте элемент!`)
        }
    }
}