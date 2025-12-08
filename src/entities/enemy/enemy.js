import { k } from '../../kaboomLoader.js';
import { spriteList } from '../../sprites/spriteList.js';

// enemy object
export function createEnemy() {
    return k.add([
        // pos is the position where will create this object, the first is a horizontal position and the second is vertical ((0, 0) is the top left point)
        k.pos(width() - 64, 0),
        // sprite defines the sprite for this object
        k.sprite(spriteList.player),
        // defines a enemy area to check collision
        k.area(),
        // its a physical body thats responds to gravity
        k.body(),
        // 'enemy' is a tag to ref a enemy obj in case of have two of the same
        'enemy',
        // anchor defines central point of start collision box of an object
        anchor("center"),
        // health() defines a instance life points
        health(100),
        // properties can be passed as a object literals
        {
            dir: 1,
            // dead status to verify
            dead: false,
            // enemy speed status
            speed: 100
        },
        // opacity defines a sprite opacity
        opacity(0.8),
        // color set a base color to the sprite
        color(BLACK)
    ]);
};