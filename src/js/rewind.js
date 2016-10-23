import { Player } from './player.js'

export class Rewind {
	constructor(video) {
		this.video = video
		this.player = new Player(this.video)
		this.rewindDOM = this.createPlayerDOM()
		this.loadPlayer()
	}

	createPlayerDOM() {
		let rewind = document.createElement('section')
		rewind.className = "rewind-player"
		rewind.appendChild(this.player.playerDOM)
		return rewind
	}

	loadPlayer() {
		document.body.appendChild(this.rewindDOM)
	}
}



