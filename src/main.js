// my custom imports
import { createPlayer } from './entities/player/player.js';
import { addPlayerControls } from './entities/player/movement.js';
import { createEnemy } from './entities/enemy/enemy.js';
import { addEnemyIa } from './entities/enemy/ia.js';

// my levels imports
import { level1 } from './levels/level1.js'

// create a scene
scene('scene1', () => {
    // player instance object
    const playerInstance = createPlayer();
    // add player movement to player instance
    addPlayerControls(playerInstance);

    // enemy instance object
    const enemyInstance = createEnemy();
    // add ia (auto control) to a enemy instance
    addEnemyIa(enemyInstance);

    // add the first level to the game
    level1();
});

// enter the scenel
go('scene1');