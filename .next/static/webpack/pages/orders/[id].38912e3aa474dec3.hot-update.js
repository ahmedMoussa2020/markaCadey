/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/orders/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Order.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Order.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Order_container__MlAs7{\\n    padding: 50px;\\n    display: flex;\\n}\\n\\n.Order_left__T7fnj{\\n    flex: 2 1;\\n}\\n\\n.Order_table___IhSD{\\n    width: 100%;\\n    text-align: left;\\n    margin-bottom: 50px;\\n}\\n\\n.Order_row__icbZr:last-child{\\n    width: 80%;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n\\n\\n.Order_done__Zw6JT{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.Order_inProgress__AzXXJ{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    -webkit-animation: Order_inProgress__AzXXJ 1s ease infinite alternate;\\n            animation: Order_inProgress__AzXXJ 1s ease infinite alternate;\\n}\\n\\n@-webkit-keyframes Order_inProgress__AzXXJ {\\n    from {\\n        \\n    }\\n}\\n\\n@keyframes Order_inProgress__AzXXJ {\\n    from {\\n        \\n    }\\n}\\n\\n.Order_undone__qmHnC{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    opacity: 0.3;\\n}\\n\\n.Order_right__f0LLE{\\n    flex: 1 1;\\n}\\n\\n.Order_wrapper__h4Unr{\\n    width: 90%;\\n    max-height: 300px;\\n    background-color: #333;\\n    padding: 50px;\\n    padding-top: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    color: white;\\n}\\n\\n.Order_totalTextTitle__tvjTc{\\n    margin-right: 10px;\\n}\\n\\n.Order_button__ktKAN{\\n    background-color: white;\\n    height: 30px;\\n    color: teal;\\n    font-weight: bold;\\n    margin-top: 20px;\\n    cursor: not-allowed;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Order.module.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,8BAA8B;AAClC;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,qEAAgD;YAAhD,6DAAgD;AACpD;;AAEA;IACI;;IAEA;AACJ;;AAJA;IACI;;IAEA;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,SAAO;AACX;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB\",\"sourcesContent\":[\".container{\\n    padding: 50px;\\n    display: flex;\\n}\\n\\n.left{\\n    flex: 2;\\n}\\n\\n.table{\\n    width: 100%;\\n    text-align: left;\\n    margin-bottom: 50px;\\n}\\n\\n.row:last-child{\\n    width: 80%;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n\\n\\n.done{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n}\\n\\n.inProgress{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    animation: inProgress 1s ease infinite alternate;\\n}\\n\\n@keyframes inProgress {\\n    from {\\n        \\n    }\\n}\\n\\n.undone{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    opacity: 0.3;\\n}\\n\\n.right{\\n    flex: 1;\\n}\\n\\n.wrapper{\\n    width: 90%;\\n    max-height: 300px;\\n    background-color: #333;\\n    padding: 50px;\\n    padding-top: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    color: white;\\n}\\n\\n.totalTextTitle{\\n    margin-right: 10px;\\n}\\n\\n.button{\\n    background-color: white;\\n    height: 30px;\\n    color: teal;\\n    font-weight: bold;\\n    margin-top: 20px;\\n    cursor: not-allowed;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"Order_container__MlAs7\",\n\t\"left\": \"Order_left__T7fnj\",\n\t\"table\": \"Order_table___IhSD\",\n\t\"row\": \"Order_row__icbZr\",\n\t\"done\": \"Order_done__Zw6JT\",\n\t\"inProgress\": \"Order_inProgress__AzXXJ\",\n\t\"undone\": \"Order_undone__qmHnC\",\n\t\"right\": \"Order_right__f0LLE\",\n\t\"wrapper\": \"Order_wrapper__h4Unr\",\n\t\"totalTextTitle\": \"Order_totalTextTitle__tvjTc\",\n\t\"button\": \"Order_button__ktKAN\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL09yZGVyLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLGtFQUFrRSxvQkFBb0Isb0JBQW9CLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLHdCQUF3QixrQkFBa0IsdUJBQXVCLDBCQUEwQixHQUFHLGlDQUFpQyxpQkFBaUIsb0JBQW9CLHFDQUFxQyxHQUFHLDJCQUEyQixvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLDZCQUE2QixvQkFBb0IsNkJBQTZCLDBCQUEwQiw0RUFBNEUsNEVBQTRFLEdBQUcsZ0RBQWdELFlBQVksaUJBQWlCLEdBQUcsd0NBQXdDLFlBQVksaUJBQWlCLEdBQUcseUJBQXlCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixHQUFHLHdCQUF3QixnQkFBZ0IsR0FBRywwQkFBMEIsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLHFDQUFxQyxtQkFBbUIsR0FBRyxpQ0FBaUMseUJBQXlCLEdBQUcseUJBQXlCLDhCQUE4QixtQkFBbUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsMEJBQTBCLEdBQUcsT0FBTyx3RkFBd0YsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEscUNBQXFDLG9CQUFvQixvQkFBb0IsR0FBRyxVQUFVLGNBQWMsR0FBRyxXQUFXLGtCQUFrQix1QkFBdUIsMEJBQTBCLEdBQUcsb0JBQW9CLGlCQUFpQixvQkFBb0IscUNBQXFDLEdBQUcsY0FBYyxvQkFBb0IsNkJBQTZCLDBCQUEwQixHQUFHLGdCQUFnQixvQkFBb0IsNkJBQTZCLDBCQUEwQix1REFBdUQsR0FBRywyQkFBMkIsWUFBWSxpQkFBaUIsR0FBRyxZQUFZLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG1CQUFtQixHQUFHLFdBQVcsY0FBYyxHQUFHLGFBQWEsaUJBQWlCLHdCQUF3Qiw2QkFBNkIsb0JBQW9CLHdCQUF3QixvQkFBb0IsNkJBQTZCLHFDQUFxQyxtQkFBbUIsR0FBRyxvQkFBb0IseUJBQXlCLEdBQUcsWUFBWSw4QkFBOEIsbUJBQW1CLGtCQUFrQix3QkFBd0IsdUJBQXVCLDBCQUEwQixHQUFHLG1CQUFtQjtBQUM1ekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9PcmRlci5tb2R1bGUuY3NzPzM4MWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5PcmRlcl9jb250YWluZXJfX01sQXM3e1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uT3JkZXJfbGVmdF9fVDdmbmp7XFxuICAgIGZsZXg6IDIgMTtcXG59XFxuXFxuLk9yZGVyX3RhYmxlX19fSWhTRHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5PcmRlcl9yb3dfX2ljYlpyOmxhc3QtY2hpbGR7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuXFxuLk9yZGVyX2RvbmVfX1p3NkpUe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uT3JkZXJfaW5Qcm9ncmVzc19fQXpYWEp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBPcmRlcl9pblByb2dyZXNzX19BelhYSiAxcyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb246IE9yZGVyX2luUHJvZ3Jlc3NfX0F6WFhKIDFzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgT3JkZXJfaW5Qcm9ncmVzc19fQXpYWEoge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgT3JkZXJfaW5Qcm9ncmVzc19fQXpYWEoge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIFxcbiAgICB9XFxufVxcblxcbi5PcmRlcl91bmRvbmVfX3FtSG5De1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5PcmRlcl9yaWdodF9fZjBMTEV7XFxuICAgIGZsZXg6IDEgMTtcXG59XFxuXFxuLk9yZGVyX3dyYXBwZXJfX2g0VW5ye1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uT3JkZXJfdG90YWxUZXh0VGl0bGVfX3R2alRje1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5PcmRlcl9idXR0b25fX2t0S0FOe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjb2xvcjogdGVhbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvT3JkZXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBTztBQUNYOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxRUFBZ0Q7WUFBaEQsNkRBQWdEO0FBQ3BEOztBQUVBO0lBQ0k7O0lBRUE7QUFDSjs7QUFKQTtJQUNJOztJQUVBO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBTztBQUNYOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmxlZnR7XFxuICAgIGZsZXg6IDI7XFxufVxcblxcbi50YWJsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi5yb3c6bGFzdC1jaGlsZHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG5cXG4uZG9uZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmluUHJvZ3Jlc3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogaW5Qcm9ncmVzcyAxcyBlYXNlIGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBpblByb2dyZXNzIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBcXG4gICAgfVxcbn1cXG5cXG4udW5kb25le1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxufVxcblxcbi5yaWdodHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLndyYXBwZXJ7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgICBwYWRkaW5nOiA1MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi50b3RhbFRleHRUaXRsZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjb2xvcjogdGVhbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk9yZGVyX2NvbnRhaW5lcl9fTWxBczdcIixcblx0XCJsZWZ0XCI6IFwiT3JkZXJfbGVmdF9fVDdmbmpcIixcblx0XCJ0YWJsZVwiOiBcIk9yZGVyX3RhYmxlX19fSWhTRFwiLFxuXHRcInJvd1wiOiBcIk9yZGVyX3Jvd19faWNiWnJcIixcblx0XCJkb25lXCI6IFwiT3JkZXJfZG9uZV9fWnc2SlRcIixcblx0XCJpblByb2dyZXNzXCI6IFwiT3JkZXJfaW5Qcm9ncmVzc19fQXpYWEpcIixcblx0XCJ1bmRvbmVcIjogXCJPcmRlcl91bmRvbmVfX3FtSG5DXCIsXG5cdFwicmlnaHRcIjogXCJPcmRlcl9yaWdodF9fZjBMTEVcIixcblx0XCJ3cmFwcGVyXCI6IFwiT3JkZXJfd3JhcHBlcl9faDRVbnJcIixcblx0XCJ0b3RhbFRleHRUaXRsZVwiOiBcIk9yZGVyX3RvdGFsVGV4dFRpdGxlX190dmpUY1wiLFxuXHRcImJ1dHRvblwiOiBcIk9yZGVyX2J1dHRvbl9fa3RLQU5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[4].use[2]!./styles/Order.module.css\n");

/***/ })

});