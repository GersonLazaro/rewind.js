export class Controls {
    constructor() {
        this.video = video
        this.buttonPlay = this.createButtonPlay()
        this.controlsDOM = this.createControlsDOM()
    }

    createButtonPlay() {
        let button = document.createElement('button')
        button.innerHTML = "\ea1c"
        button.className = "rewind-player-play-btn"
        return button
    }
    createControlsDOM() {
        let controls = document.createElement('div')
        controls.appendChild(this.buttonPlay)
        return controls
    }

    addListeners() {
        
    }
}