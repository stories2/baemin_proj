if(!self.define){let e,n={};const r=(r,s)=>(r=new URL(r+".js",s).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};n[o]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"baemin_proj"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"baemin_proj/css/app.7a6ec1cb.css",revision:null},{url:"baemin_proj/css/chunk-vendors.4959e411.css",revision:null},{url:"baemin_proj/index.html",revision:"7a8639e73f8d434a71e0d047533f1221"},{url:"baemin_proj/js/about.d8f28fd0.js",revision:null},{url:"baemin_proj/js/app.46d70a51.js",revision:null},{url:"baemin_proj/js/chunk-vendors.5bfe1ab4.js",revision:null},{url:"baemin_proj/manifest.json",revision:"e9f11785a826d5d60cb670e763e1268e"},{url:"baemin_proj/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
