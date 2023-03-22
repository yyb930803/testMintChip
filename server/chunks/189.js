"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 53511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_DashboardLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ../packages/editor/lib/index.js
var lib = __webpack_require__(83864);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
// EXTERNAL MODULE: ./components/screenLoading/index.tsx
var screenLoading = __webpack_require__(74668);
;// CONCATENATED MODULE: ./components/Navigation.tsx





const Navigation = ({ page  })=>{
    const router = (0,router_.useRouter)();
    const menuItems = [
        {
            key: "home",
            name: "My Sites",
            icon: lib.ICON_NAMES.HOME,
            status: true,
            url: "/home"
        },
        {
            key: "collectibles",
            name: "Collectibles",
            icon: lib.ICON_NAMES.COLLECTIBLES,
            status: true,
            url: "/collectibles"
        },
        {
            key: "golive",
            name: "Go live",
            icon: lib.ICON_NAMES.PLAY,
            status: true,
            url: "/golive"
        },
        {
            key: "settings",
            name: "Settings",
            icon: lib.ICON_NAMES.SETTING,
            status: true,
            url: "/settings"
        },
        {
            key: "content",
            name: "Exclusive Content",
            icon: lib.ICON_NAMES.EXCLUSIVE,
            status: false,
            url: "/content"
        },
        {
            key: "rewards",
            name: "Rewards",
            icon: lib.ICON_NAMES.REWARDS,
            status: false,
            url: "/rewards"
        },
        {
            key: "fans",
            name: "Your top fans",
            icon: lib.ICON_NAMES.FANS,
            status: false,
            url: "/fans"
        }
    ];
    const wrapperRef = (0,external_react_.useRef)(null);
    const [open, setOpen] = (0,external_react_.useState)(false);
    const [modalId, setModalId] = (0,external_react_.useState)("");
    const [loading, setLoading] = (0,external_react_.useState)(false);
    const handleClick = (key, url, status)=>{
        setModalId(key);
        if (status) {
            setLoading(true);
            router.push({
                pathname: url
            });
            setLoading(false);
        } else {
            setOpen(true);
        }
    };
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            const { current: wrap  } = wrapperRef;
            if (wrap && !wrap.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        wrapperRef
    ]);
    if (loading === true) {
        return /*#__PURE__*/ jsx_runtime_.jsx(screenLoading/* default */.Z, {});
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden md:flex flex-col w-[270px] bg-primary-mint h-[100vh] rounded-r-[48px] pt-16 px-[20px] pb-8 gap-[64px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "self-stretch flex flex-col py-0 px-5 items-center justify-start gap-[8px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative w-[183px] h-10 shrink-0 overflow-hidden hidden"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                className: "relative w-[158px] h-[29px] shrink-0 object-cover",
                                alt: "",
                                src: "/images/mintchip-beta-logo-1.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "self-stretch flex-1 flex flex-col items-start justify-start gap-[8px]",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cursor-pointer self-stretch rounded-xl h-12 shrink-0 flex flex-row py-2 px-5 box-border items-center justify-start gap-[12px] opacity-100 hover:opacity-60" + (page === item.key ? " bg-gray" : ""),
                                        onClick: ()=>handleClick(item.key, item.url, item.status),
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(lib.SVGIcon, {
                                                name: item.icon,
                                                active: page === item.key,
                                                black: page !== item.key && item.status
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "relative leading-[28px] font-medium" + (page === item.key ? " text-primary-mint" : item.status ? " text-gray" : " text-gray-1"),
                                                children: item.name
                                            })
                                        ]
                                    }, index),
                                    !item.status && modalId === item.key && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            ref: wrapperRef,
                                            className: "relative bg-gray-4 left-[230px] top-[-50px] w-[320px] z-20 rounded-[12px] p-[16px]" + (open ? " block" : " hidden"),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "text-gray-2",
                                                    children: "Coming soon!"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "text-gray-1",
                                                    children: [
                                                        "We are working to give you all the fan engagement tools your heart desires!",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        `Stay tuned:)`
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, index))
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex fixed bottom-0 md:hidden flex-row w-full bg-primary-mint h-[72px] justify-between rounded-t-[20px] px-[23px] py-[13px] z-20",
                children: menuItems.map((item, index)=>item.status && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-pointer self-stretch rounded-xl h-12 shrink-0 flex flex-row py-2 px-5 box-border items-center justify-start gap-[12px] opacity-100 hover:opacity-60" + (page === item.key ? " bg-gray" : ""),
                        onClick: ()=>handleClick(item.key, item.url, item.status),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(lib.SVGIcon, {
                            name: item.icon,
                            active: page === item.key,
                            black: page !== item.key && item.status
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const components_Navigation = (Navigation);

;// CONCATENATED MODULE: ./components/DashboardLayout.tsx



const DashboardLayout = ({ children , page  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row min-h-screen",
        style: {
            fontFamily: "RocGrotesk-Regular"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navigation, {
                page: page
            }),
            children
        ]
    });
};
/* harmony default export */ const components_DashboardLayout = (DashboardLayout);


/***/ }),

