export default class s2 extends Phaser.Scene {

	constructor() {
		super({key:'s2'});
	}

	preload() {
	}

	create() {
		var pause = false;
		const cursors = this.input.keyboard.createCursorKeys();

	//-----scene-------------------------------------------------
		this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'bg');
		this.background.setDisplaySize(windowWidth, widnowHeight);

		
		
		slima = this.physics.add.sprite(windowWidth / 1.5, widnowHeight / 1.5, 'slime-a')
 



			player = this.physics.add.sprite(windowWidth / 9.9777777, widnowHeight / 3.5, 'player'),
			slims = this.physics.add.sprite(windowWidth, widnowHeight / 4.5, 'slime-s'),

			ground = this.physics.add.sprite(windowWidth / 11, widnowHeight, 'ground');
			ground.setDisplaySize(windowWidth, widnowHeight / 5.5)
			player.setDisplaySize(225, 250)
			slims.setDisplaySize(225, 250)
			slima.setDisplaySize(13, 15)
	}

}