'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = exports.Controls = function () {
	function Controls(video) {
		_classCallCheck(this, Controls);

		this.video = video;
		this.playButton = this.createplayButton();
		this.controlsDOM = this.createControlsDOM();
		this.addListeners();
	}

	_createClass(Controls, [{
		key: 'createplayButton',
		value: function createplayButton() {
			var button = document.createElement('button');
			if (this.video.paused) {
				button.className = 'rewind-player-play-btn rewind-play';
			} else {
				button.className = 'rewind-player-play-btn rewind-pause';
			}
			return button;
		}
	}, {
		key: 'createControlsDOM',
		value: function createControlsDOM() {
			var controls = document.createElement('div');
			controls.className = 'rewind-controls';
			controls.appendChild(this.playButton);
			return controls;
		}
	}, {
		key: 'playOrPause',
		value: function playOrPause() {
			if (this.video.paused) {
				this.video.play();
				this.replaceClass(this.playButton, 'rewind-pause', 'rewind-play');
			} else {
				this.video.pause();
				this.replaceClass(this.playButton, 'rewind-play', 'rewind-pause');
			}
		}
	}, {
		key: 'replaceClass',
		value: function replaceClass(element, newClass, oldClass) {
			if (element.classList) {
				element.classList.remove(oldClass);
			} else {
				element.className = element.className.replace(new RegExp('(^|\\b)' + oldClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}

			if (element.classList) element.classList.add(newClass);else element.className += ' ' + newClass;
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {
			var _this = this;

			console.log(this.video);
			this.playButton.addEventListener('click', function (e) {
				return _this.playOrPause();
			});
		}
	}]);

	return Controls;
}();