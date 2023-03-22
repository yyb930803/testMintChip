"use strict";
exports.id = 718;
exports.ids = [718];
exports.modules = {

/***/ 34718:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83864);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_page_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64254);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3590);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82174);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43896);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__, _state__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__, _state__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const VerificationModal = ({ email , setIsVerifyPage  })=>{
    const { state: { user , token  } , dispatch  } = (0,_state__WEBPACK_IMPORTED_MODULE_5__/* .useStateContext */ .F1)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const resend = async ()=>{
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        };
        try {
            await fetch(`${"https://mintchipbeta.com/api/v1"}/auth/resend`, options).then((res)=>res.json()).then((res)=>{
                if (res.code === 200) {
                    // setIsVerifyPage(true);
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success("Resend Success!");
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(res.message);
                }
                setLoading(false);
            });
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Network Error!");
            setLoading(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (code.length === 6) {
            verification();
        }
    }, [
        code
    ]);
    const verification = async ()=>{
        setLoading(true);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                verificationCode: code
            })
        };
        try {
            await fetch(`${"https://mintchipbeta.com/api/v1"}/auth/verify`, options).then((res)=>res.json()).then((res)=>{
                if (res.code === 200) {
                    dispatch({
                        type: _state__WEBPACK_IMPORTED_MODULE_6__/* .ActionType.UPDATE_USER */ .U.UPDATE_USER,
                        payload: res.data
                    });
                    dispatch({
                        type: _state__WEBPACK_IMPORTED_MODULE_6__/* .ActionType.UPDATE_TOKEN */ .U.UPDATE_TOKEN,
                        payload: res.data.token
                    });
                    router.push("/home");
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(res.message);
                }
                setLoading(false);
            });
        } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error("Network Error!");
            setLoading(false);
        }
    };
    const go_head = ()=>{
        setIsVerifyPage(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex w-full items-center justify-center h-[100vh]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col w-[400px] h-fit bg-alpha-10 rounded-[15px] p-[30px] gap-[20px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex items-center justify-center w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "w-[130px] shrink-0 object-cover",
                        src: "/images/mintchip-beta-logo.png"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-gray-2 text-[18px] font-bold",
                            children: "Check your email"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-gray-1 text-[16px]",
                            children: "to continue to MINTCHIP"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center gap-[10px] w-fit rounded-full h-[40px] px-[16px] py-[6px] border-gray-1 border-[1px] border-solid",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "rounded-full h-full",
                            src: "https://www.gravatar.com/avatar?d=mp",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-gray-1 text-[14px]",
                            children: email
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>go_head(),
                            className: "flex items-center justify-center hover:cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_page_editor__WEBPACK_IMPORTED_MODULE_7__.SVGIcon, {
                                name: _react_page_editor__WEBPACK_IMPORTED_MODULE_7__.ICON_NAMES.EDIT
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row items-center justify-start text-gray-2 text-[14px]",
                            children: "Verification code"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-row items-center justify-start text-gray-1 text-[14px]",
                            children: "Enter the verification code sent to your email address"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-row items-center justify-start gap-[20px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_3___default()), {
                            value: code,
                            onChange: setCode,
                            numInputs: 6,
                            isInputNum: true,
                            containerStyle: "flex flex-row gap-[10px]",
                            inputStyle: "border-b-[2px] text-[26px] text-white text-center border-solid border-gray-1 bg-transparent hidden-arrow focus:outline-none focus:border-[#0048DB]"
                        }),
                        loading === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_page_editor__WEBPACK_IMPORTED_MODULE_7__.ButtonLoading, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: ()=>resend(),
                    className: "flex flex-row items-center justify-start text-primary-blue text-[14px] hover:cursor-pointer hover:underline",
                    children: "Resend code"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerificationModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;