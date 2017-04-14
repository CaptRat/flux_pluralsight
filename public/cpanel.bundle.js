/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _flux = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var controlPanelDispatcher = new _flux.Dispatcher();
	
	var UPDATE_USERNAME = "UPDATE_USERNAME";
	
	var UPDATE_FONT_SIZE_PREFERENCE = 'UPDATE_FONT_SIZE_PREFERENCE';
	
	var userNameUpdateAction = function userNameUpdateAction(name) {
	  return {
	    type: 'UPDATE_USERNAME',
	    value: name
	  };
	};
	
	var fontSizePreferenceUpdateAction = function fontSizePreferenceUpdateAction(size) {
	  return {
	    type: 'UPDATE_FONT_SIZE_PREFERENCE',
	    value: size
	  };
	};
	
	document.getElementById('userNameInput').addEventListener('input', function (_ref) {
	  var target = _ref.target;
	
	  var name = target.value;
	  console.log("Dispatching...", name);
	  controlPanelDispatcher.dispatch(userNameUpdateAction(name));
	});
	
	document.forms.fontSizeForm.fontSize.forEach(function (element) {
	  element.addEventListener('change', function (_ref2) {
	    var target = _ref2.target;
	
	    controlPanelDispatcher.dispatch(fontSizePreferenceUpdateAction(target.value));
	  });
	});
	
	var UserPrefsStore = function (_Store) {
	  _inherits(UserPrefsStore, _Store);
	
	  function UserPrefsStore() {
	    _classCallCheck(this, UserPrefsStore);
	
	    return _possibleConstructorReturn(this, (UserPrefsStore.__proto__ || Object.getPrototypeOf(UserPrefsStore)).apply(this, arguments));
	  }
	
	  _createClass(UserPrefsStore, [{
	    key: 'getInitialState',
	    value: function getInitialState() {
	      return {
	        userName: "Patrick",
	        fontSize: "small"
	      };
	    }
	  }, {
	    key: '__onDispatch',
	    value: function __onDispatch(action) {
	      switch (action.type) {
	        case UPDATE_USERNAME:
	          this.__state.userName = action.value;
	          this.__emitChange();
	          break;
	        case UPDATE_FONT_SIZE_PREFERENCE:
	          this.__state.fontSize = action.value;
	          this.__emitChange();
	          break;
	      }
	    }
	  }, {
	    key: 'getUserPreferences',
	    value: function getUserPreferences() {
	      return this.__state;
	    }
	  }]);
	
	  return UserPrefsStore;
	}(_flux.Store);
	
	var userPrefsStore = new UserPrefsStore(controlPanelDispatcher);
	
	userPrefsStore.addListener(function (state) {
	  console.info("The current state is...", state);
	  render(state);
	});
	
	var render = function render(_ref3) {
	  var userName = _ref3.userName,
	      fontSize = _ref3.fontSize;
	
	  document.getElementById("userName").innerText = userName;
	  document.getElementsByClassName("container")[0].style.fontSize = fontSize === "small" ? "16px" : "24px";
	  document.forms.fontSizeForm.fontSize.value = fontSize;
	};
	
	controlPanelDispatcher.register(function (action) {
	  console.log("Recieved action...", action);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Dispatcher = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Dispatcher', {
	  enumerable: true,
	  get: function get() {
	    return _Dispatcher.Dispatcher;
	  }
	});
	
	var _Store = __webpack_require__(4);
	
	Object.defineProperty(exports, 'Store', {
	  enumerable: true,
	  get: function get() {
	    return _Store.Store;
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Dispatcher = exports.Dispatcher = function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);
	
	    this.__listeners = [];
	  }
	
	  _createClass(Dispatcher, [{
	    key: "dispatch",
	    value: function dispatch(action) {
	      this.__listeners.forEach(function (listener) {
	        return listener(action);
	      });
	    }
	  }, {
	    key: "register",
	    value: function register(listener) {
	      this.__listeners.push(listener);
	    }
	  }]);

	  return Dispatcher;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Store = exports.Store = function () {
	  function Store(dispatcher) {
	    _classCallCheck(this, Store);
	
	    this.__listeners = [];
	    this.__state = this.getInitialState();
	    dispatcher.register(this.__onDispatch.bind(this));
	  }
	
	  _createClass(Store, [{
	    key: "__onDispatch",
	    value: function __onDispatch() {
	      throw new Error("Subclasses must overide __onDispatch method of a Flux store");
	    }
	  }, {
	    key: "getInitialState",
	    value: function getInitialState() {
	      throw new Error("Subclasses must overide getInitialState method of a Flux store");
	    }
	  }, {
	    key: "addListener",
	    value: function addListener(listener) {
	      this.__listeners.push(listener);
	    }
	  }, {
	    key: "__emitChange",
	    value: function __emitChange() {
	      var _this = this;
	
	      this.__listeners.forEach(function (listener) {
	        return listener(_this.__state);
	      });
	    }
	  }]);

	  return Store;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=cpanel.bundle.js.map