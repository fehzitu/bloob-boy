import { k } from '../../kaboomLoader.js';

export function addPlayerControls(player) {
    player.onUpdate(() => {
        // get player velocity
        let vel = player.vel.x;

        // set camera on player
        k.camPos(player.pos.x, player.pos.y);

        // if player is on air don't play idle animation
        if (!player.isGrounded()) return;

        // if player in on ground and "a" & "d" is released play idle animation
        if (player.isGrounded() && !k.isKeyDown('a') && !k.isKeyDown('d') && player.curAnim() !== 'idle') {
            player.play('idle');
        };
    });

    k.onKeyDown('a', () => {
        player.flipX = true;
        // move left
        player.move(-player.speed, 0);
        // run animation
        if (player.isGrounded() && player.curAnim() !== 'run') {
            player.play('run');
        };
    });

    k.onKeyDown('d', () => {
        player.flipX = false;
        // move right
        player.move(player.speed, 0);
        // run animation
        if (player.isGrounded() && player.curAnim() !== 'run') {
            player.play('run');
        };
    });

    k.onKeyDown('w', () => {
        // jump
        if (player.isGrounded()) {
            // play jump animation when "w" is pressed
            player.play('jump');
            // jump force
            player.jump(420);
        };
    });

    // play idle animation when we release "a" & "d"
    k.onKeyRelease(['a', 'd'], () => {
        if (player.isGrounded() && player.vel.x === 0) {
            player.play('idle');
        }
    });
};