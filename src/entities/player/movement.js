import { k } from '../../kaboomLoader.js';

export function addPlayerControls(player) {
    player.onUpdate(() => {
        // set camera on player
        k.camPos(player.pos.x, player.pos.y);
    });

    k.onKeyDown('a', () => {
        // move left
        player.move(-player.speed, 0);
    });

    k.onKeyDown('d', () => {
        // move right
        player.move(player.speed, 0);
    });

    k.onKeyDown('w', () => {
        // jump
        if (player.isGrounded()) {
            // jump force
            player.jump(420);
        };
    });
};