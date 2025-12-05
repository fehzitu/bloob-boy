import { k } from '../kaboomLoader.js';

// floor object
export function createFloor() {
    return k.add([
        // rect is to make a rectangle
        rect(width() + 8, 32),
        // on pos the first num is to horizontal, and the second is to vertical
        pos(- 4, height() - 32),
        // simple outline border
        outline(4),
        area(),
        // color is only used if the object don't have sprite
        color(127, 200, 255),
        body({ isStatic: true })
    ]);
};