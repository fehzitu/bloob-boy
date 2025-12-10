import { k } from '../../kaboomLoader.js';

// player object
export function createPlayer() {
    return k.add([
        // pos is the position where will create this object, the first is a horizontal position and the second is vertical ((0, 0) is the top left point)
        k.pos(0, 0),
        // defines a player area to check collision
        k.area(),
        // define a rectangle format
        k.rect(16, 16),
        // its a physical body thats responds to gravity
        k.body(),
        // 'player' is a tag to ref a player obj in case of have two of the same
        'player',
        // anchor defines central point of start collision box of an object
        k.anchor("center"),
        // health() defines a instance life points
        k.health(100),
        // properties can be passed as a object literals
        {
            // dead status to verify
            dead: false,
            // player speed status
            speed: 200
        },
        // opacity defines a sprite opacity
        // k.opacity(0.5),
        // color set a base color to the sprite
        k.color(BLACK)
    ]);
};