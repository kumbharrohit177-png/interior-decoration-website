function Lv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Mv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fm={exports:{}},Ra={},_m={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),Ov=Symbol.for("react.portal"),$v=Symbol.for("react.fragment"),Dv=Symbol.for("react.strict_mode"),Nv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),Iv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Bv=Symbol.for("react.lazy"),vf=Symbol.iterator;function Uv(e){return e===null||typeof e!="object"?null:(e=vf&&e[vf]||e["@@iterator"],typeof e=="function"?e:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vm=Object.assign,Bm={};function fo(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Im}fo.prototype.isReactComponent={};fo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Um(){}Um.prototype=fo.prototype;function _c(e,t,n){this.props=e,this.context=t,this.refs=Bm,this.updater=n||Im}var Ic=_c.prototype=new Um;Ic.constructor=_c;Vm(Ic,fo.prototype);Ic.isPureReactComponent=!0;var xf=Array.isArray,Hm=Object.prototype.hasOwnProperty,Vc={current:null},Wm={key:!0,ref:!0,__self:!0,__source:!0};function Gm(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Hm.call(t,r)&&!Wm.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ti,type:e,key:i,ref:s,props:o,_owner:Vc.current}}function Hv(e,t){return{$$typeof:Ti,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ti}function Wv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wf=/\/+/g;function fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wv(""+e.key):t.toString(36)}function ws(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ti:case Ov:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+fl(s,0):r,xf(o)?(n="",e!=null&&(n=e.replace(wf,"$&/")+"/"),ws(o,t,n,"",function(u){return u})):o!=null&&(Bc(o)&&(o=Hv(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(wf,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",xf(e))for(var a=0;a<e.length;a++){i=e[a];var l=r+fl(i,a);s+=ws(i,t,n,l,o)}else if(l=Uv(e),typeof l=="function")for(e=l.call(e),a=0;!(i=e.next()).done;)i=i.value,l=r+fl(i,a++),s+=ws(i,t,n,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Hi(e,t,n){if(e==null)return e;var r=[],o=0;return ws(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},Ss={transition:null},Kv={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:Ss,ReactCurrentOwner:Vc};function Km(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!Bc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=fo;B.Fragment=$v;B.Profiler=Nv;B.PureComponent=_c;B.StrictMode=Dv;B.Suspense=Iv;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv;B.act=Km;B.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vm({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=Vc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Hm.call(t,l)&&!Wm.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ti,type:e.type,key:o,ref:i,props:r,_owner:s}};B.createContext=function(e){return e={$$typeof:Fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zv,_context:e},e.Consumer=e};B.createElement=Gm;B.createFactory=function(e){var t=Gm.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:_v,render:e}};B.isValidElement=Bc;B.lazy=function(e){return{$$typeof:Bv,_payload:{_status:-1,_result:e},_init:Gv}};B.memo=function(e,t){return{$$typeof:Vv,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ss.transition;Ss.transition={};try{e()}finally{Ss.transition=t}};B.unstable_act=Km;B.useCallback=function(e,t){return _e.current.useCallback(e,t)};B.useContext=function(e){return _e.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};B.useEffect=function(e,t){return _e.current.useEffect(e,t)};B.useId=function(){return _e.current.useId()};B.useImperativeHandle=function(e,t,n){return _e.current.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return _e.current.useMemo(e,t)};B.useReducer=function(e,t,n){return _e.current.useReducer(e,t,n)};B.useRef=function(e){return _e.current.useRef(e)};B.useState=function(e){return _e.current.useState(e)};B.useSyncExternalStore=function(e,t,n){return _e.current.useSyncExternalStore(e,t,n)};B.useTransition=function(){return _e.current.useTransition()};B.version="18.3.1";_m.exports=B;var j=_m.exports;const G=Mv(j),Yv=Lv({__proto__:null,default:G},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=j,Qv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,Zv=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ex={key:!0,ref:!0,__self:!0,__source:!0};function Ym(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Jv.call(t,r)&&!ex.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qv,type:e,key:i,ref:s,props:o,_owner:Zv.current}}Ra.Fragment=Xv;Ra.jsx=Ym;Ra.jsxs=Ym;Fm.exports=Ra;var c=Fm.exports,yu={},qm={exports:{}},ot={},Qm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,$){var z=A.length;A.push($);e:for(;0<z;){var D=z-1>>>1,I=A[D];if(0<o(I,$))A[D]=$,A[z]=I,z=D;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var $=A[0],z=A.pop();if(z!==$){A[0]=z;e:for(var D=0,I=A.length,Ve=I>>>1;D<Ve;){var ye=2*(D+1)-1,st=A[ye],Pe=ye+1,Pt=A[Pe];if(0>o(st,z))Pe<I&&0>o(Pt,st)?(A[D]=Pt,A[Pe]=z,D=Pe):(A[D]=st,A[ye]=z,D=ye);else if(Pe<I&&0>o(Pt,z))A[D]=Pt,A[Pe]=z,D=Pe;else break e}}return $}function o(A,$){var z=A.sortIndex-$.sortIndex;return z!==0?z:A.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,h=3,g=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=A)r(u),$.sortIndex=$.expirationTime,t(l,$);else break;$=n(u)}}function S(A){if(v=!1,p(A),!y)if(n(l)!==null)y=!0,U(C);else{var $=n(u);$!==null&&ge(S,$.startTime-A)}}function C(A,$){y=!1,v&&(v=!1,x(T),T=-1),g=!0;var z=h;try{for(p($),f=n(l);f!==null&&(!(f.expirationTime>$)||A&&!H());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var I=D(f.expirationTime<=$);$=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(l)&&r(l),p($)}else r(l);f=n(l)}if(f!==null)var Ve=!0;else{var ye=n(u);ye!==null&&ge(S,ye.startTime-$),Ve=!1}return Ve}finally{f=null,h=z,g=!1}}var E=!1,b=null,T=-1,O=5,L=-1;function H(){return!(e.unstable_now()-L<O)}function W(){if(b!==null){var A=e.unstable_now();L=A;var $=!0;try{$=b(!0,A)}finally{$?J():(E=!1,b=null)}}else E=!1}var J;if(typeof m=="function")J=function(){m(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Qe=Y.port2;Y.port1.onmessage=W,J=function(){Qe.postMessage(null)}}else J=function(){w(W,0)};function U(A){b=A,E||(E=!0,J())}function ge(A,$){T=w(function(){A(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,U(C))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var z=h;h=$;try{return A()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,$){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var z=h;h=A;try{return $()}finally{h=z}},e.unstable_scheduleCallback=function(A,$,z){var D=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?D+z:D):z=D,A){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=z+I,A={id:d++,callback:$,priorityLevel:A,startTime:z,expirationTime:I,sortIndex:-1},z>D?(A.sortIndex=z,t(u,A),n(l)===null&&A===n(u)&&(v?(x(T),T=-1):v=!0,ge(S,z-D))):(A.sortIndex=I,t(l,A),y||g||(y=!0,U(C))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var $=h;return function(){var z=h;h=$;try{return A.apply(this,arguments)}finally{h=z}}}})(Xm);Qm.exports=Xm;var tx=Qm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=j,nt=tx;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jm=new Set,ni={};function hr(e,t){Jr(e,t),Jr(e+"Capture",t)}function Jr(e,t){for(ni[e]=t,e=0;e<t.length;e++)Jm.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},kf={};function ox(e){return vu.call(kf,e)?!0:vu.call(Sf,e)?!1:rx.test(e)?kf[e]=!0:(Sf[e]=!0,!1)}function ix(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sx(e,t,n,r){if(t===null||typeof t>"u"||ix(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function Hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Re[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uc,Hc);Re[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uc,Hc);Re[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wc(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sx(t,n,o,r)&&(n=null),r||o===null?ox(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Jt=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),Er=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),Gc=Symbol.for("react.strict_mode"),xu=Symbol.for("react.profiler"),Zm=Symbol.for("react.provider"),e0=Symbol.for("react.context"),Kc=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),Yc=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Cf=Symbol.iterator;function wo(e){return e===null||typeof e!="object"?null:(e=Cf&&e[Cf]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,hl;function No(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var pl=!1;function ml(e,t){if(!e||pl)return"";pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,a=i.length-1;1<=s&&0<=a&&o[s]!==i[a];)a--;for(;1<=s&&0<=a;s--,a--)if(o[s]!==i[a]){if(s!==1||a!==1)do if(s--,a--,0>a||o[s]!==i[a]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?No(e):""}function ax(e){switch(e.tag){case 5:return No(e.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return e=ml(e.type,!1),e;case 11:return e=ml(e.type.render,!1),e;case 1:return e=ml(e.type,!0),e;default:return""}}function ku(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case Er:return"Portal";case xu:return"Profiler";case Gc:return"StrictMode";case wu:return"Suspense";case Su:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case e0:return(e.displayName||"Context")+".Consumer";case Zm:return(e._context.displayName||"Context")+".Provider";case Kc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yc:return t=e.displayName||null,t!==null?t:ku(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return ku(e(t))}catch{}}return null}function lx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(t);case 8:return t===Gc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function n0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ux(e){var t=n0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=ux(e))}function r0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=n0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Us(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cu(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function o0(e,t){t=t.checked,t!=null&&Wc(e,"checked",t,!1)}function bu(e,t){o0(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ju(e,t.type,n):t.hasOwnProperty("defaultValue")&&ju(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ju(e,t,n){(t!=="number"||Us(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zo=Array.isArray;function Gr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Pu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(zo(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function i0(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function s0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?s0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ki,a0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ki=Ki||document.createElement("div"),Ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cx=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){cx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function l0(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function u0(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=l0(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var dx=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tu(e,t){if(t){if(dx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function Ru(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Lu=null,Kr=null,Yr=null;function Tf(e){if(e=Li(e)){if(typeof Lu!="function")throw Error(R(280));var t=e.stateNode;t&&(t=$a(t),Lu(e.stateNode,e.type,t))}}function c0(e){Kr?Yr?Yr.push(e):Yr=[e]:Kr=e}function d0(){if(Kr){var e=Kr,t=Yr;if(Yr=Kr=null,Tf(e),t)for(e=0;e<t.length;e++)Tf(t[e])}}function f0(e,t){return e(t)}function h0(){}var gl=!1;function p0(e,t,n){if(gl)return e(t,n);gl=!0;try{return f0(e,t,n)}finally{gl=!1,(Kr!==null||Yr!==null)&&(h0(),d0())}}function oi(e,t){var n=e.stateNode;if(n===null)return null;var r=$a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Mu=!1;if(Kt)try{var So={};Object.defineProperty(So,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Mu=!1}function fx(e,t,n,r,o,i,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Uo=!1,Hs=null,Ws=!1,Ou=null,hx={onError:function(e){Uo=!0,Hs=e}};function px(e,t,n,r,o,i,s,a,l){Uo=!1,Hs=null,fx.apply(hx,arguments)}function mx(e,t,n,r,o,i,s,a,l){if(px.apply(this,arguments),Uo){if(Uo){var u=Hs;Uo=!1,Hs=null}else throw Error(R(198));Ws||(Ws=!0,Ou=u)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rf(e){if(pr(e)!==e)throw Error(R(188))}function gx(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Rf(o),e;if(i===r)return Rf(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s){for(a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function g0(e){return e=gx(e),e!==null?y0(e):null}function y0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=y0(e);if(t!==null)return t;e=e.sibling}return null}var v0=nt.unstable_scheduleCallback,Af=nt.unstable_cancelCallback,yx=nt.unstable_shouldYield,vx=nt.unstable_requestPaint,ce=nt.unstable_now,xx=nt.unstable_getCurrentPriorityLevel,Qc=nt.unstable_ImmediatePriority,x0=nt.unstable_UserBlockingPriority,Gs=nt.unstable_NormalPriority,wx=nt.unstable_LowPriority,w0=nt.unstable_IdlePriority,Aa=null,$t=null;function Sx(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Aa,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:bx,kx=Math.log,Cx=Math.LN2;function bx(e){return e>>>=0,e===0?32:31-(kx(e)/Cx|0)|0}var Yi=64,qi=4194304;function Fo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~o;a!==0?r=Fo(a):(i&=s,i!==0&&(r=Fo(i)))}else s=n&~o,s!==0?r=Fo(s):i!==0&&(r=Fo(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),o=1<<n,r|=e[n],t&=~o;return r}function jx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-St(i),a=1<<s,l=o[s];l===-1?(!(a&n)||a&r)&&(o[s]=jx(a,t)):l<=t&&(e.expiredLanes|=a),i&=~a}}function $u(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function S0(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ri(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function Ex(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-St(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Xc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function k0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var C0,Jc,b0,j0,P0,Du=!1,Qi=[],mn=null,gn=null,yn=null,ii=new Map,si=new Map,an=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(t.pointerId)}}function ko(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Li(t),t!==null&&Jc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Rx(e,t,n,r,o){switch(t){case"focusin":return mn=ko(mn,e,t,n,r,o),!0;case"dragenter":return gn=ko(gn,e,t,n,r,o),!0;case"mouseover":return yn=ko(yn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return ii.set(i,ko(ii.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,si.set(i,ko(si.get(i)||null,e,t,n,r,o)),!0}return!1}function E0(e){var t=Yn(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=m0(n),t!==null){e.blockedOn=t,P0(e.priority,function(){b0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Nu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Au=r,n.target.dispatchEvent(r),Au=null}else return t=Li(n),t!==null&&Jc(t),e.blockedOn=n,!1;t.shift()}return!0}function Mf(e,t,n){ks(e)&&n.delete(t)}function Ax(){Du=!1,mn!==null&&ks(mn)&&(mn=null),gn!==null&&ks(gn)&&(gn=null),yn!==null&&ks(yn)&&(yn=null),ii.forEach(Mf),si.forEach(Mf)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Du||(Du=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Ax)))}function ai(e){function t(o){return Co(o,e)}if(0<Qi.length){Co(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Co(mn,e),gn!==null&&Co(gn,e),yn!==null&&Co(yn,e),ii.forEach(t),si.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)E0(n),n.blockedOn===null&&an.shift()}var qr=Jt.ReactCurrentBatchConfig,Ys=!0;function Lx(e,t,n,r){var o=Q,i=qr.transition;qr.transition=null;try{Q=1,Zc(e,t,n,r)}finally{Q=o,qr.transition=i}}function Mx(e,t,n,r){var o=Q,i=qr.transition;qr.transition=null;try{Q=4,Zc(e,t,n,r)}finally{Q=o,qr.transition=i}}function Zc(e,t,n,r){if(Ys){var o=Nu(e,t,n,r);if(o===null)El(e,t,r,qs,n),Lf(e,r);else if(Rx(o,e,t,n,r))r.stopPropagation();else if(Lf(e,r),t&4&&-1<Tx.indexOf(e)){for(;o!==null;){var i=Li(o);if(i!==null&&C0(i),i=Nu(e,t,n,r),i===null&&El(e,t,r,qs,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else El(e,t,r,null,n)}}var qs=null;function Nu(e,t,n,r){if(qs=null,e=qc(r),e=Yn(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=m0(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qs=e,null}function T0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xx()){case Qc:return 1;case x0:return 4;case Gs:case wx:return 16;case w0:return 536870912;default:return 16}default:return 16}}var cn=null,ed=null,Cs=null;function R0(){if(Cs)return Cs;var e,t=ed,n=t.length,r,o="value"in cn?cn.value:cn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Cs=o.slice(e,1<r?1-r:void 0)}function bs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Of(){return!1}function it(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:Of,this.isPropagationStopped=Of,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=it(ho),Ai=le({},ho,{view:0,detail:0}),Ox=it(Ai),vl,xl,bo,La=le({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bo&&(bo&&e.type==="mousemove"?(vl=e.screenX-bo.screenX,xl=e.screenY-bo.screenY):xl=vl=0,bo=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),$f=it(La),$x=le({},La,{dataTransfer:0}),Dx=it($x),Nx=le({},Ai,{relatedTarget:0}),wl=it(Nx),zx=le({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=it(zx),_x=le({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ix=it(_x),Vx=le({},ho,{data:0}),Df=it(Vx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hx[e])?!!t[e]:!1}function nd(){return Wx}var Gx=le({},Ai,{key:function(e){if(e.key){var t=Bx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(e){return e.type==="keypress"?bs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kx=it(Gx),Yx=le({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=it(Yx),qx=le({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),Qx=it(qx),Xx=le({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=it(Xx),Zx=le({},La,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e2=it(Zx),t2=[9,13,27,32],rd=Kt&&"CompositionEvent"in window,Ho=null;Kt&&"documentMode"in document&&(Ho=document.documentMode);var n2=Kt&&"TextEvent"in window&&!Ho,A0=Kt&&(!rd||Ho&&8<Ho&&11>=Ho),zf=" ",Ff=!1;function L0(e,t){switch(e){case"keyup":return t2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rr=!1;function r2(e,t){switch(e){case"compositionend":return M0(t);case"keypress":return t.which!==32?null:(Ff=!0,zf);case"textInput":return e=t.data,e===zf&&Ff?null:e;default:return null}}function o2(e,t){if(Rr)return e==="compositionend"||!rd&&L0(e,t)?(e=R0(),Cs=ed=cn=null,Rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return A0&&t.locale!=="ko"?null:t.data;default:return null}}var i2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i2[e.type]:t==="textarea"}function O0(e,t,n,r){c0(r),t=Qs(t,"onChange"),0<t.length&&(n=new td("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wo=null,li=null;function s2(e){H0(e,0)}function Ma(e){var t=Mr(e);if(r0(t))return e}function a2(e,t){if(e==="change")return t}var $0=!1;if(Kt){var Sl;if(Kt){var kl="oninput"in document;if(!kl){var If=document.createElement("div");If.setAttribute("oninput","return;"),kl=typeof If.oninput=="function"}Sl=kl}else Sl=!1;$0=Sl&&(!document.documentMode||9<document.documentMode)}function Vf(){Wo&&(Wo.detachEvent("onpropertychange",D0),li=Wo=null)}function D0(e){if(e.propertyName==="value"&&Ma(li)){var t=[];O0(t,li,e,qc(e)),p0(s2,t)}}function l2(e,t,n){e==="focusin"?(Vf(),Wo=t,li=n,Wo.attachEvent("onpropertychange",D0)):e==="focusout"&&Vf()}function u2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(li)}function c2(e,t){if(e==="click")return Ma(t)}function d2(e,t){if(e==="input"||e==="change")return Ma(t)}function f2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:f2;function ui(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vu.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function Bf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Uf(e,t){var n=Bf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function N0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?N0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function z0(){for(var e=window,t=Us();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Us(e.document)}return t}function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function h2(e){var t=z0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&N0(n.ownerDocument.documentElement,n)){if(r!==null&&od(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Uf(n,i);var s=Uf(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p2=Kt&&"documentMode"in document&&11>=document.documentMode,Ar=null,zu=null,Go=null,Fu=!1;function Hf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fu||Ar==null||Ar!==Us(r)||(r=Ar,"selectionStart"in r&&od(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&ui(Go,r)||(Go=r,r=Qs(zu,"onSelect"),0<r.length&&(t=new td("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ar)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},Cl={},F0={};Kt&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Oa(e){if(Cl[e])return Cl[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in F0)return Cl[e]=t[n];return e}var _0=Oa("animationend"),I0=Oa("animationiteration"),V0=Oa("animationstart"),B0=Oa("transitionend"),U0=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){U0.set(e,t),hr(t,[e])}for(var bl=0;bl<Wf.length;bl++){var jl=Wf[bl],m2=jl.toLowerCase(),g2=jl[0].toUpperCase()+jl.slice(1);Mn(m2,"on"+g2)}Mn(_0,"onAnimationEnd");Mn(I0,"onAnimationIteration");Mn(V0,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(B0,"onTransitionEnd");Jr("onMouseEnter",["mouseout","mouseover"]);Jr("onMouseLeave",["mouseout","mouseover"]);Jr("onPointerEnter",["pointerout","pointerover"]);Jr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y2=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Gf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mx(r,t,void 0,e),e.currentTarget=null}function H0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&o.isPropagationStopped())break e;Gf(o,a,u),i=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&o.isPropagationStopped())break e;Gf(o,a,u),i=l}}}if(Ws)throw e=Ou,Ws=!1,Ou=null,e}function ee(e,t){var n=t[Uu];n===void 0&&(n=t[Uu]=new Set);var r=e+"__bubble";n.has(r)||(W0(t,e,2,!1),n.add(r))}function Pl(e,t,n){var r=0;t&&(r|=4),W0(n,e,r,t)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[Zi]){e[Zi]=!0,Jm.forEach(function(n){n!=="selectionchange"&&(y2.has(n)||Pl(n,!1,e),Pl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zi]||(t[Zi]=!0,Pl("selectionchange",!1,t))}}function W0(e,t,n,r){switch(T0(t)){case 1:var o=Lx;break;case 4:o=Mx;break;default:o=Zc}n=o.bind(null,t,n,e),o=void 0,!Mu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function El(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;a!==null;){if(s=Yn(a),s===null)return;if(l=s.tag,l===5||l===6){r=i=s;continue e}a=a.parentNode}}r=r.return}p0(function(){var u=i,d=qc(n),f=[];e:{var h=U0.get(e);if(h!==void 0){var g=td,y=e;switch(e){case"keypress":if(bs(n)===0)break e;case"keydown":case"keyup":g=Kx;break;case"focusin":y="focus",g=wl;break;case"focusout":y="blur",g=wl;break;case"beforeblur":case"afterblur":g=wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Qx;break;case _0:case I0:case V0:g=Fx;break;case B0:g=Jx;break;case"scroll":g=Ox;break;case"wheel":g=e2;break;case"copy":case"cut":case"paste":g=Ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Nf}var v=(t&4)!==0,w=!v&&e==="scroll",x=v?h!==null?h+"Capture":null:h;v=[];for(var m=u,p;m!==null;){p=m;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,x!==null&&(S=oi(m,x),S!=null&&v.push(di(m,S,p)))),w)break;m=m.return}0<v.length&&(h=new g(h,y,null,n,d),f.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==Au&&(y=n.relatedTarget||n.fromElement)&&(Yn(y)||y[Yt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Yn(y):null,y!==null&&(w=pr(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=$f,S="onMouseLeave",x="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Nf,S="onPointerLeave",x="onPointerEnter",m="pointer"),w=g==null?h:Mr(g),p=y==null?h:Mr(y),h=new v(S,m+"leave",g,n,d),h.target=w,h.relatedTarget=p,S=null,Yn(d)===u&&(v=new v(x,m+"enter",y,n,d),v.target=p,v.relatedTarget=w,S=v),w=S,g&&y)t:{for(v=g,x=y,m=0,p=v;p;p=xr(p))m++;for(p=0,S=x;S;S=xr(S))p++;for(;0<m-p;)v=xr(v),m--;for(;0<p-m;)x=xr(x),p--;for(;m--;){if(v===x||x!==null&&v===x.alternate)break t;v=xr(v),x=xr(x)}v=null}else v=null;g!==null&&Kf(f,h,g,v,!1),y!==null&&w!==null&&Kf(f,w,y,v,!0)}}e:{if(h=u?Mr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=a2;else if(_f(h))if($0)C=d2;else{C=u2;var E=l2}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=c2);if(C&&(C=C(e,u))){O0(f,C,n,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(E=u?Mr(u):window,e){case"focusin":(_f(E)||E.contentEditable==="true")&&(Ar=E,zu=u,Go=null);break;case"focusout":Go=zu=Ar=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Hf(f,n,d);break;case"selectionchange":if(p2)break;case"keydown":case"keyup":Hf(f,n,d)}var b;if(rd)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rr?L0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(A0&&n.locale!=="ko"&&(Rr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rr&&(b=R0()):(cn=d,ed="value"in cn?cn.value:cn.textContent,Rr=!0)),E=Qs(u,T),0<E.length&&(T=new Df(T,e,null,n,d),f.push({event:T,listeners:E}),b?T.data=b:(b=M0(n),b!==null&&(T.data=b)))),(b=n2?r2(e,n):o2(e,n))&&(u=Qs(u,"onBeforeInput"),0<u.length&&(d=new Df("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=b))}H0(f,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=oi(e,n),i!=null&&r.unshift(di(e,i,o)),i=oi(e,t),i!=null&&r.push(di(e,i,o))),e=e.return}return r}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kf(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,o?(l=oi(n,i),l!=null&&s.unshift(di(n,l,a))):o||(l=oi(n,i),l!=null&&s.push(di(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var v2=/\r\n?/g,x2=/\u0000|\uFFFD/g;function Yf(e){return(typeof e=="string"?e:""+e).replace(v2,`
`).replace(x2,"")}function es(e,t,n){if(t=Yf(t),Yf(e)!==t&&n)throw Error(R(425))}function Xs(){}var _u=null,Iu=null;function Vu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,w2=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,S2=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(k2)}:Bu;function k2(e){setTimeout(function(){throw e})}function Tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ai(t)}function vn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),Ot="__reactFiber$"+po,fi="__reactProps$"+po,Yt="__reactContainer$"+po,Uu="__reactEvents$"+po,C2="__reactListeners$"+po,b2="__reactHandles$"+po;function Yn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qf(e);e!==null;){if(n=e[Ot])return n;e=Qf(e)}return t}e=n,n=e.parentNode}return null}function Li(e){return e=e[Ot]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function $a(e){return e[fi]||null}var Hu=[],Or=-1;function On(e){return{current:e}}function ne(e){0>Or||(e.current=Hu[Or],Hu[Or]=null,Or--)}function Z(e,t){Or++,Hu[Or]=e.current,e.current=t}var Tn={},De=On(Tn),He=On(!1),or=Tn;function Zr(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function We(e){return e=e.childContextTypes,e!=null}function Js(){ne(He),ne(De)}function Xf(e,t,n){if(De.current!==Tn)throw Error(R(168));Z(De,t),Z(He,n)}function G0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,lx(e)||"Unknown",o));return le({},n,r)}function Zs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,or=De.current,Z(De,e),Z(He,He.current),!0}function Jf(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=G0(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,ne(He),ne(De),Z(De,e)):ne(He),Z(He,n)}var It=null,Da=!1,Rl=!1;function K0(e){It===null?It=[e]:It.push(e)}function j2(e){Da=!0,K0(e)}function $n(){if(!Rl&&It!==null){Rl=!0;var e=0,t=Q;try{var n=It;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Da=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),v0(Qc,$n),o}finally{Q=t,Rl=!1}}return null}var $r=[],Dr=0,ea=null,ta=0,ut=[],ct=0,ir=null,Vt=1,Bt="";function Hn(e,t){$r[Dr++]=ta,$r[Dr++]=ea,ea=e,ta=t}function Y0(e,t,n){ut[ct++]=Vt,ut[ct++]=Bt,ut[ct++]=ir,ir=e;var r=Vt;e=Bt;var o=32-St(r)-1;r&=~(1<<o),n+=1;var i=32-St(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Vt=1<<32-St(t)+o|n<<o|r,Bt=i+e}else Vt=1<<i|n<<o|r,Bt=e}function id(e){e.return!==null&&(Hn(e,1),Y0(e,1,0))}function sd(e){for(;e===ea;)ea=$r[--Dr],$r[Dr]=null,ta=$r[--Dr],$r[Dr]=null;for(;e===ir;)ir=ut[--ct],ut[ct]=null,Bt=ut[--ct],ut[ct]=null,Vt=ut[--ct],ut[ct]=null}var tt=null,et=null,oe=!1,wt=null;function q0(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=vn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Vt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function Wu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Gu(e){if(oe){var t=et;if(t){var n=t;if(!Zf(e,t)){if(Wu(e))throw Error(R(418));t=vn(n.nextSibling);var r=tt;t&&Zf(e,t)?q0(r,n):(e.flags=e.flags&-4097|2,oe=!1,tt=e)}}else{if(Wu(e))throw Error(R(418));e.flags=e.flags&-4097|2,oe=!1,tt=e}}}function eh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function ts(e){if(e!==tt)return!1;if(!oe)return eh(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Vu(e.type,e.memoizedProps)),t&&(t=et)){if(Wu(e))throw Q0(),Error(R(418));for(;t;)q0(e,t),t=vn(t.nextSibling)}if(eh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=vn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?vn(e.stateNode.nextSibling):null;return!0}function Q0(){for(var e=et;e;)e=vn(e.nextSibling)}function eo(){et=tt=null,oe=!1}function ad(e){wt===null?wt=[e]:wt.push(e)}var P2=Jt.ReactCurrentBatchConfig;function jo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var a=o.refs;s===null?delete a[i]:a[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function ns(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function th(e){var t=e._init;return t(e._payload)}function X0(e){function t(x,m){if(e){var p=x.deletions;p===null?(x.deletions=[m],x.flags|=16):p.push(m)}}function n(x,m){if(!e)return null;for(;m!==null;)t(x,m),m=m.sibling;return null}function r(x,m){for(x=new Map;m!==null;)m.key!==null?x.set(m.key,m):x.set(m.index,m),m=m.sibling;return x}function o(x,m){return x=kn(x,m),x.index=0,x.sibling=null,x}function i(x,m,p){return x.index=p,e?(p=x.alternate,p!==null?(p=p.index,p<m?(x.flags|=2,m):p):(x.flags|=2,m)):(x.flags|=1048576,m)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function a(x,m,p,S){return m===null||m.tag!==6?(m=Nl(p,x.mode,S),m.return=x,m):(m=o(m,p),m.return=x,m)}function l(x,m,p,S){var C=p.type;return C===Tr?d(x,m,p.props.children,S,p.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&th(C)===m.type)?(S=o(m,p.props),S.ref=jo(x,m,p),S.return=x,S):(S=Ls(p.type,p.key,p.props,null,x.mode,S),S.ref=jo(x,m,p),S.return=x,S)}function u(x,m,p,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=zl(p,x.mode,S),m.return=x,m):(m=o(m,p.children||[]),m.return=x,m)}function d(x,m,p,S,C){return m===null||m.tag!==7?(m=tr(p,x.mode,S,C),m.return=x,m):(m=o(m,p),m.return=x,m)}function f(x,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Nl(""+m,x.mode,p),m.return=x,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:return p=Ls(m.type,m.key,m.props,null,x.mode,p),p.ref=jo(x,null,m),p.return=x,p;case Er:return m=zl(m,x.mode,p),m.return=x,m;case rn:var S=m._init;return f(x,S(m._payload),p)}if(zo(m)||wo(m))return m=tr(m,x.mode,p,null),m.return=x,m;ns(x,m)}return null}function h(x,m,p,S){var C=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:a(x,m,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wi:return p.key===C?l(x,m,p,S):null;case Er:return p.key===C?u(x,m,p,S):null;case rn:return C=p._init,h(x,m,C(p._payload),S)}if(zo(p)||wo(p))return C!==null?null:d(x,m,p,S,null);ns(x,p)}return null}function g(x,m,p,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return x=x.get(p)||null,a(m,x,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wi:return x=x.get(S.key===null?p:S.key)||null,l(m,x,S,C);case Er:return x=x.get(S.key===null?p:S.key)||null,u(m,x,S,C);case rn:var E=S._init;return g(x,m,p,E(S._payload),C)}if(zo(S)||wo(S))return x=x.get(p)||null,d(m,x,S,C,null);ns(m,S)}return null}function y(x,m,p,S){for(var C=null,E=null,b=m,T=m=0,O=null;b!==null&&T<p.length;T++){b.index>T?(O=b,b=null):O=b.sibling;var L=h(x,b,p[T],S);if(L===null){b===null&&(b=O);break}e&&b&&L.alternate===null&&t(x,b),m=i(L,m,T),E===null?C=L:E.sibling=L,E=L,b=O}if(T===p.length)return n(x,b),oe&&Hn(x,T),C;if(b===null){for(;T<p.length;T++)b=f(x,p[T],S),b!==null&&(m=i(b,m,T),E===null?C=b:E.sibling=b,E=b);return oe&&Hn(x,T),C}for(b=r(x,b);T<p.length;T++)O=g(b,x,T,p[T],S),O!==null&&(e&&O.alternate!==null&&b.delete(O.key===null?T:O.key),m=i(O,m,T),E===null?C=O:E.sibling=O,E=O);return e&&b.forEach(function(H){return t(x,H)}),oe&&Hn(x,T),C}function v(x,m,p,S){var C=wo(p);if(typeof C!="function")throw Error(R(150));if(p=C.call(p),p==null)throw Error(R(151));for(var E=C=null,b=m,T=m=0,O=null,L=p.next();b!==null&&!L.done;T++,L=p.next()){b.index>T?(O=b,b=null):O=b.sibling;var H=h(x,b,L.value,S);if(H===null){b===null&&(b=O);break}e&&b&&H.alternate===null&&t(x,b),m=i(H,m,T),E===null?C=H:E.sibling=H,E=H,b=O}if(L.done)return n(x,b),oe&&Hn(x,T),C;if(b===null){for(;!L.done;T++,L=p.next())L=f(x,L.value,S),L!==null&&(m=i(L,m,T),E===null?C=L:E.sibling=L,E=L);return oe&&Hn(x,T),C}for(b=r(x,b);!L.done;T++,L=p.next())L=g(b,x,T,L.value,S),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?T:L.key),m=i(L,m,T),E===null?C=L:E.sibling=L,E=L);return e&&b.forEach(function(W){return t(x,W)}),oe&&Hn(x,T),C}function w(x,m,p,S){if(typeof p=="object"&&p!==null&&p.type===Tr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Wi:e:{for(var C=p.key,E=m;E!==null;){if(E.key===C){if(C=p.type,C===Tr){if(E.tag===7){n(x,E.sibling),m=o(E,p.props.children),m.return=x,x=m;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===rn&&th(C)===E.type){n(x,E.sibling),m=o(E,p.props),m.ref=jo(x,E,p),m.return=x,x=m;break e}n(x,E);break}else t(x,E);E=E.sibling}p.type===Tr?(m=tr(p.props.children,x.mode,S,p.key),m.return=x,x=m):(S=Ls(p.type,p.key,p.props,null,x.mode,S),S.ref=jo(x,m,p),S.return=x,x=S)}return s(x);case Er:e:{for(E=p.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(x,m.sibling),m=o(m,p.children||[]),m.return=x,x=m;break e}else{n(x,m);break}else t(x,m);m=m.sibling}m=zl(p,x.mode,S),m.return=x,x=m}return s(x);case rn:return E=p._init,w(x,m,E(p._payload),S)}if(zo(p))return y(x,m,p,S);if(wo(p))return v(x,m,p,S);ns(x,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(x,m.sibling),m=o(m,p),m.return=x,x=m):(n(x,m),m=Nl(p,x.mode,S),m.return=x,x=m),s(x)):n(x,m)}return w}var to=X0(!0),J0=X0(!1),na=On(null),ra=null,Nr=null,ld=null;function ud(){ld=Nr=ra=null}function cd(e){var t=na.current;ne(na),e._currentValue=t}function Ku(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qr(e,t){ra=e,ld=Nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ue=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(ld!==e)if(e={context:e,memoizedValue:t,next:null},Nr===null){if(ra===null)throw Error(R(308));Nr=e,ra.dependencies={lanes:0,firstContext:e}}else Nr=Nr.next=e;return t}var qn=null;function dd(e){qn===null?qn=[e]:qn.push(e)}function Z0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,dd(t)):(n.next=o.next,o.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function fd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,n)}return o=r.interleaved,o===null?(t.next=t,dd(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,n)}function js(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xc(e,n)}}function nh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oa(e,t,n,r){var o=e.updateQueue;on=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?i=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var f=o.baseState;s=0,d=u=l=null,a=i;do{var h=a.lane,g=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(h=t,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(g,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,f,h):y,h==null)break e;f=le({},f,h);break e;case 2:on=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=f):d=d.next=g,s|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(d===null&&(l=f),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ar|=s,e.lanes=s,e.memoizedState=f}}function rh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var Mi={},Dt=On(Mi),hi=On(Mi),pi=On(Mi);function Qn(e){if(e===Mi)throw Error(R(174));return e}function hd(e,t){switch(Z(pi,t),Z(hi,e),Z(Dt,Mi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Eu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Eu(t,e)}ne(Dt),Z(Dt,t)}function no(){ne(Dt),ne(hi),ne(pi)}function tg(e){Qn(pi.current);var t=Qn(Dt.current),n=Eu(t,e.type);t!==n&&(Z(hi,e),Z(Dt,n))}function pd(e){hi.current===e&&(ne(Dt),ne(hi))}var ie=On(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function md(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var Ps=Jt.ReactCurrentDispatcher,Ll=Jt.ReactCurrentBatchConfig,sr=0,ae=null,ve=null,ke=null,sa=!1,Ko=!1,mi=0,E2=0;function Ae(){throw Error(R(321))}function gd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function yd(e,t,n,r,o,i){if(sr=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ps.current=e===null||e.memoizedState===null?L2:M2,e=n(r,o),Ko){i=0;do{if(Ko=!1,mi=0,25<=i)throw Error(R(301));i+=1,ke=ve=null,t.updateQueue=null,Ps.current=O2,e=n(r,o)}while(Ko)}if(Ps.current=aa,t=ve!==null&&ve.next!==null,sr=0,ke=ve=ae=null,sa=!1,t)throw Error(R(300));return e}function vd(){var e=mi!==0;return mi=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=e:ke=ke.next=e,ke}function pt(){if(ve===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=ke===null?ae.memoizedState:ke.next;if(t!==null)ke=t,ve=e;else{if(e===null)throw Error(R(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},ke===null?ae.memoizedState=ke=e:ke=ke.next=e}return ke}function gi(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ve,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=s=null,l=null,u=i;do{var d=u.lane;if((sr&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,ae.lanes|=d,ar|=d}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=a,bt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,ar|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ol(e){var t=pt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);bt(i,t.memoizedState)||(Ue=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ng(){}function rg(e,t){var n=ae,r=pt(),o=t(),i=!bt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ue=!0),r=r.queue,xd(sg.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,yi(9,ig.bind(null,n,r,o,t),void 0,null),je===null)throw Error(R(349));sr&30||og(n,t,o)}return o}function og(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ig(e,t,n,r){t.value=n,t.getSnapshot=r,ag(t)&&lg(e)}function sg(e,t,n){return n(function(){ag(t)&&lg(e)})}function ag(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function lg(e){var t=qt(e,1);t!==null&&kt(t,e,1,-1)}function oh(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:e},t.queue=e,e=e.dispatch=A2.bind(null,ae,e),[t.memoizedState,e]}function yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ug(){return pt().memoizedState}function Es(e,t,n,r){var o=Mt();ae.flags|=e,o.memoizedState=yi(1|t,n,void 0,r===void 0?null:r)}function Na(e,t,n,r){var o=pt();r=r===void 0?null:r;var i=void 0;if(ve!==null){var s=ve.memoizedState;if(i=s.destroy,r!==null&&gd(r,s.deps)){o.memoizedState=yi(t,n,i,r);return}}ae.flags|=e,o.memoizedState=yi(1|t,n,i,r)}function ih(e,t){return Es(8390656,8,e,t)}function xd(e,t){return Na(2048,8,e,t)}function cg(e,t){return Na(4,2,e,t)}function dg(e,t){return Na(4,4,e,t)}function fg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hg(e,t,n){return n=n!=null?n.concat([e]):null,Na(4,4,fg.bind(null,t,e),n)}function wd(){}function pg(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function mg(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gg(e,t,n){return sr&21?(bt(n,t)||(n=S0(),ae.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n)}function T2(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Ll.transition;Ll.transition={};try{e(!1),t()}finally{Q=n,Ll.transition=r}}function yg(){return pt().memoizedState}function R2(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vg(e))xg(t,n);else if(n=Z0(e,t,n,r),n!==null){var o=Fe();kt(n,e,r,o),wg(n,t,r)}}function A2(e,t,n){var r=Sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(e))xg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,a=i(s,n);if(o.hasEagerState=!0,o.eagerState=a,bt(a,s)){var l=t.interleaved;l===null?(o.next=o,dd(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=Z0(e,t,o,r),n!==null&&(o=Fe(),kt(n,e,r,o),wg(n,t,r))}}function vg(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function xg(e,t){Ko=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xc(e,n)}}var aa={readContext:ht,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},L2={readContext:ht,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:ih,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,fg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R2.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:oh,useDebugValue:wd,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=oh(!1),t=e[0];return e=T2.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=Mt();if(oe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),je===null)throw Error(R(349));sr&30||og(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ih(sg.bind(null,r,i,e),[e]),r.flags|=2048,yi(9,ig.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mt(),t=je.identifierPrefix;if(oe){var n=Bt,r=Vt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=mi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=E2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M2={readContext:ht,useCallback:pg,useContext:ht,useEffect:xd,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:mg,useReducer:Ml,useRef:ug,useState:function(){return Ml(gi)},useDebugValue:wd,useDeferredValue:function(e){var t=pt();return gg(t,ve.memoizedState,e)},useTransition:function(){var e=Ml(gi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:ng,useSyncExternalStore:rg,useId:yg,unstable_isNewReconciler:!1},O2={readContext:ht,useCallback:pg,useContext:ht,useEffect:xd,useImperativeHandle:hg,useInsertionEffect:cg,useLayoutEffect:dg,useMemo:mg,useReducer:Ol,useRef:ug,useState:function(){return Ol(gi)},useDebugValue:wd,useDeferredValue:function(e){var t=pt();return ve===null?t.memoizedState=e:gg(t,ve.memoizedState,e)},useTransition:function(){var e=Ol(gi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:ng,useSyncExternalStore:rg,useId:yg,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var za={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=Sn(e),i=Ht(r,o);i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,o),t!==null&&(kt(t,e,o,r),js(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),o=Sn(e),i=Ht(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,o),t!==null&&(kt(t,e,o,r),js(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=Sn(e),o=Ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=xn(e,o,r),t!==null&&(kt(t,e,r,n),js(t,e,r))}};function sh(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(o,i):!0}function Sg(e,t,n){var r=!1,o=Tn,i=t.contextType;return typeof i=="object"&&i!==null?i=ht(i):(o=We(t)?or:De.current,r=t.contextTypes,i=(r=r!=null)?Zr(e,o):Tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ah(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&za.enqueueReplaceState(t,t.state,null)}function qu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},fd(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ht(i):(i=We(t)?or:De.current,o.context=Zr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yu(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&za.enqueueReplaceState(o,o.state,null),oa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ro(e,t){try{var n="",r=t;do n+=ax(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function $l(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Qu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $2=typeof WeakMap=="function"?WeakMap:Map;function kg(e,t,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ua||(ua=!0,sc=r),Qu(e,t)},n}function Cg(e,t,n){n=Ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Qu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qu(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function lh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $2;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Y2.bind(null,e,t,n),t.then(e,e))}function uh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ch(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ht(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var D2=Jt.ReactCurrentOwner,Ue=!1;function ze(e,t,n,r){t.child=e===null?J0(t,null,n,r):to(t,e.child,n,r)}function dh(e,t,n,r,o){n=n.render;var i=t.ref;return Qr(t,o),r=yd(e,t,n,r,i,o),n=vd(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(oe&&n&&id(t),t.flags|=1,ze(e,t,r,o),t.child)}function fh(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Td(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,bg(e,t,i,r,o)):(e=Ls(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(s,r)&&e.ref===t.ref)return Qt(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function bg(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(ui(i,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ue=!0);else return t.lanes=e.lanes,Qt(e,t,o)}return Xu(e,t,n,r,o)}function jg(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Fr,Ze),Ze|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Fr,Ze),Ze|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Fr,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Fr,Ze),Ze|=r;return ze(e,t,o,n),t.child}function Pg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Xu(e,t,n,r,o){var i=We(n)?or:De.current;return i=Zr(t,i),Qr(t,o),n=yd(e,t,n,r,i,o),r=vd(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Qt(e,t,o)):(oe&&r&&id(t),t.flags|=1,ze(e,t,n,o),t.child)}function hh(e,t,n,r,o){if(We(n)){var i=!0;Zs(t)}else i=!1;if(Qr(t,o),t.stateNode===null)Ts(e,t),Sg(t,n,r),qu(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=We(n)?or:De.current,u=Zr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ah(t,s,r,u),on=!1;var h=t.memoizedState;s.state=h,oa(t,r,s,o),l=t.memoizedState,a!==r||h!==l||He.current||on?(typeof d=="function"&&(Yu(t,n,d,r),l=t.memoizedState),(a=on||sh(t,n,a,r,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,eg(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:yt(t.type,a),s.props=u,f=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ht(l):(l=We(n)?or:De.current,l=Zr(t,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&ah(t,s,r,l),on=!1,h=t.memoizedState,s.state=h,oa(t,r,s,o);var y=t.memoizedState;a!==f||h!==y||He.current||on?(typeof g=="function"&&(Yu(t,n,g,r),y=t.memoizedState),(u=on||sh(t,n,u,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ju(e,t,n,r,i,o)}function Ju(e,t,n,r,o,i){Pg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Jf(t,n,!1),Qt(e,t,i);r=t.stateNode,D2.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=to(t,e.child,null,i),t.child=to(t,null,a,i)):ze(e,t,a,i),t.memoizedState=r.state,o&&Jf(t,n,!0),t.child}function Eg(e){var t=e.stateNode;t.pendingContext?Xf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Xf(e,t.context,!1),hd(e,t.containerInfo)}function ph(e,t,n,r,o){return eo(),ad(o),t.flags|=256,ze(e,t,n,r),t.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tg(e,t,n){var r=t.pendingProps,o=ie.current,i=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(ie,o&1),e===null)return Gu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ia(s,r,0,null),e=tr(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ec(n),t.memoizedState=Zu,e):Sd(t,s));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return N2(e,t,s,r,a,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,a=o.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=kn(o,l),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kn(a,i):(i=tr(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?ec(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Zu,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sd(e,t){return t=Ia({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rs(e,t,n,r){return r!==null&&ad(r),to(t,e.child,null,n),e=Sd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function N2(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=$l(Error(R(422))),rs(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ia({mode:"visible",children:r.children},o,0,null),i=tr(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&to(t,e.child,null,s),t.child.memoizedState=ec(s),t.memoizedState=Zu,i);if(!(t.mode&1))return rs(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(R(419)),r=$l(i,r,void 0),rs(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ue||a){if(r=je,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),kt(r,e,o,-1))}return Ed(),r=$l(Error(R(421))),rs(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=q2.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,et=vn(o.nextSibling),tt=t,oe=!0,wt=null,e!==null&&(ut[ct++]=Vt,ut[ct++]=Bt,ut[ct++]=ir,Vt=e.id,Bt=e.overflow,ir=t),t=Sd(t,r.children),t.flags|=4096,t)}function mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ku(e.return,t,n)}function Dl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Rg(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,n,t);else if(e.tag===19)mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(ie,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Dl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Dl(t,!0,n,null,i);break;case"together":Dl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ts(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function z2(e,t,n){switch(t.tag){case 3:Eg(t),eo();break;case 5:tg(t);break;case 1:We(t.type)&&Zs(t);break;case 4:hd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(na,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Tg(e,t,n):(Z(ie,ie.current&1),e=Qt(e,t,n),e!==null?e.sibling:null);Z(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rg(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,jg(e,t,n)}return Qt(e,t,n)}var Ag,tc,Lg,Mg;Ag=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tc=function(){};Lg=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Qn(Dt.current);var i=null;switch(n){case"input":o=Cu(e,o),r=Cu(e,r),i=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),i=[];break;case"textarea":o=Pu(e,o),r=Pu(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xs)}Tu(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",e),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Mg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Po(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function F2(e,t,n){var r=t.pendingProps;switch(sd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return We(t.type)&&Js(),Le(t),null;case 3:return r=t.stateNode,no(),ne(He),ne(De),md(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ts(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(uc(wt),wt=null))),tc(e,t),Le(t),null;case 5:pd(t);var o=Qn(pi.current);if(n=t.type,e!==null&&t.stateNode!=null)Lg(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Le(t),null}if(e=Qn(Dt.current),ts(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[fi]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<_o.length;o++)ee(_o[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":bf(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":Pf(r,i),ee("invalid",r)}Tu(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var a=i[s];s==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&es(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&es(r.textContent,a,e),o=["children",""+a]):ni.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ee("scroll",r)}switch(n){case"input":Gi(r),jf(r,i,!0);break;case"textarea":Gi(r),Ef(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Xs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=s0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ot]=t,e[fi]=r,Ag(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ru(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<_o.length;o++)ee(_o[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":bf(e,r),o=Cu(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Pf(e,r),o=Pu(e,r),ee("invalid",e);break;default:o=r}Tu(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?u0(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a0(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ri(e,l):typeof l=="number"&&ri(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ni.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ee("scroll",e):l!=null&&Wc(e,i,l,s))}switch(n){case"input":Gi(e),jf(e,r,!1);break;case"textarea":Gi(e),Ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Mg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Qn(pi.current),Qn(Dt.current),ts(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:es(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&es(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Le(t),null;case 13:if(ne(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&et!==null&&t.mode&1&&!(t.flags&128))Q0(),eo(),t.flags|=98560,i=!1;else if(i=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Ot]=t}else eo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else wt!==null&&(uc(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?we===0&&(we=3):Ed())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return no(),tc(e,t),e===null&&ci(t.stateNode.containerInfo),Le(t),null;case 10:return cd(t.type._context),Le(t),null;case 17:return We(t.type)&&Js(),Le(t),null;case 19:if(ne(ie),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Po(i,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ia(e),s!==null){for(t.flags|=128,Po(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(ie,ie.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>oo&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304)}else{if(!r)if(e=ia(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!oe)return Le(t),null}else 2*ce()-i.renderingStartTime>oo&&n!==1073741824&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=ie.current,Z(ie,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Pd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ze&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function _2(e,t){switch(sd(t),t.tag){case 1:return We(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return no(),ne(He),ne(De),md(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pd(t),null;case 13:if(ne(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(ie),null;case 4:return no(),null;case 10:return cd(t.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var os=!1,Oe=!1,I2=typeof WeakSet=="function"?WeakSet:Set,M=null;function zr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function nc(e,t,n){try{n()}catch(r){ue(e,t,r)}}var gh=!1;function V2(e,t){if(_u=Ys,e=z0(),od(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var g;f!==n||o!==0&&f.nodeType!==3||(a=s+o),f!==i||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)h=f,f=g;for(;;){if(f===e)break t;if(h===n&&++u===o&&(a=s),h===i&&++d===r&&(l=s),(g=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:e,selectionRange:n},Ys=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,x=t.stateNode,m=x.getSnapshotBeforeUpdate(t.elementType===t.type?v:yt(t.type,v),w);x.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){ue(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=gh,gh=!1,y}function Yo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&nc(t,n,i)}o=o.next}while(o!==r)}}function Fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Og(e){var t=e.alternate;t!==null&&(e.alternate=null,Og(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[fi],delete t[Uu],delete t[C2],delete t[b2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $g(e){return e.tag===5||e.tag===3||e.tag===4}function yh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xs));else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ic(e,t,n),e=e.sibling;e!==null;)ic(e,t,n),e=e.sibling}var Ee=null,vt=!1;function en(e,t,n){for(n=n.child;n!==null;)Dg(e,t,n),n=n.sibling}function Dg(e,t,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Aa,n)}catch{}switch(n.tag){case 5:Oe||zr(n,t);case 6:var r=Ee,o=vt;Ee=null,en(e,t,n),Ee=r,vt=o,Ee!==null&&(vt?(e=Ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(vt?(e=Ee,n=n.stateNode,e.nodeType===8?Tl(e.parentNode,n):e.nodeType===1&&Tl(e,n),ai(e)):Tl(Ee,n.stateNode));break;case 4:r=Ee,o=vt,Ee=n.stateNode.containerInfo,vt=!0,en(e,t,n),Ee=r,vt=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&nc(n,t,s),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Oe&&(zr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,t,a)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,en(e,t,n),Oe=r):en(e,t,n);break;default:en(e,t,n)}}function vh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I2),t.forEach(function(r){var o=Q2.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function gt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ee=a.stateNode,vt=!1;break e;case 3:Ee=a.stateNode.containerInfo,vt=!0;break e;case 4:Ee=a.stateNode.containerInfo,vt=!0;break e}a=a.return}if(Ee===null)throw Error(R(160));Dg(i,s,o),Ee=null,vt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ng(t,e),t=t.sibling}function Ng(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Rt(e),r&4){try{Yo(3,e,e.return),Fa(3,e)}catch(v){ue(e,e.return,v)}try{Yo(5,e,e.return)}catch(v){ue(e,e.return,v)}}break;case 1:gt(t,e),Rt(e),r&512&&n!==null&&zr(n,n.return);break;case 5:if(gt(t,e),Rt(e),r&512&&n!==null&&zr(n,n.return),e.flags&32){var o=e.stateNode;try{ri(o,"")}catch(v){ue(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&o0(o,i),Ru(a,s);var u=Ru(a,i);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?u0(o,f):d==="dangerouslySetInnerHTML"?a0(o,f):d==="children"?ri(o,f):Wc(o,d,f,u)}switch(a){case"input":bu(o,i);break;case"textarea":i0(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Gr(o,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Gr(o,!!i.multiple,i.defaultValue,!0):Gr(o,!!i.multiple,i.multiple?[]:"",!1))}o[fi]=i}catch(v){ue(e,e.return,v)}}break;case 6:if(gt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){ue(e,e.return,v)}}break;case 3:if(gt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(t.containerInfo)}catch(v){ue(e,e.return,v)}break;case 4:gt(t,e),Rt(e);break;case 13:gt(t,e),Rt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(bd=ce())),r&4&&vh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||d,gt(t,e),Oe=u):gt(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(f=M=d;M!==null;){switch(h=M,g=h.child,h.tag){case 0:case 11:case 14:case 15:Yo(4,h,h.return);break;case 1:zr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:zr(h,h.return);break;case 22:if(h.memoizedState!==null){wh(f);continue}}g!==null?(g.return=h,M=g):wh(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l0("display",s))}catch(v){ue(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ue(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:gt(t,e),Rt(e),r&4&&vh(e);break;case 21:break;default:gt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($g(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ri(o,""),r.flags&=-33);var i=yh(e);ic(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,a=yh(e);oc(e,a,s);break;default:throw Error(R(161))}}catch(l){ue(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B2(e,t,n){M=e,zg(e)}function zg(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||os;if(!s){var a=o.alternate,l=a!==null&&a.memoizedState!==null||Oe;a=os;var u=Oe;if(os=s,(Oe=l)&&!u)for(M=o;M!==null;)s=M,l=s.child,s.tag===22&&s.memoizedState!==null?Sh(o):l!==null?(l.return=s,M=l):Sh(o);for(;i!==null;)M=i,zg(i),i=i.sibling;M=o,os=a,Oe=u}xh(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,M=i):xh(e)}}function xh(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Oe||Fa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&rh(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}rh(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ai(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Oe||t.flags&512&&rc(t)}catch(h){ue(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function wh(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function Sh(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fa(4,t)}catch(l){ue(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){ue(t,o,l)}}var i=t.return;try{rc(t)}catch(l){ue(t,i,l)}break;case 5:var s=t.return;try{rc(t)}catch(l){ue(t,s,l)}}}catch(l){ue(t,t.return,l)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var U2=Math.ceil,la=Jt.ReactCurrentDispatcher,kd=Jt.ReactCurrentOwner,ft=Jt.ReactCurrentBatchConfig,K=0,je=null,me=null,Te=0,Ze=0,Fr=On(0),we=0,vi=null,ar=0,_a=0,Cd=0,qo=null,Be=null,bd=0,oo=1/0,Ft=null,ua=!1,sc=null,wn=null,is=!1,dn=null,ca=0,Qo=0,ac=null,Rs=-1,As=0;function Fe(){return K&6?ce():Rs!==-1?Rs:Rs=ce()}function Sn(e){return e.mode&1?K&2&&Te!==0?Te&-Te:P2.transition!==null?(As===0&&(As=S0()),As):(e=Q,e!==0||(e=window.event,e=e===void 0?16:T0(e.type)),e):1}function kt(e,t,n,r){if(50<Qo)throw Qo=0,ac=null,Error(R(185));Ri(e,n,r),(!(K&2)||e!==je)&&(e===je&&(!(K&2)&&(_a|=n),we===4&&ln(e,Te)),Ge(e,r),n===1&&K===0&&!(t.mode&1)&&(oo=ce()+500,Da&&$n()))}function Ge(e,t){var n=e.callbackNode;Px(e,t);var r=Ks(e,e===je?Te:0);if(r===0)n!==null&&Af(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Af(n),t===1)e.tag===0?j2(kh.bind(null,e)):K0(kh.bind(null,e)),S2(function(){!(K&6)&&$n()}),n=null;else{switch(k0(r)){case 1:n=Qc;break;case 4:n=x0;break;case 16:n=Gs;break;case 536870912:n=w0;break;default:n=Gs}n=Wg(n,Fg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Fg(e,t){if(Rs=-1,As=0,K&6)throw Error(R(327));var n=e.callbackNode;if(Xr()&&e.callbackNode!==n)return null;var r=Ks(e,e===je?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=da(e,r);else{t=r;var o=K;K|=2;var i=Ig();(je!==e||Te!==t)&&(Ft=null,oo=ce()+500,er(e,t));do try{G2();break}catch(a){_g(e,a)}while(!0);ud(),la.current=i,K=o,me!==null?t=0:(je=null,Te=0,t=we)}if(t!==0){if(t===2&&(o=$u(e),o!==0&&(r=o,t=lc(e,o))),t===1)throw n=vi,er(e,0),ln(e,r),Ge(e,ce()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,!(r&30)&&!H2(o)&&(t=da(e,r),t===2&&(i=$u(e),i!==0&&(r=i,t=lc(e,i))),t===1))throw n=vi,er(e,0),ln(e,r),Ge(e,ce()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Wn(e,Be,Ft);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=bd+500-ce(),10<t)){if(Ks(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bu(Wn.bind(null,e,Be,Ft),t);break}Wn(e,Be,Ft);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-St(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U2(r/1960))-r,10<r){e.timeoutHandle=Bu(Wn.bind(null,e,Be,Ft),r);break}Wn(e,Be,Ft);break;case 5:Wn(e,Be,Ft);break;default:throw Error(R(329))}}}return Ge(e,ce()),e.callbackNode===n?Fg.bind(null,e):null}function lc(e,t){var n=qo;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=da(e,t),e!==2&&(t=Be,Be=n,t!==null&&uc(t)),e}function uc(e){Be===null?Be=e:Be.push.apply(Be,e)}function H2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Cd,t&=~_a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function kh(e){if(K&6)throw Error(R(327));Xr();var t=Ks(e,0);if(!(t&1))return Ge(e,ce()),null;var n=da(e,t);if(e.tag!==0&&n===2){var r=$u(e);r!==0&&(t=r,n=lc(e,r))}if(n===1)throw n=vi,er(e,0),ln(e,t),Ge(e,ce()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Be,Ft),Ge(e,ce()),null}function jd(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(oo=ce()+500,Da&&$n())}}function lr(e){dn!==null&&dn.tag===0&&!(K&6)&&Xr();var t=K;K|=1;var n=ft.transition,r=Q;try{if(ft.transition=null,Q=1,e)return e()}finally{Q=r,ft.transition=n,K=t,!(K&6)&&$n()}}function Pd(){Ze=Fr.current,ne(Fr)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w2(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:no(),ne(He),ne(De),md();break;case 5:pd(r);break;case 4:no();break;case 13:ne(ie);break;case 19:ne(ie);break;case 10:cd(r.type._context);break;case 22:case 23:Pd()}n=n.return}if(je=e,me=e=kn(e.current,null),Te=Ze=t,we=0,vi=null,Cd=_a=ar=0,Be=qo=null,qn!==null){for(t=0;t<qn.length;t++)if(n=qn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}qn=null}return e}function _g(e,t){do{var n=me;try{if(ud(),Ps.current=aa,sa){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}sa=!1}if(sr=0,ke=ve=ae=null,Ko=!1,mi=0,kd.current=null,n===null||n.return===null){we=1,vi=t,me=null;break}e:{var i=e,s=n.return,a=n,l=t;if(t=Te,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=uh(s);if(g!==null){g.flags&=-257,ch(g,s,a,i,t),g.mode&1&&lh(i,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if(!(t&1)){lh(i,u,t),Ed();break e}l=Error(R(426))}}else if(oe&&a.mode&1){var w=uh(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ch(w,s,a,i,t),ad(ro(l,a));break e}}i=l=ro(l,a),we!==4&&(we=2),qo===null?qo=[i]:qo.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=kg(i,l,t);nh(i,x);break e;case 1:a=l;var m=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(wn===null||!wn.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Cg(i,a,t);nh(i,S);break e}}i=i.return}while(i!==null)}Bg(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Ig(){var e=la.current;return la.current=aa,e===null?aa:e}function Ed(){(we===0||we===3||we===2)&&(we=4),je===null||!(ar&268435455)&&!(_a&268435455)||ln(je,Te)}function da(e,t){var n=K;K|=2;var r=Ig();(je!==e||Te!==t)&&(Ft=null,er(e,t));do try{W2();break}catch(o){_g(e,o)}while(!0);if(ud(),K=n,la.current=r,me!==null)throw Error(R(261));return je=null,Te=0,we}function W2(){for(;me!==null;)Vg(me)}function G2(){for(;me!==null&&!yx();)Vg(me)}function Vg(e){var t=Hg(e.alternate,e,Ze);e.memoizedProps=e.pendingProps,t===null?Bg(e):me=t,kd.current=null}function Bg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_2(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,me=null;return}}else if(n=F2(n,t,Ze),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);we===0&&(we=5)}function Wn(e,t,n){var r=Q,o=ft.transition;try{ft.transition=null,Q=1,K2(e,t,n,r)}finally{ft.transition=o,Q=r}return null}function K2(e,t,n,r){do Xr();while(dn!==null);if(K&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ex(e,i),e===je&&(me=je=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,Wg(Gs,function(){return Xr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var s=Q;Q=1;var a=K;K|=4,kd.current=null,V2(e,n),Ng(n,e),h2(Iu),Ys=!!_u,Iu=_u=null,e.current=n,B2(n),vx(),K=a,Q=s,ft.transition=i}else e.current=n;if(is&&(is=!1,dn=e,ca=o),i=e.pendingLanes,i===0&&(wn=null),Sx(n.stateNode),Ge(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ua)throw ua=!1,e=sc,sc=null,e;return ca&1&&e.tag!==0&&Xr(),i=e.pendingLanes,i&1?e===ac?Qo++:(Qo=0,ac=e):Qo=0,$n(),null}function Xr(){if(dn!==null){var e=k0(ca),t=ft.transition,n=Q;try{if(ft.transition=null,Q=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,ca=0,K&6)throw Error(R(331));var o=K;for(K|=4,M=e.current;M!==null;){var i=M,s=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Yo(8,d,i)}var f=d.child;if(f!==null)f.return=d,M=f;else for(;M!==null;){d=M;var h=d.sibling,g=d.return;if(Og(d),d===u){M=null;break}if(h!==null){h.return=g,M=h;break}M=g}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}M=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,M=s;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,M=x;break e}M=i.return}}var m=e.current;for(M=m;M!==null;){s=M;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,M=p;else e:for(s=m;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fa(9,a)}}catch(C){ue(a,a.return,C)}if(a===s){M=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,M=S;break e}M=a.return}}if(K=o,$n(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Aa,e)}catch{}r=!0}return r}finally{Q=n,ft.transition=t}}return!1}function Ch(e,t,n){t=ro(n,t),t=kg(e,t,1),e=xn(e,t,1),t=Fe(),e!==null&&(Ri(e,1,t),Ge(e,t))}function ue(e,t,n){if(e.tag===3)Ch(e,e,n);else for(;t!==null;){if(t.tag===3){Ch(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=ro(n,e),e=Cg(t,e,1),t=xn(t,e,1),e=Fe(),t!==null&&(Ri(t,1,e),Ge(t,e));break}}t=t.return}}function Y2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Te&n)===n&&(we===4||we===3&&(Te&130023424)===Te&&500>ce()-bd?er(e,0):Cd|=n),Ge(e,t)}function Ug(e,t){t===0&&(e.mode&1?(t=qi,qi<<=1,!(qi&130023424)&&(qi=4194304)):t=1);var n=Fe();e=qt(e,t),e!==null&&(Ri(e,t,n),Ge(e,n))}function q2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ug(e,n)}function Q2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Ug(e,n)}var Hg;Hg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ue=!1,z2(e,t,n);Ue=!!(e.flags&131072)}else Ue=!1,oe&&t.flags&1048576&&Y0(t,ta,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ts(e,t),e=t.pendingProps;var o=Zr(t,De.current);Qr(t,n),o=yd(null,t,r,e,o,n);var i=vd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,We(r)?(i=!0,Zs(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,fd(t),o.updater=za,t.stateNode=o,o._reactInternals=t,qu(t,r,e,n),t=Ju(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&id(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ts(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=J2(r),e=yt(r,e),o){case 0:t=Xu(null,t,r,e,n);break e;case 1:t=hh(null,t,r,e,n);break e;case 11:t=dh(null,t,r,e,n);break e;case 14:t=fh(null,t,r,yt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Xu(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),hh(e,t,r,o,n);case 3:e:{if(Eg(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,eg(e,t),oa(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ro(Error(R(423)),t),t=ph(e,t,r,n,o);break e}else if(r!==o){o=ro(Error(R(424)),t),t=ph(e,t,r,n,o);break e}else for(et=vn(t.stateNode.containerInfo.firstChild),tt=t,oe=!0,wt=null,n=J0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),r===o){t=Qt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return tg(t),e===null&&Gu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Vu(r,o)?s=null:i!==null&&Vu(r,i)&&(t.flags|=32),Pg(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&Gu(t),null;case 13:return Tg(e,t,n);case 4:return hd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=to(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),dh(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,Z(na,r._currentValue),r._currentValue=s,i!==null)if(bt(i.value,s)){if(i.children===o.children&&!He.current){t=Qt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){s=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ht(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ku(i.return,n,t),a.lanes|=n;break}l=l.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ku(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qr(t,n),o=ht(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),fh(e,t,r,o,n);case 15:return bg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ts(e,t),t.tag=1,We(r)?(e=!0,Zs(t)):e=!1,Qr(t,n),Sg(t,r,o),qu(t,r,o,n),Ju(null,t,r,!0,e,n);case 19:return Rg(e,t,n);case 22:return jg(e,t,n)}throw Error(R(156,t.tag))};function Wg(e,t){return v0(e,t)}function X2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new X2(e,t,n,r)}function Td(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J2(e){if(typeof e=="function")return Td(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kc)return 11;if(e===Yc)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ls(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")Td(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Tr:return tr(n.children,o,i,t);case Gc:s=8,o|=8;break;case xu:return e=dt(12,n,t,o|2),e.elementType=xu,e.lanes=i,e;case wu:return e=dt(13,n,t,o),e.elementType=wu,e.lanes=i,e;case Su:return e=dt(19,n,t,o),e.elementType=Su,e.lanes=i,e;case t0:return Ia(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zm:s=10;break e;case e0:s=9;break e;case Kc:s=11;break e;case Yc:s=14;break e;case rn:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=dt(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function tr(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function Ia(e,t,n,r){return e=dt(22,e,r,t),e.elementType=t0,e.lanes=n,e.stateNode={isHidden:!1},e}function Nl(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function zl(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z2(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Rd(e,t,n,r,o,i,s,a,l){return e=new Z2(e,t,n,a,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(i),e}function ew(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Er,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Gg(e){if(!e)return Tn;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(We(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(We(n))return G0(e,n,t)}return t}function Kg(e,t,n,r,o,i,s,a,l){return e=Rd(n,r,!0,e,o,i,s,a,l),e.context=Gg(null),n=e.current,r=Fe(),o=Sn(n),i=Ht(r,o),i.callback=t??null,xn(n,i,o),e.current.lanes=o,Ri(e,o,r),Ge(e,r),e}function Va(e,t,n,r){var o=t.current,i=Fe(),s=Sn(o);return n=Gg(n),t.context===null?t.context=n:t.pendingContext=n,t=Ht(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(o,t,s),e!==null&&(kt(e,o,s,i),js(e,o,s)),s}function fa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ad(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function tw(){return null}var Yg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ld(e){this._internalRoot=e}Ba.prototype.render=Ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));Va(e,t,null,null)};Ba.prototype.unmount=Ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){Va(null,e,null,null)}),t[Yt]=null}};function Ba(e){this._internalRoot=e}Ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=j0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&E0(e)}};function Md(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jh(){}function nw(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=fa(s);i.call(u)}}var s=Kg(t,r,e,0,null,!1,!1,"",jh);return e._reactRootContainer=s,e[Yt]=s.current,ci(e.nodeType===8?e.parentNode:e),lr(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=fa(l);a.call(u)}}var l=Rd(e,0,!1,null,null,!1,!1,"",jh);return e._reactRootContainer=l,e[Yt]=l.current,ci(e.nodeType===8?e.parentNode:e),lr(function(){Va(t,l,n,r)}),l}function Ha(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var a=o;o=function(){var l=fa(s);a.call(l)}}Va(t,s,e,o)}else s=nw(n,t,e,o,r);return fa(s)}C0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fo(t.pendingLanes);n!==0&&(Xc(t,n|1),Ge(t,ce()),!(K&6)&&(oo=ce()+500,$n()))}break;case 13:lr(function(){var r=qt(e,1);if(r!==null){var o=Fe();kt(r,e,1,o)}}),Ad(e,1)}};Jc=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Fe();kt(t,e,134217728,n)}Ad(e,134217728)}};b0=function(e){if(e.tag===13){var t=Sn(e),n=qt(e,t);if(n!==null){var r=Fe();kt(n,e,t,r)}Ad(e,t)}};j0=function(){return Q};P0=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Lu=function(e,t,n){switch(t){case"input":if(bu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$a(r);if(!o)throw Error(R(90));r0(r),bu(r,o)}}}break;case"textarea":i0(e,n);break;case"select":t=n.value,t!=null&&Gr(e,!!n.multiple,t,!1)}};f0=jd;h0=lr;var rw={usingClientEntryPoint:!1,Events:[Li,Mr,$a,c0,d0,jd]},Eo={findFiberByHostInstance:Yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=g0(e),e===null?null:e.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Aa=ss.inject(ow),$t=ss}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(t))throw Error(R(200));return ew(e,t,null,n)};ot.createRoot=function(e,t){if(!Md(e))throw Error(R(299));var n=!1,r="",o=Yg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Rd(e,1,!1,null,null,n,!1,r,o),e[Yt]=t.current,ci(e.nodeType===8?e.parentNode:e),new Ld(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=g0(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return lr(e)};ot.hydrate=function(e,t,n){if(!Ua(t))throw Error(R(200));return Ha(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Md(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Yg;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Kg(t,null,e,1,n??null,o,!1,i,s),e[Yt]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ba(t)};ot.render=function(e,t,n){if(!Ua(t))throw Error(R(200));return Ha(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(R(40));return e._reactRootContainer?(lr(function(){Ha(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};ot.unstable_batchedUpdates=jd;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ua(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return Ha(e,t,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function qg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qg)}catch(e){console.error(e)}}qg(),qm.exports=ot;var iw=qm.exports,Ph=iw;yu.createRoot=Ph.createRoot,yu.hydrateRoot=Ph.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}var fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fn||(fn={}));const Eh="popstate";function sw(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:s,hash:a}=r.location;return cc("",{pathname:i,search:s,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:ha(o)}return lw(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Od(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function aw(){return Math.random().toString(36).substr(2,8)}function Th(e,t){return{usr:e.state,key:e.key,idx:t}}function cc(e,t,n,r){return n===void 0&&(n=null),xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?mo(t):t,{state:n,key:t&&t.key||r||aw()})}function ha(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function mo(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lw(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,s=o.history,a=fn.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(xi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=fn.Pop;let w=d(),x=w==null?null:w-u;u=w,l&&l({action:a,location:v.location,delta:x})}function h(w,x){a=fn.Push;let m=cc(v.location,w,x);u=d()+1;let p=Th(m,u),S=v.createHref(m);try{s.pushState(p,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}i&&l&&l({action:a,location:v.location,delta:1})}function g(w,x){a=fn.Replace;let m=cc(v.location,w,x);u=d();let p=Th(m,u),S=v.createHref(m);s.replaceState(p,"",S),i&&l&&l({action:a,location:v.location,delta:0})}function y(w){let x=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof w=="string"?w:ha(w);return m=m.replace(/ $/,"%20"),fe(x,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,x)}let v={get action(){return a},get location(){return e(o,s)},listen(w){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(Eh,f),l=w,()=>{o.removeEventListener(Eh,f),l=null}},createHref(w){return t(o,w)},createURL:y,encodeLocation(w){let x=y(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:h,replace:g,go(w){return s.go(w)}};return v}var Rh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rh||(Rh={}));function uw(e,t,n){return n===void 0&&(n="/"),cw(e,t,n)}function cw(e,t,n,r){let o=typeof t=="string"?mo(t):t,i=$d(o.pathname||"/",n);if(i==null)return null;let s=Qg(e);dw(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=Cw(i);a=ww(s[l],u)}return a}function Qg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,s,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};l.relativePath.startsWith("/")&&(fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cn([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Qg(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:vw(u,i.index),routesMeta:d})};return e.forEach((i,s)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,s);else for(let l of Xg(i.path))o(i,s,l)}),t}function Xg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let s=Xg(r.join("/")),a=[];return a.push(...s.map(l=>l===""?i:[i,l].join("/"))),o&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function dw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fw=/^:[\w-]+$/,hw=3,pw=2,mw=1,gw=10,yw=-2,Ah=e=>e==="*";function vw(e,t){let n=e.split("/"),r=n.length;return n.some(Ah)&&(r+=yw),t&&(r+=pw),n.filter(o=>!Ah(o)).reduce((o,i)=>o+(fw.test(i)?hw:i===""?mw:gw),r)}function xw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function ww(e,t,n){let{routesMeta:r}=e,o={},i="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Sw({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(o,f.params),s.push({params:o,pathname:Cn([i,f.pathname]),pathnameBase:Tw(Cn([i,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(i=Cn([i,f.pathnameBase]))}return s}function Sw(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=kw(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],s=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:g}=d;if(h==="*"){let v=a[f]||"";s=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[f];return g&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:s,pattern:e}}function kw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Od(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Cw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Od(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $d(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const bw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jw=e=>bw.test(e);function Pw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?mo(e):e,i;if(n)if(jw(n))i=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Od(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?i=Lh(n.substring(1),"/"):i=Lh(n,t)}else i=t;return{pathname:i,search:Rw(r),hash:Aw(o)}}function Lh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Fl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ew(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Dd(e,t){let n=Ew(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nd(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=mo(e):(o=xi({},e),fe(!o.pathname||!o.pathname.includes("?"),Fl("?","pathname","search",o)),fe(!o.pathname||!o.pathname.includes("#"),Fl("#","pathname","hash",o)),fe(!o.search||!o.search.includes("#"),Fl("#","search","hash",o)));let i=e===""||o.pathname==="",s=i?"/":o.pathname,a;if(s==null)a=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?t[f]:"/"}let l=Pw(o,a),u=s&&s!=="/"&&s.endsWith("/"),d=(i||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),Tw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Rw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Aw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Lw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jg=["post","put","patch","delete"];new Set(Jg);const Mw=["get",...Jg];new Set(Mw);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wi.apply(this,arguments)}const zd=j.createContext(null),Ow=j.createContext(null),Dn=j.createContext(null),Wa=j.createContext(null),Zt=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Zg=j.createContext(null);function $w(e,t){let{relative:n}=t===void 0?{}:t;go()||fe(!1);let{basename:r,navigator:o}=j.useContext(Dn),{hash:i,pathname:s,search:a}=t1(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Cn([r,s])),o.createHref({pathname:l,search:a,hash:i})}function go(){return j.useContext(Wa)!=null}function Oi(){return go()||fe(!1),j.useContext(Wa).location}function e1(e){j.useContext(Dn).static||j.useLayoutEffect(e)}function Nn(){let{isDataRoute:e}=j.useContext(Zt);return e?Yw():Dw()}function Dw(){go()||fe(!1);let e=j.useContext(zd),{basename:t,future:n,navigator:r}=j.useContext(Dn),{matches:o}=j.useContext(Zt),{pathname:i}=Oi(),s=JSON.stringify(Dd(o,n.v7_relativeSplatPath)),a=j.useRef(!1);return e1(()=>{a.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=Nd(u,JSON.parse(s),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Cn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,s,i,e])}function Nw(){let{matches:e}=j.useContext(Zt),t=e[e.length-1];return t?t.params:{}}function t1(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Dn),{matches:o}=j.useContext(Zt),{pathname:i}=Oi(),s=JSON.stringify(Dd(o,r.v7_relativeSplatPath));return j.useMemo(()=>Nd(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function zw(e,t){return Fw(e,t)}function Fw(e,t,n,r){go()||fe(!1);let{navigator:o}=j.useContext(Dn),{matches:i}=j.useContext(Zt),s=i[i.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Oi(),d;if(t){var f;let w=typeof t=="string"?mo(t):t;l==="/"||(f=w.pathname)!=null&&f.startsWith(l)||fe(!1),d=w}else d=u;let h=d.pathname||"/",g=h;if(l!=="/"){let w=l.replace(/^\//,"").split("/");g="/"+h.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=uw(e,{pathname:g}),v=Uw(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Cn([l,o.encodeLocation?o.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Cn([l,o.encodeLocation?o.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return t&&v?j.createElement(Wa.Provider,{value:{location:wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:fn.Pop}},v):v}function _w(){let e=Kw(),t=Lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:o},n):null,null)}const Iw=j.createElement(_w,null);class Vw extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Zt.Provider,{value:this.props.routeContext},j.createElement(Zg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bw(e){let{routeContext:t,match:n,children:r}=e,o=j.useContext(zd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Zt.Provider,{value:t},r)}function Uw(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||fe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:g}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||y){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let g,y=!1,v=null,w=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,v=f.route.errorElement||Iw,l&&(u<0&&h===0?(qw("route-fallback"),y=!0,w=null):u===h&&(y=!0,w=f.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,h+1)),m=()=>{let p;return g?p=v:y?p=w:f.route.Component?p=j.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=d,j.createElement(Bw,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:p})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?j.createElement(Vw,{location:n.location,revalidation:n.revalidation,component:v,error:g,children:m(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):m()},null)}var n1=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(n1||{}),r1=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(r1||{});function Hw(e){let t=j.useContext(zd);return t||fe(!1),t}function Ww(e){let t=j.useContext(Ow);return t||fe(!1),t}function Gw(e){let t=j.useContext(Zt);return t||fe(!1),t}function o1(e){let t=Gw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function Kw(){var e;let t=j.useContext(Zg),n=Ww(),r=o1();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Yw(){let{router:e}=Hw(n1.UseNavigateStable),t=o1(r1.UseNavigateStable),n=j.useRef(!1);return e1(()=>{n.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,wi({fromRouteId:t},i)))},[e,t])}const Mh={};function qw(e,t,n){Mh[e]||(Mh[e]=!0)}function Qw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Xw(e){let{to:t,replace:n,state:r,relative:o}=e;go()||fe(!1);let{future:i,static:s}=j.useContext(Dn),{matches:a}=j.useContext(Zt),{pathname:l}=Oi(),u=Nn(),d=Nd(t,Dd(a,i.v7_relativeSplatPath),l,o==="path"),f=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:o}),[u,f,o,n,r]),null}function Lt(e){fe(!1)}function Jw(e){let{basename:t="/",children:n=null,location:r,navigationType:o=fn.Pop,navigator:i,static:s=!1,future:a}=e;go()&&fe(!1);let l=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:i,static:s,future:wi({v7_relativeSplatPath:!1},a)}),[l,a,i,s]);typeof r=="string"&&(r=mo(r));let{pathname:d="/",search:f="",hash:h="",state:g=null,key:y="default"}=r,v=j.useMemo(()=>{let w=$d(d,l);return w==null?null:{location:{pathname:w,search:f,hash:h,state:g,key:y},navigationType:o}},[l,d,f,h,g,y,o]);return v==null?null:j.createElement(Dn.Provider,{value:u},j.createElement(Wa.Provider,{children:n,value:v}))}function Zw(e){let{children:t,location:n}=e;return zw(dc(t),n)}new Promise(()=>{});function dc(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,o)=>{if(!j.isValidElement(r))return;let i=[...t,o];if(r.type===j.Fragment){n.push.apply(n,dc(r.props.children,i));return}r.type!==Lt&&fe(!1),!r.props.index||!r.props.children||fe(!1);let s={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=dc(r.props.children,i)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fc(){return fc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fc.apply(this,arguments)}function e3(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function t3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function n3(e,t){return e.button===0&&(!t||t==="_self")&&!t3(e)}const r3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],o3="6";try{window.__reactRouterVersion=o3}catch{}const i3="startTransition",Oh=Yv[i3];function s3(e){let{basename:t,children:n,future:r,window:o}=e,i=j.useRef();i.current==null&&(i.current=sw({window:o,v5Compat:!0}));let s=i.current,[a,l]=j.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=j.useCallback(f=>{u&&Oh?Oh(()=>l(f)):l(f)},[l,u]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.useEffect(()=>Qw(r),[r]),j.createElement(Jw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const a3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=j.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:s,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,h=e3(t,r3),{basename:g}=j.useContext(Dn),y,v=!1;if(typeof u=="string"&&l3.test(u)&&(y=u,a3))try{let p=new URL(window.location.href),S=u.startsWith("//")?new URL(p.protocol+u):new URL(u),C=$d(S.pathname,g);S.origin===p.origin&&C!=null?u=C+S.search+S.hash:v=!0}catch{}let w=$w(u,{relative:o}),x=u3(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:o,viewTransition:f});function m(p){r&&r(p),p.defaultPrevented||x(p)}return j.createElement("a",fc({},h,{href:y||w,onClick:v||i?r:m,ref:n,target:l}))});var $h;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})($h||($h={}));var Dh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dh||(Dh={}));function u3(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:s,viewTransition:a}=t===void 0?{}:t,l=Nn(),u=Oi(),d=t1(e,{relative:s});return j.useCallback(f=>{if(n3(f,n)){f.preventDefault();let h=r!==void 0?r:ha(u)===ha(d);l(e,{replace:h,state:o,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,d,r,o,n,e,i,s,a])}var Ce=function(){return Ce=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ce.apply(this,arguments)};function Si(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var te="-ms-",Xo="-moz-",q="-webkit-",i1="comm",Ga="rule",Fd="decl",c3="@import",d3="@namespace",s1="@keyframes",f3="@layer",a1=Math.abs,_d=String.fromCharCode,hc=Object.assign;function h3(e,t){return xe(e,0)^45?(((t<<2^xe(e,0))<<2^xe(e,1))<<2^xe(e,2))<<2^xe(e,3):0}function l1(e){return e.trim()}function _t(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function Ms(e,t,n){return e.indexOf(t,n)}function xe(e,t){return e.charCodeAt(t)|0}function ur(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function u1(e){return e.length}function Io(e,t){return t.push(e),e}function p3(e,t){return e.map(t).join("")}function Nh(e,t){return e.filter(function(n){return!_t(n,t)})}var Ka=1,io=1,c1=0,mt=0,pe=0,yo="";function Ya(e,t,n,r,o,i,s,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ka,column:io,length:s,return:"",siblings:a}}function tn(e,t){return hc(Ya("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function wr(e){for(;e.root;)e=tn(e.root,{children:[e]});Io(e,e.siblings)}function m3(){return pe}function g3(){return pe=mt>0?xe(yo,--mt):0,io--,pe===10&&(io=1,Ka--),pe}function Ct(){return pe=mt<c1?xe(yo,mt++):0,io++,pe===10&&(io=1,Ka++),pe}function hn(){return xe(yo,mt)}function Os(){return mt}function qa(e,t){return ur(yo,e,t)}function ki(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y3(e){return Ka=io=1,c1=xt(yo=e),mt=0,[]}function v3(e){return yo="",e}function _l(e){return l1(qa(mt-1,pc(e===91?e+2:e===40?e+1:e)))}function x3(e){for(;(pe=hn())&&pe<33;)Ct();return ki(e)>2||ki(pe)>3?"":" "}function w3(e,t){for(;--t&&Ct()&&!(pe<48||pe>102||pe>57&&pe<65||pe>70&&pe<97););return qa(e,Os()+(t<6&&hn()==32&&Ct()==32))}function pc(e){for(;Ct();)switch(pe){case e:return mt;case 34:case 39:e!==34&&e!==39&&pc(pe);break;case 40:e===41&&pc(e);break;case 92:Ct();break}return mt}function S3(e,t){for(;Ct()&&e+pe!==57;)if(e+pe===84&&hn()===47)break;return"/*"+qa(t,mt-1)+"*"+_d(e===47?e:Ct())}function k3(e){for(;!ki(hn());)Ct();return qa(e,mt)}function C3(e){return v3($s("",null,null,null,[""],e=y3(e),0,[0],e))}function $s(e,t,n,r,o,i,s,a,l){for(var u=0,d=0,f=s,h=0,g=0,y=0,v=1,w=1,x=1,m=0,p="",S=o,C=i,E=r,b=p;w;)switch(y=m,m=Ct()){case 40:if(y!=108&&xe(b,f-1)==58){Ms(b+=V(_l(m),"&","&\f"),"&\f",a1(u?a[u-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:b+=_l(m);break;case 9:case 10:case 13:case 32:b+=x3(y);break;case 92:b+=w3(Os()-1,7);continue;case 47:switch(hn()){case 42:case 47:Io(b3(S3(Ct(),Os()),t,n,l),l),(ki(y||1)==5||ki(hn()||1)==5)&&xt(b)&&ur(b,-1,void 0)!==" "&&(b+=" ");break;default:b+="/"}break;case 123*v:a[u++]=xt(b)*x;case 125*v:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+d:x==-1&&(b=V(b,/\f/g,"")),g>0&&(xt(b)-f||v===0&&y===47)&&Io(g>32?Fh(b+";",r,n,f-1,l):Fh(V(b," ","")+";",r,n,f-2,l),l);break;case 59:b+=";";default:if(Io(E=zh(b,t,n,u,d,o,a,p,S=[],C=[],f,i),i),m===123)if(d===0)$s(b,t,E,E,S,i,f,a,C);else{switch(h){case 99:if(xe(b,3)===110)break;case 108:if(xe(b,2)===97)break;default:d=0;case 100:case 109:case 115:}d?$s(e,E,E,r&&Io(zh(e,E,E,0,0,o,a,p,o,S=[],f,C),C),o,C,f,a,r?S:C):$s(b,E,E,E,[""],C,0,a,C)}}u=d=g=0,v=x=1,p=b="",f=s;break;case 58:f=1+xt(b),g=y;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&g3()==125)continue}switch(b+=_d(m),m*v){case 38:x=d>0?1:(b+="\f",-1);break;case 44:a[u++]=(xt(b)-1)*x,x=1;break;case 64:hn()===45&&(b+=_l(Ct())),h=hn(),d=f=xt(p=b+=k3(Os())),m++;break;case 45:y===45&&xt(b)==2&&(v=0)}}return i}function zh(e,t,n,r,o,i,s,a,l,u,d,f){for(var h=o-1,g=o===0?i:[""],y=u1(g),v=0,w=0,x=0;v<r;++v)for(var m=0,p=ur(e,h+1,h=a1(w=s[v])),S=e;m<y;++m)(S=l1(w>0?g[m]+" "+p:V(p,/&\f/g,g[m])))&&(l[x++]=S);return Ya(e,t,n,o===0?Ga:a,l,u,d,f)}function b3(e,t,n,r){return Ya(e,t,n,i1,_d(m3()),ur(e,2,-2),0,r)}function Fh(e,t,n,r,o){return Ya(e,t,n,Fd,ur(e,0,r),ur(e,r+1,-1),r,o)}function d1(e,t,n){switch(h3(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return q+e+e;case 4855:return q+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Xo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+Xo+e+te+e+e;case 5936:switch(xe(e,t+11)){case 114:return q+e+te+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+te+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+te+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+te+e+e;case 6165:return q+e+te+"flex-"+e+e;case 5187:return q+e+V(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+te+"flex-$1$2")+e;case 5443:return q+e+te+"flex-item-"+V(e,/flex-|-self/g,"")+(_t(e,/flex-|baseline/)?"":te+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return q+e+te+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+te+V(e,"shrink","negative")+e;case 5292:return q+e+te+V(e,"basis","preferred-size")+e;case 6060:return q+"box-"+V(e,"-grow","")+q+e+te+V(e,"grow","positive")+e;case 4554:return q+V(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+te+"flex-pack:$3"),/space-between/,"justify")+q+e+e;case 4200:if(!_t(e,/flex-|baseline/))return te+"grid-column-align"+ur(e,t)+e;break;case 2592:case 3360:return te+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,_t(r.props,/grid-\w+-end/)})?~Ms(e+(n=n[t].value),"span",0)?e:te+V(e,"-start","")+e+te+"grid-row-span:"+(~Ms(n,"span",0)?_t(n,/\d+/):+_t(n,/\d+/)-+_t(e,/\d+/))+";":te+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return _t(r.props,/grid-\w+-start/)})?e:te+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(xe(e,t+1)){case 109:if(xe(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+Xo+(xe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ms(e,"stretch",0)?d1(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,a,l,u){return te+o+":"+i+u+(s?te+o+"-span:"+(a?l:+l-+i)+u:"")+e});case 4949:if(xe(e,t+6)===121)return V(e,":",":"+q)+e;break;case 6444:switch(xe(e,xe(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(xe(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+te+"$2box$3")+e;case 100:return V(e,":",":"+te)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function pa(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function j3(e,t,n,r){switch(e.type){case f3:if(e.children.length)break;case c3:case d3:case Fd:return e.return=e.return||e.value;case i1:return"";case s1:return e.return=e.value+"{"+pa(e.children,r)+"}";case Ga:if(!xt(e.value=e.props.join(",")))return""}return xt(n=pa(e.children,r))?e.return=e.value+"{"+n+"}":""}function P3(e){var t=u1(e);return function(n,r,o,i){for(var s="",a=0;a<t;a++)s+=e[a](n,r,o,i)||"";return s}}function E3(e){return function(t){t.root||(t=t.return)&&e(t)}}function T3(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Fd:e.return=d1(e.value,e.length,n);return;case s1:return pa([tn(e,{value:V(e.value,"@","@"+q)})],r);case Ga:if(e.length)return p3(n=e.props,function(o){switch(_t(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wr(tn(e,{props:[V(o,/:(read-\w+)/,":"+Xo+"$1")]})),wr(tn(e,{props:[o]})),hc(e,{props:Nh(n,r)});break;case"::placeholder":wr(tn(e,{props:[V(o,/:(plac\w+)/,":"+q+"input-$1")]})),wr(tn(e,{props:[V(o,/:(plac\w+)/,":"+Xo+"$1")]})),wr(tn(e,{props:[V(o,/:(plac\w+)/,te+"input-$1")]})),wr(tn(e,{props:[o]})),hc(e,{props:Nh(n,r)});break}return""})}}var R3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Je={},so=typeof process<"u"&&Je!==void 0&&(Je.REACT_APP_SC_ATTR||Je.SC_ATTR)||"data-styled",f1="active",h1="data-styled-version",Qa="6.3.6",Id=`/*!sc*/
`,ma=typeof window<"u"&&typeof document<"u",Rn=G.createContext===void 0,A3=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Je.REACT_APP_SC_DISABLE_SPEEDY!==""?Je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Je!==void 0&&Je.SC_DISABLE_SPEEDY!==void 0&&Je.SC_DISABLE_SPEEDY!==""&&Je.SC_DISABLE_SPEEDY!=="false"&&Je.SC_DISABLE_SPEEDY),L3={},Xa=Object.freeze([]),ao=Object.freeze({});function p1(e,t,n){return n===void 0&&(n=ao),e.theme!==n.theme&&e.theme||t||n.theme}var m1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),M3=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O3=/(^-|-$)/g;function _h(e){return e.replace(M3,"-").replace(O3,"")}var $3=/(a)(d)/gi,Ih=function(e){return String.fromCharCode(e+(e>25?39:97))};function ga(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ih(t%52)+n;return(Ih(t%52)+n).replace($3,"$1-$2")}var Il,_r=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vd=function(e){return _r(5381,e)};function g1(e){return ga(Vd(e)>>>0)}function D3(e){return e.displayName||e.name||"Component"}function Vl(e){return typeof e=="string"&&!0}var y1=typeof Symbol=="function"&&Symbol.for,v1=y1?Symbol.for("react.memo"):60115,N3=y1?Symbol.for("react.forward_ref"):60112,z3={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},F3={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},x1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_3=((Il={})[N3]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Il[v1]=x1,Il);function Vh(e){return("type"in(t=e)&&t.type.$$typeof)===v1?x1:"$$typeof"in e?_3[e.$$typeof]:z3;var t}var I3=Object.defineProperty,V3=Object.getOwnPropertyNames,Bh=Object.getOwnPropertySymbols,B3=Object.getOwnPropertyDescriptor,U3=Object.getPrototypeOf,Uh=Object.prototype;function w1(e,t,n){if(typeof t!="string"){if(Uh){var r=U3(t);r&&r!==Uh&&w1(e,r,n)}var o=V3(t);Bh&&(o=o.concat(Bh(t)));for(var i=Vh(e),s=Vh(t),a=0;a<o.length;++a){var l=o[a];if(!(l in F3||n&&n[l]||s&&l in s||i&&l in i)){var u=B3(t,l);try{I3(e,l,u)}catch{}}}}return e}function cr(e){return typeof e=="function"}function Bd(e){return typeof e=="object"&&"styledComponentId"in e}function Xn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function mc(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ci(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function gc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ci(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=gc(e[r],t[r]);else if(Ci(t))for(var r in t)e[r]=gc(e[r],t[r]);return e}function Ud(e,t){Object.defineProperty(e,"toString",{value:t})}function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var H3=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw dr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Id);return n},e}(),Ds=new Map,ya=new Map,Ns=1,Ir=function(e){if(Ds.has(e))return Ds.get(e);for(;ya.has(Ns);)Ns++;var t=Ns++;return Ds.set(e,t),ya.set(t,e),t},W3=function(e,t){Ns=t+1,Ds.set(e,t),ya.set(t,e)},G3="style[".concat(so,"][").concat(h1,'="').concat(Qa,'"]'),K3=new RegExp("^".concat(so,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Y3=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},q3=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Id),o=[],i=0,s=r.length;i<s;i++){var a=r[i].trim();if(a){var l=a.match(K3);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(W3(d,u),Y3(e,d,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}},Hh=function(e){for(var t=document.querySelectorAll(G3),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(so)!==f1&&(q3(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Q3(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var S1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var l=Array.from(a.querySelectorAll("style[".concat(so,"]")));return l[l.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(so,f1),r.setAttribute(h1,Qa);var s=Q3();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},X3=function(){function e(t){this.element=S1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),J3=function(){function e(t){this.element=S1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Z3=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Wh=ma,e4={isServer:!ma,useCSSOMInjection:!A3},va=function(){function e(t,n,r){t===void 0&&(t=ao),n===void 0&&(n={});var o=this;this.options=Ce(Ce({},e4),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ma&&Wh&&(Wh=!1,Hh(this)),Ud(this,function(){return function(i){for(var s=i.getTag(),a=s.length,l="",u=function(f){var h=function(x){return ya.get(x)}(f);if(h===void 0)return"continue";var g=i.names.get(h),y=s.getGroup(f);if(g===void 0||!g.size||y.length===0)return"continue";var v="".concat(so,".g").concat(f,'[id="').concat(h,'"]'),w="";g!==void 0&&g.forEach(function(x){x.length>0&&(w+="".concat(x,","))}),l+="".concat(y).concat(v,'{content:"').concat(w,'"}').concat(Id)},d=0;d<a;d++)u(d);return l}(o)})}return e.registerId=function(t){return Ir(t)},e.prototype.rehydrate=function(){!this.server&&ma&&Hh(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ce(Ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Z3(o):r?new X3(o):new J3(o)}(this.options),new H3(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ir(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ir(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ir(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),t4=/&/g,Vr=47;function Gh(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var s=e.charCodeAt(i);if(r!==0||o||s!==Vr||e.charCodeAt(i+1)!==42)if(o)s===42&&e.charCodeAt(i+1)===Vr&&(o=!1,i++);else if(s!==34&&s!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(s===123)n++;else if(s===125&&--n<0)return!0}}else r===0?r=s:r===s&&(r=0);else o=!0,i++}return n!==0||r!==0}function k1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=k1(n.children,t)),n})}function n4(e){var t,n,r,o=ao,i=o.options,s=i===void 0?ao:i,a=o.plugins,l=a===void 0?Xa:a,u=function(h,g,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=l.slice();d.push(function(h){h.type===Ga&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(t4,n).replace(r,u))}),s.prefix&&d.push(T3),d.push(j3);var f=function(h,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),t=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var w=function(p){if(!Gh(p))return p;for(var S=p.length,C="",E=0,b=0,T=0,O=!1,L=0;L<S;L++){var H=p.charCodeAt(L);if(T!==0||O||H!==Vr||p.charCodeAt(L+1)!==42)if(O)H===42&&p.charCodeAt(L+1)===Vr&&(O=!1,L++);else if(H!==34&&H!==39||L!==0&&p.charCodeAt(L-1)===92){if(T===0)if(H===123)b++;else if(H===125){if(--b<0){for(var W=L+1;W<S;){var J=p.charCodeAt(W);if(J===59||J===10)break;W++}W<S&&p.charCodeAt(W)===59&&W++,b=0,L=W-1,E=W;continue}b===0&&(C+=p.substring(E,L+1),E=L+1)}else H===59&&b===0&&(C+=p.substring(E,L+1),E=L+1)}else T===0?T=H:T===H&&(T=0);else O=!0,L++}if(E<S){var Y=p.substring(E);Gh(Y)||(C+=Y)}return C}(function(p){if(p.indexOf("//")===-1)return p;for(var S=p.length,C=[],E=0,b=0,T=0,O=0;b<S;){var L=p.charCodeAt(b);if(L!==34&&L!==39||b!==0&&p.charCodeAt(b-1)===92)if(T===0)if(L===40&&b>=3&&(32|p.charCodeAt(b-1))==108&&(32|p.charCodeAt(b-2))==114&&(32|p.charCodeAt(b-3))==117)O=1,b++;else if(O>0)L===41?O--:L===40&&O++,b++;else if(L===Vr&&b+1<S&&p.charCodeAt(b+1)===Vr){for(b>E&&C.push(p.substring(E,b));b<S&&p.charCodeAt(b)!==10;)b++;E=b}else b++;else b++;else T===0?T=L:T===L&&(T=0),b++}return E===0?p:(E<S&&C.push(p.substring(E)),C.join(""))}(h)),x=C3(y||g?"".concat(y," ").concat(g," { ").concat(w," }"):w);s.namespace&&(x=k1(x,s.namespace));var m=[];return pa(x,P3(d.concat(E3(function(p){return m.push(p)})))),m};return f.hash=l.length?l.reduce(function(h,g){return g.name||dr(15),_r(h,g.name)},5381).toString():"",f}var r4=new va,yc=n4(),vc={shouldForwardProp:void 0,styleSheet:r4,stylis:yc},C1=Rn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(vc)}}:G.createContext(vc);C1.Consumer;Rn||G.createContext(void 0);function xc(){return!Rn&&G.useContext?G.useContext(C1):vc}var o4=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=yc);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ud(this,function(){throw dr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=yc),this.name+t.hash},e}();function i4(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in R3||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var s4=function(e){return e>="A"&&e<="Z"};function Kh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;s4(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var b1=function(e){return e==null||e===!1||e===""},j1=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!b1(r)&&(Array.isArray(r)&&r.isCss||cr(r)?t.push("".concat(Kh(n),":"),r,";"):Ci(r)?t.push.apply(t,Si(Si(["".concat(n," {")],j1(r),!1),["}"],!1)):t.push("".concat(Kh(n),": ").concat(i4(n,r),";")))}return t};function bn(e,t,n,r){if(b1(e))return[];if(Bd(e))return[".".concat(e.styledComponentId)];if(cr(e)){if(!cr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return bn(o,t,n,r)}var i;return e instanceof o4?n?(e.inject(n,r),[e.getName(r)]):[e]:Ci(e)?j1(e):Array.isArray(e)?Array.prototype.concat.apply(Xa,e.map(function(s){return bn(s,t,n,r)})):[e.toString()]}function P1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cr(n)&&!Bd(n))return!1}return!0}var a4=Vd(Qa),l4=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&P1(t),this.componentId=n,this.baseHash=_r(a4,n),this.baseStyle=r,va.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Xn(o,this.staticRulesId);else{var i=mc(bn(this.rules,t,n,r)),s=ga(_r(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}o=Xn(o,s),this.staticRulesId=s}else{for(var l=_r(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=mc(bn(f,t,n,r));l=_r(l,h+d),u+=h}}if(u){var g=ga(l>>>0);if(!n.hasNameForId(this.componentId,g)){var y=r(u,".".concat(g),void 0,this.componentId);n.insertRules(this.componentId,g,y)}o=Xn(o,g)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Ir(this.componentId)):""}},e}(),bi=Rn?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:G.createContext(void 0);bi.Consumer;function u4(e){if(Rn||!G.useContext||!G.useMemo)return e.children;var t=G.useContext(bi),n=G.useMemo(function(){return function(r,o){if(!r)throw dr(14);if(cr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw dr(8);return o?Ce(Ce({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?G.createElement(bi.Provider,{value:n},e.children):null}var Bl={};function c4(e,t,n){var r=Bd(e),o=e,i=!Vl(e),s=t.attrs,a=s===void 0?Xa:s,l=t.componentId,u=l===void 0?function(S,C){var E=typeof S!="string"?"sc":_h(S);Bl[E]=(Bl[E]||0)+1;var b="".concat(E,"-").concat(g1(Qa+E+Bl[E]));return C?"".concat(C,"-").concat(b):b}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return Vl(S)?"styled.".concat(S):"Styled(".concat(D3(S),")")}(e):d,h=t.displayName&&t.componentId?"".concat(_h(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var v=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;y=function(S,C){return v(S,C)&&w(S,C)}}else y=v}var x=new l4(n,h,r?o.componentStyle:void 0);function m(S,C){return function(E,b,T){var O=E.attrs,L=E.componentStyle,H=E.defaultProps,W=E.foldedComponentIds,J=E.styledComponentId,Y=E.target,Qe=G.useContext?G.useContext(bi):void 0,U=xc(),ge=E.shouldForwardProp||U.shouldForwardProp,A=p1(b,Qe,H)||ao,$=function(yr,Et,zt){for(var Xe,Tt=Ce(Ce({},Et),{className:void 0,theme:zt}),dl=0;dl<yr.length;dl+=1){var Ui=cr(Xe=yr[dl])?Xe(Tt):Xe;for(var vr in Ui)vr==="className"?Tt.className=Xn(Tt.className,Ui[vr]):vr==="style"?Tt.style=Ce(Ce({},Tt.style),Ui[vr]):Tt[vr]=Ui[vr]}return"className"in Et&&typeof Et.className=="string"&&(Tt.className=Xn(Tt.className,Et.className)),Tt}(O,b,A),z=$.as||Y,D={};for(var I in $)$[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&$.theme===A||(I==="forwardedAs"?D.as=$.forwardedAs:ge&&!ge(I,z)||(D[I]=$[I]));var Ve=function(yr,Et){var zt=xc(),Xe=yr.generateAndInjectStyles(Et,zt.styleSheet,zt.stylis);return Xe}(L,$),ye=Ve.className,st=Ve.css,Pe=Xn(W,J);ye&&(Pe+=" "+ye),$.className&&(Pe+=" "+$.className),D[Vl(z)&&!m1.has(z)?"class":"className"]=Pe,T&&(D.ref=T);var Pt=j.createElement(z,D);return Rn&&st?G.createElement(G.Fragment,null,G.createElement("style",{precedence:"styled-components",href:"sc-".concat(J,"-").concat(ye),children:st}),Pt):Pt}(p,S,C)}m.displayName=f;var p=G.forwardRef(m);return p.attrs=g,p.componentStyle=x,p.displayName=f,p.shouldForwardProp=y,p.foldedComponentIds=r?Xn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=h,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(C){for(var E=[],b=1;b<arguments.length;b++)E[b-1]=arguments[b];for(var T=0,O=E;T<O.length;T++)gc(C,O[T],!0);return C}({},o.defaultProps,S):S}}),Ud(p,function(){return".".concat(p.styledComponentId)}),i&&w1(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Yh(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var qh=function(e){return Object.assign(e,{isCss:!0})};function E1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cr(e)||Ci(e))return qh(bn(Yh(Xa,Si([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?bn(r):qh(bn(Yh(r,t)))}function wc(e,t,n){if(n===void 0&&(n=ao),!t)throw dr(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,E1.apply(void 0,Si([o],i,!1)))};return r.attrs=function(o){return wc(e,t,Ce(Ce({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return wc(e,t,Ce(Ce({},n),o))},r}var T1=function(e){return wc(c4,e)},k=T1;m1.forEach(function(e){k[e]=T1(e)});var d4=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=P1(t),va.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(mc(bn(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&va.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function f4(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=E1.apply(void 0,Si([e],t,!1)),o="sc-global-".concat(g1(JSON.stringify(r))),i=new d4(r,o),s=new WeakMap,a=function(l){var u=xc(),d=G.useContext?G.useContext(bi):void 0,f=s.get(u.styleSheet);if(f===void 0&&(f=u.styleSheet.allocateGSInstance(o),s.set(u.styleSheet,f)),(typeof window>"u"||!u.styleSheet.server)&&function(w,x,m,p,S){if(i.isStatic)i.renderStyles(w,L3,m,S);else{var C=Ce(Ce({},x),{theme:p1(x,p,a.defaultProps)});i.renderStyles(w,C,m,S)}}(f,l,u.styleSheet,d,u.stylis),Rn||G.useLayoutEffect(function(){return function(){i.removeStyles(f,u.styleSheet)}},[f,u.styleSheet]),Rn){var h=o+f,g=typeof window>"u"?u.styleSheet.getTag().getGroup(Ir(h)):"";if(g){var y=ga(Vd(g)>>>0),v="sc-global-".concat(o,"-").concat(f,"-").concat(y);return G.createElement("style",{key:v,"data-styled-global":o,precedence:"styled-components",href:v,children:g})}}return null};return G.memo(a)}function R1(e,t){return function(){return e.apply(t,arguments)}}const{toString:h4}=Object.prototype,{getPrototypeOf:Hd}=Object,{iterator:Ja,toStringTag:A1}=Symbol,Za=(e=>t=>{const n=h4.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),jt=e=>(e=e.toLowerCase(),t=>Za(t)===e),el=e=>t=>typeof t===e,{isArray:vo}=Array,lo=el("undefined");function $i(e){return e!==null&&!lo(e)&&e.constructor!==null&&!lo(e.constructor)&&Ke(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const L1=jt("ArrayBuffer");function p4(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&L1(e.buffer),t}const m4=el("string"),Ke=el("function"),M1=el("number"),Di=e=>e!==null&&typeof e=="object",g4=e=>e===!0||e===!1,zs=e=>{if(Za(e)!=="object")return!1;const t=Hd(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(A1 in e)&&!(Ja in e)},y4=e=>{if(!Di(e)||$i(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},v4=jt("Date"),x4=jt("File"),w4=jt("Blob"),S4=jt("FileList"),k4=e=>Di(e)&&Ke(e.pipe),C4=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ke(e.append)&&((t=Za(e))==="formdata"||t==="object"&&Ke(e.toString)&&e.toString()==="[object FormData]"))},b4=jt("URLSearchParams"),[j4,P4,E4,T4]=["ReadableStream","Request","Response","Headers"].map(jt),R4=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ni(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),vo(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if($i(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let a;for(r=0;r<s;r++)a=i[r],t.call(null,e[a],a,e)}}function O1(e,t){if($i(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Jn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$1=e=>!lo(e)&&e!==Jn;function Sc(){const{caseless:e,skipUndefined:t}=$1(this)&&this||{},n={},r=(o,i)=>{const s=e&&O1(n,i)||i;zs(n[s])&&zs(o)?n[s]=Sc(n[s],o):zs(o)?n[s]=Sc({},o):vo(o)?n[s]=o.slice():(!t||!lo(o))&&(n[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Ni(arguments[o],r);return n}const A4=(e,t,n,{allOwnKeys:r}={})=>(Ni(t,(o,i)=>{n&&Ke(o)?e[i]=R1(o,n):e[i]=o},{allOwnKeys:r}),e),L4=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),M4=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},O4=(e,t,n,r)=>{let o,i,s;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Hd(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},$4=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},D4=e=>{if(!e)return null;if(vo(e))return e;let t=e.length;if(!M1(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},N4=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Hd(Uint8Array)),z4=(e,t)=>{const r=(e&&e[Ja]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},F4=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_4=jt("HTMLFormElement"),I4=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Qh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),V4=jt("RegExp"),D1=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ni(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},B4=e=>{D1(e,(t,n)=>{if(Ke(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ke(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},U4=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return vo(e)?r(e):r(String(e).split(t)),n},H4=()=>{},W4=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function G4(e){return!!(e&&Ke(e.append)&&e[A1]==="FormData"&&e[Ja])}const K4=e=>{const t=new Array(10),n=(r,o)=>{if(Di(r)){if(t.indexOf(r)>=0)return;if($i(r))return r;if(!("toJSON"in r)){t[o]=r;const i=vo(r)?[]:{};return Ni(r,(s,a)=>{const l=n(s,o+1);!lo(l)&&(i[a]=l)}),t[o]=void 0,i}}return r};return n(e,0)},Y4=jt("AsyncFunction"),q4=e=>e&&(Di(e)||Ke(e))&&Ke(e.then)&&Ke(e.catch),N1=((e,t)=>e?setImmediate:t?((n,r)=>(Jn.addEventListener("message",({source:o,data:i})=>{o===Jn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Jn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ke(Jn.postMessage)),Q4=typeof queueMicrotask<"u"?queueMicrotask.bind(Jn):typeof process<"u"&&process.nextTick||N1,X4=e=>e!=null&&Ke(e[Ja]),P={isArray:vo,isArrayBuffer:L1,isBuffer:$i,isFormData:C4,isArrayBufferView:p4,isString:m4,isNumber:M1,isBoolean:g4,isObject:Di,isPlainObject:zs,isEmptyObject:y4,isReadableStream:j4,isRequest:P4,isResponse:E4,isHeaders:T4,isUndefined:lo,isDate:v4,isFile:x4,isBlob:w4,isRegExp:V4,isFunction:Ke,isStream:k4,isURLSearchParams:b4,isTypedArray:N4,isFileList:S4,forEach:Ni,merge:Sc,extend:A4,trim:R4,stripBOM:L4,inherits:M4,toFlatObject:O4,kindOf:Za,kindOfTest:jt,endsWith:$4,toArray:D4,forEachEntry:z4,matchAll:F4,isHTMLForm:_4,hasOwnProperty:Qh,hasOwnProp:Qh,reduceDescriptors:D1,freezeMethods:B4,toObjectSet:U4,toCamelCase:I4,noop:H4,toFiniteNumber:W4,findKey:O1,global:Jn,isContextDefined:$1,isSpecCompliantForm:G4,toJSONObject:K4,isAsyncFn:Y4,isThenable:q4,setImmediate:N1,asap:Q4,isIterable:X4};function _(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}P.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}});const z1=_.prototype,F1={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{F1[e]={value:e}});Object.defineProperties(_,F1);Object.defineProperty(z1,"isAxiosError",{value:!0});_.from=(e,t,n,r,o,i)=>{const s=Object.create(z1);P.toFlatObject(e,s,function(d){return d!==Error.prototype},u=>u!=="isAxiosError");const a=e&&e.message?e.message:"Error",l=t==null&&e?e.code:t;return _.call(s,a,l,n,r,o),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",i&&Object.assign(s,i),s};const J4=null;function kc(e){return P.isPlainObject(e)||P.isArray(e)}function _1(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function Xh(e,t,n){return e?e.concat(t).map(function(o,i){return o=_1(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Z4(e){return P.isArray(e)&&!e.some(kc)}const e5=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function tl(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,w){return!P.isUndefined(w[v])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(P.isDate(y))return y.toISOString();if(P.isBoolean(y))return y.toString();if(!l&&P.isBlob(y))throw new _("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(y)||P.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,v,w){let x=y;if(y&&!w&&typeof y=="object"){if(P.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(P.isArray(y)&&Z4(y)||(P.isFileList(y)||P.endsWith(v,"[]"))&&(x=P.toArray(y)))return v=_1(v),x.forEach(function(p,S){!(P.isUndefined(p)||p===null)&&t.append(s===!0?Xh([v],S,i):s===null?v:v+"[]",u(p))}),!1}return kc(y)?!0:(t.append(Xh(w,v,i),u(y)),!1)}const f=[],h=Object.assign(e5,{defaultVisitor:d,convertValue:u,isVisitable:kc});function g(y,v){if(!P.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),P.forEach(y,function(x,m){(!(P.isUndefined(x)||x===null)&&o.call(t,x,P.isString(m)?m.trim():m,v,h))===!0&&g(x,v?v.concat(m):[m])}),f.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Jh(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Wd(e,t){this._pairs=[],e&&tl(e,this,t)}const I1=Wd.prototype;I1.append=function(t,n){this._pairs.push([t,n])};I1.toString=function(t){const n=t?function(r){return t.call(this,r,Jh)}:Jh;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function t5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function V1(e,t,n){if(!t)return e;const r=n&&n.encode||t5;P.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(o?i=o(t,n):i=P.isURLSearchParams(t)?t.toString():new Wd(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Zh{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const B1={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},n5=typeof URLSearchParams<"u"?URLSearchParams:Wd,r5=typeof FormData<"u"?FormData:null,o5=typeof Blob<"u"?Blob:null,i5={isBrowser:!0,classes:{URLSearchParams:n5,FormData:r5,Blob:o5},protocols:["http","https","file","blob","url","data"]},Gd=typeof window<"u"&&typeof document<"u",Cc=typeof navigator=="object"&&navigator||void 0,s5=Gd&&(!Cc||["ReactNative","NativeScript","NS"].indexOf(Cc.product)<0),a5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",l5=Gd&&window.location.href||"http://localhost",u5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Gd,hasStandardBrowserEnv:s5,hasStandardBrowserWebWorkerEnv:a5,navigator:Cc,origin:l5},Symbol.toStringTag,{value:"Module"})),$e={...u5,...i5};function c5(e,t){return tl(e,new $e.classes.URLSearchParams,{visitor:function(n,r,o,i){return $e.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function d5(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function f5(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function U1(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const a=Number.isFinite(+s),l=i>=n.length;return s=!s&&P.isArray(o)?o.length:s,l?(P.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!a):((!o[s]||!P.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&P.isArray(o[s])&&(o[s]=f5(o[s])),!a)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(d5(r),o,n,0)}),n}return null}function h5(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const zi={transitional:B1,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(t);if(i&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o?JSON.stringify(U1(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return c5(t,this.formSerializer).toString();if((a=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return tl(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),h5(t)):t}],transformResponse:[function(t){const n=this.transitional||zi.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(s)throw a.name==="SyntaxError"?_.from(a,_.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$e.classes.FormData,Blob:$e.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{zi.headers[e]={}});const p5=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),m5=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&p5[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ep=Symbol("internals");function To(e){return e&&String(e).trim().toLowerCase()}function Fs(e){return e===!1||e==null?e:P.isArray(e)?e.map(Fs):String(e)}function g5(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const y5=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ul(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function v5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function x5(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}let Ye=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,l,u){const d=To(l);if(!d)throw new Error("header name must be a non-empty string");const f=P.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||l]=Fs(a))}const s=(a,l)=>P.forEach(a,(u,d)=>i(u,d,l));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(P.isString(t)&&(t=t.trim())&&!y5(t))s(m5(t),n);else if(P.isObject(t)&&P.isIterable(t)){let a={},l,u;for(const d of t){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[u=d[0]]=(l=a[u])?P.isArray(l)?[...l,d[1]]:[l,d[1]]:d[1]}s(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=To(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return g5(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=To(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ul(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=To(s),s){const a=P.findKey(r,s);a&&(!n||Ul(r,r[a],a,n))&&(delete r[a],o=!0)}}return P.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ul(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,i)=>{const s=P.findKey(r,i);if(s){n[s]=Fs(o),delete n[i];return}const a=t?v5(i):String(i).trim();a!==i&&delete n[i],n[a]=Fs(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[ep]=this[ep]={accessors:{}}).accessors,o=this.prototype;function i(s){const a=To(s);r[a]||(x5(o,s),r[a]=!0)}return P.isArray(t)?t.forEach(i):i(t),this}};Ye.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(Ye.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(Ye);function Hl(e,t){const n=this||zi,r=t||n,o=Ye.from(r.headers);let i=r.data;return P.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function H1(e){return!!(e&&e.__CANCEL__)}function xo(e,t,n){_.call(this,e??"canceled",_.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(xo,_,{__CANCEL__:!0});function W1(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function w5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function S5(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[i];s||(s=u),n[o]=l,r[o]=u;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const g=d&&u-d;return g?Math.round(h*1e3/g):void 0}}function k5(e,t){let n=0,r=1e3/t,o,i;const s=(u,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=r?s(u,d):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const xa=(e,t,n=3)=>{let r=0;const o=S5(50,250);return k5(i=>{const s=i.loaded,a=i.lengthComputable?i.total:void 0,l=s-r,u=o(l),d=s<=a;r=s;const f={loaded:s,total:a,progress:a?s/a:void 0,bytes:l,rate:u||void 0,estimated:u&&a&&d?(a-s)/u:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},tp=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},np=e=>(...t)=>P.asap(()=>e(...t)),C5=$e.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,$e.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL($e.origin),$e.navigator&&/(msie|trident)/i.test($e.navigator.userAgent)):()=>!0,b5=$e.hasStandardBrowserEnv?{write(e,t,n,r,o,i,s){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];P.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),P.isString(r)&&a.push(`path=${r}`),P.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),P.isString(s)&&a.push(`SameSite=${s}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function j5(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function P5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function G1(e,t,n){let r=!j5(t);return e&&(r||n==!1)?P5(e,t):t}const rp=e=>e instanceof Ye?{...e}:e;function fr(e,t){t=t||{};const n={};function r(u,d,f,h){return P.isPlainObject(u)&&P.isPlainObject(d)?P.merge.call({caseless:h},u,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function o(u,d,f,h){if(P.isUndefined(d)){if(!P.isUndefined(u))return r(void 0,u,f,h)}else return r(u,d,f,h)}function i(u,d){if(!P.isUndefined(d))return r(void 0,d)}function s(u,d){if(P.isUndefined(d)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d,f)=>o(rp(u),rp(d),f,!0)};return P.forEach(Object.keys({...e,...t}),function(d){const f=l[d]||o,h=f(e[d],t[d],d);P.isUndefined(h)&&f!==a||(n[d]=h)}),n}const K1=e=>{const t=fr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:a}=t;if(t.headers=s=Ye.from(s),t.url=V1(G1(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&s.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),P.isFormData(n)){if($e.hasStandardBrowserEnv||$e.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(P.isFunction(n.getHeaders)){const l=n.getHeaders(),u=["content-type","content-length"];Object.entries(l).forEach(([d,f])=>{u.includes(d.toLowerCase())&&s.set(d,f)})}}if($e.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&C5(t.url))){const l=o&&i&&b5.read(i);l&&s.set(o,l)}return t},E5=typeof XMLHttpRequest<"u",T5=E5&&function(e){return new Promise(function(n,r){const o=K1(e);let i=o.data;const s=Ye.from(o.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:u}=o,d,f,h,g,y;function v(){g&&g(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function x(){if(!w)return;const p=Ye.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),C={data:!a||a==="text"||a==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:p,config:e,request:w};W1(function(b){n(b),v()},function(b){r(b),v()},C),w=null}"onloadend"in w?w.onloadend=x:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(x)},w.onabort=function(){w&&(r(new _("Request aborted",_.ECONNABORTED,e,w)),w=null)},w.onerror=function(S){const C=S&&S.message?S.message:"Network Error",E=new _(C,_.ERR_NETWORK,e,w);E.event=S||null,r(E),w=null},w.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||B1;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new _(S,C.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,w)),w=null},i===void 0&&s.setContentType(null),"setRequestHeader"in w&&P.forEach(s.toJSON(),function(S,C){w.setRequestHeader(C,S)}),P.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),a&&a!=="json"&&(w.responseType=o.responseType),u&&([h,y]=xa(u,!0),w.addEventListener("progress",h)),l&&w.upload&&([f,g]=xa(l),w.upload.addEventListener("progress",f),w.upload.addEventListener("loadend",g)),(o.cancelToken||o.signal)&&(d=p=>{w&&(r(!p||p.type?new xo(null,e,w):p),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const m=w5(o.url);if(m&&$e.protocols.indexOf(m)===-1){r(new _("Unsupported protocol "+m+":",_.ERR_BAD_REQUEST,e));return}w.send(i||null)})},R5=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,a();const d=u instanceof Error?u:this.reason;r.abort(d instanceof _?d:new xo(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new _(`timeout ${t} of ms exceeded`,_.ETIMEDOUT))},t);const a=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:l}=r;return l.unsubscribe=()=>P.asap(a),l}},A5=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},L5=async function*(e,t){for await(const n of M5(e))yield*A5(n,t)},M5=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},op=(e,t,n,r)=>{const o=L5(e,t);let i=0,s,a=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:u,value:d}=await o.next();if(u){a(),l.close();return}let f=d.byteLength;if(n){let h=i+=f;n(h)}l.enqueue(new Uint8Array(d))}catch(u){throw a(u),u}},cancel(l){return a(l),o.return()}},{highWaterMark:2})},ip=64*1024,{isFunction:as}=P,O5=(({Request:e,Response:t})=>({Request:e,Response:t}))(P.global),{ReadableStream:sp,TextEncoder:ap}=P.global,lp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},$5=e=>{e=P.merge.call({skipUndefined:!0},O5,e);const{fetch:t,Request:n,Response:r}=e,o=t?as(t):typeof fetch=="function",i=as(n),s=as(r);if(!o)return!1;const a=o&&as(sp),l=o&&(typeof ap=="function"?(y=>v=>y.encode(v))(new ap):async y=>new Uint8Array(await new n(y).arrayBuffer())),u=i&&a&&lp(()=>{let y=!1;const v=new n($e.origin,{body:new sp,method:"POST",get duplex(){return y=!0,"half"}}).headers.has("Content-Type");return y&&!v}),d=s&&a&&lp(()=>P.isReadableStream(new r("").body)),f={stream:d&&(y=>y.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!f[y]&&(f[y]=(v,w)=>{let x=v&&v[y];if(x)return x.call(v);throw new _(`Response type '${y}' is not supported`,_.ERR_NOT_SUPPORT,w)})});const h=async y=>{if(y==null)return 0;if(P.isBlob(y))return y.size;if(P.isSpecCompliantForm(y))return(await new n($e.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(P.isArrayBufferView(y)||P.isArrayBuffer(y))return y.byteLength;if(P.isURLSearchParams(y)&&(y=y+""),P.isString(y))return(await l(y)).byteLength},g=async(y,v)=>{const w=P.toFiniteNumber(y.getContentLength());return w??h(v)};return async y=>{let{url:v,method:w,data:x,signal:m,cancelToken:p,timeout:S,onDownloadProgress:C,onUploadProgress:E,responseType:b,headers:T,withCredentials:O="same-origin",fetchOptions:L}=K1(y),H=t||fetch;b=b?(b+"").toLowerCase():"text";let W=R5([m,p&&p.toAbortSignal()],S),J=null;const Y=W&&W.unsubscribe&&(()=>{W.unsubscribe()});let Qe;try{if(E&&u&&w!=="get"&&w!=="head"&&(Qe=await g(T,x))!==0){let D=new n(v,{method:"POST",body:x,duplex:"half"}),I;if(P.isFormData(x)&&(I=D.headers.get("content-type"))&&T.setContentType(I),D.body){const[Ve,ye]=tp(Qe,xa(np(E)));x=op(D.body,ip,Ve,ye)}}P.isString(O)||(O=O?"include":"omit");const U=i&&"credentials"in n.prototype,ge={...L,signal:W,method:w.toUpperCase(),headers:T.normalize().toJSON(),body:x,duplex:"half",credentials:U?O:void 0};J=i&&new n(v,ge);let A=await(i?H(J,L):H(v,ge));const $=d&&(b==="stream"||b==="response");if(d&&(C||$&&Y)){const D={};["status","statusText","headers"].forEach(st=>{D[st]=A[st]});const I=P.toFiniteNumber(A.headers.get("content-length")),[Ve,ye]=C&&tp(I,xa(np(C),!0))||[];A=new r(op(A.body,ip,Ve,()=>{ye&&ye(),Y&&Y()}),D)}b=b||"text";let z=await f[P.findKey(f,b)||"text"](A,y);return!$&&Y&&Y(),await new Promise((D,I)=>{W1(D,I,{data:z,headers:Ye.from(A.headers),status:A.status,statusText:A.statusText,config:y,request:J})})}catch(U){throw Y&&Y(),U&&U.name==="TypeError"&&/Load failed|fetch/i.test(U.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,y,J),{cause:U.cause||U}):_.from(U,U&&U.code,y,J)}}},D5=new Map,Y1=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let s=i.length,a=s,l,u,d=D5;for(;a--;)l=i[a],u=d.get(l),u===void 0&&d.set(l,u=a?new Map:$5(t)),d=u;return u};Y1();const Kd={http:J4,xhr:T5,fetch:{get:Y1}};P.forEach(Kd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const up=e=>`- ${e}`,N5=e=>P.isFunction(e)||e===null||e===!1;function z5(e,t){e=P.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let s=0;s<n;s++){r=e[s];let a;if(o=r,!N5(r)&&(o=Kd[(a=String(r)).toLowerCase()],o===void 0))throw new _(`Unknown adapter '${a}'`);if(o&&(P.isFunction(o)||(o=o.get(t))))break;i[a||"#"+s]=o}if(!o){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let a=n?s.length>1?`since :
`+s.map(up).join(`
`):" "+up(s[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const q1={getAdapter:z5,adapters:Kd};function Wl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new xo(null,e)}function cp(e){return Wl(e),e.headers=Ye.from(e.headers),e.data=Hl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),q1.getAdapter(e.adapter||zi.adapter,e)(e).then(function(r){return Wl(e),r.data=Hl.call(e,e.transformResponse,r),r.headers=Ye.from(r.headers),r},function(r){return H1(r)||(Wl(e),r&&r.response&&(r.response.data=Hl.call(e,e.transformResponse,r.response),r.response.headers=Ye.from(r.response.headers))),Promise.reject(r)})}const Q1="1.13.2",nl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{nl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const dp={};nl.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Q1+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,a)=>{if(t===!1)throw new _(o(s," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!dp[s]&&(dp[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,a):!0}};nl.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function F5(e,t,n){if(typeof e!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const a=e[i],l=a===void 0||s(a,i,e);if(l!==!0)throw new _("option "+i+" must be "+l,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}const _s={assertOptions:F5,validators:nl},At=_s.validators;let nr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Zh,response:new Zh}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=fr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&_s.assertOptions(r,{silentJSONParsing:At.transitional(At.boolean),forcedJSONParsing:At.transitional(At.boolean),clarifyTimeoutError:At.transitional(At.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:_s.assertOptions(o,{encode:At.function,serialize:At.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),_s.assertOptions(n,{baseUrl:At.spelling("baseURL"),withXsrfToken:At.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&P.merge(i.common,i[n.method]);i&&P.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ye.concat(s,i);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let d,f=0,h;if(!l){const y=[cp.bind(this),void 0];for(y.unshift(...a),y.push(...u),h=y.length,d=Promise.resolve(n);f<h;)d=d.then(y[f++],y[f++]);return d}h=a.length;let g=n;for(;f<h;){const y=a[f++],v=a[f++];try{g=y(g)}catch(w){v.call(this,w);break}}try{d=cp.call(this,g)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=fr(this.defaults,t);const n=G1(t.baseURL,t.url,t.allowAbsoluteUrls);return V1(n,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){nr.prototype[t]=function(n,r){return this.request(fr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,a){return this.request(fr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}nr.prototype[t]=n(),nr.prototype[t+"Form"]=n(!0)});let _5=class X1{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(a=>{r.subscribe(a),i=a}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,a){r.reason||(r.reason=new xo(i,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new X1(function(o){t=o}),cancel:t}}};function I5(e){return function(n){return e.apply(null,n)}}function V5(e){return P.isObject(e)&&e.isAxiosError===!0}const bc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(bc).forEach(([e,t])=>{bc[t]=e});function J1(e){const t=new nr(e),n=R1(nr.prototype.request,t);return P.extend(n,nr.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return J1(fr(e,o))},n}const F=J1(zi);F.Axios=nr;F.CanceledError=xo;F.CancelToken=_5;F.isCancel=H1;F.VERSION=Q1;F.toFormData=tl;F.AxiosError=_;F.Cancel=F.CanceledError;F.all=function(t){return Promise.all(t)};F.spread=I5;F.isAxiosError=V5;F.mergeConfig=fr;F.AxiosHeaders=Ye;F.formToJSON=e=>U1(P.isHTMLForm(e)?new FormData(e):e);F.getAdapter=q1.getAdapter;F.HttpStatusCode=bc;F.default=F;const{Axios:eP,AxiosError:tP,CanceledError:nP,isCancel:rP,CancelToken:oP,VERSION:iP,all:sP,Cancel:aP,isAxiosError:lP,spread:uP,toFormData:cP,AxiosHeaders:dP,HttpStatusCode:fP,formToJSON:hP,getAdapter:pP,mergeConfig:mP}=F,Z1=j.createContext(),B5="http://localhost:5000/api";F.defaults.baseURL=B5;F.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));F.interceptors.response.use(e=>e,async e=>{var n;const t=e.config;if(((n=e.response)==null?void 0:n.status)===401&&!t._retry&&t.url!=="/auth/refresh-token"){t._retry=!0;try{const r=localStorage.getItem("refreshToken");if(r){const o=await F.post("/auth/refresh-token",{refreshToken:r});if(o.data&&o.data.data&&o.data.data.token){const{token:i}=o.data.data;return localStorage.setItem("token",i),t.headers.Authorization=`Bearer ${i}`,F(t)}}}catch(r){return localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),!window.location.pathname.includes("/login")&&!window.location.pathname.includes("/register")&&(window.location.href="/login"),Promise.reject(r)}}return Promise.reject(e)});const U5=({children:e})=>{const[t,n]=j.useState(null),[r,o]=j.useState(!0),[i,s]=j.useState(null);j.useEffect(()=>{(async()=>{try{const w=localStorage.getItem("token"),x=localStorage.getItem("user");if(w&&x)try{const m=await F.get("/auth/me",{timeout:5e3});m.data&&m.data.data&&m.data.data.user&&(n(m.data.data.user),localStorage.setItem("user",JSON.stringify(m.data.data.user)))}catch(m){m.code!=="ECONNABORTED"&&m.code!=="ERR_NETWORK"&&console.log("Auth check failed:",m.message),localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),n(null)}}catch(w){console.error("Auth initialization error:",w)}finally{o(!1)}})()},[]);const y={user:t,loading:r,error:i,register:async v=>{var w,x,m,p;try{s(null);const S=await F.post("/auth/register",v),{token:C,refreshToken:E,user:b}=S.data.data;return localStorage.setItem("token",C),localStorage.setItem("refreshToken",E),localStorage.setItem("user",JSON.stringify(b)),n(b),{success:!0,data:S.data}}catch(S){const C=((x=(w=S.response)==null?void 0:w.data)==null?void 0:x.message)||"Registration failed";return s(C),{success:!1,error:C,errors:(p=(m=S.response)==null?void 0:m.data)==null?void 0:p.errors}}},login:async(v,w)=>{var x,m;try{s(null);const p=await F.post("/auth/login",{email:v,password:w}),{token:S,refreshToken:C,user:E}=p.data.data;return localStorage.setItem("token",S),localStorage.setItem("refreshToken",C),localStorage.setItem("user",JSON.stringify(E)),n(E),{success:!0,data:p.data}}catch(p){const S=((m=(x=p.response)==null?void 0:x.data)==null?void 0:m.message)||"Login failed";return s(S),{success:!1,error:S}}},logout:async()=>{try{const v=localStorage.getItem("refreshToken");v&&await F.post("/auth/logout",{refreshToken:v})}catch(v){console.error("Logout error:",v)}finally{localStorage.removeItem("token"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user"),n(null)}},updateProfile:async v=>{var w,x;try{s(null);const m=await F.put("/auth/update-profile",v),p=m.data.data.user;return n(p),localStorage.setItem("user",JSON.stringify(p)),{success:!0,data:m.data}}catch(m){const p=((x=(w=m.response)==null?void 0:w.data)==null?void 0:x.message)||"Profile update failed";return s(p),{success:!1,error:p}}},updatePassword:async(v,w)=>{var x,m;try{return s(null),{success:!0,data:(await F.put("/auth/update-password",{currentPassword:v,newPassword:w})).data}}catch(p){const S=((m=(x=p.response)==null?void 0:x.data)==null?void 0:m.message)||"Password update failed";return s(S),{success:!1,error:S}}},uploadAvatar:async v=>{var w,x;try{s(null);const m=new FormData;m.append("avatar",v);const p=await F.put("/auth/avatar",m,{headers:{"Content-Type":"multipart/form-data"}}),S={...t,avatar:p.data.data.avatar};return n(S),localStorage.setItem("user",JSON.stringify(S)),{success:!0,data:p.data}}catch(m){const p=((x=(w=m.response)==null?void 0:w.data)==null?void 0:x.message)||"Avatar upload failed";return s(p),{success:!1,error:p}}},getMe:async()=>{var v,w;try{const x=await F.get("/auth/me"),m=x.data.data.user;return n(m),localStorage.setItem("user",JSON.stringify(m)),{success:!0,data:x.data}}catch(x){const m=((w=(v=x.response)==null?void 0:v.data)==null?void 0:w.message)||"Failed to fetch user data";return s(m),{success:!1,error:m}}},isAuthenticated:!!t};return c.jsx(Z1.Provider,{value:y,children:e})},zn=()=>{const e=j.useContext(Z1);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};class H5 extends G.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,n){console.error("Error caught by boundary:",t,n)}render(){var t;return this.state.hasError?c.jsx(W5,{children:c.jsxs(G5,{children:[c.jsx("h1",{children:"Something went wrong"}),c.jsx("p",{children:((t=this.state.error)==null?void 0:t.message)||"An unexpected error occurred"}),c.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]})}):this.props.children}}const W5=k.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
  padding: 20px;
`,G5=k.div`
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
`,ey=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),rl=j.createContext({}),Yd=j.createContext(null),ol=typeof document<"u",K5=ol?j.useLayoutEffect:j.useEffect,ty=j.createContext({strict:!1}),qd=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Y5="framerAppearId",ny="data-"+qd(Y5);function q5(e,t,n,r){const{visualElement:o}=j.useContext(rl),i=j.useContext(ty),s=j.useContext(Yd),a=j.useContext(ey).reducedMotion,l=j.useRef();r=r||i.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;j.useInsertionEffect(()=>{u&&u.update(n,s)});const d=j.useRef(!!(n[ny]&&!window.HandoffComplete));return K5(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),j.useEffect(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}function Br(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Q5(e,t,n){return j.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Br(n)&&(n.current=r))},[t])}function ji(e){return typeof e=="string"||Array.isArray(e)}function il(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Qd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Xd=["initial",...Qd];function sl(e){return il(e.animate)||Xd.some(t=>ji(e[t]))}function ry(e){return!!(sl(e)||e.variants)}function X5(e,t){if(sl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ji(n)?n:void 0,animate:ji(r)?r:void 0}}return e.inherit!==!1?t:{}}function J5(e){const{initial:t,animate:n}=X5(e,j.useContext(rl));return j.useMemo(()=>({initial:t,animate:n}),[fp(t),fp(n)])}function fp(e){return Array.isArray(e)?e.join(" "):e}const hp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pi={};for(const e in hp)Pi[e]={isEnabled:t=>hp[e].some(n=>!!t[n])};function Z5(e){for(const t in e)Pi[t]={...Pi[t],...e[t]}}const oy=j.createContext({}),iy=j.createContext({}),eS=Symbol.for("motionComponentSymbol");function tS({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:o}){e&&Z5(e);function i(a,l){let u;const d={...j.useContext(ey),...a,layoutId:nS(a)},{isStatic:f}=d,h=J5(a),g=r(a,f);if(!f&&ol){h.visualElement=q5(o,g,d,t);const y=j.useContext(iy),v=j.useContext(ty).strict;h.visualElement&&(u=h.visualElement.loadFeatures(d,v,e,y))}return j.createElement(rl.Provider,{value:h},u&&h.visualElement?j.createElement(u,{visualElement:h.visualElement,...d}):null,n(o,a,Q5(g,h.visualElement,l),g,f,h.visualElement))}const s=j.forwardRef(i);return s[eS]=o,s}function nS({layoutId:e}){const t=j.useContext(oy).id;return t&&e!==void 0?t+"-"+e:e}function rS(e){function t(r,o={}){return tS(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const oS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jd(e){return typeof e!="string"||e.includes("-")?!1:!!(oS.indexOf(e)>-1||/[A-Z]/.test(e))}const wa={};function iS(e){Object.assign(wa,e)}const Fi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mr=new Set(Fi);function sy(e,{layout:t,layoutId:n}){return mr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!wa[e]||e==="opacity")}const qe=e=>!!(e&&e.getVelocity),sS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},aS=Fi.length;function lS(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,o){let i="";for(let s=0;s<aS;s++){const a=Fi[s];if(e[a]!==void 0){const l=sS[a]||a;i+=`${l}(${e[a]}) `}}return t&&!e.z&&(i+="translateZ(0)"),i=i.trim(),o?i=o(e,r?"":i):n&&r&&(i="none"),i}const ay=e=>t=>typeof t=="string"&&t.startsWith(e),ly=ay("--"),jc=ay("var(--"),uS=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,cS=(e,t)=>t&&typeof e=="number"?t.transform(e):e,An=(e,t,n)=>Math.min(Math.max(n,e),t),gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Jo={...gr,transform:e=>An(0,1,e)},ls={...gr,default:1},Zo=e=>Math.round(e*1e5)/1e5,al=/(-)?([\d]*\.?[\d])+/g,uy=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dS=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function _i(e){return typeof e=="string"}const Ii=e=>({test:t=>_i(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),nn=Ii("deg"),Nt=Ii("%"),N=Ii("px"),fS=Ii("vh"),hS=Ii("vw"),pp={...Nt,parse:e=>Nt.parse(e)/100,transform:e=>Nt.transform(e*100)},mp={...gr,transform:Math.round},cy={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,radius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,size:N,top:N,right:N,bottom:N,left:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,rotate:nn,rotateX:nn,rotateY:nn,rotateZ:nn,scale:ls,scaleX:ls,scaleY:ls,scaleZ:ls,skew:nn,skewX:nn,skewY:nn,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:Jo,originX:pp,originY:pp,originZ:N,zIndex:mp,fillOpacity:Jo,strokeOpacity:Jo,numOctaves:mp};function Zd(e,t,n,r){const{style:o,vars:i,transform:s,transformOrigin:a}=e;let l=!1,u=!1,d=!0;for(const f in t){const h=t[f];if(ly(f)){i[f]=h;continue}const g=cy[f],y=cS(h,g);if(mr.has(f)){if(l=!0,s[f]=y,!d)continue;h!==(g.default||0)&&(d=!1)}else f.startsWith("origin")?(u=!0,a[f]=y):o[f]=y}if(t.transform||(l||r?o.transform=lS(e.transform,n,d,r):o.transform&&(o.transform="none")),u){const{originX:f="50%",originY:h="50%",originZ:g=0}=a;o.transformOrigin=`${f} ${h} ${g}`}}const ef=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function dy(e,t,n){for(const r in t)!qe(t[r])&&!sy(r,n)&&(e[r]=t[r])}function pS({transformTemplate:e},t,n){return j.useMemo(()=>{const r=ef();return Zd(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function mS(e,t,n){const r=e.style||{},o={};return dy(o,r,e),Object.assign(o,pS(e,t,n)),e.transformValues?e.transformValues(o):o}function gS(e,t,n){const r={},o=mS(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=o,r}const yS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Sa(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yS.has(e)}let fy=e=>!Sa(e);function vS(e){e&&(fy=t=>t.startsWith("on")?!Sa(t):e(t))}try{vS(require("@emotion/is-prop-valid").default)}catch{}function xS(e,t,n){const r={};for(const o in e)o==="values"&&typeof e.values=="object"||(fy(o)||n===!0&&Sa(o)||!t&&!Sa(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function gp(e,t,n){return typeof e=="string"?e:N.transform(t+n*e)}function wS(e,t,n){const r=gp(t,e.x,e.width),o=gp(n,e.y,e.height);return`${r} ${o}`}const SS={offset:"stroke-dashoffset",array:"stroke-dasharray"},kS={offset:"strokeDashoffset",array:"strokeDasharray"};function CS(e,t,n=1,r=0,o=!0){e.pathLength=1;const i=o?SS:kS;e[i.offset]=N.transform(-r);const s=N.transform(t),a=N.transform(n);e[i.array]=`${s} ${a}`}function tf(e,{attrX:t,attrY:n,attrScale:r,originX:o,originY:i,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...u},d,f,h){if(Zd(e,u,d,h),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:g,style:y,dimensions:v}=e;g.transform&&(v&&(y.transform=g.transform),delete g.transform),v&&(o!==void 0||i!==void 0||y.transform)&&(y.transformOrigin=wS(v,o!==void 0?o:.5,i!==void 0?i:.5)),t!==void 0&&(g.x=t),n!==void 0&&(g.y=n),r!==void 0&&(g.scale=r),s!==void 0&&CS(g,s,a,l,!1)}const hy=()=>({...ef(),attrs:{}}),nf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function bS(e,t,n,r){const o=j.useMemo(()=>{const i=hy();return tf(i,t,{enableHardwareAcceleration:!1},nf(r),e.transformTemplate),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};dy(i,e.style,e),o.style={...i,...o.style}}return o}function jS(e=!1){return(n,r,o,{latestValues:i},s)=>{const l=(Jd(n)?bS:gS)(r,i,s,n),d={...xS(r,typeof n=="string",e),...l,ref:o},{children:f}=r,h=j.useMemo(()=>qe(f)?f.get():f,[f]);return j.createElement(n,{...d,children:h})}}function py(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const i in n)e.style.setProperty(i,n[i])}const my=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function gy(e,t,n,r){py(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(my.has(o)?o:qd(o),t.attrs[o])}function rf(e,t){const{style:n}=e,r={};for(const o in n)(qe(n[o])||t.style&&qe(t.style[o])||sy(o,e))&&(r[o]=n[o]);return r}function yy(e,t){const n=rf(e,t);for(const r in e)if(qe(e[r])||qe(t[r])){const o=Fi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[o]=e[r]}return n}function of(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}function PS(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const ka=e=>Array.isArray(e),ES=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),TS=e=>ka(e)?e[e.length-1]||0:e;function Is(e){const t=qe(e)?e.get():e;return ES(t)?t.toValue():t}function RS({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,i){const s={latestValues:AS(r,o,i,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const vy=e=>(t,n)=>{const r=j.useContext(rl),o=j.useContext(Yd),i=()=>RS(e,t,r,o);return n?i():PS(i)};function AS(e,t,n,r){const o={},i=r(e,{});for(const h in i)o[h]=Is(i[h]);let{initial:s,animate:a}=e;const l=sl(e),u=ry(e);t&&u&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const f=d?a:s;return f&&typeof f!="boolean"&&!il(f)&&(Array.isArray(f)?f:[f]).forEach(g=>{const y=of(e,g);if(!y)return;const{transitionEnd:v,transition:w,...x}=y;for(const m in x){let p=x[m];if(Array.isArray(p)){const S=d?p.length-1:0;p=p[S]}p!==null&&(o[m]=p)}for(const m in v)o[m]=v[m]}),o}const de=e=>e;class yp{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function LS(e){let t=new yp,n=new yp,r=0,o=!1,i=!1;const s=new WeakSet,a={schedule:(l,u=!1,d=!1)=>{const f=d&&o,h=f?t:n;return u&&s.add(l),h.add(l)&&f&&o&&(r=t.order.length),l},cancel:l=>{n.remove(l),s.delete(l)},process:l=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const d=t.order[u];d(l),s.has(d)&&(a.schedule(d),e())}o=!1,i&&(i=!1,a.process(l))}};return a}const us=["prepare","read","update","preRender","render","postRender"],MS=40;function OS(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=us.reduce((f,h)=>(f[h]=LS(()=>n=!0),f),{}),s=f=>i[f].process(o),a=()=>{const f=performance.now();n=!1,o.delta=r?1e3/60:Math.max(Math.min(f-o.timestamp,MS),1),o.timestamp=f,o.isProcessing=!0,us.forEach(s),o.isProcessing=!1,n&&t&&(r=!1,e(a))},l=()=>{n=!0,r=!0,o.isProcessing||e(a)};return{schedule:us.reduce((f,h)=>{const g=i[h];return f[h]=(y,v=!1,w=!1)=>(n||l(),g.schedule(y,v,w)),f},{}),cancel:f=>us.forEach(h=>i[h].cancel(f)),state:o,steps:i}}const{schedule:re,cancel:Xt,state:Me,steps:Gl}=OS(typeof requestAnimationFrame<"u"?requestAnimationFrame:de,!0),$S={useVisualState:vy({scrapeMotionValuesFromProps:yy,createRenderState:hy,onMount:(e,t,{renderState:n,latestValues:r})=>{re.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),re.render(()=>{tf(n,r,{enableHardwareAcceleration:!1},nf(t.tagName),e.transformTemplate),gy(t,n)})}})},DS={useVisualState:vy({scrapeMotionValuesFromProps:rf,createRenderState:ef})};function NS(e,{forwardMotionProps:t=!1},n,r){return{...Jd(e)?$S:DS,preloadedFeatures:n,useRender:jS(t),createVisualElement:r,Component:e}}function Ut(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const xy=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ll(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const zS=e=>t=>xy(t)&&e(t,ll(t));function Wt(e,t,n,r){return Ut(e,t,zS(n),r)}const FS=(e,t)=>n=>t(e(n)),jn=(...e)=>e.reduce(FS);function wy(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const vp=wy("dragHorizontal"),xp=wy("dragVertical");function Sy(e){let t=!1;if(e==="y")t=xp();else if(e==="x")t=vp();else{const n=vp(),r=xp();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function ky(){const e=Sy(!0);return e?(e(),!1):!0}class Fn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function wp(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),o=(i,s)=>{if(i.pointerType==="touch"||ky())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&re.update(()=>a[r](i,s))};return Wt(e.current,n,o,{passive:!e.getProps()[r]})}class _S extends Fn{mount(){this.unmount=jn(wp(this.node,!0),wp(this.node,!1))}unmount(){}}class IS extends Fn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=jn(Ut(this.node.current,"focus",()=>this.onFocus()),Ut(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Cy=(e,t)=>t?e===t?!0:Cy(e,t.parentElement):!1;function Kl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ll(n))}class VS extends Fn{constructor(){super(...arguments),this.removeStartListeners=de,this.removeEndListeners=de,this.removeAccessibleListeners=de,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),i=Wt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:d,globalTapTarget:f}=this.node.getProps();re.update(()=>{!f&&!Cy(this.node.current,a.target)?d&&d(a,l):u&&u(a,l)})},{passive:!(r.onTap||r.onPointerUp)}),s=Wt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=jn(i,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=i=>{if(i.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||Kl("up",(l,u)=>{const{onTap:d}=this.node.getProps();d&&re.update(()=>d(l,u))})};this.removeEndListeners(),this.removeEndListeners=Ut(this.node.current,"keyup",s),Kl("down",(a,l)=>{this.startPress(a,l)})},n=Ut(this.node.current,"keydown",t),r=()=>{this.isPressing&&Kl("cancel",(i,s)=>this.cancelPress(i,s))},o=Ut(this.node.current,"blur",r);this.removeAccessibleListeners=jn(n,o)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:o}=this.node.getProps();o&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&re.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ky()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&re.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Wt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Ut(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=jn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Pc=new WeakMap,Yl=new WeakMap,BS=e=>{const t=Pc.get(e.target);t&&t(e)},US=e=>{e.forEach(BS)};function HS({root:e,...t}){const n=e||document;Yl.has(n)||Yl.set(n,{});const r=Yl.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(US,{root:e,...t})),r[o]}function WS(e,t,n){const r=HS(t);return Pc.set(e,n),r.observe(e),()=>{Pc.delete(e),r.unobserve(e)}}const GS={some:0,all:1};class KS extends Fn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:o="some",once:i}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:GS[o]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,i&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return WS(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(YS(t,n))&&this.startObserver()}unmount(){}}function YS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const qS={inView:{Feature:KS},tap:{Feature:VS},focus:{Feature:IS},hover:{Feature:_S}};function by(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function QS(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function XS(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ul(e,t,n){const r=e.getProps();return of(r,t,n!==void 0?n:r.custom,QS(e),XS(e))}let sf=de;const rr=e=>e*1e3,Gt=e=>e/1e3,JS={current:!1},jy=e=>Array.isArray(e)&&typeof e[0]=="number";function Py(e){return!!(!e||typeof e=="string"&&Ey[e]||jy(e)||Array.isArray(e)&&e.every(Py))}const Vo=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ey={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Vo([0,.65,.55,1]),circOut:Vo([.55,0,1,.45]),backIn:Vo([.31,.01,.66,-.59]),backOut:Vo([.33,1.53,.69,.99])};function Ty(e){if(e)return jy(e)?Vo(e):Array.isArray(e)?e.map(Ty):Ey[e]}function ZS(e,t,n,{delay:r=0,duration:o,repeat:i=0,repeatType:s="loop",ease:a,times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Ty(a);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:s==="reverse"?"alternate":"normal"})}function e6(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Ry=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,t6=1e-7,n6=12;function r6(e,t,n,r,o){let i,s,a=0;do s=t+(n-t)/2,i=Ry(s,r,o)-e,i>0?n=s:t=s;while(Math.abs(i)>t6&&++a<n6);return s}function Vi(e,t,n,r){if(e===t&&n===r)return de;const o=i=>r6(i,0,1,e,n);return i=>i===0||i===1?i:Ry(o(i),t,r)}const o6=Vi(.42,0,1,1),i6=Vi(0,0,.58,1),Ay=Vi(.42,0,.58,1),s6=e=>Array.isArray(e)&&typeof e[0]!="number",Ly=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,My=e=>t=>1-e(1-t),af=e=>1-Math.sin(Math.acos(e)),Oy=My(af),a6=Ly(af),$y=Vi(.33,1.53,.69,.99),lf=My($y),l6=Ly(lf),u6=e=>(e*=2)<1?.5*lf(e):.5*(2-Math.pow(2,-10*(e-1))),c6={linear:de,easeIn:o6,easeInOut:Ay,easeOut:i6,circIn:af,circInOut:a6,circOut:Oy,backIn:lf,backInOut:l6,backOut:$y,anticipate:u6},Sp=e=>{if(Array.isArray(e)){sf(e.length===4);const[t,n,r,o]=e;return Vi(t,n,r,o)}else if(typeof e=="string")return c6[e];return e},uf=(e,t)=>n=>!!(_i(n)&&dS.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Dy=(e,t,n)=>r=>{if(!_i(r))return r;const[o,i,s,a]=r.match(al);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},d6=e=>An(0,255,e),ql={...gr,transform:e=>Math.round(d6(e))},Zn={test:uf("rgb","red"),parse:Dy("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ql.transform(e)+", "+ql.transform(t)+", "+ql.transform(n)+", "+Zo(Jo.transform(r))+")"};function f6(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ec={test:uf("#"),parse:f6,transform:Zn.transform},Ur={test:uf("hsl","hue"),parse:Dy("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Nt.transform(Zo(t))+", "+Nt.transform(Zo(n))+", "+Zo(Jo.transform(r))+")"},Ne={test:e=>Zn.test(e)||Ec.test(e)||Ur.test(e),parse:e=>Zn.test(e)?Zn.parse(e):Ur.test(e)?Ur.parse(e):Ec.parse(e),transform:e=>_i(e)?e:e.hasOwnProperty("red")?Zn.transform(e):Ur.transform(e)},se=(e,t,n)=>-n*e+n*t+e;function Ql(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function h6({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,s=0;if(!t)o=i=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;o=Ql(l,a,e+1/3),i=Ql(l,a,e),s=Ql(l,a,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(s*255),alpha:r}}const Xl=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},p6=[Ec,Zn,Ur],m6=e=>p6.find(t=>t.test(e));function kp(e){const t=m6(e);let n=t.parse(e);return t===Ur&&(n=h6(n)),n}const Ny=(e,t)=>{const n=kp(e),r=kp(t),o={...n};return i=>(o.red=Xl(n.red,r.red,i),o.green=Xl(n.green,r.green,i),o.blue=Xl(n.blue,r.blue,i),o.alpha=se(n.alpha,r.alpha,i),Zn.transform(o))};function g6(e){var t,n;return isNaN(e)&&_i(e)&&(((t=e.match(al))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(uy))===null||n===void 0?void 0:n.length)||0)>0}const zy={regex:uS,countKey:"Vars",token:"${v}",parse:de},Fy={regex:uy,countKey:"Colors",token:"${c}",parse:Ne.parse},_y={regex:al,countKey:"Numbers",token:"${n}",parse:gr.parse};function Jl(e,{regex:t,countKey:n,token:r,parse:o}){const i=e.tokenised.match(t);i&&(e["num"+n]=i.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...i.map(o)))}function Ca(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Jl(n,zy),Jl(n,Fy),Jl(n,_y),n}function Iy(e){return Ca(e).values}function Vy(e){const{values:t,numColors:n,numVars:r,tokenised:o}=Ca(e),i=t.length;return s=>{let a=o;for(let l=0;l<i;l++)l<r?a=a.replace(zy.token,s[l]):l<r+n?a=a.replace(Fy.token,Ne.transform(s[l])):a=a.replace(_y.token,Zo(s[l]));return a}}const y6=e=>typeof e=="number"?0:e;function v6(e){const t=Iy(e);return Vy(e)(t.map(y6))}const Ln={test:g6,parse:Iy,createTransformer:Vy,getAnimatableNone:v6},By=(e,t)=>n=>`${n>0?t:e}`;function Uy(e,t){return typeof e=="number"?n=>se(e,t,n):Ne.test(e)?Ny(e,t):e.startsWith("var(")?By(e,t):Wy(e,t)}const Hy=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,s)=>Uy(i,t[s]));return i=>{for(let s=0;s<r;s++)n[s]=o[s](i);return n}},x6=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Uy(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}},Wy=(e,t)=>{const n=Ln.createTransformer(t),r=Ca(e),o=Ca(t);return r.numVars===o.numVars&&r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?jn(Hy(r.values,o.values),n):By(e,t)},Ei=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Cp=(e,t)=>n=>se(e,t,n);function w6(e){return typeof e=="number"?Cp:typeof e=="string"?Ne.test(e)?Ny:Wy:Array.isArray(e)?Hy:typeof e=="object"?x6:Cp}function S6(e,t,n){const r=[],o=n||w6(e[0]),i=e.length-1;for(let s=0;s<i;s++){let a=o(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||de:t;a=jn(l,a)}r.push(a)}return r}function Gy(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;if(sf(i===t.length),i===1)return()=>t[0];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=S6(t,r,o),a=s.length,l=u=>{let d=0;if(a>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const f=Ei(e[d],e[d+1],u);return s[d](f)};return n?u=>l(An(e[0],e[i-1],u)):l}function k6(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Ei(0,t,r);e.push(se(n,1,o))}}function C6(e){const t=[0];return k6(t,e.length-1),t}function b6(e,t){return e.map(n=>n*t)}function j6(e,t){return e.map(()=>t||Ay).splice(0,e.length-1)}function ba({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const o=s6(r)?r.map(Sp):Sp(r),i={done:!1,value:t[0]},s=b6(n&&n.length===t.length?n:C6(t),e),a=Gy(s,t,{ease:Array.isArray(o)?o:j6(t,o)});return{calculatedDuration:e,next:l=>(i.value=a(l),i.done=l>=e,i)}}function Ky(e,t){return t?e*(1e3/t):0}const P6=5;function Yy(e,t,n){const r=Math.max(t-P6,0);return Ky(n-e(r),t-r)}const Zl=.001,E6=.01,T6=10,R6=.05,A6=1;function L6({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i,s=1-t;s=An(R6,A6,s),e=An(E6,T6,Gt(e)),s<1?(o=u=>{const d=u*s,f=d*e,h=d-n,g=Tc(u,s),y=Math.exp(-f);return Zl-h/g*y},i=u=>{const f=u*s*e,h=f*n+n,g=Math.pow(s,2)*Math.pow(u,2)*e,y=Math.exp(-f),v=Tc(Math.pow(u,2),s);return(-o(u)+Zl>0?-1:1)*((h-g)*y)/v}):(o=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Zl+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=O6(o,i,a);if(e=rr(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const M6=12;function O6(e,t,n){let r=n;for(let o=1;o<M6;o++)r=r-e(r)/t(r);return r}function Tc(e,t){return e*Math.sqrt(1-t*t)}const $6=["duration","bounce"],D6=["stiffness","damping","mass"];function bp(e,t){return t.some(n=>e[n]!==void 0)}function N6(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!bp(e,D6)&&bp(e,$6)){const n=L6(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function qy({keyframes:e,restDelta:t,restSpeed:n,...r}){const o=e[0],i=e[e.length-1],s={done:!1,value:o},{stiffness:a,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:h}=N6({...r,velocity:-Gt(r.velocity||0)}),g=f||0,y=l/(2*Math.sqrt(a*u)),v=i-o,w=Gt(Math.sqrt(a/u)),x=Math.abs(v)<5;n||(n=x?.01:2),t||(t=x?.005:.5);let m;if(y<1){const p=Tc(w,y);m=S=>{const C=Math.exp(-y*w*S);return i-C*((g+y*w*v)/p*Math.sin(p*S)+v*Math.cos(p*S))}}else if(y===1)m=p=>i-Math.exp(-w*p)*(v+(g+w*v)*p);else{const p=w*Math.sqrt(y*y-1);m=S=>{const C=Math.exp(-y*w*S),E=Math.min(p*S,300);return i-C*((g+y*w*v)*Math.sinh(E)+p*v*Math.cosh(E))/p}}return{calculatedDuration:h&&d||null,next:p=>{const S=m(p);if(h)s.done=p>=d;else{let C=g;p!==0&&(y<1?C=Yy(m,p,S):C=0);const E=Math.abs(C)<=n,b=Math.abs(i-S)<=t;s.done=E&&b}return s.value=s.done?i:S,s}}}function jp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:i=500,modifyTarget:s,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},g=T=>a!==void 0&&T<a||l!==void 0&&T>l,y=T=>a===void 0?l:l===void 0||Math.abs(a-T)<Math.abs(l-T)?a:l;let v=n*t;const w=f+v,x=s===void 0?w:s(w);x!==w&&(v=x-f);const m=T=>-v*Math.exp(-T/r),p=T=>x+m(T),S=T=>{const O=m(T),L=p(T);h.done=Math.abs(O)<=u,h.value=h.done?x:L};let C,E;const b=T=>{g(h.value)&&(C=T,E=qy({keyframes:[h.value,y(h.value)],velocity:Yy(p,T,h.value),damping:o,stiffness:i,restDelta:u,restSpeed:d}))};return b(0),{calculatedDuration:null,next:T=>{let O=!1;return!E&&C===void 0&&(O=!0,S(T),b(T)),C!==void 0&&T>C?E.next(T-C):(!O&&S(T),h)}}}const z6=e=>{const t=({timestamp:n})=>e(n);return{start:()=>re.update(t,!0),stop:()=>Xt(t),now:()=>Me.isProcessing?Me.timestamp:performance.now()}},Pp=2e4;function Ep(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Pp;)t+=n,r=e.next(t);return t>=Pp?1/0:t}const F6={decay:jp,inertia:jp,tween:ba,keyframes:ba,spring:qy};function ja({autoplay:e=!0,delay:t=0,driver:n=z6,keyframes:r,type:o="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:d,onUpdate:f,...h}){let g=1,y=!1,v,w;const x=()=>{w=new Promise(D=>{v=D})};x();let m;const p=F6[o]||ba;let S;p!==ba&&typeof r[0]!="number"&&(S=Gy([0,100],r,{clamp:!1}),r=[0,100]);const C=p({...h,keyframes:r});let E;a==="mirror"&&(E=p({...h,keyframes:[...r].reverse(),velocity:-(h.velocity||0)}));let b="idle",T=null,O=null,L=null;C.calculatedDuration===null&&i&&(C.calculatedDuration=Ep(C));const{calculatedDuration:H}=C;let W=1/0,J=1/0;H!==null&&(W=H+s,J=W*(i+1)-s);let Y=0;const Qe=D=>{if(O===null)return;g>0&&(O=Math.min(O,D)),g<0&&(O=Math.min(D-J/g,O)),T!==null?Y=T:Y=Math.round(D-O)*g;const I=Y-t*(g>=0?1:-1),Ve=g>=0?I<0:I>J;Y=Math.max(I,0),b==="finished"&&T===null&&(Y=J);let ye=Y,st=C;if(i){const Et=Math.min(Y,J)/W;let zt=Math.floor(Et),Xe=Et%1;!Xe&&Et>=1&&(Xe=1),Xe===1&&zt--,zt=Math.min(zt,i+1),!!(zt%2)&&(a==="reverse"?(Xe=1-Xe,s&&(Xe-=s/W)):a==="mirror"&&(st=E)),ye=An(0,1,Xe)*W}const Pe=Ve?{done:!1,value:r[0]}:st.next(ye);S&&(Pe.value=S(Pe.value));let{done:Pt}=Pe;!Ve&&H!==null&&(Pt=g>=0?Y>=J:Y<=0);const yr=T===null&&(b==="finished"||b==="running"&&Pt);return f&&f(Pe.value),yr&&A(),Pe},U=()=>{m&&m.stop(),m=void 0},ge=()=>{b="idle",U(),v(),x(),O=L=null},A=()=>{b="finished",d&&d(),U(),v()},$=()=>{if(y)return;m||(m=n(Qe));const D=m.now();l&&l(),T!==null?O=D-T:(!O||b==="finished")&&(O=D),b==="finished"&&x(),L=O,T=null,b="running",m.start()};e&&$();const z={then(D,I){return w.then(D,I)},get time(){return Gt(Y)},set time(D){D=rr(D),Y=D,T!==null||!m||g===0?T=D:O=m.now()-D/g},get duration(){const D=C.calculatedDuration===null?Ep(C):C.calculatedDuration;return Gt(D)},get speed(){return g},set speed(D){D===g||!m||(g=D,z.time=Gt(Y))},get state(){return b},play:$,pause:()=>{b="paused",T=Y},stop:()=>{y=!0,b!=="idle"&&(b="idle",u&&u(),ge())},cancel:()=>{L!==null&&Qe(L),ge()},complete:()=>{b="finished"},sample:D=>(O=0,Qe(D))};return z}function _6(e){let t;return()=>(t===void 0&&(t=e()),t)}const I6=_6(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),V6=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),cs=10,B6=2e4,U6=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Py(t.ease);function H6(e,t,{onUpdate:n,onComplete:r,...o}){if(!(I6()&&V6.has(t)&&!o.repeatDelay&&o.repeatType!=="mirror"&&o.damping!==0&&o.type!=="inertia"))return!1;let s=!1,a,l,u=!1;const d=()=>{l=new Promise(p=>{a=p})};d();let{keyframes:f,duration:h=300,ease:g,times:y}=o;if(U6(t,o)){const p=ja({...o,repeat:0,delay:0});let S={done:!1,value:f[0]};const C=[];let E=0;for(;!S.done&&E<B6;)S=p.sample(E),C.push(S.value),E+=cs;y=void 0,f=C,h=E-cs,g="linear"}const v=ZS(e.owner.current,t,f,{...o,duration:h,ease:g,times:y}),w=()=>{u=!1,v.cancel()},x=()=>{u=!0,re.update(w),a(),d()};return v.onfinish=()=>{u||(e.set(e6(f,o)),r&&r(),x())},{then(p,S){return l.then(p,S)},attachTimeline(p){return v.timeline=p,v.onfinish=null,de},get time(){return Gt(v.currentTime||0)},set time(p){v.currentTime=rr(p)},get speed(){return v.playbackRate},set speed(p){v.playbackRate=p},get duration(){return Gt(h)},play:()=>{s||(v.play(),Xt(w))},pause:()=>v.pause(),stop:()=>{if(s=!0,v.playState==="idle")return;const{currentTime:p}=v;if(p){const S=ja({...o,autoplay:!1});e.setWithVelocity(S.sample(p-cs).value,S.sample(p).value,cs)}x()},complete:()=>{u||v.finish()},cancel:x}}function W6({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const o=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:de,pause:de,stop:de,then:i=>(i(),Promise.resolve()),cancel:de,complete:de});return t?ja({keyframes:[0,1],duration:0,delay:t,onComplete:o}):o()}const G6={type:"spring",stiffness:500,damping:25,restSpeed:10},K6=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Y6={type:"keyframes",duration:.8},q6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q6=(e,{keyframes:t})=>t.length>2?Y6:mr.has(e)?e.startsWith("scale")?K6(t[1]):G6:q6,Rc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ln.test(t)||t==="0")&&!t.startsWith("url(")),X6=new Set(["brightness","contrast","saturate","opacity"]);function J6(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(al)||[];if(!r)return e;const o=n.replace(r,"");let i=X6.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const Z6=/([a-z-]*)\(.*?\)/g,Ac={...Ln,getAnimatableNone:e=>{const t=e.match(Z6);return t?t.map(J6).join(" "):e}},e8={...cy,color:Ne,backgroundColor:Ne,outlineColor:Ne,fill:Ne,stroke:Ne,borderColor:Ne,borderTopColor:Ne,borderRightColor:Ne,borderBottomColor:Ne,borderLeftColor:Ne,filter:Ac,WebkitFilter:Ac},cf=e=>e8[e];function Qy(e,t){let n=cf(e);return n!==Ac&&(n=Ln),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Xy=e=>/^0[^.\s]+$/.test(e);function t8(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Xy(e)}function n8(e,t,n,r){const o=Rc(t,n);let i;Array.isArray(n)?i=[...n]:i=[null,n];const s=r.from!==void 0?r.from:e.get();let a;const l=[];for(let u=0;u<i.length;u++)i[u]===null&&(i[u]=u===0?s:i[u-1]),t8(i[u])&&l.push(u),typeof i[u]=="string"&&i[u]!=="none"&&i[u]!=="0"&&(a=i[u]);if(o&&l.length&&a)for(let u=0;u<l.length;u++){const d=l[u];i[d]=Qy(t,a)}return i}function r8({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:i,repeatType:s,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}function df(e,t){return e[t]||e.default||e}const o8={skipAnimations:!1},ff=(e,t,n,r={})=>o=>{const i=df(r,e)||{},s=i.delay||r.delay||0;let{elapsed:a=0}=r;a=a-rr(s);const l=n8(t,e,n,i),u=l[0],d=l[l.length-1],f=Rc(e,u),h=Rc(e,d);let g={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...i,delay:-a,onUpdate:y=>{t.set(y),i.onUpdate&&i.onUpdate(y)},onComplete:()=>{o(),i.onComplete&&i.onComplete()}};if(r8(i)||(g={...g,...Q6(e,g)}),g.duration&&(g.duration=rr(g.duration)),g.repeatDelay&&(g.repeatDelay=rr(g.repeatDelay)),!f||!h||JS.current||i.type===!1||o8.skipAnimations)return W6(g);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const y=H6(t,e,g);if(y)return y}return ja(g)};function Pa(e){return!!(qe(e)&&e.add)}const Jy=e=>/^\-?\d*\.?\d+$/.test(e);function hf(e,t){e.indexOf(t)===-1&&e.push(t)}function pf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class mf{constructor(){this.subscriptions=[]}add(t){return hf(this.subscriptions,t),()=>pf(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,r);else for(let i=0;i<o;i++){const s=this.subscriptions[i];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const i8=e=>!isNaN(parseFloat(e));class s8{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,o=!0)=>{this.prev=this.current,this.current=r;const{delta:i,timestamp:s}=Me;this.lastUpdated!==s&&(this.timeDelta=i,this.lastUpdated=s,re.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>re.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=i8(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new mf);const r=this.events[t].add(n);return t==="change"?()=>{r(),re.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ky(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function uo(e,t){return new s8(e,t)}const Zy=e=>t=>t.test(e),a8={test:e=>e==="auto",parse:e=>e},ev=[gr,N,Nt,nn,hS,fS,a8],Ro=e=>ev.find(Zy(e)),l8=[...ev,Ne,Ln],u8=e=>l8.find(Zy(e));function c8(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,uo(n))}function d8(e,t){const n=ul(e,t);let{transitionEnd:r={},transition:o={},...i}=n?e.makeTargetAnimatable(n,!1):{};i={...i,...r};for(const s in i){const a=TS(i[s]);c8(e,s,a)}}function f8(e,t,n){var r,o;const i=Object.keys(t).filter(a=>!e.hasValue(a)),s=i.length;if(s)for(let a=0;a<s;a++){const l=i[a],u=t[l];let d=null;Array.isArray(u)&&(d=u[0]),d===null&&(d=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),d!=null&&(typeof d=="string"&&(Jy(d)||Xy(d))?d=parseFloat(d):!u8(d)&&Ln.test(u)&&(d=Qy(l,u)),e.addValue(l,uo(d,{owner:e})),n[l]===void 0&&(n[l]=d),d!==null&&e.setBaseTarget(l,d))}}function h8(e,t){return t?(t[e]||t.default||t).from:void 0}function p8(e,t,n){const r={};for(const o in e){const i=h8(o,t);if(i!==void 0)r[o]=i;else{const s=n.getValue(o);s&&(r[o]=s.get())}}return r}function m8({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function g8(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function tv(e,t,{delay:n=0,transitionOverride:r,type:o}={}){let{transition:i=e.getDefaultTransition(),transitionEnd:s,...a}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(i=r);const u=[],d=o&&e.animationState&&e.animationState.getState()[o];for(const f in a){const h=e.getValue(f),g=a[f];if(!h||g===void 0||d&&m8(d,f))continue;const y={delay:n,elapsed:0,...df(i||{},f)};if(window.HandoffAppearAnimations){const x=e.getProps()[ny];if(x){const m=window.HandoffAppearAnimations(x,f,h,re);m!==null&&(y.elapsed=m,y.isHandoff=!0)}}let v=!y.isHandoff&&!g8(h,g);if(y.type==="spring"&&(h.getVelocity()||y.velocity)&&(v=!1),h.animation&&(v=!1),v)continue;h.start(ff(f,h,g,e.shouldReduceMotion&&mr.has(f)?{type:!1}:y));const w=h.animation;Pa(l)&&(l.add(f),w.then(()=>l.remove(f))),u.push(w)}return s&&Promise.all(u).then(()=>{s&&d8(e,s)}),u}function Lc(e,t,n={}){const r=ul(e,t,n.custom);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(tv(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=o;return y8(e,t,u+l,d,f,n)}:()=>Promise.resolve(),{when:a}=o;if(a){const[l,u]=a==="beforeChildren"?[i,s]:[s,i];return l().then(()=>u())}else return Promise.all([i(),s(n.delay)])}function y8(e,t,n=0,r=0,o=1,i){const s=[],a=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(v8).forEach((u,d)=>{u.notify("AnimationStart",t),s.push(Lc(u,t,{...i,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(s)}function v8(e,t){return e.sortNodePosition(t)}function x8(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(i=>Lc(e,i,n));r=Promise.all(o)}else if(typeof t=="string")r=Lc(e,t,n);else{const o=typeof t=="function"?ul(e,t,n.custom):t;r=Promise.all(tv(e,o,n))}return r.then(()=>e.notify("AnimationComplete",t))}const w8=[...Qd].reverse(),S8=Qd.length;function k8(e){return t=>Promise.all(t.map(({animation:n,options:r})=>x8(e,n,r)))}function C8(e){let t=k8(e);const n=j8();let r=!0;const o=(l,u)=>{const d=ul(e,u);if(d){const{transition:f,transitionEnd:h,...g}=d;l={...l,...g,...h}}return l};function i(l){t=l(e)}function s(l,u){const d=e.getProps(),f=e.getVariantContext(!0)||{},h=[],g=new Set;let y={},v=1/0;for(let x=0;x<S8;x++){const m=w8[x],p=n[m],S=d[m]!==void 0?d[m]:f[m],C=ji(S),E=m===u?p.isActive:null;E===!1&&(v=x);let b=S===f[m]&&S!==d[m]&&C;if(b&&r&&e.manuallyAnimateOnMount&&(b=!1),p.protectedKeys={...y},!p.isActive&&E===null||!S&&!p.prevProp||il(S)||typeof S=="boolean")continue;let O=b8(p.prevProp,S)||m===u&&p.isActive&&!b&&C||x>v&&C,L=!1;const H=Array.isArray(S)?S:[S];let W=H.reduce(o,{});E===!1&&(W={});const{prevResolvedValues:J={}}=p,Y={...J,...W},Qe=U=>{O=!0,g.has(U)&&(L=!0,g.delete(U)),p.needsAnimating[U]=!0};for(const U in Y){const ge=W[U],A=J[U];if(y.hasOwnProperty(U))continue;let $=!1;ka(ge)&&ka(A)?$=!by(ge,A):$=ge!==A,$?ge!==void 0?Qe(U):g.add(U):ge!==void 0&&g.has(U)?Qe(U):p.protectedKeys[U]=!0}p.prevProp=S,p.prevResolvedValues=W,p.isActive&&(y={...y,...W}),r&&e.blockInitialAnimation&&(O=!1),O&&(!b||L)&&h.push(...H.map(U=>({animation:U,options:{type:m,...l}})))}if(g.size){const x={};g.forEach(m=>{const p=e.getBaseTarget(m);p!==void 0&&(x[m]=p)}),h.push({animation:x})}let w=!!h.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(h):Promise.resolve()}function a(l,u,d){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const h=s(d,l);for(const g in n)n[g].protectedKeys={};return h}return{animateChanges:s,setActive:a,setAnimateFunction:i,getState:()=>n}}function b8(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!by(t,e):!1}function _n(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function j8(){return{animate:_n(!0),whileInView:_n(),whileHover:_n(),whileTap:_n(),whileDrag:_n(),whileFocus:_n(),exit:_n()}}class P8 extends Fn{constructor(t){super(t),t.animationState||(t.animationState=C8(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),il(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let E8=0;class T8 extends Fn{constructor(){super(...arguments),this.id=E8++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===o)return;const i=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const R8={animation:{Feature:P8},exit:{Feature:T8}},Tp=(e,t)=>Math.abs(e-t);function A8(e,t){const n=Tp(e.x,t.x),r=Tp(e.y,t.y);return Math.sqrt(n**2+r**2)}class nv{constructor(t,n,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:i=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=tu(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,g=A8(f.offset,{x:0,y:0})>=3;if(!h&&!g)return;const{point:y}=f,{timestamp:v}=Me;this.history.push({...y,timestamp:v});const{onStart:w,onMove:x}=this.handlers;h||(w&&w(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=eu(h,this.transformPagePoint),re.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=tu(f.type==="pointercancel"?this.lastMoveEventInfo:eu(h,this.transformPagePoint),this.history);this.startEvent&&g&&g(f,w),y&&y(f,w)},!xy(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.contextWindow=o||window;const s=ll(t),a=eu(s,this.transformPagePoint),{point:l}=a,{timestamp:u}=Me;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,tu(a,this.history)),this.removeListeners=jn(Wt(this.contextWindow,"pointermove",this.handlePointerMove),Wt(this.contextWindow,"pointerup",this.handlePointerUp),Wt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Xt(this.updatePoint)}}function eu(e,t){return t?{point:t(e.point)}:e}function Rp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function tu({point:e},t){return{point:e,delta:Rp(e,rv(t)),offset:Rp(e,L8(t)),velocity:M8(t,.1)}}function L8(e){return e[0]}function rv(e){return e[e.length-1]}function M8(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=rv(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>rr(t)));)n--;if(!r)return{x:0,y:0};const i=Gt(o.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const s={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function rt(e){return e.max-e.min}function Mc(e,t=0,n=.01){return Math.abs(e-t)<=n}function Ap(e,t,n,r=.5){e.origin=r,e.originPoint=se(t.min,t.max,e.origin),e.scale=rt(n)/rt(t),(Mc(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=se(n.min,n.max,e.origin)-e.originPoint,(Mc(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ei(e,t,n,r){Ap(e.x,t.x,n.x,r?r.originX:void 0),Ap(e.y,t.y,n.y,r?r.originY:void 0)}function Lp(e,t,n){e.min=n.min+t.min,e.max=e.min+rt(t)}function O8(e,t,n){Lp(e.x,t.x,n.x),Lp(e.y,t.y,n.y)}function Mp(e,t,n){e.min=t.min-n.min,e.max=e.min+rt(t)}function ti(e,t,n){Mp(e.x,t.x,n.x),Mp(e.y,t.y,n.y)}function $8(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?se(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?se(n,e,r.max):Math.min(e,n)),e}function Op(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function D8(e,{top:t,left:n,bottom:r,right:o}){return{x:Op(e.x,n,o),y:Op(e.y,t,r)}}function $p(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function N8(e,t){return{x:$p(e.x,t.x),y:$p(e.y,t.y)}}function z8(e,t){let n=.5;const r=rt(e),o=rt(t);return o>r?n=Ei(t.min,t.max-r,e.min):r>o&&(n=Ei(e.min,e.max-o,t.min)),An(0,1,n)}function F8(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Oc=.35;function _8(e=Oc){return e===!1?e=0:e===!0&&(e=Oc),{x:Dp(e,"left","right"),y:Dp(e,"top","bottom")}}function Dp(e,t,n){return{min:Np(e,t),max:Np(e,n)}}function Np(e,t){return typeof e=="number"?e:e[t]||0}const zp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Hr=()=>({x:zp(),y:zp()}),Fp=()=>({min:0,max:0}),he=()=>({x:Fp(),y:Fp()});function lt(e){return[e("x"),e("y")]}function ov({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function I8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function V8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function nu(e){return e===void 0||e===1}function $c({scale:e,scaleX:t,scaleY:n}){return!nu(e)||!nu(t)||!nu(n)}function Gn(e){return $c(e)||iv(e)||e.z||e.rotate||e.rotateX||e.rotateY}function iv(e){return _p(e.x)||_p(e.y)}function _p(e){return e&&e!=="0%"}function Ea(e,t,n){const r=e-n,o=t*r;return n+o}function Ip(e,t,n,r,o){return o!==void 0&&(e=Ea(e,o,r)),Ea(e,n,r)+t}function Dc(e,t=0,n=1,r,o){e.min=Ip(e.min,t,n,r,o),e.max=Ip(e.max,t,n,r,o)}function sv(e,{x:t,y:n}){Dc(e.x,t.translate,t.scale,t.originPoint),Dc(e.y,n.translate,n.scale,n.originPoint)}function B8(e,t,n,r=!1){const o=n.length;if(!o)return;t.x=t.y=1;let i,s;for(let a=0;a<o;a++){i=n[a],s=i.projectionDelta;const l=i.instance;l&&l.style&&l.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Wr(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,sv(e,s)),r&&Gn(i.latestValues)&&Wr(e,i.latestValues))}t.x=Vp(t.x),t.y=Vp(t.y)}function Vp(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function sn(e,t){e.min=e.min+t,e.max=e.max+t}function Bp(e,t,[n,r,o]){const i=t[o]!==void 0?t[o]:.5,s=se(e.min,e.max,i);Dc(e,t[n],t[r],s,t.scale)}const U8=["x","scaleX","originX"],H8=["y","scaleY","originY"];function Wr(e,t){Bp(e.x,t,U8),Bp(e.y,t,H8)}function av(e,t){return ov(V8(e.getBoundingClientRect(),t))}function W8(e,t,n){const r=av(e,n),{scroll:o}=t;return o&&(sn(r.x,o.offset.x),sn(r.y,o.offset.y)),r}const lv=({current:e})=>e?e.ownerDocument.defaultView:null,G8=new WeakMap;class K8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=he(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ll(d,"page").point)},i=(d,f)=>{const{drag:h,dragPropagation:g,onDragStart:y}=this.getProps();if(h&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Sy(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),lt(w=>{let x=this.getAxisMotionValue(w).get()||0;if(Nt.test(x)){const{projection:m}=this.visualElement;if(m&&m.layout){const p=m.layout.layoutBox[w];p&&(x=rt(p)*(parseFloat(x)/100))}}this.originPoint[w]=x}),y&&re.update(()=>y(d,f),!1,!0);const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},s=(d,f)=>{const{dragPropagation:h,dragDirectionLock:g,onDirectionLock:y,onDrag:v}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:w}=f;if(g&&this.currentDirection===null){this.currentDirection=Y8(w),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,w),this.updateAxis("y",f.point,w),this.visualElement.render(),v&&v(d,f)},a=(d,f)=>this.stop(d,f),l=()=>lt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new nv(t,{onSessionStart:o,onStart:i,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:lv(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:i}=this.getProps();i&&re.update(()=>i(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!ds(t,o,this.currentDirection))return;const i=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=$8(s,this.constraints[t],this.elastic[t])),i.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,i=this.constraints;n&&Br(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&o?this.constraints=D8(o.layoutBox,n):this.constraints=!1,this.elastic=_8(r),i!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&lt(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=F8(o.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Br(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const i=W8(r,o.root,this.visualElement.getTransformPagePoint());let s=N8(o.layout.layoutBox,i);if(n){const a=n(I8(s));this.hasMutatedConstraints=!!a,a&&(s=ov(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:i,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=lt(d=>{if(!ds(d,n,this.currentDirection))return;let f=l&&l[d]||{};s&&(f={min:0,max:0});const h=o?200:1e6,g=o?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...i,...f};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(ff(t,r,0,n))}stopAnimation(){lt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){lt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),o=r[n];return o||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){lt(n=>{const{drag:r}=this.getProps();if(!ds(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,i=this.getAxisMotionValue(n);if(o&&o.layout){const{min:s,max:a}=o.layout.layoutBox[n];i.set(t[n]-se(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Br(n)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};lt(s=>{const a=this.getAxisMotionValue(s);if(a){const l=a.get();o[s]=z8({min:l,max:l},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),lt(s=>{if(!ds(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:u}=this.constraints[s];a.set(se(l,u,o[s]))})}addListeners(){if(!this.visualElement.current)return;G8.set(this.visualElement,this);const t=this.visualElement.current,n=Wt(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Br(l)&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,i=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),r();const s=Ut(window,"resize",()=>this.scalePositionWithinConstraints()),a=o.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(lt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),i(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:i=!1,dragElastic:s=Oc,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:i,dragElastic:s,dragMomentum:a}}}function ds(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Y8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class q8 extends Fn{constructor(t){super(t),this.removeGroupControls=de,this.removeListeners=de,this.controls=new K8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||de}unmount(){this.removeGroupControls(),this.removeListeners()}}const Up=e=>(t,n)=>{e&&re.update(()=>e(t,n))};class Q8 extends Fn{constructor(){super(...arguments),this.removePointerDownListener=de}onPointerDown(t){this.session=new nv(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:lv(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Up(t),onStart:Up(n),onMove:r,onEnd:(i,s)=>{delete this.session,o&&re.update(()=>o(i,s))}}}mount(){this.removePointerDownListener=Wt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function X8(){const e=j.useContext(Yd);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=j.useId();return j.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}const Vs={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ao={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=Hp(e,t.target.x),r=Hp(e,t.target.y);return`${n}% ${r}%`}},J8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=Ln.parse(e);if(o.length>5)return r;const i=Ln.createTransformer(e),s=typeof o[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;o[0+s]/=a,o[1+s]/=l;const u=se(a,l,.5);return typeof o[2+s]=="number"&&(o[2+s]/=u),typeof o[3+s]=="number"&&(o[3+s]/=u),i(o)}};class Z8 extends G.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:i}=t;iS(ek),i&&(n.group&&n.group.add(i),r&&r.register&&o&&r.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Vs.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:i}=this.props,s=r.projection;return s&&(s.isPresent=i,o||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?s.promote():s.relegate()||re.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function uv(e){const[t,n]=X8(),r=j.useContext(oy);return G.createElement(Z8,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(iy),isPresent:t,safeToRemove:n})}const ek={borderRadius:{...Ao,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ao,borderTopRightRadius:Ao,borderBottomLeftRadius:Ao,borderBottomRightRadius:Ao,boxShadow:J8},cv=["TopLeft","TopRight","BottomLeft","BottomRight"],tk=cv.length,Wp=e=>typeof e=="string"?parseFloat(e):e,Gp=e=>typeof e=="number"||N.test(e);function nk(e,t,n,r,o,i){o?(e.opacity=se(0,n.opacity!==void 0?n.opacity:1,rk(r)),e.opacityExit=se(t.opacity!==void 0?t.opacity:1,0,ok(r))):i&&(e.opacity=se(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<tk;s++){const a=`border${cv[s]}Radius`;let l=Kp(t,a),u=Kp(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Gp(l)===Gp(u)?(e[a]=Math.max(se(Wp(l),Wp(u),r),0),(Nt.test(u)||Nt.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=se(t.rotate||0,n.rotate||0,r))}function Kp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const rk=dv(0,.5,Oy),ok=dv(.5,.95,de);function dv(e,t,n){return r=>r<e?0:r>t?1:n(Ei(e,t,r))}function Yp(e,t){e.min=t.min,e.max=t.max}function at(e,t){Yp(e.x,t.x),Yp(e.y,t.y)}function qp(e,t,n,r,o){return e-=t,e=Ea(e,1/n,r),o!==void 0&&(e=Ea(e,1/o,r)),e}function ik(e,t=0,n=1,r=.5,o,i=e,s=e){if(Nt.test(t)&&(t=parseFloat(t),t=se(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=se(i.min,i.max,r);e===i&&(a-=t),e.min=qp(e.min,t,n,a,o),e.max=qp(e.max,t,n,a,o)}function Qp(e,t,[n,r,o],i,s){ik(e,t[n],t[r],t[o],t.scale,i,s)}const sk=["x","scaleX","originX"],ak=["y","scaleY","originY"];function Xp(e,t,n,r){Qp(e.x,t,sk,n?n.x:void 0,r?r.x:void 0),Qp(e.y,t,ak,n?n.y:void 0,r?r.y:void 0)}function Jp(e){return e.translate===0&&e.scale===1}function fv(e){return Jp(e.x)&&Jp(e.y)}function lk(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function hv(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Zp(e){return rt(e.x)/rt(e.y)}class uk{constructor(){this.members=[]}add(t){hf(this.members,t),t.scheduleRender()}remove(t){if(pf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const i=this.members[o];if(i.isPresent!==!1){r=i;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:o}=t.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function em(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y;if((o||i)&&(r=`translate3d(${o}px, ${i}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:d}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),d&&(r+=`rotateY(${d}deg) `)}const s=e.x.scale*t.x,a=e.y.scale*t.y;return(s!==1||a!==1)&&(r+=`scale(${s}, ${a})`),r||"none"}const ck=(e,t)=>e.depth-t.depth;class dk{constructor(){this.children=[],this.isDirty=!1}add(t){hf(this.children,t),this.isDirty=!0}remove(t){pf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(ck),this.isDirty=!1,this.children.forEach(t)}}function fk(e,t){const n=performance.now(),r=({timestamp:o})=>{const i=o-n;i>=t&&(Xt(r),e(i-t))};return re.read(r,!0),()=>Xt(r)}function hk(e){window.MotionDebug&&window.MotionDebug.record(e)}function pk(e){return e instanceof SVGElement&&e.tagName!=="svg"}function mk(e,t,n){const r=qe(e)?e:uo(e);return r.start(ff("",r,t,n)),r.animation}const tm=["","X","Y","Z"],gk={visibility:"hidden"},nm=1e3;let yk=0;const Kn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function pv({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(s={},a=t==null?void 0:t()){this.id=yk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Kn.totalNodes=Kn.resolvedTargetDeltas=Kn.recalculatedProjection=0,this.nodes.forEach(wk),this.nodes.forEach(jk),this.nodes.forEach(Pk),this.nodes.forEach(Sk),hk(Kn)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new dk)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new mf),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=pk(s),this.instance=s;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=fk(h,250),Vs.hasAnimatedSinceResize&&(Vs.hasAnimatedSinceResize=!1,this.nodes.forEach(om))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||d.getDefaultTransition()||Lk,{onLayoutAnimationStart:w,onLayoutAnimationComplete:x}=d.getProps(),m=!this.targetLayout||!hv(this.targetLayout,y)||g,p=!h&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||p||h&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,p);const S={...df(v,"layout"),onPlay:w,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else h||om(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Xt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ek),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(rm);return}this.isUpdating||this.nodes.forEach(Ck),this.isUpdating=!1,this.nodes.forEach(bk),this.nodes.forEach(vk),this.nodes.forEach(xk),this.clearAllSnapshots();const a=performance.now();Me.delta=An(0,1e3/60,a-Me.timestamp),Me.timestamp=a,Me.isProcessing=!0,Gl.update.process(Me),Gl.preRender.process(Me),Gl.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(kk),this.sharedNodes.forEach(Tk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,re.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){re.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=he(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!fv(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&(a||Gn(this.latestValues)||d)&&(o(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),Mk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return he();const a=s.measureViewportBox(),{scroll:l}=this.root;return l&&(sn(a.x,l.offset.x),sn(a.y,l.offset.y)),a}removeElementScroll(s){const a=he();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:f}=u;if(u!==this.root&&d&&f.layoutScroll){if(d.isRoot){at(a,s);const{scroll:h}=this.root;h&&(sn(a.x,-h.offset.x),sn(a.y,-h.offset.y))}sn(a.x,d.offset.x),sn(a.y,d.offset.y)}}return a}applyTransform(s,a=!1){const l=he();at(l,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Wr(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Gn(d.latestValues)&&Wr(l,d.latestValues)}return Gn(this.latestValues)&&Wr(l,this.latestValues),l}removeTransform(s){const a=he();at(a,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Gn(u.latestValues))continue;$c(u.latestValues)&&u.updateSnapshot();const d=he(),f=u.measurePageBox();at(d,f),Xp(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Gn(this.latestValues)&&Xp(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(s||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),ti(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=he(),this.targetWithTransforms=he()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),O8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):at(this.target,this.layout.layoutBox),sv(this.target,this.targetDelta)):at(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=he(),this.relativeTargetOrigin=he(),ti(this.relativeTargetOrigin,this.target,g.target),at(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Kn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||$c(this.parent.latestValues)||iv(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;at(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,g=this.treeScale.y;B8(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:y}=a;if(!y){this.projectionTransform&&(this.projectionDelta=Hr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Hr(),this.projectionDeltaWithTransform=Hr());const v=this.projectionTransform;ei(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=em(this.projectionDelta,this.treeScale),(this.projectionTransform!==v||this.treeScale.x!==h||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Kn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Hr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=he(),g=l?l.source:void 0,y=this.layout?this.layout.source:void 0,v=g!==y,w=this.getStack(),x=!w||w.members.length<=1,m=!!(v&&!x&&this.options.crossfade===!0&&!this.path.some(Ak));this.animationProgress=0;let p;this.mixTargetDelta=S=>{const C=S/1e3;im(f.x,s.x,C),im(f.y,s.y,C),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ti(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Rk(this.relativeTarget,this.relativeTargetOrigin,h,C),p&&lk(this.relativeTarget,p)&&(this.isProjectionDirty=!1),p||(p=he()),at(p,this.relativeTarget)),v&&(this.animationValues=d,nk(d,u,this.latestValues,C,m,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Xt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=re.update(()=>{Vs.hasAnimatedSinceResize=!0,this.currentAnimation=mk(0,nm,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=s;if(!(!a||!l||!u)){if(this!==s&&this.layout&&u&&mv(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||he();const f=rt(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=rt(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}at(a,l),Wr(a,d),ei(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new uk),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let d=0;d<tm.length;d++){const f="rotate"+tm[d];l[f]&&(u[f]=l[f],s.setStaticValue(f,0))}s.render();for(const d in u)s.setStaticValue(d,u[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return gk;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Is(s==null?void 0:s.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=Is(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Gn(this.latestValues)&&(v.transform=d?d({},""):"none",this.hasProjected=!1),v}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=em(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:g,y}=this.projectionDelta;u.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const v in wa){if(h[v]===void 0)continue;const{correct:w,applyTo:x}=wa[v],m=u.transform==="none"?h[v]:w(h[v],f);if(x){const p=x.length;for(let S=0;S<p;S++)u[x[S]]=m}else u[v]=m}return this.options.layoutId&&(u.pointerEvents=f===this?Is(s==null?void 0:s.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(rm),this.root.sharedNodes.clear()}}}function vk(e){e.updateLayout()}function xk(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=e.layout,{animationType:i}=e.options,s=n.source!==e.layout.source;i==="size"?lt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],g=rt(h);h.min=r[f].min,h.max=h.min+g}):mv(i,n.layoutBox,r)&&lt(f=>{const h=s?n.measuredBox[f]:n.layoutBox[f],g=rt(r[f]);h.max=h.min+g,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+g)});const a=Hr();ei(a,r,n.layoutBox);const l=Hr();s?ei(l,e.applyTransform(o,!0),n.measuredBox):ei(l,r,n.layoutBox);const u=!fv(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:g}=f;if(h&&g){const y=he();ti(y,n.layoutBox,h.layoutBox);const v=he();ti(v,r,g.layoutBox),hv(y,v)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=y,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function wk(e){Kn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Sk(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function kk(e){e.clearSnapshot()}function rm(e){e.clearMeasurements()}function Ck(e){e.isLayoutDirty=!1}function bk(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function om(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function jk(e){e.resolveTargetDelta()}function Pk(e){e.calcProjection()}function Ek(e){e.resetRotation()}function Tk(e){e.removeLeadSnapshot()}function im(e,t,n){e.translate=se(t.translate,0,n),e.scale=se(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function sm(e,t,n,r){e.min=se(t.min,n.min,r),e.max=se(t.max,n.max,r)}function Rk(e,t,n,r){sm(e.x,t.x,n.x,r),sm(e.y,t.y,n.y,r)}function Ak(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Lk={duration:.45,ease:[.4,0,.1,1]},am=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),lm=am("applewebkit/")&&!am("chrome/")?Math.round:de;function um(e){e.min=lm(e.min),e.max=lm(e.max)}function Mk(e){um(e.x),um(e.y)}function mv(e,t,n){return e==="position"||e==="preserve-aspect"&&!Mc(Zp(t),Zp(n),.2)}const Ok=pv({attachResizeListener:(e,t)=>Ut(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ru={current:void 0},gv=pv({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!ru.current){const e=new Ok({});e.mount(window),e.setOptions({layoutScroll:!0}),ru.current=e}return ru.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$k={pan:{Feature:Q8},drag:{Feature:q8,ProjectionNode:gv,MeasureLayout:uv}},Dk=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Nk(e){const t=Dk.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function Nc(e,t,n=1){const[r,o]=Nk(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const s=i.trim();return Jy(s)?parseFloat(s):s}else return jc(o)?Nc(o,t,n+1):o}function zk(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const i=o.get();if(!jc(i))return;const s=Nc(i,r);s&&o.set(s)});for(const o in t){const i=t[o];if(!jc(i))continue;const s=Nc(i,r);s&&(t[o]=s,n||(n={}),n[o]===void 0&&(n[o]=i))}return{target:t,transitionEnd:n}}const Fk=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),yv=e=>Fk.has(e),_k=e=>Object.keys(e).some(yv),cm=e=>e===gr||e===N,dm=(e,t)=>parseFloat(e.split(", ")[t]),fm=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return dm(o[1],t);{const i=r.match(/^matrix\((.+)\)$/);return i?dm(i[1],e):0}},Ik=new Set(["x","y","z"]),Vk=Fi.filter(e=>!Ik.has(e));function Bk(e){const t=[];return Vk.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const co={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:fm(4,13),y:fm(5,14)};co.translateX=co.x;co.translateY=co.y;const Uk=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,i=getComputedStyle(o),{display:s}=i,a={};s==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{a[u]=co[u](r,i)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const d=t.getValue(u);d&&d.jump(a[u]),e[u]=co[u](l,i)}),e},Hk=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(yv);let i=[],s=!1;const a=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let d=n[l],f=Ro(d);const h=t[l];let g;if(ka(h)){const y=h.length,v=h[0]===null?1:0;d=h[v],f=Ro(d);for(let w=v;w<y&&h[w]!==null;w++)g?sf(Ro(h[w])===g):g=Ro(h[w])}else g=Ro(h);if(f!==g)if(cm(f)&&cm(g)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof h=="string"?t[l]=parseFloat(h):Array.isArray(h)&&g===N&&(t[l]=h.map(parseFloat))}else f!=null&&f.transform&&(g!=null&&g.transform)&&(d===0||h===0)?d===0?u.set(g.transform(d)):t[l]=f.transform(h):(s||(i=Bk(e),s=!0),a.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(h))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=Uk(t,e,a);return i.length&&i.forEach(([d,f])=>{e.getValue(d).set(f)}),e.render(),ol&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function Wk(e,t,n,r){return _k(t)?Hk(e,t,n,r):{target:t,transitionEnd:r}}const Gk=(e,t,n,r)=>{const o=zk(e,t,r);return t=o.target,r=o.transitionEnd,Wk(e,t,n,r)},zc={current:null},vv={current:!1};function Kk(){if(vv.current=!0,!!ol)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>zc.current=e.matches;e.addListener(t),t()}else zc.current=!1}function Yk(e,t,n){const{willChange:r}=t;for(const o in t){const i=t[o],s=n[o];if(qe(i))e.addValue(o,i),Pa(r)&&r.add(o);else if(qe(s))e.addValue(o,uo(i,{owner:e})),Pa(r)&&r.remove(o);else if(s!==i)if(e.hasValue(o)){const a=e.getValue(o);!a.hasAnimated&&a.set(i)}else{const a=e.getStaticValue(o);e.addValue(o,uo(a!==void 0?a:i,{owner:e}))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const hm=new WeakMap,xv=Object.keys(Pi),qk=xv.length,pm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Qk=Xd.length;class Xk{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:o,visualState:i},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>re.render(this.render,!1,!0);const{latestValues:a,renderState:l}=i;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.isControllingVariants=sl(n),this.isVariantNode=ry(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{});for(const f in d){const h=d[f];a[f]!==void 0&&qe(h)&&(h.set(a[f],!1),Pa(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,hm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),vv.current||Kk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:zc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){hm.delete(this.current),this.projection&&this.projection.unmount(),Xt(this.notifyUpdate),Xt(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=mr.has(t),o=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&re.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),i=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),i()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,o,i){let s,a;for(let l=0;l<qk;l++){const u=xv[l],{isEnabled:d,Feature:f,ProjectionNode:h,MeasureLayout:g}=Pi[u];h&&(s=h),d(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),g&&(a=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:d,dragConstraints:f,layoutScroll:h,layoutRoot:g}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!d||f&&Br(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:h,layoutRoot:g})}return a}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):he()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<pm.length;r++){const o=pm[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const i=t["on"+o];i&&(this.propEventSubscriptions[o]=this.on(o,i))}this.prevMotionValues=Yk(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<Qk;r++){const o=Xd[r],i=this.props[o];(ji(i)||i===!1)&&(n[o]=i)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=uo(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=of(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!qe(i)?i:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new mf),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class wv extends Xk{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},i){let s=p8(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),s&&(s=o(s))),i){f8(this,r,s);const a=Gk(this,r,s,n);n=a.transitionEnd,r=a.target}return{transition:t,transitionEnd:n,...r}}}function Jk(e){return window.getComputedStyle(e)}class Zk extends wv{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(mr.has(n)){const r=cf(n);return r&&r.default||0}else{const r=Jk(t),o=(ly(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return av(t,n)}build(t,n,r,o){Zd(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t,n){return rf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;qe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,o){py(t,n,r,o)}}class eC extends wv{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(mr.has(n)){const r=cf(n);return r&&r.default||0}return n=my.has(n)?n:qd(n),t.getAttribute(n)}measureInstanceViewportBox(){return he()}scrapeMotionValuesFromProps(t,n){return yy(t,n)}build(t,n,r,o){tf(t,n,r,this.isSVGTag,o.transformTemplate)}renderInstance(t,n,r,o){gy(t,n,r,o)}mount(t){this.isSVGTag=nf(t.tagName),super.mount(t)}}const tC=(e,t)=>Jd(e)?new eC(t,{enableHardwareAcceleration:!1}):new Zk(t,{enableHardwareAcceleration:!0}),nC={layout:{ProjectionNode:gv,MeasureLayout:uv}},rC={...R8,...qS,...$k,...nC},be=rS((e,t)=>NS(e,t,rC,tC));var Sv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},mm=G.createContext&&G.createContext(Sv),Pn=function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Pn.apply(this,arguments)},oC=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function kv(e){return e&&e.map(function(t,n){return G.createElement(t.tag,Pn({key:n},t.attr),kv(t.child))})}function X(e){return function(t){return G.createElement(iC,Pn({attr:Pn({},e.attr)},t),kv(e.child))}}function iC(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,s=oC(e,["attr","size","title"]),a=o||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),G.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&G.createElement("title",null,i),e.children)};return mm!==void 0?G.createElement(mm.Consumer,null,function(n){return t(n)}):t(Sv)}function sC(e){return X({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"}}]})(e)}function aC(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Ta(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z"}}]})(e)}function lC(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"}}]})(e)}function gf(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function Cv(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M288 130.54V112h16c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16h-96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h16v18.54C115.49 146.11 32 239.18 32 352h448c0-112.82-83.49-205.89-192-221.46zM496 384H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"}}]})(e)}function ou(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}function Bi(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function uC(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M571.31 193.94l-22.63-22.63c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31-28.9-28.9c5.63-21.31.36-44.9-16.35-61.61l-45.25-45.25c-62.48-62.48-163.79-62.48-226.28 0l90.51 45.25v18.75c0 16.97 6.74 33.25 18.75 45.25l49.14 49.14c16.71 16.71 40.3 21.98 61.61 16.35l28.9 28.9-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l90.51-90.51c6.23-6.24 6.23-16.37-.02-22.62zm-286.72-15.2c-3.7-3.7-6.84-7.79-9.85-11.95L19.64 404.96c-25.57 23.88-26.26 64.19-1.53 88.93s65.05 24.05 88.93-1.53l238.13-255.07c-3.96-2.91-7.9-5.87-11.44-9.41l-49.14-49.14z"}}]})(e)}function bv(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"}}]})(e)}function jv(e){return X({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function un(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"}}]})(e)}function Pv(e){return X({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function cC(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 128V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32h352c17.67 0 32-14.33 32-32zm32-64v128c0 17.67-14.33 32-32 32H256c-35.35 0-64 28.65-64 64v32c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32v-32h160c53.02 0 96-42.98 96-96v-64c0-35.35-28.65-64-64-64z"}}]})(e)}function cl(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(e)}function gm(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"}}]})(e)}function Ev(e){return X({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"}}]})(e)}function dC(e){return X({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M635.7 167.2L556.1 31.7c-8.8-15-28.3-20.1-43.5-11.5l-69 39.1L503.3 161c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L416 75l-55.2 31.3 27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L333.2 122 278 153.3 337.8 255c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-59.7-101.7-55.2 31.3 27.9 47.4c2.2 3.8.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9l-27.9-47.5-55.2 31.3 59.7 101.7c2.2 3.7.9 8.5-2.9 10.7l-13.8 7.8c-3.8 2.2-8.7.9-10.9-2.9L84.9 262.9l-69 39.1C.7 310.7-4.6 329.8 4.2 344.8l79.6 135.6c8.8 15 28.3 20.1 43.5 11.5L624.1 210c15.2-8.6 20.4-27.8 11.6-42.8z"}}]})(e)}function fC(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"}}]})(e)}function hC(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function pC(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"}}]})(e)}function ym(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"}}]})(e)}function mC(e){return X({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function vm(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function gC(e){return X({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function pn(e){return X({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}function Tv(e){return X({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"}}]})(e)}const yC=()=>{const e=zn(),t=Nn(),[n,r]=j.useState(!1),o=(e==null?void 0:e.isAuthenticated)||!1,i=(e==null?void 0:e.user)||null,s=(e==null?void 0:e.logout)||(async()=>{});if(e!=null&&e.loading)return c.jsx(xm,{children:c.jsx(wm,{children:c.jsx(Sm,{to:"/",children:"Interior Design"})})});const a=async()=>{await s(),t("/"),r(!1)};return c.jsxs(xm,{children:[c.jsxs(wm,{children:[c.jsx(Sm,{to:"/",children:"Interior Design"}),c.jsxs(vC,{children:[c.jsx(Lo,{to:"/",children:"Home"}),c.jsx(Lo,{to:"/about",children:"About"}),c.jsx(Lo,{to:"/contact",children:"Contact"}),o?c.jsxs(c.Fragment,{children:[c.jsx(Lo,{to:"/profile",children:"Profile"}),["admin","super_admin"].includes(i==null?void 0:i.role)&&c.jsx(Lo,{to:"/admin",children:"Admin"}),c.jsxs(kC,{children:[c.jsxs(CC,{children:[c.jsx(pn,{}),c.jsx("span",{children:i&&i.firstName?i.firstName:"User"})]}),c.jsxs(bC,{onClick:a,children:[c.jsx(ym,{})," Logout"]})]})]}):c.jsxs(xC,{children:[c.jsx(wC,{to:"/login",children:"Login"}),c.jsx(SC,{to:"/register",children:"Sign Up"})]})]}),c.jsx(jC,{onClick:()=>r(!n),children:n?c.jsx(mC,{}):c.jsx(aC,{})})]}),n&&c.jsxs(PC,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[c.jsxs(In,{to:"/",onClick:()=>r(!1),children:[c.jsx(jv,{})," Home"]}),c.jsx(In,{to:"/about",onClick:()=>r(!1),children:"About"}),c.jsx(In,{to:"/contact",onClick:()=>r(!1),children:"Contact"}),o?c.jsxs(c.Fragment,{children:[c.jsxs(In,{to:"/profile",onClick:()=>r(!1),children:[c.jsx(pn,{})," Profile"]}),["admin","super_admin"].includes(i==null?void 0:i.role)&&c.jsx(In,{to:"/admin",onClick:()=>r(!1),children:"Admin"}),c.jsxs(EC,{onClick:a,children:[c.jsx(ym,{})," Logout"]})]}):c.jsxs(c.Fragment,{children:[c.jsx(In,{to:"/login",onClick:()=>r(!1),children:"Login"}),c.jsx(In,{to:"/register",onClick:()=>r(!1),children:"Sign Up"})]})]})]})},xm=k.nav`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: ${e=>e.theme.shadows.md};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`,wm=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`,Sm=k(Se)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-decoration: none;
`,vC=k.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`,Lo=k(Se)`
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
`,xC=k.div`
  display: flex;
  gap: 15px;
  align-items: center;
`,wC=k(Se)`
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
`,SC=k(Se)`
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
`,kC=k.div`
  display: flex;
  align-items: center;
  gap: 15px;
`,CC=k.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
`,bC=k.button`
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
`,jC=k.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${e=>e.theme.colors.dark};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,PC=k(be.div)`
  display: none;
  flex-direction: column;
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 20px;

  @media (max-width: 768px) {
    display: flex;
  }
`,In=k(Se)`
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
`,EC=k.button`
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
`,iu=({children:e})=>{const{isAuthenticated:t,loading:n}=zn();return n?c.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:c.jsx("div",{children:"Loading..."})}):t?e:c.jsx(Xw,{to:"/login",replace:!0})},Fc=F.create({baseURL:"/api",headers:{"Content-Type":"application/json"}}),TC=()=>c.jsxs(RC,{children:[c.jsxs(AC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[c.jsx("h1",{children:"Transform Your Space with Elegant Design"}),c.jsx("p",{children:"Professional interior decoration and restoration services that blend modern aesthetics with timeless elegance"}),c.jsxs(MC,{children:[c.jsx(OC,{as:Se,to:"/contact",children:"Get Free Consultation"}),c.jsx($C,{as:Se,to:"/projects",children:"View Our Work"})]})]}),c.jsx(LC,{initial:{opacity:0},animate:{opacity:.3},transition:{duration:1,delay:.5}})]}),RC=k.section`
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,AC=k(be.div)`
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
`,LC=k(be.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
`,MC=k.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,Rv=k(Se)`
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
`,OC=k(Rv)`
  background: white;
  color: #667eea;

  &:hover {
    background: #f8f9fa;
  }
`,$C=k(Rv)`
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background: white;
    color: #667eea;
  }
`,DC=({title:e,description:t,icon:n,link:r})=>c.jsxs("div",{style:{background:"#fff",borderRadius:8,padding:20,boxShadow:"0 8px 20px rgba(0,0,0,0.06)"},children:[c.jsx("div",{style:{fontSize:28,marginBottom:12},children:n}),c.jsx("h3",{style:{margin:"0 0 8px"},children:e}),c.jsx("p",{style:{margin:"0 0 12px",opacity:.8},children:t}),c.jsx(Se,{to:r,children:"Learn more →"})]}),NC=({project:e})=>{var t;return e?c.jsxs(yf,{as:Se,to:`/projects/${e._id}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},transition:{duration:.3},children:[e.images&&e.images.length>0&&c.jsxs(zC,{children:[c.jsx(FC,{src:e.images[0],alt:e.title}),e.featured&&c.jsx(_C,{children:"Featured"})]}),c.jsxs(IC,{children:[c.jsx(VC,{children:e.category}),c.jsx(BC,{children:e.title}),c.jsxs(UC,{children:[(t=e.description)==null?void 0:t.substring(0,100),"..."]}),e.location&&c.jsxs(HC,{children:["📍 ",e.location]})]})]}):null},yf=k(be.div)`
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
`,zC=k.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`,FC=k.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${yf}:hover & {
    transform: scale(1.1);
  }
`,_C=k.span`
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
`,IC=k.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,VC=k.span`
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

  ${yf}:hover & {
    background: ${e=>e.theme.gradients.primary};
    color: white;
    border-color: transparent;
  }
`,BC=k.h3`
  font-size: 1.3rem;
  color: ${e=>e.theme.colors.dark};
  margin: 0 0 10px 0;
  font-weight: 600;
`,UC=k.p`
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 15px 0;
  flex: 1;
`,HC=k.div`
  color: ${e=>e.theme.colors.textLight};
  font-size: 0.9rem;
  margin-top: auto;
`,WC=()=>{const e={background:"#fff",borderRadius:8,padding:20,boxShadow:"0 8px 20px rgba(0,0,0,0.06)"};return c.jsxs("div",{style:e,children:[c.jsx("strong",{children:"Testimonials"}),c.jsx("p",{style:{margin:0,opacity:.8},children:"Testimonials will appear here."})]})},GC=({onSearch:e})=>{const[t,n]=j.useState(""),r=Nn(),o=i=>{i.preventDefault(),t.trim()&&(e?e(t):r(`/search?q=${encodeURIComponent(t)}`))};return c.jsxs(KC,{onSubmit:o,children:[c.jsx(YC,{type:"text",placeholder:"Search projects, services...",value:t,onChange:i=>n(i.target.value)}),c.jsx(qC,{type:"submit",children:c.jsx(hC,{})})]})},KC=k.form`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 25px;
  padding: 8px 8px 8px 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
`,YC=k.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 8px 0;

  &::placeholder {
    color: #9ca3af;
  }
`,qC=k.button`
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
`;function QC(e){return X({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M18.08 23l.1 18H494V23H18.08zM254.3 54.93L133 61.6l30.1 68.5 98.1-3.6-6.9-71.57zm115.9.28l-92.9.53 3 71.96 96.8-.9-6.9-71.59zM18.23 56.43l.35 74.67 72.27-2.4 24.35-72.27H18.23zM393 64.24l-.5 47.16 15.7 21.5 85.8-6.3V64.93l-101-.69zM120.8 84.68l-17.6 49.82 41.1-1-8.2-34.02-15.3-14.8zm354.7 56.02l-4 75.5 22.5-.6v-74.9h-18.5zm-25.7 3.5l-97.3 10.7L346 219l110.7-3.2-6.9-71.6zm-243.8.7l-4 75.5 126.1-3.9 7-71.1-129.1-.5zm-145.33 2.7l-3.9 75.5 126.13-3.9-6.9-71.6H60.67zm-42 1.5l.33 72.4 24.77-.8-6.9-71.6h-18.2zm278.93 84.3L276 277.2l2.1 42 128.7-1.9-7.6-79.7-101.6-4.2zm-40.2 1.4l-127.2 6 8 69.5 124.7 6.6-5.5-82.1zm236.6 3.1l-66.5 2.9-7.5 75.8 74-5.2v-73.5zm-474.89 7l.31 65.8 100.78-3.1-6.9-62.7H19.11zm470.29 81.2l-115.9 10.5-3.3 65 121.5-3.5-2.3-72zm-422.36 4.1l-47.52 2 .34 72.9 51.1-1.3-3.92-73.6zm17.84 0l3.98 68.5 138.64 9.6-3-78.1H84.88zm161.22 4.3l-5.5 69 107.5 5.4-1-73.5-101-.9zm185.4 81.1l-4 75.5 66.5-.6v-73.8l-62.5-1.1zm-9.8 1.2l-39 3.6 27.4 28 11.6-31.6zm-399.46 1.8l-2.13 40.6.16 34.8H145.4v-68.9l-46.56-2.5-18.4 14L68.56 421l-46.32-2.4zm247.96.3l-111.3 1.5 3.5 72.5 114.7-2.4-6.9-71.6zm101.2 4.3l-72.2 5.9-8.9 62.1 125.6.6-6.2-27-38.3-41.6z"}}]})(e)}const XC=()=>{const[e,t]=j.useState([]),[n,r]=j.useState([]),o=[{_id:"1",title:"Modern Living Room",description:"Contemporary living space with elegant furnishings",image:"https://images.unsplash.com/photo-1565183938294-7563f3ff68c5?w=500&h=400&fit=crop",featured:!0,category:"Living Room"},{_id:"2",title:"Luxury Master Bedroom",description:"Sophisticated bedroom design with premium materials",image:"https://images.unsplash.com/photo-1540932239986-310128078f3c?w=500&h=400&fit=crop",featured:!0,category:"Bedroom"},{_id:"3",title:"Kitchen Renovation",description:"Modern kitchen with state-of-the-art appliances",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",featured:!0,category:"Kitchen"}],i=[{_id:"1",title:"Interior Design",description:"Custom designs tailored to your style"},{_id:"2",title:"Space Planning",description:"Optimize your space for comfort and function"},{_id:"3",title:"Color Consultation",description:"Expert color schemes for any room"},{_id:"4",title:"Furniture Selection",description:"Curated furniture for your home"}];j.useEffect(()=>{s(),a()},[]);const s=async()=>{try{const d=await Fc.get("/projects?featured=true");t(d.data.slice(0,3))}catch{console.warn("Using sample projects (API unavailable)"),t(o)}},a=async()=>{try{const d=await Fc.get("/services");r(d.data.slice(0,4))}catch{console.warn("Using sample services (API unavailable)"),r(i)}},l=[{title:"Interior Design",description:"Custom interior solutions for residential and commercial spaces",icon:c.jsx(jv,{}),link:"/services#design"},{title:"Restoration",description:"Preserving and restoring historical and vintage interiors",icon:c.jsx(QC,{}),link:"/services#restoration"},{title:"Decoration",description:"Complete decoration services with modern aesthetics",icon:c.jsx(cC,{}),link:"/services#decoration"},{title:"Renovation",description:"Transforming spaces with innovative renovation solutions",icon:c.jsx(uC,{}),link:"/services#renovation"}],u=d=>{console.log("Searching for:",d)};return c.jsxs(c.Fragment,{children:[c.jsx(TC,{}),c.jsx(JC,{children:c.jsx(Mo,{children:c.jsx(GC,{onSearch:u})})}),c.jsx(Bs,{children:c.jsxs(Mo,{children:[c.jsxs(su,{children:[c.jsx("h2",{children:"Our Services"}),c.jsx("p",{children:"Comprehensive interior solutions for every space"})]}),c.jsx(ZC,{children:l.map((d,f)=>c.jsx(DC,{title:d.title,description:d.description,icon:d.icon,link:d.link},f))})]})}),c.jsx(Bs,{dark:!0,children:c.jsxs(Mo,{children:[c.jsxs(su,{light:!0,children:[c.jsx("h2",{children:"Featured Projects"}),c.jsx("p",{children:"Explore our recent interior design and restoration work"})]}),c.jsx(eb,{children:e.map(d=>c.jsx(NC,{project:d},d._id))}),c.jsx(tb,{children:c.jsx(au,{as:Se,to:"/projects",variant:"outline",children:"View All Projects"})})]})}),c.jsx(nb,{children:c.jsx(Mo,{children:c.jsxs(rb,{children:[c.jsx("h2",{children:"Ready to Transform Your Space?"}),c.jsx("p",{children:"Get a free consultation with our interior design experts"}),c.jsxs(ob,{children:[c.jsx(au,{as:Se,to:"/contact",primary:!0,children:"Book Consultation"}),c.jsx(au,{as:Se,to:"/projects",variant:"outline",children:"View Portfolio"})]})]})})}),c.jsx(Bs,{children:c.jsxs(Mo,{children:[c.jsxs(su,{children:[c.jsx("h2",{children:"Client Testimonials"}),c.jsx("p",{children:"What our clients say about our work"})]}),c.jsx(WC,{})]})})]})},JC=k.section`
  padding: 40px 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
`,Bs=k.section`
  padding: 80px 0;
  background: ${e=>e.dark?e.theme.colors.dark:e.theme.colors.light};
`,Mo=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,su=k.div`
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
`,ZC=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`,eb=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`,tb=k.div`
  text-align: center;
`,au=k(Se)`
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
`,nb=k(Bs)`
  background: linear-gradient(135deg, ${e=>e.theme.colors.primary} 0%, ${e=>e.theme.colors.secondary} 100%);
  color: white;
  text-align: center;
`,rb=k.div`
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
`,ob=k.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,ib=()=>{const[e,t]=j.useState({name:"",email:"",phone:"",service:"",message:""}),[n,r]=j.useState(!1),[o,i]=j.useState(null),s=l=>{t({...e,[l.target.name]:l.target.value})},a=async l=>{l.preventDefault(),r(!0);try{await Fc.post("/contact",e),i("success"),t({name:"",email:"",phone:"",service:"",message:""})}catch(u){i("error"),console.error("Error submitting form:",u)}finally{r(!1),setTimeout(()=>i(null),5e3)}};return c.jsxs(sb,{children:[c.jsxs(ab,{children:[c.jsx("h1",{children:"Contact Us"}),c.jsx("p",{children:"Let's discuss your interior design and restoration needs"})]}),c.jsx(lb,{children:c.jsxs(ub,{children:[c.jsxs(cb,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},children:[c.jsx("h2",{children:"Send us a Message"}),o==="success"&&c.jsx(yb,{children:"Thank you for your message! We'll get back to you soon."}),o==="error"&&c.jsx(vb,{children:"There was an error sending your message. Please try again."}),c.jsxs(db,{onSubmit:a,children:[c.jsxs(Oo,{children:[c.jsx($o,{htmlFor:"name",children:"Full Name *"}),c.jsx(lu,{type:"text",id:"name",name:"name",value:e.name,onChange:s,required:!0})]}),c.jsxs(Oo,{children:[c.jsx($o,{htmlFor:"email",children:"Email Address *"}),c.jsx(lu,{type:"email",id:"email",name:"email",value:e.email,onChange:s,required:!0})]}),c.jsxs(Oo,{children:[c.jsx($o,{htmlFor:"phone",children:"Phone Number"}),c.jsx(lu,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:s})]}),c.jsxs(Oo,{children:[c.jsx($o,{htmlFor:"service",children:"Service Interested In"}),c.jsxs(fb,{id:"service",name:"service",value:e.service,onChange:s,children:[c.jsx("option",{value:"",children:"Select a service"}),c.jsx("option",{value:"interior-design",children:"Interior Design"}),c.jsx("option",{value:"restoration",children:"Restoration"}),c.jsx("option",{value:"decoration",children:"Decoration"}),c.jsx("option",{value:"renovation",children:"Renovation"}),c.jsx("option",{value:"consultation",children:"Consultation"})]})]}),c.jsxs(Oo,{children:[c.jsx($o,{htmlFor:"message",children:"Message *"}),c.jsx(hb,{id:"message",name:"message",rows:"5",value:e.message,onChange:s,required:!0})]}),c.jsx(pb,{type:"submit",disabled:n,children:n?"Sending...":"Send Message"})]})]}),c.jsxs(mb,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.6},children:[c.jsx("h2",{children:"Get in Touch"}),c.jsxs(fs,{children:[c.jsx(hs,{children:c.jsx(cl,{})}),c.jsxs("div",{children:[c.jsx("h4",{children:"Phone"}),c.jsx("p",{children:"+1 (555) 123-4567"})]})]}),c.jsxs(fs,{children:[c.jsx(hs,{children:c.jsx(Bi,{})}),c.jsxs("div",{children:[c.jsx("h4",{children:"Email"}),c.jsx("p",{children:"info@interiordesign.com"})]})]}),c.jsxs(fs,{children:[c.jsx(hs,{children:c.jsx(Pv,{})}),c.jsxs("div",{children:[c.jsx("h4",{children:"Address"}),c.jsx("p",{children:"123 Design Street, Creative City, CC 12345"})]})]}),c.jsxs(fs,{children:[c.jsx(hs,{children:c.jsx(gf,{})}),c.jsxs("div",{children:[c.jsx("h4",{children:"Business Hours"}),c.jsx("p",{children:"Monday - Friday: 9:00 AM - 6:00 PM"}),c.jsx("p",{children:"Saturday: 10:00 AM - 4:00 PM"})]})]}),c.jsx(gb,{children:c.jsx("iframe",{title:"Location Map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c3a4b7c5%3A0x9ef9b6c9e9b6c9e9!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1615529328331!5m2!1sen!2s",width:"100%",height:"300",style:{border:0},allowFullScreen:"",loading:"lazy"})})]})]})})]})},sb=k.div`
  min-height: 100vh;
`,ab=k.div`
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
`,lb=k.div`
  max-width: 1200px;
  margin: -50px auto 0;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`,ub=k.div`
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
`,cb=k(be.div)`
  padding: 50px;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`,db=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Oo=k.div`
  display: flex;
  flex-direction: column;
`,$o=k.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
`,lu=k.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,fb=k.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,hb=k.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`,pb=k.button`
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
`,mb=k(be.div)`
  padding: 50px;
  background: #f8f9fa;

  h2 {
    margin-bottom: 30px;
    color: #333;
  }
`,fs=k.div`
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
`,hs=k.div`
  color: #667eea;
  font-size: 20px;
  margin-top: 5px;
`,gb=k.div`
  margin-top: 40px;
  border-radius: 8px;
  overflow: hidden;

  iframe {
    display: block;
  }
`,yb=k.div`
  background: #d4edda;
  color: #155724;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #c3e6cb;
`,vb=k.div`
  background: #f8d7da;
  color: #721c24;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 1px solid #f5c6cb;
`,xb=()=>{const[e,t]=j.useState({email:"",password:""}),[n,r]=j.useState(""),[o,i]=j.useState(!1),{login:s}=zn(),a=Nn(),l=d=>{t({...e,[d.target.name]:d.target.value}),r("")},u=async d=>{d.preventDefault(),r(""),i(!0);try{const f=await s(e.email,e.password);f.success?a("/profile"):r(f.error||"Login failed. Please try again.")}catch{r("An unexpected error occurred. Please try again.")}finally{i(!1)}};return c.jsx(wb,{children:c.jsxs(Sb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(kb,{children:[c.jsx(Cb,{children:c.jsx(pC,{})}),c.jsx("h1",{children:"Welcome Back"}),c.jsx("p",{children:"Sign in to your account to continue"})]}),n&&c.jsx(Eb,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:n}),c.jsxs(bb,{onSubmit:u,children:[c.jsxs(km,{children:[c.jsxs(Cm,{htmlFor:"email",children:[c.jsx(Bi,{})," Email Address"]}),c.jsx(bm,{type:"email",id:"email",name:"email",value:e.email,onChange:l,placeholder:"Enter your email",required:!0})]}),c.jsxs(km,{children:[c.jsxs(Cm,{htmlFor:"password",children:[c.jsx(un,{})," Password"]}),c.jsx(bm,{type:"password",id:"password",name:"password",value:e.password,onChange:l,placeholder:"Enter your password",required:!0})]}),c.jsx(jb,{to:"/forgot-password",children:"Forgot your password?"}),c.jsx(Pb,{type:"submit",disabled:o,children:o?"Signing in...":"Sign In"})]}),c.jsxs(Tb,{children:["Don't have an account? ",c.jsx(Se,{to:"/register",children:"Sign up"})]})]})})},wb=k.div`
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
`,Sb=k(be.div)`
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
`,kb=k.div`
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
`,Cb=k.div`
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
`,bb=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,km=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Cm=k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,bm=k.input`
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
`,jb=k(Se)`
  text-align: right;
  color: ${e=>e.theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${e=>e.theme.colors.secondary};
    text-decoration: underline;
  }
`,Pb=k.button`
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
`,Eb=k(be.div)`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`,Tb=k.p`
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
`,Rb=()=>{const[e,t]=j.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:"",phone:""}),[n,r]=j.useState(""),[o,i]=j.useState({}),[s,a]=j.useState(!1),{register:l}=zn(),u=Nn(),d=g=>{t({...e,[g.target.name]:g.target.value}),r(""),o[g.target.name]&&i({...o,[g.target.name]:""})},f=()=>{const g={};return e.password!==e.confirmPassword&&(g.confirmPassword="Passwords do not match"),e.password.length<6&&(g.password="Password must be at least 6 characters"),i(g),Object.keys(g).length===0},h=async g=>{if(g.preventDefault(),r(""),i({}),!!f()){a(!0);try{const{confirmPassword:y,...v}=e,w=await l(v);if(w.success)u("/profile");else{if(w.errors){const x={};w.errors.forEach(m=>{m.path&&(x[m.path]=m.msg)}),i(x)}r(w.error||"Registration failed. Please try again.")}}catch{r("An unexpected error occurred. Please try again.")}finally{a(!1)}}};return c.jsx(Ab,{children:c.jsxs(Lb,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(Mb,{children:[c.jsx(Ob,{children:c.jsx(gC,{})}),c.jsx("h1",{children:"Create Account"}),c.jsx("p",{children:"Sign up to get started with our services"})]}),n&&c.jsx(zb,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},children:n}),c.jsxs($b,{onSubmit:h,children:[c.jsxs(Db,{children:[c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"firstName",children:[c.jsx(pn,{})," First Name"]}),c.jsx(Cr,{type:"text",id:"firstName",name:"firstName",value:e.firstName,onChange:d,placeholder:"John",required:!0,hasError:!!o.firstName}),o.firstName&&c.jsx(br,{children:o.firstName})]}),c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"lastName",children:[c.jsx(pn,{})," Last Name"]}),c.jsx(Cr,{type:"text",id:"lastName",name:"lastName",value:e.lastName,onChange:d,placeholder:"Doe",required:!0,hasError:!!o.lastName}),o.lastName&&c.jsx(br,{children:o.lastName})]})]}),c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"email",children:[c.jsx(Bi,{})," Email Address"]}),c.jsx(Cr,{type:"email",id:"email",name:"email",value:e.email,onChange:d,placeholder:"john.doe@example.com",required:!0,hasError:!!o.email}),o.email&&c.jsx(br,{children:o.email})]}),c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"phone",children:[c.jsx(cl,{})," Phone Number (Optional)"]}),c.jsx(Cr,{type:"tel",id:"phone",name:"phone",value:e.phone,onChange:d,placeholder:"+1 234 567 8900",hasError:!!o.phone}),o.phone&&c.jsx(br,{children:o.phone})]}),c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"password",children:[c.jsx(un,{})," Password"]}),c.jsx(Cr,{type:"password",id:"password",name:"password",value:e.password,onChange:d,placeholder:"At least 6 characters",required:!0,hasError:!!o.password}),o.password&&c.jsx(br,{children:o.password})]}),c.jsxs(Sr,{children:[c.jsxs(kr,{htmlFor:"confirmPassword",children:[c.jsx(un,{})," Confirm Password"]}),c.jsx(Cr,{type:"password",id:"confirmPassword",name:"confirmPassword",value:e.confirmPassword,onChange:d,placeholder:"Re-enter your password",required:!0,hasError:!!o.confirmPassword}),o.confirmPassword&&c.jsx(br,{children:o.confirmPassword})]}),c.jsx(Nb,{type:"submit",disabled:s,children:s?"Creating Account...":"Create Account"})]}),c.jsxs(Fb,{children:["Already have an account? ",c.jsx(Se,{to:"/login",children:"Sign in"})]})]})})},Ab=k.div`
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
`,Lb=k(be.div)`
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
`,Mb=k.div`
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
`,Ob=k.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`,$b=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Db=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Sr=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,kr=k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,Cr=k.input`
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
`,br=k.span`
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: -5px;
`,Nb=k.button`
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
`,zb=k(be.div)`
  background: #fee2e2;
  color: #dc2626;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`,Fb=k.p`
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
`,_b=()=>{const{user:e,loading:t,updateProfile:n,updatePassword:r,uploadAvatar:o}=zn(),[i,s]=j.useState("profile"),[a,l]=j.useState({firstName:"",lastName:"",phone:""});j.useEffect(()=>{e&&l({firstName:e.firstName||"",lastName:e.lastName||"",phone:e.phone||""})},[e]);const[u,d]=j.useState({currentPassword:"",newPassword:"",confirmPassword:""}),[f,h]=j.useState({type:"",text:""}),[g,y]=j.useState(!1),v=S=>{l({...a,[S.target.name]:S.target.value})},w=S=>{d({...u,[S.target.name]:S.target.value})},x=async S=>{S.preventDefault(),y(!0),h({type:"",text:""});try{const C=await n(a);C.success?h({type:"success",text:"Profile updated successfully!"}):h({type:"error",text:C.error})}catch{h({type:"error",text:"Failed to update profile"})}finally{y(!1)}},m=async S=>{if(S.preventDefault(),h({type:"",text:""}),u.newPassword!==u.confirmPassword){h({type:"error",text:"Passwords do not match"});return}if(u.newPassword.length<6){h({type:"error",text:"Password must be at least 6 characters"});return}y(!0);try{const C=await r(u.currentPassword,u.newPassword);C.success?(h({type:"success",text:"Password updated successfully!"}),d({currentPassword:"",newPassword:"",confirmPassword:""})):h({type:"error",text:C.error})}catch{h({type:"error",text:"Failed to update password"})}finally{y(!1)}},p=async S=>{const C=S.target.files[0];if(C){if(C.size>5*1024*1024){h({type:"error",text:"File size must be less than 5MB"});return}y(!0),h({type:"",text:""});try{const E=await o(C);E.success?h({type:"success",text:"Avatar updated successfully!"}):h({type:"error",text:E.error})}catch{h({type:"error",text:"Failed to upload avatar"})}finally{y(!1)}}};return t?c.jsx(uu,{children:c.jsx(Am,{children:"Loading..."})}):e?c.jsxs(uu,{children:[c.jsxs(Ib,{children:[c.jsx("h1",{children:"My Profile"}),c.jsx("p",{children:"Manage your account settings and preferences"})]}),c.jsxs(Vb,{children:[c.jsxs(Bb,{children:[c.jsxs(jm,{active:i==="profile",onClick:()=>s("profile"),children:[c.jsx(pn,{})," Profile Information"]}),c.jsxs(jm,{active:i==="password",onClick:()=>s("password"),children:[c.jsx(un,{})," Change Password"]})]}),c.jsxs(Ub,{children:[f.text&&c.jsx(qb,{type:f.type,children:f.text}),i==="profile"&&c.jsx(be.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},children:c.jsxs(Pm,{children:[c.jsx(Em,{children:c.jsx("h2",{children:"Profile Information"})}),c.jsxs(Hb,{children:[c.jsx(Wb,{children:e!=null&&e.avatar?c.jsx("img",{src:`http://localhost:5000${e.avatar}`,alt:"Avatar"}):c.jsx(pn,{})}),c.jsxs(Gb,{children:[c.jsx("input",{type:"file",id:"avatar",accept:"image/*",onChange:p,style:{display:"none"}}),c.jsxs("label",{htmlFor:"avatar",children:[c.jsx(lC,{})," Change Avatar"]})]})]}),c.jsxs(Tm,{onSubmit:x,children:[c.jsxs(Kb,{children:[c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(pn,{})," First Name"]}),c.jsx(Un,{type:"text",name:"firstName",value:a.firstName,onChange:v,required:!0})]}),c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(pn,{})," Last Name"]}),c.jsx(Un,{type:"text",name:"lastName",value:a.lastName,onChange:v,required:!0})]})]}),c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(Bi,{})," Email"]}),c.jsx(Un,{type:"email",value:(e==null?void 0:e.email)||"",disabled:!0,style:{opacity:.6}}),c.jsx(Yb,{children:"Email cannot be changed"})]}),c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(cl,{})," Phone Number"]}),c.jsx(Un,{type:"tel",name:"phone",value:a.phone,onChange:v,placeholder:"+1 234 567 8900"})]}),c.jsxs(Rm,{type:"submit",disabled:g,children:[c.jsx(fC,{})," ",g?"Saving...":"Save Changes"]})]})]})}),i==="password"&&c.jsx(be.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},children:c.jsxs(Pm,{children:[c.jsx(Em,{children:c.jsx("h2",{children:"Change Password"})}),c.jsxs(Tm,{onSubmit:m,children:[c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(un,{})," Current Password"]}),c.jsx(Un,{type:"password",name:"currentPassword",value:u.currentPassword,onChange:w,required:!0})]}),c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(un,{})," New Password"]}),c.jsx(Un,{type:"password",name:"newPassword",value:u.newPassword,onChange:w,required:!0,minLength:6})]}),c.jsxs(Vn,{children:[c.jsxs(Bn,{children:[c.jsx(un,{})," Confirm New Password"]}),c.jsx(Un,{type:"password",name:"confirmPassword",value:u.confirmPassword,onChange:w,required:!0,minLength:6})]}),c.jsxs(Rm,{type:"submit",disabled:g,children:[c.jsx(un,{})," ",g?"Updating...":"Update Password"]})]})]})})]})]})]}):c.jsx(uu,{children:c.jsx(Am,{children:"Please log in to view your profile."})})},uu=k.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,Ib=k.div`
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
`,Vb=k.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Bb=k.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: auto;
  }
