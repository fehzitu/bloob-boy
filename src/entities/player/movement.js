import { k } from '../../kaboomLoader.js';

export function addPlayerControls(player, speed) {
    // set camera on player
    player.onUpdate(() => {
        camPos(player.pos.x + (parseInt(player.width / 2)), center().y);
    });

    // move left
    k.onKeyDown("a", () => {
        player.move(-speed, 0);
    });

    // move right
    k.onKeyDown("d", () => {
        player.move(speed, 0);
    });

    // jump
    k.onKeyDown("w", () => {
        if (player.isGrounded()) {
            player.jump(420);
        }
    });
};