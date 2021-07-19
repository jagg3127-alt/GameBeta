export default class titlescene extends Phaser.Scene {

	constructor() {
		super({key:'titlescene'});
	}


	create() {
		this.titleback = this.add.image(windowWidth / 2, widnowHeight / 2, 'titleback');
		this.titleback.setDisplaySize(windowWidth, widnowHeight);
	
		this.logo = this.add.image(windowWidth / 1.8, widnowHeight / 3.5, 'logo');
		this.logo.setDisplaySize(windowWidth / 1.5 , widnowHeight / 1.5);

		playb = this.add.image(windowWidth / 6.3, widnowHeight / 1.3, 'play');
		playb.setDisplaySize(windowWidth / 5 , widnowHeight / 4);
		playb.setInteractive({ useHandCursor: true });
		playb.on('pointerdown', () => this.playb());

		helpG = this.add.image(windowWidth / 1.2, widnowHeight / 1.3, 'help');
		helpG.setDisplaySize(windowWidth / 5 , widnowHeight / 5);
		helpG.setInteractive({ useHandCursor: true });
		helpG.on('pointerdown', () => this.help());

		cogG = this.add.image(windowWidth / 18, widnowHeight / 9, 'cog');
		cogG.setDisplaySize(windowWidth / 7 , widnowHeight / 7);
		cogG.setInteractive({ useHandCursor: true });
		cogG.on('pointerdown', () => this.HomeSettings());

		TextM = this.add.text(windowWidth / 2.4, widnowHeight / 1.5, 'Music in settings');
		TextM.setDisplaySize(windowWidth / 5 , widnowHeight / 6.5);

	}
	update(){
		
	}
	
	HomeSettings(){
		this.scene.switch('cog');
		
	}
	
	playb() {
		this.scene.switch('s1');
	}

	help() {
		this.scene.switch('help');
	}
}