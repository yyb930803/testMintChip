"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{48455:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var o=n(27378),r=n(31542),i=n(23615),u=n.n(i),l=!!("undefined"!=typeof window&&window.document&&window.document.createElement),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return l?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),r.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(o.Component);c.propTypes={children:u().node.isRequired,node:u().any};var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=function(e){function t(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){r.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=o.cloneElement(this.props.children)),this.portal=r.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(o.Component);d.propTypes={children:u().node.isRequired,node:u().any};var f=r.createPortal?c:d,p=n(79630),h=n(85912),y=function(){var e=(0,p.ui)();try{return Boolean(e.selection&&""!==h.Editor.string(e,e.selection))}catch(t){return!1}},b=n(74372),m=function(e){var t=e.plugins,n=e.translations,r=y(),i=(0,o.useRef)(null),u=(0,p.ui)();return(0,o.useEffect)(function(){var e=i.current;if(r&&e){var t=window.getSelection();try{var n=null==t?void 0:t.getRangeAt(0),o=null==n?void 0:n.getBoundingClientRect();if(o){var u=o.left,l=o.top,a=o.width;e.style.opacity="1",e.style.top="".concat(l+window.scrollY-e.offsetHeight,"px"),e.style.left="".concat(u+window.scrollX-e.offsetWidth/2+a/2,"px")}}catch(c){}}},[u,r]),o.createElement(f,null,o.createElement("div",{className:"react-page-plugins-content-slate-inline-toolbar "+(r?"":"react-page-plugins-content-slate-inline-toolbar--hidden"),style:{padding:0},ref:i},t&&t.map(function(e,t){return e.addHoverButton?o.createElement(b.Z,{dark:!0,translations:n,key:t,plugin:e}):null})))}}}]);
//# sourceMappingURL=8455.b6d48c221fab9417.js.map