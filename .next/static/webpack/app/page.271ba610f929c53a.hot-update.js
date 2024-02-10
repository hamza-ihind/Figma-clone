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

/***/ "(app-pages-browser)/./components/Live.tsx":
/*!*****************************!*\
  !*** ./components/Live.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _cursor_LiveCursors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cursor/LiveCursors */ \"(app-pages-browser)/./components/cursor/LiveCursors.tsx\");\n/* harmony import */ var _liveblocks_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/liveblocks.config */ \"(app-pages-browser)/./liveblocks.config.ts\");\n/* harmony import */ var _cursor_CursorChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursor/CursorChat */ \"(app-pages-browser)/./components/cursor/CursorChat.tsx\");\n/* harmony import */ var _cursor_CursorChat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_cursor_CursorChat__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _types_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/type */ \"(app-pages-browser)/./types/type.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Live = ()=>{\n    _s();\n    const others = (0,_liveblocks_config__WEBPACK_IMPORTED_MODULE_3__.useOthers)();\n    const [{ cursor }, updateMyPresence] = (0,_liveblocks_config__WEBPACK_IMPORTED_MODULE_3__.useMyPresence)();\n    const [cursorState, setCursorState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        mode: _types_type__WEBPACK_IMPORTED_MODULE_5__.CursorMode.Hidden\n    });\n    const handlePointerMove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;\n        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;\n        updateMyPresence({\n            cursor: {\n                x,\n                y\n            }\n        });\n    }, []);\n    const handlePointerLeave = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        updateMyPresence({\n            cursor: null,\n            message: null\n        });\n    }, []);\n    const handlePointerDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        const x = event.clientX - event.currentTarget.getBoundingClientRect().x;\n        const y = event.clientY - event.currentTarget.getBoundingClientRect().y;\n        updateMyPresence({\n            cursor: {\n                x,\n                y\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onPointerMove: handlePointerMove,\n        onPointerLeave: handlePointerLeave,\n        onPointerDown: handlePointerDown,\n        className: \"h-[100vh] w-full flex justify-center items-center text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-2xl\",\n                children: \"Liveblocks Figma Clone\"\n            }, void 0, false, {\n                fileName: \"/home/e11even/Desktop/Figma-clone/components/Live.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            cursor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_cursor_CursorChat__WEBPACK_IMPORTED_MODULE_4___default()), {\n                cursor: cursor\n            }, void 0, false, {\n                fileName: \"/home/e11even/Desktop/Figma-clone/components/Live.tsx\",\n                lineNumber: 45,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_cursor_LiveCursors__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                others: others\n            }, void 0, false, {\n                fileName: \"/home/e11even/Desktop/Figma-clone/components/Live.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/e11even/Desktop/Figma-clone/components/Live.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Live, \"sEKJBhOshDG3r/NNxfERETotHmE=\", false, function() {\n    return [\n        _liveblocks_config__WEBPACK_IMPORTED_MODULE_3__.useOthers,\n        _liveblocks_config__WEBPACK_IMPORTED_MODULE_3__.useMyPresence\n    ];\n});\n_c = Live;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Live);\nvar _c;\n$RefreshReg$(_c, \"Live\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTGl2ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDTjtBQUNnQjtBQUNsQjtBQUNIO0FBRTFDLE1BQU1RLE9BQU87O0lBQ1gsTUFBTUMsU0FBU0osNkRBQVNBO0lBQ3hCLE1BQU0sQ0FBQyxFQUFFSyxNQUFNLEVBQUUsRUFBRUMsaUJBQWlCLEdBQUdQLGlFQUFhQTtJQUNwRCxNQUFNLENBQUNRLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7UUFDN0NZLE1BQU1QLG1EQUFVQSxDQUFDUSxNQUFNO0lBQ3pCO0lBRUEsTUFBTUMsb0JBQW9CZixrREFBV0EsQ0FBQyxDQUFDZ0I7UUFDckNBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsSUFBSUYsTUFBTUcsT0FBTyxHQUFHSCxNQUFNSSxhQUFhLENBQUNDLHFCQUFxQixHQUFHSCxDQUFDO1FBQ3ZFLE1BQU1JLElBQUlOLE1BQU1PLE9BQU8sR0FBR1AsTUFBTUksYUFBYSxDQUFDQyxxQkFBcUIsR0FBR0MsQ0FBQztRQUV2RVosaUJBQWlCO1lBQUVELFFBQVE7Z0JBQUVTO2dCQUFHSTtZQUFFO1FBQUU7SUFDdEMsR0FBRyxFQUFFO0lBRUwsTUFBTUUscUJBQXFCeEIsa0RBQVdBLENBQUMsQ0FBQ2dCO1FBQ3RDQSxNQUFNQyxjQUFjO1FBRXBCUCxpQkFBaUI7WUFBRUQsUUFBUTtZQUFNZ0IsU0FBUztRQUFLO0lBQ2pELEdBQUcsRUFBRTtJQUVMLE1BQU1DLG9CQUFvQjFCLGtEQUFXQSxDQUFDLENBQUNnQjtRQUNyQyxNQUFNRSxJQUFJRixNQUFNRyxPQUFPLEdBQUdILE1BQU1JLGFBQWEsQ0FBQ0MscUJBQXFCLEdBQUdILENBQUM7UUFDdkUsTUFBTUksSUFBSU4sTUFBTU8sT0FBTyxHQUFHUCxNQUFNSSxhQUFhLENBQUNDLHFCQUFxQixHQUFHQyxDQUFDO1FBRXZFWixpQkFBaUI7WUFBRUQsUUFBUTtnQkFBRVM7Z0JBQUdJO1lBQUU7UUFBRTtJQUN0QyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFDQ0MsZUFBZWI7UUFDZmMsZ0JBQWdCTDtRQUNoQk0sZUFBZUo7UUFDZkssV0FBVTs7MEJBRVYsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQjs7Ozs7O1lBRW5DdEIsd0JBQVUsOERBQUNKLDJEQUFVQTtnQkFBQ0ksUUFBUUE7Ozs7OzswQkFFL0IsOERBQUNQLDJEQUFXQTtnQkFBQ00sUUFBUUE7Ozs7Ozs7Ozs7OztBQUczQjtHQTNDTUQ7O1FBQ1dILHlEQUFTQTtRQUNlRCw2REFBYUE7OztLQUZoREk7QUE2Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXZlLnRzeD9hODBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXZlQ3Vyc29ycyBmcm9tIFwiLi9jdXJzb3IvTGl2ZUN1cnNvcnNcIjtcbmltcG9ydCB7IHVzZU15UHJlc2VuY2UsIHVzZU90aGVycyB9IGZyb20gXCJAL2xpdmVibG9ja3MuY29uZmlnXCI7XG5pbXBvcnQgQ3Vyc29yQ2hhdCBmcm9tIFwiLi9jdXJzb3IvQ3Vyc29yQ2hhdFwiO1xuaW1wb3J0IHsgQ3Vyc29yTW9kZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVcIjtcblxuY29uc3QgTGl2ZSA9ICgpID0+IHtcbiAgY29uc3Qgb3RoZXJzID0gdXNlT3RoZXJzKCk7XG4gIGNvbnN0IFt7IGN1cnNvciB9LCB1cGRhdGVNeVByZXNlbmNlXSA9IHVzZU15UHJlc2VuY2UoKSBhcyBhbnk7XG4gIGNvbnN0IFtjdXJzb3JTdGF0ZSwgc2V0Q3Vyc29yU3RhdGVdID0gdXNlU3RhdGUoe1xuICAgIG1vZGU6IEN1cnNvck1vZGUuSGlkZGVuLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVQb2ludGVyTW92ZSA9IHVzZUNhbGxiYWNrKChldmVudDogUmVhY3QuUG9pbnRlckV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuXG4gICAgdXBkYXRlTXlQcmVzZW5jZSh7IGN1cnNvcjogeyB4LCB5IH0gfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVQb2ludGVyTGVhdmUgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB1cGRhdGVNeVByZXNlbmNlKHsgY3Vyc29yOiBudWxsLCBtZXNzYWdlOiBudWxsIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlUG9pbnRlckRvd24gPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LlBvaW50ZXJFdmVudCkgPT4ge1xuICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54O1xuICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55O1xuXG4gICAgdXBkYXRlTXlQcmVzZW5jZSh7IGN1cnNvcjogeyB4LCB5IH0gfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIG9uUG9pbnRlck1vdmU9e2hhbmRsZVBvaW50ZXJNb3ZlfVxuICAgICAgb25Qb2ludGVyTGVhdmU9e2hhbmRsZVBvaW50ZXJMZWF2ZX1cbiAgICAgIG9uUG9pbnRlckRvd249e2hhbmRsZVBvaW50ZXJEb3dufVxuICAgICAgY2xhc3NOYW1lPVwiaC1bMTAwdmhdIHctZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiXG4gICAgPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGxcIj5MaXZlYmxvY2tzIEZpZ21hIENsb25lPC9oMT5cblxuICAgICAge2N1cnNvciAmJiA8Q3Vyc29yQ2hhdCBjdXJzb3I9e2N1cnNvcn0gLz59XG5cbiAgICAgIDxMaXZlQ3Vyc29ycyBvdGhlcnM9e290aGVyc30gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpdmU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiTGl2ZUN1cnNvcnMiLCJ1c2VNeVByZXNlbmNlIiwidXNlT3RoZXJzIiwiQ3Vyc29yQ2hhdCIsIkN1cnNvck1vZGUiLCJMaXZlIiwib3RoZXJzIiwiY3Vyc29yIiwidXBkYXRlTXlQcmVzZW5jZSIsImN1cnNvclN0YXRlIiwic2V0Q3Vyc29yU3RhdGUiLCJtb2RlIiwiSGlkZGVuIiwiaGFuZGxlUG9pbnRlck1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwieCIsImNsaWVudFgiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieSIsImNsaWVudFkiLCJoYW5kbGVQb2ludGVyTGVhdmUiLCJtZXNzYWdlIiwiaGFuZGxlUG9pbnRlckRvd24iLCJkaXYiLCJvblBvaW50ZXJNb3ZlIiwib25Qb2ludGVyTGVhdmUiLCJvblBvaW50ZXJEb3duIiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Live.tsx\n"));

/***/ })

});