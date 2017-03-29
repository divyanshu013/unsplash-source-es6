(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("unsplash-source-es6", [], factory);
	else if(typeof exports === 'object')
		exports["unsplash-source-es6"] = factory();
	else
		root["unsplash-source-es6"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnsplashSourceES6 = function () {
  function UnsplashSourceES6() {
    _classCallCheck(this, UnsplashSourceES6);

    this.url = 'https://source.unsplash.com';
  }

  // get Image by its ID


  _createClass(UnsplashSourceES6, [{
    key: 'id',
    value: function id(photoId) {
      this.photoId = photoId;

      return this;
    }

    // get image by category

  }, {
    key: 'category',
    value: function category(_category) {
      // only allowed categories are buildings, food, nature, people, technology, objects
      this.section = _category;

      return this;
    }

    // get random image from a user

  }, {
    key: 'user',
    value: function user(_user) {
      this.username = _user;

      return this;
    }

    // get a liked image from a user

  }, {
    key: 'liked',
    value: function liked(user) {
      this.username = user;
      this.likes = true;

      return this;
    }

    // get a random image from a collection

  }, {
    key: 'collection',
    value: function collection(collectionId) {
      this.collectionId = collectionId;

      return this;
    }

    // sets the photo dimension, if only one parameter is given, height is taken same as width

  }, {
    key: 'size',
    value: function size(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;

      this.dimension = {
        width: width,
        height: height
      };

      return this;
    }

    // sets the change frequency of image

  }, {
    key: 'frequency',
    value: function frequency(freq) {
      if (freq === 'daily' || freq === 'weekly') {
        this.freq = freq;
      } else {
        console.error('Unsplash allows frequency to be \'daily\' or \'weekly\' only, found ' + freq);
      }

      return this;
    }

    // adds search tags

  }, {
    key: 'search',
    value: function search(tags) {
      // using spread operator so that the API can't accidentally modify the passed array object
      if (Array.isArray(tags)) {
        this.tags = [].concat(_toConsumableArray(tags));
      } else {
        console.error('search() API expects array');
      }

      return this;
    }

    // add this.dimension (dimensions) to the url

  }, {
    key: '_addDimensions',
    value: function _addDimensions() {
      if (this.hasOwnProperty('dimension')) {
        this.url += '/' + this.dimension.width + 'x' + this.dimension.height;
      }

      return this;
    }

    // adds this.freq to the url

  }, {
    key: '_addFreq',
    value: function _addFreq() {
      if (this.freq) {
        this.url += '/' + this.freq;
      }

      return this;
    }

    // adds the tags from the array to the end of url

  }, {
    key: '_addTags',
    value: function _addTags() {
      if (this.tags) {
        this.url += '/?' + this.tags.reduce(function (all, tag) {
          return all + ',' + tag;
        });
      }

      return this;
    }

    // get the Image URL

  }, {
    key: 'fetch',
    value: function fetch() {
      if (this.photoId) {
        this.url += '/' + this.photoId;
      } else if (this.section) {
        this.url += '/category/' + this.section;
      } else if (this.username) {
        this.url += '/user/' + this.username;
        if (this.likes) {
          this.url += '/likes';
        }
      } else if (this.collectionId) {
        this.url += '/collection/' + this.collectionId;
      } else {
        this.url += '/random';
      }
      this._addDimensions();
      this._addFreq();
      this._addTags();

      return this.url;
    }
  }]);

  return UnsplashSourceES6;
}();

exports.default = UnsplashSourceES6;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=unsplash-source-es6.js.map