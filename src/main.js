// use after to import itens and implements using "k."
// import { k } from './kaboomLoader.js';
import { createPlayer } from './entities/player/player.js';
import { addPlayerControls } from './entities/player/movement.js';
import { createEnemy } from './entities/enemy/enemy.js';
import { addEnemyIa } from './entities/enemy/ia.js';
import { createFloor } from './objects/floor.js';

// player instance object
const playerInstance = createPlayer();
// add player movement to player instance
addPlayerControls(playerInstance);

// enemy instance object
const enemyInstance = createEnemy();
// add ia (auto control) to a enemy instance
addEnemyIa(enemyInstance, 'simple', playerInstance);

// floor instance object
const floorInstance = createFloor();