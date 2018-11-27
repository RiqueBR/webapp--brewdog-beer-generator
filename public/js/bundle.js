/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BeerDisplay = __webpack_require__(/*! ./views/beer_display_view.js */ \"./src/views/beer_display_view.js\")\nconst Beer = __webpack_require__(/*! ./models/beer.js */ \"./src/models/beer.js\")\nconst BeerFormView = __webpack_require__(/*! ./views/beer_form_view.js */ \"./src/views/beer_form_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  // console.log('Javascript loaded');\n\n  const beerFormView = document.querySelector('#beer-form')\n  const beerForm = new BeerFormView(beerFormView)\n  beerForm.bindEvents()\n\n  const beerContainer = document.querySelector('#beer-display')\n  const beerDisplay = new BeerDisplay(beerContainer)\n  beerDisplay.bindEvents();\n\n\n  const beer = new Beer();\n  beer.getData()\n  beer.bindEvents();\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload){\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function (channel, callback){\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request.js":
/*!********************************!*\
  !*** ./src/helpers/request.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function(url){\n  this.url = url;\n}\n\nRequest.prototype.get = function () {\n  return fetch(this.url).then(response => response.json())\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request.js?");

/***/ }),

/***/ "./src/models/beer.js":
/*!****************************!*\
  !*** ./src/models/beer.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst Request = __webpack_require__(/*! ../helpers/request.js */ \"./src/helpers/request.js\")\n\n\nconst Beer = function (){\n  this.data = []\n  // this.beerList = []\n}\n\nBeer.prototype.getData = function () {\n  const url = \"https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6\";\n  const request = new Request(url)\n  request.get().then((data) => {\n    this.data = data\n    // console.log(data);\n    PubSub.publish('Beer:beer-display-ready', data)\n  })\n};\n\n\nBeer.prototype.bindEvents = function () {\n  PubSub.subscribe('BeerFormView:form-submitted', (event) => {\n    const tagline = event.detail;\n    const filtered = this.data.filter(beer => beer.tagline.indexOf(tagline) !== -1);\n    PubSub.publish('Beer:beer-display-ready', filtered)\n  })\n};\n\n\n\nmodule.exports = Beer;\n\n\n//# sourceURL=webpack:///./src/models/beer.js?");

/***/ }),

/***/ "./src/views/beer_display_view.js":
/*!****************************************!*\
  !*** ./src/views/beer_display_view.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst BeerView = __webpack_require__(/*! ./beer_view.js */ \"./src/views/beer_view.js\")\n\n\nconst BeerDisplay = function (container){\n  this.container = container // takes a container due to display reasons i.e. beers will be displayed in this container.\n}\n\n\nBeerDisplay.prototype.bindEvents = function () {\n  PubSub.subscribe('Beer:beer-display-ready', (event) => {\n    const allBeers = event.detail;\n    // console.log(allBeers);\n    this.render(allBeers);\n  })\n};\n\nBeerDisplay.prototype.render = function (allBeers) {\n  this.container.innerHTML = \" \"\n  allBeers.forEach((beer) => {\n    const beerView = new BeerView(this.container, beer)\n    beerView.render();\n  })\n};\n\n\n\n\n\n\n\nmodule.exports = BeerDisplay;\n\n\n//# sourceURL=webpack:///./src/views/beer_display_view.js?");

/***/ }),

/***/ "./src/views/beer_form_view.js":
/*!*************************************!*\
  !*** ./src/views/beer_form_view.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\")\nconst BeerView = __webpack_require__(/*! ./beer_view.js */ \"./src/views/beer_view.js\")\n\n\nconst BeerFormView = function(element){\n  this.element = element\n}\n\nBeerFormView.prototype.bindEvents = function () {\n  this.element.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const tagName = event.target['beer-input'].value;\n    PubSub.publish('BeerFormView:form-submitted', tagName)\n    this.element.reset();\n  })\n};\n\n\nmodule.exports = BeerFormView;\n\n\n//# sourceURL=webpack:///./src/views/beer_form_view.js?");

/***/ }),

/***/ "./src/views/beer_view.js":
/*!********************************!*\
  !*** ./src/views/beer_view.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const BeerView = function(element, beer){\n  this.element = element;\n  this.beer = beer;\n};\n\n\nBeerView.prototype.render = function (beer) {\n\n  // creates main container for including all info in here\n  const singleContainer = document.createElement('div')\n  singleContainer.classList.add('beer-box')\n\n  // Creates content\n  // image content\n  const beerImageDiv = document.createElement('div')\n  beerImageDiv.classList.add('single-beer')\n\n  const beerImage = document.createElement('img')\n  beerImage.src = this.beer.image_url\n  beerImage.alt = this.beer.name\n  beerImage.classList.add('beer-image')\n  beerImageDiv.appendChild(beerImage)\n\n\n  // Text content\n  const beerInfo = document.createElement('div')\n  beerInfo.classList.add(\"toggle-info\")\n\n  const beerName = document.createElement('li')\n  beerName.textContent = this.beer.name\n  beerInfo.appendChild(beerName);\n\n  const descriptionClick = document.createElement('button')\n  const descriptionInfo = document.createElement('p')\n  descriptionInfo.id = `${this.beer.id}`\n  descriptionClick.textContent = \"More info\";\n  descriptionInfo.textContent = this.beer.description;\n  descriptionInfo.classList.add('hide')\n  beerInfo.appendChild(descriptionInfo)\n  beerInfo.appendChild(descriptionClick)\n\n\n  descriptionClick.addEventListener('click', (event) => {\n    console.log(descriptionInfo.classList);\n    descriptionInfo.classList.toggle('hide')\n  })\n  // wrap all info in the one div\n  singleContainer.appendChild(beerImageDiv)\n  singleContainer.appendChild(beerInfo)\n\n  // And append to its own div\n  this.element.appendChild(singleContainer)\n\n  // return singleContainer;\n}\n\nmodule.exports = BeerView;\n\n\n//# sourceURL=webpack:///./src/views/beer_view.js?");

/***/ })

/******/ });