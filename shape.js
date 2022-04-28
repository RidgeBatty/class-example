import { createElement, setPosition } from './utils.js';

class Shape {
    constructor(x, y, form) {
        this.elem = createElement();
        setPosition(this.elem, x, y);

        this.elem.style.backgroundColor = 'navy';
        this.elem.style.width = '100px';
        this.elem.style.height = '100px';

        if (form == 'rect') {
            this.elem.style.width = '200px';
        }

        if (form == 'circle') {
            this.elem.style.borderRadius = '100px';
        }
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    set color(value) {
        this.elem.style.backgroundColor = value;
    }

    set x(value) {
        this.elem.style.left = value + 'px';
    }    

    set y(value) {
        this.elem.style.top = value + 'px';
    }    

    get x() {
        return parseInt(this.elem.style.left, 10);
    }

    get y() {
        return parseInt(this.elem.style.top, 10);
    }
}

export { Shape }