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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _public_assets_CursorSVG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/assets/CursorSVG */ \"(app-pages-browser)/./public/assets/CursorSVG.tsx\");\n/* harmony import */ var _types_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/types/type */ \"(app-pages-browser)/./types/type.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CursorChat = (param)=>{\n    let { cursor, cursorState, setCursorState, updateMyPresence } = param;\n    const handleChange = (e)=>{\n        updateMyPresence({\n            message: e.target.value\n        });\n        setCursorState({\n            mode: _types_type__WEBPACK_IMPORTED_MODULE_2__.CursorMode.Chat,\n            previousMessage: null,\n            message: e.target.value\n        });\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            setCursorState({\n                mode: _types_type__WEBPACK_IMPORTED_MODULE_2__.CursorMode.Chat,\n                previousMessage: cursorState.message,\n                message: \"\"\n            });\n        } else if (e.key === \"Escape\") {\n            setCursorState({\n                mode: _types_type__WEBPACK_IMPORTED_MODULE_2__.CursorMode.Chat,\n                previousMessage: cursorState.message,\n                message: \"\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute top-0 left-0\",\n        style: {\n            transform: \"translateX(\".concat(cursor.x, \"px) translateY(\").concat(cursor.y, \"px)\")\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_public_assets_CursorSVG__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    color: \"#000\"\n                }, void 0, false, {\n                    fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-2 top-5 bg-blue-500 px-4 py-2 text-sm leading-relaxed text-white rounded-[20px]\",\n                    children: [\n                        cursorState.previousMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cursorState.previousMessage\n                        }, void 0, false, {\n                            fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"z-10 w-60 border-none bg-transparent text-white placeholder-blue-300 outline-none\",\n                            autoFocus: true,\n                            onChange: handleChange,\n                            onKeyDown: handleKeyDown,\n                            placeholder: cursorState.previousMessage ? \"\" : \"Type a message...\",\n                            value: cursorState.message,\n                            maxLength: 50\n                        }, void 0, false, {\n                            fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/home/e11even/Desktop/Figma-clone/components/cursor/CursorChat.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CursorChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CursorChat);\nvar _c;\n$RefreshReg$(_c, \"CursorChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY3Vyc29yL0N1cnNvckNoYXQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDUztBQUNqQztBQUUxQixNQUFNRyxhQUFhO1FBQUMsRUFDbEJDLE1BQU0sRUFDTkMsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLGdCQUFnQixFQUNBO0lBQ2hCLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJGLGlCQUFpQjtZQUFFRyxTQUFTRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFBQztRQUUzQ04sZUFBZTtZQUNiTyxNQUFNWixtREFBVUEsQ0FBQ2EsSUFBSTtZQUNyQkMsaUJBQWlCO1lBQ2pCTCxTQUFTRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDekI7SUFDRjtJQUVBLE1BQU1JLGdCQUFnQixDQUFDUDtRQUNyQixJQUFJQSxFQUFFUSxHQUFHLEtBQUssU0FBUztZQUNyQlgsZUFBZTtnQkFDYk8sTUFBTVosbURBQVVBLENBQUNhLElBQUk7Z0JBQ3JCQyxpQkFBaUJWLFlBQVlLLE9BQU87Z0JBQ3BDQSxTQUFTO1lBQ1g7UUFDRixPQUFPLElBQUlELEVBQUVRLEdBQUcsS0FBSyxVQUFVO1lBQzdCWCxlQUFlO2dCQUNiTyxNQUFNWixtREFBVUEsQ0FBQ2EsSUFBSTtnQkFDckJDLGlCQUFpQlYsWUFBWUssT0FBTztnQkFDcENBLFNBQVM7WUFDWDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7UUFDQ0MsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLFdBQVcsY0FBd0NqQixPQUExQkEsT0FBT2tCLENBQUMsRUFBQyxtQkFBMEIsT0FBVGxCLE9BQU9tQixDQUFDLEVBQUM7UUFDOUQ7a0JBR0E7OzhCQUNFLDhEQUFDdkIsZ0VBQVNBO29CQUFDd0IsT0FBTTs7Ozs7OzhCQUNqQiw4REFBQ047b0JBQUlDLFdBQVU7O3dCQUNaZCxZQUFZVSxlQUFlLGtCQUMxQiw4REFBQ0c7c0NBQUtiLFlBQVlVLGVBQWU7Ozs7OztzQ0FFbkMsOERBQUNVOzRCQUNDTixXQUFVOzRCQUNWTyxXQUFXOzRCQUNYQyxVQUFVbkI7NEJBQ1ZvQixXQUFXWjs0QkFDWGEsYUFBYXhCLFlBQVlVLGVBQWUsR0FBRyxLQUFLOzRCQUNoREgsT0FBT1AsWUFBWUssT0FBTzs0QkFDMUJvQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3ZCO0tBNURNM0I7QUE4RE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jdXJzb3IvQ3Vyc29yQ2hhdC50c3g/N2ExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3Vyc29yU1ZHIGZyb20gXCJAL3B1YmxpYy9hc3NldHMvQ3Vyc29yU1ZHXCI7XG5pbXBvcnQgeyBDdXJzb3JDaGF0UHJvcHMsIEN1cnNvck1vZGUgfSBmcm9tIFwiQC90eXBlcy90eXBlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEN1cnNvckNoYXQgPSAoe1xuICBjdXJzb3IsXG4gIGN1cnNvclN0YXRlLFxuICBzZXRDdXJzb3JTdGF0ZSxcbiAgdXBkYXRlTXlQcmVzZW5jZSxcbn06IEN1cnNvckNoYXRQcm9wcykgPT4ge1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICB1cGRhdGVNeVByZXNlbmNlKHsgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSk7XG5cbiAgICBzZXRDdXJzb3JTdGF0ZSh7XG4gICAgICBtb2RlOiBDdXJzb3JNb2RlLkNoYXQsXG4gICAgICBwcmV2aW91c01lc3NhZ2U6IG51bGwsXG4gICAgICBtZXNzYWdlOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2V0Q3Vyc29yU3RhdGUoe1xuICAgICAgICBtb2RlOiBDdXJzb3JNb2RlLkNoYXQsXG4gICAgICAgIHByZXZpb3VzTWVzc2FnZTogY3Vyc29yU3RhdGUubWVzc2FnZSxcbiAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHNldEN1cnNvclN0YXRlKHtcbiAgICAgICAgbW9kZTogQ3Vyc29yTW9kZS5DaGF0LFxuICAgICAgICBwcmV2aW91c01lc3NhZ2U6IGN1cnNvclN0YXRlLm1lc3NhZ2UsXG4gICAgICAgIG1lc3NhZ2U6IFwiXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTBcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2N1cnNvci54fXB4KSB0cmFuc2xhdGVZKCR7Y3Vyc29yLnl9cHgpYCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgey8qIHtjdXJzb3JTdGF0ZS5tb2RlID09PSBDdXJzb3JNb2RlLkNoYXQgJiYgKCAqL31cbiAgICAgIDw+XG4gICAgICAgIDxDdXJzb3JTVkcgY29sb3I9XCIjMDAwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgdG9wLTUgYmctYmx1ZS01MDAgcHgtNCBweS0yIHRleHQtc20gbGVhZGluZy1yZWxheGVkIHRleHQtd2hpdGUgcm91bmRlZC1bMjBweF1cIj5cbiAgICAgICAgICB7Y3Vyc29yU3RhdGUucHJldmlvdXNNZXNzYWdlICYmIChcbiAgICAgICAgICAgIDxkaXY+e2N1cnNvclN0YXRlLnByZXZpb3VzTWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0xMCB3LTYwIGJvcmRlci1ub25lIGJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgcGxhY2Vob2xkZXItYmx1ZS0zMDAgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17Y3Vyc29yU3RhdGUucHJldmlvdXNNZXNzYWdlID8gXCJcIiA6IFwiVHlwZSBhIG1lc3NhZ2UuLi5cIn1cbiAgICAgICAgICAgIHZhbHVlPXtjdXJzb3JTdGF0ZS5tZXNzYWdlfVxuICAgICAgICAgICAgbWF4TGVuZ3RoPXs1MH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICAgey8qICl9ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yQ2hhdDtcbiJdLCJuYW1lcyI6WyJDdXJzb3JTVkciLCJDdXJzb3JNb2RlIiwiUmVhY3QiLCJDdXJzb3JDaGF0IiwiY3Vyc29yIiwiY3Vyc29yU3RhdGUiLCJzZXRDdXJzb3JTdGF0ZSIsInVwZGF0ZU15UHJlc2VuY2UiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIiwibW9kZSIsIkNoYXQiLCJwcmV2aW91c01lc3NhZ2UiLCJoYW5kbGVLZXlEb3duIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJ4IiwieSIsImNvbG9yIiwiaW5wdXQiLCJhdXRvRm9jdXMiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsInBsYWNlaG9sZGVyIiwibWF4TGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/cursor/CursorChat.tsx\n"));

/***/ })

});