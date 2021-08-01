export default class s2 extends Phaser.Scene {

	constructor() {
		super({key:'s2'});
	}

	preload() {

	}

	create() {
		
		H1 = function(){
			this.scene.switch('s2');
		}

		this.background = this.add.image(windowWidth / 2, widnowHeight / 2, 'bg');
		this.background.setDisplaySize(windowWidth, widnowHeight);
	//-settings--------------------------------------------------
		cogG = this.add.image(windowWidth / 18, widnowHeight / 9, 'cog');
		cogG.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
		cogG.setInteractive({ useHandCursor: true });
		cogG.on('pointerdown', () => this.HomeSettings());
		
		




	//-----------------------------------------------------------
		const cursors = this.input.keyboard.createCursorKeys();

	//-----scene-------------------------------------------------
	

		
	slima = this.physics.add.sprite(windowWidth / 1.5, widnowHeight / 1.5, 'slime-a')

		
	timedEvent = this.time.addEvent({
		callback: atack(),
		callbackScope: this,
		delay: time,
		loop: true
	});
	timedEvent.remove(false);
		
		


		player = this.physics.add.sprite(windowWidth / 9.9777777, widnowHeight / 3.5, 'player', 'assets/nonsprites/player/knight.png');

			slims = this.physics.add.sprite(windowWidth, widnowHeight / 4.5, 'slime-s'),

			ground = this.physics.add.sprite(windowWidth / 11, widnowHeight, 'ground');
			ground.setDisplaySize(windowWidth, widnowHeight / 5.5)
			player.setDisplaySize(225, 250)
			slims.setDisplaySize(225, 250)
			slima.setDisplaySize(13, 15)


		

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('player', { start: '0l1.png', end: '0l.png' }),
			frameRate: 10,
			repeat: 1
		});
		
		this.anims.create({
			key: 'turn',
			frames: [ { key: 'player', frame: '0m4.png' } ],
			frameRate: 20
		});
		
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('player', { start: '0r5.png', end: '0r6.png' }),
			frameRate: 10,
			repeat: 1
		});
		
		
	}
	update(){
		player.setCollideWorldBounds(true);
		slims.setCollideWorldBounds(true);
		ground.setCollideWorldBounds(true);

		player.setImmovable(false);
		slims.setImmovable(true);
		slima.setImmovable(true);
		ground.setImmovable(false)


		slims.setGravityY(300);
		player.setGravityY(1000);

			

        slima.setCollideWorldBounds(false);
        slima.setVelocityX(-200);
        slima.allowGravity = false;

		
		
		slima.setCollideWorldBounds(false);
        slima.setVelocityX(-200);
        slima.allowGravity = false;

		this.physics.add.collider(player, ground);
		this.physics.add.collider(slims, ground);
		this.physics.add.collider(slima, ground);

		this.physics.add.overlap(player, slims, H1, null, this);
		this.physics.add.collider(slima, player, H2, null, this);


		
		cursors = this.input.keyboard.createCursorKeys();

		if (cursors.left.isDown)
		{
			player.setVelocityX(-440);
	
			player.anims.play('left', true);
		}
		else if (cursors.right.isDown)
		{
			player.setVelocityX(440);
	
			player.anims.play('right', true);
		}
		else
		{
			player.setVelocityX(0);
	
			player.anims.play('turn');
		}
	
		if (cursors.up.isDown && player.body.touching.down)
		{
			player.setVelocityY(-660);
			setTimeout(() => {
				player.setVelocityY(275);

			}, 400);

		}
	}
	


	HomeSettings(){
		Syst=1;
		this.scene.switch('cog');
	}
	Mainmenu(){

	}

	BackSyst1(){

	}
	
	
}