`,jm=k.button`
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
`,Ub=k.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`,Pm=k.div``,Em=k.div`
  margin-bottom: 30px;

  h2 {
    font-size: 1.8rem;
    color: ${e=>e.theme.colors.dark};
  }
`,Hb=k.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e7eb;
`,Wb=k.div`
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
`,Gb=k.div`
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
`,Tm=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Kb=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Vn=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Bn=k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,Un=k.input`
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
`,Yb=k.span`
  font-size: 0.85rem;
  color: ${e=>e.theme.colors.textLight};
`,Rm=k.button`
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
`,qb=k.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${e=>e.type==="success"?"#d1fae5":"#fee2e2"};
  color: ${e=>e.type==="success"?"#065f46":"#dc2626"};
`,Am=k.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,Qb=()=>{const e=[{icon:c.jsx(Ev,{}),number:"500+",label:"Projects Completed"},{icon:c.jsx(Tv,{}),number:"300+",label:"Happy Clients"},{icon:c.jsx(sC,{}),number:"15+",label:"Years Experience"},{icon:c.jsx(bv,{}),number:"100%",label:"Client Satisfaction"}],t=[{title:"Excellence",description:"We strive for perfection in every project, ensuring the highest quality standards."},{title:"Innovation",description:"We embrace new ideas and cutting-edge design trends to create unique spaces."},{title:"Integrity",description:"We build trust through honest communication and transparent processes."},{title:"Passion",description:"We are passionate about transforming spaces and creating beautiful interiors."}];return c.jsxs(Xb,{children:[c.jsxs(Jb,{children:[c.jsx(be.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:"About Us"}),c.jsx(be.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:"Creating beautiful spaces that reflect your style and personality"})]}),c.jsx(Lm,{children:c.jsx(ps,{children:c.jsxs(Zb,{children:[c.jsx("h2",{children:"Our Story"}),c.jsx("p",{children:"Founded with a vision to transform ordinary spaces into extraordinary living environments, we have been at the forefront of interior design and restoration for over 15 years. Our team of experienced designers and craftsmen work together to bring your vision to life."}),c.jsx("p",{children:"We specialize in residential and commercial interior design, historical restoration, and modern decoration. Every project is approached with attention to detail, creativity, and a commitment to excellence."})]})})}),c.jsx(ej,{children:c.jsx(ps,{children:c.jsx(tj,{children:e.map((n,r)=>c.jsx(be.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5,delay:r*.1},children:c.jsxs(nj,{children:[c.jsx(rj,{children:n.icon}),c.jsx(oj,{children:n.number}),c.jsx(ij,{children:n.label})]})},r))})})}),c.jsx(Lm,{children:c.jsxs(ps,{children:[c.jsxs(sj,{children:[c.jsx("h2",{children:"Our Values"}),c.jsx("p",{children:"What drives us every day"})]}),c.jsx(aj,{children:t.map((n,r)=>c.jsx(be.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:r*.1},children:c.jsxs(lj,{children:[c.jsx("h3",{children:n.title}),c.jsx("p",{children:n.description})]})},r))})]})}),c.jsx(uj,{children:c.jsx(ps,{children:c.jsxs(cj,{children:[c.jsx("h2",{children:"Ready to Start Your Project?"}),c.jsx("p",{children:"Let's work together to create something amazing"}),c.jsxs(dj,{children:[c.jsx(Mm,{href:"/contact",children:"Get in Touch"}),c.jsx(Mm,{href:"/booking",variant:"outline",children:"Book Consultation"})]})]})})})]})},Xb=k.div`
  min-height: 100vh;
`,Jb=k.section`
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
`,Lm=k.section`
  padding: 80px 0;
  background: ${e=>e.theme.colors.light};
`,ps=k.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Zb=k.div`
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
`,ej=k.section`
  padding: 80px 0;
  background: white;
`,tj=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`,nj=k.div`
  text-align: center;
  padding: 40px 20px;
