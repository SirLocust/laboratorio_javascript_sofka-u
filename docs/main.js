/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller_BoardController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/BoardController */ \"./src/controller/BoardController.ts\");\n/* harmony import */ var _model_Ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/Ball */ \"./src/model/Ball.ts\");\n/* harmony import */ var _model_Bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Bar */ \"./src/model/Bar.ts\");\n/* harmony import */ var _model_Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/Board */ \"./src/model/Board.ts\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _view_BoardView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/BoardView */ \"./src/view/BoardView.ts\");\n\n\n\n\n\n\nvar board = new _model_Board__WEBPACK_IMPORTED_MODULE_3__.Board(260, 150);\nvar bar = new _model_Bar__WEBPACK_IMPORTED_MODULE_2__.Bar(20, 60, 4, 30, board);\nvar bar2 = new _model_Bar__WEBPACK_IMPORTED_MODULE_2__.Bar(240, 60, 4, 30, board);\nvar ball = new _model_Ball__WEBPACK_IMPORTED_MODULE_1__.Ball(75, 130, 3, board);\nboard.setBall(ball);\nvar canvas = document.getElementById('canvas');\nvar boardView = new _view_BoardView__WEBPACK_IMPORTED_MODULE_5__.BoardView(canvas, board);\nvar boardController = new _controller_BoardController__WEBPACK_IMPORTED_MODULE_0__.BoardController(board, bar, bar2, boardView);\n\nvar main = function main() {\n  boardController.init();\n  window.requestAnimationFrame(main);\n};\n\nwindow.requestAnimationFrame(main);\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/app.ts?");

/***/ }),

