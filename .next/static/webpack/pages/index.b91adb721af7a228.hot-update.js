"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Featured.jsx":
/*!*********************************!*\
  !*** ./components/Featured.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Featured.module.css */ \"./styles/Featured.module.css\");\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Featured = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var images = [\n        \"/img/kryd.png\",\n        \"/img/featured2.png\",\n        \"/img/featured3.png\", \n    ];\n    var handleArrow = function(direction) {\n        if (direction === \"l\") {\n            setIndex(index !== 0 ? index - 1 : 2);\n        }\n        if (direction === \"r\") {\n            setIndex(index !== 2 ? index + 1 : 0);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    left: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"l\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowl.png\",\n                    alt: \"\",\n                    layout: \"fill\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                style: {\n                    transform: \"translateX(\".concat(-100 * index, \"vw)\")\n                },\n                children: images.map(function(img, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img,\n                            alt: \"\",\n                            layout: \"fill\",\n                            objectFit: \"contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, _this1)\n                    }, i, false, {\n                        fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    right: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"r\");\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowr.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    objectFit: \"contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ahmed/Desktop/abdalla/markaCadey/components/Featured.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(Featured, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFBbUQ7QUFDcEI7QUFDRTs7QUFFakMsSUFBTUcsUUFBUSxHQUFHLFdBQU07OztJQUNyQixJQUEwQkQsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQU52QyxLQU1jLEdBQWNBLEdBQVcsR0FBekIsRUFOZCxRQU13QixHQUFJQSxHQUFXLEdBQWY7SUFDdEIsSUFBTUksTUFBTSxHQUFHO1FBQ2IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixvQkFBb0I7S0FDckI7SUFFRCxJQUFNQyxXQUFXLEdBQUcsU0FBQ0MsU0FBUyxFQUFJO1FBQzlCLElBQUdBLFNBQVMsS0FBRyxHQUFHLEVBQUM7WUFDZkgsUUFBUSxDQUFDRCxLQUFLLEtBQUssQ0FBQyxHQUFHQSxLQUFLLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUdJLFNBQVMsS0FBRyxHQUFHLEVBQUM7WUFDZkgsUUFBUSxDQUFDRCxLQUFLLEtBQUssQ0FBQyxHQUFHQSxLQUFLLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztLQUNKO0lBRUQscUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFFViw4RUFBZ0I7OzBCQUM5Qiw4REFBQ1MsS0FBRztnQkFBQ0MsU0FBUyxFQUFFVixtRkFBcUI7Z0JBQUVhLEtBQUssRUFBRTtvQkFBRUMsSUFBSSxFQUFFLENBQUM7aUJBQUU7Z0JBQUVDLE9BQU8sRUFBRTsyQkFBSVIsV0FBVyxDQUFDLEdBQUcsQ0FBQztpQkFBQTswQkFDdEYsNEVBQUNOLG1EQUFLO29CQUFDZSxHQUFHLEVBQUMsaUJBQWlCO29CQUFDQyxHQUFHLEVBQUMsRUFBRTtvQkFBQ0MsTUFBTSxFQUFDLE1BQU07b0JBQUNDLFNBQVMsRUFBQyxTQUFTOzs7Ozt5QkFBRTs7Ozs7cUJBQ25FOzBCQUNOLDhEQUFDVixLQUFHO2dCQUFDQyxTQUFTLEVBQUVWLDRFQUFjO2dCQUFFYSxLQUFLLEVBQUU7b0JBQUNRLFNBQVMsRUFBQyxhQUFZLENBQWEsTUFBRyxDQUFkLENBQUMsR0FBRyxHQUFDakIsS0FBSyxFQUFDLEtBQUcsQ0FBQztpQkFBQzswQkFDN0VFLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUVDLENBQUM7eUNBQ2pCLDhEQUFDZixLQUFHO3dCQUFDQyxTQUFTLEVBQUVWLGlGQUFtQjtrQ0FDakMsNEVBQUNDLG1EQUFLOzRCQUFDZSxHQUFHLEVBQUVPLEdBQUc7NEJBQUVOLEdBQUcsRUFBQyxFQUFFOzRCQUFDQyxNQUFNLEVBQUMsTUFBTTs0QkFBQ0MsU0FBUyxFQUFDLFNBQVM7Ozs7O2tDQUFHO3VCQURwQkssQ0FBQzs7Ozs4QkFFckM7aUJBQ1AsQ0FBQzs7Ozs7cUJBQ0U7MEJBQ04sOERBQUNmLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsbUZBQXFCO2dCQUFFYSxLQUFLLEVBQUU7b0JBQUVhLEtBQUssRUFBRSxDQUFDO2lCQUFFO2dCQUFFWCxPQUFPLEVBQUU7MkJBQUlSLFdBQVcsQ0FBQyxHQUFHLENBQUM7aUJBQUE7MEJBQ3ZGLDRFQUFDTixtREFBSztvQkFBQ2UsR0FBRyxFQUFDLGlCQUFpQjtvQkFBQ0UsTUFBTSxFQUFDLE1BQU07b0JBQUNELEdBQUcsRUFBQyxFQUFFO29CQUFDRSxTQUFTLEVBQUMsU0FBUzs7Ozs7eUJBQUU7Ozs7O3FCQUNuRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBbENLaEIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBb0NkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZC5qc3g/NTY5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9GZWF0dXJlZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZlYXR1cmVkID0gKCkgPT4ge1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBpbWFnZXMgPSBbXG4gICAgXCIvaW1nL2tyeWQucG5nXCIsXG4gICAgXCIvaW1nL2ZlYXR1cmVkMi5wbmdcIixcbiAgICBcIi9pbWcvZmVhdHVyZWQzLnBuZ1wiLFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUFycm93ID0gKGRpcmVjdGlvbikgPT57XG4gICAgICBpZihkaXJlY3Rpb249PT1cImxcIil7XG4gICAgICAgICAgc2V0SW5kZXgoaW5kZXggIT09IDAgPyBpbmRleC0xIDogMilcbiAgICAgIH1cbiAgICAgIGlmKGRpcmVjdGlvbj09PVwiclwiKXtcbiAgICAgICAgICBzZXRJbmRleChpbmRleCAhPT0gMiA/IGluZGV4KzEgOiAwKVxuICAgICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyBsZWZ0OiAwIH19IG9uQ2xpY2s9eygpPT5oYW5kbGVBcnJvdyhcImxcIil9PlxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd2wucG5nXCIgYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0gc3R5bGU9e3t0cmFuc2Zvcm06YHRyYW5zbGF0ZVgoJHstMTAwKmluZGV4fXZ3KWB9fT5cbiAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nQ29udGFpbmVyfSBrZXk9e2l9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9XCJcIiBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyByaWdodDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJyXCIpfT5cbiAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvYXJyb3dyLnBuZ1wiIGxheW91dD1cImZpbGxcIiBhbHQ9XCJcIiBvYmplY3RGaXQ9XCJjb250YWluXCIvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDsiXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVkIiwiaW5kZXgiLCJzZXRJbmRleCIsImltYWdlcyIsImhhbmRsZUFycm93IiwiZGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYXJyb3dDb250YWluZXIiLCJzdHlsZSIsImxlZnQiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwid3JhcHBlciIsInRyYW5zZm9ybSIsIm1hcCIsImltZyIsImkiLCJpbWdDb250YWluZXIiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Featured.jsx\n");

/***/ })

});