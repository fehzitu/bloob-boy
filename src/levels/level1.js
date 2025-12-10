import { k } from '../kaboomLoader.js';
import { spriteList } from '../sprites/spriteList.js'

export function level1() {
    return k.addLevel([
        "x                                                                        =",    // 1
        "x                                                                        =",    // 2
        "x                                                                        =",    // 3
        "x                                                                        =",    // 4
        "=                 $  $                           $                       =",    // 5
        "=                ========                      ====            $         =",    // 6
        "=    $ $      ====                         $  ==           $  =======    =",    // 7
        "===============           $    $      $  ======      ==   =====          =",    // 8
        "x                        ========   ======                               =",    // 9
        "x                                                                        =",    // 10
        "x                                                                        =",    // 11
        "x                                                                 = $  $ =",    // 12
        "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx========"     // 13
    ], {
        // define the size of tile block
        tileWidth: 64,
        tileHeight: 64,
        // define what each symbol means, by a function returning a component list (what will be passed to add())
        tiles: {
            '=': () => [
                // sprite defines the sprite for this object
                k.sprite(spriteList.grass),
                // defines an area to check collision
                k.area(),
                // its a physical body thats responds to gravity
                k.body({ isStatic: true })
            ],
            '$': () => [
                // sprite defines the sprite for this object
                k.sprite(spriteList.apple),
                // defines an area to check collision
                k.area(),
                // its a physical body thats responds to gravity
                k.body(),
                // tag for implement some things
                'apple'
            ],
            'x': () => [
                // sprite defines the sprite for this object
                k.sprite(spriteList.grass),
                // defines an area to check collision
                k.area(),
                // its a physical body thats responds to gravity
                k.body({ isStatic: true }),
                // opacity defines a sprite opacity
                k.opacity(0),
                // tag for implement some things
                'levelVoid'
            ]
        }
    });
};