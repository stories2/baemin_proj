if(!self.define){let n,i={};const e=(e,r)=>(e=new URL(e+".js",r).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(r,l)=>{const s=n||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const u=n=>e(n,s),a={module:{uri:s},exports:o,require:u};i[s]=Promise.all(r.map((n=>a[n]||u(n)))).then((n=>(l(...n),o)))}}define(["./workbox-2d118ab0"],(function(n){"use strict";n.setCacheNameDetails({prefix:"baemin_proj"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/baemin_proj/css/483.10feba2a.css",revision:null},{url:"/baemin_proj/css/667.16edd78d.css",revision:null},{url:"/baemin_proj/css/864.b40ce42d.css",revision:null},{url:"/baemin_proj/css/about.79a4b351.css",revision:null},{url:"/baemin_proj/css/app.a03f0c9a.css",revision:null},{url:"/baemin_proj/css/chunk-vendors.4959e411.css",revision:null},{url:"/baemin_proj/fonts/BMHANNAPro.26911604.ttf",revision:null},{url:"/baemin_proj/img/buns.5ab84061.png",revision:null},{url:"/baemin_proj/img/chicken-leg.13bd535a.png",revision:null},{url:"/baemin_proj/img/chop.c0fcb3ae.png",revision:null},{url:"/baemin_proj/img/cupcake.8cb3ddc1.png",revision:null},{url:"/baemin_proj/img/finger.1825e6d8.png",revision:null},{url:"/baemin_proj/img/hamburger.573c5a8d.png",revision:null},{url:"/baemin_proj/img/hot-soup.41ed3759.png",revision:null},{url:"/baemin_proj/img/noodles.d61ccec1.png",revision:null},{url:"/baemin_proj/img/pizza.2e9fea67.png",revision:null},{url:"/baemin_proj/img/ramen.e1836a0b.png",revision:null},{url:"/baemin_proj/img/ranking.feb61af6.png",revision:null},{url:"/baemin_proj/img/spaghetti.6c54dadb.png",revision:null},{url:"/baemin_proj/img/steak.2b879c29.png",revision:null},{url:"/baemin_proj/img/sushi.31af3449.png",revision:null},{url:"/baemin_proj/img/tokbokki.dbf989f2.png",revision:null},{url:"/baemin_proj/index.html",revision:"b355176304d3f20ef981e5512c0c3afc"},{url:"/baemin_proj/js/483.dabafc1e.js",revision:null},{url:"/baemin_proj/js/667.9060a609.js",revision:null},{url:"/baemin_proj/js/722.d22daf65.js",revision:null},{url:"/baemin_proj/js/864.948b1c70.js",revision:null},{url:"/baemin_proj/js/about.5729a453.js",revision:null},{url:"/baemin_proj/js/app.3de57b28.js",revision:null},{url:"/baemin_proj/js/chunk-vendors.f22112a6.js",revision:null},{url:"/baemin_proj/manifest.json",revision:"e9f11785a826d5d60cb670e763e1268e"},{url:"/baemin_proj/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
