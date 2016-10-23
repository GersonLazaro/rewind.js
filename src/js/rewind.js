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
		rewind.style.width = this.video.clientWidth + 'px'
		rewind.style.height = this.video.clientHeight + 'px'
		return rewind
	}

	loadPlayer() {
		document.body.replaceChild(this.rewindDOM, this.video)
		this.rewindDOM.appendChild(this.video)
	}
}



