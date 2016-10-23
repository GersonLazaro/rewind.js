import { Controls } from './controls.js'

export class Player {
    constructor(video) {
        this.video = video
        this.controls = new Controls(this.video)
        this.playerDOM = this.createPlayerDOM()
    }

    createPlayerDOM() {
        let player = document.createElement('div')
        player.appendChild(this.controls.controlsDOM) 
        return player
    }
}