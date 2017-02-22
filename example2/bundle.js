/*! this file is create! */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "body{\r\n    background-color: brown;\r\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by yuan on 2/21/2017.
 */
__webpack_require__(0);
__webpack_require__(1);
document.write('example 2');

/***/ })
/******/ ]);