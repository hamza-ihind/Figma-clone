"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/cursor/CursorChat.tsx":
/*!******************************************!*\
  !*** ./components/cursor/CursorChat.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_assets_CursorSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/assets/CursorSVG */ \"(app-pages-browser)/./public/assets/CursorSVG.tsx\");\n/* harmony import */ var _types_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/type */ \"(app-pages-browser)/./types/type.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CursorChat = (param)=>{\n    let { cursor, cursorState, setCursorState, updateMyPresence } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0\",\n        style: {\n            transform: \"translateX(\".concat(cursor.x, \"px) translateY(\").concat(cursor.y, \"px)\")\n        },\n        children: cursorState.mode === _types_type__WEBPACK_IMPORTED_MODULE_2__.CursorMode.Chat && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_CursorSVG__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                color: \"#000\"\n            }, void 0, false, {\n                fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n                lineNumber: 20,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CursorChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CursorChat);\nvar _c;\n$RefreshReg$(_c, \"CursorChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY3Vyc29yL0N1cnNvckNoYXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDUztBQUNqQztBQUUxQixNQUFNRyxhQUFhO1FBQUMsRUFDbEJDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLGdCQUFnQixFQUNBO0lBQ2hCLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFDTEMsV0FBVyxjQUF3Q1AsT0FBMUJBLE9BQU9RLENBQUMsRUFBQyxtQkFBMEIsT0FBVFIsT0FBT1MsQ0FBQyxFQUFDO1FBQzlEO2tCQUVDUixZQUFZUyxJQUFJLEtBQUtiLG1EQUFVQSxDQUFDYyxJQUFJLGtCQUNuQztzQkFDRSw0RUFBQ2YsZ0VBQVNBO2dCQUFDZ0IsT0FBTTs7Ozs7Ozs7Ozs7O0FBSzNCO0tBcEJNYjtBQXNCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2N1cnNvci9DdXJzb3JDaGF0LnRzeD83YTE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDdXJzb3JTVkcgZnJvbSBcIkAvcHVibGljL2Fzc2V0cy9DdXJzb3JTVkdcIjtcbmltcG9ydCB7IEN1cnNvckNoYXRQcm9wcywgQ3Vyc29yTW9kZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3Vyc29yQ2hhdCA9ICh7XG4gIGN1cnNvcixcbiAgY3Vyc29yU3RhdGUsXG4gIHNldEN1cnNvclN0YXRlLFxuICB1cGRhdGVNeVByZXNlbmNlLFxufTogQ3Vyc29yQ2hhdFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtjdXJzb3IueH1weCkgdHJhbnNsYXRlWSgke2N1cnNvci55fXB4KWAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjdXJzb3JTdGF0ZS5tb2RlID09PSBDdXJzb3JNb2RlLkNoYXQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDdXJzb3JTVkcgY29sb3I9XCIjMDAwXCIgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yQ2hhdDtcbiJdLCJuYW1lcyI6WyJDdXJzb3JTVkciLCJDdXJzb3JNb2RlIiwiUmVhY3QiLCJDdXJzb3JDaGF0IiwiY3Vyc29yIiwiY3Vyc29yU3RhdGUiLCJzZXRDdXJzb3JTdGF0ZSIsInVwZGF0ZU15UHJlc2VuY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsIngiLCJ5IiwibW9kZSIsIkNoYXQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cursor/CursorChat.tsx\n"));

/***/ })

});