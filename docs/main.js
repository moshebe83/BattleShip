(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DEVELOPMENT\EladSoft\battleship\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PDYC":
/*!***************************************************************!*\
  !*** ./src/app/components/game-board/game-board.component.ts ***!
  \***************************************************************/
/*! exports provided: GameBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameBoardComponent", function() { return GameBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/enums/battleship.enum */ "WRGM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_matrix_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/matrix.pipe */ "pmoz");





function GameBoardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.gameStateMsg, "\n");
} }
function GameBoardComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r3);
} }
function GameBoardComponent_tr_7_ng_container_3_td_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} }
function GameBoardComponent_tr_7_ng_container_3_td_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
const _c0 = function (a0, a1) { return { "ship": a0, "clicked": a1 }; };
function GameBoardComponent_tr_7_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameBoardComponent_tr_7_ng_container_3_td_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const squareI_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.squareClicked(squareI_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameBoardComponent_tr_7_ng_container_3_td_1_img_2_Template, 1, 0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameBoardComponent_tr_7_ng_container_3_td_1_img_3_Template, 1, 0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const square_r7 = ctx_r15.$implicit;
    const squareI_r8 = ctx_r15.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r9.gameState !== 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, square_r7.isShip, square_r7.isClicked))("id", squareI_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", square_r7.isShip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", square_r7.isShip && square_r7.isClicked);
} }
function GameBoardComponent_tr_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameBoardComponent_tr_7_ng_container_3_td_1_Template, 4, 8, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "matrixPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const squareI_r8 = ctx.index;
    const rowI_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, squareI_r8, rowI_r5, ctx_r6.squaresPerRow));
} }
function GameBoardComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameBoardComponent_tr_7_ng_container_3_Template, 3, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rowI_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.yAxisLabels[rowI_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.boardSquaresArr);
} }
class GameBoardComponent {
    constructor() {
        this.amountOfShips = 10;
        this.amountOfRows = 10;
        this.squaresPerRow = 10;
        this.xAxisLabels = [];
        this.yAxisLabels = [];
        this.gameStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get gameState() { return this._gameState; }
    ;
    set gameState(gameState) {
        this._gameState = gameState;
        if (this.strikesCounter === this.amountOfShips && gameState === src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_1__["EGameState"].PLAYING) {
            this.startNewGame();
        }
    }
    ngOnInit() {
        this.amountOfSquares = this.amountOfRows * this.squaresPerRow;
        this.createAxiesLabels();
        this.startNewGame();
    }
    createAxiesLabels() {
        for (let i = 1; i <= this.squaresPerRow; i++) {
            this.xAxisLabels.push((i + 9).toString(36).toUpperCase());
        }
        for (let i = 1; i <= this.amountOfRows; i++) {
            this.yAxisLabels.push(i);
        }
    }
    createBoardSquares() {
        this.boardSquaresArr = [];
        for (let i = 0; i < this.amountOfSquares; i++) {
            this.boardSquaresArr.push({ id: i, isShip: false, isClicked: false });
        }
    }
    spreadShips() {
        for (let i = 0; i < this.amountOfShips; i++) {
            let randomSquare = Math.floor(Math.random() * this.amountOfSquares);
            while (this.boardSquaresArr[randomSquare].isShip) {
                randomSquare = Math.floor(Math.random() * this.amountOfSquares);
            }
            this.boardSquaresArr[randomSquare].isShip = true;
        }
    }
    trackByFn(index) {
        return index;
    }
    counter(length) {
        return new Array(length);
    }
    squareClicked(squareIndex) {
        this.progressCounter++;
        this.boardSquaresArr[squareIndex].isClicked = true;
        if (this.boardSquaresArr[squareIndex].isShip) {
            this.strikesCounter++;
        }
        if (this.strikesCounter === this.amountOfShips) {
            this.gameStateChanged.emit(src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_1__["EGameState"].WON);
            this.gameStateMsg = 'You Go Girl!';
        }
    }
    startNewGame() {
        this.gameStateMsg = '';
        this.strikesCounter = 0;
        this.progressCounter = 0;
        this.createBoardSquares();
        this.spreadShips();
    }
}
GameBoardComponent.ɵfac = function GameBoardComponent_Factory(t) { return new (t || GameBoardComponent)(); };
GameBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameBoardComponent, selectors: [["app-game-board"]], inputs: { gameState: "gameState" }, outputs: { gameStateChanged: "gameStateChanged" }, decls: 8, vars: 5, consts: [["class", "state-msg", 4, "ngIf"], [1, "game-board", 3, "ngClass"], ["class", "game-board-axises", 4, "ngFor", "ngForOf"], ["class", "game-board-row", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "state-msg"], [1, "game-board-axises"], [1, "game-board-row"], [4, "ngFor", "ngForOf"], ["class", "game-board-row-square", 4, "ngIf"], [1, "game-board-row-square"], [1, "game-board-row-square-btn", 3, "disabled", "ngClass", "id", "click"], ["class", "ship-img", "src", "./assets/submarine_3d.png", "alt", "ship", 4, "ngIf"], ["class", "boom-img", "src", "./assets/Boom-PNG-File.png", "alt", "boom", 4, "ngIf"], ["src", "./assets/submarine_3d.png", "alt", "ship", 1, "ship-img"], ["src", "./assets/Boom-PNG-File.png", "alt", "boom", 1, "boom-img"]], template: function GameBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameBoardComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameBoardComponent_th_5_Template, 2, 1, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameBoardComponent_tr_7_Template, 4, 2, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStateMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.gameState === 0 ? "" : ctx.gameState === 1 ? "success" : "failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.xAxisLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.counter(ctx.amountOfRows))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_matrix_pipe__WEBPACK_IMPORTED_MODULE_3__["MatrixPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&family=Spicy+Rice&display=swap\");\nhtml[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background-image: url('bg-image.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n[_nghost-%COMP%] {\n  text-align: center;\n  font-family: \"Spicy Rice\", cursive;\n}\n.state-msg[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 70px;\n  z-index: 1;\n  width: 650px;\n  border-radius: 50px;\n  background-color: rgba(250, 235, 215, 0.8);\n  padding-inline: 20px;\n  box-sizing: border-box;\n}\n.game-board[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n  transform: translateX(-10px);\n}\n.game-board-axises[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 14px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 600;\n  padding: 2px;\n}\n.game-board.success[_ngcontent-%COMP%] {\n  filter: blur(4px);\n}\n.game-board.success[_ngcontent-%COMP%]   .game-board-row-square-btn[_ngcontent-%COMP%] {\n  background-color: rgba(40, 87, 173, 0.8);\n}\n.game-board-row-square[_ngcontent-%COMP%] {\n  height: 44px;\n  width: 44px;\n  max-width: 10%;\n}\n.game-board-row-square-btn[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  border: none;\n  background-color: rgba(33, 49, 48, 0.85);\n  box-shadow: 0 0 5px 1px white;\n  transition: background-color 0.2s ease-out;\n  padding: 3px;\n}\n.game-board-row-square-btn[_ngcontent-%COMP%]:hover, .game-board-row-square-btn[_ngcontent-%COMP%]:focus {\n  background-color: rgba(238, 238, 238, 0.5);\n}\n.game-board-row-square-btn[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\n.game-board-row-square-btn.clicked.ship[_ngcontent-%COMP%] {\n  background-color: rgba(185, 30, 30, 0.8);\n}\n.game-board-row-square-btn.clicked[_ngcontent-%COMP%]:not(.ship) {\n  background-color: rgba(65, 183, 70, 0.8);\n}\n.game-board-row-square-btn[_ngcontent-%COMP%]:not(:disabled) {\n  cursor: pointer;\n}\n.game-board-row-square-btn[_ngcontent-%COMP%]   .ship-img[_ngcontent-%COMP%] {\n  width: 100%;\n  filter: brightness(2) contrast(2);\n}\n.game-board-row-square-btn[_ngcontent-%COMP%]   .boom-img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJIQUFBO0FBUVI7RUFDSSxrQ0FMVztBQ0RmO0FEU0E7RUFDSSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ05KO0FBUkE7RUFDSSxrQkFBQTtFQUNBLGtDRENXO0FDVWY7QUFSQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFXSjtBQVJBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBV0o7QUFUSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0lBQUE7RUFFQSxnQkFBQTtFQUNBLFlBQUE7QUFVUjtBQVBJO0VBQ0ksaUJBQUE7QUFTUjtBQVJRO0VBQ0ksd0NBQUE7QUFVWjtBQUxRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBT1o7QUFMWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSw2QkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtBQU9oQjtBQUxnQjtFQUVJLDBDQUFBO0FBTXBCO0FBSGdCO0VBQ0ksZUFBQTtBQUtwQjtBQURvQjtFQUNJLHdDQUFBO0FBR3hCO0FBRG9CO0VBQ0ksd0NBQUE7QUFHeEI7QUFDZ0I7RUFDSSxlQUFBO0FBQ3BCO0FBRWdCO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0FBQXBCO0FBRWdCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUFwQiIsImZpbGUiOiJnYW1lLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1TcGljeStSaWNlJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuJGNvbG9yLXByaW1hcnk6IHJnYigzMywgNDksIDQ4KTtcclxuXHJcbiRmb250LXByaW1hcnk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZGlzcGxheTogXCJTcGljeSBSaWNlXCIsIGN1cnNpdmU7XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYmctaW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9U3BpY3krUmljZSZkaXNwbGF5PXN3YXBcIik7XG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2JnLWltYWdlLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuOmhvc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlNwaWN5IFJpY2VcIiwgY3Vyc2l2ZTtcbn1cblxuLnN0YXRlLW1zZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDY1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjM1LCAyMTUsIDAuOCk7XG4gIHBhZGRpbmctaW5saW5lOiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZ2FtZS1ib2FyZCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xufVxuLmdhbWUtYm9hcmQtYXhpc2VzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDJweDtcbn1cbi5nYW1lLWJvYXJkLnN1Y2Nlc3Mge1xuICBmaWx0ZXI6IGJsdXIoNHB4KTtcbn1cbi5nYW1lLWJvYXJkLnN1Y2Nlc3MgLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCA4NywgMTczLCAwLjgpO1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZSB7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDQ0cHg7XG4gIG1heC13aWR0aDogMTAlO1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgNDksIDQ4LCAwLjg1KTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggd2hpdGU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLW91dDtcbiAgcGFkZGluZzogM3B4O1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG46aG92ZXIsIC5nYW1lLWJvYXJkLXJvdy1zcXVhcmUtYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjUpO1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG46bm90KDpkaXNhYmxlZCkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2FtZS1ib2FyZC1yb3ctc3F1YXJlLWJ0bi5jbGlja2VkLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NSwgMzAsIDMwLCAwLjgpO1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG4uY2xpY2tlZDpub3QoLnNoaXApIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgMTgzLCA3MCwgMC44KTtcbn1cbi5nYW1lLWJvYXJkLXJvdy1zcXVhcmUtYnRuOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdhbWUtYm9hcmQtcm93LXNxdWFyZS1idG4gLnNoaXAtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygyKSBjb250cmFzdCgyKTtcbn1cbi5nYW1lLWJvYXJkLXJvdy1zcXVhcmUtYnRuIC5ib29tLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'battleship';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "battleship"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&family=Spicy+Rice&display=swap\");\nhtml[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background-image: url('bg-image.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n.battleship[_ngcontent-%COMP%] {\n  padding: 10px 10px 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlcy5zY3NzIiwiLi5cXC4uXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkhBQUE7QUFRUjtFQUNJLGtDQUxXO0FDRGY7QURTQTtFQUNJLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDTko7QUFSQTtFQUNJLHlCQUFBO0FBV0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1TcGljeStSaWNlJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuJGNvbG9yLXByaW1hcnk6IHJnYigzMywgNDksIDQ4KTtcclxuXHJcbiRmb250LXByaW1hcnk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZGlzcGxheTogXCJTcGljeSBSaWNlXCIsIGN1cnNpdmU7XHJcblxyXG5cclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcHJpbWFyeTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYmctaW1hZ2UuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXk6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwOzkwMCZmYW1pbHk9U3BpY3krUmljZSZkaXNwbGF5PXN3YXBcIik7XG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2JnLWltYWdlLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmJhdHRsZXNoaXAge1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "WRGM":
/*!******************************************!*\
  !*** ./src/app/enums/battleship.enum.ts ***!
  \******************************************/
/*! exports provided: EGameState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGameState", function() { return EGameState; });
var EGameState;
(function (EGameState) {
    EGameState[EGameState["WON"] = 1] = "WON";
    EGameState[EGameState["PLAYING"] = 0] = "PLAYING";
    EGameState[EGameState["LOST"] = -1] = "LOST";
})(EGameState || (EGameState = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _layout_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/play-game/play-game.component */ "mPdd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/game-board/game-board.component */ "PDYC");
/* harmony import */ var _pipes_matrix_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/matrix.pipe */ "pmoz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");


