export class Controls {
	constructor(video) {
		this.video = video
		this.playButton = this.createplayButton()
		this.controlsDOM = this.createControlsDOM()
		this.addListeners()
	}

	createplayButton() {
		let button = document.createElement('button')
			//button.innerHTML = '<span ></span>'
		button.className = "rewind-player-play-btn rewind-play"
		return button
	}
	createControlsDOM() {
		let controls = document.createElement('div')
		controls.appendChild(this.playButton)
		return controls
	}



	playOrPause() {
		if (this.video.paused) {
			this.video.play()
            this.replaceClass(this.playButton, 'rewind-pause', 'rewind-play')
		} else {
            this.video.pause()
            this.replaceClass(this.playButton, 'rewind-play', 'rewind-pause')
		}
	}

	replaceClass(element, newClass, oldClass) {
		if (element.classList) {
			element.classList.remove(oldClass)
		} else {
			element.className = element.className.replace(new RegExp('(^|\\b)' + oldClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
		}

		if (element.classList)
			element.classList.add(newClass)
		else
			element.className += ' ' + newClass
	}

	addListeners() {
		console.log(this.video)
		this.playButton.addEventListener('click', (e) => this.playOrPause())
	}
}