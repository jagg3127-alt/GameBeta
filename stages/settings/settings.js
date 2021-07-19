///<reference path="../titlescreen.js" />
///<reference path="../s1.js" />
///<reference path="../s2.js" />
///<reference path="../s3.js" />
///<reference path="../s4.js" />
///<reference path="../boss.js" />

export default class cog extends Phaser.Scene {

	constructor() {
		super({key:'cog'});
	}


    create() {
		
		this.cogbg = this.add.image(windowWidth / 2.05, widnowHeight / 2, 'cogbg');
		this.cogbg.setDisplaySize(windowWidth * 1.05, widnowHeight * 1.2);

		SoundSyst = this.add.text(windowWidth / 2.4, widnowHeight / 1.5, 'Audio');
		SoundSyst.setDisplaySize(windowWidth / 5 , widnowHeight / 6.5);
		SoundSyst.setColor("#330026");
		SoundSyst.setInteractive({ useHandCursor: true });
		SoundSyst.on('pointerdown', () => this.SoundSyst());

		backS = this.add.image(windowWidth / 1.1, widnowHeight / 9, 'back');
		backS.setDisplaySize(windowWidth / 6.5 , widnowHeight / 6.5);
		backS.setInteractive({ useHandCursor: true });
		backS.on('pointerdown', () => this.BackSyst());
    }
	SoundSyst(){
		
	}

	BackSyst(){
		if (Syst = 0) {
			this.scene.start('titlescene');
		} 
		else if (Syst = 1) {
			this.scene.start('s1');
		}
		 else if (Syst = 2) {
			this.scene.start('s2');
		}
		 else if (Syst = 3) {
			this.scene.start('s3');
		}
		 else if (Syst = 4) {
			this.scene.start('s4');
		}
		 else if (Syst = 5) {
			this.scene.start('boss');
		}
	}
}