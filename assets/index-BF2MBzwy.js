import{r as $,a as tn,R as q,u as le,L as R,N as rn,b as nn,c as on,d as I,B as sn}from"./vendor-BpNvuQKd.js";import{a as c,m as P,u as an,K as cn}from"./ui-C8Tmu3vU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var gr={exports:{}},Ue={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ln=$,dn=Symbol.for("react.element"),un=Symbol.for("react.fragment"),hn=Object.prototype.hasOwnProperty,pn=ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mn={key:!0,ref:!0,__self:!0,__source:!0};function br(e,r,n){var o,s={},i=null,a=null;n!==void 0&&(i=""+n),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(a=r.ref);for(o in r)hn.call(r,o)&&!mn.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)s[o]===void 0&&(s[o]=r[o]);return{$$typeof:dn,type:e,key:i,ref:a,props:s,_owner:pn.current}}Ue.Fragment=un;Ue.jsx=br;Ue.jsxs=br;gr.exports=Ue;var t=gr.exports,pt={},At=tn;pt.createRoot=At.createRoot,pt.hydrateRoot=At.hydrateRoot;function yr(e,r){return function(){return e.apply(r,arguments)}}const{toString:xn}=Object.prototype,{getPrototypeOf:yt}=Object,{iterator:He,toStringTag:wr}=Symbol,qe=(e=>r=>{const n=xn.call(r);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),r=>qe(r)===e),Ve=e=>r=>typeof r===e,{isArray:de}=Array,ce=Ve("undefined");function ye(e){return e!==null&&!ce(e)&&e.constructor!==null&&!ce(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const jr=N("ArrayBuffer");function fn(e){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&jr(e.buffer),r}const gn=Ve("string"),F=Ve("function"),vr=Ve("number"),we=e=>e!==null&&typeof e=="object",bn=e=>e===!0||e===!1,Ne=e=>{if(qe(e)!=="object")return!1;const r=yt(e);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(wr in e)&&!(He in e)},yn=e=>{if(!we(e)||ye(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},wn=N("Date"),jn=N("File"),vn=N("Blob"),Sn=N("FileList"),kn=e=>we(e)&&F(e.pipe),Cn=e=>{let r;return e&&(typeof FormData=="function"&&e instanceof FormData||F(e.append)&&((r=qe(e))==="formdata"||r==="object"&&F(e.toString)&&e.toString()==="[object FormData]"))},$n=N("URLSearchParams"),[En,zn,Rn,Pn]=["ReadableStream","Request","Response","Headers"].map(N),An=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function je(e,r,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let o,s;if(typeof e!="object"&&(e=[e]),de(e))for(o=0,s=e.length;o<s;o++)r.call(null,e[o],o,e);else{if(ye(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(o=0;o<a;o++)l=i[o],r.call(null,e[l],l,e)}}function Sr(e,r){if(ye(e))return null;r=r.toLowerCase();const n=Object.keys(e);let o=n.length,s;for(;o-- >0;)if(s=n[o],r===s.toLowerCase())return s;return null}const Z=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kr=e=>!ce(e)&&e!==Z;function mt(){const{caseless:e,skipUndefined:r}=kr(this)&&this||{},n={},o=(s,i)=>{const a=e&&Sr(n,i)||i;Ne(n[a])&&Ne(s)?n[a]=mt(n[a],s):Ne(s)?n[a]=mt({},s):de(s)?n[a]=s.slice():(!r||!ce(s))&&(n[a]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&je(arguments[s],o);return n}const Ln=(e,r,n,{allOwnKeys:o}={})=>(je(r,(s,i)=>{n&&F(s)?e[i]=yr(s,n):e[i]=s},{allOwnKeys:o}),e),On=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Fn=(e,r,n,o)=>{e.prototype=Object.create(r.prototype,o),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:r.prototype}),n&&Object.assign(e.prototype,n)},Tn=(e,r,n,o)=>{let s,i,a;const l={};if(r=r||{},e==null)return r;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!o||o(a,e,r))&&!l[a]&&(r[a]=e[a],l[a]=!0);e=n!==!1&&yt(e)}while(e&&(!n||n(e,r))&&e!==Object.prototype);return r},Nn=(e,r,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=r.length;const o=e.indexOf(r,n);return o!==-1&&o===n},Bn=e=>{if(!e)return null;if(de(e))return e;let r=e.length;if(!vr(r))return null;const n=new Array(r);for(;r-- >0;)n[r]=e[r];return n},Mn=(e=>r=>e&&r instanceof e)(typeof Uint8Array<"u"&&yt(Uint8Array)),In=(e,r)=>{const o=(e&&e[He]).call(e);let s;for(;(s=o.next())&&!s.done;){const i=s.value;r.call(e,i[0],i[1])}},Dn=(e,r)=>{let n;const o=[];for(;(n=e.exec(r))!==null;)o.push(n);return o},_n=N("HTMLFormElement"),Un=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,o,s){return o.toUpperCase()+s}),Lt=(({hasOwnProperty:e})=>(r,n)=>e.call(r,n))(Object.prototype),Hn=N("RegExp"),Cr=(e,r)=>{const n=Object.getOwnPropertyDescriptors(e),o={};je(n,(s,i)=>{let a;(a=r(s,i,e))!==!1&&(o[i]=a||s)}),Object.defineProperties(e,o)},qn=e=>{Cr(e,(r,n)=>{if(F(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const o=e[n];if(F(o)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Vn=(e,r)=>{const n={},o=s=>{s.forEach(i=>{n[i]=!0})};return de(e)?o(e):o(String(e).split(r)),n},Wn=()=>{},Jn=(e,r)=>e!=null&&Number.isFinite(e=+e)?e:r;function Gn(e){return!!(e&&F(e.append)&&e[wr]==="FormData"&&e[He])}const Yn=e=>{const r=new Array(10),n=(o,s)=>{if(we(o)){if(r.indexOf(o)>=0)return;if(ye(o))return o;if(!("toJSON"in o)){r[s]=o;const i=de(o)?[]:{};return je(o,(a,l)=>{const f=n(a,s+1);!ce(f)&&(i[l]=f)}),r[s]=void 0,i}}return o};return n(e,0)},Kn=N("AsyncFunction"),Xn=e=>e&&(we(e)||F(e))&&F(e.then)&&F(e.catch),$r=((e,r)=>e?setImmediate:r?((n,o)=>(Z.addEventListener("message",({source:s,data:i})=>{s===Z&&i===n&&o.length&&o.shift()()},!1),s=>{o.push(s),Z.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",F(Z.postMessage)),Zn=typeof queueMicrotask<"u"?queueMicrotask.bind(Z):typeof process<"u"&&process.nextTick||$r,Qn=e=>e!=null&&F(e[He]),d={isArray:de,isArrayBuffer:jr,isBuffer:ye,isFormData:Cn,isArrayBufferView:fn,isString:gn,isNumber:vr,isBoolean:bn,isObject:we,isPlainObject:Ne,isEmptyObject:yn,isReadableStream:En,isRequest:zn,isResponse:Rn,isHeaders:Pn,isUndefined:ce,isDate:wn,isFile:jn,isBlob:vn,isRegExp:Hn,isFunction:F,isStream:kn,isURLSearchParams:$n,isTypedArray:Mn,isFileList:Sn,forEach:je,merge:mt,extend:Ln,trim:An,stripBOM:On,inherits:Fn,toFlatObject:Tn,kindOf:qe,kindOfTest:N,endsWith:Nn,toArray:Bn,forEachEntry:In,matchAll:Dn,isHTMLForm:_n,hasOwnProperty:Lt,hasOwnProp:Lt,reduceDescriptors:Cr,freezeMethods:qn,toObjectSet:Vn,toCamelCase:Un,noop:Wn,toFiniteNumber:Jn,findKey:Sr,global:Z,isContextDefined:kr,isSpecCompliantForm:Gn,toJSONObject:Yn,isAsyncFn:Kn,isThenable:Xn,setImmediate:$r,asap:Zn,isIterable:Qn};function C(e,r,n,o,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",r&&(this.code=r),n&&(this.config=n),o&&(this.request=o),s&&(this.response=s,this.status=s.status?s.status:null)}d.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.status}}});const Er=C.prototype,zr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{zr[e]={value:e}});Object.defineProperties(C,zr);Object.defineProperty(Er,"isAxiosError",{value:!0});C.from=(e,r,n,o,s,i)=>{const a=Object.create(Er);d.toFlatObject(e,a,function(u){return u!==Error.prototype},h=>h!=="isAxiosError");const l=e&&e.message?e.message:"Error",f=r==null&&e?e.code:r;return C.call(a,l,f,n,o,s),e&&a.cause==null&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",i&&Object.assign(a,i),a};const eo=null;function xt(e){return d.isPlainObject(e)||d.isArray(e)}function Rr(e){return d.endsWith(e,"[]")?e.slice(0,-2):e}function Ot(e,r,n){return e?e.concat(r).map(function(s,i){return s=Rr(s),!n&&i?"["+s+"]":s}).join(n?".":""):r}function to(e){return d.isArray(e)&&!e.some(xt)}const ro=d.toFlatObject(d,{},null,function(r){return/^is[A-Z]/.test(r)});function We(e,r,n){if(!d.isObject(e))throw new TypeError("target must be an object");r=r||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,m){return!d.isUndefined(m[p])});const o=n.metaTokens,s=n.visitor||u,i=n.dots,a=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(r);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function h(x){if(x===null)return"";if(d.isDate(x))return x.toISOString();if(d.isBoolean(x))return x.toString();if(!f&&d.isBlob(x))throw new C("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(x)||d.isTypedArray(x)?f&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function u(x,p,m){let w=x;if(x&&!m&&typeof x=="object"){if(d.endsWith(p,"{}"))p=o?p:p.slice(0,-2),x=JSON.stringify(x);else if(d.isArray(x)&&to(x)||(d.isFileList(x)||d.endsWith(p,"[]"))&&(w=d.toArray(x)))return p=Rr(p),w.forEach(function(S,k){!(d.isUndefined(S)||S===null)&&r.append(a===!0?Ot([p],k,i):a===null?p:p+"[]",h(S))}),!1}return xt(x)?!0:(r.append(Ot(m,p,i),h(x)),!1)}const g=[],b=Object.assign(ro,{defaultVisitor:u,convertValue:h,isVisitable:xt});function y(x,p){if(!d.isUndefined(x)){if(g.indexOf(x)!==-1)throw Error("Circular reference detected in "+p.join("."));g.push(x),d.forEach(x,function(w,j){(!(d.isUndefined(w)||w===null)&&s.call(r,w,d.isString(j)?j.trim():j,p,b))===!0&&y(w,p?p.concat(j):[j])}),g.pop()}}if(!d.isObject(e))throw new TypeError("data must be an object");return y(e),r}function Ft(e){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(o){return r[o]})}function wt(e,r){this._pairs=[],e&&We(e,this,r)}const Pr=wt.prototype;Pr.append=function(r,n){this._pairs.push([r,n])};Pr.toString=function(r){const n=r?function(o){return r.call(this,o,Ft)}:Ft;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function no(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ar(e,r,n){if(!r)return e;const o=n&&n.encode||no;d.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(r,n):i=d.isURLSearchParams(r)?r.toString():new wt(r,n).toString(o),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Tt{constructor(){this.handlers=[]}use(r,n,o){return this.handlers.push({fulfilled:r,rejected:n,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){d.forEach(this.handlers,function(o){o!==null&&r(o)})}}const Lr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oo=typeof URLSearchParams<"u"?URLSearchParams:wt,so=typeof FormData<"u"?FormData:null,io=typeof Blob<"u"?Blob:null,ao={isBrowser:!0,classes:{URLSearchParams:oo,FormData:so,Blob:io},protocols:["http","https","file","blob","url","data"]},jt=typeof window<"u"&&typeof document<"u",ft=typeof navigator=="object"&&navigator||void 0,co=jt&&(!ft||["ReactNative","NativeScript","NS"].indexOf(ft.product)<0),lo=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uo=jt&&window.location.href||"http://localhost",ho=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:jt,hasStandardBrowserEnv:co,hasStandardBrowserWebWorkerEnv:lo,navigator:ft,origin:uo},Symbol.toStringTag,{value:"Module"})),L={...ho,...ao};function po(e,r){return We(e,new L.classes.URLSearchParams,{visitor:function(n,o,s,i){return L.isNode&&d.isBuffer(n)?(this.append(o,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...r})}function mo(e){return d.matchAll(/\w+|\[(\w*)]/g,e).map(r=>r[0]==="[]"?"":r[1]||r[0])}function xo(e){const r={},n=Object.keys(e);let o;const s=n.length;let i;for(o=0;o<s;o++)i=n[o],r[i]=e[i];return r}function Or(e){function r(n,o,s,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),f=i>=n.length;return a=!a&&d.isArray(s)?s.length:a,f?(d.hasOwnProp(s,a)?s[a]=[s[a],o]:s[a]=o,!l):((!s[a]||!d.isObject(s[a]))&&(s[a]=[]),r(n,o,s[a],i)&&d.isArray(s[a])&&(s[a]=xo(s[a])),!l)}if(d.isFormData(e)&&d.isFunction(e.entries)){const n={};return d.forEachEntry(e,(o,s)=>{r(mo(o),s,n,0)}),n}return null}function fo(e,r,n){if(d.isString(e))try{return(r||JSON.parse)(e),d.trim(e)}catch(o){if(o.name!=="SyntaxError")throw o}return(n||JSON.stringify)(e)}const ve={transitional:Lr,adapter:["xhr","http","fetch"],transformRequest:[function(r,n){const o=n.getContentType()||"",s=o.indexOf("application/json")>-1,i=d.isObject(r);if(i&&d.isHTMLForm(r)&&(r=new FormData(r)),d.isFormData(r))return s?JSON.stringify(Or(r)):r;if(d.isArrayBuffer(r)||d.isBuffer(r)||d.isStream(r)||d.isFile(r)||d.isBlob(r)||d.isReadableStream(r))return r;if(d.isArrayBufferView(r))return r.buffer;if(d.isURLSearchParams(r))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let l;if(i){if(o.indexOf("application/x-www-form-urlencoded")>-1)return po(r,this.formSerializer).toString();if((l=d.isFileList(r))||o.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return We(l?{"files[]":r}:r,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),fo(r)):r}],transformResponse:[function(r){const n=this.transitional||ve.transitional,o=n&&n.forcedJSONParsing,s=this.responseType==="json";if(d.isResponse(r)||d.isReadableStream(r))return r;if(r&&d.isString(r)&&(o&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(r,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?C.from(l,C.ERR_BAD_RESPONSE,this,null,this.response):l}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:L.classes.FormData,Blob:L.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],e=>{ve.headers[e]={}});const go=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bo=e=>{const r={};let n,o,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),o=a.substring(s+1).trim(),!(!n||r[n]&&go[n])&&(n==="set-cookie"?r[n]?r[n].push(o):r[n]=[o]:r[n]=r[n]?r[n]+", "+o:o)}),r},Nt=Symbol("internals");function pe(e){return e&&String(e).trim().toLowerCase()}function Be(e){return e===!1||e==null?e:d.isArray(e)?e.map(Be):String(e)}function yo(e){const r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=n.exec(e);)r[o[1]]=o[2];return r}const wo=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Xe(e,r,n,o,s){if(d.isFunction(o))return o.call(this,r,n);if(s&&(r=n),!!d.isString(r)){if(d.isString(o))return r.indexOf(o)!==-1;if(d.isRegExp(o))return o.test(r)}}function jo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,n,o)=>n.toUpperCase()+o)}function vo(e,r){const n=d.toCamelCase(" "+r);["get","set","has"].forEach(o=>{Object.defineProperty(e,o+n,{value:function(s,i,a){return this[o].call(this,r,s,i,a)},configurable:!0})})}let T=class{constructor(r){r&&this.set(r)}set(r,n,o){const s=this;function i(l,f,h){const u=pe(f);if(!u)throw new Error("header name must be a non-empty string");const g=d.findKey(s,u);(!g||s[g]===void 0||h===!0||h===void 0&&s[g]!==!1)&&(s[g||f]=Be(l))}const a=(l,f)=>d.forEach(l,(h,u)=>i(h,u,f));if(d.isPlainObject(r)||r instanceof this.constructor)a(r,n);else if(d.isString(r)&&(r=r.trim())&&!wo(r))a(bo(r),n);else if(d.isObject(r)&&d.isIterable(r)){let l={},f,h;for(const u of r){if(!d.isArray(u))throw TypeError("Object iterator must return a key-value pair");l[h=u[0]]=(f=l[h])?d.isArray(f)?[...f,u[1]]:[f,u[1]]:u[1]}a(l,n)}else r!=null&&i(n,r,o);return this}get(r,n){if(r=pe(r),r){const o=d.findKey(this,r);if(o){const s=this[o];if(!n)return s;if(n===!0)return yo(s);if(d.isFunction(n))return n.call(this,s,o);if(d.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,n){if(r=pe(r),r){const o=d.findKey(this,r);return!!(o&&this[o]!==void 0&&(!n||Xe(this,this[o],o,n)))}return!1}delete(r,n){const o=this;let s=!1;function i(a){if(a=pe(a),a){const l=d.findKey(o,a);l&&(!n||Xe(o,o[l],l,n))&&(delete o[l],s=!0)}}return d.isArray(r)?r.forEach(i):i(r),s}clear(r){const n=Object.keys(this);let o=n.length,s=!1;for(;o--;){const i=n[o];(!r||Xe(this,this[i],i,r,!0))&&(delete this[i],s=!0)}return s}normalize(r){const n=this,o={};return d.forEach(this,(s,i)=>{const a=d.findKey(o,i);if(a){n[a]=Be(s),delete n[i];return}const l=r?jo(i):String(i).trim();l!==i&&delete n[i],n[l]=Be(s),o[l]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const n=Object.create(null);return d.forEach(this,(o,s)=>{o!=null&&o!==!1&&(n[s]=r&&d.isArray(o)?o.join(", "):o)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,n])=>r+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...n){const o=new this(r);return n.forEach(s=>o.set(s)),o}static accessor(r){const o=(this[Nt]=this[Nt]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=pe(a);o[l]||(vo(s,a),o[l]=!0)}return d.isArray(r)?r.forEach(i):i(r),this}};T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(T.prototype,({value:e},r)=>{let n=r[0].toUpperCase()+r.slice(1);return{get:()=>e,set(o){this[n]=o}}});d.freezeMethods(T);function Ze(e,r){const n=this||ve,o=r||n,s=T.from(o.headers);let i=o.data;return d.forEach(e,function(l){i=l.call(n,i,s.normalize(),r?r.status:void 0)}),s.normalize(),i}function Fr(e){return!!(e&&e.__CANCEL__)}function ue(e,r,n){C.call(this,e??"canceled",C.ERR_CANCELED,r,n),this.name="CanceledError"}d.inherits(ue,C,{__CANCEL__:!0});function Tr(e,r,n){const o=n.config.validateStatus;!n.status||!o||o(n.status)?e(n):r(new C("Request failed with status code "+n.status,[C.ERR_BAD_REQUEST,C.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function So(e){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""}function ko(e,r){e=e||10;const n=new Array(e),o=new Array(e);let s=0,i=0,a;return r=r!==void 0?r:1e3,function(f){const h=Date.now(),u=o[i];a||(a=h),n[s]=f,o[s]=h;let g=i,b=0;for(;g!==s;)b+=n[g++],g=g%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),h-a<r)return;const y=u&&h-u;return y?Math.round(b*1e3/y):void 0}}function Co(e,r){let n=0,o=1e3/r,s,i;const a=(h,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),e(...h)};return[(...h)=>{const u=Date.now(),g=u-n;g>=o?a(h,u):(s=h,i||(i=setTimeout(()=>{i=null,a(s)},o-g)))},()=>s&&a(s)]}const De=(e,r,n=3)=>{let o=0;const s=ko(50,250);return Co(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,f=a-o,h=s(f),u=a<=l;o=a;const g={loaded:a,total:l,progress:l?a/l:void 0,bytes:f,rate:h||void 0,estimated:h&&l&&u?(l-a)/h:void 0,event:i,lengthComputable:l!=null,[r?"download":"upload"]:!0};e(g)},n)},Bt=(e,r)=>{const n=e!=null;return[o=>r[0]({lengthComputable:n,total:e,loaded:o}),r[1]]},Mt=e=>(...r)=>d.asap(()=>e(...r)),$o=L.hasStandardBrowserEnv?((e,r)=>n=>(n=new URL(n,L.origin),e.protocol===n.protocol&&e.host===n.host&&(r||e.port===n.port)))(new URL(L.origin),L.navigator&&/(msie|trident)/i.test(L.navigator.userAgent)):()=>!0,Eo=L.hasStandardBrowserEnv?{write(e,r,n,o,s,i,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(r)}`];d.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),d.isString(o)&&l.push(`path=${o}`),d.isString(s)&&l.push(`domain=${s}`),i===!0&&l.push("secure"),d.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const r=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return r?decodeURIComponent(r[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zo(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ro(e,r){return r?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e}function Nr(e,r,n){let o=!zo(r);return e&&(o||n==!1)?Ro(e,r):r}const It=e=>e instanceof T?{...e}:e;function ee(e,r){r=r||{};const n={};function o(h,u,g,b){return d.isPlainObject(h)&&d.isPlainObject(u)?d.merge.call({caseless:b},h,u):d.isPlainObject(u)?d.merge({},u):d.isArray(u)?u.slice():u}function s(h,u,g,b){if(d.isUndefined(u)){if(!d.isUndefined(h))return o(void 0,h,g,b)}else return o(h,u,g,b)}function i(h,u){if(!d.isUndefined(u))return o(void 0,u)}function a(h,u){if(d.isUndefined(u)){if(!d.isUndefined(h))return o(void 0,h)}else return o(void 0,u)}function l(h,u,g){if(g in r)return o(h,u);if(g in e)return o(void 0,h)}const f={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(h,u,g)=>s(It(h),It(u),g,!0)};return d.forEach(Object.keys({...e,...r}),function(u){const g=f[u]||s,b=g(e[u],r[u],u);d.isUndefined(b)&&g!==l||(n[u]=b)}),n}const Br=e=>{const r=ee({},e);let{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:l}=r;if(r.headers=a=T.from(a),r.url=Ar(Nr(r.baseURL,r.url,r.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),d.isFormData(n)){if(L.hasStandardBrowserEnv||L.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(d.isFunction(n.getHeaders)){const f=n.getHeaders(),h=["content-type","content-length"];Object.entries(f).forEach(([u,g])=>{h.includes(u.toLowerCase())&&a.set(u,g)})}}if(L.hasStandardBrowserEnv&&(o&&d.isFunction(o)&&(o=o(r)),o||o!==!1&&$o(r.url))){const f=s&&i&&Eo.read(i);f&&a.set(s,f)}return r},Po=typeof XMLHttpRequest<"u",Ao=Po&&function(e){return new Promise(function(n,o){const s=Br(e);let i=s.data;const a=T.from(s.headers).normalize();let{responseType:l,onUploadProgress:f,onDownloadProgress:h}=s,u,g,b,y,x;function p(){y&&y(),x&&x(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function w(){if(!m)return;const S=T.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),E={data:!l||l==="text"||l==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:S,config:e,request:m};Tr(function(O){n(O),p()},function(O){o(O),p()},E),m=null}"onloadend"in m?m.onloadend=w:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(w)},m.onabort=function(){m&&(o(new C("Request aborted",C.ECONNABORTED,e,m)),m=null)},m.onerror=function(k){const E=k&&k.message?k.message:"Network Error",A=new C(E,C.ERR_NETWORK,e,m);A.event=k||null,o(A),m=null},m.ontimeout=function(){let k=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const E=s.transitional||Lr;s.timeoutErrorMessage&&(k=s.timeoutErrorMessage),o(new C(k,E.clarifyTimeoutError?C.ETIMEDOUT:C.ECONNABORTED,e,m)),m=null},i===void 0&&a.setContentType(null),"setRequestHeader"in m&&d.forEach(a.toJSON(),function(k,E){m.setRequestHeader(E,k)}),d.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),l&&l!=="json"&&(m.responseType=s.responseType),h&&([b,x]=De(h,!0),m.addEventListener("progress",b)),f&&m.upload&&([g,y]=De(f),m.upload.addEventListener("progress",g),m.upload.addEventListener("loadend",y)),(s.cancelToken||s.signal)&&(u=S=>{m&&(o(!S||S.type?new ue(null,e,m):S),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const j=So(s.url);if(j&&L.protocols.indexOf(j)===-1){o(new C("Unsupported protocol "+j+":",C.ERR_BAD_REQUEST,e));return}m.send(i||null)})},Lo=(e,r)=>{const{length:n}=e=e?e.filter(Boolean):[];if(r||n){let o=new AbortController,s;const i=function(h){if(!s){s=!0,l();const u=h instanceof Error?h:this.reason;o.abort(u instanceof C?u:new ue(u instanceof Error?u.message:u))}};let a=r&&setTimeout(()=>{a=null,i(new C(`timeout ${r} of ms exceeded`,C.ETIMEDOUT))},r);const l=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(i):h.removeEventListener("abort",i)}),e=null)};e.forEach(h=>h.addEventListener("abort",i));const{signal:f}=o;return f.unsubscribe=()=>d.asap(l),f}},Oo=function*(e,r){let n=e.byteLength;if(n<r){yield e;return}let o=0,s;for(;o<n;)s=o+r,yield e.slice(o,s),o=s},Fo=async function*(e,r){for await(const n of To(e))yield*Oo(n,r)},To=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const r=e.getReader();try{for(;;){const{done:n,value:o}=await r.read();if(n)break;yield o}}finally{await r.cancel()}},Dt=(e,r,n,o)=>{const s=Fo(e,r);let i=0,a,l=f=>{a||(a=!0,o&&o(f))};return new ReadableStream({async pull(f){try{const{done:h,value:u}=await s.next();if(h){l(),f.close();return}let g=u.byteLength;if(n){let b=i+=g;n(b)}f.enqueue(new Uint8Array(u))}catch(h){throw l(h),h}},cancel(f){return l(f),s.return()}},{highWaterMark:2})},_t=64*1024,{isFunction:Ee}=d,No=(({Request:e,Response:r})=>({Request:e,Response:r}))(d.global),{ReadableStream:Ut,TextEncoder:Ht}=d.global,qt=(e,...r)=>{try{return!!e(...r)}catch{return!1}},Bo=e=>{e=d.merge.call({skipUndefined:!0},No,e);const{fetch:r,Request:n,Response:o}=e,s=r?Ee(r):typeof fetch=="function",i=Ee(n),a=Ee(o);if(!s)return!1;const l=s&&Ee(Ut),f=s&&(typeof Ht=="function"?(x=>p=>x.encode(p))(new Ht):async x=>new Uint8Array(await new n(x).arrayBuffer())),h=i&&l&&qt(()=>{let x=!1;const p=new n(L.origin,{body:new Ut,method:"POST",get duplex(){return x=!0,"half"}}).headers.has("Content-Type");return x&&!p}),u=a&&l&&qt(()=>d.isReadableStream(new o("").body)),g={stream:u&&(x=>x.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!g[x]&&(g[x]=(p,m)=>{let w=p&&p[x];if(w)return w.call(p);throw new C(`Response type '${x}' is not supported`,C.ERR_NOT_SUPPORT,m)})});const b=async x=>{if(x==null)return 0;if(d.isBlob(x))return x.size;if(d.isSpecCompliantForm(x))return(await new n(L.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(d.isArrayBufferView(x)||d.isArrayBuffer(x))return x.byteLength;if(d.isURLSearchParams(x)&&(x=x+""),d.isString(x))return(await f(x)).byteLength},y=async(x,p)=>{const m=d.toFiniteNumber(x.getContentLength());return m??b(p)};return async x=>{let{url:p,method:m,data:w,signal:j,cancelToken:S,timeout:k,onDownloadProgress:E,onUploadProgress:A,responseType:O,headers:Ye,withCredentials:ke="same-origin",fetchOptions:Ct}=Br(x),$t=r||fetch;O=O?(O+"").toLowerCase():"text";let Ce=Lo([j,S&&S.toAbortSignal()],k),he=null;const J=Ce&&Ce.unsubscribe&&(()=>{Ce.unsubscribe()});let Et;try{if(A&&h&&m!=="get"&&m!=="head"&&(Et=await y(Ye,w))!==0){let _=new n(p,{method:"POST",body:w,duplex:"half"}),te;if(d.isFormData(w)&&(te=_.headers.get("content-type"))&&Ye.setContentType(te),_.body){const[Ke,$e]=Bt(Et,De(Mt(A)));w=Dt(_.body,_t,Ke,$e)}}d.isString(ke)||(ke=ke?"include":"omit");const B=i&&"credentials"in n.prototype,zt={...Ct,signal:Ce,method:m.toUpperCase(),headers:Ye.normalize().toJSON(),body:w,duplex:"half",credentials:B?ke:void 0};he=i&&new n(p,zt);let D=await(i?$t(he,Ct):$t(p,zt));const Rt=u&&(O==="stream"||O==="response");if(u&&(E||Rt&&J)){const _={};["status","statusText","headers"].forEach(Pt=>{_[Pt]=D[Pt]});const te=d.toFiniteNumber(D.headers.get("content-length")),[Ke,$e]=E&&Bt(te,De(Mt(E),!0))||[];D=new o(Dt(D.body,_t,Ke,()=>{$e&&$e(),J&&J()}),_)}O=O||"text";let en=await g[d.findKey(g,O)||"text"](D,x);return!Rt&&J&&J(),await new Promise((_,te)=>{Tr(_,te,{data:en,headers:T.from(D.headers),status:D.status,statusText:D.statusText,config:x,request:he})})}catch(B){throw J&&J(),B&&B.name==="TypeError"&&/Load failed|fetch/i.test(B.message)?Object.assign(new C("Network Error",C.ERR_NETWORK,x,he),{cause:B.cause||B}):C.from(B,B&&B.code,x,he)}}},Mo=new Map,Mr=e=>{let r=e&&e.env||{};const{fetch:n,Request:o,Response:s}=r,i=[o,s,n];let a=i.length,l=a,f,h,u=Mo;for(;l--;)f=i[l],h=u.get(f),h===void 0&&u.set(f,h=l?new Map:Bo(r)),u=h;return h};Mr();const vt={http:eo,xhr:Ao,fetch:{get:Mr}};d.forEach(vt,(e,r)=>{if(e){try{Object.defineProperty(e,"name",{value:r})}catch{}Object.defineProperty(e,"adapterName",{value:r})}});const Vt=e=>`- ${e}`,Io=e=>d.isFunction(e)||e===null||e===!1;function Do(e,r){e=d.isArray(e)?e:[e];const{length:n}=e;let o,s;const i={};for(let a=0;a<n;a++){o=e[a];let l;if(s=o,!Io(o)&&(s=vt[(l=String(o)).toLowerCase()],s===void 0))throw new C(`Unknown adapter '${l}'`);if(s&&(d.isFunction(s)||(s=s.get(r))))break;i[l||"#"+a]=s}if(!s){const a=Object.entries(i).map(([f,h])=>`adapter ${f} `+(h===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(Vt).join(`
`):" "+Vt(a[0]):"as no adapter specified";throw new C("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s}const Ir={getAdapter:Do,adapters:vt};function Qe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ue(null,e)}function Wt(e){return Qe(e),e.headers=T.from(e.headers),e.data=Ze.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ir.getAdapter(e.adapter||ve.adapter,e)(e).then(function(o){return Qe(e),o.data=Ze.call(e,e.transformResponse,o),o.headers=T.from(o.headers),o},function(o){return Fr(o)||(Qe(e),o&&o.response&&(o.response.data=Ze.call(e,e.transformResponse,o.response),o.response.headers=T.from(o.response.headers))),Promise.reject(o)})}const Dr="1.13.2",Je={};["object","boolean","number","function","string","symbol"].forEach((e,r)=>{Je[e]=function(o){return typeof o===e||"a"+(r<1?"n ":" ")+e}});const Jt={};Je.transitional=function(r,n,o){function s(i,a){return"[Axios v"+Dr+"] Transitional option '"+i+"'"+a+(o?". "+o:"")}return(i,a,l)=>{if(r===!1)throw new C(s(a," has been removed"+(n?" in "+n:"")),C.ERR_DEPRECATED);return n&&!Jt[a]&&(Jt[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),r?r(i,a,l):!0}};Je.spelling=function(r){return(n,o)=>(console.warn(`${o} is likely a misspelling of ${r}`),!0)};function _o(e,r,n){if(typeof e!="object")throw new C("options must be an object",C.ERR_BAD_OPTION_VALUE);const o=Object.keys(e);let s=o.length;for(;s-- >0;){const i=o[s],a=r[i];if(a){const l=e[i],f=l===void 0||a(l,i,e);if(f!==!0)throw new C("option "+i+" must be "+f,C.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new C("Unknown option "+i,C.ERR_BAD_OPTION)}}const Me={assertOptions:_o,validators:Je},M=Me.validators;let Q=class{constructor(r){this.defaults=r||{},this.interceptors={request:new Tt,response:new Tt}}async request(r,n){try{return await this._request(r,n)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{o.stack?i&&!String(o.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+i):o.stack=i}catch{}}throw o}}_request(r,n){typeof r=="string"?(n=n||{},n.url=r):n=r||{},n=ee(this.defaults,n);const{transitional:o,paramsSerializer:s,headers:i}=n;o!==void 0&&Me.assertOptions(o,{silentJSONParsing:M.transitional(M.boolean),forcedJSONParsing:M.transitional(M.boolean),clarifyTimeoutError:M.transitional(M.boolean)},!1),s!=null&&(d.isFunction(s)?n.paramsSerializer={serialize:s}:Me.assertOptions(s,{encode:M.function,serialize:M.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Me.assertOptions(n,{baseUrl:M.spelling("baseURL"),withXsrfToken:M.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&d.merge(i.common,i[n.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],x=>{delete i[x]}),n.headers=T.concat(a,i);const l=[];let f=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(f=f&&p.synchronous,l.unshift(p.fulfilled,p.rejected))});const h=[];this.interceptors.response.forEach(function(p){h.push(p.fulfilled,p.rejected)});let u,g=0,b;if(!f){const x=[Wt.bind(this),void 0];for(x.unshift(...l),x.push(...h),b=x.length,u=Promise.resolve(n);g<b;)u=u.then(x[g++],x[g++]);return u}b=l.length;let y=n;for(;g<b;){const x=l[g++],p=l[g++];try{y=x(y)}catch(m){p.call(this,m);break}}try{u=Wt.call(this,y)}catch(x){return Promise.reject(x)}for(g=0,b=h.length;g<b;)u=u.then(h[g++],h[g++]);return u}getUri(r){r=ee(this.defaults,r);const n=Nr(r.baseURL,r.url,r.allowAbsoluteUrls);return Ar(n,r.params,r.paramsSerializer)}};d.forEach(["delete","get","head","options"],function(r){Q.prototype[r]=function(n,o){return this.request(ee(o||{},{method:r,url:n,data:(o||{}).data}))}});d.forEach(["post","put","patch"],function(r){function n(o){return function(i,a,l){return this.request(ee(l||{},{method:r,headers:o?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Q.prototype[r]=n(),Q.prototype[r+"Form"]=n(!0)});let Uo=class _r{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const o=this;this.promise.then(s=>{if(!o._listeners)return;let i=o._listeners.length;for(;i-- >0;)o._listeners[i](s);o._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{o.subscribe(l),i=l}).then(s);return a.cancel=function(){o.unsubscribe(i)},a},r(function(i,a,l){o.reason||(o.reason=new ue(i,a,l),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const n=this._listeners.indexOf(r);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const r=new AbortController,n=o=>{r.abort(o)};return this.subscribe(n),r.signal.unsubscribe=()=>this.unsubscribe(n),r.signal}static source(){let r;return{token:new _r(function(s){r=s}),cancel:r}}};function Ho(e){return function(n){return e.apply(null,n)}}function qo(e){return d.isObject(e)&&e.isAxiosError===!0}const gt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(gt).forEach(([e,r])=>{gt[r]=e});function Ur(e){const r=new Q(e),n=yr(Q.prototype.request,r);return d.extend(n,Q.prototype,r,{allOwnKeys:!0}),d.extend(n,r,null,{allOwnKeys:!0}),n.create=function(s){return Ur(ee(e,s))},n}const v=Ur(ve);v.Axios=Q;v.CanceledError=ue;v.CancelToken=Uo;v.isCancel=Fr;v.VERSION=Dr;v.toFormData=We;v.AxiosError=C;v.Cancel=v.CanceledError;v.all=function(r){return Promise.all(r)};v.spread=Ho;v.isAxiosError=qo;v.mergeConfig=ee;v.AxiosHeaders=T;v.formToJSON=e=>Or(d.isHTMLForm(e)?new FormData(e):e);v.getAdapter=Ir.getAdapter;v.HttpStatusCode=gt;v.default=v;const{Axios:Ga,AxiosError:Ya,CanceledError:Ka,isCancel:Xa,CancelToken:Za,VERSION:Qa,all:ec,Cancel:tc,isAxiosError:rc,spread:nc,toFormData:oc,AxiosHeaders:sc,HttpStatusCode:ic,formToJSON:ac,getAdapter:cc,mergeConfig:lc}=v,Hr=$.createContext(),Vo="http://localhost:5000/api";v.defaults.baseURL=Vo;v.interceptors.request.use(e=>{const r=localStorage.getItem("token");return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));v.interceptors.response.use(e=>e,async e=>{var n;const r=e.config;if(((n=e.response)==null?void 0:n.status)===401&&!r._retry&&r.url!=="/auth/refresh-token"){r._retry=!0;try{const o=localStorage.getItem("refreshToken");if(o){const s=await v.post("/auth/refresh-token",{refreshToken:o});if(s.data&&s.data.data&&s.data.data.token){const{token:i}=s.data.data;return localStorage.setItem("token",i),r.headers.Authorization=`Bearer ${i}`,v(r)}}}catch(o){return localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),!window.location.pathname.includes("/login")&&!window.location.pathname.includes("/register")&&(window.location.href="/login"),Promise.reject(o)}}return Promise.reject(e)});const Wo=({children:e})=>{const[r,n]=$.useState(null),[o,s]=$.useState(!0),[i,a]=$.useState(null);$.useEffect(()=>{(async()=>{try{const m=localStorage.getItem("token"),w=localStorage.getItem("user");if(m&&w)try{const j=await v.get("/auth/me",{timeout:5e3});j.data&&j.data.data&&j.data.data.user&&(n(j.data.data.user),localStorage.setItem("user",JSON.stringify(j.data.data.user)))}catch(j){j.code!=="ECONNABORTED"&&j.code!=="ERR_NETWORK"&&console.log("Auth check failed:",j.message),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),n(null)}}catch(m){console.error("Auth initialization error:",m)}finally{s(!1)}})()},[]);const x={user:r,loading:o,error:i,register:async p=>{var m,w,j,S;try{a(null);const k=await v.post("/auth/register",p),{token:E,refreshToken:A,user:O}=k.data.data;return localStorage.setItem("token",E),localStorage.setItem("refreshToken",A),localStorage.setItem("user",JSON.stringify(O)),n(O),{success:!0,data:k.data}}catch(k){const E=((w=(m=k.response)==null?void 0:m.data)==null?void 0:w.message)||"Registration failed";return a(E),{success:!1,error:E,errors:(S=(j=k.response)==null?void 0:j.data)==null?void 0:S.errors}}},login:async(p,m)=>{var w,j;try{a(null);const S=await v.post("/auth/login",{email:p,password:m}),{token:k,refreshToken:E,user:A}=S.data.data;return localStorage.setItem("token",k),localStorage.setItem("refreshToken",E),localStorage.setItem("user",JSON.stringify(A)),n(A),{success:!0,data:S.data}}catch(S){const k=((j=(w=S.response)==null?void 0:w.data)==null?void 0:j.message)||"Login failed";return a(k),{success:!1,error:k}}},logout:async()=>{try{const p=localStorage.getItem("refreshToken");p&&await v.post("/auth/logout",{refreshToken:p})}catch(p){console.error("Logout error:",p)}finally{localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),n(null)}},updateProfile:async p=>{var m,w;try{a(null);const j=await v.put("/auth/update-profile",p),S=j.data.data.user;return n(S),localStorage.setItem("user",JSON.stringify(S)),{success:!0,data:j.data}}catch(j){const S=((w=(m=j.response)==null?void 0:m.data)==null?void 0:w.message)||"Profile update failed";return a(S),{success:!1,error:S}}},updatePassword:async(p,m)=>{var w,j;try{return a(null),{success:!0,data:(await v.put("/auth/update-password",{currentPassword:p,newPassword:m})).data}}catch(S){const k=((j=(w=S.response)==null?void 0:w.data)==null?void 0:j.message)||"Password update failed";return a(k),{success:!1,error:k}}},uploadAvatar:async p=>{var m,w;try{a(null);const j=new FormData;j.append("avatar",p);const S=await v.put("/auth/avatar",j,{headers:{"Content-Type":"multipart/form-data"}}),k={...r,avatar:S.data.data.avatar};return n(k),localStorage.setItem("user",JSON.stringify(k)),{success:!0,data:S.data}}catch(j){const S=((w=(m=j.response)==null?void 0:m.data)==null?void 0:w.message)||"Avatar upload failed";return a(S),{success:!1,error:S}}},getMe:async()=>{var p,m;try{const w=await v.get("/auth/me"),j=w.data.data.user;return n(j),localStorage.setItem("user",JSON.stringify(j)),{success:!0,data:w.data}}catch(w){const j=((m=(p=w.response)==null?void 0:p.data)==null?void 0:m.message)||"Failed to fetch user data";return a(j),{success:!1,error:j}}},isAuthenticated:!!r};return t.jsx(Hr.Provider,{value:x,children:e})},W=()=>{const e=$.useContext(Hr);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};class Jo extends q.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,n){console.error("Error caught by boundary:",r,n)}render(){var r;return this.state.hasError?t.jsx(Go,{children:t.jsxs(Yo,{children:[t.jsx("h1",{children:"Something went wrong"}),t.jsx("p",{children:((r=this.state.error)==null?void 0:r.message)||"An unexpected error occurred"}),t.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]})}):this.props.children}}const Go=c.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
`,Yo=c.div`
  text-align: center;
  max-width: 500px;

  h1 {
    color: #dc2626;
    margin-bottom: 15px;
  }

  p {
    color: #6b7280;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
      background: #5568d3;
    }
  }
`;var qr={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Gt=q.createContext&&q.createContext(qr),V=function(){return V=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},V.apply(this,arguments)},Ko=function(e,r){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)r.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]]);return n};function Vr(e){return e&&e.map(function(r,n){return q.createElement(r.tag,V({key:n},r.attr),Vr(r.child))})}function z(e){return function(r){return q.createElement(Xo,V({attr:V({},e.attr)},r),Vr(e.child))}}function Xo(e){var r=function(n){var o=e.attr,s=e.size,i=e.title,a=Ko(e,["attr","size","title"]),l=s||n.size||"1em",f;return n.className&&(f=n.className),e.className&&(f=(f?f+" ":"")+e.className),q.createElement("svg",V({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,a,{className:f,style:V(V({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&q.createElement("title",null,i),e.children)};return Gt!==void 0?q.createElement(Gt.Consumer,null,function(n){return r(n)}):r(qr)}function Zo(e){return z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"}}]})(e)}function Qo(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function _e(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"}}]})(e)}function es(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"}}]})(e)}function St(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function Wr(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(e)}function et(e){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}function Se(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function ts(e){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"}}]})(e)}function Jr(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function Gr(e){return z({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function U(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Yr(e){return z({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function rs(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"}}]})(e)}function Ge(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function Yt(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function Kr(e){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"}}]})(e)}function ns(e){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M635.7 167.2L556.1 31.7c-8.8-15-28.3-20.1-43.5-11.5l-69 39.1L503.3 161c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L416 75l-55.2 31.3 27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L333.2 122 278 153.3 337.8 255c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-59.7-101.7-55.2 31.3 27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-27.9-47.5-55.2 31.3 59.7 101.7c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L84.9 262.9l-69 39.1C.7 310.7-4.6 329.8 4.2 344.8l79.6 135.6c8.8 15 28.3 20.1 43.5 11.5L624.1 210c15.2-8.6 20.4-27.8 11.6-42.8z"}}]})(e)}function os(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(e)}function ss(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function is(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"}}]})(e)}function Kt(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function as(e){return z({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Xt(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function cs(e){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function H(e){return z({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function Xr(e){return z({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const ls=()=>{const e=W(),r=le(),[n,o]=$.useState(!1),s=(e==null?void 0:e.isAuthenticated)||!1,i=(e==null?void 0:e.user)||null,a=(e==null?void 0:e.logout)||(async()=>{});if(e!=null&&e.loading)return t.jsx(Zt,{children:t.jsx(Qt,{children:t.jsx(er,{to:"/",children:"Interior Design"})})});const l=async()=>{await a(),r("/"),o(!1)};return t.jsxs(Zt,{children:[t.jsxs(Qt,{children:[t.jsx(er,{to:"/",children:"Interior Design"}),t.jsxs(ds,{children:[t.jsx(me,{to:"/",children:"Home"}),t.jsx(me,{to:"/about",children:"About"}),t.jsx(me,{to:"/contact",children:"Contact"}),s?t.jsxs(t.Fragment,{children:[t.jsx(me,{to:"/profile",children:"Profile"}),["admin","super_admin"].includes(i==null?void 0:i.role)&&t.jsx(me,{to:"/admin",children:"Admin"}),t.jsxs(ms,{children:[t.jsxs(xs,{children:[t.jsx(H,{}),t.jsx("span",{children:i&&i.firstName?i.firstName:"User"})]}),t.jsxs(fs,{onClick:l,children:[t.jsx(Kt,{})," Logout"]})]})]}):t.jsxs(us,{children:[t.jsx(hs,{to:"/login",children:"Login"}),t.jsx(ps,{to:"/register",children:"Sign Up"})]})]}),t.jsx(gs,{onClick:()=>o(!n),children:n?t.jsx(as,{}):t.jsx(Qo,{})})]}),n&&t.jsxs(bs,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[t.jsxs(G,{to:"/",onClick:()=>o(!1),children:[t.jsx(Gr,{})," Home"]}),t.jsx(G,{to:"/about",onClick:()=>o(!1),children:"About"}),t.jsx(G,{to:"/contact",onClick:()=>o(!1),children:"Contact"}),s?t.jsxs(t.Fragment,{children:[t.jsxs(G,{to:"/profile",onClick:()=>o(!1),children:[t.jsx(H,{})," Profile"]}),["admin","super_admin"].includes(i==null?void 0:i.role)&&t.jsx(G,{to:"/admin",onClick:()=>o(!1),children:"Admin"}),t.jsxs(ys,{onClick:l,children:[t.jsx(Kt,{})," Logout"]})]}):t.jsxs(t.Fragment,{children:[t.jsx(G,{to:"/login",onClick:()=>o(!1),children:"Login"}),t.jsx(G,{to:"/register",onClick:()=>o(!1),children:"Sign Up"})]})]})]})},Zt=c.nav`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: ${e=>e.theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`,Qt=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`,er=c(R)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
`,ds=c.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`,me=c(R)`
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 8px 12px;
  border-radius: ${e=>e.theme.borderRadius.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 2px;
    background: ${e=>e.theme.gradients.primary};
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${e=>e.theme.colors.primary};
    background: rgba(102, 126, 234, 0.05);

    &::before {
      transform: translateX(-50%) scaleX(1);
    }
  }
`,us=c.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,hs=c(R)`
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  padding: 10px 24px;
  border: 2px solid ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${e=>e.theme.gradients.primary};
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    border-color: ${e=>e.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.md};

    &::before {
      width: 100%;
    }
  }
`,ps=c(R)`
  background: ${e=>e.theme.gradients.primary};
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: ${e=>e.theme.borderRadius.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${e=>e.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.shadows.colored};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`,ms=c.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,xs=c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
`,fs=c.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 2px solid #dc2626;
  color: #dc2626;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #dc2626;
    color: white;
  }
`,gs=c.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.dark};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,bs=c(P.div)`
  display: none;
  flex-direction: column;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`,G=c(R)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${e=>e.theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,ys=c.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  border: none;
  color: #dc2626;
  text-align: left;
  font-weight: 500;
  padding: 12px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #b91c1c;
  }
`,tt=({children:e})=>{const{isAuthenticated:r,loading:n}=W();return n?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:t.jsx("div",{children:"Loading..."})}):r?e:t.jsx(rn,{to:"/login",replace:!0})},bt=v.create({baseURL:"/api",headers:{"Content-Type":"application/json"}}),ws=()=>t.jsxs(js,{children:[t.jsxs(vs,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[t.jsx("h1",{children:"Transform Your Space with Elegant Design"}),t.jsx("p",{children:"Professional interior decoration and restoration services that blend modern aesthetics with timeless elegance"}),t.jsxs(ks,{children:[t.jsx(Cs,{as:R,to:"/contact",children:"Get Free Consultation"}),t.jsx($s,{as:R,to:"/projects",children:"View Our Work"})]})]}),t.jsx(Ss,{initial:{opacity:0},animate:{opacity:.3},transition:{duration:1,delay:.5}})]}),js=c.section`
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,vs=c(P.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 20px;
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 40px;
    opacity: 0.9;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`,Ss=c(P.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`,ks=c.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Zr=c(R)`
  padding: 15px 40px;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }
`,Cs=c(Zr)`
  background: white;
  color: #667eea;

  &:hover {
    background: #f8f9fa;
  }
`,$s=c(Zr)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #667eea;
  }
`,Es=({title:e,description:r,icon:n,link:o})=>t.jsxs("div",{style:{background:"#fff",borderRadius:8,padding:20,boxShadow:"0 8px 20px rgba(0,0,0,0.06)"},children:[t.jsx("div",{style:{fontSize:28,marginBottom:12},children:n}),t.jsx("h3",{style:{margin:"0 0 8px"},children:e}),t.jsx("p",{style:{margin:"0 0 12px",opacity:.8},children:r}),t.jsx(R,{to:o,children:"Learn more →"})]}),zs=({project:e})=>{var r;return e?t.jsxs(kt,{as:R,to:`/projects/${e._id}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},transition:{duration:.3},children:[e.images&&e.images.length>0&&t.jsxs(Rs,{children:[t.jsx(Ps,{src:e.images[0],alt:e.title}),e.featured&&t.jsx(As,{children:"Featured"})]}),t.jsxs(Ls,{children:[t.jsx(Os,{children:e.category}),t.jsx(Fs,{children:e.title}),t.jsxs(Ts,{children:[(r=e.description)==null?void 0:r.substring(0,100),"..."]}),e.location&&t.jsxs(Ns,{children:["📍 ",e.location]})]})]}):null},kt=c(P.div)`
  background: white;
  border-radius: ${e=>e.theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${e=>e.theme.shadows.lg};
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${e=>e.theme.gradients.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    box-shadow: ${e=>e.theme.shadows["2xl"]};
    transform: translateY(-8px);

    &::before {
      transform: scaleX(1);
    }
  }
`,Rs=c.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`,Ps=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${kt}:hover & {
    transform: scale(1.1);
  }
`,As=c.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  padding: 6px 16px;
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: ${e=>e.theme.shadows.md};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: ${e=>e.theme.shadows.md};
    }
    50% {
      box-shadow: ${e=>e.theme.shadows.colored};
    }
  }
`,Ls=c.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Os=c.span`
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: ${e=>e.theme.colors.primary};
  border-radius: ${e=>e.theme.borderRadius.full};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: capitalize;
  width: fit-content;
  margin-bottom: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  transition: all 0.3s ease;

  ${kt}:hover & {
    background: ${e=>e.theme.gradients.primary};
    color: white;
    border-color: transparent;
  }
`,Fs=c.h3`
  font-size: 1.3rem;
  color: ${e=>e.theme.colors.dark};
  margin: 0 0 10px 0;
  font-weight: 600;
`,Ts=c.p`
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 15px 0;
  flex: 1;
`,Ns=c.div`
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.9rem;
  margin-top: auto;
`,Bs=()=>{const e={background:"#fff",borderRadius:8,padding:20,boxShadow:"0 8px 20px rgba(0,0,0,0.06)"};return t.jsxs("div",{style:e,children:[t.jsx("strong",{children:"Testimonials"}),t.jsx("p",{style:{margin:0,opacity:.8},children:"Testimonials will appear here."})]})},Ms=({onSearch:e})=>{const[r,n]=$.useState(""),o=le(),s=i=>{i.preventDefault(),r.trim()&&(e?e(r):o(`/search?q=${encodeURIComponent(r)}`))};return t.jsxs(Is,{onSubmit:s,children:[t.jsx(Ds,{type:"text",placeholder:"Search projects, services...",value:r,onChange:i=>n(i.target.value)}),t.jsx(_s,{type:"submit",children:t.jsx(ss,{})})]})},Is=c.form`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 8px 8px 8px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
`,Ds=c.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 8px 0;

  &::placeholder {
    color: #9ca3af;
  }
`,_s=c.button`
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.colors.secondary};
    transform: scale(1.05);
  }
`;function Us(e){return z({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M18.08 23l.1 18H494V23H18.08zM254.3 54.93L133 61.6l30.1 68.5 98.1-3.6-6.9-71.57zm115.9.28l-92.9.53 3 71.96 96.8-.9-6.9-71.59zM18.23 56.43l.35 74.67 72.27-2.4 24.35-72.27H18.23zM393 64.24l-.5 47.16 15.7 21.5 85.8-6.3V64.93l-101-.69zM120.8 84.68l-17.6 49.82 41.1-1-8.2-34.02-15.3-14.8zm354.7 56.02l-4 75.5 22.5-.6v-74.9h-18.5zm-25.7 3.5l-97.3 10.7L346 219l110.7-3.2-6.9-71.6zm-243.8.7l-4 75.5 126.1-3.9 7-71.1-129.1-.5zm-145.33 2.7l-3.9 75.5 126.13-3.9-6.9-71.6H60.67zm-42 1.5l.33 72.4 24.77-.8-6.9-71.6h-18.2zm278.93 84.3L276 277.2l2.1 42 128.7-1.9-7.6-79.7-101.6-4.2zm-40.2 1.4l-127.2 6 8 69.5 124.7 6.6-5.5-82.1zm236.6 3.1l-66.5 2.9-7.5 75.8 74-5.2v-73.5zm-474.89 7l.31 65.8 100.78-3.1-6.9-62.7H19.11zm470.29 81.2l-115.9 10.5-3.3 65 121.5-3.5-2.3-72zm-422.36 4.1l-47.52 2 .34 72.9 51.1-1.3-3.92-73.6zm17.84 0l3.98 68.5 138.64 9.6-3-78.1H84.88zm161.22 4.3l-5.5 69 107.5 5.4-1-73.5-101-.9zm185.4 81.1l-4 75.5 66.5-.6v-73.8l-62.5-1.1zm-9.8 1.2l-39 3.6 27.4 28 11.6-31.6zm-399.46 1.8l-2.13 40.6.16 34.8H145.4v-68.9l-46.56-2.5-18.4 14L68.56 421l-46.32-2.4zm247.96.3l-111.3 1.5 3.5 72.5 114.7-2.4-6.9-71.6zm101.2 4.3l-72.2 5.9-8.9 62.1 125.6.6-6.2-27-38.3-41.6z"}}]})(e)}const Hs=()=>{const[e,r]=$.useState([]),[n,o]=$.useState([]),s=[{_id:"1",title:"Modern Living Room",description:"Contemporary living space with elegant furnishings",image:"https://images.unsplash.com/photo-1565183938294-7563f3ff68c5?w=500&h=400&fit=crop",featured:!0,category:"Living Room"},{_id:"2",title:"Luxury Master Bedroom",description:"Sophisticated bedroom design with premium materials",image:"https://images.unsplash.com/photo-1540932239986-310128078f3c?w=500&h=400&fit=crop",featured:!0,category:"Bedroom"},{_id:"3",title:"Kitchen Renovation",description:"Modern kitchen with state-of-the-art appliances",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",featured:!0,category:"Kitchen"}],i=[{_id:"1",title:"Interior Design",description:"Custom designs tailored to your style"},{_id:"2",title:"Space Planning",description:"Optimize your space for comfort and function"},{_id:"3",title:"Color Consultation",description:"Expert color schemes for any room"},{_id:"4",title:"Furniture Selection",description:"Curated furniture for your home"}];$.useEffect(()=>{a(),l()},[]);const a=async()=>{try{const u=await bt.get("/projects?featured=true");r(u.data.slice(0,3))}catch{console.warn("Using sample projects (API unavailable)"),r(s)}},l=async()=>{try{const u=await bt.get("/services");o(u.data.slice(0,4))}catch{console.warn("Using sample services (API unavailable)"),o(i)}},f=[{title:"Interior Design",description:"Custom interior solutions for residential and commercial spaces",icon:t.jsx(Gr,{}),link:"/services#design"},{title:"Restoration",description:"Preserving and restoring historical and vintage interiors",icon:t.jsx(Us,{}),link:"/services#restoration"},{title:"Decoration",description:"Complete decoration services with modern aesthetics",icon:t.jsx(rs,{}),link:"/services#decoration"},{title:"Renovation",description:"Transforming spaces with innovative renovation solutions",icon:t.jsx(ts,{}),link:"/services#renovation"}],h=u=>{console.log("Searching for:",u)};return t.jsxs(t.Fragment,{children:[t.jsx(ws,{}),t.jsx(qs,{children:t.jsx(xe,{children:t.jsx(Ms,{onSearch:h})})}),t.jsx(Ie,{children:t.jsxs(xe,{children:[t.jsxs(rt,{children:[t.jsx("h2",{children:"Our Services"}),t.jsx("p",{children:"Comprehensive interior solutions for every space"})]}),t.jsx(Vs,{children:f.map((u,g)=>t.jsx(Es,{title:u.title,description:u.description,icon:u.icon,link:u.link},g))})]})}),t.jsx(Ie,{dark:!0,children:t.jsxs(xe,{children:[t.jsxs(rt,{light:!0,children:[t.jsx("h2",{children:"Featured Projects"}),t.jsx("p",{children:"Explore our recent interior design and restoration work"})]}),t.jsx(Ws,{children:e.map(u=>t.jsx(zs,{project:u},u._id))}),t.jsx(Js,{children:t.jsx(nt,{as:R,to:"/projects",variant:"outline",children:"View All Projects"})})]})}),t.jsx(Gs,{children:t.jsx(xe,{children:t.jsxs(Ys,{children:[t.jsx("h2",{children:"Ready to Transform Your Space?"}),t.jsx("p",{children:"Get a free consultation with our interior design experts"}),t.jsxs(Ks,{children:[t.jsx(nt,{as:R,to:"/contact",primary:!0,children:"Book Consultation"}),t.jsx(nt,{as:R,to:"/projects",variant:"outline",children:"View Portfolio"})]})]})})}),t.jsx(Ie,{children:t.jsxs(xe,{children:[t.jsxs(rt,{children:[t.jsx("h2",{children:"Client Testimonials"}),t.jsx("p",{children:"What our clients say about our work"})]}),t.jsx(Bs,{})]})})]})},qs=c.section`
  padding: 40px 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`,Ie=c.section`
  padding: 80px 0;
  background: ${e=>e.dark?e.theme.colors.dark:e.theme.colors.light};
`,xe=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,rt=c.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    color: ${e=>e.light?"#fff":e.theme.colors.dark};
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.1rem;
    color: ${e=>e.light?"rgba(255,255,255,0.8)":e.theme.colors.textLight};
    max-width: 600px;
    margin: 0 auto;
  }
`,Vs=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,Ws=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`,Js=c.div`
  text-align: center;
`,nt=c(R)`
  display: inline-block;
  padding: 12px 30px;
  background: ${e=>e.primary?e.theme.colors.primary:e.variant==="outline"?"transparent":e.theme.colors.secondary};
  color: ${e=>e.variant==="outline"?e.theme.colors.dark:"#fff"};
  border: 2px solid ${e=>e.variant==="outline"?e.theme.colors.dark:"transparent"};
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`,Gs=c(Ie)`
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary} 0%, ${e=>e.theme.colors.secondary} 100%);
  color: white;
  text-align: center;
`,Ys=c.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`,Ks=c.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Xs=()=>{const[e,r]=$.useState({name:"",email:"",phone:"",service:"",message:""}),[n,o]=$.useState(!1),[s,i]=$.useState(null),a=f=>{r({...e,[f.target.name]:f.target.value})},l=async f=>{f.preventDefault(),o(!0);try{await bt.post("/contact",e),i("success"),r({name:"",email:"",phone:"",service:"",message:""})}catch(h){i("error"),console.error("Error submitting form:",h)}finally{o(!1),setTimeout(()=>i(null),5e3)}};return t.jsxs(Zs,{children:[t.jsxs(Qs,{children:[t.jsx("h1",{children:"Contact Us"}),t.jsx("p",{children:"Let's discuss your interior design and restoration needs"})]}),t.jsx(ei,{children:t.jsxs(ti,{children:[t.jsxs(ri,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},children:[t.jsx("h2",{children:"Send us a Message"}),s==="success"&&t.jsx(li,{children:"Thank you for your message! We'll get back to you soon."}),s==="error"&&t.jsx(di,{children:"There was an error sending your message. Please try again."}),t.jsxs(ni,{onSubmit:l,children:[t.jsxs(fe,{children:[t.jsx(ge,{htmlFor:"name",children:"Full Name *"}),t.jsx(ot,{type:"text",id:"name",name:"name",value:e.name,onChange:a,required:!0})]}),t.jsxs(fe,{children:[t.jsx(ge,{htmlFor:"email",children:"Email Address *"}),t.jsx(ot,{type:"email",id:"email",name:"email",value:e.email,onChange:a,required:!0})]}),t.jsxs(fe,{children:[t.jsx(ge,{htmlFor:"phone",children:"Phone Number"}),t.jsx(ot,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:a})]}),t.jsxs(fe,{children:[t.jsx(ge,{htmlFor:"service",children:"Service Interested In"}),t.jsxs(oi,{id:"service",name:"service",value:e.service,onChange:a,children:[t.jsx("option",{value:"",children:"Select a service"}),t.jsx("option",{value:"interior-design",children:"Interior Design"}),t.jsx("option",{value:"restoration",children:"Restoration"}),t.jsx("option",{value:"decoration",children:"Decoration"}),t.jsx("option",{value:"renovation",children:"Renovation"}),t.jsx("option",{value:"consultation",children:"Consultation"})]})]}),t.jsxs(fe,{children:[t.jsx(ge,{htmlFor:"message",children:"Message *"}),t.jsx(si,{id:"message",name:"message",rows:"5",value:e.message,onChange:a,required:!0})]}),t.jsx(ii,{type:"submit",disabled:n,children:n?"Sending...":"Send Message"})]})]}),t.jsxs(ai,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},children:[t.jsx("h2",{children:"Get in Touch"}),t.jsxs(ze,{children:[t.jsx(Re,{children:t.jsx(Ge,{})}),t.jsxs("div",{children:[t.jsx("h4",{children:"Phone"}),t.jsx("p",{children:"+1 (555) 123-4567"})]})]}),t.jsxs(ze,{children:[t.jsx(Re,{children:t.jsx(Se,{})}),t.jsxs("div",{children:[t.jsx("h4",{children:"Email"}),t.jsx("p",{children:"info@interiordesign.com"})]})]}),t.jsxs(ze,{children:[t.jsx(Re,{children:t.jsx(Yr,{})}),t.jsxs("div",{children:[t.jsx("h4",{children:"Address"}),t.jsx("p",{children:"123 Design Street, Creative City, CC 12345"})]})]}),t.jsxs(ze,{children:[t.jsx(Re,{children:t.jsx(St,{})}),t.jsxs("div",{children:[t.jsx("h4",{children:"Business Hours"}),t.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),t.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"})]})]}),t.jsx(ci,{children:t.jsx("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c3a4b7c5%3A0x9ef9b6c9e9b6c9e9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1615529328331!5m2!1sen!2s",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy"})})]})]})})]})},Zs=c.div`
  min-height: 100vh;
`,Qs=c.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`,ei=c.div`
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`,ti=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,ri=c(P.div)`
  padding: 50px;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`,ni=c.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,fe=c.div`
  display: flex;
  flex-direction: column;
`,ge=c.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
`,ot=c.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,oi=c.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,si=c.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,ii=c.button`
  padding: 15px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #5a67d8;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,ai=c(P.div)`
  padding: 50px;
  background: #f8f9fa;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`,ze=c.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;

  h4 {
    margin: 0 0 5px 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }
`,Re=c.div`
  color: #667eea;
  font-size: 20px;
  margin-top: 5px;
`,ci=c.div`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    display: block;
  }
`,li=c.div`
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`,di=c.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
`,ui=()=>{const[e,r]=$.useState({email:"",password:""}),[n,o]=$.useState(""),[s,i]=$.useState(!1),{login:a}=W(),l=le(),f=u=>{r({...e,[u.target.name]:u.target.value}),o("")},h=async u=>{u.preventDefault(),o(""),i(!0);try{const g=await a(e.email,e.password);g.success?l("/profile"):o(g.error||"Login failed. Please try again.")}catch{o("An unexpected error occurred. Please try again.")}finally{i(!1)}};return t.jsx(hi,{children:t.jsxs(pi,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs(mi,{children:[t.jsx(xi,{children:t.jsx(is,{})}),t.jsx("h1",{children:"Welcome Back"}),t.jsx("p",{children:"Sign in to your account to continue"})]}),n&&t.jsx(yi,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:n}),t.jsxs(fi,{onSubmit:h,children:[t.jsxs(tr,{children:[t.jsxs(rr,{htmlFor:"email",children:[t.jsx(Se,{})," Email Address"]}),t.jsx(nr,{type:"email",id:"email",name:"email",value:e.email,onChange:f,placeholder:"Enter your email",required:!0})]}),t.jsxs(tr,{children:[t.jsxs(rr,{htmlFor:"password",children:[t.jsx(U,{})," Password"]}),t.jsx(nr,{type:"password",id:"password",name:"password",value:e.password,onChange:f,placeholder:"Enter your password",required:!0})]}),t.jsx(gi,{to:"/forgot-password",children:"Forgot your password?"}),t.jsx(bi,{type:"submit",disabled:s,children:s?"Signing in...":"Sign In"})]}),t.jsxs(wi,{children:["Don't have an account? ",t.jsx(R,{to:"/register",children:"Sign up"})]})]})})},hi=c.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.gradients.primary};
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 15s linear infinite reverse;
    z-index: 0;
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,pi=c(P.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${e=>e.theme.borderRadius["2xl"]};
  box-shadow: ${e=>e.theme.shadows["2xl"]};
  padding: 48px;
  width: 100%;
  max-width: 450px;
  position: relative;
  z-index: 10;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 1;
    pointer-events: none;
  }