`,rj=k.div`
  font-size: 3rem;
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 20px;
`,oj=k.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.dark};
  margin-bottom: 10px;
`,ij=k.div`
  font-size: 1.1rem;
  color: ${e=>e.theme.colors.textLight};
`,sj=k.div`
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
`,aj=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`,lj=k.div`
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
`,uj=k.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`,cj=k.div`
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
`,dj=k.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`,Mm=k.a`
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
`,fj=()=>{const{isAuthenticated:e,user:t}=zn(),n=Nn(),[r,o]=j.useState({service:"",date:"",time:"",message:"",phone:(t==null?void 0:t.phone)||"",email:(t==null?void 0:t.email)||""}),[i,s]=j.useState(!1),[a,l]=j.useState({type:"",text:""}),u=["Interior Design Consultation","Restoration Services","Decoration Services","Renovation Planning","Space Planning","Color Consultation","Furniture Selection","Lighting Design"],d=["09:00 AM","10:00 AM","11:00 AM","12:00 PM","01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM"],f=g=>{o({...r,[g.target.name]:g.target.value})},h=async g=>{var y,v;if(g.preventDefault(),!e){n("/login");return}s(!0),l({type:"",text:""});try{await F.post("/bookings",{...r,contactInfo:{phone:r.phone,email:r.email}}),l({type:"success",text:"Booking request submitted successfully! We will contact you soon."}),o({service:"",date:"",time:"",message:"",phone:(t==null?void 0:t.phone)||"",email:(t==null?void 0:t.email)||""})}catch(w){l({type:"error",text:((v=(y=w.response)==null?void 0:y.data)==null?void 0:v.message)||"Failed to submit booking"})}finally{s(!1)}};return e?c.jsx(Om,{children:c.jsxs(hj,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[c.jsxs(pj,{children:[c.jsx(mj,{children:c.jsx(Ta,{})}),c.jsx("h1",{children:"Book a Consultation"}),c.jsx("p",{children:"Schedule a meeting with our interior design experts"})]}),a.text&&c.jsx(wj,{type:a.type,children:a.text}),c.jsxs(gj,{onSubmit:h,children:[c.jsxs(jr,{children:[c.jsxs(Pr,{children:[c.jsx(Cv,{})," Service Type"]}),c.jsxs($m,{name:"service",value:r.service,onChange:f,required:!0,children:[c.jsx("option",{value:"",children:"Select a service"}),u.map(g=>c.jsx("option",{value:g,children:g},g))]})]}),c.jsxs(yj,{children:[c.jsxs(jr,{children:[c.jsxs(Pr,{children:[c.jsx(Ta,{})," Date"]}),c.jsx(cu,{type:"date",name:"date",value:r.date,onChange:f,min:new Date().toISOString().split("T")[0],required:!0})]}),c.jsxs(jr,{children:[c.jsxs(Pr,{children:[c.jsx(gf,{})," Time"]}),c.jsxs($m,{name:"time",value:r.time,onChange:f,required:!0,children:[c.jsx("option",{value:"",children:"Select time"}),d.map(g=>c.jsx("option",{value:g,children:g},g))]})]})]}),c.jsxs(jr,{children:[c.jsxs(Pr,{children:[c.jsx(cl,{})," Phone Number"]}),c.jsx(cu,{type:"tel",name:"phone",value:r.phone,onChange:f,required:!0})]}),c.jsxs(jr,{children:[c.jsxs(Pr,{children:[c.jsx(Bi,{})," Email"]}),c.jsx(cu,{type:"email",name:"email",value:r.email,onChange:f,required:!0})]}),c.jsxs(jr,{children:[c.jsx(Pr,{children:"Additional Message (Optional)"}),c.jsx(vj,{name:"message",value:r.message,onChange:f,rows:"4",placeholder:"Tell us about your project or any specific requirements..."})]}),c.jsx(xj,{type:"submit",disabled:i,children:i?"Submitting...":"Book Consultation"})]})]})}):c.jsx(Om,{children:c.jsxs(Sj,{children:[c.jsx("h2",{children:"Please Login"}),c.jsx("p",{children:"You need to be logged in to book a consultation."}),c.jsx(kj,{onClick:()=>n("/login"),children:"Go to Login"})]})})},Om=k.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 40px 20px;
`,hj=k(be.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 600px;
`,pj=k.div`
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
`,mj=k.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`,gj=k.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,yj=k.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,jr=k.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Pr=k.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${e=>e.theme.colors.dark};
  font-weight: 500;
  font-size: 0.9rem;

  svg {
    color: ${e=>e.theme.colors.primary};
  }
`,cu=k.input`
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
`,$m=k.select`
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
`,vj=k.textarea`
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
`,xj=k.button`
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
`,wj=k.div`
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${e=>e.type==="success"?"#d1fae5":"#fee2e2"};
  color: ${e=>e.type==="success"?"#065f46":"#dc2626"};
`,Sj=k.div`
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
`,kj=k.button`
  padding: 12px 30px;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`,Cj=()=>{const{id:e}=Nw(),t=Nn(),{isAuthenticated:n}=zn(),[r,o]=j.useState(null),[i,s]=j.useState(!1),[a,l]=j.useState(!0);j.useEffect(()=>{u(),n&&d()},[e,n]);const u=async()=>{try{const h=await F.get(`/projects/${e}`);o(h.data)}catch(h){console.error("Error fetching project:",h)}finally{l(!1)}},d=async()=>{try{const h=await F.get(`/favorites/check/${e}`);s(h.data.isFavorited)}catch(h){console.error("Error checking favorite:",h)}},f=async()=>{if(!n){t("/login");return}try{i?(await F.delete(`/favorites/${e}`),s(!1)):(await F.post(`/favorites/${e}`),s(!0))}catch(h){console.error("Error toggling favorite:",h)}};return a?c.jsx(du,{children:c.jsx(Fj,{children:"Loading..."})}):r?c.jsxs(du,{children:[c.jsx(bj,{onClick:()=>t(-1),children:"← Back"}),c.jsxs(jj,{children:[c.jsxs(Pj,{children:[c.jsx("h1",{children:r.title}),c.jsx(Ej,{children:r.category})]}),n&&c.jsxs(Tj,{onClick:f,favorited:i,children:[c.jsx(bv,{})," ",i?"Favorited":"Add to Favorites"]})]}),r.images&&r.images.length>0&&c.jsx(Rj,{children:r.images.map((h,g)=>c.jsx(Aj,{src:h,alt:`${r.title} - Image ${g+1}`},g))}),c.jsxs(Lj,{children:[c.jsxs(Mj,{children:[c.jsxs(Dm,{children:[c.jsx("h2",{children:"About This Project"}),c.jsx("p",{children:r.description})]}),r.services&&r.services.length>0&&c.jsxs(Dm,{children:[c.jsx("h2",{children:"Services Used"}),c.jsx(Oj,{children:r.services.map((h,g)=>c.jsx($j,{children:h},g))})]})]}),c.jsxs(Dj,{children:[c.jsxs(Av,{children:[c.jsx("h3",{children:"Project Details"}),r.location&&c.jsxs(fu,{children:[c.jsx(Pv,{})," ",r.location]}),r.area&&c.jsxs(fu,{children:[c.jsx(dC,{})," ",r.area]}),r.completionDate&&c.jsxs(fu,{children:[c.jsx(gf,{})," Completed: ",new Date(r.completionDate).toLocaleDateString()]})]}),c.jsxs(Nj,{children:[c.jsx("h3",{children:"Book a Consultation"}),c.jsx("p",{children:"Interested in a similar project?"}),c.jsxs(zj,{as:Se,to:"/booking",children:[c.jsx(Ta,{})," Book Now"]})]})]})]})]}):c.jsx(du,{children:c.jsx(_j,{children:"Project not found"})})},du=k.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,bj=k.button`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: block;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.primary};
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 0;
`,jj=k.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Pj=k.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 15px;
  }
`,Ej=k.span`
  display: inline-block;
  padding: 8px 16px;
  background: ${e=>e.theme.colors.primary};
  color: white;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
`,Tj=k.button`
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
`,Rj=k.div`
  max-width: 1200px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`,Aj=k.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,Lj=k.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`,Mj=k.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`,Dm=k.div`
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
`,Oj=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,$j=k.span`
  padding: 8px 16px;
  background: ${e=>e.theme.colors.light};
  color: ${e=>e.theme.colors.dark};
  border-radius: 20px;
  font-size: 0.9rem;
`,Dj=k.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Av=k.div`
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h3 {
    color: ${e=>e.theme.colors.dark};
    margin-bottom: 20px;
  }
`,fu=k.div`
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
`,Nj=k(Av)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  h3 {
    color: white;
  }

  p {
    margin-bottom: 20px;
    opacity: 0.9;
  }
