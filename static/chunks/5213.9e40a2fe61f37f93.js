"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5213],{20874:function(e,t,n){var r=n(27378),a=n(44833),l=n(28854),o=n(71502),i=n(25158),c=n(26655),u=n(60042),d=n.n(u),s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},f=function(e,t){var n,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===l[0]||2===l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(i){l=[6,i],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return o};t.Z=(0,r.memo)(function(e){(0,l.WW)().t;var t=h((0,r.useState)({url:"",name:""}),2),n=t[0],u=t[1];(0,r.useEffect)(function(){e.url&&u({url:e.url,name:""})},[e.url]);var m=(0,r.useCallback)(function(t){t.forEach(function(t){var n=new FileReader;n.onabort=function(){return console.log("file reader aborted")},n.onerror=function(){return console.log("file reader failed")},n.onload=function(){var r,a,l,o;return r=void 0,a=void 0,l=void 0,o=function(){var r;return f(this,function(a){return u({url:r=n.result,name:t.name}),e.imageUploaded({url:r}),[2]})},new(l||(l=Promise))(function(e,t){function n(e){try{c(o.next(e))}catch(n){t(n)}}function i(e){try{c(o.throw(e))}catch(n){t(n)}}function c(t){var r;t.done?e(t.value):((r=t.value)instanceof l?r:new l(function(e){e(r)})).then(n,i)}c((o=o.apply(r,a||[])).next())})},n.readAsDataURL(t)})},[]),p=(0,a.uI)({onDrop:m,multiple:!1}),v=p.getRootProps,b=p.getInputProps,g=p.open,y=p.acceptedFiles,E=p.rejectedFiles,w=(0,r.useCallback)(function(){u({url:"",name:""}),e.imageUploaded({url:""})},[]),k=(0,r.useCallback)(function(){g()},[g]);y.length>0&&n.url;var C=(void 0===E?[]:E).length>0;return r.createElement("div",null,!n.url&&r.createElement("div",s({},v(),{className:d()("file-uploader",e.containerClass)}),r.createElement("input",s({},b())),r.createElement(o.Z,{name:i.gv.AdDD_SQUARE}),r.createElement("p",null,"Upload file"),r.createElement("label",null,"20mb max")),n.url&&r.createElement("div",{className:"image-preview"},C&&r.createElement("h3",null,"This is not an image!"),r.createElement("img",{src:n.url,alt:"image dropzone"}),r.createElement("label",null,n.name),r.createElement("div",{className:"action-buttons"},r.createElement(c.Z,{filled:!0,secondary:!0,onClick:k},"Change"),r.createElement(c.Z,{filled:!0,secondary:!0,onClick:w},"Delete"))))})},35213:function(e,t,n){n.r(t);var r=n(61352),a=n(2867),l=n(28854),o=n(92920),i=n(20874),c=n(70028),u=n(23579),d=n(96293),s=n(27378),f=function(){return(f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},h=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,l=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(i){a={error:i}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(a)throw a.error}}return o};t.default=function(e){var t,n,r,a,f,p,v,b,g,y,E,w,k,C,S,Z=h((0,s.useState)(null!==(t=e.data.openInNewWindow)&&void 0!==t&&t),2),x=Z[0],M=Z[1],N=(0,l.WW)().t;return s.createElement("div",{className:"image-setting-controls"},s.createElement(o.Z,{title:"Image Style"}),e.imageUpload&&s.createElement(i.Z,{translations:e.translations,imageUpload:e.imageUpload,url:e.data.src,imageUploaded:function(t){return e.onChange({src:t.url})}}),s.createElement(c.Z,{horizontal:!0,label:N(null===(n=e.translations)||void 0===n?void 0:n.imageUrl)},s.createElement(u.Z,{placeholder:null!==(a=N(null===(r=e.translations)||void 0===r?void 0:r.srcPlaceholder))&&void 0!==a?a:"",value:null!==(f=e.data.src)&&void 0!==f?f:"",onChange:function(t,n){return e.onChange({src:t})}})),s.createElement(c.Z,{horizontal:!0,label:null!==(v=N(null===(p=e.translations)||void 0===p?void 0:p.altLabel))&&void 0!==v?v:""},s.createElement(u.Z,{placeholder:null!==(g=N(null===(b=e.translations)||void 0===b?void 0:b.altPlaceholder))&&void 0!==g?g:"",value:null!==(y=e.data.alt)&&void 0!==y?y:"",onChange:function(t,n){return e.onChange({alt:t})}})),s.createElement(d.Z,null),s.createElement(c.Z,{horizontal:!0,label:null!==(w=N(null===(E=e.translations)||void 0===E?void 0:E.hrefLabel))&&void 0!==w?w:""},s.createElement(u.Z,{placeholder:null!==(C=N(null===(k=e.translations)||void 0===k?void 0:k.hrefPlaceholder))&&void 0!==C?C:"",value:null!==(S=e.data.href)&&void 0!==S?S:"",onChange:function(t,n){return e.onChange({href:t})}})),s.createElement("div",{className:"paralax-effect"},s.createElement("div",{className:"field-label"},"Open link in new window"),s.createElement(m,{sx:{m:1},value:x,defaultChecked:x,onChange:function(t){M(t.target.checked),e.onChange({openInNewWindow:t.target.checked})}})))};var m=(0,r.ZP)(function(e){return s.createElement(a.Z,f({focusVisibleClassName:".Mui-focusVisible",disableRipple:!0},e))})(function(e){var t=e.theme;return{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:(t.palette.mode,"#0048db"),opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#33cf4d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]},"&.Mui-disabled + .MuiSwitch-track":{opacity:"light"===t.palette.mode?.7:.3}},"& .MuiSwitch-thumb":{boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"light"===t.palette.mode?"#E9E9EA":"#39393D",opacity:1,transition:t.transitions.create(["background-color"],{duration:500})}}})}}]);
//# sourceMappingURL=5213.9e40a2fe61f37f93.js.map