/***/ "./src/controller/BoardController.ts":
/*!*******************************************!*\
  !*** ./src/controller/BoardController.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardController\": () => /* binding */ BoardController\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar BoardController = /*#__PURE__*/function () {\n  function BoardController(board, barOne, barTwo, boardView) {\n    _classCallCheck(this, BoardController);\n\n    this.board = board;\n    this.barOne = barOne;\n    this.barTwo = barTwo;\n    this.boardView = boardView;\n    this.listenerKey();\n  }\n\n  _createClass(BoardController, [{\n    key: \"init\",\n    value: function init() {\n      this.boardView.play();\n    }\n  }, {\n    key: \"listenerKey\",\n    value: function listenerKey() {\n      var _this = this;\n\n      document.addEventListener('keydown', function (ev) {\n        console.log(ev.code);\n\n        if (ev.key === 'ArrowDown') {\n          ev.preventDefault();\n\n          _this.barOne.moveDown();\n        }\n\n        if (ev.key === 'ArrowUp') {\n          ev.preventDefault();\n\n          _this.barOne.moveUp();\n        }\n\n        if (ev.key === 'w') {\n          ev.preventDefault();\n\n          _this.barTwo.moveUp();\n        }\n\n        if (ev.key === 's') {\n          ev.preventDefault();\n\n          _this.barTwo.moveDown();\n        }\n\n        if (ev.key === ' ') {\n          ev.preventDefault();\n\n          _this.board.togglePlaying();\n        }\n      });\n    }\n  }]);\n\n  return BoardController;\n}();\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/controller/BoardController.ts?");

/***/ }),

/***/ "./src/model/Ball.ts":
/*!***************************!*\
  !*** ./src/model/Ball.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ball\": () => /* binding */ Ball\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Ball = /*#__PURE__*/function () {\n  function Ball(posY, posX, radius, board) {\n    _classCallCheck(this, Ball);\n\n    this.posY = posY;\n    this.posX = posX;\n    this.radius = radius;\n    this.board = board;\n    this.kindFigure = 'circle';\n    this.speedX = 2;\n    this.speedY = 0;\n    this.direction = 1;\n    this.bounceAngle = 0;\n    this.maxBounceAngle = Math.PI / 12;\n    this.width = this.radius * 2;\n    this.height = this.radius * 2;\n  }\n\n  _createClass(Ball, [{\n    key: \"move\",\n    value: function move() {\n      this.posX += this.speedX * this.direction;\n      this.posY += this.speedY;\n    }\n  }, {\n    key: \"getKindFigure\",\n    value: function getKindFigure() {\n      return this.kindFigure;\n    }\n  }, {\n    key: \"resetPosAndAngle\",\n    value: function resetPosAndAngle() {\n      this.posX = 130;\n      this.posY = 50;\n      this.bounceAngle = 0;\n      this.speedX = 2;\n      this.speedY = 0;\n    }\n  }, {\n    key: \"collision\",\n    value: function collision(bar) {\n      var cal = bar.height / 2;\n      var relative_intersect_y = bar.posY + cal - this.posY;\n      var normalized_intersect_y = relative_intersect_y / (bar.height / 2);\n      this.bounceAngle = normalized_intersect_y * this.maxBounceAngle;\n      this.speedY = 3 * -Math.sin(this.bounceAngle);\n      this.speedX = 3 * Math.cos(this.bounceAngle);\n      if (this.posX > this.board.$width / 2) this.direction = -1;else this.direction = 1;\n    }\n  }]);\n\n  return Ball;\n}();\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/model/Ball.ts?");

/***/ }),

/***/ "./src/model/Bar.ts":
/*!**************************!*\
  !*** ./src/model/Bar.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bar\": () => /* binding */ Bar\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Bar = /*#__PURE__*/function () {\n  function Bar($posX, $posY, $width, $height, $board) {\n    _classCallCheck(this, Bar);\n\n    this.posX = $posX;\n    this.posY = $posY;\n    this.width = $width;\n    this.height = $height;\n    this.board = $board;\n    this.board.$bars.push(this);\n    this.kindFigure = 'rectangle';\n    this.speed = 10;\n  }\n\n  _createClass(Bar, [{\n    key: \"getKindFigure\",\n    value: function getKindFigure() {\n      return this.kindFigure;\n    }\n  }, {\n    key: \"moveDown\",\n    value: function moveDown() {\n      this.posY += this.speed;\n    }\n  }, {\n    key: \"moveUp\",\n    value: function moveUp() {\n      this.posY -= this.speed;\n    }\n  }]);\n\n  return Bar;\n}();\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/model/Bar.ts?");

/***/ }),

/***/ "./src/model/Board.ts":
/*!****************************!*\
  !*** ./src/model/Board.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => /* binding */ Board\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Board = /*#__PURE__*/function () {\n  function Board(width, height) {\n    _classCallCheck(this, Board);\n\n    this.width = width;\n    this.height = height;\n    this.playing = false;\n    this.gameOver = false;\n    this.bars = [];\n  }\n\n  _createClass(Board, [{\n    key: \"getElements\",\n    value: function getElements() {\n      var elements = this.bars;\n\n      if (this.ball) {\n        elements.push(this.ball);\n      }\n\n      return elements;\n    }\n    /**\r\n     * Getter $width\r\n     * @return {number}\r\n     */\n\n  }, {\n    key: \"getPlaying\",\n    value: function getPlaying() {\n      return this.playing;\n    }\n  }, {\n    key: \"togglePlaying\",\n    value: function togglePlaying() {\n      this.playing = !this.playing;\n    }\n    /**\r\n     * Getter $bars\r\n     * @return {any[] }\r\n     */\n\n  }, {\n    key: \"setBall\",\n    value: function setBall(ball) {\n      this.ball = ball;\n    }\n  }, {\n    key: \"getBall\",\n    value: function getBall() {\n      return this.ball || null;\n    }\n  }, {\n    key: \"$width\",\n    get: function get() {\n      return this.width;\n    }\n    /**\r\n     * Getter $height\r\n     * @return {number}\r\n     */\n    ,\n\n    /**\r\n     * Setter $width\r\n     * @param {number} value\r\n     */\n    set: function set(value) {\n      this.width = value;\n    }\n    /**\r\n     * Setter $height\r\n     * @param {number} value\r\n     */\n\n  }, {\n    key: \"$height\",\n    get: function get() {\n      return this.height;\n    },\n    set: function set(value) {\n      this.height = value;\n    }\n    /**\r\n     * Setter $bars\r\n     * @param {any[] } value\r\n     */\n\n  }, {\n    key: \"$bars\",\n    get: function get() {\n      return this.bars;\n    },\n    set: function set(value) {\n      this.bars = value;\n    }\n  }]);\n\n  return Board;\n}();\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/model/Board.ts?");

/***/ }),

/***/ "./src/view/BoardView.ts":
/*!*******************************!*\
  !*** ./src/view/BoardView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BoardView\": () => /* binding */ BoardView\n/* harmony export */ });\n/* harmony import */ var _model_Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/Ball */ \"./src/model/Ball.ts\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar BoardView = /*#__PURE__*/function () {\n  function BoardView(canvas, board) {\n    _classCallCheck(this, BoardView);\n\n    this.canvas = canvas;\n    this.board = board;\n    this.canvas.width = board.$width;\n    this.canvas.height = board.$height;\n    this.contextCanvas = canvas.getContext('2d');\n  }\n\n  _createClass(BoardView, [{\n    key: \"drawAll\",\n    value: function drawAll() {\n      var _iterator = _createForOfIteratorHelper(this.board.getElements()),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var element = _step.value;\n\n          if (this.contextCanvas) {\n            this.draw(this.contextCanvas, element);\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx, element) {\n      switch (element.getKindFigure()) {\n        case 'rectangle':\n          var rectangle = element;\n          ctx.fillRect(rectangle.posX, rectangle.posY, rectangle.width, rectangle.height);\n          break;\n\n        case 'circle':\n          var circle = element;\n          ctx.beginPath();\n          ctx.arc(circle.posX, circle.posY, circle.radius, 0, 7);\n          ctx.fill();\n          ctx.closePath();\n          break;\n      }\n    }\n  }, {\n    key: \"isBallOutWall\",\n    value: function isBallOutWall(ball) {\n      if (!ball) {\n        return;\n      }\n\n      if (ball.posX > this.board.$width || ball.posX < 0) {\n        // this.board.tog glePlaying();\n        ball.resetPosAndAngle();\n      }\n\n      if (ball.posY > this.board.$height || ball.posY < 0) {\n        // this.board.tog glePlaying();\n        ball.resetPosAndAngle();\n      }\n    }\n  }, {\n    key: \"hit\",\n    value: function hit(a, b) {\n      //Revisa si a colisiona con b\n      var hit = false;\n\n      if (a instanceof _model_Ball__WEBPACK_IMPORTED_MODULE_0__.Ball) {\n        return false;\n      } //Colisiones horizontales\n\n\n      if (b.posX + b.width >= a.posX && b.posX < a.posX + a.width) {\n        //Colisiona verticales\n        if (b.posY + b.height >= a.posY && b.posY < a.posY + a.height) hit = true;\n      } //Colisión de a con b\n\n\n      if (b.posX <= a.posX && b.posX + b.width >= a.posX + a.width) {\n        if (b.posY <= a.posY && b.posY + b.height >= a.posY + a.height) hit = true;\n      } //Colision b con a\n\n\n      if (a.posX <= b.posX && a.posX + a.width >= b.posX + b.width) {\n        //Colisiona verticales\n        if (a.posY <= b.posY && a.posY + a.height >= b.posY + b.height) hit = true;\n      }\n\n      return hit;\n    }\n  }, {\n    key: \"checkCollisions\",\n    value: function checkCollisions() {\n      var _iterator2 = _createForOfIteratorHelper(this.board.$bars),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var bar = _step2.value;\n\n          if (this.hit(bar, this.board.getBall())) {\n            var _this$board$getBall;\n\n            (_this$board$getBall = this.board.getBall()) === null || _this$board$getBall === void 0 ? void 0 : _this$board$getBall.collision(bar);\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      if (this.board.getPlaying()) {\n        var _this$board$getBall2;\n\n        this.clean();\n        this.drawAll();\n        this.isBallOutWall(this.board.getBall());\n        this.checkCollisions();\n        (_this$board$getBall2 = this.board.getBall()) === null || _this$board$getBall2 === void 0 ? void 0 : _this$board$getBall2.move();\n      }\n    }\n  }, {\n    key: \"clean\",\n    value: function clean() {\n      var _this$contextCanvas;\n\n      (_this$contextCanvas = this.contextCanvas) === null || _this$contextCanvas === void 0 ? void 0 : _this$contextCanvas.clearRect(0, 0, this.board.$width, this.board.$height);\n    }\n  }]);\n\n  return BoardView;\n}();\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/view/BoardView.ts?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n  \\r\\n}\\r\\ncanvas{\\r\\n  border: solid;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://WebDevelomentTypescript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://WebDevelomentTypescript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://WebDevelomentTypescript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/app.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;