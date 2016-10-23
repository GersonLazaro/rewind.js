'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controls = require('./controls.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = exports.Player = function () {
    function Player(video) {
        _classCallCheck(this, Player);

        this.video = video;
        this.controls = new _controls.Controls(this.video);
        this.playerDOM = this.createPlayerDOM();
    }

    _createClass(Player, [{
        key: 'createPlayerDOM',
        value: function createPlayerDOM() {
            var player = document.createElement('div');
            player.className = 'rewind-player-embedded';
            player.appendChild(this.controls.controlsDOM);
            return player;
        }
    }]);

    return Player;
}();