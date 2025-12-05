// default kaboom import
import kaboom from 'kaboom';

// game movement speed
export const movementSpeed = 200;

// kaboom() is to initialize an new canvas
export const k = kaboom({
	// default screen scale
	scale: 1.5,
	// width & height default canvas props
	width: 640,
	height: 384
	// background defines a background color & need's to be 6 digits hexadecimal color ex: #123456 (this is the background of the game canvas, not the html tag)
	// background: '#FFFFFF'
});

// set the game gravity
k.setGravity(1500);