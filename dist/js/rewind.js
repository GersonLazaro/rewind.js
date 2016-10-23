(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = exports.Controls = function () {
    function Controls() {
        _classCallCheck(this, Controls);

        this.video = video;
        this.buttonPlay = this.createButtonPlay();
        this.controlsDOM = this.createControlsDOM();
    }

    _createClass(Controls, [{
        key: "createButtonPlay",
        value: function createButtonPlay() {
            var button = document.createElement('button');
            button.innerHTML = "\ea1c";
            button.className = "rewind-player-play-btn";
            return button;
        }
    }, {
        key: "createControlsDOM",
        value: function createControlsDOM() {
            var controls = document.createElement('div');
            controls.appendChild(this.buttonPlay);
            return controls;
        }
    }, {
        key: "addListeners",
        value: function addListeners() {}
    }]);

    return Controls;
}();
},{}],2:[function(require,module,exports){
'use strict';

var _rewind = require('./rewind.js');

function replacePlayers() {
    var videos = document.querySelectorAll('video');

    for (var i = 0; i < videos.length; i++) {
        new _rewind.Rewind(videos[i]);
    }
}

window.addEventListener("load", replacePlayers);
},{"./rewind.js":4}],3:[function(require,module,exports){
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
            player.appendChild(this.controls.controlsDOM);
            return player;
        }
    }]);

    return Player;
}();
},{"./controls.js":1}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Rewind = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('./player.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rewind = exports.Rewind = function () {
	function Rewind(video) {
		_classCallCheck(this, Rewind);

		this.video = video;
		this.player = new _player.Player(this.video);
		this.rewindDOM = this.createPlayerDOM();
		this.loadPlayer();
	}

	_createClass(Rewind, [{
		key: 'createPlayerDOM',
		value: function createPlayerDOM() {
			var rewind = document.createElement('section');
			rewind.className = "rewind-player";
			rewind.appendChild(this.player.playerDOM);
			return rewind;
		}
	}, {
		key: 'loadPlayer',
		value: function loadPlayer() {
			document.body.appendChild(this.rewindDOM);
		}
	}]);

	return Rewind;
}();
},{"./player.js":3}]},{},[2]);