`,zj=k(Se)`
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
`,Fj=k.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,_j=k.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
`,Ij=()=>{const{user:e}=zn(),[t,n]=j.useState(null),[r,o]=j.useState([]),[i,s]=j.useState([]),[a,l]=j.useState([]),[u,d]=j.useState("overview"),[f,h]=j.useState(!0);j.useEffect(()=>{e&&["admin","super_admin"].includes(e.role)&&g()},[e]);const g=async()=>{try{const[v,w,x,m]=await Promise.all([F.get("/admin/dashboard"),F.get("/admin/projects"),F.get("/admin/services"),F.get("/bookings")]);n(v.data.data.stats),o(w.data.data),s(x.data.data),l(m.data.data)}catch(v){console.error("Error fetching dashboard data:",v)}finally{h(!1)}},y=async(v,w)=>{if(window.confirm(`Are you sure you want to delete this ${v}?`))try{await F.delete(`/admin/${v}s/${w}`),g()}catch{alert("Failed to delete")}};return!e||!["admin","super_admin"].includes(e.role)?c.jsx(hu,{children:c.jsx(Yj,{children:"Access denied. Admin privileges required."})}):f?c.jsx(hu,{children:c.jsx(Kj,{children:"Loading..."})}):c.jsxs(hu,{children:[c.jsxs(Vj,{children:[c.jsx("h1",{children:"Admin Dashboard"}),c.jsx("p",{children:"Manage your website content and users"})]}),c.jsxs(Bj,{children:[c.jsx(ms,{active:u==="overview",onClick:()=>d("overview"),children:"Overview"}),c.jsx(ms,{active:u==="projects",onClick:()=>d("projects"),children:"Projects"}),c.jsx(ms,{active:u==="services",onClick:()=>d("services"),children:"Services"}),c.jsx(ms,{active:u==="bookings",onClick:()=>d("bookings"),children:"Bookings"})]}),u==="overview"&&t&&c.jsxs(Uj,{children:[c.jsxs(Hj,{children:[c.jsxs(gs,{children:[c.jsx(ys,{color:"#667eea",children:c.jsx(Ev,{})}),c.jsx(vs,{children:t.projects}),c.jsx(xs,{children:"Projects"})]}),c.jsxs(gs,{children:[c.jsx(ys,{color:"#764ba2",children:c.jsx(Cv,{})}),c.jsx(vs,{children:t.services}),c.jsx(xs,{children:"Services"})]}),c.jsxs(gs,{children:[c.jsx(ys,{color:"#f59e0b",children:c.jsx(Tv,{})}),c.jsx(vs,{children:t.users}),c.jsx(xs,{children:"Users"})]}),c.jsxs(gs,{children:[c.jsx(ys,{color:"#10b981",children:c.jsx(Ta,{})}),c.jsx(vs,{children:t.bookings}),c.jsx(xs,{children:"Bookings"})]})]}),c.jsxs(Wj,{children:[c.jsx("h2",{children:"Recent Bookings"}),a.slice(0,5).map(v=>{var w,x;return c.jsxs(Gj,{children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[(w=v.user)==null?void 0:w.firstName," ",(x=v.user)==null?void 0:x.lastName]}),c.jsx("span",{children:v.service})]}),c.jsx(Nm,{status:v.status,children:v.status})]},v._id)})]})]}),u==="projects"&&c.jsxs(pu,{children:[c.jsxs(mu,{children:[c.jsx("h2",{children:"Projects"}),c.jsxs(zm,{children:[c.jsx(gm,{})," Add Project"]})]}),c.jsxs(gu,{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Title"}),c.jsx("th",{children:"Category"}),c.jsx("th",{children:"Featured"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:r.map(v=>c.jsxs("tr",{children:[c.jsx("td",{children:v.title}),c.jsx("td",{children:v.category}),c.jsx("td",{children:v.featured?"Yes":"No"}),c.jsxs("td",{children:[c.jsx(Do,{children:c.jsx(ou,{})}),c.jsx(Do,{danger:!0,onClick:()=>y("project",v._id),children:c.jsx(vm,{})})]})]},v._id))})]})]}),u==="services"&&c.jsxs(pu,{children:[c.jsxs(mu,{children:[c.jsx("h2",{children:"Services"}),c.jsxs(zm,{children:[c.jsx(gm,{})," Add Service"]})]}),c.jsxs(gu,{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Description"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:i.map(v=>{var w;return c.jsxs("tr",{children:[c.jsx("td",{children:v.name}),c.jsxs("td",{children:[(w=v.description)==null?void 0:w.substring(0,50),"..."]}),c.jsxs("td",{children:[c.jsx(Do,{children:c.jsx(ou,{})}),c.jsx(Do,{danger:!0,onClick:()=>y("service",v._id),children:c.jsx(vm,{})})]})]},v._id)})})]})]}),u==="bookings"&&c.jsxs(pu,{children:[c.jsx(mu,{children:c.jsx("h2",{children:"All Bookings"})}),c.jsxs(gu,{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"User"}),c.jsx("th",{children:"Service"}),c.jsx("th",{children:"Date"}),c.jsx("th",{children:"Status"}),c.jsx("th",{children:"Actions"})]})}),c.jsx("tbody",{children:a.map(v=>{var w,x;return c.jsxs("tr",{children:[c.jsxs("td",{children:[(w=v.user)==null?void 0:w.firstName," ",(x=v.user)==null?void 0:x.lastName]}),c.jsx("td",{children:v.service}),c.jsx("td",{children:new Date(v.date).toLocaleDateString()}),c.jsx("td",{children:c.jsx(Nm,{status:v.status,children:v.status})}),c.jsx("td",{children:c.jsx(Do,{children:c.jsx(ou,{})})})]},v._id)})})]})]})]})},hu=k.div`
  min-height: 100vh;
  background: ${e=>e.theme.colors.light};
  padding: 40px 20px;
`,Vj=k.div`
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
`,Bj=k.div`
  max-width: 1200px;
  margin: 0 auto 30px;
  display: flex;
  gap: 10px;
  border-bottom: 2px solid #e5e7eb;
`,ms=k.button`
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
`,Uj=k.div`
  max-width: 1200px;
  margin: 0 auto;
`,Hj=k.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`,gs=k(be.div)`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
`,ys=k.div`
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
`,vs=k.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${e=>e.theme.colors.dark};
  margin-bottom: 5px;
`,xs=k.div`
  color: ${e=>e.theme.colors.textLight};
  font-size: 1rem;
`,Wj=k.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);

  h2 {
    margin-bottom: 20px;
    color: ${e=>e.theme.colors.dark};
  }
