(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9742],{25460:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return r(93975)}])},93975:function(e,t,r){"use strict";r.r(t);var s=r(24246),a=r(27378),i=r(86677),n=r(71502),l=r(25158),c=r(15035),o=r(34718),x=r(86910);let d=()=>{let e=(0,i.useRouter)(),[t,r]=(0,a.useState)(""),[d,p]=(0,a.useState)(!1),[u,h]=(0,a.useState)(!1),m=async()=>{p(!0);let e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})};try{await fetch("".concat("https://mintchipbeta.com/api/v1","/auth/resend"),e).then(e=>e.json()).then(e=>{200===e.code?h(!0):x.Am.error(e.message),p(!1)})}catch(r){x.Am.error("Network Error!"),p(!1)}},f=()=>{e.push({pathname:"/sign-in"})};return!0===u?(0,s.jsx)(o.Z,{email:t,setIsVerifyPage:h}):(0,s.jsx)("div",{className:"flex w-full items-center justify-center h-[100vh]",style:{fontFamily:"RocGrotesk-Regular"},children:(0,s.jsxs)("div",{className:"flex flex-col w-[400px] h-fit bg-alpha-10 rounded-[15px] p-[30px] gap-[20px]",children:[(0,s.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,s.jsx)("img",{className:"w-[130px] shrink-0 object-cover",src:"/images/mintchip-beta-logo.png"})}),(0,s.jsxs)("div",{onClick:()=>f(),className:"flex flex-row items-center justify-start text-gray-2 text-[16px] hover:cursor-pointer",children:[(0,s.jsx)(n.Z,{name:l.gv.LEFT_ARROW,active:!0}),(0,s.jsx)("div",{className:"text-primary-blue",children:"Back"})]}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-gray-2 text-[18px] font-bold",children:"Send verification code"})}),(0,s.jsxs)("div",{className:"flex flex-col gap-[3px]",children:[(0,s.jsx)("label",{className:"text-[14px] text-gray-2",htmlFor:"",children:"Email address"}),(0,s.jsx)("input",{type:"email",value:t,onChange:e=>r(e.target.value),className:"bg-transparent focus:outline-none focus:border-white border-gray-1 border-[1px] border-solid rounded-[5px] h-[40px] px-[15px] text-gray-2"})]}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("button",{onClick:()=>m(),className:"flex items-center justify-center w-full bg-primary-blue text-gray-2 rounded-[5px] h-[40px] hover:bg-primary-blue-hover active:border-solid border-white border-[1px]",children:!0===d?(0,s.jsx)(c.Z,{}):"SEND CODE"})})]})})};t.default=d}},function(e){e.O(0,[3153,573,9774,2888,179],function(){return e(e.s=25460)}),_N_E=e.O()}]);
//# sourceMappingURL=forgot-password-5a23c13036ae9448.js.map