"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/About/index.js":
/*!***************************************!*\
  !*** ./src/components/About/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loaders */ \"./node_modules/react-loaders/dist/react-loaders.js\");\n/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loaders__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AnimatedLetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AnimatedLetters */ \"./src/components/AnimatedLetters/index.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card */ \"./src/components/About/card/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    _s();\n    var backdropStyle = {\n        backgroundColor: \"#BFACC8\",\n        position: \"absolute\",\n        right: 30,\n        left: 150,\n        zIndex: 5\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref[0], setOpen = ref[1];\n    var handleClose = function() {\n        setOpen(false);\n    };\n    var handleToggle = function() {\n        setOpen(!open);\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"text-animate\"), letterClass = ref1[0], setLetterClass = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setLetterClass(\"text-animate-hover\");\n        }, 3000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container about-page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"It's a trap! Don't Click.. \"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                onClick: handleToggle,\n                                children: \"CLICK ME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Backdrop, {\n                        open: open,\n                        onClick: handleClose,\n                        sx: backdropStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about-text\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"about-heading\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedLetters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    letterClass: letterClass,\n                                    strArray: [\n                                        \"A\",\n                                        \"b\",\n                                        \"o\",\n                                        \"u\",\n                                        \"t\",\n                                        \" \",\n                                        \"m\",\n                                        \"e  \"\n                                    ],\n                                    idx: 15\n                                }, void 0, false, {\n                                    fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"I'm a Third Year student Computer Science student.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I'm very ambitious soon to be an Engineer specilized in Data Science\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"and Machine Learning in . I would love to work on more any projects.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I also serve as the Chaiperson for IET-VIT, a student run chapter in VIT, Vellore.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I am highly interested in research opportunities.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I also like to serve back to the community through my special love for dogs.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I accomplish this task through serving as Human Resources Director for Littelove, Indore.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I'm a quitely confident, artistic, optimistic, and perpetually working on\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"problem at a time. I love to listen to old music when I am working.\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I am always up for drawing Marvel heros sketches and listening to old music.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: \"You can learn more about me in the resume.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/resume\",\n                                className: \"flat-button\",\n                                children: \"RESUME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loaders__WEBPACK_IMPORTED_MODULE_3___default()), {\n                type: \"pacman\"\n            }, void 0, false, {\n                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(About, \"Ia5t8lbUXN9FB0QpOU7TwU7NJ8A=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7a0RBQ3ZFLDhEQUFDQSxJQUFFOzs7OzZDQUFHO29DQUFBLDhFQUVSOzs7Ozs7cUNBQUk7MENBQ0osOERBQUNMLEdBQUM7Z0NBQUNNLEtBQUssRUFBQyxNQUFNOzBDQUFDLDRDQUEwQzs7Ozs7cUNBQUk7MENBQzlELDhEQUFDN0Isa0RBQUk7Z0NBQUM4QixJQUFJLEVBQUMsU0FBUztnQ0FBQ1IsU0FBUyxFQUFDLGFBQWE7MENBQUMsUUFFN0M7Ozs7O3FDQUFPOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjswQkFDTiw4REFBQ3BCLHNEQUFNO2dCQUFDNkIsSUFBSSxFQUFDLFFBQVE7Ozs7O3FCQUFHOztvQkFDdkIsQ0FDSjtDQUNGO0dBM0VLeEIsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBNkVYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Fib3V0L2luZGV4LmpzPzdiZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBMb2FkZXIgZnJvbSAncmVhY3QtbG9hZGVycydcbmltcG9ydCBBbmltYXRlZExldHRlcnMgZnJvbSAnLi4vQW5pbWF0ZWRMZXR0ZXJzJ1xuaW1wb3J0IHN0eWxlc2xheW91dCBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi9jYXJkJ1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgY29uc3QgYmFja2Ryb3BTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjQkZBQ0M4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMzAsXG4gICAgbGVmdDogMTUwLFxuICAgIHpJbmRleDogNSxcbiAgfVxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSlcbiAgfVxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc2V0T3Blbighb3BlbilcbiAgfVxuICBjb25zdCBbbGV0dGVyQ2xhc3MsIHNldExldHRlckNsYXNzXSA9IHVzZVN0YXRlKCd0ZXh0LWFuaW1hdGUnKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TGV0dGVyQ2xhc3MoJ3RleHQtYW5pbWF0ZS1ob3ZlcicpXG4gICAgfSwgMzAwMClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgYWJvdXQtcGFnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjYXJkXCI+XG4gICAgICAgICAgPHA+SXQncyBhIHRyYXAhIERvbid0IENsaWNrLi4gPC9wPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVG9nZ2xlfT5DTElDSyBNRTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJhY2tkcm9wIG9wZW49e29wZW59IG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBzeD17YmFja2Ryb3BTdHlsZX0+XG4gICAgICAgICAgPENhcmQgLz5cbiAgICAgICAgPC9CYWNrZHJvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPEFuaW1hdGVkTGV0dGVyc1xuICAgICAgICAgICAgICBsZXR0ZXJDbGFzcz17bGV0dGVyQ2xhc3N9XG4gICAgICAgICAgICAgIHN0ckFycmF5PXtbJ0EnLCAnYicsICdvJywgJ3UnLCAndCcsICcgJywgJ20nLCAnZSAgJ119XG4gICAgICAgICAgICAgIGlkeD17MTV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEknbSBhIFRoaXJkIFllYXIgc3R1ZGVudCBDb21wdXRlciBTY2llbmNlIHN0dWRlbnQuXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIEknbSB2ZXJ5IGFtYml0aW91cyBzb29uIHRvIGJlIGFuIEVuZ2luZWVyIHNwZWNpbGl6ZWQgaW4gRGF0YSBTY2llbmNlXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIGFuZCBNYWNoaW5lIExlYXJuaW5nIGluIC4gSSB3b3VsZCBsb3ZlIHRvIHdvcmsgb24gbW9yZSBhbnkgcHJvamVjdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGFsaWduPVwiTEVGVFwiPlxuICAgICAgICAgICAgSSBhbHNvIHNlcnZlIGFzIHRoZSBDaGFpcGVyc29uIGZvciBJRVQtVklULCBhIHN0dWRlbnQgcnVuIGNoYXB0ZXIgaW5cbiAgICAgICAgICAgIFZJVCwgVmVsbG9yZS5cbiAgICAgICAgICAgIDxiciAvPkkgYW0gaGlnaGx5IGludGVyZXN0ZWQgaW4gcmVzZWFyY2ggb3Bwb3J0dW5pdGllcy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgYWxpZ249XCJMRUZUXCI+XG4gICAgICAgICAgICBJIGFsc28gbGlrZSB0byBzZXJ2ZSBiYWNrIHRvIHRoZSBjb21tdW5pdHkgdGhyb3VnaCBteSBzcGVjaWFsIGxvdmVcbiAgICAgICAgICAgIGZvciBkb2dzLlxuICAgICAgICAgICAgPGJyIC8+SSBhY2NvbXBsaXNoIHRoaXMgdGFzayB0aHJvdWdoIHNlcnZpbmcgYXMgSHVtYW4gUmVzb3VyY2VzXG4gICAgICAgICAgICBEaXJlY3RvciBmb3IgTGl0dGVsb3ZlLCBJbmRvcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGFsaWduPVwiTEVGVFwiPlxuICAgICAgICAgICAgSSdtIGEgcXVpdGVseSBjb25maWRlbnQsIGFydGlzdGljLCBvcHRpbWlzdGljLCBhbmQgcGVycGV0dWFsbHlcbiAgICAgICAgICAgIHdvcmtpbmcgb25cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgcHJvYmxlbSBhdCBhIHRpbWUuIEkgbG92ZSB0byBsaXN0ZW4gdG8gb2xkIG11c2ljIHdoZW4gSSBhbSB3b3JraW5nLnsnICd9XG4gICAgICAgICAgICA8YnIgLz5JIGFtIGFsd2F5cyB1cCBmb3IgZHJhd2luZyBNYXJ2ZWwgaGVyb3Mgc2tldGNoZXMgYW5kIGxpc3RlbmluZ1xuICAgICAgICAgICAgdG8gb2xkIG11c2ljLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBhbGlnbj1cIkxFRlRcIj5Zb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgbWUgaW4gdGhlIHJlc3VtZS48L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIiBjbGFzc05hbWU9XCJmbGF0LWJ1dHRvblwiPlxuICAgICAgICAgICAgUkVTVU1FXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPExvYWRlciB0eXBlPVwicGFjbWFuXCIgLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkJ1dHRvbiIsIkxvYWRlciIsIkFuaW1hdGVkTGV0dGVycyIsInN0eWxlc2xheW91dCIsIkJhY2tkcm9wIiwiQ2FyZCIsIkFib3V0IiwiYmFja2Ryb3BTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwicmlnaHQiLCJsZWZ0IiwiekluZGV4Iiwib3BlbiIsInNldE9wZW4iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVRvZ2dsZSIsImxldHRlckNsYXNzIiwic2V0TGV0dGVyQ2xhc3MiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJzeCIsInN0ckFycmF5IiwiaWR4IiwiYnIiLCJhbGlnbiIsImhyZWYiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About/index.js\n");

/***/ })

});