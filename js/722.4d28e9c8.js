"use strict";(self["webpackChunkbaemin_proj"]=self["webpackChunkbaemin_proj"]||[]).push([[722],{8100:function(e,t,n){n.d(t,{i:function(){return s}});var i=n(2482);n(1703);class s{constructor(e,t,n,s){(0,i.Z)(this,"container",void 0),(0,i.Z)(this,"kakao",void 0),(0,i.Z)(this,"map",void 0),(0,i.Z)(this,"geocoder",void 0),(0,i.Z)(this,"customOverlayList",[]),(0,i.Z)(this,"markerList",[]),(0,i.Z)(this,"beforeMarkerId",null),(0,i.Z)(this,"prefix","id-"),(0,i.Z)(this,"onMarkerClicked",null),(0,i.Z)(this,"onCustomOverlayClicked",null),(0,i.Z)(this,"focusedMarkerID",null),(0,i.Z)(this,"focusedCustomOverlayID",null),this.container=e,this.kakao=window.kakao;const r={center:new this.kakao.maps.LatLng(t,n),level:s};this.map=new this.kakao.maps.Map(this.container,r),this.geocoder=new this.kakao.maps.services.Geocoder}coord2RegionCode(e){return new Promise((t=>{this.geocoder.coord2Address(e.long,e.lat,(e=>{t(e)}))}))}addressSearch(e){return new Promise((t=>{this.geocoder.addressSearch(e,((e,n)=>{t({result:e,status:n})}))}))}validateKakaoMapInit(){if(!window.kakao||!this.container)throw new Error("[kakaoMap.controller] [validateKakaoMapInit] Map not available")}validateKakaoMapInstance(){if(!this.map)throw new Error("[kakaoMap.controller] [validateKakaoMapInstance] Map instance null")}setZoom(e){return this.validateKakaoMapInstance(),this.map.setLevel(e),e}getZoom(){return this.validateKakaoMapInstance(),this.map.getLevel()}moveCenter(e,t){this.validateKakaoMapInstance();const n=new this.kakao.maps.LatLng(e,t);this.map.setCenter(n)}getCenter(){return this.validateKakaoMapInstance(),this.map.getCenter()}customOverlayTemplate(e){return`\n        <div id="${this.prefix}${e.idx}" style="\n        background-image: url(${e.imgUrl});\n        width: 150px;\n        height: 150px;\n        border-radius: 15px;\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        position: relative;\n        " data-overlay="${e.idx}">\n        \n        <div style="\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 15px;\n    height: 100%;\n    width: 100%;\n    color: white;\n    font-weight: bold;\n    line-height: 150px;\n    overflow: hidden;\n    text-overflow:\n    ellipsis;\n    white-space:\n    nowrap;\n    padding: 5px;\n">${e.storeName}</div>\n        </div>\n    `}addCustomOverlay(e){this.validateKakaoMapInstance();const t=new this.kakao.maps.CustomOverlay({position:new this.kakao.maps.LatLng(e.lat,e.long),content:this.customOverlayTemplate(e),xAnchor:.5,yAnchor:1.3,...e});return t.data=e,t.setVisible(!1),t.setMap(this.map),this.customOverlayList.push(t),t}modifyCustomOverlay(e,t){this.deleteCustomOverlay(e,0),this.customOverlayList[e]=this.addCustomOverlay(t)}deleteCustomOverlay(e,t=1){if(this.validateKakaoMapInstance(),e<0||e>=this.customOverlayList.length)throw new Error("Over / Under flow exception");this.customOverlayList[e].setMap(null),this.customOverlayList.splice(e,t)}setCustomOverlayList(e){if(console.log("setCustomOverlayList",e),this.resetCustomOverlayList(),!e||e.length<0)throw new Error("Unexpected array detected");e.forEach((e=>{this.addCustomOverlay(e)}))}resetCustomOverlayList(){let e=!1;this.validateKakaoMapInstance(),this.customOverlayList.forEach(((t,n)=>{this.focusedCustomOverlayID||t.data.id===this.focusedCustomOverlayID?this.focusedCustomOverlayID&&t.data.id===this.focusedCustomOverlayID&&(this.customOverlayList[0]=this.customOverlayList[n],e=!0):this.deleteCustomOverlay(n,0)})),this.customOverlayList.length=this.focusedCustomOverlayID&&e?1:0}resetFocusedCustomOverlay(){if(!this.beforeMarkerId)return;const e=this.customOverlayList.find((e=>e.data.idx===this.beforeMarkerId));e&&e.getVisible()&&e.setVisible(!1)}testClick(){this.kakao.maps.event.trigger(this.markerList[1],"click")}addMarker(e,t,n){this.validateKakaoMapInstance();const i=new this.kakao.maps.LatLng(e,t),s=(new this.kakao.maps.Marker({position:i}),new this.kakao.maps.Marker({position:i}));return this.kakao.maps.event.addListener(s,"click",(()=>{const e=this.customOverlayList.find((e=>e.data.idx===n));n===this.beforeMarkerId&&(this.beforeMarkerId=null),e?(e.getVisible()?(this.focusedMarkerID=null,this.focusedCustomOverlayID=null):(this.focusedMarkerID=n,this.focusedCustomOverlayID=e.data.idx),e.setVisible(!e.getVisible())):e||(console.warn(`[kakaoMap.controller] [addMarker.addListener] Cannot find clicked overlay id: ${n}`),this.focusedMarkerID=null,this.focusedCustomOverlayID=null);const t=this.customOverlayList.find((e=>e.data.idx===this.beforeMarkerId));t?t.setVisible(!1):console.warn(`[kakaoMap.controller] [addMarker.addListener] Cannot find previous overlay id: ${this.beforeMarkerId}`),this.beforeMarkerId=n})),s.setMap(this.map),this.markerList.push(s),s}modifyMarker(e,t,n,i){this.deleteMarker(e,0),this.markerList[e]=this.addMarker(t,n,i)}deleteMarker(e,t=1){if(this.validateKakaoMapInstance(),e<0||e>=this.markerList.length)throw new Error("Over / Under flow exception");this.markerList[e].setMap(null),this.markerList.splice(e,t)}setMarkerList(e){if(this.resetMarkerList(),!e||e.length<0)throw new Error("Unexpected array detected");this.resetFocusedCustomOverlay(),e.forEach((e=>{this.addMarker(e.lat,e.lot,e.id)}))}resetMarkerList(){this.validateKakaoMapInstance(),this.markerList.forEach(((e,t)=>this.deleteMarker(t,0))),this.markerList.length=0}}},8722:function(e,t,n){n.d(t,{Z:function(){return ta}});var i=n(3396),s=n(7139);function r(e,t,n,r,o,a){const l=(0,i.up)("BIconArrowDownShort"),h=(0,i.up)("AddressModal"),c=(0,i.Q2)("b-modal");return(0,i.wg)(),(0,i.iD)("div",{style:(0,s.j5)({color:e.color||"white"})},[(0,i.Uk)((0,s.zw)(e.addrStr)+" ",1),"장바구니"!==e.addrStr?(0,i.wy)(((0,i.wg)(),(0,i.j4)(l,{key:0,onClick:t[0]||(t[0]=t=>e.onArrowBtnClicked())},null,512)),[[c,void 0,void 0,{addressModal:!0}]]):(0,i.kq)("",!0),(0,i.Wm)(h,{ref:"addressModalComponent",onAddressLoad:e.onAddressLoaded},null,8,["onAddressLoad"])],4)}var o=n(9242);const a={id:"map",ref:"map",style:{display:"hidden"}},l={class:"container"},h={class:"row"},c={class:"col"},d={class:"col"},u=(0,i.Uk)(" 현재 위치로 설정");function _(e,t,n,s,r,_){const p=(0,i.up)("b-form-input"),f=(0,i.up)("BIconGeo"),m=(0,i.up)("b-modal");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,null,512),(0,i.Wm)(m,{ref:"addressModal",id:"addressModal",title:"주소 설정","hide-footer":""},{default:(0,i.w5)((()=>[(0,i._)("div",l,[(0,i._)("div",h,[(0,i._)("div",c,[(0,i.Wm)(p,{modelValue:e.address,"onUpdate:modelValue":t[0]||(t[0]=t=>e.address=t),placeholder:"지번, 도로명으로 검색",onKeydown:(0,o.D2)(e.submitAddressSearch,["enter"])},null,8,["modelValue","onKeydown"])])]),(0,i._)("div",{class:"row",style:{"margin-top":"15px",cursor:"pointer"},onClick:t[1]||(t[1]=t=>e.getUserLocation())},[(0,i._)("div",d,[(0,i.Wm)(f),u])])])])),_:1},512)])}n(1703);var p=n(8100);class f{getLocationAutomatically(){const e=new f;return e.grantLocation().then((t=>{if("denied"!=t)return e.getCurrentLocation();throw new Error("User denied location permission")}))}grantLocation(){return this.grantPermission("geolocation")}grantPermission(e){return navigator.permissions.query({name:e}).then((e=>e.state))}getCurrentLocation(){return new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((t=>{e(t.coords)}),(e=>{t(e)}))}))}}var m=n(3419),g=n(4060),y=(0,i.aZ)({name:"AddressModal",data(){return{address:"",kakaoMap:{},dispatch:(0,m.H)()}},mounted(){this.kakaoMap=new p.i(this.$refs.map,33.450701,126.570667,3)},methods:{submitAddressSearch(){let e={};this.kakaoMap.addressSearch(this.address).then((e=>{if(console.log("asdf",e),"OK"==e.status&&e.result.length>0)return console.log(e.result[0]),e.result[0];throw new Error("Empty response")})).then((t=>(e.lat=t.y,e.long=t.x,this.kakaoMap.coord2RegionCode({lat:t.y,long:t.x})))).then((t=>{if(console.log("res",t),!(t&&t.length>0))throw new Error("Cannot get user address info");{const n=t[0].address;e={...e,...n},console.log(e),this.$emit("address-load",e),localStorage.setItem("lat",e.lat.toString()),localStorage.setItem("long",e.long.toString()),this.dispatch((0,g.Br)({geoData:e})),this.address=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`}})).catch((e=>{console.error("[AddressModal] [submitAddressSearch] ",e)}))},showModal(){console.log(this.$refs.addressModal)},hideModal(){},getUserLocation(){let e={};const t=new f;t.getLocationAutomatically().then((t=>(console.log("pos",t),t?(e.lat=t.latitude,e.long=t.longitude,this.kakaoMap.coord2RegionCode({lat:t.latitude,long:t.longitude})):null))).then((t=>{if(console.log("res",t),!(t&&t.length>0))throw new Error("Cannot get user address info");{const n=t[0].address;e={...e,...n},console.log(e),this.$emit("address-load",e),localStorage.setItem("lat",e.lat.toString()),localStorage.setItem("long",e.long.toString()),this.dispatch((0,g.Br)({geoData:e})),this.address=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`}})).catch((e=>{console.error("[AddressModal] [getUserLocation] ",e)}))}}}),v=n(89);const C=(0,v.Z)(y,[["render",_]]);var w=C,k=n(2482),I=n(4275),T=n(1804),E=n(7142),b=n(223),S=n(5168);const N="@firebase/database",x="0.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P="";function R(e){P=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,b.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,b.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,b.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new M(t)}}catch(t){}return new D},O=L("localStorage"),A=L("sessionStorage"),F=new S.Yd("@firebase/database"),q=function(){let e=1;return function(){return e++}}(),U=function(e){const t=(0,b.dS)(e),n=new b.gQ;n.update(t);const i=n.digest();return b.US.encodeByteArray(i)},W=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=W.apply(null,i):t+="object"===typeof i?(0,b.Pz)(i):i,t+=" "}return t};let B=null,z=!0;const V=function(e,t){(0,b.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(F.logLevel=S["in"].VERBOSE,B=F.log.bind(F),t&&A.set("logging_enabled",!0)):"function"===typeof e?B=e:(B=null,A.remove("logging_enabled"))},j=function(...e){if(!0===z&&(z=!1,null===B&&!0===A.get("logging_enabled")&&V(!0)),B){const t=W.apply(null,e);B(t)}},H=function(e){return function(...t){j(e,...t)}},Y=function(...e){const t="FIREBASE INTERNAL ERROR: "+W(...e);F.error(t)},K=function(...e){const t=`FIREBASE FATAL ERROR: ${W(...e)}`;throw F.error(t),new Error(t)},$=function(...e){const t="FIREBASE WARNING: "+W(...e);F.warn(t)},G=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&$("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Q=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Z=function(e){if((0,b.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},X="[MIN_NAME]",J="[MAX_NAME]",ee=function(e,t){if(e===t)return 0;if(e===X||t===J)return-1;if(t===X||e===J)return 1;{const n=ue(e),i=ue(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},te=function(e,t){return e===t?0:e<t?-1:1},ne=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,b.Pz)(t))},ie=function(e){if("object"!==typeof e||null===e)return(0,b.Pz)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,b.Pz)(t[i]),n+=":",n+=ie(e[t[i]]);return n+="}",n},se=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function re(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const oe=function(e){(0,b.hu)(!Q(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,a,l;0===e?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(l=n;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const c=h.join("");let d="";for(l=0;l<64;l+=8){let e=parseInt(c.substr(l,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},ae=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},le=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const he=new RegExp("^-?(0*)\\d{1,10}$"),ce=-2147483648,de=2147483647,ue=function(e){if(he.test(e)){const t=Number(e);if(t>=ce&&t<=de)return t}return null},_e=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw $("Exception was thrown by user callback.",e),t}),Math.floor(0))}},pe=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fe=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){$(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$(e)}}class ye{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ye.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ve="5",Ce="v",we="s",ke="r",Ie="f",Te=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ee="ls",be="p",Se="ac",Ne="websocket",xe="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=O.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&O.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Re(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Me(e,t,n){let i;if((0,b.hu)("string"===typeof t,"typeof type must == string"),(0,b.hu)("object"===typeof n,"typeof params must == object"),t===Ne)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==xe)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Re(e)&&(n["ns"]=e.namespace);const s=[];return re(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,b.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,b.p$)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={},Oe={};function Ae(e){const t=e.toString();return Le[t]||(Le[t]=new De),Le[t]}function Fe(e,t){const n=e.toString();return Oe[n]||(Oe[n]=t()),Oe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&_e((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="start",We="close",Be="pLPCommand",ze="pRTLPCB",Ve="id",je="pw",He="ser",Ye="cb",Ke="seg",$e="ts",Ge="d",Qe="dframe",Ze=1870,Xe=30,Je=Ze-Xe,et=25e3,tt=3e4;class nt{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=H(e),this.stats_=Ae(t),this.urlFn=e=>(this.appCheckToken&&(e[Se]=this.appCheckToken),Me(t,xe,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new qe(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(tt)),Z((()=>{if(this.isClosed_)return;this.scriptTagHolder=new it(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Ue)this.id=n,this.password=i;else{if(t!==We)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Ue]="t",e[He]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ye]=this.scriptTagHolder.uniqueCallbackIdentifier),e[Ce]=ve,this.transportSessionId&&(e[we]=this.transportSessionId),this.lastSessionId&&(e[Ee]=this.lastSessionId),this.applicationId&&(e[be]=this.applicationId),this.appCheckToken&&(e[Se]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&Te.test(location.hostname)&&(e[ke]=Ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nt.forceAllow_=!0}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){return!(0,b.Yr)()&&(!!nt.forceAllow_||!nt.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!ae()&&!le())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,b.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,b.h$)(t),i=se(n,Je);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,b.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Qe]="t",n[Ve]=e,n[je]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,b.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class it{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,b.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=q(),window[Be+this.uniqueCallbackIdentifier]=e,window[ze+this.uniqueCallbackIdentifier]=t,this.myIFrame=it.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){j("frame writing exception"),s.stack&&j(s.stack),j(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||j("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ve]=this.myID,e[je]=this.myPW,e[He]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Xe+n.length<=Ze))break;{const e=this.pendingSegs.shift();n=n+"&"+Ke+i+"="+e.seg+"&"+$e+i+"="+e.ts+"&"+Ge+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(et)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,b.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{j("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=16384,rt=45e3;let ot=null;"undefined"!==typeof MozWebSocket?ot=MozWebSocket:"undefined"!==typeof WebSocket&&(ot=WebSocket);class at{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=H(this.connId),this.stats_=Ae(t),this.connURL=at.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[Ce]=ve,!(0,b.Yr)()&&"undefined"!==typeof location&&location.hostname&&Te.test(location.hostname)&&(r[ke]=Ie),t&&(r[we]=t),n&&(r[Ee]=n),i&&(r[Se]=i),s&&(r[be]=s),Me(e,Ne,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,O.set("previous_websocket_failure",!0);try{let e;if((0,b.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${ve}/${P}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/baemin_proj/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new ot(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ot&&!at.forceDisallow_}static previouslyFailed(){return O.isInMemoryStorage||!0===O.get("previous_websocket_failure")}markConnectionHealthy(){O.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,b.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,b.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,b.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=se(t,st);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(rt))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2,at.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[nt,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=at&&at["isAvailable"]();let n=t&&!at.previouslyFailed();if(e.webSocketOnly&&(t||$("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[at];else{const e=this.transports_=[];for(const t of lt.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);lt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lt.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht=6e4,ct=5e3,dt=10240,ut=102400,_t="t",pt="d",ft="s",mt="r",gt="e",yt="o",vt="a",Ct="n",wt="p",kt="h";class It{constructor(e,t,n,i,s,r,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=H("c:"+this.id+":"),this.transportManager_=new lt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=fe((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ut?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_t in e){const t=e[_t];t===vt?this.upgradeIfSecondaryHealthy_():t===mt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===yt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ne("t",e),n=ne("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ct,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ne("t",e),n=ne("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ne(_t,e);if(pt in e){const n=e[pt];if(t===kt)this.onHandshake_(n);else if(t===Ct){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ft?this.onConnectionShutdown_(n):t===mt?this.onReset_(n):t===gt?Y("Server Error: "+n):t===yt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Y("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ve!==n&&$("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),fe((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ht))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fe((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(ct))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(O.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,b.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){(0,b.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Et{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,b.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new bt}getInitialEvent(e){return(0,b.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=32,Nt=768;class xt{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Pt(){return new xt("")}function Rt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Mt(e){return e.pieces_.length-e.pieceNum_}function Dt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new xt(e.pieces_,t)}function Lt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ot(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function At(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ft(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new xt(t,0)}function qt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof xt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new xt(n,0)}function Ut(e){return e.pieceNum_>=e.pieces_.length}function Wt(e,t){const n=Rt(e),i=Rt(t);if(null===n)return t;if(n===i)return Wt(Dt(e),Dt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Bt(e,t){if(Mt(e)!==Mt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function zt(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Mt(e)>Mt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Vt{constructor(e,t){this.errorPrefix_=t,this.parts_=At(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,b.ug)(this.parts_[n]);Yt(this)}}function jt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,b.ug)(t),Yt(e)}function Ht(e){const t=e.parts_.pop();e.byteLength_-=(0,b.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Yt(e){if(e.byteLength_>Nt)throw new Error(e.errorPrefix_+"has a key path longer than "+Nt+" bytes ("+e.byteLength_+").");if(e.parts_.length>St)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+St+") or object contains a cycle "+Kt(e))}function Kt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Et{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new $t}getInitialEvent(e){return(0,b.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=1e3,Qt=3e5,Zt=3e3,Xt=3e4,Jt=1.3,en=3e4,tn="server_kill",nn=3;class sn extends Tt{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=sn.nextPersistentConnectionId_++,this.log_=H("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gt,this.maxReconnectDelay_=Qt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,b.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$t.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,b.Pz)(s)),(0,b.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new b.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),Zt),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,b.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,b.hu)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];sn.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,b.r3)(e,"w")){const n=(0,b.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();$(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,b.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Xt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,b.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,b.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,b.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):Y("Unrecognized action received from server: "+(0,b.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,b.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>en&&(this.reconnectDelay_=Gt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sn.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){(0,b.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new It(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{$(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(tn)}),s))}catch(Y){this.log_("Failed to get token: "+Y),r||(this.repoInfo_.nodeAdmin&&$(Y),a())}}}interrupt(e){j("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){j("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,b.xb)(this.interruptReasons_)&&(this.reconnectDelay_=Gt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>ie(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new xt(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){j("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nn&&(this.reconnectDelay_=Xt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){j("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,b.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+P.replace(/\./g,"-")]=1,(0,b.uI)()?e["framework.cordova"]=1:(0,b.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bt.getInstance().currentlyOnline();return(0,b.xb)(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0,sn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new rn(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new rn(X,e),i=new rn(X,t);return 0!==this.compare(n,i)}minPost(){return rn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an;class ln extends on{static get __EMPTY_NODE(){return an}static set __EMPTY_NODE(e){an=e}compare(e,t){return ee(e.name,t.name)}isDefinedOn(e){throw(0,b.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return rn.MIN}maxPost(){return new rn(J,an)}makePost(e,t){return(0,b.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new rn(e,an)}toString(){return".key"}}const hn=new ln;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dn{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:dn.RED,this.left=null!=i?i:_n.EMPTY_NODE,this.right=null!=s?s:_n.EMPTY_NODE}copy(e,t,n,i,s){return new dn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _n.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return _n.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dn.RED=!0,dn.BLACK=!1;class un{copy(e,t,n,i,s){return this}insert(e,t,n){return new dn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _n{constructor(e,t=_n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new _n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,dn.BLACK,null,null))}remove(e){return new _n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dn.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new cn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new cn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new cn(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pn(e,t){return ee(e.name,t.name)}function fn(e,t){return ee(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mn;function gn(e){mn=e}_n.EMPTY_NODE=new un;const yn=function(e){return"number"===typeof e?"number:"+oe(e):"string:"+e},vn=function(e){if(e.isLeafNode()){const t=e.val();(0,b.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,b.r3)(t,".sv"),"Priority must be a string or number.")}else(0,b.hu)(e===mn||e.isEmpty(),"priority of unexpected type.");(0,b.hu)(e===mn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Cn,wn,kn;class In{constructor(e,t=In.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,b.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),vn(this.priorityNode_)}static set __childrenNodeConstructor(e){Cn=e}static get __childrenNodeConstructor(){return Cn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new In(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:In.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ut(e)?this:".priority"===Rt(e)?this.priorityNode_:In.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:In.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Rt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,b.hu)(".priority"!==n||1===Mt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,In.__childrenNodeConstructor.EMPTY_NODE.updateChild(Dt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?oe(this.value_):this.value_,this.lazyHash_=U(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===In.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof In.__childrenNodeConstructor?-1:((0,b.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=In.VALUE_TYPE_ORDER.indexOf(t),s=In.VALUE_TYPE_ORDER.indexOf(n);return(0,b.hu)(i>=0,"Unknown leaf type: "+t),(0,b.hu)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function Tn(e){wn=e}function En(e){kn=e}In.VALUE_TYPE_ORDER=["object","boolean","number","string"];class bn extends on{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?ee(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return rn.MIN}maxPost(){return new rn(J,new In("[PRIORITY-POST]",kn))}makePost(e,t){const n=wn(e);return new rn(t,new In("[PRIORITY-POST]",n))}toString(){return".priority"}}const Sn=new bn,Nn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){const t=e=>parseInt(Math.log(e)/Nn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new dn(a,o.node,dn.BLACK,null,null);{const l=parseInt(r/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new dn(a,o.node,dn.BLACK,h,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),c=e[r],d=n?n(c):c;l(new dn(d,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,dn.BLACK):(a(i,dn.BLACK),a(i,dn.RED))}return r},o=new xn(e.length),a=r(o);return new _n(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;const Mn={};class Dn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,b.hu)(Mn&&Sn,"ChildrenNode.ts has not been loaded"),Rn=Rn||new Dn({".priority":Mn},{".priority":Sn}),Rn}get(e){const t=(0,b.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof _n?t:null}hasIndex(e){return(0,b.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,b.hu)(e!==hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(rn.Wrap);let r,o=s.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Pn(n,e.getCompare()):Mn;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const h=Object.assign({},this.indexes_);return h[a]=r,new Dn(h,l)}addToIndexes(e,t){const n=(0,b.UI)(this.indexes_,((n,i)=>{const s=(0,b.DV)(this.indexSet_,i);if((0,b.hu)(s,"Missing index implementation for "+i),n===Mn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(rn.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Pn(n,s.getCompare())}return Mn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new rn(e.name,i))),s.insert(e,e.node)}}));return new Dn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,b.UI)(this.indexes_,(n=>{if(n===Mn)return n;{const i=t.get(e.name);return i?n.remove(new rn(e.name,i)):n}}));return new Dn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class On{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&vn(this.priorityNode_),this.children_.isEmpty()&&(0,b.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ln||(Ln=new On(new _n(fn),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ln}updatePriority(e){return this.children_.isEmpty()?this:new On(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Ln:t}}getChild(e){const t=Rt(e);return null===t?this:this.getImmediateChild(t).getChild(Dt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,b.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new rn(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Ln:this.priorityNode_;return new On(i,r,s)}}updateChild(e,t){const n=Rt(e);if(null===n)return t;{(0,b.hu)(".priority"!==Rt(e)||1===Mt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Dt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Sn,((r,o)=>{t[r]=o.val(e),n++,s&&On.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+yn(this.getPriority().val())+":"),this.forEachChild(Sn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":U(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new rn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new rn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new rn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,rn.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,rn.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fn?-1:0}withIndex(e){if(e===hn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new On(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Sn),n=t.getIterator(Sn);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===hn?null:this.indexMap_.get(e.toString())}}On.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class An extends On{constructor(){super(new _n(fn),On.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return On.EMPTY_NODE}isEmpty(){return!1}}const Fn=new An;Object.defineProperties(rn,{MIN:{value:new rn(X,On.EMPTY_NODE)},MAX:{value:new rn(J,Fn)}}),ln.__EMPTY_NODE=On.EMPTY_NODE,In.__childrenNodeConstructor=On,gn(Fn),En(Fn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn=!0;function Un(e,t=null){if(null===e)return On.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,b.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new In(n,Un(t))}if(e instanceof Array||!qn){let n=On.EMPTY_NODE;return re(e,((t,i)=>{if((0,b.r3)(e,t)&&"."!==t.substring(0,1)){const e=Un(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Un(t))}{const n=[];let i=!1;const s=e;if(re(s,((e,t)=>{if("."!==e.substring(0,1)){const s=Un(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new rn(e,s)))}})),0===n.length)return On.EMPTY_NODE;const r=Pn(n,pn,(e=>e.name),fn);if(i){const e=Pn(n,Sn.getCompare());return new On(r,Un(t),new Dn({".priority":e},{".priority":Sn}))}return new On(r,Un(t),Dn.Default)}}Tn(Un);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wn extends on{constructor(e){super(),this.indexPath_=e,(0,b.hu)(!Ut(e)&&".priority"!==Rt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?ee(e.name,t.name):s}makePost(e,t){const n=Un(e),i=On.EMPTY_NODE.updateChild(this.indexPath_,n);return new rn(t,i)}maxPost(){const e=On.EMPTY_NODE.updateChild(this.indexPath_,Fn);return new rn(J,e)}toString(){return At(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends on{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ee(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return rn.MIN}maxPost(){return rn.MAX}makePost(e,t){const n=Un(e);return new rn(t,n)}toString(){return".value"}}const zn=new Bn,Vn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jn(e){return{type:"value",snapshotNode:e}}function Hn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Kn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function $n(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,b.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Yn(t,o)):(0,b.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(Hn(t,n)):r.trackChildChange(Kn(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Sn,((e,i)=>{t.hasChild(e)||n.trackChildChange(Yn(e,i))})),t.isLeafNode()||t.forEachChild(Sn,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Kn(t,i,s))}else n.trackChildChange(Hn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?On.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.indexedFilter_=new Gn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qn.getStartPost_(e),this.endPost_=Qn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new rn(t,n))||(n=On.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=On.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(On.EMPTY_NODE);const s=this;return t.forEachChild(Sn,((e,t)=>{s.matches(new rn(e,t))||(i=i.updateImmediateChild(e,On.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.rangedFilter_=new Qn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new rn(t,n))||(n=On.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=On.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=On.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(On.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&s(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,On.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;(0,b.hu)(o.numChildren()===this.limit_,"");const a=new rn(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let c=i.getChildAfterChild(this.index_,l,this.reverse_);while(null!=c&&(c.name===t||o.hasChild(c.name)))c=i.getChildAfterChild(this.index_,c,this.reverse_);const d=null==c?1:r(c,a),u=h&&!n.isEmpty()&&d>=0;if(u)return null!=s&&s.trackChildChange(Kn(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Yn(t,e));const n=o.updateImmediateChild(t,On.EMPTY_NODE),i=null!=c&&this.rangedFilter_.matches(c);return i?(null!=s&&s.trackChildChange(Hn(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:h&&r(l,a)>=0?(null!=s&&(s.trackChildChange(Yn(l.name,l.node)),s.trackChildChange(Hn(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,On.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Sn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,b.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,b.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:X}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,b.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,b.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:J}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,b.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Sn}copy(){const e=new Xn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jn(e){return e.loadsAllData()?new Gn(e.getIndex()):e.hasLimit()?new Zn(e):new Qn(e)}function ei(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function ti(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function ni(e,t){const n=e.copy();return n.index_=t,n}function ii(e){const t={};if(e.isDefault())return t;let n;return e.index_===Sn?n="$priority":e.index_===zn?n="$value":e.index_===hn?n="$key":((0,b.hu)(e.index_ instanceof Wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,b.Pz)(n),e.startSet_&&(t["startAt"]=(0,b.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,b.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,b.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,b.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function si(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==Sn&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends Tt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=H("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,b.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=ri.getListenId_(e,n),o={};this.listens_[r]=o;const a=ii(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),(0,b.DV)(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ri.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ii(e._queryParams),n=e._path.toString(),i=new b.BH;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,b.xO)(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,b.cI)(o.responseText)}catch(e){$("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&$("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.rootNode_=On.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){return{value:null,children:new Map}}function li(e,t,n){if(Ut(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Rt(t);e.children.has(i)||e.children.set(i,ai());const s=e.children.get(i);t=Dt(t),li(s,t,n)}}function hi(e,t,n){null!==e.value?n(t,e.value):ci(e,((e,i)=>{const s=new xt(t.toString()+"/"+e);hi(i,s,n)}))}function ci(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&re(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=1e4,_i=3e4,pi=3e5;class fi{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new di(e);const n=ui+(_i-ui)*Math.random();fe(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;re(e,((e,i)=>{i>0&&(0,b.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),fe(this.reportStats_.bind(this),Math.floor(2*Math.random()*pi))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mi;function gi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(mi||(mi={}));class Ci{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=mi.ACK_USER_WRITE,this.source=gi()}operationForChild(e){if(Ut(this.path)){if(null!=this.affectedTree.value)return(0,b.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new xt(e));return new Ci(Pt(),t,this.revert)}}return(0,b.hu)(Rt(this.path)===e,"operationForChild called for unrelated child."),new Ci(Dt(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=mi.OVERWRITE}operationForChild(e){return Ut(this.path)?new wi(this.source,Pt(),this.snap.getImmediateChild(e)):new wi(this.source,Dt(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=mi.MERGE}operationForChild(e){if(Ut(this.path)){const t=this.children.subtree(new xt(e));return t.isEmpty()?null:t.value?new wi(this.source,Pt(),t.value):new ki(this.source,Pt(),t)}return(0,b.hu)(Rt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ki(this.source,Dt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ut(e))return this.isFullyInitialized()&&!this.filtered_;const t=Rt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ei(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push($n(t.childName,t.snapshotNode))})),bi(e,s,"child_removed",t,i,n),bi(e,s,"child_added",t,i,n),bi(e,s,"child_moved",r,i,n),bi(e,s,"child_changed",t,i,n),bi(e,s,"value",t,i,n),s}function bi(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>Ni(e,t,n))),o.forEach((n=>{const i=Si(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Si(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Ni(e,t,n){if(null==t.childName||null==n.childName)throw(0,b.g5)("Should only compare child_ events.");const i=new rn(t.childName,t.snapshotNode),s=new rn(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(e,t){return{eventCache:e,serverCache:t}}function Pi(e,t,n,i){return xi(new Ii(t,n,i),e.serverCache)}function Ri(e,t,n,i){return xi(e.eventCache,new Ii(t,n,i))}function Mi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Di(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li;const Oi=()=>(Li||(Li=new _n(te)),Li);class Ai{constructor(e,t=Oi()){this.value=e,this.children=t}static fromObject(e){let t=new Ai(null);return re(e,((e,n)=>{t=t.set(new xt(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Pt(),value:this.value};if(Ut(e))return null;{const n=Rt(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Dt(e),t);if(null!=s){const e=qt(new xt(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ut(e))return this;{const t=Rt(e),n=this.children.get(t);return null!==n?n.subtree(Dt(e)):new Ai(null)}}set(e,t){if(Ut(e))return new Ai(t,this.children);{const n=Rt(e),i=this.children.get(n)||new Ai(null),s=i.set(Dt(e),t),r=this.children.insert(n,s);return new Ai(this.value,r)}}remove(e){if(Ut(e))return this.children.isEmpty()?new Ai(null):new Ai(null,this.children);{const t=Rt(e),n=this.children.get(t);if(n){const i=n.remove(Dt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Ai(null):new Ai(this.value,s)}return this}}get(e){if(Ut(e))return this.value;{const t=Rt(e),n=this.children.get(t);return n?n.get(Dt(e)):null}}setTree(e,t){if(Ut(e))return t;{const n=Rt(e),i=this.children.get(n)||new Ai(null),s=i.setTree(Dt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Ai(this.value,r)}}fold(e){return this.fold_(Pt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(qt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Pt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ut(e))return null;{const i=Rt(e),s=this.children.get(i);return s?s.findOnPath_(Dt(e),qt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Pt(),t)}foreachOnPath_(e,t,n){if(Ut(e))return this;{this.value&&n(t,this.value);const i=Rt(e),s=this.children.get(i);return s?s.foreachOnPath_(Dt(e),qt(t,i),n):new Ai(null)}}foreach(e){this.foreach_(Pt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(qt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.writeTree_=e}static empty(){return new Fi(new Ai(null))}}function qi(e,t,n){if(Ut(t))return new Fi(new Ai(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Wt(s,t);return r=r.updateChild(o,n),new Fi(e.writeTree_.set(s,r))}{const i=new Ai(n),s=e.writeTree_.setTree(t,i);return new Fi(s)}}}function Ui(e,t,n){let i=e;return re(n,((e,n)=>{i=qi(i,qt(t,e),n)})),i}function Wi(e,t){if(Ut(t))return Fi.empty();{const n=e.writeTree_.setTree(t,new Ai(null));return new Fi(n)}}function Bi(e,t){return null!=zi(e,t)}function zi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Wt(n.path,t)):null}function Vi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Sn,((e,n)=>{t.push(new rn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new rn(e,n.value))})),t}function ji(e,t){if(Ut(t))return e;{const n=zi(e,t);return new Fi(null!=n?new Ai(n):e.writeTree_.subtree(t))}}function Hi(e){return e.writeTree_.isEmpty()}function Yi(e,t){return Ki(Pt(),e.writeTree_,t)}function Ki(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,b.hu)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Ki(qt(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(qt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e,t){return ms(t,e)}function Gi(e,t,n,i,s){(0,b.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=qi(e.visibleWrites,t,n)),e.lastWriteId=i}function Qi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Zi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,b.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;while(s&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Xi(t,i.path)?s=!1:zt(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return Ji(e),!0;if(i.snap)e.visibleWrites=Wi(e.visibleWrites,i.path);else{const t=i.children;re(t,(t=>{e.visibleWrites=Wi(e.visibleWrites,qt(i.path,t))}))}return!0}return!1}function Xi(e,t){if(e.snap)return zt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&zt(qt(e.path,n),t))return!0;return!1}function Ji(e){e.visibleWrites=ts(e.allWrites,es,Pt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function es(e){return e.visible}function ts(e,t,n){let i=Fi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)zt(n,e)?(t=Wt(n,e),i=qi(i,t,r.snap)):zt(e,n)&&(t=Wt(e,n),i=qi(i,Pt(),r.snap.getChild(t)));else{if(!r.children)throw(0,b.g5)("WriteRecord should have .snap or .children");if(zt(n,e))t=Wt(n,e),i=Ui(i,t,r.children);else if(zt(e,n))if(t=Wt(e,n),Ut(t))i=Ui(i,Pt(),r.children);else{const e=(0,b.DV)(r.children,Rt(t));if(e){const n=e.getChild(Dt(t));i=qi(i,Pt(),n)}}}}}return i}function ns(e,t,n,i,s){if(i||s){const r=ji(e.visibleWrites,t);if(!s&&Hi(r))return n;if(s||null!=n||Bi(r,Pt())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(zt(e.path,t)||zt(t,e.path))},o=ts(e.allWrites,r,t),a=n||On.EMPTY_NODE;return Yi(o,a)}return null}{const i=zi(e.visibleWrites,t);if(null!=i)return i;{const i=ji(e.visibleWrites,t);if(Hi(i))return n;if(null!=n||Bi(i,Pt())){const e=n||On.EMPTY_NODE;return Yi(i,e)}return null}}}function is(e,t,n){let i=On.EMPTY_NODE;const s=zi(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Sn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=ji(e.visibleWrites,t);return n.forEachChild(Sn,((e,t)=>{const n=Yi(ji(s,new xt(e)),t);i=i.updateImmediateChild(e,n)})),Vi(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=ji(e.visibleWrites,t);return Vi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ss(e,t,n,i,s){(0,b.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=qt(t,n);if(Bi(e.visibleWrites,r))return null;{const t=ji(e.visibleWrites,r);return Hi(t)?s.getChild(n):Yi(t,s.getChild(n))}}function rs(e,t,n,i){const s=qt(t,n),r=zi(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=ji(e.visibleWrites,s);return Yi(t,i.getNode().getImmediateChild(n))}return null}function os(e,t){return zi(e.visibleWrites,t)}function as(e,t,n,i,s,r,o){let a;const l=ji(e.visibleWrites,t),h=zi(l,Pt());if(null!=h)a=h;else{if(null==n)return[];a=Yi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<s)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function ls(){return{visibleWrites:Fi.empty(),allWrites:[],lastWriteId:-1}}function hs(e,t,n,i){return ns(e.writeTree,e.treePath,t,n,i)}function cs(e,t){return is(e.writeTree,e.treePath,t)}function ds(e,t,n,i){return ss(e.writeTree,e.treePath,t,n,i)}function us(e,t){return os(e.writeTree,qt(e.treePath,t))}function _s(e,t,n,i,s,r){return as(e.writeTree,e.treePath,t,n,i,s,r)}function ps(e,t,n){return rs(e.writeTree,e.treePath,t,n)}function fs(e,t){return ms(qt(e.treePath,t),e.writeTree)}function ms(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,b.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,b.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Kn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Yn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,Hn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,b.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Kn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const vs=new ys;class Cs{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ps(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Di(this.viewCache_),s=_s(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(e){return{filter:e}}function ks(e,t){(0,b.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,b.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function Is(e,t,n,i,s){const r=new gs;let o,a;if(n.type===mi.OVERWRITE){const l=n;l.source.fromUser?o=Ss(e,t,l.path,l.snap,i,s,r):((0,b.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Ut(l.path),o=bs(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===mi.MERGE){const l=n;l.source.fromUser?o=xs(e,t,l.path,l.children,i,s,r):((0,b.hu)(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Rs(e,t,l.path,l.children,i,s,a,r))}else if(n.type===mi.ACK_USER_WRITE){const a=n;o=a.revert?Ls(e,t,a.path,i,s,r):Ms(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==mi.LISTEN_COMPLETE)throw(0,b.g5)("Unknown operation type: "+n.type);o=Ds(e,t,n.path,i,r)}const l=r.getChanges();return Ts(t,o,l),{viewCache:o,changes:l}}function Ts(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Mi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(jn(Mi(t)))}}function Es(e,t,n,i,s,r){const o=t.eventCache;if(null!=us(i,n))return t;{let a,l;if(Ut(n))if((0,b.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Di(t),s=n instanceof On?n:On.EMPTY_NODE,o=cs(i,s);a=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=hs(i,Di(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const h=Rt(n);if(".priority"===h){(0,b.hu)(1===Mt(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=ds(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const c=Dt(n);let d;if(o.isCompleteForChild(h)){l=t.serverCache.getNode();const e=ds(i,n,o.getNode(),l);d=null!=e?o.getNode().getImmediateChild(h).updateChild(c,e):o.getNode().getImmediateChild(h)}else d=ps(i,h,t.serverCache);a=null!=d?e.filter.updateChild(o.getNode(),h,d,c,s,r):o.getNode()}}return Pi(t,a,o.isFullyInitialized()||Ut(n),e.filter.filtersNodes())}}function bs(e,t,n,i,s,r,o,a){const l=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(Ut(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),e,null)}else{const e=Rt(n);if(!l.isCompleteForPath(n)&&Mt(n)>1)return t;const s=Dt(n),r=l.getNode().getImmediateChild(e),o=r.updateChild(s,i);h=".priority"===e?c.updatePriority(l.getNode(),o):c.updateChild(l.getNode(),e,o,s,vs,null)}const d=Ri(t,h,l.isFullyInitialized()||Ut(n),c.filtersNodes()),u=new Cs(s,d,r);return Es(e,d,n,s,u,a)}function Ss(e,t,n,i,s,r,o){const a=t.eventCache;let l,h;const c=new Cs(s,t,r);if(Ut(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Pi(t,h,!0,e.filter.filtersNodes());else{const s=Rt(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),l=Pi(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=Dt(n),h=a.getNode().getImmediateChild(s);let d;if(Ut(r))d=i;else{const e=c.getCompleteChild(s);d=null!=e?".priority"===Lt(r)&&e.getChild(Ft(r)).isEmpty()?e:e.updateChild(r,i):On.EMPTY_NODE}if(h.equals(d))l=t;else{const n=e.filter.updateChild(a.getNode(),s,d,r,c,o);l=Pi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ns(e,t){return e.eventCache.isCompleteForChild(t)}function xs(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const h=qt(n,i);Ns(t,Rt(h))&&(a=Ss(e,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=qt(n,i);Ns(t,Rt(h))||(a=Ss(e,a,h,l,s,r,o))})),a}function Ps(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Rs(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,h=t;l=Ut(n)?i:new Ai(null).setTree(n,i);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),c=Ps(e,l,i);h=bs(e,h,new xt(n),c,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),c=Ps(e,l,i);h=bs(e,h,new xt(n),c,s,r,o,a)}})),h}function Ms(e,t,n,i,s,r,o){if(null!=us(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Ut(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return bs(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Ut(n)){let i=new Ai(null);return l.getNode().forEachChild(hn,((e,t)=>{i=i.set(new xt(e),t)})),Rs(e,t,n,i,s,r,a,o)}return t}{let h=new Ai(null);return i.foreach(((e,t)=>{const i=qt(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))})),Rs(e,t,n,h,s,r,a,o)}}function Ds(e,t,n,i,s){const r=t.serverCache,o=Ri(t,r.getNode(),r.isFullyInitialized()||Ut(n),r.isFiltered());return Es(e,o,n,i,vs,s)}function Ls(e,t,n,i,s,r){let o;if(null!=us(i,n))return t;{const a=new Cs(i,t,s),l=t.eventCache.getNode();let h;if(Ut(n)||".priority"===Rt(n)){let n;if(t.serverCache.isFullyInitialized())n=hs(i,Di(t));else{const e=t.serverCache.getNode();(0,b.hu)(e instanceof On,"serverChildren would be complete if leaf node"),n=cs(i,e)}h=e.filter.updateFullNode(l,n,r)}else{const s=Rt(n);let c=ps(i,s,t.serverCache);null==c&&t.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?e.filter.updateChild(l,s,c,Dt(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,On.EMPTY_NODE,Dt(n),a,r):l,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=hs(i,Di(t)),o.isLeafNode()&&(h=e.filter.updateFullNode(h,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=us(i,Pt()),Pi(t,h,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Gn(n.getIndex()),s=Jn(n);this.processor_=ws(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(On.EMPTY_NODE,r.getNode(),null),l=s.updateFullNode(On.EMPTY_NODE,o.getNode(),null),h=new Ii(a,r.isFullyInitialized(),i.filtersNodes()),c=new Ii(l,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=xi(c,h),this.eventGenerator_=new Ti(this.query_)}get query(){return this.query_}}function As(e){return Mi(e.viewCache_)}function Fs(e,t){const n=Di(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ut(t)&&!n.getImmediateChild(Rt(t)).isEmpty())?n.getChild(t):null}function qs(e,t,n,i){t.type===mi.MERGE&&null!==t.source.queryId&&((0,b.hu)(Di(e.viewCache_),"We should always have a full cache before handling merges"),(0,b.hu)(Mi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=Is(e.processor_,s,t,n,i);return ks(e.processor_,r.viewCache),(0,b.hu)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Us(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Us(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Ei(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws,Bs;class zs{constructor(){this.views=new Map}}function Vs(e){(0,b.hu)(!Ws,"__referenceConstructor has already been defined"),Ws=e}function js(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,b.hu)(null!=r,"SyncTree gave us an op for an invalid query."),qs(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(qs(r,t,n,i));return s}}function Hs(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=hs(n,s?i:null),r=!1;e?r=!0:i instanceof On?(e=cs(n,i),r=!1):(e=On.EMPTY_NODE,r=!1);const o=xi(new Ii(e,r,!1),new Ii(i,s,!1));return new Os(t,o)}return o}function Ys(e,t){let n=null;for(const i of e.views.values())n=n||Fs(i,t);return n}function Ks(e){(0,b.hu)(!Bs,"__referenceConstructor has already been defined"),Bs=e}class $s{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ai(null),this.pendingWriteTree_=ls(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gs(e,t,n,i,s){return Gi(e.pendingWriteTree_,t,n,i,s),s?ir(e,new wi(gi(),t,n)):[]}function Qs(e,t,n=!1){const i=Qi(e.pendingWriteTree_,t),s=Zi(e.pendingWriteTree_,t);if(s){let t=new Ai(null);return null!=i.snap?t=t.set(Pt(),!0):re(i.children,(e=>{t=t.set(new xt(e),!0)})),ir(e,new Ci(i.path,t,n))}return[]}function Zs(e,t,n){return ir(e,new wi(yi(),t,n))}function Xs(e,t,n){const i=Ai.fromObject(n);return ir(e,new ki(yi(),t,i))}function Js(e,t,n,i){const s=or(e,i);if(null!=s){const i=ar(s),r=i.path,o=i.queryId,a=Wt(r,t),l=new wi(vi(o),a,n);return lr(e,r,l)}return[]}function er(e,t,n,i){const s=or(e,i);if(s){const i=ar(s),r=i.path,o=i.queryId,a=Wt(r,t),l=Ai.fromObject(n),h=new ki(vi(o),a,l);return lr(e,r,h)}return[]}function tr(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Wt(e,t),s=Ys(n,i);if(s)return s}));return ns(s,t,r,n,i)}function nr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Wt(e,n);i=i||Ys(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Ys(s,Pt()):(s=new zs,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Ii(i,!0,!1):null,a=$i(e.pendingWriteTree_,t._path),l=Hs(s,t,a,r?o.getNode():On.EMPTY_NODE,r);return As(l)}function ir(e,t){return sr(t,e.syncPointTree_,null,$i(e.pendingWriteTree_,Pt()))}function sr(e,t,n,i){if(Ut(e.path))return rr(e,t,n,i);{const s=t.get(Pt());null==n&&null!=s&&(n=Ys(s,Pt()));let r=[];const o=Rt(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=fs(i,o);r=r.concat(sr(a,l,e,t))}return s&&(r=r.concat(js(s,e,i,n))),r}}function rr(e,t,n,i){const s=t.get(Pt());null==n&&null!=s&&(n=Ys(s,Pt()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=fs(i,t),l=e.operationForChild(t);l&&(r=r.concat(rr(l,s,o,a)))})),s&&(r=r.concat(js(s,e,i,n))),r}function or(e,t){return e.tagToQueryMap.get(t)}function ar(e){const t=e.indexOf("$");return(0,b.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new xt(e.substr(0,t))}}function lr(e,t,n){const i=e.syncPointTree_.get(t);(0,b.hu)(i,"Missing sync point for query tag that we're tracking");const s=$i(e.pendingWriteTree_,t);return js(i,n,s,null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hr(t)}node(){return this.node_}}class cr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qt(this.path_,e);return new cr(this.syncTree_,t)}node(){return tr(this.syncTree_,this.path_)}}const dr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},ur=function(e,t,n){return e&&"object"===typeof e?((0,b.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?_r(e[".sv"],t,n):"object"===typeof e[".sv"]?pr(e[".sv"],t):void(0,b.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},_r=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,b.hu)(!1,"Unexpected server value: "+e)}},pr=function(e,t,n){e.hasOwnProperty("increment")||(0,b.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,b.hu)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,b.hu)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s,o=r.getValue();return"number"!==typeof o?i:o+i},fr=function(e,t,n,i){return gr(t,new cr(n,e),i)},mr=function(e,t,n){return gr(e,new hr(t),n)};function gr(e,t,n){const i=e.getPriority().val(),s=ur(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=ur(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new In(r,Un(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new In(s))),i.forEachChild(Sn,((e,i)=>{const s=gr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function vr(e,t){let n=t instanceof xt?t:new xt(t),i=e,s=Rt(n);while(null!==s){const e=(0,b.DV)(i.node.children,s)||{children:{},childCount:0};i=new yr(s,i,e),n=Dt(n),s=Rt(n)}return i}function Cr(e){return e.node.value}function wr(e,t){e.node.value=t,Nr(e)}function kr(e){return e.node.childCount>0}function Ir(e){return void 0===Cr(e)&&!kr(e)}function Tr(e,t){re(e.node.children,((n,i)=>{t(new yr(n,e,i))}))}function Er(e,t,n,i){n&&!i&&t(e),Tr(e,(e=>{Er(e,t,!0,i)})),n&&i&&t(e)}function br(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Sr(e){return new xt(null===e.parent?e.name:Sr(e.parent)+"/"+e.name)}function Nr(e){null!==e.parent&&xr(e.parent,e.name,e)}function xr(e,t,n){const i=Ir(n),s=(0,b.r3)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Nr(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Nr(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=/[\[\].#$\/\u0000-\u001F\u007F]/,Rr=/[\[\].#$\u0000-\u001F\u007F]/,Mr=10485760,Dr=function(e){return"string"===typeof e&&0!==e.length&&!Pr.test(e)},Lr=function(e){return"string"===typeof e&&0!==e.length&&!Rr.test(e)},Or=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Lr(e)},Ar=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!Q(e)||e&&"object"===typeof e&&(0,b.r3)(e,".sv")},Fr=function(e,t,n,i){i&&void 0===t||qr((0,b.gK)(e,"value"),t,n)},qr=function(e,t,n){const i=n instanceof xt?new Vt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Kt(i));if("function"===typeof t)throw new Error(e+"contains a function "+Kt(i)+" with contents = "+t.toString());if(Q(t))throw new Error(e+"contains "+t.toString()+" "+Kt(i));if("string"===typeof t&&t.length>Mr/3&&(0,b.ug)(t)>Mr)throw new Error(e+"contains a string greater than "+Mr+" utf8 bytes "+Kt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(re(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Dr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Kt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');jt(i,t),qr(e,r,i),Ht(i)})),n&&s)throw new Error(e+' contains ".value" child '+Kt(i)+" in addition to actual children.")}},Ur=function(e,t,n,i){if((!i||void 0!==n)&&!Dr(n))throw new Error((0,b.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},Wr=function(e,t,n,i){if((!i||void 0!==n)&&!Lr(n))throw new Error((0,b.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Br=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wr(e,t,n,i)},zr=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Dr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Or(n))throw new Error((0,b.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Bt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Hr(e,t,n){jr(e,n),Kr(e,(e=>Bt(e,t)))}function Yr(e,t,n){jr(e,n),Kr(e,(e=>zt(e,t)||zt(t,e)))}function Kr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?($r(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function $r(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();B&&j("event: "+n.toString()),_e(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="repo_interrupt",Qr=25;class Zr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ai(),this.transactionQueueTree_=new yr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xr(e,t,n){if(e.stats_=Ae(e.repoInfo_),e.forceRestClient_||pe())e.server_=new ri(e.repoInfo_,((t,n,i,s)=>{to(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>no(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,b.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new sn(e.repoInfo_,t,((t,n,i,s)=>{to(e,t,n,i,s)}),(t=>{no(e,t)}),(t=>{io(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Fe(e.repoInfo_,(()=>new fi(e.stats_,e.server_))),e.infoData_=new oi,e.infoSyncTree_=new $s({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Zs(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),so(e,"connected",!1),e.serverSyncTree_=new $s({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Yr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Jr(e){const t=e.infoData_.getNode(new xt(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function eo(e){return dr({timestamp:Jr(e)})}function to(e,t,n,i,s){e.dataUpdateCount++;const r=new xt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=(0,b.UI)(n,(e=>Un(e)));o=er(e.serverSyncTree_,r,t,s)}else{const t=Un(n);o=Js(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,b.UI)(n,(e=>Un(e)));o=Xs(e.serverSyncTree_,r,t)}else{const t=Un(n);o=Zs(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=po(e,r)),Yr(e.eventQueue_,a,o)}function no(e,t){so(e,"connected",t),!1===t&&ao(e)}function io(e,t){re(t,((t,n)=>{so(e,t,n)}))}function so(e,t,n){const i=new xt("/.info/"+t),s=Un(n);e.infoData_.updateSnapshot(i,s);const r=Zs(e.infoSyncTree_,i,s);Yr(e.eventQueue_,i,r)}function ro(e){return e.nextWriteId_++}function oo(e,t){const n=nr(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=Un(n).withIndex(t._queryParams.getIndex()),s=Zs(e.serverSyncTree_,t._path,i);return Hr(e.eventQueue_,t._path,s),Promise.resolve(i)}),(n=>(ho(e,"get for query "+(0,b.Pz)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function ao(e){ho(e,"onDisconnectEvents");const t=eo(e),n=ai();hi(e.onDisconnect_,Pt(),((i,s)=>{const r=fr(i,s,e.serverSyncTree_,t);li(n,i,r)}));let i=[];hi(n,Pt(),((t,n)=>{i=i.concat(Zs(e.serverSyncTree_,t,n));const s=Co(e,t);po(e,s)})),e.onDisconnect_=ai(),Yr(e.eventQueue_,Pt(),i)}function lo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Gr)}function ho(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),j(n,...t)}function co(e,t,n){return tr(e.serverSyncTree_,t,n)||On.EMPTY_NODE}function uo(e,t=e.transactionQueueTree_){if(t||vo(e,t),Cr(t)){const n=go(e,t);(0,b.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&_o(e,Sr(t),n)}else kr(t)&&Tr(t,(t=>{uo(e,t)}))}function _o(e,t,n){const i=n.map((e=>e.currentWriteId)),s=co(e,t,i);let r=s;const o=s.hash();for(let h=0;h<n.length;h++){const e=n[h];(0,b.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=Wt(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{ho(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Qs(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();vo(e,vr(e.transactionQueueTree_,t)),uo(e,e.transactionQueueTree_),Yr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)_e(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{$("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}po(e,t)}}),o)}function po(e,t){const n=mo(e,t),i=Sr(n),s=go(e,n);return fo(e,s,i),i}function fo(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const r=t[a],l=Wt(n,r.path);let h,c=!1;if((0,b.hu)(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)c=!0,h=r.abortReason,s=s.concat(Qs(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=Qr)c=!0,h="maxretry",s=s.concat(Qs(e.serverSyncTree_,r.currentWriteId,!0));else{const n=co(e,r.path,o);r.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){qr("transaction failed: Data returned ",i,r.path);let t=Un(i);const a="object"===typeof i&&null!=i&&(0,b.r3)(i,".priority");a||(t=t.updatePriority(n.getPriority()));const l=r.currentWriteId,h=eo(e),c=mr(t,n,h);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=c,r.currentWriteId=ro(e),o.splice(o.indexOf(l),1),s=s.concat(Gs(e.serverSyncTree_,r.path,c,r.currentWriteId,r.applyLocally)),s=s.concat(Qs(e.serverSyncTree_,l,!0))}else c=!0,h="nodata",s=s.concat(Qs(e.serverSyncTree_,r.currentWriteId,!0))}Yr(e.eventQueue_,n,s),s=[],c&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}vo(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)_e(i[a]);uo(e,e.transactionQueueTree_)}function mo(e,t){let n,i=e.transactionQueueTree_;n=Rt(t);while(null!==n&&void 0===Cr(i))i=vr(i,n),t=Dt(t),n=Rt(t);return i}function go(e,t){const n=[];return yo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function yo(e,t,n){const i=Cr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Tr(t,(t=>{yo(e,t,n)}))}function vo(e,t){const n=Cr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,wr(t,n.length>0?n:void 0)}Tr(t,(t=>{vo(e,t)}))}function Co(e,t){const n=Sr(mo(e,t)),i=vr(e.transactionQueueTree_,t);return br(i,(t=>{wo(e,t)})),wo(e,i),Er(i,(t=>{wo(e,t)})),n}function wo(e,t){const n=Cr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,b.hu)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,b.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Qs(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?wr(t,void 0):n.length=r+1,Yr(e.eventQueue_,Sr(t),s);for(let e=0;e<i.length;e++)_e(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function Io(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$(`Invalid query segment '${n}' in query '${e}'`)}return t}const To=function(e,t){const n=Eo(e),i=n.namespace;"firebase.com"===n.domain&&K(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||K("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||G();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Pe(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new xt(n.pathString)}},Eo=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"===typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(s=ko(e.substring(c,d)));const u=Io(e.substring(Math.min(e.length,d)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;const _=t.slice(0,h);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in u&&(r=u["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ut(this._path)?null:Lt(this._path)}get ref(){return new Po(this._repo,this._path)}get _queryIdentifier(){const e=si(this._queryParams),t=ie(e);return"{}"===t?"default":t}get _queryObject(){return si(this._queryParams)}isEqual(e){if(e=(0,b.m9)(e),!(e instanceof bo))return!1;const t=this._repo===e._repo,n=Bt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ot(this._path)}}function So(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function No(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===hn){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==X)throw new Error(i);if("string"!==typeof t)throw new Error(s)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==J)throw new Error(i);if("string"!==typeof n)throw new Error(s)}}else if(e.getIndex()===Sn){if(null!=t&&!Ar(t)||null!=n&&!Ar(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,b.hu)(e.getIndex()instanceof Wn||e.getIndex()===zn,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function xo(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Po extends bo{constructor(e,t){super(e,t,new Xn,!1)}get parent(){const e=Ft(this._path);return null===e?null:new Po(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Ro{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new xt(e),n=Do(this.ref,e);return new Ro(this._node.getChild(t),n,Sn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Ro(n,Do(this.ref,t),Sn))))}hasChild(e){const t=new xt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mo(e,t){return e=(0,b.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Do(e._root,t):e._root}function Do(e,t){return e=(0,b.m9)(e),null===Rt(e._path)?Br("child","path",t,!1):Wr("child","path",t,!1),new Po(e._repo,qt(e._path,t))}function Lo(e){return e=(0,b.m9)(e),oo(e._repo,e).then((t=>new Ro(t,new Po(e._repo,e._path),e._queryParams.getIndex())))}class Oo{}class Ao extends Oo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Fr("endAt",this._value,e._path,!0);const t=ti(e._queryParams,this._value,this._key);if(xo(t),No(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new bo(e._repo,e._path,t,e._orderByCalled)}}class Fo extends Oo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Fr("startAt",this._value,e._path,!0);const t=ei(e._queryParams,this._value,this._key);if(xo(t),No(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new bo(e._repo,e._path,t,e._orderByCalled)}}class qo extends Oo{constructor(e){super(),this._path=e}_apply(e){So(e,"orderByChild");const t=new xt(this._path);if(Ut(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new Wn(t),i=ni(e._queryParams,n);return No(i),new bo(e._repo,e._path,i,!0)}}function Uo(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Wr("orderByChild","path",e,!1),new qo(e)}class Wo extends Oo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Fr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ao(this._value,this._key)._apply(new Fo(this._value,this._key)._apply(e))}}function Bo(e,t){return Ur("equalTo","key",t,!0),new Wo(e,t)}function zo(e,...t){let n=(0,b.m9)(e);for(const i of t)n=i._apply(n);return n}Vs(Po),Ks(Po);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vo="FIREBASE_DATABASE_EMULATOR_HOST",jo={};let Ho=!1;function Yo(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||K("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=To(r,s),h=l.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/baemin_proj/"}[Vo]),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,l=To(r,s),h=l.repoInfo):o=!l.repoInfo.secure;const c=s&&o?new ye(ye.OWNER):new ge(e.name,e.options,t);zr("Invalid Firebase Database URL",l),Ut(l.path)||K("Database URL must point to the root of a Firebase Database (not including a child path).");const d=$o(h,e,c,new me(e.name,n));return new Go(d,e)}function Ko(e,t){const n=jo[t];n&&n[e.key]===e||K(`Database ${t}(${e.repoInfo_}) has already been deleted.`),lo(e),delete n[e.key]}function $o(e,t,n,i){let s=jo[t.name];s||(s={},jo[t.name]=s);let r=s[e.toURLString()];return r&&K("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Zr(e,Ho,n,i),s[e.toURLString()]=r,r}class Go{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Po(this._repo,Pt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ko(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&K("Cannot call "+e+" on a deleted database.")}}function Qo(e=(0,T.Mq)(),t){return(0,T.qX)(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zo(e){R(T.Jn),(0,T.Xd)(new E.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Yo(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),(0,T.KN)(N,x,e),(0,T.KN)(N,x,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},sn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Zo();class Xo{constructor(){(0,k.Z)(this,"app",void 0),(0,k.Z)(this,"realtimeDB",void 0),this.app=(0,I.Mq)(),this.realtimeDB=Qo(this.app)}getFoodShopFilterByAddress(e){return Lo(zo(Mo(this.realtimeDB,"DATA"),Uo("cgg_code_nm"),Bo(e))).then((e=>e.exists()?e.val():(console.warn("No data available"),[]))).catch((e=>{console.error(`[getFoodShopFilterByAddress] error: ${e.message}`)}))}}var Jo=(0,i.aZ)({name:"AddressSelectBtn",components:{AddressModal:w},props:{address:String,color:String},data(){return{addrStr:this.address,region_2depth_name:"",dispatch:(0,m.H)()}},mounted(){this.loadLastLocation(),this.loadFilteredStoreList(this.region_2depth_name)},methods:{onArrowBtnClicked(){this.$refs.addressModalComponent.showModal()},saveLastLocation(e,t){localStorage.setItem("addressFull",e),localStorage.setItem("region_2depth_name",t)},loadLastLocation(){this.addrStr=localStorage.getItem("addressFull")||"서울 송파구 방이동",this.region_2depth_name=localStorage.getItem("region_2depth_name")||"송파구",console.log("add",this.addrStr,this.region_2depth_name)},loadFilteredStoreList(e){const t=new Xo;t.getFoodShopFilterByAddress(e).then((e=>{console.log("test",e),this.dispatch((0,g.qc)({storeListData:e}))}))},onAddressLoaded(e){console.log("addressInfo",e),this.loadFilteredStoreList(e.region_2depth_name),this.addrStr=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`,this.saveLastLocation(this.addrStr,e.region_2depth_name)}}});const ea=(0,v.Z)(Jo,[["render",r],["__scopeId","data-v-030f905b"]]);var ta=ea}}]);
//# sourceMappingURL=722.4d28e9c8.js.map