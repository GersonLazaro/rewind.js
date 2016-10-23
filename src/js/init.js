import { Rewind } from './rewind.js'


function replacePlayers() {
    let videos = document.querySelectorAll('video')

    for(let i = 0; i < videos.length; i++) {
        new Rewind(videos[i])
    }
}

window.addEventListener("load", replacePlayers)
