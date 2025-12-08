import { k } from '../../kaboomLoader.js';

export function addEnemyIa(enemy, style) {
    // verify if the enemy exist
    if (!enemy.exists()) return;
    // verify ia movement style
    if (style == 'simple') {
        // make enemy move on the passed direction
        k.onUpdate(() => {
            enemy.move(enemy.dir * enemy.speed, 0);
        });
        // switch focus side after every 3 seconds
        loop(3, () => {
            enemy.dir = -enemy.dir;
            enemy.flipX = !enemy.flipX;

        });
        // switch focus side when collide with the player
        k.onCollide('enemy', 'player', (enemy) => {
            enemy.dir = -enemy.dir;
            enemy.flipX = !enemy.flipX;
        });
    };
};