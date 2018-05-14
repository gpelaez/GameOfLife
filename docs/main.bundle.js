webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<div class=\"jumbotron\">\n    <h1 class=\"display-4\">{{title}}</h1>\n    <p class=\"lead\">AngularJS 4 implementation of Conway's Game of Life; a game based on a matrix of cells that could be death or alive. The status of the conway's game of life's cells deppends on the status of the neighbours cells.</p>\n    <hr class=\"my-4\">\n    <p>\n        The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.\n    </p>\n    <p>\n      Use the mouse pointer to toggle the game cells status.\n    </p>\n    <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life\" role=\"button\">Learn more</a>\n    </p>\n  </div>\n\n\n<app-game-of-life #game [width]=\"50\"  [height]=\"50\"></app-game-of-life>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_of_life_game_of_life_component__ = __webpack_require__("./src/app/game-of-life/game-of-life.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'The game of life.';
    }
    AppComponent.prototype.togglePlay = function () {
        console.log(this.game);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('game'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game_of_life_game_of_life_component__["a" /* GameOfLifeComponent */])
    ], AppComponent.prototype, "game", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_of_life_game_of_life_module__ = __webpack_require__("./src/app/game-of-life/game-of-life.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__game_of_life_game_of_life_module__["a" /* GameOfLifeModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game-of-life/game-of-life.component.css":
/***/ (function(module, exports) {

module.exports = ".game-canvas {\n    margin: 0 auto;\n    display: table;\n}\n.game-canvas .table {\n    border: solid 1px #9a9a9a\n}\n.game-canvas .game-row {\n    border: none;\n}\n.game-canvas .game-row > .game-cell {\n    padding: 5px;\n    float: left;\n    border: none;\n    border: solid 1px #e5e5e5\n}\n.game-canvas .game-row > .game-cell.alive {\n    background-color: #000;\n}"

/***/ }),

/***/ "./src/app/game-of-life/game-of-life.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"loadPattern()\">Load Pattern</button>\n<button (click)=\"togglePlay()\">{{isPlaying? 'Pause' : 'Play'}}</button>\n<div class=\"game-canvas\">\n  <div class=\"table-responsive\">\n    <table class=\"table\">\n      <tbody>\n        <tr class=\"game-row\" *ngFor=\"let row of matrix; let i = index\">\n          <td (click)=\"toggleDeath(i,j)\" class=\"game-cell  y-{{i + 1}} x-{{j + 1}}\" *ngFor=\"let cell of row; let j = index\" [ngClass]=\"{'alive': cell}\">\n            <span class=\"sr-only\">{{cell==0? 'death':'alive'}}</span>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"game-matrix\">\n  <div *ngFor=\"let row of matrix; let i = index\">\n    <h4>Row number {{ i + 1 }}</h4>\n    <ul>\n      <li *ngFor=\"let cell of row; let j = index\">\n        <b>Matrix[{{i}}][{{j}}] = </b><i>{{ cell===0? 'Death' : 'Alive' }}</i>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/game-of-life/game-of-life.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOfLifeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameOfLifeComponent = /** @class */ (function () {
    function GameOfLifeComponent() {
        this.matrix = [];
        this.isPlaying = false;
        this.period = 500;
        this.subTimeout = null;
    }
    GameOfLifeComponent.prototype.ngOnInit = function () {
        this.matrix = [];
        for (var i = 0; i < this.width; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < this.height; j++) {
                this.matrix[i][j] = 0;
            }
        }
    };
    GameOfLifeComponent.prototype.loadPattern = function () {
        this.matrix[0][0] = 1;
        this.matrix[0][1] = 1;
        this.matrix[1][0] = 1;
        this.matrix[1][3] = 1;
        this.matrix[2][1] = 1;
        this.matrix[2][2] = 1;
    };
    GameOfLifeComponent.prototype.play = function () {
        var _this = this;
        this.isPlaying = true;
        if (this.isPlaying) {
            this.subTimeout = setTimeout(function () {
                _this.nextGeneration();
            }, this.period);
        }
    };
    GameOfLifeComponent.prototype.pause = function () {
        if (this.subTimeout !== null) {
            clearTimeout(this.subTimeout);
            this.subTimeout = null;
        }
        this.isPlaying = false;
    };
    GameOfLifeComponent.prototype.togglePlay = function () {
        if (this.isPlaying === true) {
            this.pause();
            return;
        }
        this.play();
    };
    GameOfLifeComponent.prototype.toggleDeath = function (row, col) {
        this.matrix[row][col] = this.matrix[row][col] === 0 ? 1 : 0;
    };
    GameOfLifeComponent.prototype.nextGeneration = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var newMatrix = [];
        this.matrix.forEach(function (row, i) {
            newMatrix[i] = [];
            row.forEach(function (cell, j) {
                var aliveNeighbours = _this.countNeighborsAlive(i, j);
                if (cell === 1 && aliveNeighbours < 2) {
                    newMatrix[i][j] = 0;
                }
                else if (cell === 1 && (aliveNeighbours === 2 || aliveNeighbours === 3)) {
                    newMatrix[i][j] = 1;
                }
                else if (cell === 1 && aliveNeighbours > 3) {
                    newMatrix[i][j] = 0;
                }
                else if (cell === 0 && aliveNeighbours === 3) {
                    newMatrix[i][j] = 1;
                }
                else {
                    newMatrix[i][j] = 0;
                }
            });
        });
        this.matrix = newMatrix;
        if (this.isPlaying) {
            setTimeout(function () {
                _this.nextGeneration();
            }, this.period);
        }
    };
    GameOfLifeComponent.prototype.countNeighborsAlive = function (row, col) {
        var aliveNeighboursCount = 0;
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (i === row && j === col) {
                    continue;
                }
                var x = (i >= this.height) ? 0 : (i < 0) ? this.height - 1 : i;
                var y = (j >= this.width) ? 0 : (j < 0) ? this.width - 1 : j;
                if (this.matrix[x][y] === 1) {
                    aliveNeighboursCount++;
                }
            }
        }
        return aliveNeighboursCount;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GameOfLifeComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], GameOfLifeComponent.prototype, "height", void 0);
    GameOfLifeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game-of-life',
            template: __webpack_require__("./src/app/game-of-life/game-of-life.component.html"),
            styles: [__webpack_require__("./src/app/game-of-life/game-of-life.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameOfLifeComponent);
    return GameOfLifeComponent;
}());



/***/ }),

/***/ "./src/app/game-of-life/game-of-life.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameOfLifeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_of_life_component__ = __webpack_require__("./src/app/game-of-life/game-of-life.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GameOfLifeModule = /** @class */ (function () {
    function GameOfLifeModule() {
    }
    GameOfLifeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__game_of_life_component__["a" /* GameOfLifeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__game_of_life_component__["a" /* GameOfLifeComponent */]]
        })
    ], GameOfLifeModule);
    return GameOfLifeModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map