`,mi=c.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: ${e=>e.theme.colors.dark};
    margin: 15px 0 10px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    font-size: 0.95rem;
  }
`,xi=c.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: ${e=>e.theme.gradients.primary};
  border-radius: 50%;
  color: white;
  font-size: 1.8rem;
  box-shadow: ${e=>e.theme.shadows.colored};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    background: ${e=>e.theme.gradients.primary};
    opacity: 0.3;
    z-index: -1;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.1;
    }
  }
`,fi=c.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,tr=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,rr=c.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,nr=c.input`
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1), ${e=>e.theme.shadows.md};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textLighter};
  }

  &:hover:not(:focus) {
    border-color: #d1d5db;
  }
`,gi=c(R)`
  text-align: right;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.theme.colors.secondary};
    text-decoration: underline;
  }
`,bi=c.button`
  padding: 16px;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 10px;
  box-shadow: ${e=>e.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${e=>e.theme.shadows.colored};

    &::before {
      width: 400px;
      height: 400px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,yi=c(P.div)`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`,wi=c.p`
  text-align: center;
  margin-top: 25px;
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.9rem;

  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,ji=()=>{const[e,r]=$.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:""}),[n,o]=$.useState(""),[s,i]=$.useState({}),[a,l]=$.useState(!1),{register:f}=W(),h=le(),u=y=>{r({...e,[y.target.name]:y.target.value}),o(""),s[y.target.name]&&i({...s,[y.target.name]:""})},g=()=>{const y={};return e.password!==e.confirmPassword&&(y.confirmPassword="Passwords do not match"),e.password.length<6&&(y.password="Password must be at least 6 characters"),i(y),Object.keys(y).length===0},b=async y=>{if(y.preventDefault(),o(""),i({}),!!g()){l(!0);try{const{confirmPassword:x,...p}=e,m=await f(p);if(m.success)h("/profile");else{if(m.errors){const w={};m.errors.forEach(j=>{j.path&&(w[j.path]=j.msg)}),i(w)}o(m.error||"Registration failed. Please try again.")}}catch{o("An unexpected error occurred. Please try again.")}finally{l(!1)}}};return t.jsx(vi,{children:t.jsxs(Si,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs(ki,{children:[t.jsx(Ci,{children:t.jsx(cs,{})}),t.jsx("h1",{children:"Create Account"}),t.jsx("p",{children:"Sign up to get started with our services"})]}),n&&t.jsx(Ri,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:n}),t.jsxs($i,{onSubmit:b,children:[t.jsxs(Ei,{children:[t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"firstName",children:[t.jsx(H,{})," First Name"]}),t.jsx(oe,{type:"text",id:"firstName",name:"firstName",value:e.firstName,onChange:u,placeholder:"John",required:!0,hasError:!!s.firstName}),s.firstName&&t.jsx(se,{children:s.firstName})]}),t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"lastName",children:[t.jsx(H,{})," Last Name"]}),t.jsx(oe,{type:"text",id:"lastName",name:"lastName",value:e.lastName,onChange:u,placeholder:"Doe",required:!0,hasError:!!s.lastName}),s.lastName&&t.jsx(se,{children:s.lastName})]})]}),t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"email",children:[t.jsx(Se,{})," Email Address"]}),t.jsx(oe,{type:"email",id:"email",name:"email",value:e.email,onChange:u,placeholder:"john.doe@example.com",required:!0,hasError:!!s.email}),s.email&&t.jsx(se,{children:s.email})]}),t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"phone",children:[t.jsx(Ge,{})," Phone Number (Optional)"]}),t.jsx(oe,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:u,placeholder:"+1 234 567 8900",hasError:!!s.phone}),s.phone&&t.jsx(se,{children:s.phone})]}),t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"password",children:[t.jsx(U,{})," Password"]}),t.jsx(oe,{type:"password",id:"password",name:"password",value:e.password,onChange:u,placeholder:"At least 6 characters",required:!0,hasError:!!s.password}),s.password&&t.jsx(se,{children:s.password})]}),t.jsxs(re,{children:[t.jsxs(ne,{htmlFor:"confirmPassword",children:[t.jsx(U,{})," Confirm Password"]}),t.jsx(oe,{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:u,placeholder:"Re-enter your password",required:!0,hasError:!!s.confirmPassword}),s.confirmPassword&&t.jsx(se,{children:s.confirmPassword})]}),t.jsx(zi,{type:"submit",disabled:a,children:a?"Creating Account...":"Create Account"})]}),t.jsxs(Pi,{children:["Already have an account? ",t.jsx(R,{to:"/login",children:"Sign in"})]})]})})},vi=c.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.theme.gradients.primary};
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 15s linear infinite reverse;
    z-index: 0;
    pointer-events: none;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`,Si=c(P.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: ${e=>e.theme.borderRadius["2xl"]};
  box-shadow: ${e=>e.theme.shadows["2xl"]};
  padding: 48px;
  width: 100%;
  max-width: 550px;
  position: relative;
  z-index: 10;
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${e=>e.theme.gradients.primary};
    z-index: 1;
    pointer-events: none;
  }
`,ki=c.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: ${e=>e.theme.colors.dark};
    margin: 15px 0 10px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    font-size: 0.95rem;
  }
`,Ci=c.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`,$i=c.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ei=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,re=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ne=c.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,oe=c.input`
  padding: 14px 18px;
  border: 2px solid ${e=>e.hasError?"#dc2626":"#e5e7eb"};
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-size: 1rem;
  background: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${e=>e.hasError?"#dc2626":e.theme.colors.primary};
    box-shadow: 0 0 0 4px ${e=>e.hasError?"rgba(220, 38, 38, 0.1)":"rgba(102, 126, 234, 0.1)"}, ${e=>e.theme.shadows.md};
    transform: translateY(-1px);
  }

  &::placeholder {
    color: ${e=>e.theme.colors.textLighter};
  }

  &:hover:not(:focus) {
    border-color: ${e=>e.hasError?"#dc2626":"#d1d5db"};
  }
`,se=c.span`
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: -5px;
`,zi=c.button`
  padding: 16px;
  background: ${e=>e.theme.gradients.primary};
  color: white;
  border: none;
  border-radius: ${e=>e.theme.borderRadius.lg};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 10px;
  box-shadow: ${e=>e.theme.shadows.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: ${e=>e.theme.shadows.colored};

    &::before {
      width: 400px;
      height: 400px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Ri=c(P.div)`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`,Pi=c.p`
  text-align: center;
  margin-top: 25px;
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.9rem;

  a {
    color: ${e=>e.theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,Ai=()=>{const{user:e,loading:r,updateProfile:n,updatePassword:o,uploadAvatar:s}=W(),[i,a]=$.useState("profile"),[l,f]=$.useState({firstName:"",lastName:"",phone:""});$.useEffect(()=>{e&&f({firstName:e.firstName||"",lastName:e.lastName||"",phone:e.phone||""})},[e]);const[h,u]=$.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[g,b]=$.useState({type:"",text:""}),[y,x]=$.useState(!1),p=k=>{f({...l,[k.target.name]:k.target.value})},m=k=>{u({...h,[k.target.name]:k.target.value})},w=async k=>{k.preventDefault(),x(!0),b({type:"",text:""});try{const E=await n(l);E.success?b({type:"success",text:"Profile updated successfully!"}):b({type:"error",text:E.error})}catch{b({type:"error",text:"Failed to update profile"})}finally{x(!1)}},j=async k=>{if(k.preventDefault(),b({type:"",text:""}),h.newPassword!==h.confirmPassword){b({type:"error",text:"Passwords do not match"});return}if(h.newPassword.length<6){b({type:"error",text:"Password must be at least 6 characters"});return}x(!0);try{const E=await o(h.currentPassword,h.newPassword);E.success?(b({type:"success",text:"Password updated successfully!"}),u({currentPassword:"",newPassword:"",confirmPassword:""})):b({type:"error",text:E.error})}catch{b({type:"error",text:"Failed to update password"})}finally{x(!1)}},S=async k=>{const E=k.target.files[0];if(E){if(E.size>5*1024*1024){b({type:"error",text:"File size must be less than 5MB"});return}x(!0),b({type:"",text:""});try{const A=await s(E);A.success?b({type:"success",text:"Avatar updated successfully!"}):b({type:"error",text:A.error})}catch{b({type:"error",text:"Failed to upload avatar"})}finally{x(!1)}}};return r?t.jsx(st,{children:t.jsx(lr,{children:"Loading..."})}):e?t.jsxs(st,{children:[t.jsxs(Li,{children:[t.jsx("h1",{children:"My Profile"}),t.jsx("p",{children:"Manage your account settings and preferences"})]}),t.jsxs(Oi,{children:[t.jsxs(Fi,{children:[t.jsxs(or,{active:i==="profile",onClick:()=>a("profile"),children:[t.jsx(H,{})," Profile Information"]}),t.jsxs(or,{active:i==="password",onClick:()=>a("password"),children:[t.jsx(U,{})," Change Password"]})]}),t.jsxs(Ti,{children:[g.text&&t.jsx(_i,{type:g.type,children:g.text}),i==="profile"&&t.jsx(P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},children:t.jsxs(sr,{children:[t.jsx(ir,{children:t.jsx("h2",{children:"Profile Information"})}),t.jsxs(Ni,{children:[t.jsx(Bi,{children:e!=null&&e.avatar?t.jsx("img",{src:`http://localhost:5000${e.avatar}`,alt:"Avatar"}):t.jsx(H,{})}),t.jsxs(Mi,{children:[t.jsx("input",{type:"file",id:"avatar",accept:"image/*",onChange:S,style:{display:"none"}}),t.jsxs("label",{htmlFor:"avatar",children:[t.jsx(es,{})," Change Avatar"]})]})]}),t.jsxs(ar,{onSubmit:w,children:[t.jsxs(Ii,{children:[t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(H,{})," First Name"]}),t.jsx(X,{type:"text",name:"firstName",value:l.firstName,onChange:p,required:!0})]}),t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(H,{})," Last Name"]}),t.jsx(X,{type:"text",name:"lastName",value:l.lastName,onChange:p,required:!0})]})]}),t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(Se,{})," Email"]}),t.jsx(X,{type:"email",value:(e==null?void 0:e.email)||"",disabled:!0,style:{opacity:.6}}),t.jsx(Di,{children:"Email cannot be changed"})]}),t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(Ge,{})," Phone Number"]}),t.jsx(X,{type:"tel",name:"phone",value:l.phone,onChange:p,placeholder:"+1 234 567 8900"})]}),t.jsxs(cr,{type:"submit",disabled:y,children:[t.jsx(os,{})," ",y?"Saving...":"Save Changes"]})]})]})}),i==="password"&&t.jsx(P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},children:t.jsxs(sr,{children:[t.jsx(ir,{children:t.jsx("h2",{children:"Change Password"})}),t.jsxs(ar,{onSubmit:j,children:[t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(U,{})," Current Password"]}),t.jsx(X,{type:"password",name:"currentPassword",value:h.currentPassword,onChange:m,required:!0})]}),t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(U,{})," New Password"]}),t.jsx(X,{type:"password",name:"newPassword",value:h.newPassword,onChange:m,required:!0,minLength:6})]}),t.jsxs(Y,{children:[t.jsxs(K,{children:[t.jsx(U,{})," Confirm New Password"]}),t.jsx(X,{type:"password",name:"confirmPassword",value:h.confirmPassword,onChange:m,required:!0,minLength:6})]}),t.jsxs(cr,{type:"submit",disabled:y,children:[t.jsx(U,{})," ",y?"Updating...":"Update Password"]})]})]})})]})]})]}):t.jsx(st,{children:t.jsx(lr,{children:"Please log in to view your profile."})})},st=c.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,Li=c.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 10px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    font-size: 1.1rem;
  }
`,Oi=c.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fi=c.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
  }
`,or=c.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background: ${e=>e.active?e.theme.colors.primary:"white"};
  color: ${e=>e.active?"white":e.theme.colors.dark};
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: ${e=>e.active?e.theme.colors.primary:e.theme.colors.light};
  }
`,Ti=c.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,sr=c.div``,ir=c.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    color: ${e=>e.theme.colors.dark};
  }
`,Ni=c.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e7eb;
`,Bi=c.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${e=>e.theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.textLight};
  }
`,Mi=c.div`
  label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: ${e=>e.theme.colors.primary};
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  }
`,ar=c.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ii=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Y=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,K=c.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,X=c.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,Di=c.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textLight};
`,cr=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,_i=c.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${e=>e.type==="success"?"#d1fae5":"#fee2e2"};
  color: ${e=>e.type==="success"?"#065f46":"#dc2626"};
`,lr=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,Ui=()=>{const e=[{icon:t.jsx(Kr,{}),number:"500+",label:"Projects Completed"},{icon:t.jsx(Xr,{}),number:"300+",label:"Happy Clients"},{icon:t.jsx(Zo,{}),number:"15+",label:"Years Experience"},{icon:t.jsx(Jr,{}),number:"100%",label:"Client Satisfaction"}],r=[{title:"Excellence",description:"We strive for perfection in every project, ensuring the highest quality standards."},{title:"Innovation",description:"We embrace new ideas and cutting-edge design trends to create unique spaces."},{title:"Integrity",description:"We build trust through honest communication and transparent processes."},{title:"Passion",description:"We are passionate about transforming spaces and creating beautiful interiors."}];return t.jsxs(Hi,{children:[t.jsxs(qi,{children:[t.jsx(P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"About Us"}),t.jsx(P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Creating beautiful spaces that reflect your style and personality"})]}),t.jsx(dr,{children:t.jsx(Pe,{children:t.jsxs(Vi,{children:[t.jsx("h2",{children:"Our Story"}),t.jsx("p",{children:"Founded with a vision to transform ordinary spaces into extraordinary living environments, we have been at the forefront of interior design and restoration for over 15 years. Our team of experienced designers and craftsmen work together to bring your vision to life."}),t.jsx("p",{children:"We specialize in residential and commercial interior design, historical restoration, and modern decoration. Every project is approached with attention to detail, creativity, and a commitment to excellence."})]})})}),t.jsx(Wi,{children:t.jsx(Pe,{children:t.jsx(Ji,{children:e.map((n,o)=>t.jsx(P.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:o*.1},children:t.jsxs(Gi,{children:[t.jsx(Yi,{children:n.icon}),t.jsx(Ki,{children:n.number}),t.jsx(Xi,{children:n.label})]})},o))})})}),t.jsx(dr,{children:t.jsxs(Pe,{children:[t.jsxs(Zi,{children:[t.jsx("h2",{children:"Our Values"}),t.jsx("p",{children:"What drives us every day"})]}),t.jsx(Qi,{children:r.map((n,o)=>t.jsx(P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:o*.1},children:t.jsxs(ea,{children:[t.jsx("h3",{children:n.title}),t.jsx("p",{children:n.description})]})},o))})]})}),t.jsx(ta,{children:t.jsx(Pe,{children:t.jsxs(ra,{children:[t.jsx("h2",{children:"Ready to Start Your Project?"}),t.jsx("p",{children:"Let's work together to create something amazing"}),t.jsxs(na,{children:[t.jsx(ur,{href:"/contact",children:"Get in Touch"}),t.jsx(ur,{href:"/booking",variant:"outline",children:"Book Consultation"})]})]})})})]})},Hi=c.div`
  min-height: 100vh;
`,qi=c.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.3rem;
    opacity: 0.9;
  }
`,dr=c.section`
  padding: 80px 0;
  background: ${e=>e.theme.colors.light};
`,Pe=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Vi=c.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 30px;
  }

  p {
    font-size: 1.1rem;
    color: ${e=>e.theme.colors.textLight};
    line-height: 1.8;
    margin-bottom: 20px;
  }
`,Wi=c.section`
  padding: 80px 0;
  background: white;
`,Ji=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`,Gi=c.div`
  text-align: center;
  padding: 40px 20px;
`,Yi=c.div`
  font-size: 3rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 20px;
`,Ki=c.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.dark};
  margin-bottom: 10px;
`,Xi=c.div`
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.textLight};
`,Zi=c.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: ${e=>e.theme.colors.textLight};
  }
`,Qi=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`,ea=c.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    line-height: 1.6;
  }
`,ta=c.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`,ra=c.div`
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    opacity: 0.9;
  }
`,na=c.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`,ur=c.a`
  display: inline-block;
  padding: 14px 30px;
  background: ${e=>e.variant==="outline"?"transparent":"white"};
  color: ${e=>e.variant==="outline"?"white":e.theme.colors.primary};
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`,oa=()=>{const{isAuthenticated:e,user:r}=W(),n=le(),[o,s]=$.useState({service:"",date:"",time:"",message:"",phone:(r==null?void 0:r.phone)||"",email:(r==null?void 0:r.email)||""}),[i,a]=$.useState(!1),[l,f]=$.useState({type:"",text:""}),h=["Interior Design Consultation","Restoration Services","Decoration Services","Renovation Planning","Space Planning","Color Consultation","Furniture Selection","Lighting Design"],u=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"],g=y=>{s({...o,[y.target.name]:y.target.value})},b=async y=>{var x,p;if(y.preventDefault(),!e){n("/login");return}a(!0),f({type:"",text:""});try{await v.post("/bookings",{...o,contactInfo:{phone:o.phone,email:o.email}}),f({type:"success",text:"Booking request submitted successfully! We will contact you soon."}),s({service:"",date:"",time:"",message:"",phone:(r==null?void 0:r.phone)||"",email:(r==null?void 0:r.email)||""})}catch(m){f({type:"error",text:((p=(x=m.response)==null?void 0:x.data)==null?void 0:p.message)||"Failed to submit booking"})}finally{a(!1)}};return e?t.jsx(hr,{children:t.jsxs(sa,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[t.jsxs(ia,{children:[t.jsx(aa,{children:t.jsx(_e,{})}),t.jsx("h1",{children:"Book a Consultation"}),t.jsx("p",{children:"Schedule a meeting with our interior design experts"})]}),l.text&&t.jsx(ha,{type:l.type,children:l.text}),t.jsxs(ca,{onSubmit:b,children:[t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(Wr,{})," Service Type"]}),t.jsxs(pr,{name:"service",value:o.service,onChange:g,required:!0,children:[t.jsx("option",{value:"",children:"Select a service"}),h.map(y=>t.jsx("option",{value:y,children:y},y))]})]}),t.jsxs(la,{children:[t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(_e,{})," Date"]}),t.jsx(it,{type:"date",name:"date",value:o.date,onChange:g,min:new Date().toISOString().split("T")[0],required:!0})]}),t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(St,{})," Time"]}),t.jsxs(pr,{name:"time",value:o.time,onChange:g,required:!0,children:[t.jsx("option",{value:"",children:"Select time"}),u.map(y=>t.jsx("option",{value:y,children:y},y))]})]})]}),t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(Ge,{})," Phone Number"]}),t.jsx(it,{type:"tel",name:"phone",value:o.phone,onChange:g,required:!0})]}),t.jsxs(ie,{children:[t.jsxs(ae,{children:[t.jsx(Se,{})," Email"]}),t.jsx(it,{type:"email",name:"email",value:o.email,onChange:g,required:!0})]}),t.jsxs(ie,{children:[t.jsx(ae,{children:"Additional Message (Optional)"}),t.jsx(da,{name:"message",value:o.message,onChange:g,rows:"4",placeholder:"Tell us about your project or any specific requirements..."})]}),t.jsx(ua,{type:"submit",disabled:i,children:i?"Submitting...":"Book Consultation"})]})]})}):t.jsx(hr,{children:t.jsxs(pa,{children:[t.jsx("h2",{children:"Please Login"}),t.jsx("p",{children:"You need to be logged in to book a consultation."}),t.jsx(ma,{onClick:()=>n("/login"),children:"Go to Login"})]})})},hr=c.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
`,sa=c(P.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 600px;
`,ia=c.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 2rem;
    color: ${e=>e.theme.colors.dark};
    margin: 15px 0 10px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    font-size: 0.95rem;
  }
`,aa=c.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`,ca=c.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,la=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,ie=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ae=c.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,it=c.input`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,pr=c.select`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,da=c.textarea`
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`,ua=c.button`
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`,ha=c.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${e=>e.type==="success"?"#d1fae5":"#fee2e2"};
  color: ${e=>e.type==="success"?"#065f46":"#dc2626"};
`,pa=c.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  max-width: 500px;

  h2 {
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    margin-bottom: 25px;
  }
`,ma=c.button`
  padding: 12px 30px;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`,xa=()=>{const{id:e}=nn(),r=le(),{isAuthenticated:n}=W(),[o,s]=$.useState(null),[i,a]=$.useState(!1),[l,f]=$.useState(!0);$.useEffect(()=>{h(),n&&u()},[e,n]);const h=async()=>{try{const b=await v.get(`/projects/${e}`);s(b.data)}catch(b){console.error("Error fetching project:",b)}finally{f(!1)}},u=async()=>{try{const b=await v.get(`/favorites/check/${e}`);a(b.data.isFavorited)}catch(b){console.error("Error checking favorite:",b)}},g=async()=>{if(!n){r("/login");return}try{i?(await v.delete(`/favorites/${e}`),a(!1)):(await v.post(`/favorites/${e}`),a(!0))}catch(b){console.error("Error toggling favorite:",b)}};return l?t.jsx(at,{children:t.jsx(Pa,{children:"Loading..."})}):o?t.jsxs(at,{children:[t.jsx(fa,{onClick:()=>r(-1),children:"← Back"}),t.jsxs(ga,{children:[t.jsxs(ba,{children:[t.jsx("h1",{children:o.title}),t.jsx(ya,{children:o.category})]}),n&&t.jsxs(wa,{onClick:g,favorited:i,children:[t.jsx(Jr,{})," ",i?"Favorited":"Add to Favorites"]})]}),o.images&&o.images.length>0&&t.jsx(ja,{children:o.images.map((b,y)=>t.jsx(va,{src:b,alt:`${o.title} - Image ${y+1}`},y))}),t.jsxs(Sa,{children:[t.jsxs(ka,{children:[t.jsxs(mr,{children:[t.jsx("h2",{children:"About This Project"}),t.jsx("p",{children:o.description})]}),o.services&&o.services.length>0&&t.jsxs(mr,{children:[t.jsx("h2",{children:"Services Used"}),t.jsx(Ca,{children:o.services.map((b,y)=>t.jsx($a,{children:b},y))})]})]}),t.jsxs(Ea,{children:[t.jsxs(Qr,{children:[t.jsx("h3",{children:"Project Details"}),o.location&&t.jsxs(ct,{children:[t.jsx(Yr,{})," ",o.location]}),o.area&&t.jsxs(ct,{children:[t.jsx(ns,{})," ",o.area]}),o.completionDate&&t.jsxs(ct,{children:[t.jsx(St,{})," Completed: ",new Date(o.completionDate).toLocaleDateString()]})]}),t.jsxs(za,{children:[t.jsx("h3",{children:"Book a Consultation"}),t.jsx("p",{children:"Interested in a similar project?"}),t.jsxs(Ra,{as:R,to:"/booking",children:[t.jsx(_e,{})," Book Now"]})]})]})]})]}):t.jsx(at,{children:t.jsx(Aa,{children:"Project not found"})})},at=c.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,fa=c.button`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: block;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 0;
`,ga=c.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ba=c.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }
`,ya=c.span`
  display: inline-block;
  padding: 8px 16px;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
`,wa=c.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: ${e=>e.favorited?"#fee2e2":"white"};
  color: ${e=>e.favorited?"#dc2626":e.theme.colors.dark};
  border: 2px solid ${e=>e.favorited?"#dc2626":"#e5e7eb"};
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.favorited?"#dc2626":e.theme.colors.primary};
    color: white;
    border-color: ${e=>e.favorited?"#dc2626":e.theme.colors.primary};
  }
`,ja=c.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,va=c.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,Sa=c.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`,ka=c.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,mr=c.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
    line-height: 1.6;
  }
`,Ca=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,$a=c.span`
  padding: 8px 16px;
  background: ${e=>e.theme.colors.light};
  color: ${e=>e.theme.colors.dark};
  border-radius: 20px;
  font-size: 0.9rem;
`,Ea=c.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Qr=c.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 20px;
  }
`,ct=c.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 0;
  color: ${e=>e.theme.colors.textLight};
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,za=c(Qr)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  h3 {
    color: white;
  }

  p {
    margin-bottom: 20px;
    opacity: 0.9;
  }
`,Ra=c(R)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: white;
  color: ${e=>e.theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`,Pa=c.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,Aa=c.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
`,La=()=>{const{user:e}=W(),[r,n]=$.useState(null),[o,s]=$.useState([]),[i,a]=$.useState([]),[l,f]=$.useState([]),[h,u]=$.useState("overview"),[g,b]=$.useState(!0);$.useEffect(()=>{e&&["admin","super_admin"].includes(e.role)&&y()},[e]);const y=async()=>{try{const[p,m,w,j]=await Promise.all([v.get("/admin/dashboard"),v.get("/admin/projects"),v.get("/admin/services"),v.get("/bookings")]);n(p.data.data.stats),s(m.data.data),a(w.data.data),f(j.data.data)}catch(p){console.error("Error fetching dashboard data:",p)}finally{b(!1)}},x=async(p,m)=>{if(window.confirm(`Are you sure you want to delete this ${p}?`))try{await v.delete(`/admin/${p}s/${m}`),y()}catch{alert("Failed to delete")}};return!e||!["admin","super_admin"].includes(e.role)?t.jsx(lt,{children:t.jsx(Da,{children:"Access denied. Admin privileges required."})}):g?t.jsx(lt,{children:t.jsx(Ia,{children:"Loading..."})}):t.jsxs(lt,{children:[t.jsxs(Oa,{children:[t.jsx("h1",{children:"Admin Dashboard"}),t.jsx("p",{children:"Manage your website content and users"})]}),t.jsxs(Fa,{children:[t.jsx(Ae,{active:h==="overview",onClick:()=>u("overview"),children:"Overview"}),t.jsx(Ae,{active:h==="projects",onClick:()=>u("projects"),children:"Projects"}),t.jsx(Ae,{active:h==="services",onClick:()=>u("services"),children:"Services"}),t.jsx(Ae,{active:h==="bookings",onClick:()=>u("bookings"),children:"Bookings"})]}),h==="overview"&&r&&t.jsxs(Ta,{children:[t.jsxs(Na,{children:[t.jsxs(Le,{children:[t.jsx(Oe,{color:"#667eea",children:t.jsx(Kr,{})}),t.jsx(Fe,{children:r.projects}),t.jsx(Te,{children:"Projects"})]}),t.jsxs(Le,{children:[t.jsx(Oe,{color:"#764ba2",children:t.jsx(Wr,{})}),t.jsx(Fe,{children:r.services}),t.jsx(Te,{children:"Services"})]}),t.jsxs(Le,{children:[t.jsx(Oe,{color:"#f59e0b",children:t.jsx(Xr,{})}),t.jsx(Fe,{children:r.users}),t.jsx(Te,{children:"Users"})]}),t.jsxs(Le,{children:[t.jsx(Oe,{color:"#10b981",children:t.jsx(_e,{})}),t.jsx(Fe,{children:r.bookings}),t.jsx(Te,{children:"Bookings"})]})]}),t.jsxs(Ba,{children:[t.jsx("h2",{children:"Recent Bookings"}),l.slice(0,5).map(p=>{var m,w;return t.jsxs(Ma,{children:[t.jsxs("div",{children:[t.jsxs("strong",{children:[(m=p.user)==null?void 0:m.firstName," ",(w=p.user)==null?void 0:w.lastName]}),t.jsx("span",{children:p.service})]}),t.jsx(xr,{status:p.status,children:p.status})]},p._id)})]})]}),h==="projects"&&t.jsxs(dt,{children:[t.jsxs(ut,{children:[t.jsx("h2",{children:"Projects"}),t.jsxs(fr,{children:[t.jsx(Yt,{})," Add Project"]})]}),t.jsxs(ht,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Title"}),t.jsx("th",{children:"Category"}),t.jsx("th",{children:"Featured"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:o.map(p=>t.jsxs("tr",{children:[t.jsx("td",{children:p.title}),t.jsx("td",{children:p.category}),t.jsx("td",{children:p.featured?"Yes":"No"}),t.jsxs("td",{children:[t.jsx(be,{children:t.jsx(et,{})}),t.jsx(be,{danger:!0,onClick:()=>x("project",p._id),children:t.jsx(Xt,{})})]})]},p._id))})]})]}),h==="services"&&t.jsxs(dt,{children:[t.jsxs(ut,{children:[t.jsx("h2",{children:"Services"}),t.jsxs(fr,{children:[t.jsx(Yt,{})," Add Service"]})]}),t.jsxs(ht,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Name"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:i.map(p=>{var m;return t.jsxs("tr",{children:[t.jsx("td",{children:p.name}),t.jsxs("td",{children:[(m=p.description)==null?void 0:m.substring(0,50),"..."]}),t.jsxs("td",{children:[t.jsx(be,{children:t.jsx(et,{})}),t.jsx(be,{danger:!0,onClick:()=>x("service",p._id),children:t.jsx(Xt,{})})]})]},p._id)})})]})]}),h==="bookings"&&t.jsxs(dt,{children:[t.jsx(ut,{children:t.jsx("h2",{children:"All Bookings"})}),t.jsxs(ht,{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"User"}),t.jsx("th",{children:"Service"}),t.jsx("th",{children:"Date"}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Actions"})]})}),t.jsx("tbody",{children:l.map(p=>{var m,w;return t.jsxs("tr",{children:[t.jsxs("td",{children:[(m=p.user)==null?void 0:m.firstName," ",(w=p.user)==null?void 0:w.lastName]}),t.jsx("td",{children:p.service}),t.jsx("td",{children:new Date(p.date).toLocaleDateString()}),t.jsx("td",{children:t.jsx(xr,{status:p.status,children:p.status})}),t.jsx("td",{children:t.jsx(be,{children:t.jsx(et,{})})})]},p._id)})})]})]})]})},lt=c.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,Oa=c.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 10px;
  }

  p {
    color: ${e=>e.theme.colors.textLight};
  }
`,Fa=c.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  gap: 10px;
  border-bottom: 2px solid #e5e7eb;
`,Ae=c.button`
  padding: 15px 30px;
  background: ${e=>e.active?e.theme.colors.primary:"transparent"};
  color: ${e=>e.active?"white":e.theme.colors.dark};
  border: none;
  border-radius: 8px 8px 0 0;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.active?e.theme.colors.primary:e.theme.colors.light};
  }
`,Ta=c.div`
  max-width: 1200px;
  margin: 0 auto;
`,Na=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`,Le=c(P.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
`,Oe=c.div`
  width: 60px;
  height: 60px;
  background: ${e=>e.color}20;
  color: ${e=>e.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 15px;
`,Fe=c.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.dark};
  margin-bottom: 5px;
`,Te=c.div`
  color: ${e=>e.theme.colors.textLight};
  font-size: 1rem;
`,Ba=c.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    margin-bottom: 20px;
    color: ${e=>e.theme.colors.dark};
  }
`,Ma=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  strong {
    color: ${e=>e.theme.colors.dark};
  }

  span {
    color: ${e=>e.theme.colors.textLight};
    font-size: 0.9rem;
  }
`,xr=c.span`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"confirmed":return"#d1fae5";case"pending":return"#fef3c7";case"cancelled":return"#fee2e2";default:return"#e5e7eb"}}};
  color: ${e=>{switch(e.status){case"confirmed":return"#065f46";case"pending":return"#92400e";case"cancelled":return"#991b1b";default:return"#374151"}}};
`,dt=c.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,ut=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: ${e=>e.theme.colors.dark};
  }
`,fr=c.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`,ht=c.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: ${e=>e.theme.colors.light};
  }

  th {
    padding: 15px;
    text-align: left;
    font-weight: 600;
    color: ${e=>e.theme.colors.dark};
  }

  td {
    padding: 15px;
    border-top: 1px solid #e5e7eb;
  }

  tbody tr:hover {
    background: ${e=>e.theme.colors.light};
  }
`,be=c.button`
  padding: 8px 12px;
  margin-right: 5px;
  background: ${e=>e.danger?"#fee2e2":e.theme.colors.light};
  color: ${e=>e.danger?"#dc2626":e.theme.colors.dark};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.danger?"#dc2626":e.theme.colors.primary};
    color: white;
  }
`,Ia=c.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,Da=c.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
  background: white;
  border-radius: 12px;
  max-width: 600px;
  margin: 50px auto;
`;console.log("📱 App component loading...");const _a=()=>(console.log("📱 App component rendering..."),t.jsxs(t.Fragment,{children:[t.jsx(ls,{}),t.jsxs(on,{children:[t.jsx(I,{path:"/",element:t.jsx(Hs,{})}),t.jsx(I,{path:"/about",element:t.jsx(Ui,{})}),t.jsx(I,{path:"/contact",element:t.jsx(Xs,{})}),t.jsx(I,{path:"/login",element:t.jsx(ui,{})}),t.jsx(I,{path:"/register",element:t.jsx(ji,{})}),t.jsx(I,{path:"/projects/:id",element:t.jsx(xa,{})}),t.jsx(I,{path:"/profile",element:t.jsx(tt,{children:t.jsx(Ai,{})})}),t.jsx(I,{path:"/booking",element:t.jsx(tt,{children:t.jsx(oa,{})})}),t.jsx(I,{path:"/admin",element:t.jsx(tt,{children:t.jsx(La,{})})})]})]})),Ua=an`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --backdrop-blur: blur(10px);
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    color: #1f2937;
    background: #f9fafb;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Modern scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);
  }

  /* Selection */
  ::selection {
    background: rgba(102, 126, 234, 0.3);
    color: #1f2937;
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Inputs */
  input,
  textarea,
  select {
    font-family: inherit;
    outline: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  /* Focus styles */
  *:focus-visible {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Smooth animations */
  @media (prefers-reduced-motion: no-preference) {
    * {
      animation-duration: 0.3s;
      animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  /* Utility classes */
  .glass {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hover-lift:hover {
    transform: translateY(-4px);
  }
`,Ha={colors:{primary:"#667eea",secondary:"#764ba2",accent:"#f5576c",text:"#1f2937",textLight:"#6b7280",textLighter:"#9ca3af",background:"#ffffff",light:"#f9fafb",dark:"#111827",success:"#10b981",error:"#ef4444",warning:"#f59e0b",info:"#3b82f6"},gradients:{primary:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",secondary:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",accent:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",dark:"linear-gradient(135deg, #1f2937 0%, #111827 100%)"},shadows:{sm:"0 2px 4px rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",colored:"0 10px 30px rgba(102, 126, 234, 0.3)"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},spacing:{xs:"0.5rem",sm:"0.75rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},transitions:{fast:"0.15s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.3s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.5s cubic-bezier(0.4, 0, 0.2, 1)"}};console.log("🚀 App starting...");try{pt.createRoot(document.getElementById("root")).render(t.jsx(Jo,{children:t.jsxs(cn,{theme:Ha,children:[t.jsx(Ua,{}),t.jsx(sn,{children:t.jsx(Wo,{children:t.jsx(_a,{})})})]})})),console.log("✅ App rendered successfully")}catch(e){console.error("❌ Error rendering app:",e)}
