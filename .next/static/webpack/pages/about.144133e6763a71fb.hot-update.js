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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loaders */ \"./node_modules/react-loaders/dist/react-loaders.js\");\n/* harmony import */ var react_loaders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loaders__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AnimatedLetters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AnimatedLetters */ \"./src/components/AnimatedLetters/index.js\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ \"./src/components/About/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card */ \"./src/components/About/card/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar About = function() {\n    _s();\n    var backdropStyle = {\n        backgroundColor: \"#BFACC8\",\n        position: \"absolute\",\n        right: 30,\n        left: 150,\n        zIndex: 5\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref[0], setOpen = ref[1];\n    var handleClose = function() {\n        setOpen(false);\n    };\n    var handleToggle = function() {\n        setOpen(!open);\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"text-animate\"), letterClass = ref1[0], setLetterClass = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setTimeout(function() {\n            setLetterClass(\"text-animate-hover\");\n        }, 3000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"It's a trap! Don't Click.. \"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                onClick: handleToggle,\n                                children: \"CLICK ME\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Backdrop, {\n                        open: open,\n                        onClick: handleClose,\n                        sx: backdropStyle,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"about-text\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"about-heading\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AnimatedLetters__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    letterClass: letterClass,\n                                    strArray: [\n                                        \"A\",\n                                        \"b\",\n                                        \"o\",\n                                        \"u\",\n                                        \"t\",\n                                        \" \",\n                                        \"m\",\n                                        \"e  \"\n                                    ],\n                                    idx: 15\n                                }, void 0, false, {\n                                    fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"I'm a Third Year student Computer Science student.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I'm very ambitious soon to be an Engineer specilized in Data Science\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"and Machine Learning in . I would love to work on more any projects.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I also serve as the Chaiperson for IET-VIT, a student run chapter in VIT, Vellore.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I am highly interested in research opportunities.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I also like to serve back to the community through my special love for dogs.\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I accomplish this task through serving as Human Resources Director for Littelove, Indore.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: [\n                                    \"I'm a quitely confident, artistic, optimistic, and perpetually working on\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"problem at a time. I love to listen to old music when I am working.\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this),\n                                    \"I am always up for drawing Marvel heros sketches and listening to old music.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                align: \"LEFT\",\n                                children: \"You can learn more about me in the resume.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"Resume.pdf\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default()[\"flat-button\"])),\n                                    children: \"RESUME\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_loaders__WEBPACK_IMPORTED_MODULE_3___default()), {\n                type: \"pacman\"\n            }, void 0, false, {\n                fileName: \"/Users/prathamagrawal/Desktop/projects/portfolio/src/components/About/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(About, \"Ia5t8lbUXN9FB0QpOU7TwU7NJ8A=\");\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUEsOEVBRVI7Ozs7OztxQ0FBSTswQ0FDSiw4REFBQ0wsR0FBQztnQ0FBQ00sS0FBSyxFQUFDLE1BQU07MENBQUMsNENBQTBDOzs7OztxQ0FBSTswQ0FDOUQsOERBQUM3QixrREFBSTtnQ0FBQzhCLElBQUksRUFBQyxZQUFZOzBDQUNyQiw0RUFBQ0MsR0FBQztvQ0FBQ1QsU0FBUyxFQUFFLEVBQUMsQ0FBOEIsT0FBNUJsQiwwRUFBMkIsQ0FBRTs4Q0FBRSxRQUFNOzs7Ozt5Q0FBSTs7Ozs7cUNBQ3JEOzs7Ozs7NkJBQ0g7Ozs7OztxQkFDRjswQkFDTiw4REFBQ0Ysc0RBQU07Z0JBQUM4QixJQUFJLEVBQUMsUUFBUTs7Ozs7cUJBQUc7O29CQUN2QixDQUNKO0NBQ0Y7R0EzRUt6QixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE2RVgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWJvdXQvaW5kZXguanM/N2JmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IExvYWRlciBmcm9tICdyZWFjdC1sb2FkZXJzJ1xuaW1wb3J0IEFuaW1hdGVkTGV0dGVycyBmcm9tICcuLi9BbmltYXRlZExldHRlcnMnXG5pbXBvcnQgc3R5bGVzbGF5b3V0IGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgQ2FyZCBmcm9tICcuL2NhcmQnXG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICBjb25zdCBiYWNrZHJvcFN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNCRkFDQzgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAzMCxcbiAgICBsZWZ0OiAxNTAsXG4gICAgekluZGV4OiA1LFxuICB9XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKVxuICB9XG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKVxuICB9XG4gIGNvbnN0IFtsZXR0ZXJDbGFzcywgc2V0TGV0dGVyQ2xhc3NdID0gdXNlU3RhdGUoJ3RleHQtYW5pbWF0ZScpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMZXR0ZXJDbGFzcygndGV4dC1hbmltYXRlLWhvdmVyJylcbiAgICB9LCAzMDAwKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGB9PlxuICAgICAgICAgIDxwPkl0J3MgYSB0cmFwISBEb24ndCBDbGljay4uIDwvcD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX0+Q0xJQ0sgTUU8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCYWNrZHJvcCBvcGVuPXtvcGVufSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gc3g9e2JhY2tkcm9wU3R5bGV9PlxuICAgICAgICAgIDxDYXJkIC8+XG4gICAgICAgIDwvQmFja2Ryb3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdGV4dFwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFib3V0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxBbmltYXRlZExldHRlcnNcbiAgICAgICAgICAgICAgbGV0dGVyQ2xhc3M9e2xldHRlckNsYXNzfVxuICAgICAgICAgICAgICBzdHJBcnJheT17WydBJywgJ2InLCAnbycsICd1JywgJ3QnLCAnICcsICdtJywgJ2UgICddfVxuICAgICAgICAgICAgICBpZHg9ezE1fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJJ20gYSBUaGlyZCBZZWFyIHN0dWRlbnQgQ29tcHV0ZXIgU2NpZW5jZSBzdHVkZW50LlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBJJ20gdmVyeSBhbWJpdGlvdXMgc29vbiB0byBiZSBhbiBFbmdpbmVlciBzcGVjaWxpemVkIGluIERhdGEgU2NpZW5jZVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBhbmQgTWFjaGluZSBMZWFybmluZyBpbiAuIEkgd291bGQgbG92ZSB0byB3b3JrIG9uIG1vcmUgYW55IHByb2plY3RzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBhbGlnbj1cIkxFRlRcIj5cbiAgICAgICAgICAgIEkgYWxzbyBzZXJ2ZSBhcyB0aGUgQ2hhaXBlcnNvbiBmb3IgSUVULVZJVCwgYSBzdHVkZW50IHJ1biBjaGFwdGVyIGluXG4gICAgICAgICAgICBWSVQsIFZlbGxvcmUuXG4gICAgICAgICAgICA8YnIgLz5JIGFtIGhpZ2hseSBpbnRlcmVzdGVkIGluIHJlc2VhcmNoIG9wcG9ydHVuaXRpZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGFsaWduPVwiTEVGVFwiPlxuICAgICAgICAgICAgSSBhbHNvIGxpa2UgdG8gc2VydmUgYmFjayB0byB0aGUgY29tbXVuaXR5IHRocm91Z2ggbXkgc3BlY2lhbCBsb3ZlXG4gICAgICAgICAgICBmb3IgZG9ncy5cbiAgICAgICAgICAgIDxiciAvPkkgYWNjb21wbGlzaCB0aGlzIHRhc2sgdGhyb3VnaCBzZXJ2aW5nIGFzIEh1bWFuIFJlc291cmNlc1xuICAgICAgICAgICAgRGlyZWN0b3IgZm9yIExpdHRlbG92ZSwgSW5kb3JlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBhbGlnbj1cIkxFRlRcIj5cbiAgICAgICAgICAgIEknbSBhIHF1aXRlbHkgY29uZmlkZW50LCBhcnRpc3RpYywgb3B0aW1pc3RpYywgYW5kIHBlcnBldHVhbGx5XG4gICAgICAgICAgICB3b3JraW5nIG9uXG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHByb2JsZW0gYXQgYSB0aW1lLiBJIGxvdmUgdG8gbGlzdGVuIHRvIG9sZCBtdXNpYyB3aGVuIEkgYW0gd29ya2luZy57JyAnfVxuICAgICAgICAgICAgPGJyIC8+SSBhbSBhbHdheXMgdXAgZm9yIGRyYXdpbmcgTWFydmVsIGhlcm9zIHNrZXRjaGVzIGFuZCBsaXN0ZW5pbmdcbiAgICAgICAgICAgIHRvIG9sZCBtdXNpYy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgYWxpZ249XCJMRUZUXCI+WW91IGNhbiBsZWFybiBtb3JlIGFib3V0IG1lIGluIHRoZSByZXN1bWUuPC9wPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJSZXN1bWUucGRmXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlc2xheW91dFtcImZsYXQtYnV0dG9uXCJdfWB9PlJFU1VNRTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TG9hZGVyIHR5cGU9XCJwYWNtYW5cIiAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQnV0dG9uIiwiTG9hZGVyIiwiQW5pbWF0ZWRMZXR0ZXJzIiwic3R5bGVzbGF5b3V0IiwiQmFja2Ryb3AiLCJDYXJkIiwiQWJvdXQiLCJiYWNrZHJvcFN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJyaWdodCIsImxlZnQiLCJ6SW5kZXgiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsb3NlIiwiaGFuZGxlVG9nZ2xlIiwibGV0dGVyQ2xhc3MiLCJzZXRMZXR0ZXJDbGFzcyIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsInN4Iiwic3RyQXJyYXkiLCJpZHgiLCJiciIsImFsaWduIiwiaHJlZiIsImEiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/About/index.js\n");

/***/ })

});