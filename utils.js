
const createElement = () => {
    let element = document.createElement('div');
    document.body.appendChild(element);

    return element;    
}

const setPosition = (elem, x, y) => {
    elem.style.position = 'absolute';
    elem.style.left     = x + 'px';
    elem.style.top      = y + 'px';    
}

const createSquare = (x, y) => {
    const elem = createElement();
    setPosition(elem, x, y);
    elem.style.width    = '100px';
    elem.style.height   = '100px';
    elem.style.backgroundColor = 'blue';
    return elem;
}

const createRect = (x, y) => {
    const elem = createElement();
    setPosition(elem, x, y);
    elem.style.width    = '200px';
    elem.style.height   = '100px';
    elem.style.backgroundColor = 'red';
    return elem;
}

const createCircle = (x, y) => {
    const elem = createElement();
    setPosition(elem, x, y);
    elem.style.width    = '100px';
    elem.style.height   = '100px';
    elem.style.borderRadius = '100px';
    elem.style.backgroundColor = 'green';
    return elem;
}

export { createElement, createSquare, createRect, createCircle, setPosition }