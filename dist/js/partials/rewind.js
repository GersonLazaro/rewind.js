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