/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0px;
}
body {
  background-color: rgb(249, 245, 238);
  min-height: 100vh;
  line-height: 1.5;
}

#overlay {
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 2;
  background-color: rgb(249, 245, 238);
  opacity: 70%;
}

#winMessage.hidden {
  display: none;
}

.hidden {
  display: none;
}

#winMessage {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  padding: 1rem 2rem;
  background-color: rgb(249, 245, 238);
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

#playAgain {
  padding: 0.5rem 1rem;
}

#popup {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: rgb(249, 245, 238);
  width: 150px;
  height: 250px;
  z-index: 3;
}

h2 {
  text-align: center;
}

header > h1 {
  padding: 2rem;
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
}
#boards {
  display: flex;
  gap: 2rem;
}
#p1Board,
#p2Board,
#placeShipsBoard {
  width: 300px;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

#popup {
  width: fit-content;
  height: fit-content;
}

#currentShipHeader {
  margin-top: 10px;
}

#placeShipsBoard {
  margin: 1rem;
}

.boardColumn {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.s,
.h,
.m,
.e {
  border: 1px solid black;
  height: 100%;
  margin: 1px;
}
.h,
.m {
  pointer-events: none;
}
.e,
.s {
  cursor: pointer;
}

.h {
  background-color: rgb(220, 9, 9);
}
.m {
  background-color: rgb(48, 48, 179);
}

.popupBoardCell.s {
  background-color: purple;
}

.hoverShip {
  background-color: green;
}
footer {
  width: 100vw;
  position: absolute;
  bottom: 0;
}

footer p {
  text-align: center;
  margin: 10px;
}
a {
  text-decoration: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;EACtB,WAAW;AACb;AACA;EACE,oCAAoC;EACpC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,UAAU;EACV,kBAAkB;EAClB,oCAAoC;EACpC,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;;EAGE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;AACA;;;;EAIE,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;AACA;;EAEE,oBAAoB;AACtB;AACA;;EAEE,eAAe;AACjB;;AAEA;EACE,gCAAgC;AAClC;AACA;EACE,kCAAkC;AACpC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,qBAAqB;AACvB","sourcesContent":["*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0px;\n}\nbody {\n  background-color: rgb(249, 245, 238);\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\n#overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  z-index: 2;\n  background-color: rgb(249, 245, 238);\n  opacity: 70%;\n}\n\n#winMessage.hidden {\n  display: none;\n}\n\n.hidden {\n  display: none;\n}\n\n#winMessage {\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 4;\n  padding: 1rem 2rem;\n  background-color: rgb(249, 245, 238);\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n#playAgain {\n  padding: 0.5rem 1rem;\n}\n\n#popup {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  background-color: rgb(249, 245, 238);\n  width: 150px;\n  height: 250px;\n  z-index: 3;\n}\n\nh2 {\n  text-align: center;\n}\n\nheader > h1 {\n  padding: 2rem;\n  text-align: center;\n}\n\nmain {\n  display: flex;\n  justify-content: center;\n}\n#boards {\n  display: flex;\n  gap: 2rem;\n}\n#p1Board,\n#p2Board,\n#placeShipsBoard {\n  width: 300px;\n  aspect-ratio: 1 / 1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n}\n\n#popup {\n  width: fit-content;\n  height: fit-content;\n}\n\n#currentShipHeader {\n  margin-top: 10px;\n}\n\n#placeShipsBoard {\n  margin: 1rem;\n}\n\n.boardColumn {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n.s,\n.h,\n.m,\n.e {\n  border: 1px solid black;\n  height: 100%;\n  margin: 1px;\n}\n.h,\n.m {\n  pointer-events: none;\n}\n.e,\n.s {\n  cursor: pointer;\n}\n\n.h {\n  background-color: rgb(220, 9, 9);\n}\n.m {\n  background-color: rgb(48, 48, 179);\n}\n\n.popupBoardCell.s {\n  background-color: purple;\n}\n\n.hoverShip {\n  background-color: green;\n}\nfooter {\n  width: 100vw;\n  position: absolute;\n  bottom: 0;\n}\n\nfooter p {\n  text-align: center;\n  margin: 10px;\n}\na {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((module) => {

function Dom() {
  function initPage() {
    const body = document.querySelector("body");
    body.innerHTML =
      "<div id='overlay'></div><div id='popup'><h2 id='currentShipHeader'></h2><div id='placeShipsBoard'></div></div><div id='winMessage' class='hidden'><h2 id='theWinnerIs'></h2><button id='playAgain'>Play again</button></div><header><h1>BATTLESHIP</h1></header><main><div id='boards'><div id='p1Board'></div><div id='p2Board'></div></div></main><footer><a href='https://github.com/JakeNead'><p>Made by Jake</p></a></footer>";
  }

  function renderGameboard(playerBoard, board) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    const popupBoard = document.querySelector("#placeShipsBoard");
    let container;
    if (playerBoard === "p1") container = p1Board;
    else if (playerBoard === "p2") container = p2Board;
    else if (playerBoard === "popupBoard") container = popupBoard;
    for (let i = 0; i < 10; i += 1) {
      const boardColumn = document.createElement("div");
      boardColumn.setAttribute("class", "boardColumn");
      container.appendChild(boardColumn);
      for (let j = 0; j < 10; j += 1) {
        const cell = document.createElement("div");
        cell.classList.add(
          `${playerBoard}Cell`,
          `${board.getBoard()[i][j][0]}`,
        );
        cell.dataset.x = i;
        cell.dataset.y = j;
        boardColumn.appendChild(cell);
      }
    }
  }

  function clearGameboard(player) {
    const p1Board = document.querySelector("#p1Board");
    const p2Board = document.querySelector("#p2Board");
    const popupBoard = document.querySelector("#placeShipsBoard");
    let playerBoard;
    if (player === "p1") playerBoard = p1Board;
    else if (player === "p2") playerBoard = p2Board;
    else if (player === "popupBoard") playerBoard = popupBoard;
    while (playerBoard.firstChild)
      playerBoard.removeChild(playerBoard.lastChild);
  }
  function clearPage() {
    while (document.body.firstChild)
      document.body.removeChild(document.body.lastChild);
  }

  function declareWinner(player, gameLoop) {
    document.querySelector("#overlay").classList.remove("hidden");
    const winner = document.querySelector("#winMessage");
    winner.classList.remove("hidden");

    const theWinnerIs = document.querySelector("#theWinnerIs");
    if (player === "p1") theWinnerIs.textContent = "You won!";
    else theWinnerIs.textContent = "The computer won...";
    const playAgain = document.querySelector("#playAgain");
    playAgain.addEventListener("click", () => {
      clearPage();
      gameLoop();
    });
  }

  function shoot(cell, gameTurns, gameboard) {
    const { x } = cell.dataset;
    const { y } = cell.dataset;
    gameboard.receiveAttack(x, y);
    gameTurns();
  }

  function playerClicks(gameTurns, gameboard) {
    const cells = document.querySelectorAll(".p2Cell");
    cells.forEach((cell) => {
      if (!cell.classList.contains("h") || !cell.classList.contains("m"))
        cell.addEventListener("click", () => shoot(cell, gameTurns, gameboard));
    });
  }

  function currentShip(shipIndex) {
    const shipArray = [
      { shipName: "Carrier", size: 5 },
      { shipName: "Battleship", size: 4 },
      { shipName: "Destroyer", size: 3 },
      { shipName: "Submarine", size: 3 },
      { shipName: "Patrol Boat", size: 2 },
    ];
    return shipArray[shipIndex];
  }

  function hoverShipDisplay(cell, shipIndex, movement) {
    const { size } = currentShip(shipIndex);
    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    if (movement === "enter") {
      for (let i = x - 1; i < x + size - 1; i += 1) {
        if (i >= 9) return;
        const targetCell = document.querySelector(
          `[data-x='${i + 1}'][data-y='${y}']`,
        );
        targetCell.classList.add("hoverShip");
      }
    } else
      for (let i = x - 1; i < x + size - 1; i += 1) {
        if (i >= 9) return;
        const targetCell = document.querySelector(
          `[data-x='${i + 1}'][data-y='${y}']`,
        );
        targetCell.classList.remove("hoverShip");
      }
  }

  function dismissPopup() {
    document.querySelector("#overlay").classList.add("hidden");
    document.querySelector("#popup").classList.add("hidden");
  }

  function placeShipsPopup(p1Gameboard, p2Gameboard, shipIndex, gameturns) {
    if (shipIndex === 5) {
      dismissPopup();
      renderGameboard("p1", p1Gameboard);
      renderGameboard("p2", p2Gameboard);
      playerClicks(gameturns, p2Gameboard);
      return;
    }
    const popupBoard = document.querySelector("#placeShipsBoard");
    const currentShipHeader = document.querySelector("#currentShipHeader");
    if (popupBoard) clearGameboard("popupBoard");
    renderGameboard("popupBoard", p1Gameboard);
    currentShipHeader.textContent = `Place your ${
      currentShip(shipIndex).shipName
    }`;
    const popupBoardCells = document.querySelectorAll(".popupBoardCell");

    popupBoardCells.forEach((cell) =>
      cell.addEventListener(
        "mouseenter",
        () => {
          hoverShipDisplay(cell, shipIndex, "enter");
        },
        cell.addEventListener("mouseleave", () =>
          hoverShipDisplay(cell, shipIndex, "leave"),
        ),
        cell.addEventListener("click", () => {
          if (
            p1Gameboard.placeShip(
              currentShip(shipIndex).size,
              Number(cell.dataset.x),
              Number(cell.dataset.y),
            )
          ) {
            placeShipsPopup(p1Gameboard, p2Gameboard, shipIndex + 1, gameturns);
          }
        }),
      ),
    );
  }

  return {
    renderGameboard,
    clearGameboard,
    declareWinner,
    initPage,
    playerClicks,
    placeShipsPopup,
  };
}

module.exports = Dom;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

function Gameboard() {
  const fleet = [];
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    board[i] = [];
    for (let j = 0; j < 10; j += 1) {
      board[i].push(["e"]);
    }
  }

  function getBoard() {
    return board;
  }

  function shipNotOverlapping(length, x, y) {
    for (let i = x; i < x + length; i += 1) {
      if (board[i][y][0] === "s") return false;
    }
    return true;
  }

  function shipNotOverflowing(length, x) {
    for (let i = x; i < x + length; i += 1) {
      if (i > 9) return false;
    }
    return true;
  }

  function placeShip(size, x, y) {
    const ship = Ship(size);
    if (shipNotOverflowing(size, x) && shipNotOverlapping(size, x, y)) {
      for (let i = x; i < x + size; i += 1) {
        board[i][y][0] = "s";
        board[i][y][1] = ship;
      }
      fleet.push(ship);
      return true;
    }
    return false;
  }

  function receiveAttack(x, y) {
    if (board[x][y][0] === "e") {
      board[x][y][0] = "m";
      return "miss";
    }
    if (board[x][y][0] === "s") {
      board[x][y][1].hit();
      board[x][y][0] = "h";
      return "hit";
    }
    return "illegal move";
  }

  function allShipsSunk() {
    return fleet.every((ship) => ship.isSunk() === true);
  }

  return { getBoard, placeShip, receiveAttack, allShipsSunk };
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

function Player() {
  const gameboard = Gameboard();

  function aiAttack() {
    let result = "illegal move";
    while (result === "illegal move") {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      result = gameboard.receiveAttack(x, y);
    }
  }

  return { gameboard, aiAttack };
}

module.exports = Player;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

function Ship(length) {
  let hp = length;
  function hit() {
    hp -= 1;
  }
  function isSunk() {
    return hp <= 0;
  }
  return { hp, hit, isSunk };
}

module.exports = Ship;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const dom = __webpack_require__(/*! ./dom */ "./src/dom.js");

function gameLoop() {
  const Dom = dom();
  Dom.initPage();

  const p1 = Player();
  const p2 = Player();
  p2.gameboard.placeShip(5, 0, 0);
  p2.gameboard.placeShip(4, 5, 2);
  p2.gameboard.placeShip(3, 3, 5);
  p2.gameboard.placeShip(3, 0, 8);
  p2.gameboard.placeShip(2, 6, 8);

  function gameTurns() {
    Dom.clearGameboard("p2");
    Dom.renderGameboard("p2", p2.gameboard);
    Dom.playerClicks(gameTurns, p2.gameboard);
    if (p2.gameboard.allShipsSunk()) {
      Dom.clearGameboard("p2");
      Dom.renderGameboard("p2", p2.gameboard);
      Dom.declareWinner("p1", gameLoop);
      console.log("p1 wins");
      return "p1 wins";
    }
    p1.aiAttack();
    Dom.clearGameboard("p1");
    Dom.renderGameboard("p1", p1.gameboard);
    if (p1.gameboard.allShipsSunk()) {
      Dom.clearGameboard("p2");
      Dom.renderGameboard("p2", p2.gameboard);
      Dom.declareWinner("p2", gameLoop);
      console.log("p2 wins");
      return "p2 wins";
    }
  }
  Dom.placeShipsPopup(p1.gameboard, p2.gameboard, 0, gameTurns);
}

gameLoop();

// random computer ship placements?
// ship orientation choice?
// pass and play mode?

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQixlQUFlLG1CQUFPLENBQUMsaUNBQVU7QUFDakMsWUFBWSxtQkFBTyxDQUFDLDJCQUFPOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMHB4O1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0NSwgMjM4KTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbiNvdmVybGF5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0NSwgMjM4KTtcbiAgb3BhY2l0eTogNzAlO1xufVxuXG4jd2luTWVzc2FnZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3dpbk1lc3NhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA0O1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0NSwgMjM4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI3BsYXlBZ2FpbiB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuXG4jcG9wdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ1LCAyMzgpO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHotaW5kZXg6IDM7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oZWFkZXIgPiBoMSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI2JvYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMnJlbTtcbn1cbiNwMUJvYXJkLFxuI3AyQm9hcmQsXG4jcGxhY2VTaGlwc0JvYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuI3BvcHVwIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuXG4jY3VycmVudFNoaXBIZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jcGxhY2VTaGlwc0JvYXJkIHtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4uYm9hcmRDb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuLnMsXG4uaCxcbi5tLFxuLmUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDFweDtcbn1cbi5oLFxuLm0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5lLFxuLnMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgOSwgOSk7XG59XG4ubSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDE3OSk7XG59XG5cbi5wb3B1cEJvYXJkQ2VsbC5zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufVxuXG4uaG92ZXJTaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5mb290ZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuXG5mb290ZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDtBQUNBOzs7RUFHRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0FBQ1Q7QUFDQTs7OztFQUlFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7O0VBRUUsb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSwgMjQ1LCAyMzgpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0NSwgMjM4KTtcXG4gIG9wYWNpdHk6IDcwJTtcXG59XFxuXFxuI3dpbk1lc3NhZ2UuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3dpbk1lc3NhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDQ7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDUsIDIzOCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI3BsYXlBZ2FpbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuI3BvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0NSwgMjM4KTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMjUwcHg7XFxuICB6LWluZGV4OiAzO1xcbn1cXG5cXG5oMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciA+IGgxIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jYm9hcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxufVxcbiNwMUJvYXJkLFxcbiNwMkJvYXJkLFxcbiNwbGFjZVNoaXBzQm9hcmQge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuI3BvcHVwIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNjdXJyZW50U2hpcEhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jcGxhY2VTaGlwc0JvYXJkIHtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmJvYXJkQ29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleDogMTtcXG59XFxuLnMsXFxuLmgsXFxuLm0sXFxuLmUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDFweDtcXG59XFxuLmgsXFxuLm0ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5lLFxcbi5zIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmgge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMCwgOSwgOSk7XFxufVxcbi5tIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNDgsIDE3OSk7XFxufVxcblxcbi5wb3B1cEJvYXJkQ2VsbC5zIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG59XFxuXFxuLmhvdmVyU2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIERvbSgpIHtcbiAgZnVuY3Rpb24gaW5pdFBhZ2UoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuaW5uZXJIVE1MID1cbiAgICAgIFwiPGRpdiBpZD0nb3ZlcmxheSc+PC9kaXY+PGRpdiBpZD0ncG9wdXAnPjxoMiBpZD0nY3VycmVudFNoaXBIZWFkZXInPjwvaDI+PGRpdiBpZD0ncGxhY2VTaGlwc0JvYXJkJz48L2Rpdj48L2Rpdj48ZGl2IGlkPSd3aW5NZXNzYWdlJyBjbGFzcz0naGlkZGVuJz48aDIgaWQ9J3RoZVdpbm5lcklzJz48L2gyPjxidXR0b24gaWQ9J3BsYXlBZ2Fpbic+UGxheSBhZ2FpbjwvYnV0dG9uPjwvZGl2PjxoZWFkZXI+PGgxPkJBVFRMRVNISVA8L2gxPjwvaGVhZGVyPjxtYWluPjxkaXYgaWQ9J2JvYXJkcyc+PGRpdiBpZD0ncDFCb2FyZCc+PC9kaXY+PGRpdiBpZD0ncDJCb2FyZCc+PC9kaXY+PC9kaXY+PC9tYWluPjxmb290ZXI+PGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL0pha2VOZWFkJz48cD5NYWRlIGJ5IEpha2U8L3A+PC9hPjwvZm9vdGVyPlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllckJvYXJkLCBib2FyZCkge1xuICAgIGNvbnN0IHAxQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3AxQm9hcmRcIik7XG4gICAgY29uc3QgcDJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDJCb2FyZFwiKTtcbiAgICBjb25zdCBwb3B1cEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZVNoaXBzQm9hcmRcIik7XG4gICAgbGV0IGNvbnRhaW5lcjtcbiAgICBpZiAocGxheWVyQm9hcmQgPT09IFwicDFcIikgY29udGFpbmVyID0gcDFCb2FyZDtcbiAgICBlbHNlIGlmIChwbGF5ZXJCb2FyZCA9PT0gXCJwMlwiKSBjb250YWluZXIgPSBwMkJvYXJkO1xuICAgIGVsc2UgaWYgKHBsYXllckJvYXJkID09PSBcInBvcHVwQm9hcmRcIikgY29udGFpbmVyID0gcG9wdXBCb2FyZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJvYXJkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJvYXJkQ29sdW1uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYm9hcmRDb2x1bW5cIik7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRDb2x1bW4pO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgYCR7cGxheWVyQm9hcmR9Q2VsbGAsXG4gICAgICAgICAgYCR7Ym9hcmQuZ2V0Qm9hcmQoKVtpXVtqXVswXX1gLFxuICAgICAgICApO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgYm9hcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJHYW1lYm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgcDFCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcDFCb2FyZFwiKTtcbiAgICBjb25zdCBwMkJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwMkJvYXJkXCIpO1xuICAgIGNvbnN0IHBvcHVwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlU2hpcHNCb2FyZFwiKTtcbiAgICBsZXQgcGxheWVyQm9hcmQ7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwMVwiKSBwbGF5ZXJCb2FyZCA9IHAxQm9hcmQ7XG4gICAgZWxzZSBpZiAocGxheWVyID09PSBcInAyXCIpIHBsYXllckJvYXJkID0gcDJCb2FyZDtcbiAgICBlbHNlIGlmIChwbGF5ZXIgPT09IFwicG9wdXBCb2FyZFwiKSBwbGF5ZXJCb2FyZCA9IHBvcHVwQm9hcmQ7XG4gICAgd2hpbGUgKHBsYXllckJvYXJkLmZpcnN0Q2hpbGQpXG4gICAgICBwbGF5ZXJCb2FyZC5yZW1vdmVDaGlsZChwbGF5ZXJCb2FyZC5sYXN0Q2hpbGQpO1xuICB9XG4gIGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICB3aGlsZSAoZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNsYXJlV2lubmVyKHBsYXllciwgZ2FtZUxvb3ApIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbk1lc3NhZ2VcIik7XG4gICAgd2lubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBjb25zdCB0aGVXaW5uZXJJcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlV2lubmVySXNcIik7XG4gICAgaWYgKHBsYXllciA9PT0gXCJwMVwiKSB0aGVXaW5uZXJJcy50ZXh0Q29udGVudCA9IFwiWW91IHdvbiFcIjtcbiAgICBlbHNlIHRoZVdpbm5lcklzLnRleHRDb250ZW50ID0gXCJUaGUgY29tcHV0ZXIgd29uLi4uXCI7XG4gICAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5QWdhaW5cIik7XG4gICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjbGVhclBhZ2UoKTtcbiAgICAgIGdhbWVMb29wKCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG9vdChjZWxsLCBnYW1lVHVybnMsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IHsgeCB9ID0gY2VsbC5kYXRhc2V0O1xuICAgIGNvbnN0IHsgeSB9ID0gY2VsbC5kYXRhc2V0O1xuICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGdhbWVUdXJucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyQ2xpY2tzKGdhbWVUdXJucywgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAyQ2VsbFwiKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaFwiKSB8fCAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJtXCIpKVxuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG9vdChjZWxsLCBnYW1lVHVybnMsIGdhbWVib2FyZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3VycmVudFNoaXAoc2hpcEluZGV4KSB7XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW1xuICAgICAgeyBzaGlwTmFtZTogXCJDYXJyaWVyXCIsIHNpemU6IDUgfSxcbiAgICAgIHsgc2hpcE5hbWU6IFwiQmF0dGxlc2hpcFwiLCBzaXplOiA0IH0sXG4gICAgICB7IHNoaXBOYW1lOiBcIkRlc3Ryb3llclwiLCBzaXplOiAzIH0sXG4gICAgICB7IHNoaXBOYW1lOiBcIlN1Ym1hcmluZVwiLCBzaXplOiAzIH0sXG4gICAgICB7IHNoaXBOYW1lOiBcIlBhdHJvbCBCb2F0XCIsIHNpemU6IDIgfSxcbiAgICBdO1xuICAgIHJldHVybiBzaGlwQXJyYXlbc2hpcEluZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvdmVyU2hpcERpc3BsYXkoY2VsbCwgc2hpcEluZGV4LCBtb3ZlbWVudCkge1xuICAgIGNvbnN0IHsgc2l6ZSB9ID0gY3VycmVudFNoaXAoc2hpcEluZGV4KTtcbiAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcbiAgICBpZiAobW92ZW1lbnQgPT09IFwiZW50ZXJcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHggLSAxOyBpIDwgeCArIHNpemUgLSAxOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGkgPj0gOSkgcmV0dXJuO1xuICAgICAgICBjb25zdCB0YXJnZXRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEteD0nJHtpICsgMX0nXVtkYXRhLXk9JyR7eX0nXWAsXG4gICAgICAgICk7XG4gICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImhvdmVyU2hpcFwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2VcbiAgICAgIGZvciAobGV0IGkgPSB4IC0gMTsgaSA8IHggKyBzaXplIC0gMTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChpID49IDkpIHJldHVybjtcbiAgICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXg9JyR7aSArIDF9J11bZGF0YS15PScke3l9J11gLFxuICAgICAgICApO1xuICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlclNoaXBcIik7XG4gICAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXNtaXNzUG9wdXAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVybGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb3B1cFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwc1BvcHVwKHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCwgc2hpcEluZGV4LCBnYW1ldHVybnMpIHtcbiAgICBpZiAoc2hpcEluZGV4ID09PSA1KSB7XG4gICAgICBkaXNtaXNzUG9wdXAoKTtcbiAgICAgIHJlbmRlckdhbWVib2FyZChcInAxXCIsIHAxR2FtZWJvYXJkKTtcbiAgICAgIHJlbmRlckdhbWVib2FyZChcInAyXCIsIHAyR2FtZWJvYXJkKTtcbiAgICAgIHBsYXllckNsaWNrcyhnYW1ldHVybnMsIHAyR2FtZWJvYXJkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9wdXBCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxhY2VTaGlwc0JvYXJkXCIpO1xuICAgIGNvbnN0IGN1cnJlbnRTaGlwSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50U2hpcEhlYWRlclwiKTtcbiAgICBpZiAocG9wdXBCb2FyZCkgY2xlYXJHYW1lYm9hcmQoXCJwb3B1cEJvYXJkXCIpO1xuICAgIHJlbmRlckdhbWVib2FyZChcInBvcHVwQm9hcmRcIiwgcDFHYW1lYm9hcmQpO1xuICAgIGN1cnJlbnRTaGlwSGVhZGVyLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtcbiAgICAgIGN1cnJlbnRTaGlwKHNoaXBJbmRleCkuc2hpcE5hbWVcbiAgICB9YDtcbiAgICBjb25zdCBwb3B1cEJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwQm9hcmRDZWxsXCIpO1xuXG4gICAgcG9wdXBCb2FyZENlbGxzLmZvckVhY2goKGNlbGwpID0+XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwibW91c2VlbnRlclwiLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgaG92ZXJTaGlwRGlzcGxheShjZWxsLCBzaGlwSW5kZXgsIFwiZW50ZXJcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT5cbiAgICAgICAgICBob3ZlclNoaXBEaXNwbGF5KGNlbGwsIHNoaXBJbmRleCwgXCJsZWF2ZVwiKSxcbiAgICAgICAgKSxcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHAxR2FtZWJvYXJkLnBsYWNlU2hpcChcbiAgICAgICAgICAgICAgY3VycmVudFNoaXAoc2hpcEluZGV4KS5zaXplLFxuICAgICAgICAgICAgICBOdW1iZXIoY2VsbC5kYXRhc2V0LngpLFxuICAgICAgICAgICAgICBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcGxhY2VTaGlwc1BvcHVwKHAxR2FtZWJvYXJkLCBwMkdhbWVib2FyZCwgc2hpcEluZGV4ICsgMSwgZ2FtZXR1cm5zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJHYW1lYm9hcmQsXG4gICAgY2xlYXJHYW1lYm9hcmQsXG4gICAgZGVjbGFyZVdpbm5lcixcbiAgICBpbml0UGFnZSxcbiAgICBwbGF5ZXJDbGlja3MsXG4gICAgcGxhY2VTaGlwc1BvcHVwLFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERvbTtcbiIsImNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xuXG5mdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGZsZWV0ID0gW107XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBib2FyZFtpXS5wdXNoKFtcImVcIl0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJvYXJkKCkge1xuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoaXBOb3RPdmVybGFwcGluZyhsZW5ndGgsIHgsIHkpIHtcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGJvYXJkW2ldW3ldWzBdID09PSBcInNcIikgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoaXBOb3RPdmVyZmxvd2luZyhsZW5ndGgsIHgpIHtcbiAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGkgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwKHNpemUsIHgsIHkpIHtcbiAgICBjb25zdCBzaGlwID0gU2hpcChzaXplKTtcbiAgICBpZiAoc2hpcE5vdE92ZXJmbG93aW5nKHNpemUsIHgpICYmIHNoaXBOb3RPdmVybGFwcGluZyhzaXplLCB4LCB5KSkge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgc2l6ZTsgaSArPSAxKSB7XG4gICAgICAgIGJvYXJkW2ldW3ldWzBdID0gXCJzXCI7XG4gICAgICAgIGJvYXJkW2ldW3ldWzFdID0gc2hpcDtcbiAgICAgIH1cbiAgICAgIGZsZWV0LnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgaWYgKGJvYXJkW3hdW3ldWzBdID09PSBcImVcIikge1xuICAgICAgYm9hcmRbeF1beV1bMF0gPSBcIm1cIjtcbiAgICAgIHJldHVybiBcIm1pc3NcIjtcbiAgICB9XG4gICAgaWYgKGJvYXJkW3hdW3ldWzBdID09PSBcInNcIikge1xuICAgICAgYm9hcmRbeF1beV1bMV0uaGl0KCk7XG4gICAgICBib2FyZFt4XVt5XVswXSA9IFwiaFwiO1xuICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgfVxuICAgIHJldHVybiBcImlsbGVnYWwgbW92ZVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsU2hpcHNTdW5rKCkge1xuICAgIHJldHVybiBmbGVldC5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4geyBnZXRCb2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTaGlwc1N1bmsgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5cbmZ1bmN0aW9uIFBsYXllcigpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgZnVuY3Rpb24gYWlBdHRhY2soKSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiaWxsZWdhbCBtb3ZlXCI7XG4gICAgd2hpbGUgKHJlc3VsdCA9PT0gXCJpbGxlZ2FsIG1vdmVcIikge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBnYW1lYm9hcmQsIGFpQXR0YWNrIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyO1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgpIHtcbiAgbGV0IGhwID0gbGVuZ3RoO1xuICBmdW5jdGlvbiBoaXQoKSB7XG4gICAgaHAgLT0gMTtcbiAgfVxuICBmdW5jdGlvbiBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIGhwIDw9IDA7XG4gIH1cbiAgcmV0dXJuIHsgaHAsIGhpdCwgaXNTdW5rIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcbmNvbnN0IGRvbSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnN0IERvbSA9IGRvbSgpO1xuICBEb20uaW5pdFBhZ2UoKTtcblxuICBjb25zdCBwMSA9IFBsYXllcigpO1xuICBjb25zdCBwMiA9IFBsYXllcigpO1xuICBwMi5nYW1lYm9hcmQucGxhY2VTaGlwKDUsIDAsIDApO1xuICBwMi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsIDUsIDIpO1xuICBwMi5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIDMsIDUpO1xuICBwMi5nYW1lYm9hcmQucGxhY2VTaGlwKDMsIDAsIDgpO1xuICBwMi5nYW1lYm9hcmQucGxhY2VTaGlwKDIsIDYsIDgpO1xuXG4gIGZ1bmN0aW9uIGdhbWVUdXJucygpIHtcbiAgICBEb20uY2xlYXJHYW1lYm9hcmQoXCJwMlwiKTtcbiAgICBEb20ucmVuZGVyR2FtZWJvYXJkKFwicDJcIiwgcDIuZ2FtZWJvYXJkKTtcbiAgICBEb20ucGxheWVyQ2xpY2tzKGdhbWVUdXJucywgcDIuZ2FtZWJvYXJkKTtcbiAgICBpZiAocDIuZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBEb20uY2xlYXJHYW1lYm9hcmQoXCJwMlwiKTtcbiAgICAgIERvbS5yZW5kZXJHYW1lYm9hcmQoXCJwMlwiLCBwMi5nYW1lYm9hcmQpO1xuICAgICAgRG9tLmRlY2xhcmVXaW5uZXIoXCJwMVwiLCBnYW1lTG9vcCk7XG4gICAgICBjb25zb2xlLmxvZyhcInAxIHdpbnNcIik7XG4gICAgICByZXR1cm4gXCJwMSB3aW5zXCI7XG4gICAgfVxuICAgIHAxLmFpQXR0YWNrKCk7XG4gICAgRG9tLmNsZWFyR2FtZWJvYXJkKFwicDFcIik7XG4gICAgRG9tLnJlbmRlckdhbWVib2FyZChcInAxXCIsIHAxLmdhbWVib2FyZCk7XG4gICAgaWYgKHAxLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgRG9tLmNsZWFyR2FtZWJvYXJkKFwicDJcIik7XG4gICAgICBEb20ucmVuZGVyR2FtZWJvYXJkKFwicDJcIiwgcDIuZ2FtZWJvYXJkKTtcbiAgICAgIERvbS5kZWNsYXJlV2lubmVyKFwicDJcIiwgZ2FtZUxvb3ApO1xuICAgICAgY29uc29sZS5sb2coXCJwMiB3aW5zXCIpO1xuICAgICAgcmV0dXJuIFwicDIgd2luc1wiO1xuICAgIH1cbiAgfVxuICBEb20ucGxhY2VTaGlwc1BvcHVwKHAxLmdhbWVib2FyZCwgcDIuZ2FtZWJvYXJkLCAwLCBnYW1lVHVybnMpO1xufVxuXG5nYW1lTG9vcCgpO1xuXG4vLyByYW5kb20gY29tcHV0ZXIgc2hpcCBwbGFjZW1lbnRzP1xuLy8gc2hpcCBvcmllbnRhdGlvbiBjaG9pY2U/XG4vLyBwYXNzIGFuZCBwbGF5IG1vZGU/XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=