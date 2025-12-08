// default kaboom sprites importation
const bean = loadSprite('bean', 'sprites/player.png')

// default kaboom atlas sprites importation
const player = loadSprite('player', 'sprites/player.png', {
    sliceX: 9,
    anims: {
        "idle": {
            // starts from frame 0, ends at frame 3
            from: 0,
            to: 3,
            // frame per second
            speed: 5,
            loop: true,
        },
        "run": {
            from: 4,
            to: 7,
            speed: 10,
            loop: true,
        },
        // this animation only has 1 frame
        "jump": {
            from: 4,
            to: 7
        }
    }
});


export const spriteList = {
    player
};