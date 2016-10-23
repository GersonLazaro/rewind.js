'use strict';

var _rewind = require('./rewind.js');

function replacePlayers() {
    var videos = document.querySelectorAll('video');

    for (var i = 0; i < videos.length; i++) {
        new _rewind.Rewind(videos[i]);
    }
}

window.addEventListener("load", replacePlayers);