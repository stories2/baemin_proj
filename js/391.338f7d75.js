"use strict";(self["webpackChunkbaemin_proj"]=self["webpackChunkbaemin_proj"]||[]).push([[391],{9391:function(e,t,n){n.d(t,{Z:function(){return ta}});var i=n(3396),s=n(7139);function r(e,t,n,r,o,a){const h=(0,i.up)("BIconArrowDownShort"),l=(0,i.up)("AddressModal"),c=(0,i.Q2)("b-modal");return(0,i.wg)(),(0,i.iD)("div",{style:(0,s.j5)({color:e.color||"white"})},[(0,i.Uk)((0,s.zw)(e.addrStr)+" ",1),"장바구니"!==e.addrStr?(0,i.wy)(((0,i.wg)(),(0,i.j4)(h,{key:0,onClick:t[0]||(t[0]=t=>e.onArrowBtnClicked())},null,512)),[[c,void 0,void 0,{addressModal:!0}]]):(0,i.kq)("",!0),(0,i.Wm)(l,{ref:"addressModalComponent",onAddressLoad:e.onAddressLoaded},null,8,["onAddressLoad"])],4)}var o=n(9242);const a={id:"map",ref:"map",style:{display:"hidden"}},h={class:"container"},l={class:"row"},c={class:"col"},u={class:"col"},d=(0,i.Uk)(" 현재 위치로 설정");function _(e,t,n,s,r,_){const p=(0,i.up)("b-form-input"),f=(0,i.up)("BIconGeo"),m=(0,i.up)("b-modal");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",a,null,512),(0,i.Wm)(m,{ref:"addressModal",id:"addressModal",title:"주소 설정","hide-footer":""},{default:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i._)("div",l,[(0,i._)("div",c,[(0,i.Wm)(p,{modelValue:e.address,"onUpdate:modelValue":t[0]||(t[0]=t=>e.address=t),placeholder:"지번, 도로명으로 검색",onKeydown:(0,o.D2)(e.submitAddressSearch,["enter"])},null,8,["modelValue","onKeydown"])])]),(0,i._)("div",{class:"row",style:{"margin-top":"15px",cursor:"pointer"},onClick:t[1]||(t[1]=t=>e.getUserLocation())},[(0,i._)("div",u,[(0,i.Wm)(f),d])])])])),_:1},512)])}n(1703);var p=n(2482);class f{constructor(e,t,n,i){(0,p.Z)(this,"container",void 0),(0,p.Z)(this,"map",void 0),(0,p.Z)(this,"geocoder",void 0),this.container=e;const s={center:new window.kakao.maps.LatLng(t,n),level:i};this.map=new window.kakao.maps.Map(this.container,s),this.geocoder=new window.kakao.maps.services.Geocoder}coord2RegionCode(e){return new Promise((t=>{this.geocoder.coord2Address(e.long,e.lat,(e=>{t(e)}))}))}addressSearch(e){return new Promise((t=>{this.geocoder.addressSearch(e,((e,n)=>{t({result:e,status:n})}))}))}}class m{getLocationAutomatically(){const e=new m;return e.grantLocation().then((t=>{if("denied"!=t)return e.getCurrentLocation();throw new Error("User denied location permission")}))}grantLocation(){return this.grantPermission("geolocation")}grantPermission(e){return navigator.permissions.query({name:e}).then((e=>e.state))}getCurrentLocation(){return new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((t=>{e(t.coords)}),(e=>{t(e)}))}))}}var g=(0,i.aZ)({name:"AddressModal",data(){return{address:"",kakaoMap:{}}},mounted(){this.kakaoMap=new f(this.$refs.map,33.450701,126.570667,3)},methods:{submitAddressSearch(){let e={lat:0,long:0,address_name:"",main_address_no:"",mountain_yn:"",region_1depth_name:"",region_2depth_name:"",region_3depth_name:"",sub_address_no:"",zip_code:""};console.log("asdf"),this.kakaoMap.addressSearch(this.address).then((e=>{if(console.log("asdf",e),"OK"==e.status&&e.result.length>0)return console.log(e.result[0]),e.result[0];throw new Error("Empty response")})).then((e=>this.kakaoMap.coord2RegionCode({lat:e.y,long:e.x}))).then((t=>{if(console.log("res",t),!(t&&t.length>0))throw new Error("Cannot get user address info");{const n=t[0].address;e={...e,...n},console.log(e),this.$emit("address-load",e),this.address=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`}})).catch((e=>{console.error("[AddressModal] [submitAddressSearch] ",e)}))},showModal(){console.log(this.$refs.addressModal)},hideModal(){},getUserLocation(){let e={lat:0,long:0,address_name:"",main_address_no:"",mountain_yn:"",region_1depth_name:"",region_2depth_name:"",region_3depth_name:"",sub_address_no:"",zip_code:""};const t=new m;t.getLocationAutomatically().then((t=>(console.log("pos",t),t?(e.lat=t.latitude,e.long=t.longitude,this.kakaoMap.coord2RegionCode({lat:t.latitude,long:t.longitude})):null))).then((t=>{if(console.log("res",t),!(t&&t.length>0))throw new Error("Cannot get user address info");{const n=t[0].address;e={...e,...n},console.log(e),this.$emit("address-load",e),this.address=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`}})).catch((e=>{console.error("[AddressModal] [getUserLocation] ",e)}))}}}),y=n(89);const v=(0,y.Z)(g,[["render",_]]);var C=v,w=n(4275),T=n(1804),I=n(7142),E=n(223),k=n(5168);const b="@firebase/database",S="0.13.0";
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
 */let N="";function P(e){N=e}
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
 */class x{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,E.Pz)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,E.cI)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class R{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,E.r3)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const D=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new x(t)}}catch(t){}return new R},M=D("localStorage"),A=D("sessionStorage"),F=new k.Yd("@firebase/database"),L=function(){let e=1;return function(){return e++}}(),O=function(e){const t=(0,E.dS)(e),n=new E.gQ;n.update(t);const i=n.digest();return E.US.encodeByteArray(i)},q=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=q.apply(null,i):t+="object"===typeof i?(0,E.Pz)(i):i,t+=" "}return t};let W=null,U=!0;const B=function(e,t){(0,E.hu)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(F.logLevel=k["in"].VERBOSE,W=F.log.bind(F),t&&A.set("logging_enabled",!0)):"function"===typeof e?W=e:(W=null,A.remove("logging_enabled"))},z=function(...e){if(!0===U&&(U=!1,null===W&&!0===A.get("logging_enabled")&&B(!0)),W){const t=q.apply(null,e);W(t)}},j=function(e){return function(...t){z(e,...t)}},H=function(...e){const t="FIREBASE INTERNAL ERROR: "+q(...e);F.error(t)},Y=function(...e){const t=`FIREBASE FATAL ERROR: ${q(...e)}`;throw F.error(t),new Error(t)},V=function(...e){const t="FIREBASE WARNING: "+q(...e);F.warn(t)},$=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&V("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},K=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},G=function(e){if((0,E.Yr)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},Q="[MIN_NAME]",X="[MAX_NAME]",Z=function(e,t){if(e===t)return 0;if(e===Q||t===X)return-1;if(t===Q||e===X)return 1;{const n=ce(e),i=ce(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},J=function(e,t){return e===t?0:e<t?-1:1},ee=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,E.Pz)(t))},te=function(e){if("object"!==typeof e||null===e)return(0,E.Pz)(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,E.Pz)(t[i]),n+=":",n+=te(e[t[i]]);return n+="}",n},ne=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function ie(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const se=function(e){(0,E.hu)(!K(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let s,r,o,a,h;0===e?(r=0,o=0,s=1/e===-1/0?1:0):(s=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),r=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(e/Math.pow(2,1-i-n))));const l=[];for(h=n;h;h-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(h=t;h;h-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const c=l.join("");let u="";for(h=0;h<64;h+=8){let e=parseInt(c.substr(h,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},re=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},oe=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};const ae=new RegExp("^-?(0*)\\d{1,10}$"),he=-2147483648,le=2147483647,ce=function(e){if(ae.test(e)){const t=Number(e);if(t>=he&&t<=le)return t}return null},ue=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw V("Exception was thrown by user callback.",e),t}),Math.floor(0))}},de=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_e=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
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
class pe{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){V(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class fe{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',V(e)}}class me{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}me.OWNER="owner";
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
const ge="5",ye="v",ve="s",Ce="r",we="f",Te=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ie="ls",Ee="p",ke="ac",be="websocket",Se="long_polling";
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
class Ne{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=M.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&M.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Pe(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function xe(e,t,n){let i;if((0,E.hu)("string"===typeof t,"typeof type must == string"),(0,E.hu)("object"===typeof n,"typeof params must == object"),t===be)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Se)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}Pe(e)&&(n["ns"]=e.namespace);const s=[];return ie(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
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
 */class Re{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,E.r3)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,E.p$)(this.counters_)}}
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
 */const De={},Me={};function Ae(e){const t=e.toString();return De[t]||(De[t]=new Re),De[t]}function Fe(e,t){const n=e.toString();return Me[n]||(Me[n]=t()),Me[n]}
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
 */class Le{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&ue((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const Oe="start",qe="close",We="pLPCommand",Ue="pRTLPCB",Be="id",ze="pw",je="ser",He="cb",Ye="seg",Ve="ts",$e="d",Ke="dframe",Ge=1870,Qe=30,Xe=Ge-Qe,Ze=25e3,Je=3e4;class et{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=j(e),this.stats_=Ae(t),this.urlFn=e=>(this.appCheckToken&&(e[ke]=this.appCheckToken),xe(t,Se,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Le(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Je)),G((()=>{if(this.isClosed_)return;this.scriptTagHolder=new tt(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Oe)this.id=n,this.password=i;else{if(t!==qe)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Oe]="t",e[je]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[He]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ye]=ge,this.transportSessionId&&(e[ve]=this.transportSessionId),this.lastSessionId&&(e[Ie]=this.lastSessionId),this.applicationId&&(e[Ee]=this.applicationId),this.appCheckToken&&(e[ke]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&Te.test(location.hostname)&&(e[Ce]=we);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){et.forceAllow_=!0}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){return!(0,E.Yr)()&&(!!et.forceAllow_||!et.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!re()&&!oe())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,E.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,E.h$)(t),i=ne(n,Xe);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,E.Yr)())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Ke]="t",n[Be]=e,n[ze]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,E.Pz)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class tt{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,E.Yr)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=L(),window[We+this.uniqueCallbackIdentifier]=e,window[Ue+this.uniqueCallbackIdentifier]=t,this.myIFrame=tt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(s){z("frame writing exception"),s.stack&&z(s.stack),z(s)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||z("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Be]=this.myID,e[ze]=this.myPW,e[je]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Qe+n.length<=Ge))break;{const e=this.pendingSegs.shift();n=n+"&"+Ye+i+"="+e.seg+"&"+Ve+i+"="+e.ts+"&"+$e+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Ze)),s=()=>{clearTimeout(i),n()};this.addTag(e,s)}addTag(e,t){(0,E.Yr)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
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
 */const nt=16384,it=45e3;let st=null;"undefined"!==typeof MozWebSocket?st=MozWebSocket:"undefined"!==typeof WebSocket&&(st=WebSocket);class rt{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=j(this.connId),this.stats_=Ae(t),this.connURL=rt.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r[ye]=ge,!(0,E.Yr)()&&"undefined"!==typeof location&&location.hostname&&Te.test(location.hostname)&&(r[Ce]=we),t&&(r[ve]=t),n&&(r[Ie]=n),i&&(r[ke]=i),s&&(r[Ee]=s),xe(e,be,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,M.set("previous_websocket_failure",!0);try{let e;if((0,E.Yr)()){const e=this.nodeAdmin?"AdminNode":"Node",t={headers:{"User-Agent":`Firebase/${ge}/${N}/${process.platform}/${e}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(t.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/baemin_proj/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(t["proxy"]={origin:i})}this.mySock=new st(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==st&&!rt.forceDisallow_}static previouslyFailed(){return M.isInMemoryStorage||!0===M.get("previous_websocket_failure")}markConnectionHealthy(){M.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,E.cI)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,E.hu)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,E.Pz)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=ne(t,nt);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(it))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2,rt.healthyTimeout=3e4;
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
class ot{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[et,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=rt&&rt["isAvailable"]();let n=t&&!rt.previouslyFailed();if(e.webSocketOnly&&(t||V("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[rt];else{const e=this.transports_=[];for(const t of ot.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);ot.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ot.globalTransportInitialized_=!1;
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
const at=6e4,ht=5e3,lt=10240,ct=102400,ut="t",dt="d",_t="s",pt="r",ft="e",mt="o",gt="a",yt="n",vt="p",Ct="h";class wt{constructor(e,t,n,i,s,r,o,a,h,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=h,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=j("c:"+this.id+":"),this.transportManager_=new ot(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=_e((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ct?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lt?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ut in e){const t=e[ut];t===gt?this.upgradeIfSecondaryHealthy_():t===pt?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===mt&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ee("t",e),n=ee("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gt,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yt,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ee("t",e),n=ee("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ee(ut,e);if(dt in e){const n=e[dt];if(t===Ct)this.onHandshake_(n);else if(t===yt){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===_t?this.onConnectionShutdown_(n):t===pt?this.onReset_(n):t===ft?H("Server Error: "+n):t===mt?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):H("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ge!==n&&V("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),_e((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(at))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_e((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(ht))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(M.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class It{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,E.hu)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===t&&(!n||n===i[s].context))return void i.splice(s,1)}validateEventType_(e){(0,E.hu)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Et extends It{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||(0,E.uI)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Et}getInitialEvent(e){return(0,E.hu)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const kt=32,bt=768;class St{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Nt(){return new St("")}function Pt(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function xt(e){return e.pieces_.length-e.pieceNum_}function Rt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new St(e.pieces_,t)}function Dt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Mt(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function At(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ft(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new St(t,0)}function Lt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof St)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new St(n,0)}function Ot(e){return e.pieceNum_>=e.pieces_.length}function qt(e,t){const n=Pt(e),i=Pt(t);if(null===n)return t;if(n===i)return qt(Rt(e),Rt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Wt(e,t){if(xt(e)!==xt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ut(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(xt(e)>xt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Bt{constructor(e,t){this.errorPrefix_=t,this.parts_=At(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=(0,E.ug)(this.parts_[n]);Ht(this)}}function zt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=(0,E.ug)(t),Ht(e)}function jt(e){const t=e.parts_.pop();e.byteLength_-=(0,E.ug)(t),e.parts_.length>0&&(e.byteLength_-=1)}function Ht(e){if(e.byteLength_>bt)throw new Error(e.errorPrefix_+"has a key path longer than "+bt+" bytes ("+e.byteLength_+").");if(e.parts_.length>kt)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+kt+") or object contains a cycle "+Yt(e))}function Yt(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Vt extends It{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Vt}getInitialEvent(e){return(0,E.hu)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const $t=1e3,Kt=3e5,Gt=3e3,Qt=3e4,Xt=1.3,Zt=3e4,Jt="server_kill",en=3;class tn extends Tt{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=tn.nextPersistentConnectionId_++,this.log_=j("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$t,this.maxReconnectDelay_=Kt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,E.Yr)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Et.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,E.Pz)(s)),(0,E.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new E.BH,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),Gt),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,E.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,E.hu)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n},r="q";e.tag&&(s["q"]=t._queryObject,s["t"]=e.tag),s["h"]=e.hashFn(),this.sendRequest(r,s,(s=>{const r=s["d"],o=s["s"];tn.warnOnListenWarnings_(r,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&(0,E.r3)(e,"w")){const n=(0,E.DV)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();V(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||(0,E.GJ)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,E.w9)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,E.hu)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const s=this.removeListen_(n,i);s&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e},r="n";i&&(s["q"]=n,s["t"]=i),this.sendRequest(r,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r["h"]=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,E.Pz)(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):H("Unrecognized action received from server: "+(0,E.Pz)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,E.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Zt&&(this.reconnectDelay_=$t),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Xt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+tn.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},h=function(e){(0,E.hu)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:h};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,h]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);r?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=h&&h.token,o=new wt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{V(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Jt)}),s))}catch(H){this.log_("Failed to get token: "+H),r||(this.repoInfo_.nodeAdmin&&V(H),a())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,E.xb)(this.interruptReasons_)&&(this.reconnectDelay_=$t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>te(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new St(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=en&&(this.reconnectDelay_=Qt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=en&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,E.Yr)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+N.replace(/\./g,"-")]=1,(0,E.uI)()?e["framework.cordova"]=1:(0,E.b$)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Et.getInstance().currentlyOnline();return(0,E.xb)(this.interruptReasons_)&&e}}tn.nextPersistentConnectionId_=0,tn.nextConnectionId_=0;
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
class nn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new nn(e,t)}}
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
 */class sn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new nn(Q,e),i=new nn(Q,t);return 0!==this.compare(n,i)}minPost(){return nn.MIN}}
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
 */let rn;class on extends sn{static get __EMPTY_NODE(){return rn}static set __EMPTY_NODE(e){rn=e}compare(e,t){return Z(e.name,t.name)}isDefinedOn(e){throw(0,E.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return nn.MIN}maxPost(){return new nn(X,rn)}makePost(e,t){return(0,E.hu)("string"===typeof e,"KeyIndex indexValue must always be a string."),new nn(e,rn)}toString(){return".key"}}const an=new on;
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
 */class hn{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;while(!e.isEmpty())if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ln{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:ln.RED,this.left=null!=i?i:un.EMPTY_NODE,this.right=null!=s?s:un.EMPTY_NODE}copy(e,t,n,i,s){return new ln(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return un.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return un.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ln.RED=!0,ln.BLACK=!1;class cn{copy(e,t,n,i,s){return this}insert(e,t,n){return new ln(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class un{constructor(e,t=un.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new un(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ln.BLACK,null,null))}remove(e){return new un(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ln.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new hn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new hn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new hn(this.root_,null,this.comparator_,!0,e)}}
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
function dn(e,t){return Z(e.name,t.name)}function _n(e,t){return Z(e,t)}
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
 */let pn;function fn(e){pn=e}un.EMPTY_NODE=new cn;const mn=function(e){return"number"===typeof e?"number:"+se(e):"string:"+e},gn=function(e){if(e.isLeafNode()){const t=e.val();(0,E.hu)("string"===typeof t||"number"===typeof t||"object"===typeof t&&(0,E.r3)(t,".sv"),"Priority must be a string or number.")}else(0,E.hu)(e===pn||e.isEmpty(),"priority of unexpected type.");(0,E.hu)(e===pn||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let yn,vn,Cn;class wn{constructor(e,t=wn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,E.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),gn(this.priorityNode_)}static set __childrenNodeConstructor(e){yn=e}static get __childrenNodeConstructor(){return yn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new wn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:wn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ot(e)?this:".priority"===Pt(e)?this.priorityNode_:wn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:wn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Pt(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,E.hu)(".priority"!==n||1===xt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,wn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Rt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?se(this.value_):this.value_,this.lazyHash_=O(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===wn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof wn.__childrenNodeConstructor?-1:((0,E.hu)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=wn.VALUE_TYPE_ORDER.indexOf(t),s=wn.VALUE_TYPE_ORDER.indexOf(n);return(0,E.hu)(i>=0,"Unknown leaf type: "+t),(0,E.hu)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function Tn(e){vn=e}function In(e){Cn=e}wn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class En extends sn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Z(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return nn.MIN}maxPost(){return new nn(X,new wn("[PRIORITY-POST]",Cn))}makePost(e,t){const n=vn(e);return new nn(t,new wn("[PRIORITY-POST]",n))}toString(){return".priority"}}const kn=new En,bn=Math.log(2);
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
 */class Sn{constructor(e){const t=e=>parseInt(Math.log(e)/bn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nn=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new ln(a,o.node,ln.BLACK,null,null);{const h=parseInt(r/2,10)+t,l=s(t,h),c=s(h+1,i);return o=e[h],a=n?n(o):o,new ln(a,o.node,ln.BLACK,l,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const l=s(r+1,a),c=e[r],u=n?n(c):c;h(new ln(u,c.node,i,null,l))},h=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,ln.BLACK):(a(i,ln.BLACK),a(i,ln.RED))}return r},o=new Sn(e.length),a=r(o);return new un(i||t,a)};
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
 */let Pn;const xn={};class Rn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,E.hu)(xn&&kn,"ChildrenNode.ts has not been loaded"),Pn=Pn||new Rn({".priority":xn},{".priority":kn}),Pn}get(e){const t=(0,E.DV)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof un?t:null}hasIndex(e){return(0,E.r3)(this.indexSet_,e.toString())}addIndex(e,t){(0,E.hu)(e!==an,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(nn.Wrap);let r,o=s.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?Nn(n,e.getCompare()):xn;const a=e.toString(),h=Object.assign({},this.indexSet_);h[a]=e;const l=Object.assign({},this.indexes_);return l[a]=r,new Rn(l,h)}addToIndexes(e,t){const n=(0,E.UI)(this.indexes_,((n,i)=>{const s=(0,E.DV)(this.indexSet_,i);if((0,E.hu)(s,"Missing index implementation for "+i),n===xn){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(nn.Wrap);let r=i.getNext();while(r)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Nn(n,s.getCompare())}return xn}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new nn(e.name,i))),s.insert(e,e.node)}}));return new Rn(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,E.UI)(this.indexes_,(n=>{if(n===xn)return n;{const i=t.get(e.name);return i?n.remove(new nn(e.name,i)):n}}));return new Rn(n,this.indexSet_)}}
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
 */let Dn;class Mn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&gn(this.priorityNode_),this.children_.isEmpty()&&(0,E.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Dn||(Dn=new Mn(new un(_n),null,Rn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Dn}updatePriority(e){return this.children_.isEmpty()?this:new Mn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Dn:t}}getChild(e){const t=Pt(e);return null===t?this:this.getImmediateChild(t).getChild(Rt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,E.hu)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new nn(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?Dn:this.priorityNode_;return new Mn(i,r,s)}}updateChild(e,t){const n=Pt(e);if(null===n)return t;{(0,E.hu)(".priority"!==Pt(e)||1===xt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Rt(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(kn,((r,o)=>{t[r]=o.val(e),n++,s&&Mn.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+mn(this.getPriority().val())+":"),this.forEachChild(kn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":O(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new nn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new nn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new nn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,nn.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,nn.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fn?-1:0}withIndex(e){if(e===an||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Mn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===an||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(kn),n=t.getIterator(kn);let i=e.getNext(),s=n.getNext();while(i&&s){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===an?null:this.indexMap_.get(e.toString())}}Mn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class An extends Mn{constructor(){super(new un(_n),Mn.EMPTY_NODE,Rn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Mn.EMPTY_NODE}isEmpty(){return!1}}const Fn=new An;Object.defineProperties(nn,{MIN:{value:new nn(Q,Mn.EMPTY_NODE)},MAX:{value:new nn(X,Fn)}}),on.__EMPTY_NODE=Mn.EMPTY_NODE,wn.__childrenNodeConstructor=Mn,fn(Fn),In(Fn);
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
const Ln=!0;function On(e,t=null){if(null===e)return Mn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),(0,E.hu)(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new wn(n,On(t))}if(e instanceof Array||!Ln){let n=Mn.EMPTY_NODE;return ie(e,((t,i)=>{if((0,E.r3)(e,t)&&"."!==t.substring(0,1)){const e=On(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(On(t))}{const n=[];let i=!1;const s=e;if(ie(s,((e,t)=>{if("."!==e.substring(0,1)){const s=On(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new nn(e,s)))}})),0===n.length)return Mn.EMPTY_NODE;const r=Nn(n,dn,(e=>e.name),_n);if(i){const e=Nn(n,kn.getCompare());return new Mn(r,On(t),new Rn({".priority":e},{".priority":kn}))}return new Mn(r,On(t),Rn.Default)}}Tn(On);
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
class qn extends sn{constructor(e){super(),this.indexPath_=e,(0,E.hu)(!Ot(e)&&".priority"!==Pt(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Z(e.name,t.name):s}makePost(e,t){const n=On(e),i=Mn.EMPTY_NODE.updateChild(this.indexPath_,n);return new nn(t,i)}maxPost(){const e=Mn.EMPTY_NODE.updateChild(this.indexPath_,Fn);return new nn(X,e)}toString(){return At(this.indexPath_,0).join("/")}}
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
 */class Wn extends sn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Z(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return nn.MIN}maxPost(){return nn.MAX}makePost(e,t){const n=On(e);return new nn(t,n)}toString(){return".value"}}const Un=new Wn,Bn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
function zn(e){return{type:"value",snapshotNode:e}}function jn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Hn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Yn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Vn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
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
 */class $n{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,E.hu)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(Hn(t,o)):(0,E.hu)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(jn(t,n)):r.trackChildChange(Yn(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(kn,((e,i)=>{t.hasChild(e)||n.trackChildChange(Hn(e,i))})),t.isLeafNode()||t.forEachChild(kn,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(Yn(t,i,s))}else n.trackChildChange(jn(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Mn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class Kn{constructor(e){this.indexedFilter_=new $n(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kn.getStartPost_(e),this.endPost_=Kn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new nn(t,n))||(n=Mn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Mn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Mn.EMPTY_NODE);const s=this;return t.forEachChild(kn,((e,t)=>{s.matches(new nn(e,t))||(i=i.updateImmediateChild(e,Mn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Gn{constructor(e){this.rangedFilter_=new Kn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new nn(t,n))||(n=Mn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Mn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Mn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(Mn.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;while(r.hasNext()){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);const h=a&&o<this.limit_&&s(t,n)<=0;h?o++:i=i.updateImmediateChild(t.name,Mn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;(0,E.hu)(o.numChildren()===this.limit_,"");const a=new nn(t,n),h=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),l=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let c=i.getChildAfterChild(this.index_,h,this.reverse_);while(null!=c&&(c.name===t||o.hasChild(c.name)))c=i.getChildAfterChild(this.index_,c,this.reverse_);const u=null==c?1:r(c,a),d=l&&!n.isEmpty()&&u>=0;if(d)return null!=s&&s.trackChildChange(Yn(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(Hn(t,e));const n=o.updateImmediateChild(t,Mn.EMPTY_NODE),i=null!=c&&this.rangedFilter_.matches(c);return i?(null!=s&&s.trackChildChange(jn(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:l&&r(h,a)>=0?(null!=s&&(s.trackChildChange(Hn(h.name,h.node)),s.trackChildChange(jn(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(h.name,Mn.EMPTY_NODE)):e}}
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
 */class Qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=kn}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,E.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,E.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Q}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,E.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,E.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:X}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,E.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===kn}copy(){const e=new Qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Xn(e){return e.loadsAllData()?new $n(e.getIndex()):e.hasLimit()?new Gn(e):new Kn(e)}function Zn(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Jn(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function ei(e,t){const n=e.copy();return n.index_=t,n}function ti(e){const t={};if(e.isDefault())return t;let n;return e.index_===kn?n="$priority":e.index_===Un?n="$value":e.index_===an?n="$key":((0,E.hu)(e.index_ instanceof qn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=(0,E.Pz)(n),e.startSet_&&(t["startAt"]=(0,E.Pz)(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+(0,E.Pz)(e.indexStartName_))),e.endSet_&&(t["endAt"]=(0,E.Pz)(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+(0,E.Pz)(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function ni(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==kn&&(t["i"]=e.index_.toString()),t}
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
 */class ii extends Tt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=j("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,E.hu)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=ii.getListenId_(e,n),o={};this.listens_[r]=o;const a=ti(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),(0,E.DV)(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=ii.getListenId_(e,t);delete this.listens_[n]}get(e){const t=ti(e._queryParams),n=e._path.toString(),i=new E.BH;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),s&&s.token&&(t["ac"]=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,E.xO)(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,E.cI)(o.responseText)}catch(e){V("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&V("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
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
 */class si{constructor(){this.rootNode_=Mn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function ri(){return{value:null,children:new Map}}function oi(e,t,n){if(Ot(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Pt(t);e.children.has(i)||e.children.set(i,ri());const s=e.children.get(i);t=Rt(t),oi(s,t,n)}}function ai(e,t,n){null!==e.value?n(t,e.value):hi(e,((e,i)=>{const s=new St(t.toString()+"/"+e);ai(i,s,n)}))}function hi(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */class li{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ie(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */const ci=1e4,ui=3e4,di=3e5;class _i{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new li(e);const n=ci+(ui-ci)*Math.random();_e(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ie(e,((e,i)=>{i>0&&(0,E.r3)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),_e(this.reportStats_.bind(this),Math.floor(2*Math.random()*di))}}
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
 */var pi;function fi(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function mi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(pi||(pi={}));class yi{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=pi.ACK_USER_WRITE,this.source=fi()}operationForChild(e){if(Ot(this.path)){if(null!=this.affectedTree.value)return(0,E.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new St(e));return new yi(Nt(),t,this.revert)}}return(0,E.hu)(Pt(this.path)===e,"operationForChild called for unrelated child."),new yi(Rt(this.path),this.affectedTree,this.revert)}}
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
class vi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=pi.OVERWRITE}operationForChild(e){return Ot(this.path)?new vi(this.source,Nt(),this.snap.getImmediateChild(e)):new vi(this.source,Rt(this.path),this.snap)}}
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
 */class Ci{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=pi.MERGE}operationForChild(e){if(Ot(this.path)){const t=this.children.subtree(new St(e));return t.isEmpty()?null:t.value?new vi(this.source,Nt(),t.value):new Ci(this.source,Nt(),t)}return(0,E.hu)(Pt(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ci(this.source,Rt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class wi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ot(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pt(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Ti{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ii(e,t,n,i){const s=[],r=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push(Vn(t.childName,t.snapshotNode))})),Ei(e,s,"child_removed",t,i,n),Ei(e,s,"child_added",t,i,n),Ei(e,s,"child_moved",r,i,n),Ei(e,s,"child_changed",t,i,n),Ei(e,s,"value",t,i,n),s}function Ei(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>bi(e,t,n))),o.forEach((n=>{const i=ki(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function ki(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function bi(e,t,n){if(null==t.childName||null==n.childName)throw(0,E.g5)("Should only compare child_ events.");const i=new nn(t.childName,t.snapshotNode),s=new nn(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
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
 */function Si(e,t){return{eventCache:e,serverCache:t}}function Ni(e,t,n,i){return Si(new wi(t,n,i),e.serverCache)}function Pi(e,t,n,i){return Si(e.eventCache,new wi(t,n,i))}function xi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ri(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Di;const Mi=()=>(Di||(Di=new un(J)),Di);class Ai{constructor(e,t=Mi()){this.value=e,this.children=t}static fromObject(e){let t=new Ai(null);return ie(e,((e,n)=>{t=t.set(new St(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Nt(),value:this.value};if(Ot(e))return null;{const n=Pt(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Rt(e),t);if(null!=s){const e=Lt(new St(n),s.path);return{path:e,value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Ot(e))return this;{const t=Pt(e),n=this.children.get(t);return null!==n?n.subtree(Rt(e)):new Ai(null)}}set(e,t){if(Ot(e))return new Ai(t,this.children);{const n=Pt(e),i=this.children.get(n)||new Ai(null),s=i.set(Rt(e),t),r=this.children.insert(n,s);return new Ai(this.value,r)}}remove(e){if(Ot(e))return this.children.isEmpty()?new Ai(null):new Ai(null,this.children);{const t=Pt(e),n=this.children.get(t);if(n){const i=n.remove(Rt(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Ai(null):new Ai(this.value,s)}return this}}get(e){if(Ot(e))return this.value;{const t=Pt(e),n=this.children.get(t);return n?n.get(Rt(e)):null}}setTree(e,t){if(Ot(e))return t;{const n=Pt(e),i=this.children.get(n)||new Ai(null),s=i.setTree(Rt(e),t);let r;return r=s.isEmpty()?this.children.remove(n):this.children.insert(n,s),new Ai(this.value,r)}}fold(e){return this.fold_(Nt(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Lt(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Nt(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Ot(e))return null;{const i=Pt(e),s=this.children.get(i);return s?s.findOnPath_(Rt(e),Lt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Nt(),t)}foreachOnPath_(e,t,n){if(Ot(e))return this;{this.value&&n(t,this.value);const i=Pt(e),s=this.children.get(i);return s?s.foreachOnPath_(Rt(e),Lt(t,i),n):new Ai(null)}}foreach(e){this.foreach_(Nt(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Lt(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Fi{constructor(e){this.writeTree_=e}static empty(){return new Fi(new Ai(null))}}function Li(e,t,n){if(Ot(t))return new Fi(new Ai(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=qt(s,t);return r=r.updateChild(o,n),new Fi(e.writeTree_.set(s,r))}{const i=new Ai(n),s=e.writeTree_.setTree(t,i);return new Fi(s)}}}function Oi(e,t,n){let i=e;return ie(n,((e,n)=>{i=Li(i,Lt(t,e),n)})),i}function qi(e,t){if(Ot(t))return Fi.empty();{const n=e.writeTree_.setTree(t,new Ai(null));return new Fi(n)}}function Wi(e,t){return null!=Ui(e,t)}function Ui(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(qt(n.path,t)):null}function Bi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(kn,((e,n)=>{t.push(new nn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new nn(e,n.value))})),t}function zi(e,t){if(Ot(t))return e;{const n=Ui(e,t);return new Fi(null!=n?new Ai(n):e.writeTree_.subtree(t))}}function ji(e){return e.writeTree_.isEmpty()}function Hi(e,t){return Yi(Nt(),e.writeTree_,t)}function Yi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,E.hu)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Yi(Lt(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Lt(e,".priority"),i)),n}}
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
 */function Vi(e,t){return ps(t,e)}function $i(e,t,n,i,s){(0,E.hu)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Li(e.visibleWrites,t,n)),e.lastWriteId=i}function Ki(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function Gi(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,E.hu)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;while(s&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Qi(t,i.path)?s=!1:Ut(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return Xi(e),!0;if(i.snap)e.visibleWrites=qi(e.visibleWrites,i.path);else{const t=i.children;ie(t,(t=>{e.visibleWrites=qi(e.visibleWrites,Lt(i.path,t))}))}return!0}return!1}function Qi(e,t){if(e.snap)return Ut(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ut(Lt(e.path,n),t))return!0;return!1}function Xi(e){e.visibleWrites=Ji(e.allWrites,Zi,Nt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Zi(e){return e.visible}function Ji(e,t,n){let i=Fi.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Ut(n,e)?(t=qt(n,e),i=Li(i,t,r.snap)):Ut(e,n)&&(t=qt(e,n),i=Li(i,Nt(),r.snap.getChild(t)));else{if(!r.children)throw(0,E.g5)("WriteRecord should have .snap or .children");if(Ut(n,e))t=qt(n,e),i=Oi(i,t,r.children);else if(Ut(e,n))if(t=qt(e,n),Ot(t))i=Oi(i,Nt(),r.children);else{const e=(0,E.DV)(r.children,Pt(t));if(e){const n=e.getChild(Rt(t));i=Li(i,Nt(),n)}}}}}return i}function es(e,t,n,i,s){if(i||s){const r=zi(e.visibleWrites,t);if(!s&&ji(r))return n;if(s||null!=n||Wi(r,Nt())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ut(e.path,t)||Ut(t,e.path))},o=Ji(e.allWrites,r,t),a=n||Mn.EMPTY_NODE;return Hi(o,a)}return null}{const i=Ui(e.visibleWrites,t);if(null!=i)return i;{const i=zi(e.visibleWrites,t);if(ji(i))return n;if(null!=n||Wi(i,Nt())){const e=n||Mn.EMPTY_NODE;return Hi(i,e)}return null}}}function ts(e,t,n){let i=Mn.EMPTY_NODE;const s=Ui(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(kn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=zi(e.visibleWrites,t);return n.forEachChild(kn,((e,t)=>{const n=Hi(zi(s,new St(e)),t);i=i.updateImmediateChild(e,n)})),Bi(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=zi(e.visibleWrites,t);return Bi(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function ns(e,t,n,i,s){(0,E.hu)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Lt(t,n);if(Wi(e.visibleWrites,r))return null;{const t=zi(e.visibleWrites,r);return ji(t)?s.getChild(n):Hi(t,s.getChild(n))}}function is(e,t,n,i){const s=Lt(t,n),r=Ui(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n)){const t=zi(e.visibleWrites,s);return Hi(t,i.getNode().getImmediateChild(n))}return null}function ss(e,t){return Ui(e.visibleWrites,t)}function rs(e,t,n,i,s,r,o){let a;const h=zi(e.visibleWrites,t),l=Ui(h,Nt());if(null!=l)a=l;else{if(null==n)return[];a=Hi(h,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let h=n.getNext();while(h&&e.length<s)0!==t(h,i)&&e.push(h),h=n.getNext();return e}}function os(){return{visibleWrites:Fi.empty(),allWrites:[],lastWriteId:-1}}function as(e,t,n,i){return es(e.writeTree,e.treePath,t,n,i)}function hs(e,t){return ts(e.writeTree,e.treePath,t)}function ls(e,t,n,i){return ns(e.writeTree,e.treePath,t,n,i)}function cs(e,t){return ss(e.writeTree,Lt(e.treePath,t))}function us(e,t,n,i,s,r){return rs(e.writeTree,e.treePath,t,n,i,s,r)}function ds(e,t,n){return is(e.writeTree,e.treePath,t,n)}function _s(e,t){return ps(Lt(e.treePath,t),e.writeTree)}function ps(e,t){return{treePath:e,writeTree:t}}
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
 */class fs{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,E.hu)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,E.hu)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,Yn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,Hn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,jn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,E.g5)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Yn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */class ms{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const gs=new ms;class ys{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new wi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ds(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ri(this.viewCache_),s=us(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
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
 */function vs(e){return{filter:e}}function Cs(e,t){(0,E.hu)(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),(0,E.hu)(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ws(e,t,n,i,s){const r=new fs;let o,a;if(n.type===pi.OVERWRITE){const h=n;h.source.fromUser?o=ks(e,t,h.path,h.snap,i,s,r):((0,E.hu)(h.source.fromServer,"Unknown source."),a=h.source.tagged||t.serverCache.isFiltered()&&!Ot(h.path),o=Es(e,t,h.path,h.snap,i,s,a,r))}else if(n.type===pi.MERGE){const h=n;h.source.fromUser?o=Ss(e,t,h.path,h.children,i,s,r):((0,E.hu)(h.source.fromServer,"Unknown source."),a=h.source.tagged||t.serverCache.isFiltered(),o=Ps(e,t,h.path,h.children,i,s,a,r))}else if(n.type===pi.ACK_USER_WRITE){const a=n;o=a.revert?Ds(e,t,a.path,i,s,r):xs(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==pi.LISTEN_COMPLETE)throw(0,E.g5)("Unknown operation type: "+n.type);o=Rs(e,t,n.path,i,r)}const h=r.getChanges();return Ts(t,o,h),{viewCache:o,changes:h}}function Ts(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=xi(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(zn(xi(t)))}}function Is(e,t,n,i,s,r){const o=t.eventCache;if(null!=cs(i,n))return t;{let a,h;if(Ot(n))if((0,E.hu)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ri(t),s=n instanceof Mn?n:Mn.EMPTY_NODE,o=hs(i,s);a=e.filter.updateFullNode(t.eventCache.getNode(),o,r)}else{const n=as(i,Ri(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const l=Pt(n);if(".priority"===l){(0,E.hu)(1===xt(n),"Can't have a priority with additional path components");const s=o.getNode();h=t.serverCache.getNode();const r=ls(i,n,s,h);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const c=Rt(n);let u;if(o.isCompleteForChild(l)){h=t.serverCache.getNode();const e=ls(i,n,o.getNode(),h);u=null!=e?o.getNode().getImmediateChild(l).updateChild(c,e):o.getNode().getImmediateChild(l)}else u=ds(i,l,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),l,u,c,s,r):o.getNode()}}return Ni(t,a,o.isFullyInitialized()||Ot(n),e.filter.filtersNodes())}}function Es(e,t,n,i,s,r,o,a){const h=t.serverCache;let l;const c=o?e.filter:e.filter.getIndexedFilter();if(Ot(n))l=c.updateFullNode(h.getNode(),i,null);else if(c.filtersNodes()&&!h.isFiltered()){const e=h.getNode().updateChild(n,i);l=c.updateFullNode(h.getNode(),e,null)}else{const e=Pt(n);if(!h.isCompleteForPath(n)&&xt(n)>1)return t;const s=Rt(n),r=h.getNode().getImmediateChild(e),o=r.updateChild(s,i);l=".priority"===e?c.updatePriority(h.getNode(),o):c.updateChild(h.getNode(),e,o,s,gs,null)}const u=Pi(t,l,h.isFullyInitialized()||Ot(n),c.filtersNodes()),d=new ys(s,u,r);return Is(e,u,n,s,d,a)}function ks(e,t,n,i,s,r,o){const a=t.eventCache;let h,l;const c=new ys(s,t,r);if(Ot(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),h=Ni(t,l,!0,e.filter.filtersNodes());else{const s=Pt(n);if(".priority"===s)l=e.filter.updatePriority(t.eventCache.getNode(),i),h=Ni(t,l,a.isFullyInitialized(),a.isFiltered());else{const r=Rt(n),l=a.getNode().getImmediateChild(s);let u;if(Ot(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===Dt(r)&&e.getChild(Ft(r)).isEmpty()?e:e.updateChild(r,i):Mn.EMPTY_NODE}if(l.equals(u))h=t;else{const n=e.filter.updateChild(a.getNode(),s,u,r,c,o);h=Ni(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return h}function bs(e,t){return e.eventCache.isCompleteForChild(t)}function Ss(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,h)=>{const l=Lt(n,i);bs(t,Pt(l))&&(a=ks(e,a,l,h,s,r,o))})),i.foreach(((i,h)=>{const l=Lt(n,i);bs(t,Pt(l))||(a=ks(e,a,l,h,s,r,o))})),a}function Ns(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Ps(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let h,l=t;h=Ot(n)?i:new Ai(null).setTree(n,i);const c=t.serverCache.getNode();return h.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const h=t.serverCache.getNode().getImmediateChild(n),c=Ns(e,h,i);l=Es(e,l,new St(n),c,s,r,o,a)}})),h.children.inorderTraversal(((n,i)=>{const h=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!h){const h=t.serverCache.getNode().getImmediateChild(n),c=Ns(e,h,i);l=Es(e,l,new St(n),c,s,r,o,a)}})),l}function xs(e,t,n,i,s,r,o){if(null!=cs(s,n))return t;const a=t.serverCache.isFiltered(),h=t.serverCache;if(null!=i.value){if(Ot(n)&&h.isFullyInitialized()||h.isCompleteForPath(n))return Es(e,t,n,h.getNode().getChild(n),s,r,a,o);if(Ot(n)){let i=new Ai(null);return h.getNode().forEachChild(an,((e,t)=>{i=i.set(new St(e),t)})),Ps(e,t,n,i,s,r,a,o)}return t}{let l=new Ai(null);return i.foreach(((e,t)=>{const i=Lt(n,e);h.isCompleteForPath(i)&&(l=l.set(e,h.getNode().getChild(i)))})),Ps(e,t,n,l,s,r,a,o)}}function Rs(e,t,n,i,s){const r=t.serverCache,o=Pi(t,r.getNode(),r.isFullyInitialized()||Ot(n),r.isFiltered());return Is(e,o,n,i,gs,s)}function Ds(e,t,n,i,s,r){let o;if(null!=cs(i,n))return t;{const a=new ys(i,t,s),h=t.eventCache.getNode();let l;if(Ot(n)||".priority"===Pt(n)){let n;if(t.serverCache.isFullyInitialized())n=as(i,Ri(t));else{const e=t.serverCache.getNode();(0,E.hu)(e instanceof Mn,"serverChildren would be complete if leaf node"),n=hs(i,e)}l=e.filter.updateFullNode(h,n,r)}else{const s=Pt(n);let c=ds(i,s,t.serverCache);null==c&&t.serverCache.isCompleteForChild(s)&&(c=h.getImmediateChild(s)),l=null!=c?e.filter.updateChild(h,s,c,Rt(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,Mn.EMPTY_NODE,Rt(n),a,r):h,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=as(i,Ri(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=cs(i,Nt()),Ni(t,l,o,e.filter.filtersNodes())}}
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
 */class Ms{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new $n(n.getIndex()),s=Xn(n);this.processor_=vs(s);const r=t.serverCache,o=t.eventCache,a=i.updateFullNode(Mn.EMPTY_NODE,r.getNode(),null),h=s.updateFullNode(Mn.EMPTY_NODE,o.getNode(),null),l=new wi(a,r.isFullyInitialized(),i.filtersNodes()),c=new wi(h,o.isFullyInitialized(),s.filtersNodes());this.viewCache_=Si(c,l),this.eventGenerator_=new Ti(this.query_)}get query(){return this.query_}}function As(e){return xi(e.viewCache_)}function Fs(e,t){const n=Ri(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ot(t)&&!n.getImmediateChild(Pt(t)).isEmpty())?n.getChild(t):null}function Ls(e,t,n,i){t.type===pi.MERGE&&null!==t.source.queryId&&((0,E.hu)(Ri(e.viewCache_),"We should always have a full cache before handling merges"),(0,E.hu)(xi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=ws(e.processor_,s,t,n,i);return Cs(e.processor_,r.viewCache),(0,E.hu)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,Os(e,r.changes,r.viewCache.eventCache.getNode(),null)}function Os(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return Ii(e.eventGenerator_,t,n,s)}
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
 */let qs,Ws;class Us{constructor(){this.views=new Map}}function Bs(e){(0,E.hu)(!qs,"__referenceConstructor has already been defined"),qs=e}function zs(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,E.hu)(null!=r,"SyncTree gave us an op for an invalid query."),Ls(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Ls(r,t,n,i));return s}}function js(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=as(n,s?i:null),r=!1;e?r=!0:i instanceof Mn?(e=hs(n,i),r=!1):(e=Mn.EMPTY_NODE,r=!1);const o=Si(new wi(e,r,!1),new wi(i,s,!1));return new Ms(t,o)}return o}function Hs(e,t){let n=null;for(const i of e.views.values())n=n||Fs(i,t);return n}function Ys(e){(0,E.hu)(!Ws,"__referenceConstructor has already been defined"),Ws=e}class Vs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ai(null),this.pendingWriteTree_=os(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function $s(e,t,n,i,s){return $i(e.pendingWriteTree_,t,n,i,s),s?tr(e,new vi(fi(),t,n)):[]}function Ks(e,t,n=!1){const i=Ki(e.pendingWriteTree_,t),s=Gi(e.pendingWriteTree_,t);if(s){let t=new Ai(null);return null!=i.snap?t=t.set(Nt(),!0):ie(i.children,(e=>{t=t.set(new St(e),!0)})),tr(e,new yi(i.path,t,n))}return[]}function Gs(e,t,n){return tr(e,new vi(mi(),t,n))}function Qs(e,t,n){const i=Ai.fromObject(n);return tr(e,new Ci(mi(),t,i))}function Xs(e,t,n,i){const s=sr(e,i);if(null!=s){const i=rr(s),r=i.path,o=i.queryId,a=qt(r,t),h=new vi(gi(o),a,n);return or(e,r,h)}return[]}function Zs(e,t,n,i){const s=sr(e,i);if(s){const i=rr(s),r=i.path,o=i.queryId,a=qt(r,t),h=Ai.fromObject(n),l=new Ci(gi(o),a,h);return or(e,r,l)}return[]}function Js(e,t,n){const i=!0,s=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=qt(e,t),s=Hs(n,i);if(s)return s}));return es(s,t,r,n,i)}function er(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=qt(e,n);i=i||Hs(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Hs(s,Nt()):(s=new Us,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new wi(i,!0,!1):null,a=Vi(e.pendingWriteTree_,t._path),h=js(s,t,a,r?o.getNode():Mn.EMPTY_NODE,r);return As(h)}function tr(e,t){return nr(t,e.syncPointTree_,null,Vi(e.pendingWriteTree_,Nt()))}function nr(e,t,n,i){if(Ot(e.path))return ir(e,t,n,i);{const s=t.get(Nt());null==n&&null!=s&&(n=Hs(s,Nt()));let r=[];const o=Pt(e.path),a=e.operationForChild(o),h=t.children.get(o);if(h&&a){const e=n?n.getImmediateChild(o):null,t=_s(i,o);r=r.concat(nr(a,h,e,t))}return s&&(r=r.concat(zs(s,e,i,n))),r}}function ir(e,t,n,i){const s=t.get(Nt());null==n&&null!=s&&(n=Hs(s,Nt()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=_s(i,t),h=e.operationForChild(t);h&&(r=r.concat(ir(h,s,o,a)))})),s&&(r=r.concat(zs(s,e,i,n))),r}function sr(e,t){return e.tagToQueryMap.get(t)}function rr(e){const t=e.indexOf("$");return(0,E.hu)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new St(e.substr(0,t))}}function or(e,t,n){const i=e.syncPointTree_.get(t);(0,E.hu)(i,"Missing sync point for query tag that we're tracking");const s=Vi(e.pendingWriteTree_,t);return zs(i,n,s,null)}
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
class ar{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ar(t)}node(){return this.node_}}class hr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Lt(this.path_,e);return new hr(this.syncTree_,t)}node(){return Js(this.syncTree_,this.path_)}}const lr=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},cr=function(e,t,n){return e&&"object"===typeof e?((0,E.hu)(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?ur(e[".sv"],t,n):"object"===typeof e[".sv"]?dr(e[".sv"],t):void(0,E.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ur=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:(0,E.hu)(!1,"Unexpected server value: "+e)}},dr=function(e,t,n){e.hasOwnProperty("increment")||(0,E.hu)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&(0,E.hu)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,E.hu)(null!==s&&"undefined"!==typeof s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s,o=r.getValue();return"number"!==typeof o?i:o+i},_r=function(e,t,n,i){return fr(t,new hr(n,e),i)},pr=function(e,t,n){return fr(e,new ar(t),n)};function fr(e,t,n){const i=e.getPriority().val(),s=cr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=cr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new wn(r,On(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new wn(s))),i.forEachChild(kn,((e,i)=>{const s=fr(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
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
 */class mr{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function gr(e,t){let n=t instanceof St?t:new St(t),i=e,s=Pt(n);while(null!==s){const e=(0,E.DV)(i.node.children,s)||{children:{},childCount:0};i=new mr(s,i,e),n=Rt(n),s=Pt(n)}return i}function yr(e){return e.node.value}function vr(e,t){e.node.value=t,br(e)}function Cr(e){return e.node.childCount>0}function wr(e){return void 0===yr(e)&&!Cr(e)}function Tr(e,t){ie(e.node.children,((n,i)=>{t(new mr(n,e,i))}))}function Ir(e,t,n,i){n&&!i&&t(e),Tr(e,(e=>{Ir(e,t,!0,i)})),n&&i&&t(e)}function Er(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function kr(e){return new St(null===e.parent?e.name:kr(e.parent)+"/"+e.name)}function br(e){null!==e.parent&&Sr(e.parent,e.name,e)}function Sr(e,t,n){const i=wr(n),s=(0,E.r3)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,br(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,br(e))}
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
 */const Nr=/[\[\].#$\/\u0000-\u001F\u007F]/,Pr=/[\[\].#$\u0000-\u001F\u007F]/,xr=10485760,Rr=function(e){return"string"===typeof e&&0!==e.length&&!Nr.test(e)},Dr=function(e){return"string"===typeof e&&0!==e.length&&!Pr.test(e)},Mr=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Dr(e)},Ar=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!K(e)||e&&"object"===typeof e&&(0,E.r3)(e,".sv")},Fr=function(e,t,n,i){i&&void 0===t||Lr((0,E.gK)(e,"value"),t,n)},Lr=function(e,t,n){const i=n instanceof St?new Bt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Yt(i));if("function"===typeof t)throw new Error(e+"contains a function "+Yt(i)+" with contents = "+t.toString());if(K(t))throw new Error(e+"contains "+t.toString()+" "+Yt(i));if("string"===typeof t&&t.length>xr/3&&(0,E.ug)(t)>xr)throw new Error(e+"contains a string greater than "+xr+" utf8 bytes "+Yt(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,s=!1;if(ie(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Rr(t)))throw new Error(e+" contains an invalid key ("+t+") "+Yt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');zt(i,t),Lr(e,r,i),jt(i)})),n&&s)throw new Error(e+' contains ".value" child '+Yt(i)+" in addition to actual children.")}},Or=function(e,t,n,i){if((!i||void 0!==n)&&!Rr(n))throw new Error((0,E.gK)(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},qr=function(e,t,n,i){if((!i||void 0!==n)&&!Dr(n))throw new Error((0,E.gK)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Wr=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qr(e,t,n,i)},Ur=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Rr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!Mr(n))throw new Error((0,E.gK)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Br{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zr(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Wt(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function jr(e,t,n){zr(e,n),Yr(e,(e=>Wt(e,t)))}function Hr(e,t,n){zr(e,n),Yr(e,(e=>Ut(e,t)||Ut(t,e)))}function Yr(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){const r=s.path;t(r)?(Vr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Vr(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();W&&z("event: "+n.toString()),ue(i)}}}
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
 */const $r="repo_interrupt",Kr=25;class Gr{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Br,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ri(),this.transactionQueueTree_=new mr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qr(e,t,n){if(e.stats_=Ae(e.repoInfo_),e.forceRestClient_||de())e.server_=new ii(e.repoInfo_,((t,n,i,s)=>{Jr(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>eo(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,E.Pz)(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new tn(e.repoInfo_,t,((t,n,i,s)=>{Jr(e,t,n,i,s)}),(t=>{eo(e,t)}),(t=>{to(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=Fe(e.repoInfo_,(()=>new _i(e.stats_,e.server_))),e.infoData_=new si,e.infoSyncTree_=new Vs({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Gs(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),no(e,"connected",!1),e.serverSyncTree_=new Vs({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Hr(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xr(e){const t=e.infoData_.getNode(new St(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function Zr(e){return lr({timestamp:Xr(e)})}function Jr(e,t,n,i,s){e.dataUpdateCount++;const r=new St(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=(0,E.UI)(n,(e=>On(e)));o=Zs(e.serverSyncTree_,r,t,s)}else{const t=On(n);o=Xs(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,E.UI)(n,(e=>On(e)));o=Qs(e.serverSyncTree_,r,t)}else{const t=On(n);o=Gs(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=uo(e,r)),Hr(e.eventQueue_,a,o)}function eo(e,t){no(e,"connected",t),!1===t&&ro(e)}function to(e,t){ie(t,((t,n)=>{no(e,t,n)}))}function no(e,t,n){const i=new St("/.info/"+t),s=On(n);e.infoData_.updateSnapshot(i,s);const r=Gs(e.infoSyncTree_,i,s);Hr(e.eventQueue_,i,r)}function io(e){return e.nextWriteId_++}function so(e,t){const n=er(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=On(n).withIndex(t._queryParams.getIndex()),s=Gs(e.serverSyncTree_,t._path,i);return jr(e.eventQueue_,t._path,s),Promise.resolve(i)}),(n=>(ao(e,"get for query "+(0,E.Pz)(t)+" failed: "+n),Promise.reject(new Error(n)))))}function ro(e){ao(e,"onDisconnectEvents");const t=Zr(e),n=ri();ai(e.onDisconnect_,Nt(),((i,s)=>{const r=_r(i,s,e.serverSyncTree_,t);oi(n,i,r)}));let i=[];ai(n,Nt(),((t,n)=>{i=i.concat(Gs(e.serverSyncTree_,t,n));const s=yo(e,t);uo(e,s)})),e.onDisconnect_=ri(),Hr(e.eventQueue_,Nt(),i)}function oo(e){e.persistentConnection_&&e.persistentConnection_.interrupt($r)}function ao(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),z(n,...t)}function ho(e,t,n){return Js(e.serverSyncTree_,t,n)||Mn.EMPTY_NODE}function lo(e,t=e.transactionQueueTree_){if(t||go(e,t),yr(t)){const n=fo(e,t);(0,E.hu)(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&co(e,kr(t),n)}else Cr(t)&&Tr(t,(t=>{lo(e,t)}))}function co(e,t,n){const i=n.map((e=>e.currentWriteId)),s=ho(e,t,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const e=n[l];(0,E.hu)(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=qt(t,e.path);r=r.updateChild(i,e.currentOutputSnapshotRaw)}const a=r.val(!0),h=t;e.server_.put(h.toString(),a,(i=>{ao(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();go(e,gr(e.transactionQueueTree_,t)),lo(e,e.transactionQueueTree_),Hr(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)ue(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{V("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}uo(e,t)}}),o)}function uo(e,t){const n=po(e,t),i=kr(n),s=fo(e,n);return _o(e,s,i),i}function _o(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),o=r.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const r=t[a],h=qt(n,r.path);let l,c=!1;if((0,E.hu)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===r.status)c=!0,l=r.abortReason,s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else if(0===r.status)if(r.retryCount>=Kr)c=!0,l="maxretry",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0));else{const n=ho(e,r.path,o);r.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Lr("transaction failed: Data returned ",i,r.path);let t=On(i);const a="object"===typeof i&&null!=i&&(0,E.r3)(i,".priority");a||(t=t.updatePriority(n.getPriority()));const h=r.currentWriteId,l=Zr(e),c=pr(t,n,l);r.currentOutputSnapshotRaw=t,r.currentOutputSnapshotResolved=c,r.currentWriteId=io(e),o.splice(o.indexOf(h),1),s=s.concat($s(e.serverSyncTree_,r.path,c,r.currentWriteId,r.applyLocally)),s=s.concat(Ks(e.serverSyncTree_,h,!0))}else c=!0,l="nodata",s=s.concat(Ks(e.serverSyncTree_,r.currentWriteId,!0))}Hr(e.eventQueue_,n,s),s=[],c&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===l?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(l),!1,null)))))}go(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)ue(i[a]);lo(e,e.transactionQueueTree_)}function po(e,t){let n,i=e.transactionQueueTree_;n=Pt(t);while(null!==n&&void 0===yr(i))i=gr(i,n),t=Rt(t),n=Pt(t);return i}function fo(e,t){const n=[];return mo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function mo(e,t,n){const i=yr(t);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Tr(t,(t=>{mo(e,t,n)}))}function go(e,t){const n=yr(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,vr(t,n.length>0?n:void 0)}Tr(t,(t=>{go(e,t)}))}function yo(e,t){const n=kr(po(e,t)),i=gr(e.transactionQueueTree_,t);return Er(i,(t=>{vo(e,t)})),vo(e,i),Ir(i,(t=>{vo(e,t)})),n}function vo(e,t){const n=yr(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,E.hu)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,E.hu)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Ks(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?vr(t,void 0):n.length=r+1,Hr(e.eventQueue_,kr(t),s);for(let e=0;e<i.length;e++)ue(i[e])}}
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
 */function Co(e){let t="";const n=e.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let e=n[s];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function wo(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):V(`Invalid query segment '${n}' in query '${e}'`)}return t}const To=function(e,t){const n=Io(e),i=n.namespace;"firebase.com"===n.domain&&Y(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Y("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$();const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ne(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new St(n.pathString)}},Io=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",h=443;if("string"===typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=Co(e.substring(c,u)));const d=wo(e.substring(Math.min(e.length,u)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,h=parseInt(t.substring(l+1),10)):l=t.length;const _=t.slice(0,l);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d["ns"])}return{host:t,port:h,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
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
class Eo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Ot(this._path)?null:Dt(this._path)}get ref(){return new No(this._repo,this._path)}get _queryIdentifier(){const e=ni(this._queryParams),t=te(e);return"{}"===t?"default":t}get _queryObject(){return ni(this._queryParams)}isEqual(e){if(e=(0,E.m9)(e),!(e instanceof Eo))return!1;const t=this._repo===e._repo,n=Wt(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Mt(this._path)}}function ko(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function bo(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===an){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==Q)throw new Error(i);if("string"!==typeof t)throw new Error(s)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==X)throw new Error(i);if("string"!==typeof n)throw new Error(s)}}else if(e.getIndex()===kn){if(null!=t&&!Ar(t)||null!=n&&!Ar(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if((0,E.hu)(e.getIndex()instanceof qn||e.getIndex()===Un,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function So(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class No extends Eo{constructor(e,t){super(e,t,new Qn,!1)}get parent(){const e=Ft(this._path);return null===e?null:new No(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Po{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new St(e),n=Ro(this.ref,e);return new Po(this._node.getChild(t),n,kn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Po(n,Ro(this.ref,t),kn))))}hasChild(e){const t=new St(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xo(e,t){return e=(0,E.m9)(e),e._checkNotDeleted("ref"),void 0!==t?Ro(e._root,t):e._root}function Ro(e,t){return e=(0,E.m9)(e),null===Pt(e._path)?Wr("child","path",t,!1):qr("child","path",t,!1),new No(e._repo,Lt(e._path,t))}function Do(e){return e=(0,E.m9)(e),so(e._repo,e).then((t=>new Po(t,new No(e._repo,e._path),e._queryParams.getIndex())))}class Mo{}class Ao extends Mo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Fr("endAt",this._value,e._path,!0);const t=Jn(e._queryParams,this._value,this._key);if(So(t),bo(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Eo(e._repo,e._path,t,e._orderByCalled)}}class Fo extends Mo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Fr("startAt",this._value,e._path,!0);const t=Zn(e._queryParams,this._value,this._key);if(So(t),bo(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Eo(e._repo,e._path,t,e._orderByCalled)}}class Lo extends Mo{constructor(e){super(),this._path=e}_apply(e){ko(e,"orderByChild");const t=new St(this._path);if(Ot(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new qn(t),i=ei(e._queryParams,n);return bo(i),new Eo(e._repo,e._path,i,!0)}}function Oo(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return qr("orderByChild","path",e,!1),new Lo(e)}class qo extends Mo{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Fr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ao(this._value,this._key)._apply(new Fo(this._value,this._key)._apply(e))}}function Wo(e,t){return Or("equalTo","key",t,!0),new qo(e,t)}function Uo(e,...t){let n=(0,E.m9)(e);for(const i of t)n=i._apply(n);return n}Bs(No),Ys(No);
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
const Bo="FIREBASE_DATABASE_EMULATOR_HOST",zo={};let jo=!1;function Ho(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Y("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=To(r,s),l=h.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/baemin_proj/"}[Bo]),a?(o=!0,r=`http://${a}?ns=${l.namespace}`,h=To(r,s),l=h.repoInfo):o=!h.repoInfo.secure;const c=s&&o?new me(me.OWNER):new fe(e.name,e.options,t);Ur("Invalid Firebase Database URL",h),Ot(h.path)||Y("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Vo(l,e,c,new pe(e.name,n));return new $o(u,e)}function Yo(e,t){const n=zo[t];n&&n[e.key]===e||Y(`Database ${t}(${e.repoInfo_}) has already been deleted.`),oo(e),delete n[e.key]}function Vo(e,t,n,i){let s=zo[t.name];s||(s={},zo[t.name]=s);let r=s[e.toURLString()];return r&&Y("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gr(e,jo,n,i),s[e.toURLString()]=r,r}class $o{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qr(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new No(this._repo,Nt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Yo(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Y("Cannot call "+e+" on a deleted database.")}}function Ko(e=(0,T.Mq)(),t){return(0,T.qX)(e,"database").getImmediate({identifier:t})}
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
function Go(e){P(T.Jn),(0,T.Xd)(new I.wA("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Ho(n,i,s,t)}),"PUBLIC").setMultipleInstances(!0)),(0,T.KN)(b,S,e),(0,T.KN)(b,S,"esm2017")}
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
 */tn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},tn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Go();class Qo{constructor(){(0,p.Z)(this,"app",void 0),(0,p.Z)(this,"realtimeDB",void 0),this.app=(0,w.Mq)(),this.realtimeDB=Ko(this.app)}getFoodShopFilterByAddress(e){return Do(Uo(xo(this.realtimeDB,"DATA"),Oo("cgg_code_nm"),Wo(e))).then((e=>e.exists()?e.val():(console.warn("No data available"),[]))).catch((e=>{console.error(`[getFoodShopFilterByAddress] error: ${e.message}`)}))}}var Xo=n(3419),Zo=n(4060),Jo=(0,i.aZ)({name:"AddressSelectBtn",components:{AddressModal:C},props:{address:String,color:String},data(){return{addrStr:this.address,region_2depth_name:"",dispatch:(0,Xo.H)()}},mounted(){this.loadLastLocation(),this.loadFilteredStoreList(this.region_2depth_name)},methods:{onArrowBtnClicked(){this.$refs.addressModalComponent.showModal()},saveLastLocation(e,t){localStorage.setItem("addressFull",e),localStorage.setItem("region_2depth_name",t)},loadLastLocation(){this.addrStr=localStorage.getItem("addressFull")||"서울 송파구 방이동",this.region_2depth_name=localStorage.getItem("region_2depth_name")||"송파구",console.log("add",this.addrStr,this.region_2depth_name)},loadFilteredStoreList(e){const t=new Qo;t.getFoodShopFilterByAddress(e).then((e=>{console.log("test",e),this.dispatch((0,Zo.qc)({storeListData:e}))}))},onAddressLoaded(e){console.log("addressInfo",e),this.loadFilteredStoreList(e.region_2depth_name),this.addrStr=`${e.region_1depth_name} ${e.region_2depth_name} ${e.region_3depth_name}`,this.saveLastLocation(this.addrStr,e.region_2depth_name)}}});const ea=(0,y.Z)(Jo,[["render",r],["__scopeId","data-v-22662ffc"]]);var ta=ea}}]);
//# sourceMappingURL=391.338f7d75.js.map