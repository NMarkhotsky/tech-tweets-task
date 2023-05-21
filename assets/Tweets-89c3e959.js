import{s as E,P as O,j as b,G as Ee,r as T,L as Je}from"./index-4da34553.js";function Ae(e,t){return function(){return e.apply(t,arguments)}}const{toString:Ve}=Object.prototype,{getPrototypeOf:oe}=Object,J=(e=>t=>{const n=Ve.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>J(t)===e),V=e=>t=>typeof t===e,{isArray:B}=Array,D=V("undefined");function We(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&R(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Se=N("ArrayBuffer");function $e(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}const Ye=V("string"),R=V("function"),Re=V("number"),W=e=>e!==null&&typeof e=="object",Ke=e=>e===!0||e===!1,M=e=>{if(J(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Qe=N("Date"),Ge=N("File"),Xe=N("Blob"),Ze=N("FileList"),et=e=>W(e)&&R(e.pipe),tt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||R(e.append)&&((t=J(e))==="formdata"||t==="object"&&R(e.toString)&&e.toString()==="[object FormData]"))},nt=N("URLSearchParams"),rt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Te=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ce=e=>!D(e)&&e!==Te;function ee(){const{caseless:e}=Ce(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;M(t[o])&&M(r)?t[o]=ee(t[o],r):M(r)?t[o]=ee({},r):B(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&U(arguments[r],n);return t}const st=(e,t,n,{allOwnKeys:r}={})=>(U(t,(s,o)=>{n&&R(s)?e[o]=Ae(s,n):e[o]=s},{allOwnKeys:r}),e),ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),it=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},at=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&oe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ct=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},lt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ut=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),dt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ft=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},pt=N("HTMLFormElement"),ht=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),de=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),mt=N("RegExp"),Ne=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},bt=e=>{Ne(e,(t,n)=>{if(R(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(R(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},gt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return B(e)?r(e):r(String(e).split(t)),n},yt=()=>{},wt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Q="abcdefghijklmnopqrstuvwxyz",fe="0123456789",je={DIGIT:fe,ALPHA:Q,ALPHA_DIGIT:Q+Q.toUpperCase()+fe},xt=(e=16,t=je.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Et(e){return!!(e&&R(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const At=e=>{const t=new Array(10),n=(r,s)=>{if(W(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=B(r)?[]:{};return U(r,(i,l)=>{const p=n(i,s+1);!D(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},St=N("AsyncFunction"),Rt=e=>e&&(W(e)||R(e))&&R(e.then)&&R(e.catch),a={isArray:B,isArrayBuffer:Se,isBuffer:We,isFormData:tt,isArrayBufferView:$e,isString:Ye,isNumber:Re,isBoolean:Ke,isObject:W,isPlainObject:M,isUndefined:D,isDate:Qe,isFile:Ge,isBlob:Xe,isRegExp:mt,isFunction:R,isStream:et,isURLSearchParams:nt,isTypedArray:ut,isFileList:Ze,forEach:U,merge:ee,extend:st,trim:rt,stripBOM:ot,inherits:it,toFlatObject:at,kindOf:J,kindOfTest:N,endsWith:ct,toArray:lt,forEachEntry:dt,matchAll:ft,isHTMLForm:pt,hasOwnProperty:de,hasOwnProp:de,reduceDescriptors:Ne,freezeMethods:bt,toObjectSet:gt,toCamelCase:ht,noop:yt,toFiniteNumber:wt,findKey:Oe,global:Te,isContextDefined:Ce,ALPHABET:je,generateString:xt,isSpecCompliantForm:Et,toJSONObject:At,isAsyncFn:St,isThenable:Rt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Le=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(m,Pe);Object.defineProperty(Le,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Le);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Ot=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function ke(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map(function(s,o){return s=ke(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Tt(e){return a.isArray(e)&&!e.some(te)}const Ct=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function $(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(f,A){return!a.isUndefined(A[f])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,f,A){let w=d;if(d&&!A&&typeof d=="object"){if(a.endsWith(f,"{}"))f=r?f:f.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Tt(d)||(a.isFileList(d)||a.endsWith(f,"[]"))&&(w=a.toArray(d)))return f=ke(f),w.forEach(function(P,I){!(a.isUndefined(P)||P===null)&&t.append(i===!0?pe([f],I,o):i===null?f:f+"[]",c(P))}),!1}return te(d)?!0:(t.append(pe(A,f,o),c(d)),!1)}const h=[],y=Object.assign(Ct,{defaultVisitor:u,convertValue:c,isVisitable:te});function g(d,f){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+f.join("."));h.push(d),a.forEach(d,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,f,y))===!0&&g(w,f?f.concat(S):[S])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function he(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ie(e,t){this._pairs=[],e&&$(e,this,t)}const Be=ie.prototype;Be.append=function(t,n){this._pairs.push([t,n])};Be.toString=function(t){const n=t?function(r){return t.call(this,r,he)}:he;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Nt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fe(e,t,n){if(!t)return e;const r=n&&n.encode||Nt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ie(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const me=jt,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Lt=typeof URLSearchParams<"u"?URLSearchParams:ie,Pt=typeof FormData<"u"?FormData:null,kt=typeof Blob<"u"?Blob:null,Bt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Ft=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),C={isBrowser:!0,classes:{URLSearchParams:Lt,FormData:Pt,Blob:kt},isStandardBrowserEnv:Bt,isStandardBrowserWebWorkerEnv:Ft,protocols:["http","https","file","blob","url","data"]};function Dt(e,t){return $(e,new C.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return C.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Ut(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function _t(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Ue(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=_t(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Ut(r),s,n,0)}),n}return null}const It={"Content-Type":void 0};function Mt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Y={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return $(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Mt(t)):t}],transformResponse:[function(t){const n=this.transitional||Y.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:C.classes.FormData,Blob:C.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){Y.headers[t]={}});a.forEach(["post","put","patch"],function(t){Y.headers[t]=a.merge(It)});const ae=Y,qt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&qt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},be=Symbol("internals");function F(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function Ht(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Jt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Vt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,c){const u=F(p);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||p]=q(l))}const i=(l,p)=>a.forEach(l,(c,u)=>o(c,u,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!vt(t)?i(zt(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=F(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ht(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=F(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=F(i),i){const l=a.findKey(r,i);l&&(!n||G(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||G(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const l=t?Jt(o):String(o).trim();l!==o&&delete n[o],n[l]=q(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[be]=this[be]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=F(i);r[l]||(Vt(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.freezeMethods(K.prototype);a.freezeMethods(K);const j=K;function X(e,t){const n=this||ae,r=t||n,s=j.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function _e(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});function Wt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const $t=C.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&p.push("expires="+new Date(s).toGMTString()),a.isString(o)&&p.push("path="+o),a.isString(i)&&p.push("domain="+i),l===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Yt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Kt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!Yt(t)?Kt(e,t):t}const Qt=C.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Gt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Xt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),u=r[o];i||(i=c),n[s]=p,r[s]=c;let h=o,y=0;for(;h!==s;)y+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const g=u&&c-u;return g?Math.round(y*1e3/g):void 0}}function ge(e,t){let n=0;const r=Xt(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,p=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:p||void 0,estimated:p&&i&&c?(i-o)/p:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Zt=typeof XMLHttpRequest<"u",en=Zt&&function(e){return new Promise(function(n,r){let s=e.data;const o=j.from(e.headers).normalize(),i=e.responseType;let l;function p(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(C.isStandardBrowserEnv||C.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",d=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(g+":"+d))}const u=Ie(e.baseURL,e.url);c.open(e.method.toUpperCase(),Fe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const g=j.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),f={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:g,config:e,request:c};Wt(function(w){n(w),p()},function(w){r(w),p()},f),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let d=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const f=e.transitional||De;e.timeoutErrorMessage&&(d=e.timeoutErrorMessage),r(new m(d,f.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},C.isStandardBrowserEnv){const g=(e.withCredentials||Qt(u))&&e.xsrfCookieName&&$t.read(e.xsrfCookieName);g&&o.set(e.xsrfHeaderName,g)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(d,f){c.setRequestHeader(f,d)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=g=>{c&&(r(!g||g.type?new _(null,e,c):g),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=Gt(u);if(y&&C.protocols.indexOf(y)===-1){r(new m("Unsupported protocol "+y+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},z={http:Ot,xhr:en};a.forEach(z,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?z[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(z,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:z};function Z(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function ye(e){return Z(e),e.headers=j.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||ae.adapter)(e).then(function(r){return Z(e),r.data=X.call(e,e.transformResponse,r),r.headers=j.from(r.headers),r},function(r){return _e(r)||(Z(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=j.from(r.response.headers))),Promise.reject(r)})}const we=e=>e instanceof j?e.toJSON():e;function k(e,t){t=t||{};const n={};function r(c,u,h){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:h},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,h){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,u,h)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,h){if(h in t)return r(c,u);if(h in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(we(c),we(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=p[u]||s,y=h(e[u],t[u],u);a.isUndefined(y)&&h!==l||(n[u]=y)}),n}const Me="1.4.0",ce={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ce[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const xe={};ce.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Me+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!xe[i]&&(xe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function nn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new m("option "+o+" must be "+p,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const ne={assertOptions:nn,validators:ce},L=ne.validators;class v{constructor(t){this.defaults=t,this.interceptors={request:new me,response:new me}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=k(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ne.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=j.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(p=p&&f.synchronous,l.unshift(f.fulfilled,f.rejected))});const c=[];this.interceptors.response.forEach(function(f){c.push(f.fulfilled,f.rejected)});let u,h=0,y;if(!p){const d=[ye.bind(this),void 0];for(d.unshift.apply(d,l),d.push.apply(d,c),y=d.length,u=Promise.resolve(n);h<y;)u=u.then(d[h++],d[h++]);return u}y=l.length;let g=n;for(h=0;h<y;){const d=l[h++],f=l[h++];try{g=d(g)}catch(A){f.call(this,A);break}}try{u=ye.call(this,g)}catch(d){return Promise.reject(d)}for(h=0,y=c.length;h<y;)u=u.then(c[h++],c[h++]);return u}getUri(t){t=k(this.defaults,t);const n=Ie(t.baseURL,t.url);return Fe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){v.prototype[t]=function(n,r){return this.request(k(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(k(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}v.prototype[t]=n(),v.prototype[t+"Form"]=n(!0)});const H=v;class le{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new _(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new le(function(s){t=s}),cancel:t}}}const rn=le;function sn(e){return function(n){return e.apply(null,n)}}function on(e){return a.isObject(e)&&e.isAxiosError===!0}const re={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(re).forEach(([e,t])=>{re[t]=e});const an=re;function qe(e){const t=new H(e),n=Ae(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return qe(k(e,s))},n}const x=qe(ae);x.Axios=H;x.CanceledError=_;x.CancelToken=rn;x.isCancel=_e;x.VERSION=Me;x.toFormData=$;x.AxiosError=m;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=sn;x.isAxiosError=on;x.mergeConfig=k;x.AxiosHeaders=j;x.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);x.HttpStatusCode=an;x.default=x;const ue=x;ue.defaults.baseURL="https://6453ab91c18adbbdfea42414.mockapi.io";const cn=async()=>{try{return await ue.get("/users")}catch(e){console.log(e)}},ln=async(e,t,n)=>{try{return await ue.put(`/users/${e}`,{followers:t,following:n})}catch(r){console.log(r)}},un="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",dn="/tech-tweets-task/assets/background-9f4b25d6.png",fn=E.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 460px;
  padding: 28px 0 36px;

  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`,pn=E.img`
  position: absolute;
  top: 20px;
  left: 20px;
`,hn=E.img`
  margin: 0 auto;
`,mn=E.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 8px;
  margin: 18px 0 62px 0;

  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px,
    rgb(174, 123, 227) 0px -2px 3px inset, rgb(251, 248, 255) 0px 3px 3px inset;
`,bn=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: rgb(235, 216, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px,
    rgb(174, 123, 227) 0px -2px 4px inset, rgb(251, 248, 255) 0px 4px 3px inset;
  border-radius: 50%;
`,gn=E.img`
  border-radius: 50%;
  overflow: hidden;
`,yn=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 26px;
`,wn=E.button`
  padding: 14px 39px;
  min-width: 196px;

  font-weight: 600;
  font-size: 18px;

  border-radius: 10px;
  border: none;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);

  background-color: ${e=>e.value?"#ebd8ff":"#5CD3A8"};

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: ${e=>e.value?"#ebd8ffae":"#5cd3a7ae"};
  }
`,ze=({id:e,avatar:t,followers:n,following:r,tweets:s,user:o,onClick:i})=>b.jsxs(fn,{children:[b.jsx(pn,{src:un,alt:"logo",loading:"lazy"}),b.jsx(hn,{src:dn,alt:"Background",loading:"lazy"}),b.jsx(mn,{children:b.jsx(bn,{children:b.jsx(gn,{src:t,alt:o,width:62,height:62,loading:"lazy"})})}),b.jsxs(yn,{children:[b.jsx("p",{children:o}),b.jsxs("p",{children:[s," TWEETS"]}),b.jsxs("p",{children:[n.toLocaleString("en-US")," FOLLOWERS"]})]}),b.jsx(wn,{type:"button",value:r,onClick:()=>i(e,r),children:r?"Follow":"Following"})]});ze.propTypes={id:O.string.isRequired,avatar:O.string.isRequired,followers:O.number.isRequired,following:O.bool.isRequired,tweets:O.number.isRequired,user:O.string.isRequired,onClick:O.func.isRequired};const xn=E.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`,En=({users:e,onClick:t})=>b.jsx(xn,{children:e.map(n=>b.jsx(ze,{...n,onClick:t},n.id))}),He=Object.freeze({all:"all",follow:"follow",followings:"followings"}),{all:An,follow:Sn,followings:Rn}=He;function On(e){return Ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"}}]})(e)}const Tn=E.div``,Cn=E.div`
  width: 140px;
`,Nn=E.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;

  border-radius: 10px;

  background-color: #471ca9a8;
  :hover {
    background-color: #6165c881;
  }

  cursor: pointer;

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,jn=E.div``,Ln=E.ul`
  position: absolute;
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: #461ca9a8;

  z-index: 999;

  &:first-child {
    padding-top: 0.8em;
  }

  &:last-child {
    padding-bottom: 0.8em;
  }

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,Pn=E.li`
  padding: 15px;

  :hover {
    background-color: #6165c881;
  }
  cursor: pointer;

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,ve=({handleFilterChange:e,resetPage:t})=>{const[n,r]=T.useState(!1),s=()=>r(!n);return b.jsx(Tn,{children:b.jsxs(Cn,{children:[b.jsxs(Nn,{onClick:s,children:["Filter ",b.jsx(On,{})]}),n&&b.jsx(jn,{children:b.jsx(Ln,{children:Object.keys(He).map(o=>b.jsx(Pn,{type:"button",onClick:()=>{e(o),r(!1),t(1)},children:o},Math.random()))})})]})})};ve.propTypes={handleFilterChange:O.func.isRequired,resetPage:O.func.isRequired};const kn=E.button`
  display: flex;
  justify-content: center;
  min-width: 196px;
  margin: 40px auto 0;
  padding: 14px 39px;

  border-radius: 10px;
  border: none;

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  :hover {
    background-color: #ebd8ffae;
  }
`,se=({handleBtnLoadMore:e,disabled:t})=>b.jsx(kn,{type:"button",disabled:t,onClick:()=>e(),children:t?"Load More...":"Load More"});se.propTypes={handleBtnLoadMore:O.func.isRequired,disabled:O.bool.isRequired};function Bn(e){return Ee({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}}]})(e)}const Fn=E(Je)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  width: 140px;

  border-radius: 10px;

  color: #ffffff;
  background-color: #471ca9a8;

  :hover {
    background-color: #6165c881;
  }

  transition: background-color 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`,Dn=()=>b.jsxs(Fn,{to:"/",children:[b.jsx(Bn,{}),b.jsx("span",{children:"Back"})]}),Un=()=>{setTimeout(()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},0)},_n=E.main`
  min-height: 100vh;
`,In=E.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;function qn(){const[e,t]=T.useState([]),[n,r]=T.useState(1),[s,o]=T.useState("all"),[i,l]=T.useState(!0),[p,c]=T.useState(!1);T.useEffect(()=>{(async()=>{c(!0);try{const{data:A}=await cn();t(A),c(!1)}catch(A){console.log(A),c(!1)}finally{c(!1)}})()},[]);const u=T.useCallback((f,A)=>{try{t(w=>w.map(S=>{if(S.id===f){const P=A?S.followers+1:S.followers-1,I={...S,followers:P,following:!S.following};return ln(f,P,I.following),I}return S}))}catch(w){console.log(w)}},[]),h=T.useCallback(f=>{o(f)},[]),y=T.useMemo(()=>{let f=e;switch(s){case An:break;case Sn:f=f.filter(w=>!w.following);break;case Rn:f=f.filter(w=>w.following);break}const A=n*3;return l(A),f.slice(0,A)},[s,n,e]),g=()=>{r(f=>f+1),Un()},d=i===y.length;return b.jsxs(_n,{children:[b.jsxs(In,{children:[b.jsx(Dn,{}),b.jsx(ve,{handleFilterChange:h,resetPage:r})]}),b.jsxs("section",{children:[b.jsx(En,{users:y,onClick:u}),d&&b.jsx(se,{handleBtnLoadMore:g,disabled:p}),b.jsx(se,{handleBtnLoadMore:g,disabled:p})]})]})}export{qn as default};
