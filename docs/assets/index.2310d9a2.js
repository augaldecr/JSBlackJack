const Un=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))t(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(u){if(u.ep)return;u.ep=!0;const i=e(u);fetch(u.href,i)}};Un();const Vr=r=>{if(r.length===0)throw"No hay cartas en el deck";return r.pop()};var Fr="1.13.6",Nr=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Q=Array.prototype,ar=Object.prototype,Mr=typeof Symbol!="undefined"?Symbol.prototype:null,Hn=Q.push,$=Q.slice,R=ar.toString,Jn=ar.hasOwnProperty,$r=typeof ArrayBuffer!="undefined",Gn=typeof DataView!="undefined",Xn=Array.isArray,Ir=Object.keys,Sr=Object.create,Br=$r&&ArrayBuffer.isView,Kn=isNaN,Qn=isFinite,zr=!{toString:null}.propertyIsEnumerable("toString"),Pr=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Yn=Math.pow(2,53)-1;function d(r,n){return n=n==null?r.length-1:+n,function(){for(var e=Math.max(arguments.length-n,0),t=Array(e),u=0;u<e;u++)t[u]=arguments[u+n];switch(n){case 0:return r.call(this,t);case 1:return r.call(this,arguments[0],t);case 2:return r.call(this,arguments[0],arguments[1],t)}var i=Array(n+1);for(u=0;u<n;u++)i[u]=arguments[u];return i[n]=t,r.apply(this,i)}}function M(r){var n=typeof r;return n==="function"||n==="object"&&!!r}function Zn(r){return r===null}function Wr(r){return r===void 0}function Ur(r){return r===!0||r===!1||R.call(r)==="[object Boolean]"}function xn(r){return!!(r&&r.nodeType===1)}function p(r){var n="[object "+r+"]";return function(e){return R.call(e)===n}}var fr=p("String"),Hr=p("Number"),kn=p("Date"),bn=p("RegExp"),jn=p("Error"),Jr=p("Symbol"),Gr=p("ArrayBuffer"),Xr=p("Function"),re=Nr.document&&Nr.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof re!="function"&&(Xr=function(r){return typeof r=="function"||!1});var g=Xr,Kr=p("Object"),Qr=Gn&&Kr(new DataView(new ArrayBuffer(8))),lr=typeof Map!="undefined"&&Kr(new Map),ne=p("DataView");function ee(r){return r!=null&&g(r.getInt8)&&Gr(r.buffer)}var J=Qr?ee:ne,I=Xn||p("Array");function O(r,n){return r!=null&&Jn.call(r,n)}var b=p("Arguments");(function(){b(arguments)||(b=function(r){return O(r,"callee")})})();var or=b;function te(r){return!Jr(r)&&Qn(r)&&!isNaN(parseFloat(r))}function Yr(r){return Hr(r)&&Kn(r)}function Zr(r){return function(){return r}}function xr(r){return function(n){var e=r(n);return typeof e=="number"&&e>=0&&e<=Yn}}function kr(r){return function(n){return n==null?void 0:n[r]}}var G=kr("byteLength"),ue=xr(G),ie=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function ae(r){return Br?Br(r)&&!J(r):ue(r)&&ie.test(R.call(r))}var br=$r?ae:Zr(!1),m=kr("length");function fe(r){for(var n={},e=r.length,t=0;t<e;++t)n[r[t]]=!0;return{contains:function(u){return n[u]===!0},push:function(u){return n[u]=!0,r.push(u)}}}function jr(r,n){n=fe(n);var e=Pr.length,t=r.constructor,u=g(t)&&t.prototype||ar,i="constructor";for(O(r,i)&&!n.contains(i)&&n.push(i);e--;)i=Pr[e],i in r&&r[i]!==u[i]&&!n.contains(i)&&n.push(i)}function v(r){if(!M(r))return[];if(Ir)return Ir(r);var n=[];for(var e in r)O(r,e)&&n.push(e);return zr&&jr(r,n),n}function le(r){if(r==null)return!0;var n=m(r);return typeof n=="number"&&(I(r)||fr(r)||or(r))?n===0:m(v(r))===0}function rn(r,n){var e=v(n),t=e.length;if(r==null)return!t;for(var u=Object(r),i=0;i<t;i++){var a=e[i];if(n[a]!==u[a]||!(a in u))return!1}return!0}function c(r){if(r instanceof c)return r;if(!(this instanceof c))return new c(r);this._wrapped=r}c.VERSION=Fr;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Tr(r){return new Uint8Array(r.buffer||r,r.byteOffset||0,G(r))}var Lr="[object DataView]";function j(r,n,e,t){if(r===n)return r!==0||1/r===1/n;if(r==null||n==null)return!1;if(r!==r)return n!==n;var u=typeof r;return u!=="function"&&u!=="object"&&typeof n!="object"?!1:nn(r,n,e,t)}function nn(r,n,e,t){r instanceof c&&(r=r._wrapped),n instanceof c&&(n=n._wrapped);var u=R.call(r);if(u!==R.call(n))return!1;if(Qr&&u=="[object Object]"&&J(r)){if(!J(n))return!1;u=Lr}switch(u){case"[object RegExp]":case"[object String]":return""+r==""+n;case"[object Number]":return+r!=+r?+n!=+n:+r==0?1/+r===1/n:+r==+n;case"[object Date]":case"[object Boolean]":return+r==+n;case"[object Symbol]":return Mr.valueOf.call(r)===Mr.valueOf.call(n);case"[object ArrayBuffer]":case Lr:return nn(Tr(r),Tr(n),e,t)}var i=u==="[object Array]";if(!i&&br(r)){var a=G(r);if(a!==G(n))return!1;if(r.buffer===n.buffer&&r.byteOffset===n.byteOffset)return!0;i=!0}if(!i){if(typeof r!="object"||typeof n!="object")return!1;var f=r.constructor,o=n.constructor;if(f!==o&&!(g(f)&&f instanceof f&&g(o)&&o instanceof o)&&"constructor"in r&&"constructor"in n)return!1}e=e||[],t=t||[];for(var l=e.length;l--;)if(e[l]===r)return t[l]===n;if(e.push(r),t.push(n),i){if(l=r.length,l!==n.length)return!1;for(;l--;)if(!j(r[l],n[l],e,t))return!1}else{var s=v(r),h;if(l=s.length,v(n).length!==l)return!1;for(;l--;)if(h=s[l],!(O(n,h)&&j(r[h],n[h],e,t)))return!1}return e.pop(),t.pop(),!0}function oe(r,n){return j(r,n)}function z(r){if(!M(r))return[];var n=[];for(var e in r)n.push(e);return zr&&jr(r,n),n}function cr(r){var n=m(r);return function(e){if(e==null)return!1;var t=z(e);if(m(t))return!1;for(var u=0;u<n;u++)if(!g(e[r[u]]))return!1;return r!==un||!g(e[sr])}}var sr="forEach",en="has",vr=["clear","delete"],tn=["get",en,"set"],ce=vr.concat(sr,tn),un=vr.concat(tn),se=["add"].concat(vr,sr,en),ve=lr?cr(ce):p("Map"),pe=lr?cr(un):p("WeakMap"),he=lr?cr(se):p("Set"),ge=p("WeakSet");function L(r){for(var n=v(r),e=n.length,t=Array(e),u=0;u<e;u++)t[u]=r[n[u]];return t}function de(r){for(var n=v(r),e=n.length,t=Array(e),u=0;u<e;u++)t[u]=[n[u],r[n[u]]];return t}function an(r){for(var n={},e=v(r),t=0,u=e.length;t<u;t++)n[r[e[t]]]=e[t];return n}function rr(r){var n=[];for(var e in r)g(r[e])&&n.push(e);return n.sort()}function pr(r,n){return function(e){var t=arguments.length;if(n&&(e=Object(e)),t<2||e==null)return e;for(var u=1;u<t;u++)for(var i=arguments[u],a=r(i),f=a.length,o=0;o<f;o++){var l=a[o];(!n||e[l]===void 0)&&(e[l]=i[l])}return e}}var fn=pr(z),X=pr(v),ln=pr(z,!0);function me(){return function(){}}function on(r){if(!M(r))return{};if(Sr)return Sr(r);var n=me();n.prototype=r;var e=new n;return n.prototype=null,e}function ye(r,n){var e=on(r);return n&&X(e,n),e}function we(r){return M(r)?I(r)?r.slice():fn({},r):r}function _e(r,n){return n(r),r}function cn(r){return I(r)?r:[r]}c.toPath=cn;function W(r){return c.toPath(r)}function hr(r,n){for(var e=n.length,t=0;t<e;t++){if(r==null)return;r=r[n[t]]}return e?r:void 0}function sn(r,n,e){var t=hr(r,W(n));return Wr(t)?e:t}function Ae(r,n){n=W(n);for(var e=n.length,t=0;t<e;t++){var u=n[t];if(!O(r,u))return!1;r=r[u]}return!!e}function gr(r){return r}function C(r){return r=X({},r),function(n){return rn(n,r)}}function dr(r){return r=W(r),function(n){return hr(n,r)}}function U(r,n,e){if(n===void 0)return r;switch(e==null?3:e){case 1:return function(t){return r.call(n,t)};case 3:return function(t,u,i){return r.call(n,t,u,i)};case 4:return function(t,u,i,a){return r.call(n,t,u,i,a)}}return function(){return r.apply(n,arguments)}}function vn(r,n,e){return r==null?gr:g(r)?U(r,n,e):M(r)&&!I(r)?C(r):dr(r)}function mr(r,n){return vn(r,n,1/0)}c.iteratee=mr;function y(r,n,e){return c.iteratee!==mr?c.iteratee(r,n):vn(r,n,e)}function Ee(r,n,e){n=y(n,e);for(var t=v(r),u=t.length,i={},a=0;a<u;a++){var f=t[a];i[f]=n(r[f],f,r)}return i}function pn(){}function Oe(r){return r==null?pn:function(n){return sn(r,n)}}function Ne(r,n,e){var t=Array(Math.max(0,r));n=U(n,e,1);for(var u=0;u<r;u++)t[u]=n(u);return t}function nr(r,n){return n==null&&(n=r,r=0),r+Math.floor(Math.random()*(n-r+1))}var V=Date.now||function(){return new Date().getTime()};function hn(r){var n=function(i){return r[i]},e="(?:"+v(r).join("|")+")",t=RegExp(e),u=RegExp(e,"g");return function(i){return i=i==null?"":""+i,t.test(i)?i.replace(u,n):i}}var gn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},Me=hn(gn),Ie=an(gn),Se=hn(Ie),Be=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Z=/(.)^/,Pe={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Te=/\\|'|\r|\n|\u2028|\u2029/g;function Le(r){return"\\"+Pe[r]}var De=/^\s*(\w|\$)+\s*$/;function qe(r,n,e){!n&&e&&(n=e),n=ln({},n,c.templateSettings);var t=RegExp([(n.escape||Z).source,(n.interpolate||Z).source,(n.evaluate||Z).source].join("|")+"|$","g"),u=0,i="__p+='";r.replace(t,function(l,s,h,Er,Or){return i+=r.slice(u,Or).replace(Te,Le),u=Or+l.length,s?i+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:h?i+=`'+
((__t=(`+h+`))==null?'':__t)+
'`:Er&&(i+=`';
`+Er+`
__p+='`),l}),i+=`';
`;var a=n.variable;if(a){if(!De.test(a))throw new Error("variable is not a bare identifier: "+a)}else i=`with(obj||{}){
`+i+`}
`,a="obj";i=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+i+`return __p;
`;var f;try{f=new Function(a,"_",i)}catch(l){throw l.source=i,l}var o=function(l){return f.call(this,l,c)};return o.source="function("+a+`){
`+i+"}",o}function Re(r,n,e){n=W(n);var t=n.length;if(!t)return g(e)?e.call(r):e;for(var u=0;u<t;u++){var i=r==null?void 0:r[n[u]];i===void 0&&(i=e,u=t),r=g(i)?i.call(r):i}return r}var Ce=0;function Ve(r){var n=++Ce+"";return r?r+n:n}function Fe(r){var n=c(r);return n._chain=!0,n}function dn(r,n,e,t,u){if(!(t instanceof n))return r.apply(e,u);var i=on(r.prototype),a=r.apply(i,u);return M(a)?a:i}var D=d(function(r,n){var e=D.placeholder,t=function(){for(var u=0,i=n.length,a=Array(i),f=0;f<i;f++)a[f]=n[f]===e?arguments[u++]:n[f];for(;u<arguments.length;)a.push(arguments[u++]);return dn(r,t,this,this,a)};return t});D.placeholder=c;var mn=d(function(r,n,e){if(!g(r))throw new TypeError("Bind must be called on a function");var t=d(function(u){return dn(r,t,n,this,e.concat(u))});return t}),w=xr(m);function S(r,n,e,t){if(t=t||[],!n&&n!==0)n=1/0;else if(n<=0)return t.concat(r);for(var u=t.length,i=0,a=m(r);i<a;i++){var f=r[i];if(w(f)&&(I(f)||or(f)))if(n>1)S(f,n-1,e,t),u=t.length;else for(var o=0,l=f.length;o<l;)t[u++]=f[o++];else e||(t[u++]=f)}return t}var $e=d(function(r,n){n=S(n,!1,!1);var e=n.length;if(e<1)throw new Error("bindAll must be passed function names");for(;e--;){var t=n[e];r[t]=mn(r[t],r)}return r});function ze(r,n){var e=function(t){var u=e.cache,i=""+(n?n.apply(this,arguments):t);return O(u,i)||(u[i]=r.apply(this,arguments)),u[i]};return e.cache={},e}var yn=d(function(r,n,e){return setTimeout(function(){return r.apply(null,e)},n)}),We=D(yn,c,1);function Ue(r,n,e){var t,u,i,a,f=0;e||(e={});var o=function(){f=e.leading===!1?0:V(),t=null,a=r.apply(u,i),t||(u=i=null)},l=function(){var s=V();!f&&e.leading===!1&&(f=s);var h=n-(s-f);return u=this,i=arguments,h<=0||h>n?(t&&(clearTimeout(t),t=null),f=s,a=r.apply(u,i),t||(u=i=null)):!t&&e.trailing!==!1&&(t=setTimeout(o,h)),a};return l.cancel=function(){clearTimeout(t),f=0,t=u=i=null},l}function He(r,n,e){var t,u,i,a,f,o=function(){var s=V()-u;n>s?t=setTimeout(o,n-s):(t=null,e||(a=r.apply(f,i)),t||(i=f=null))},l=d(function(s){return f=this,i=s,u=V(),t||(t=setTimeout(o,n),e&&(a=r.apply(f,i))),a});return l.cancel=function(){clearTimeout(t),t=i=f=null},l}function Je(r,n){return D(n,r)}function yr(r){return function(){return!r.apply(this,arguments)}}function Ge(){var r=arguments,n=r.length-1;return function(){for(var e=n,t=r[n].apply(this,arguments);e--;)t=r[e].call(this,t);return t}}function Xe(r,n){return function(){if(--r<1)return n.apply(this,arguments)}}function wn(r,n){var e;return function(){return--r>0&&(e=n.apply(this,arguments)),r<=1&&(n=null),e}}var Ke=D(wn,2);function _n(r,n,e){n=y(n,e);for(var t=v(r),u,i=0,a=t.length;i<a;i++)if(u=t[i],n(r[u],u,r))return u}function An(r){return function(n,e,t){e=y(e,t);for(var u=m(n),i=r>0?0:u-1;i>=0&&i<u;i+=r)if(e(n[i],i,n))return i;return-1}}var wr=An(1),En=An(-1);function On(r,n,e,t){e=y(e,t,1);for(var u=e(n),i=0,a=m(r);i<a;){var f=Math.floor((i+a)/2);e(r[f])<u?i=f+1:a=f}return i}function Nn(r,n,e){return function(t,u,i){var a=0,f=m(t);if(typeof i=="number")r>0?a=i>=0?i:Math.max(i+f,a):f=i>=0?Math.min(i+1,f):i+f+1;else if(e&&i&&f)return i=e(t,u),t[i]===u?i:-1;if(u!==u)return i=n($.call(t,a,f),Yr),i>=0?i+a:-1;for(i=r>0?a:f-1;i>=0&&i<f;i+=r)if(t[i]===u)return i;return-1}}var Mn=Nn(1,wr,On),Qe=Nn(-1,En);function er(r,n,e){var t=w(r)?wr:_n,u=t(r,n,e);if(u!==void 0&&u!==-1)return r[u]}function Ye(r,n){return er(r,C(n))}function E(r,n,e){n=U(n,e);var t,u;if(w(r))for(t=0,u=r.length;t<u;t++)n(r[t],t,r);else{var i=v(r);for(t=0,u=i.length;t<u;t++)n(r[i[t]],i[t],r)}return r}function N(r,n,e){n=y(n,e);for(var t=!w(r)&&v(r),u=(t||r).length,i=Array(u),a=0;a<u;a++){var f=t?t[a]:a;i[a]=n(r[f],f,r)}return i}function In(r){var n=function(e,t,u,i){var a=!w(e)&&v(e),f=(a||e).length,o=r>0?0:f-1;for(i||(u=e[a?a[o]:o],o+=r);o>=0&&o<f;o+=r){var l=a?a[o]:o;u=t(u,e[l],l,e)}return u};return function(e,t,u,i){var a=arguments.length>=3;return n(e,U(t,i,4),u,a)}}var x=In(1),Dr=In(-1);function T(r,n,e){var t=[];return n=y(n,e),E(r,function(u,i,a){n(u,i,a)&&t.push(u)}),t}function Ze(r,n,e){return T(r,yr(y(n)),e)}function qr(r,n,e){n=y(n,e);for(var t=!w(r)&&v(r),u=(t||r).length,i=0;i<u;i++){var a=t?t[i]:i;if(!n(r[a],a,r))return!1}return!0}function Rr(r,n,e){n=y(n,e);for(var t=!w(r)&&v(r),u=(t||r).length,i=0;i<u;i++){var a=t?t[i]:i;if(n(r[a],a,r))return!0}return!1}function A(r,n,e,t){return w(r)||(r=L(r)),(typeof e!="number"||t)&&(e=0),Mn(r,n,e)>=0}var xe=d(function(r,n,e){var t,u;return g(n)?u=n:(n=W(n),t=n.slice(0,-1),n=n[n.length-1]),N(r,function(i){var a=u;if(!a){if(t&&t.length&&(i=hr(i,t)),i==null)return;a=i[n]}return a==null?a:a.apply(i,e)})});function _r(r,n){return N(r,dr(n))}function ke(r,n){return T(r,C(n))}function Sn(r,n,e){var t=-1/0,u=-1/0,i,a;if(n==null||typeof n=="number"&&typeof r[0]!="object"&&r!=null){r=w(r)?r:L(r);for(var f=0,o=r.length;f<o;f++)i=r[f],i!=null&&i>t&&(t=i)}else n=y(n,e),E(r,function(l,s,h){a=n(l,s,h),(a>u||a===-1/0&&t===-1/0)&&(t=l,u=a)});return t}function be(r,n,e){var t=1/0,u=1/0,i,a;if(n==null||typeof n=="number"&&typeof r[0]!="object"&&r!=null){r=w(r)?r:L(r);for(var f=0,o=r.length;f<o;f++)i=r[f],i!=null&&i<t&&(t=i)}else n=y(n,e),E(r,function(l,s,h){a=n(l,s,h),(a<u||a===1/0&&t===1/0)&&(t=l,u=a)});return t}var je=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Bn(r){return r?I(r)?$.call(r):fr(r)?r.match(je):w(r)?N(r,gr):L(r):[]}function Pn(r,n,e){if(n==null||e)return w(r)||(r=L(r)),r[nr(r.length-1)];var t=Bn(r),u=m(t);n=Math.max(Math.min(n,u),0);for(var i=u-1,a=0;a<n;a++){var f=nr(a,i),o=t[a];t[a]=t[f],t[f]=o}return t.slice(0,n)}function Tn(r){return Pn(r,1/0)}function rt(r,n,e){var t=0;return n=y(n,e),_r(N(r,function(u,i,a){return{value:u,index:t++,criteria:n(u,i,a)}}).sort(function(u,i){var a=u.criteria,f=i.criteria;if(a!==f){if(a>f||a===void 0)return 1;if(a<f||f===void 0)return-1}return u.index-i.index}),"value")}function Y(r,n){return function(e,t,u){var i=n?[[],[]]:{};return t=y(t,u),E(e,function(a,f){var o=t(a,f,e);r(i,a,o)}),i}}var nt=Y(function(r,n,e){O(r,e)?r[e].push(n):r[e]=[n]}),et=Y(function(r,n,e){r[e]=n}),tt=Y(function(r,n,e){O(r,e)?r[e]++:r[e]=1}),ut=Y(function(r,n,e){r[e?0:1].push(n)},!0);function it(r){return r==null?0:w(r)?r.length:v(r).length}function at(r,n,e){return n in e}var Ln=d(function(r,n){var e={},t=n[0];if(r==null)return e;g(t)?(n.length>1&&(t=U(t,n[1])),n=z(r)):(t=at,n=S(n,!1,!1),r=Object(r));for(var u=0,i=n.length;u<i;u++){var a=n[u],f=r[a];t(f,a,r)&&(e[a]=f)}return e}),ft=d(function(r,n){var e=n[0],t;return g(e)?(e=yr(e),n.length>1&&(t=n[1])):(n=N(S(n,!1,!1),String),e=function(u,i){return!A(n,i)}),Ln(r,e,t)});function Dn(r,n,e){return $.call(r,0,Math.max(0,r.length-(n==null||e?1:n)))}function k(r,n,e){return r==null||r.length<1?n==null||e?void 0:[]:n==null||e?r[0]:Dn(r,r.length-n)}function H(r,n,e){return $.call(r,n==null||e?1:n)}function lt(r,n,e){return r==null||r.length<1?n==null||e?void 0:[]:n==null||e?r[r.length-1]:H(r,Math.max(0,r.length-n))}function ot(r){return T(r,Boolean)}function ct(r,n){return S(r,n,!1)}var qn=d(function(r,n){return n=S(n,!0,!0),T(r,function(e){return!A(n,e)})}),st=d(function(r,n){return qn(r,n)});function tr(r,n,e,t){Ur(n)||(t=e,e=n,n=!1),e!=null&&(e=y(e,t));for(var u=[],i=[],a=0,f=m(r);a<f;a++){var o=r[a],l=e?e(o,a,r):o;n&&!e?((!a||i!==l)&&u.push(o),i=l):e?A(i,l)||(i.push(l),u.push(o)):A(u,o)||u.push(o)}return u}var vt=d(function(r){return tr(S(r,!0,!0))});function pt(r){for(var n=[],e=arguments.length,t=0,u=m(r);t<u;t++){var i=r[t];if(!A(n,i)){var a;for(a=1;a<e&&A(arguments[a],i);a++);a===e&&n.push(i)}}return n}function ur(r){for(var n=r&&Sn(r,m).length||0,e=Array(n),t=0;t<n;t++)e[t]=_r(r,t);return e}var ht=d(ur);function gt(r,n){for(var e={},t=0,u=m(r);t<u;t++)n?e[r[t]]=n[t]:e[r[t][0]]=r[t][1];return e}function dt(r,n,e){n==null&&(n=r||0,r=0),e||(e=n<r?-1:1);for(var t=Math.max(Math.ceil((n-r)/e),0),u=Array(t),i=0;i<t;i++,r+=e)u[i]=r;return u}function mt(r,n){if(n==null||n<1)return[];for(var e=[],t=0,u=r.length;t<u;)e.push($.call(r,t,t+=n));return e}function Ar(r,n){return r._chain?c(n).chain():n}function Rn(r){return E(rr(r),function(n){var e=c[n]=r[n];c.prototype[n]=function(){var t=[this._wrapped];return Hn.apply(t,arguments),Ar(this,e.apply(c,t))}}),c}E(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var n=Q[r];c.prototype[r]=function(){var e=this._wrapped;return e!=null&&(n.apply(e,arguments),(r==="shift"||r==="splice")&&e.length===0&&delete e[0]),Ar(this,e)}});E(["concat","join","slice"],function(r){var n=Q[r];c.prototype[r]=function(){var e=this._wrapped;return e!=null&&(e=n.apply(e,arguments)),Ar(this,e)}});var yt=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Fr,restArguments:d,isObject:M,isNull:Zn,isUndefined:Wr,isBoolean:Ur,isElement:xn,isString:fr,isNumber:Hr,isDate:kn,isRegExp:bn,isError:jn,isSymbol:Jr,isArrayBuffer:Gr,isDataView:J,isArray:I,isFunction:g,isArguments:or,isFinite:te,isNaN:Yr,isTypedArray:br,isEmpty:le,isMatch:rn,isEqual:oe,isMap:ve,isWeakMap:pe,isSet:he,isWeakSet:ge,keys:v,allKeys:z,values:L,pairs:de,invert:an,functions:rr,methods:rr,extend:fn,extendOwn:X,assign:X,defaults:ln,create:ye,clone:we,tap:_e,get:sn,has:Ae,mapObject:Ee,identity:gr,constant:Zr,noop:pn,toPath:cn,property:dr,propertyOf:Oe,matcher:C,matches:C,times:Ne,random:nr,now:V,escape:Me,unescape:Se,templateSettings:Be,template:qe,result:Re,uniqueId:Ve,chain:Fe,iteratee:mr,partial:D,bind:mn,bindAll:$e,memoize:ze,delay:yn,defer:We,throttle:Ue,debounce:He,wrap:Je,negate:yr,compose:Ge,after:Xe,before:wn,once:Ke,findKey:_n,findIndex:wr,findLastIndex:En,sortedIndex:On,indexOf:Mn,lastIndexOf:Qe,find:er,detect:er,findWhere:Ye,each:E,forEach:E,map:N,collect:N,reduce:x,foldl:x,inject:x,reduceRight:Dr,foldr:Dr,filter:T,select:T,reject:Ze,every:qr,all:qr,some:Rr,any:Rr,contains:A,includes:A,include:A,invoke:xe,pluck:_r,where:ke,max:Sn,min:be,shuffle:Tn,sample:Pn,sortBy:rt,groupBy:nt,indexBy:et,countBy:tt,partition:ut,toArray:Bn,size:it,pick:Ln,omit:ft,first:k,head:k,take:k,initial:Dn,last:lt,rest:H,tail:H,drop:H,compact:ot,flatten:ct,without:st,uniq:tr,unique:tr,union:vt,intersection:pt,difference:qn,unzip:ur,transpose:ur,zip:ht,object:gt,range:dt,chunk:mt,mixin:Rn,default:c},Symbol.toStringTag,{value:"Module"})),Cr=Rn(yt);Cr._=Cr;const Cn=(r,n)=>{if(!r||r.length===0)throw new Error("cardTypes is required");if(!n||n.length===0)throw new Error("specialTypes is required");let e=[];for(let t=2;t<=10;t++)for(let u of r)e.push(t+u);for(let t of r)for(let u of n)e.push(u+t);return e=Tn(e),console.log(e),e},Vn=r=>{const n=r.substring(0,r.length-1);return isNaN(n)?n==="A"?11:10:n*1},ir=(r,n,e,t=[])=>{let u=0;do{const i=Vr(t);u=u+Vn(i),n.innerText=u;const a=Fn(i);if(e.append(a),r>21)break}while(u<r&&r<=21);setTimeout(()=>{u===r?alert("Nadie gana :("):r>21?alert("Computadora gana"):u>21?alert("Jugador Gana"):alert("Computadora Gana")},100)},Fn=r=>{const n=document.createElement("img");return n.src=`assets/cartas/${r}.png`,n.classList.add("carta"),n},$n=["C","D","H","S"],zn=["A","J","Q","K"];let _=0;const q=document.querySelector("#btnPedir"),F=document.querySelector("#btnDetener"),wt=document.querySelector("#btnNuevo"),Wn=document.querySelector("#jugador-cartas"),K=document.querySelector("#computadora-cartas"),B=document.querySelectorAll("small");let P=Cn($n,zn);q.addEventListener("click",()=>{const r=Vr(P);_=_+Vn(r),B[0].innerText=_;const n=Fn(r);Wn.append(n),_>21?(console.warn("Lo siento mucho, perdiste"),q.disabled=!0,F.disabled=!0,ir(_,B[1],K,P)):_===21&&(console.warn("21, genial!"),q.disabled=!0,F.disabled=!0,ir(_,B[1],K,P))});F.addEventListener("click",()=>{q.disabled=!0,F.disabled=!0,ir(_,B[1],K,P)});wt.addEventListener("click",()=>{console.clear(),P=[],P=Cn($n,zn),_=0,B[0].innerText=0,B[1].innerText=0,K.innerHTML="",Wn.innerHTML="",q.disabled=!1,F.disabled=!1});
