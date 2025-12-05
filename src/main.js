// my custom imports
import { k } from './kaboomLoader.js';
import { movementSpeed } from './kaboomLoader.js';
import { createPlayer } from './entities/player/player.js';
import { addPlayerControls } from './entities/player/movement.js';
import { createEnemy } from './entities/enemy/enemy.js';
import { createFloor } from './objects/floor.js';

// player instance object
const playerInstance = createPlayer();
addPlayerControls(playerInstance, movementSpeed);

// enemy instance object
const enemyInstance = createEnemy();

// floor instance object
const floorInstance = createFloor();