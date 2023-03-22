"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 43896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ reducer),
/* harmony export */   "U": () => (/* binding */ ActionType)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var ActionType;
(function(ActionType) {
    ActionType["UPDATE_USER"] = "Update User";
    ActionType["UPDATE_TOKEN"] = "Update Token";
})(ActionType || (ActionType = {}));
const reducer = (state, action)=>{
    switch(action.type){
        case ActionType.UPDATE_USER:
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("_id", action.payload._id);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("email", action.payload.email);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("phone", action.payload.phone);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("firstname", action.payload.firstname);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("lastname", action.payload.lastname);
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("image", action.payload.image);
            return {
                ...state,
                user: action.payload
            };
        case ActionType.UPDATE_TOKEN:
            js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("token", action.payload);
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 82174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F1": () => (/* binding */ useStateContext),
/* harmony export */   "X9": () => (/* binding */ StateProvider)
/* harmony export */ });
/* unused harmony export defaultState */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43896);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83864);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_page_editor__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducer__WEBPACK_IMPORTED_MODULE_3__]);
_reducer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const defaultState = {
    user: {
        _id: "",
        email: "",
        phone: "",
        firstname: "",
        lastname: "",
        image: ""
    },
    token: ""
};
// eslint-disable-next-line @typescript-eslint/no-empty-function
const myContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    state: defaultState,
    dispatch: ()=>_react_page_editor__WEBPACK_IMPORTED_MODULE_2__.NOOP
});
const useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(myContext);
const StateProvider = ({ children  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__/* .reducer */ .I, defaultState);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(myContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;