`,Gj=k.div`
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
`,Nm=k.span`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  background: ${e=>{switch(e.status){case"confirmed":return"#d1fae5";case"pending":return"#fef3c7";case"cancelled":return"#fee2e2";default:return"#e5e7eb"}}};
  color: ${e=>{switch(e.status){case"confirmed":return"#065f46";case"pending":return"#92400e";case"cancelled":return"#991b1b";default:return"#374151"}}};
`,pu=k.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`,mu=k.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: ${e=>e.theme.colors.dark};
  }
`,zm=k.button`
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
`,gu=k.table`
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
`,Do=k.button`
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
`,Kj=k.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: ${e=>e.theme.colors.textLight};
`,Yj=k.div`
  text-align: center;
  padding: 100px 20px;
  font-size: 1.2rem;
  color: #dc2626;
  background: white;
  border-radius: 12px;
  max-width: 600px;
  margin: 50px auto;
`;console.log("📱 App component loading...");const qj=()=>(console.log("📱 App component rendering..."),c.jsxs(c.Fragment,{children:[c.jsx(yC,{}),c.jsxs(Zw,{children:[c.jsx(Lt,{path:"/",element:c.jsx(XC,{})}),c.jsx(Lt,{path:"/about",element:c.jsx(Qb,{})}),c.jsx(Lt,{path:"/contact",element:c.jsx(ib,{})}),c.jsx(Lt,{path:"/login",element:c.jsx(xb,{})}),c.jsx(Lt,{path:"/register",element:c.jsx(Rb,{})}),c.jsx(Lt,{path:"/projects/:id",element:c.jsx(Cj,{})}),c.jsx(Lt,{path:"/profile",element:c.jsx(iu,{children:c.jsx(_b,{})})}),c.jsx(Lt,{path:"/booking",element:c.jsx(iu,{children:c.jsx(fj,{})})}),c.jsx(Lt,{path:"/admin",element:c.jsx(iu,{children:c.jsx(Ij,{})})})]})]})),Qj=f4`
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
`,Xj={colors:{primary:"#667eea",secondary:"#764ba2",accent:"#f5576c",text:"#1f2937",textLight:"#6b7280",textLighter:"#9ca3af",background:"#ffffff",light:"#f9fafb",dark:"#111827",success:"#10b981",error:"#ef4444",warning:"#f59e0b",info:"#3b82f6"},gradients:{primary:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",secondary:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",accent:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",dark:"linear-gradient(135deg, #1f2937 0%, #111827 100%)"},shadows:{sm:"0 2px 4px rgba(0, 0, 0, 0.05)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",inner:"inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",colored:"0 10px 30px rgba(102, 126, 234, 0.3)"},borderRadius:{sm:"0.375rem",md:"0.5rem",lg:"0.75rem",xl:"1rem","2xl":"1.5rem",full:"9999px"},spacing:{xs:"0.5rem",sm:"0.75rem",md:"1rem",lg:"1.5rem",xl:"2rem","2xl":"3rem","3xl":"4rem"},breakpoints:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},transitions:{fast:"0.15s cubic-bezier(0.4, 0, 0.2, 1)",base:"0.3s cubic-bezier(0.4, 0, 0.2, 1)",slow:"0.5s cubic-bezier(0.4, 0, 0.2, 1)"}};console.log("🚀 App starting...");try{yu.createRoot(document.getElementById("root")).render(c.jsx(H5,{children:c.jsxs(u4,{theme:Xj,children:[c.jsx(Qj,{}),c.jsx(s3,{children:c.jsx(U5,{children:c.jsx(qj,{})})})]})})),console.log("✅ App rendered successfully")}catch(e){console.error("❌ Error rendering app:",e)}
