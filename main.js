import { createCircle, createRect, createSquare, setPosition } from "./utils.js";
import { Shape } from "./shape.js";

const main = () => {
/*
    const sqr    = createSquare(100, 100);
    const rect   = createRect(200, 100);
    const circle = createCircle(400, 100);
    
    setPosition(sqr, 500, 150);
*/  

    const a = new Shape(100, 100);
    const b = new Shape(210, 150, 'circle');
    const c = new Shape(330, 200, 'rect');

    a.color = 'green';
    b.color = 'red';
    c.color = 'yellow';

    a.move(500, 50);    
}

main();