// Layout

// Components


// Pipes


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_4__["GameBoardComponent"],
        _pipes_matrix_pipe__WEBPACK_IMPORTED_MODULE_5__["MatrixPipe"],
        _layout_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_2__["PlayGameComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "mPdd":
/*!*********************************************************!*\
  !*** ./src/app/layout/play-game/play-game.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayGameComponent", function() { return PlayGameComponent; });
/* harmony import */ var src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/enums/battleship.enum */ "WRGM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game-board/game-board.component */ "PDYC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PlayGameComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PlayGameComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.newGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "New Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class PlayGameComponent {
    constructor() {
        this.gameState = src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_0__["EGameState"].PLAYING;
    }
    ngOnInit() {
    }
    gameStateChanged(newGameState) {
        this.gameState = newGameState;
    }
    newGame() {
        this.gameState = src_app_enums_battleship_enum__WEBPACK_IMPORTED_MODULE_0__["EGameState"].PLAYING;
    }
}
PlayGameComponent.ɵfac = function PlayGameComponent_Factory(t) { return new (t || PlayGameComponent)(); };
PlayGameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PlayGameComponent, selectors: [["app-play-game"]], decls: 7, vars: 2, consts: [[1, "heading"], [3, "gameState", "gameStateChanged"], ["class", "new-game-btn", 3, "click", 4, "ngIf"], [1, "new-game-btn", 3, "click"]], template: function PlayGameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "BattleShip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-game-board", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gameStateChanged", function PlayGameComponent_Template_app_game_board_gameStateChanged_4_listener($event) { return ctx.gameStateChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PlayGameComponent_button_6_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gameState", ctx.gameState);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameState !== 0);
    } }, directives: [_components_game_board_game_board_component__WEBPACK_IMPORTED_MODULE_2__["GameBoardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&family=Spicy+Rice&display=swap\");\nhtml[_ngcontent-%COMP%] {\n  font-family: \"Raleway\", sans-serif;\n}\nbody[_ngcontent-%COMP%] {\n  background-image: url('bg-image.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\nheader[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font-family: \"Spicy Rice\", cursive;\n  text-align: center;\n  font-size: 80px;\n  letter-spacing: 2px;\n  color: rgba(33, 49, 48, 0.95);\n  margin-block: 20px 0;\n  text-shadow: 0 0 20px white;\n}\n@media screen and (max-width: 400px) {\n  header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n    font-size: 60px;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  margin: 30px;\n}\nfooter[_ngcontent-%COMP%]   .new-game-btn[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  padding: 10px 15px;\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 900;\n  font-size: 20px;\n  cursor: pointer;\n  background-color: rgba(255, 250, 240, 0.8);\n  border: none;\n  border-radius: 6px;\n  transition: all 0.2s;\n  color: #213130;\n  border: 2px solid transparent;\n}\nfooter[_ngcontent-%COMP%]   .new-game-btn[_ngcontent-%COMP%]:hover {\n  background-color: rgba(33, 49, 48, 0.8);\n  color: whitesmoke;\n  transform: scale(1.1);\n  border: 2px solid whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzdHlsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxwbGF5LWdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkhBQUE7QUFRUjtFQUNJLGtDQUxXO0FDRGY7QURTQTtFQUNJLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDTko7QUFQSTtFQUNJLGtDRENPO0VDQVAsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUFVUjtBQVJRO0VBVEo7SUFVUSxlQUFBO0VBV1Y7QUFDRjtBQVBBO0VBQ0ksWUFBQTtBQVVKO0FBUkk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NEckJPO0VDc0JQLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0QvQlE7RUNnQ1IsNkJBQUE7QUFVUjtBQVJRO0VBQ0ksdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFVWiIsImZpbGUiOiJwbGF5LWdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANDAwOzUwMDs2MDA7NzAwOzgwMDs5MDAmZmFtaWx5PVNwaWN5K1JpY2UmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4kY29sb3ItcHJpbWFyeTogcmdiKDMzLCA0OSwgNDgpO1xyXG5cclxuJGZvbnQtcHJpbWFyeTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1kaXNwbGF5OiBcIlNwaWN5IFJpY2VcIiwgY3Vyc2l2ZTtcclxuXHJcblxyXG5odG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1wcmltYXJ5O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9iZy1pbWFnZS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDA7OTAwJmZhbWlseT1TcGljeStSaWNlJmRpc3BsYXk9c3dhcFwiKTtcbmh0bWwge1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvYmctaW1hZ2UuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5oZWFkZXIgLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogXCJTcGljeSBSaWNlXCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogcmdiYSgzMywgNDksIDQ4LCAwLjk1KTtcbiAgbWFyZ2luLWJsb2NrOiAyMHB4IDA7XG4gIHRleHQtc2hhZG93OiAwIDAgMjBweCB3aGl0ZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGhlYWRlciAuaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbjogMzBweDtcbn1cbmZvb3RlciAubmV3LWdhbWUtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjUwLCAyNDAsIDAuOCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgY29sb3I6ICMyMTMxMzA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuZm9vdGVyIC5uZXctZ2FtZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCA0OSwgNDgsIDAuOCk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XG59Il19 */"] });


/***/ }),

/***/ "pmoz":
/*!**************************************!*\
  !*** ./src/app/pipes/matrix.pipe.ts ***!
  \**************************************/
/*! exports provided: MatrixPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixPipe", function() { return MatrixPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MatrixPipe {
    transform(squareIndex, rowIndex, squaresPerRow) {
        let rowFirstSquare = squareIndex + 1 > rowIndex * squaresPerRow;
        let rowLastSquare = squareIndex < (rowIndex + 1) * squaresPerRow;
        return rowFirstSquare && rowLastSquare;
    }
}
MatrixPipe.ɵfac = function MatrixPipe_Factory(t) { return new (t || MatrixPipe)(); };
MatrixPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "matrixPipe", type: MatrixPipe, pure: true });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/play-game/play-game.component */ "mPdd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: 'battleship', component: _layout_play_game_play_game_component__WEBPACK_IMPORTED_MODULE_1__["PlayGameComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'battleship' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map