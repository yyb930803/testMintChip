(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7411],{60042:function(e,t){var a;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(a);else if(Array.isArray(a)){if(a.length){var s=l.apply(null,a);s&&e.push(s)}}else if("object"===n){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)r.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0!==(a=(function(){return l}).apply(t,[]))&&(e.exports=a)}()},61057:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboarding",function(){return a(57451)}])},57451:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var r=a(24246),l=a(27378),n=a(27997);let s=e=>{let{siteName:t,isValidation:a,setSiteName:l}=e;return(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg text-primary-grey-501",children:[(0,r.jsx)("input",{value:t,onChange:e=>l(e.target.value||""),className:"h-[48px] bg-alpha-10 text-gray-1 text-[14px] rounded-lg border-[1px] focus:border-solid focus:outline-none border-white px-[20px] block w-full dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-2 dark:focus:border-blue-500 "+(!0===a&&""===t?"border-red border-solid border-[1px]":""),placeholder:"Please type your site name",required:!0}),(0,r.jsx)("div",{className:"self-stretch relative text-base leading-[24px] text-grey-4001 text-gray-1",children:(0,n.Z)(t)})]})};var i=a(71502),o=a(25158);let c=()=>{let[e,t]=(0,l.useState)(0);return(0,r.jsxs)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[16px] text-lg text-primary-grey-501",children:[(0,r.jsxs)("button",{onClick:()=>t(0),className:"flex flex-row items-center gap-[5px] text-gray-2 h-[48px] rounded-[8px] px-5 text-[14px]"+(0===e?" bg-alpha-30":" bg-alpha-10"),children:[(0,r.jsx)(i.Z,{name:o.gv.DAY}),"Daylight"]}),(0,r.jsxs)("button",{onClick:()=>t(1),className:"flex flex-row items-center gap-[5px] text-gray-2 h-[48px] rounded-[8px] px-5 text-[14px]"+(1===e?" bg-alpha-30":" bg-alpha-10"),children:[(0,r.jsx)(i.Z,{name:o.gv.NIGHT}),"Twilight"]}),(0,r.jsx)("div",{className:"text-gray-1",children:"More themes coming soon"})]})};var u=a(90851);function d(e){let t=parseInt(e.substring(1,3),16),a=parseInt(e.substring(3,5),16),r=parseInt(e.substring(5,7),16);return[t,a,r]}function h(e,t,a){let r=e.toString(16).padStart(2,"0").toUpperCase(),l=t.toString(16).padStart(2,"0").toUpperCase(),n=a.toString(16).padStart(2,"0").toUpperCase();return(0,u.p9)("hex","#".concat(r).concat(l).concat(n))}a(49965);let p=()=>{let[e,t]=(0,l.useState)(0),[a,n]=(0,l.useState)(!1),[s,i]=(0,u.rd)("hex","#FFFFFF"),o=[{name:"Greyscale",code:"bg-greyscale",hex:"#636769"},{name:"Blue",code:"bg-blue",hex:"#2E90FA"},{name:"Red",code:"bg-red",hex:"#F04438"},{name:"Green",code:"bg-green",hex:"#12B76A"},{name:"Pink",code:"bg-pink",hex:"#F63D68"},{name:"Yellow",code:"bg-yellow",hex:"#FDB022"},{name:"Purple",code:"bg-purple",hex:"#9E77ED"},{name:"Orange",code:"bg-orange",hex:"#FB6514"}],c=e=>{var a;t(e),i((0,u.p9)("hex",(null===(a=o[e-1])||void 0===a?void 0:a.hex)||"#FFFFFF")),n(!0)},p=e=>{i((0,u.p9)("hex",e))},x=e=>{i(h(Number(e),s.rgb.g,s.rgb.b))},g=e=>{i(h(s.rgb.r,Number(e),s.rgb.b))},f=e=>{i(h(s.rgb.r,s.rgb.g,Number(e)))};return(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg",children:[(0,r.jsxs)("div",{className:"self-stretch grid grid-cols-3 items-start justify-start gap-[16px]",children:[(0,r.jsxs)("button",{className:"flex-1 rounded-xl h-12 flex flex-row py-2 pr-4 pl-1 box-border items-center justify-start gap-[12px] cursor-pointer text-primary-grey-501"+(0===e?" bg-alpha-20":" bg-alpha-10"),onClick:()=>c(0),children:[(0,r.jsx)("div",{className:"rounded-lg bg-alpha-30 w-10 h-10 shrink-0 flex flex-row p-2 box-border items-center justify-center",children:(0,r.jsx)("img",{className:"relative w-5 h-5 shrink-0",alt:"",src:"/images/vuesaxoutlineaddcircle2.svg"})}),(0,r.jsx)("div",{className:"flex-1 relative leading-[28px] font-medium text-gray-2 text-start",children:"Custom"})]}),o.map((t,a)=>(0,r.jsxs)("button",{onClick:()=>c(a+1),className:"flex-1 rounded-xl h-12 flex flex-row py-2 pr-4 pl-1 box-border items-center justify-start gap-[12px]"+(e===a+1?" bg-alpha-20":" bg-alpha-10"),children:[(0,r.jsx)("div",{className:"relative rounded-lg w-10 h-10 shrink-0 "+t.code}),(0,r.jsx)("div",{className:"flex-1 relative leading-[28px] font-medium text-gray-1 text-start",children:t.name})]},a))]}),(0,r.jsx)("div",{className:"absolute flex top-0 left-0 w-[100vw] h-[100vh] bg-[#00000099] items-center justify-center z-20 backdrop-blur-[20px] "+(!0===a?"":"hidden"),children:(0,r.jsxs)("div",{className:"flex flex-col bg-[#181A20] gap-[24px] p-[24px] rounded-[12px] w-[360px] z-20",children:[(0,r.jsx)("div",{className:"text-gray-2 text-[18px] leading-[28px] font-medium",children:"Select colour"}),(0,r.jsx)(u.zH,{width:312,height:238,color:s,onChange:i,onChangeComplete:e=>{console.log("Final color: ".concat(e,"!"))},hideHEX:!0,hideRGB:!0,hideHSV:!0,dark:!0}),(0,r.jsxs)("div",{className:"grid grid-cols-5 gap-[8px]",children:[(0,r.jsxs)("div",{className:"col-start-1 col-end-3",children:[(0,r.jsx)("label",{className:"text-gray-2",children:"Hex"}),(0,r.jsx)("input",{value:s.hex,onChange:e=>p(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-1 text-sm rounded-lg focus:ring-gray-2 focus:border-alpha-20 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-2 dark:focus:border-blue-500"})]}),(0,r.jsxs)("div",{className:"col-start-3 col-end-4",children:[(0,r.jsx)("label",{className:"text-gray-2",children:"R"}),(0,r.jsx)("input",{value:"".concat(d(s.hex)[0]),onChange:e=>x(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-1 text-sm rounded-lg focus:ring-gray-2 focus:border-alpha-20 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-2 dark:focus:border-blue-500"})]}),(0,r.jsxs)("div",{className:"col-start-4 col-end-5",children:[(0,r.jsx)("label",{className:"text-gray-2",children:"G"}),(0,r.jsx)("input",{value:"".concat(d(s.hex)[1]),onChange:e=>g(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-1 text-sm rounded-lg focus:ring-gray-2 focus:border-alpha-20 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-2 dark:focus:border-blue-500"})]}),(0,r.jsxs)("div",{className:"col-start-5 col-end-6",children:[(0,r.jsx)("label",{className:"text-gray-2",children:"B"}),(0,r.jsx)("input",{value:"".concat(d(s.hex)[2]),onChange:e=>f(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-1 text-sm rounded-lg focus:ring-gray-2 focus:border-alpha-20 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-2 dark:focus:border-blue-500"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-[12px]",children:[(0,r.jsx)("button",{onClick:()=>n(!1),className:"text-gray-2 bg-primary-blue h-[40px] rounded-[8px] px-5",children:"Confirm"}),(0,r.jsx)("button",{onClick:()=>n(!1),className:"text-gray-2 bg-alpha-10 h-[40px] rounded-[8px] px-5",children:"Cancel"})]})]})})]})};var x=[{title:"Krona One",value:"font-krona_one"},{title:"Syne",value:"font-syne"},{title:"Bellezza",value:"font-bellezza"},{title:"Space Grotesk",value:"font-space_grotesk"},{title:"Federo",value:"font-federo"},{title:"DM Sans",value:"font-dm_sans"},{title:"Caudex",value:"font-caudex"},{title:"Cinzel Decorative",value:"font-cinzel_decorative"},{title:"Viaoda Libre",value:"font-viaoda_libre"},{title:"Poppins",value:"font-poppins"},{title:"Montserrat",value:"font-montserrat"},{title:"Oswald",value:"font-oswald"},{title:"Raleway",value:"font-raleway"},{title:"Futura",value:"font-futura"},{title:"Barlow Condensed",value:"font-barlow_condensed"},{title:"Alegreya Regular and Bold",value:"font-alegreya_regular_and_bold"},{title:"Space Mono",value:"font-pace_mono"},{title:"Syne Handgloves",value:"font-syne_handgloves"},{title:"Cormorant",value:"font-cormorant"},{title:"Spectral",value:"font-spectral"},{title:"Rubik",value:"font-rubik"},{title:"Cardo",value:"font-cardo"},{title:"Open Sans",value:"font-open_sans"},{title:"Goblin One",value:"font-goblin_one"},{title:"Girassol",value:"font-girassol"},{title:"Roboto",value:"font-roboto"},{title:"Merriweather",value:"font-merriweather"},{title:"Zeyada",value:"font-zeyada"},{title:"Sassy Fras",value:"font-sassy_fras"},{title:"Anton",value:"font-anton"},{title:"Betas Neue",value:"font-betas_neue"},{title:"Jost",value:"font-jost"},{title:"Josephine Sans",value:"font-josephine_sans"},{title:"Caveat",value:"font-caveat"},{title:"Shadows Into Light",value:"font-shadows_into_light"},{title:"Indi Flower",value:"font-indi_flower"},{title:"Questrial",value:"font-questrial"},{title:"Nanum Myeongjo",value:"font-nanum_myeongjo"},{title:"Orbitron",value:"font-orbitron"},{title:"Cinzel",value:"font-cinzel"},{title:"Archivo Black",value:"font-archivo_black"},{title:"Michroma",value:"font-michroma"},{title:"Press start 2P",value:"font-press_start_2p"},{title:"Urbanist",value:"font-urbanist"},{title:"Creepster",value:"font-creepster"},{title:"Gruppo",value:"font-gruppo"},{title:"Unbounded",value:"font-unbounded"},{title:"Bahianita",value:"font-bahianita"},{title:"Nabla",value:"font-nabla"},{title:"Cherry Cream Soda",value:"font-cherry_cream_soda"},{title:"Barrio",value:"font-barrio"},{title:"UnifrakturMaguntia",value:"font-unifrakturMaguntia"},{title:"Bellefair",value:"font-bellefair"},{title:"Baskerville",value:"font-baskerville"},{title:"Noto Serif",value:"font-noto_serif"},{title:"Italiana",value:"font-italiana"},{title:"Antic Didone",value:"font-antic_didone"},{title:"Tangerine",value:"font-tangerine"},{title:"Homemade apple",value:"font-homemade_apple"},{title:"Parisienne",value:"font-parisienne"},{title:"Nanum Pen Script",value:"font-nanum_pen_script"},{title:"Rock salt",value:"font-rock_salt"},{title:"Reanie Beanie",value:"font-reanie_beanie"},{title:"Sue Ellen Francisco",value:"font-sue_ellen_francisco"},{title:"Hi Melody",value:"font-hi_melody"},{title:"Waterfall",value:"font-waterfall"},{title:"Herr Von Muellerhoff",value:"font-herr_von_muellerhoff"},{title:"DotGothic16",value:"font-dotgothic16"},{title:"VT323",value:"font-vt323"},{title:"Cutive Mono",value:"font-cutive_mono"}];let g=()=>{let[e,t]=(0,l.useState)(x[0].value),[a,n]=(0,l.useState)(x[0].value),[s,i]=(0,l.useState)(x[0].value);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg text-primary-grey-501",children:[(0,r.jsx)("div",{className:"text-gray-2",children:"Headings"}),(0,r.jsx)("select",{id:"headingText",value:e,onChange:e=>t(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:x.map((e,t)=>(0,r.jsx)("option",{value:e.value,className:"text-gray-2 bg-gray",children:e.title},t))})]}),(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg text-primary-grey-501 pt-8",children:[(0,r.jsx)("div",{className:"text-gray-2",children:"Paragraphs"}),(0,r.jsx)("select",{id:"paragraphText",value:a,onChange:e=>n(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:x.map((e,t)=>(0,r.jsx)("option",{value:e.value,className:"text-gray-2 bg-gray",children:e.title},t))})]}),(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg text-primary-grey-501 pt-8",children:[(0,r.jsx)("div",{className:"text-gray-2",children:"Buttons"}),(0,r.jsx)("select",{id:"buttonText",value:s,onChange:e=>i(e.target.value),className:"h-[48px] bg-alpha-10 text-gray-2 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:x.map((e,t)=>(0,r.jsx)("option",{value:e.value,className:"text-gray-2 bg-gray",children:e.title},t))})]}),(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[16px] text-lg text-primary-grey-501 pt-8",children:[(0,r.jsx)("div",{className:"text-gray-1",children:"Preview"}),(0,r.jsxs)("div",{className:"flex flex-col p-[16px] gap-[16px] bg-alpha-10 rounded-[16px]",children:[(0,r.jsx)("div",{className:"text-gray-2 text-[24px] "+e,children:"Heading"}),(0,r.jsxs)("div",{className:"text-gray-2 text-[14px] "+a,children:["Maecenas cras id feugiat tempus interdum. Amet sit curabitur mauris ac at. Ultricies purus vitae suscipit ac vel dis. Arcu velit tristique consectetur morbi lectus."," "]}),(0,r.jsx)("button",{className:"text-gray w-fit bg-gray-2 h-[40px] rounded-[8px] px-5 text-[14px] "+s,children:"Button"})]})]})]})},f=()=>{let[e,t]=(0,l.useState)(0);return(0,r.jsxs)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[16px] text-lg text-primary-grey-501",children:[(0,r.jsx)("button",{onClick:()=>t(0),className:"text-gray-2 h-[48px] rounded-full px-5 text-[14px]"+(0===e?" bg-alpha-20":" bg-alpha-10"),children:"Pills"}),(0,r.jsx)("button",{onClick:()=>t(1),className:"text-gray-2 h-[48px] rounded-[12px] px-5 text-[14px]"+(1===e?" bg-alpha-20":" bg-alpha-10"),children:"Rounded"}),(0,r.jsx)("button",{onClick:()=>t(2),className:"text-gray-2 h-[48px] px-5 text-[14px]"+(2===e?" bg-alpha-20":" bg-alpha-10"),children:"Squared"})]})};var m=a(86677),v=a(15035),b=a(86910),y=["www","api"],j=a(31655);let w=()=>{let e=(0,m.useRouter)(),[t,a]=(0,l.useState)(0),[n,i]=(0,l.useState)(""),[o,u]=(0,l.useState)(!1),[d,h]=(0,l.useState)(!1),x=[{step:0,children:(0,r.jsx)(s,{isValidation:d,siteName:n,setSiteName:i}),title:"Welcome to your new site",description:"Before you start building, let’s begin by applying a few settings to bring your concept to life!",subtitle:"What would you like to call your site?"},{step:1,children:(0,r.jsx)(c,{}),title:"Choose a theme",description:"Light websites are more functional. Websites with a lot of media, i.e. videos, galleries, look best on a dark theme.",subtitle:"Light or dark?"},{step:2,children:(0,r.jsx)(p,{}),title:"Let’s add some colour",description:"Select one for now, you can edit these and add custom colours later.",subtitle:"Choose a primary colour"},{step:3,children:(0,r.jsx)(g,{}),title:"Fonts say a lot about people!",description:"They play a vital role in how your website feels. Show some personality! You can edit these at any time. Custom fonts coming soon!",subtitle:"Choose a font family"},{step:4,children:(0,r.jsx)(f,{}),title:"Playful, friendly or sharp?",description:"Buttons play a vital role in how your website feels while exploring, choose wisely. You can edit these at any time.",subtitle:"Choose a button type"}],w=()=>0!==t||""!==n&&(!y.includes(n.toLowerCase())||(b.Am.error("You can't use this name."),!1)),N=async()=>{u(!0),h(!0);let e=w();e?0===t?k():(a(t+1),h(!1),u(!1)):u(!1)},k=async()=>{let t={userId:j.Z.get("_id"),name:n},a={method:"POST",headers:{"Content-Type":"application/json",authorization:"bearer "+j.Z.get("token")},body:JSON.stringify(t)};try{await fetch("".concat("https://mintchipbeta.com/api/v1","/sites"),a).then(e=>e.json()).then(t=>{200===t.code?e.push({pathname:"/builder/[siteId]",query:{siteId:t.data._id}}):(u(!1),b.Am.error(t.message))})}catch(r){u(!1),b.Am.error("Network Error!")}};return(0,r.jsxs)("div",{style:{fontFamily:"RocGrotesk-Regular"},children:[(0,r.jsxs)("div",{className:"hidden md:block relative bg-grey-9001 w-full min-h-[100vh] overflow-hidden text-left text-5xl text-primary-grey-501 font-text-xs-bold1",children:[(0,r.jsxs)("div",{className:"top-[0px] w-full max-w-[700px] m-[auto] flex flex-col pt-32 box-border gap-[128px] pb-[100px]",children:[(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[40px]",children:[(0,r.jsxs)("button",{onClick:()=>a(t-1),className:"flex flex-row items-center justify-start gap-[6px] opacity-100 hover:opacity-60 cursor-pointer bg-transparent"+(0===t?" hidden":""),children:[(0,r.jsx)("img",{className:"relative w-[18px] h-[18px] shrink-0",alt:"",src:"/images/vuesaxoutlinearrowleft.svg"}),(0,r.jsx)("div",{className:"flex-1 relative leading-[24px] font-medium text-gray-1 text-[14px]",children:"Go back"})]}),(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[12px]",children:[(0,r.jsx)("b",{className:"self-stretch relative tracking-[-0.01em] leading-[44px] text-gray-2",children:x[t].title}),(0,r.jsx)("div",{className:"self-stretch relative text-xl leading-[28px] text-grey-4001 text-gray-1",children:x[t].description})]}),(0,r.jsxs)("div",{className:"self-stretch flex flex-col items-start justify-start gap-[24px] text-2xl text-grey-4001",children:[(0,r.jsx)("div",{className:"self-stretch relative leading-[30px] font-medium text-gray-1",children:x[t].subtitle}),x[t].children]})]}),(0,r.jsx)("div",{className:"self-stretch flex flex-row items-center justify-start gap-[16px] text-center text-xl",children:(0,r.jsx)("button",{className:"rounded-[20px] w-[170px] h-16 flex flex-row py-4 px-8 box-border items-center justify-center gap-[12px] bg-primary-blue opacity-100 hover:opacity-60 text-[18px]",onClick:()=>N(),children:!0===o?(0,r.jsx)(v.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"relative leading-[28px] font-medium text-gray-2",children:"Continue"}),(0,r.jsx)("img",{className:"relative w-5 h-5 shrink-0",alt:"",src:"/images/vuesaxoutlinearrowright2.svg"})]})})})]}),(0,r.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-full flex flex-row p-8 box-border items-center justify-between text-base text-grey-4001",children:[(0,r.jsx)("div",{className:"opacity-100 hover:opacity-60 cursor-pointer",onClick:()=>{window.location.href="/home"},children:(0,r.jsx)("img",{className:"relative w-[89.78px] h-[32.9px] shrink-0",src:"/images/frame2.svg"})}),(0,r.jsx)("div",{onClick:()=>{window.location.href="/home"},className:"relative leading-[24px] font-medium text-gray-1 opacity-100 hover:opacity-60 cursor-pointer",children:"Close"})]})]}),(0,r.jsxs)("div",{className:"flex flex-col h-[100vh] md:hidden justify-center gap-[32px] p-[24px]",children:[(0,r.jsx)("div",{className:"text-gray-2 text-[48px]",children:"Well sh*t!"}),(0,r.jsxs)("div",{className:"text-gray-2 text-[16px]",children:["The ",(0,r.jsx)("b",{children:"bad news"})," is you’re gonna have to create your website on your computer.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"The ",(0,r.jsx)("b",{children:"good news"})," is mobile website editing is on our development roadmap, because that seems like a pretty cool feature, right?"]}),(0,r.jsxs)("button",{className:"rounded-[20px] h-16 w-fit flex flex-row py-4 px-8 box-border items-center justify-center gap-[12px] bg-primary-blue opacity-100 hover:opacity-60",onClick:()=>window.location.href="/home",children:[(0,r.jsx)("img",{className:"relative w-5 h-5 shrink-0 rotate-180",src:"/images/vuesaxoutlinearrowright2.svg"}),(0,r.jsx)("div",{className:"relative leading-[28px] font-medium text-gray-2",children:"Go back"})]})]})]})};var N=w},49965:function(){},86677:function(e,t,a){e.exports=a(87895)},27997:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var r=function(e){if(e){var t=e.trim().toLocaleLowerCase().replace(/ +/g,"-");return"https://".concat(t,".mintchipbeta.com/")}return""}},90851:function(e,t,a){"use strict";a.d(t,{p9:function(){return d},rd:function(){return w},zH:function(){return j}});var r=a(27378);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach(function(t){var r,l;r=e,l=a[t],t in r?Object.defineProperty(r,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[t]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function s(e,t,a){return e>t?t:e<a?a:e}function i(e){if(!e.startsWith("#")){let t=document.createElement("canvas").getContext("2d");if(!t)throw Error("2d context not supported or canvas already initialized");return t.fillStyle=e,t.fillStyle}return 4===e.length||5===e.length?e=e.split("").map((e,t)=>t?e+e:"#").join(""):7===e.length||9===e.length?e:"#000000"}function o(e){e=e.slice(1);let t=parseInt(e.slice(0,2),16),a=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16),l=parseInt(e.slice(6,8),16)||void 0;return l&&(l/=255),{r:t,g:a,b:r,a:l}}function c({r:e,g:t,b:a,a:r}){e/=255,t/=255,a/=255;let l=Math.max(e,t,a),n=l-Math.min(e,t,a);return{h:n?60*(l===e?(t-a)/n+(t<a?6:0):l===t?2+(a-e)/n:4+(e-t)/n):0,s:l?n/l*100:0,v:100*l,a:r}}function u({r:e,g:t,b:a,a:r}){return`#${[e,t,a,r].map((e,t)=>void 0!==e?(t<3?e:Math.round(255*e)).toString(16).padStart(2,"0"):"").join("")}`}function d(e,t){let a=i("#121212"),r=o(a),l=c(r);return"hex"===e?l=c(r=o(a=i(t))):"rgb"===e?(a=u(r=t),l=c(r)):"hsv"===e&&(a=u(r=function({h:e,s:t,v:a,a:r}){let l=~~(e/60),n=e/60-l,s=(a/=100)*(1-(t/=100)),i=a*(1-t*n),o=a*(1-t*(1-n)),c=l%6;return{r:Math.round(255*[a,i,s,s,o,a][c]),g:Math.round(255*[o,a,a,i,s,s][c]),b:Math.round(255*[s,s,o,a,a,i][c]),a:r}}(l=t))),{hex:a,rgb:r,hsv:l}}let h=({className:e,style:t,onChange:a,children:l})=>{let n=(0,r.useRef)(null),i=(e,t)=>{if(n.current){let{current:r}=n,{width:l,height:i,left:o,top:c}=r.getBoundingClientRect(),u=s(e.clientX-o,l,0),d=s(e.clientY-c,i,0);a({x:u,y:d}),t&&a({x:u,y:d,complete:!0})}};return r.createElement("div",{ref:n,className:e,style:t,onMouseDown:e=>{if(0!==e.button)return;i(e);let t=e=>{i(e)},a=e=>{document.removeEventListener("mousemove",t,!1),document.removeEventListener("mouseup",a,!1),i(e,!0)};document.addEventListener("mousemove",t,!1),document.addEventListener("mouseup",a,!1)}},l)},p=({width:e,color:t,onChange:a,onChangeComplete:l})=>{let s=(0,r.useMemo)(()=>{var a;let r=(null!==(a=t.hsv.a)&&void 0!==a?a:1)*e;return r},[t.hsv.a,e]),i=(0,r.useMemo)(()=>`${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}`,[t.rgb]),o=(0,r.useMemo)(()=>{var e;return`${i}, ${null!==(e=t.rgb.a)&&void 0!==e?e:1}`},[i,t.rgb.a]),c=(0,r.useMemo)(()=>-s-2,[s]);return r.createElement(h,{className:"rcp-alpha",onChange:({x:r,complete:s})=>{let i=d("hsv",n(n({},t.hsv),{},{a:r/e}));a(i),s&&l&&l(i)},style:{background:`linear-gradient(to right, rgba(${i}, 0), rgba(${i}, 1)) top left / auto auto,
              conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
              repeat`}},r.createElement("div",{className:"rcp-alpha-cursor",style:{left:s,background:`linear-gradient(to right, rgba(${o}), rgba(${o})) top left / auto auto,
                conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${c}px 2px / 12px 12px
                repeat`}}))},x=({width:e,height:t,color:a,onChange:l,onChangeComplete:s})=>{let i=(0,r.useMemo)(()=>{let[r,l]=function(e,t,a){let{s:r,v:l}=e.hsv;return[r/100*t,(100-l)/100*a]}(a,e,t);return{x:r,y:l}},[a,e,t]);return r.createElement(h,{className:"rcp-saturation",style:{height:t,backgroundColor:`hsl(${a.hsv.h}, 100%, 50%)`},onChange:({x:r,y:i,complete:o=!1})=>{let c=d("hsv",n(n({},a.hsv),{},{s:r/e*100,v:100-i/t*100}));l(c),o&&s&&s(c)}},r.createElement("div",{className:"rcp-saturation-cursor",style:{left:i.x,top:i.y,backgroundColor:a.hex}}))},g=({width:e,color:t,onChange:a,onChangeComplete:l})=>{let s=(0,r.useMemo)(()=>{let a=t.hsv.h/360*e;return a},[t.hsv.h,e]);return r.createElement(h,{className:"rcp-hue",onChange:({x:r,complete:s=!1})=>{let i=d("hsv",n(n({},t.hsv),{},{h:r/e*360}));a(i),s&&l&&l(i)}},r.createElement("div",{className:"rcp-hue-cursor",style:{left:s,backgroundColor:`hsl(${t.hsv.h}, 100%, 50%)`}}))};function f(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}let m=/[0-9A-F]/i,v=({color:e,hideHEX:t,onChange:a})=>{let l=(0,r.useCallback)(()=>({value:e.hex,inputted:!1}),[e.hex]),[s,i]=(0,r.useState)(l);return(0,r.useEffect)(()=>{s.inputted||i(l)},[s.inputted,l]),r.createElement(r.Fragment,null,!t&&r.createElement("div",{className:"rcp-fields-element hex-element"},r.createElement("input",{className:"rcp-fields-element-input",value:s.value,onFocus:()=>i(n(n({},s),{},{inputted:!0})),onChange:e=>{var t;let r=e.target.value;((t=r).startsWith("#")?(t=t.slice(1),m.test(t[t.length-1])):/\w/i.test(t)&&!/\d/.test(t)||""===t)&&(a(d("hex",r)),i(n(n({},s),{},{value:r})))},onBlur:()=>i(n(n({},s),{},{inputted:!1}))}),r.createElement("label",{className:"rcp-fields-element-label"},"HEX")))},b=({color:e,hideRGB:t,hideHSV:a,alpha:l,onChange:i})=>{let o=(0,r.useCallback)(()=>({value:`${e.rgb.r}, ${e.rgb.g}, ${e.rgb.b}${l&&void 0!==e.rgb.a?`, ${f(e.rgb.a,3)}`:""}`,inputted:!1}),[e.rgb,l]),c=(0,r.useCallback)(()=>({value:`${Math.round(e.hsv.h)}\xb0, ${Math.round(e.hsv.s)}%, ${Math.round(e.hsv.v)}%${l&&void 0!==e.hsv.a?`, ${f(e.hsv.a,3)}`:""}`,inputted:!1}),[e.hsv,l]),[u,h]=(0,r.useState)(o),[p,x]=(0,r.useState)(c);return(0,r.useEffect)(()=>{u.inputted||h(o)},[u.inputted,o]),(0,r.useEffect)(()=>{p.inputted||x(c)},[p.inputted,c]),r.createElement(r.Fragment,null,(!t||!a)&&r.createElement(r.Fragment,null,!t&&r.createElement("div",{className:"rcp-fields-element"},r.createElement("input",{className:"rcp-fields-element-input",value:u.value,onFocus:()=>h(n(n({},u),{},{inputted:!0})),onChange:e=>{let t=e.target.value.match(/\d+(?:\.\d+)?/g);if(t&&(3===t.length||l&&4===t.length)){let a=function(e){let[t,a,r,l]=e.map((e,t)=>s(Number(e),t<3?255:1,0));return{r:t,g:a,b:r,a:l}}(t);i(d("rgb",a))}h(n(n({},u),{},{value:e.target.value}))},onBlur:()=>h(n(n({},u),{},{inputted:!1}))}),r.createElement("label",{className:"rcp-fields-element-label"},"RGB")),!a&&r.createElement("div",{className:"rcp-fields-element"},r.createElement("input",{className:"rcp-fields-element-input",value:p.value,onFocus:()=>x(n(n({},p),{},{inputted:!0})),onChange:e=>{let t=e.target.value.match(/\d+(?:\.\d+)?/g);if(t&&(3===t.length||l&&4===t.length)){let a=function(e){let[t,a,r,l]=e.map((e,t)=>s(Number(e),t?t<3?100:1:360,0));return{h:t,s:a,v:r,a:l}}(t);i(d("hsv",a))}x(n(n({},p),{},{value:e.target.value}))},onBlur:()=>x(n(n({},p),{},{inputted:!1}))}),r.createElement("label",{className:"rcp-fields-element-label"},"HSV"))))},y=({color:e,hideHEX:t,hideRGB:a,hideHSV:l,alpha:n,onChange:s})=>r.createElement(r.Fragment,null,(!t||!a||!l)&&r.createElement("div",{className:"rcp-fields"},r.createElement(b,{color:e,hideRGB:a,hideHSV:l,alpha:n,onChange:s}),r.createElement(v,{color:e,hideHEX:t,onChange:s}))),j=({width:e,height:t=e,color:a,onChange:l,onChangeComplete:n,hideHEX:s=!1,hideRGB:i=!1,hideHSV:o=!1,alpha:c=!1,dark:u=!1})=>r.createElement("div",{className:"rcp "+(u?"rcp-dark":"rcp-light"),style:{width:e}},r.createElement(x,{width:e,height:t,color:a,onChange:l,onChangeComplete:n}),r.createElement("div",{className:"rcp-body"},r.createElement(g,{width:e-40,color:a,onChange:l,onChangeComplete:n}),c&&r.createElement(p,{width:e-40,color:a,onChange:l,onChangeComplete:n}),r.createElement(y,{color:a,hideHEX:s,hideRGB:i,hideHSV:o,alpha:c,onChange:l})));function w(e,t){let[a,l]=(0,r.useState)(()=>{switch(e){case"hex":return d("hex",t);case"rgb":return d("rgb",t);case"hsv":return d("hsv",t);default:return d("hex","#121212")}});return[a,l]}}},function(e){e.O(0,[3153,9774,2888,179],function(){return e(e.s=61057)}),_N_E=e.O()}]);
//# sourceMappingURL=onboarding-96c7fb62ab76618b.js.map