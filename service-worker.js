if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>n(e,o),c={module:{uri:o},exports:l,require:u};s[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"baemin_proj"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/baemin_proj/css/362.f829ac28.css",revision:null},{url:"/baemin_proj/css/524.0685ecc8.css",revision:null},{url:"/baemin_proj/css/808.37d72f32.css",revision:null},{url:"/baemin_proj/css/about.47ab4921.css",revision:null},{url:"/baemin_proj/css/app.a03f0c9a.css",revision:null},{url:"/baemin_proj/css/chunk-vendors.4959e411.css",revision:null},{url:"/baemin_proj/fonts/BMHANNAPro.26911604.ttf",revision:null},{url:"/baemin_proj/img/finger.1825e6d8.png",revision:null},{url:"/baemin_proj/index.html",revision:"e4db822be98967a1ca9318e8d9aded19"},{url:"/baemin_proj/js/362.d1b6e521.js",revision:null},{url:"/baemin_proj/js/524.552c9518.js",revision:null},{url:"/baemin_proj/js/808.c81a3b7e.js",revision:null},{url:"/baemin_proj/js/about.8ebec2dd.js",revision:null},{url:"/baemin_proj/js/app.f28fa8f7.js",revision:null},{url:"/baemin_proj/js/chunk-vendors.bc703103.js",revision:null},{url:"/baemin_proj/manifest.json",revision:"e9f11785a826d5d60cb670e763e1268e"},{url:"/baemin_proj/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