/***/ 12595:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83864);
/* harmony import */ var _react_page_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_page_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82174);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43896);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _state__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_3__, _state__WEBPACK_IMPORTED_MODULE_4__, _state__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Profile = ()=>{
    const { state: { user , token  } , dispatch  } = (0,_state__WEBPACK_IMPORTED_MODULE_4__/* .useStateContext */ .F1)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setImage((user.image === "" ? js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("image") : user.image) || "");
        setFirstname((user.firstname === "" ? js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("firstname") : user.firstname) || "");
        setLastname((user.lastname === "" ? js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("lastname") : user.lastname) || "");
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            const { current: wrap  } = wrapperRef;
            if (wrap && !wrap.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        wrapperRef
    ]);
    const handleSignOut = async ()=>{
        setLoading(true);
        dispatch({
            type: _state__WEBPACK_IMPORTED_MODULE_5__/* .ActionType.UPDATE_TOKEN */ .U.UPDATE_TOKEN,
            payload: ""
        });
        router.push("/");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onClick: ()=>setOpen(true),
        className: "flex flex-row justify-between w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: "block md:hidden relative w-[89.78px] h-[32.9px] shrink-0",
                src: "https://github.com/MintChipRepo/mintchip-assets/blob/main/logo/light-beta-initial-logo.png?raw=true"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row items-center justify-start gap-[12px] cursor-pointer opacity-100 hover:opacity-60",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "relative w-[35px] h-[35px] md:w-[40px] md:h-[40px] shrink-0 object-cover rounded-full",
                        src: image
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hidden md:block relative leading-[28px] font-medium text-gray-2",
                        children: [
                            firstname,
                            " ",
                            lastname
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute top-0 right-0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: wrapperRef,
                    className: "relative flex flex-col bg-gray-4 right-[28px] md:right-[50px] top-[70px] md:top-[120px] w-[233px] z-20 rounded-[12px] p-[16px] gap-[15px]" + (open ? " block" : " hidden"),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-gray-1 text-[12px] leading-[18px]",
                            children: "We hate to see you go, but we love to watch you leave - Lil Weezy"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>handleSignOut(),
                            className: "flex items-center justify-center gap-[10px] w-full text-gray-2 bg-primary-blue h-[48px] rounded-[8px] px-5 text-[14px] opacity-100 hover:opacity-60",
                            children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_page_editor__WEBPACK_IMPORTED_MODULE_6__.ButtonLoading, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center gap-[10px] w-full h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                        width: "21",
                                        height: "20",
                                        viewBox: "0 0 21 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M2.16675 9.99992L1.77631 9.68757L1.52644 9.99992L1.77631 10.3123L2.16675 9.99992ZM9.66675 10.4999C9.94289 10.4999 10.1667 10.2761 10.1667 9.99992C10.1667 9.72378 9.94289 9.49992 9.66675 9.49992V10.4999ZM5.10965 5.5209L1.77631 9.68757L2.55718 10.3123L5.89052 6.1456L5.10965 5.5209ZM1.77631 10.3123L5.10965 14.4789L5.89052 13.8542L2.55718 9.68757L1.77631 10.3123ZM2.16675 10.4999H9.66675V9.49992H2.16675V10.4999Z",
                                                fill: "white"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M8.83325 6.77669V6.61406C8.83325 5.1012 8.83325 4.34477 9.25091 3.80447C9.28741 3.75726 9.326 3.71171 9.36657 3.66795C9.83084 3.16715 10.577 3.04279 12.0693 2.79408V2.79408C15.0987 2.28917 16.6134 2.03672 17.643 2.81546C17.7312 2.88215 17.8156 2.95366 17.8958 3.02967C18.8333 3.91721 18.8333 5.45282 18.8333 8.52404V11.4761C18.8333 14.5473 18.8333 16.083 17.8958 16.9705C17.8156 17.0465 17.7312 17.118 17.643 17.1847C16.6134 17.9634 15.0982 17.7109 12.0677 17.2058V17.2058C10.5772 16.9574 9.83189 16.8332 9.36785 16.3336C9.32638 16.289 9.28698 16.2424 9.24976 16.1942C8.83325 15.6543 8.83325 14.899 8.83325 13.3884V13.3884",
                                                stroke: "white"
                                            })
                                        ]
                                    }),
                                    "Sign Out"
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ScreenLoading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute flex top-0 left-0 w-[100vw] h-[100vh] bg-gray items-center justify-center z-20 backdrop-blur-[20px]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            width: 40,
            src: "/images/MINTCHIP_Loading_Gif.gif"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenLoading);


/***/ })

};
;