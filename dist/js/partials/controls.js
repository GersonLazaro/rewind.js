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