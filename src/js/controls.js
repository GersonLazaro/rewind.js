export class Controls {
	constructor(video) {
		this.video = video
        this.playButton = this.createplayButton()
		this.controlsDOM = this.createControlsDOM()
		this.addListeners()
	}

	createplayButton() {
		let button = document.createElement('button')
        if (this.video.paused) {
            button.className = 'rewind-player-play-btn rewind-play'
        } else {
            button.className = 'rewind-player-play-btn rewind-pause'
        }
		return button
	}
	createControlsDOM() {
		let controls = document.createElement('div')
        controls.className = 'rewind-controls'
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