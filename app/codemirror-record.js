!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return(()=>{var t={465:(t,e,r)=>{t=r.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",u="[object Function]",c="[object GeneratorFunction]",l="[object Map]",h="[object Number]",f="[object Object]",p="[object Promise]",v="[object RegExp]",y="[object Set]",d="[object String]",g="[object Symbol]",m="[object WeakMap]",b="[object ArrayBuffer]",_="[object DataView]",T="[object Float32Array]",O="[object Float64Array]",x="[object Int8Array]",k="[object Int16Array]",A="[object Int32Array]",j="[object Uint8Array]",w="[object Uint8ClampedArray]",D="[object Uint16Array]",S="[object Uint32Array]",P=/\w*$/,C=/^\[object .+?Constructor\]$/,L=/^(?:0|[1-9]\d*)$/,R={};R[i]=R["[object Array]"]=R[b]=R[_]=R[a]=R[s]=R[T]=R[O]=R[x]=R[k]=R[A]=R[l]=R[h]=R[f]=R[v]=R[y]=R[d]=R[g]=R[j]=R[w]=R[D]=R[S]=!0,R["[object Error]"]=R[u]=R[m]=!1;var B="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,E="object"==typeof self&&self&&self.Object===Object&&self,V=B||E||Function("return this")(),M=e&&!e.nodeType&&e,I=M&&t&&!t.nodeType&&t,U=I&&I.exports===M;function $(t,e){return t.set(e[0],e[1]),t}function F(t,e){return t.add(e),t}function H(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function Y(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function N(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,W=Array.prototype,G=Function.prototype,K=Object.prototype,Q=V["__core-js_shared__"],X=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",Z=G.toString,tt=K.hasOwnProperty,et=K.toString,rt=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=U?V.Buffer:void 0,ot=V.Symbol,it=V.Uint8Array,at=q(Object.getPrototypeOf,Object),st=Object.create,ut=K.propertyIsEnumerable,ct=W.splice,lt=Object.getOwnPropertySymbols,ht=nt?nt.isBuffer:void 0,ft=q(Object.keys,Object),pt=Vt(V,"DataView"),vt=Vt(V,"Map"),yt=Vt(V,"Promise"),dt=Vt(V,"Set"),gt=Vt(V,"WeakMap"),mt=Vt(Object,"create"),bt=Ft(pt),_t=Ft(vt),Tt=Ft(yt),Ot=Ft(dt),xt=Ft(gt),kt=ot?ot.prototype:void 0,At=kt?kt.valueOf:void 0;function jt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Dt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){this.__data__=new wt(t)}function Pt(t,e,r){var n=t[e];tt.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Ct(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function Lt(t,e,r,n,o,p,m){var C;if(n&&(C=p?n(t,o,p,m):n(t)),void 0!==C)return C;if(!Jt(t))return t;var L=Yt(t);if(L){if(C=function(t){var e=t.length,r=t.constructor(e);return e&&"string"==typeof t[0]&&tt.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(t),!e)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(t,C)}else{var B=It(t),E=B==u||B==c;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(B==f||B==i||E&&!p){if(Y(t))return p?t:{};if(C=function(t){return"function"!=typeof t.constructor||$t(t)?{}:Jt(e=at(t))?st(e):{};var e}(E?{}:t),!e)return function(t,e){return Bt(t,Mt(t),e)}(t,function(t,e){return t&&Bt(e,Wt(e),t)}(C,t))}else{if(!R[B])return p?t:{};C=function(t,e,r,n){var o,i=t.constructor;switch(e){case b:return Rt(t);case a:case s:return new i(+t);case _:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case T:case O:case x:case k:case A:case j:case w:case D:case S:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return H(e?r(N(t),!0):N(t),$,new t.constructor)}(t,n,r);case h:case d:return new i(t);case v:return function(t){var e=new t.constructor(t.source,P.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return function(t,e,r){return H(e?r(z(t),!0):z(t),F,new t.constructor)}(t,n,r);case g:return o=t,At?Object(At.call(o)):{}}}(t,B,Lt,e)}}m||(m=new St);var V=m.get(t);if(V)return V;if(m.set(t,C),!L)var M=r?function(t){return function(t,e,r){var n=e(t);return Yt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Wt,Mt)}(t):Wt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r););}(M||t,(function(o,i){M&&(o=t[i=o]),Pt(C,i,Lt(o,e,r,n,i,t,m))})),C}function Rt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===s?t[a]:s)}return r}function Et(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Vt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!Jt(t)||(e=t,X&&X in e))&&(zt(t)||Y(t)?rt:C).test(Ft(t));var e}(r)?r:void 0}jt.prototype.clear=function(){this.__data__=mt?mt(null):{}},jt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},jt.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return tt.call(e,t)?e[t]:void 0},jt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:tt.call(e,t)},jt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},wt.prototype.clear=function(){this.__data__=[]},wt.prototype.delete=function(t){var e=this.__data__,r=Ct(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},wt.prototype.get=function(t){var e=this.__data__,r=Ct(e,t);return r<0?void 0:e[r][1]},wt.prototype.has=function(t){return Ct(this.__data__,t)>-1},wt.prototype.set=function(t,e){var r=this.__data__,n=Ct(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Dt.prototype.clear=function(){this.__data__={hash:new jt,map:new(vt||wt),string:new jt}},Dt.prototype.delete=function(t){return Et(this,t).delete(t)},Dt.prototype.get=function(t){return Et(this,t).get(t)},Dt.prototype.has=function(t){return Et(this,t).has(t)},Dt.prototype.set=function(t,e){return Et(this,t).set(t,e),this},St.prototype.clear=function(){this.__data__=new wt},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var r=this.__data__;if(r instanceof wt){var n=r.__data__;if(!vt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Dt(n)}return r.set(t,e),this};var Mt=lt?q(lt,Object):function(){return[]},It=function(t){return et.call(t)};function Ut(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||L.test(t))&&t>-1&&t%1==0&&t<e}function $t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function Ft(t){if(null!=t){try{return Z.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(pt&&It(new pt(new ArrayBuffer(1)))!=_||vt&&It(new vt)!=l||yt&&It(yt.resolve())!=p||dt&&It(new dt)!=y||gt&&It(new gt)!=m)&&(It=function(t){var e=et.call(t),r=e==f?t.constructor:void 0,n=r?Ft(r):void 0;if(n)switch(n){case bt:return _;case _t:return l;case Tt:return p;case Ot:return y;case xt:return m}return e});var Yt=Array.isArray;function Nt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!zt(t)}var qt=ht||function(){return!1};function zt(t){var e=Jt(t)?et.call(t):"";return e==u||e==c}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Wt(t){return Nt(t)?function(t,e){var r=Yt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Nt(t)}(t)&&tt.call(t,"callee")&&(!ut.call(t,"callee")||et.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!tt.call(t,a)||o&&("length"==a||Ut(a,n))||r.push(a);return r}(t):function(t){if(!$t(t))return ft(t);var e=[];for(var r in Object(t))tt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Lt(t,!0,!0)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var n={};return(()=>{"use strict";r.r(n),r.d(n,{CodePlay:()=>Y,CodeRecord:()=>B});var t={"*compose":"c","+delete":"d","+input":"i",markText:"k",select:"l","*mouse":"m","*rename":"n","+move":"o",paste:"p",drag:"r",setValue:"s",cut:"x",extra:"e"};function e(t){return t.from.line===t.to.line&&t.from.ch===t.to.ch?[t.from.line,t.from.ch]:[[t.from.line,t.from.ch],[t.to.line,t.to.ch]]}function o(t,e){if(t.ops.length!==e.ops.length)return!1;for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(o.from.line!==o.to.line||n.from.line!==n.to.line||o.from.ch!==o.to.ch||n.from.ch!==n.to.ch)return!1;if(n.from.ch+n.text[0].length!==o.from.ch)return!1}return!0}const i=800;var a=0,s=0;function u(t,e){return t.delayDuration>=800&&function(t){var e=t.delayDuration;if(0!==a){if(e>=s+400)return!1;if(e<=s-400)return!1}return!0}(e)?(s=(s*a+e.delayDuration)/(a+1),a++,!0):(a=0,s=0,!1)}function c(t,e,r){for(var n=0;n<e.crs.length;n++){var o=t.crs[n],i=e.crs[n];if(o.anchor.line!==o.head.line||o.anchor.ch!==o.head.ch)return!1;if(t.crs[n].anchor.ch+r!==i.anchor.ch)return!1;if(t.crs[n].anchor.line!==i.anchor.line)return!1}return!0}function l(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=i;if(t.crs.length!==e.crs.length)return!1;if(e.delayDuration>=n){if(!u(t,e))return!1}else if(t.delayDuration>=n)return!1;return!!c(t,e,r)}function h(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[];t.length>0;){var n=t.pop();if("crs"in n){for(;t.length>0;){var o=t.pop();if(!("crs"in o)||!l(o,n,e)){t.push(o);break}n.startTime=o.startTime,n.delayDuration=o.delayDuration,n.combo+=1;for(var i=0;i<n.crs.length;i++)n.crs[i].anchor=o.crs[i].anchor}r.unshift(n)}else r.unshift(n)}return r}var f=0,p=0;function v(t,e){if(t.ops.length!==e.ops.length)return!1;if(e.delayDuration>=1200){if(!function(t,e){return t.delayDuration>=1200&&function(t){var e=t.delayDuration;if(0!==f){if(e>=p+600)return!1;if(e<=p-600)return!1}return!0}(e)?(p=(p*f+e.delayDuration)/(f+1),f++,!0):(f=0,p=0,!1)}(t,e))return!1}else if(t.delayDuration>=1200)return!1;return!!function(t,e){for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(1!==n.text.length)return!1;if(o.from.line!==o.to.line||n.from.line!==n.to.line||o.from.ch!==o.to.ch||n.from.ch!==n.to.ch)return!1;if(n.from.ch+1!==o.from.ch&&(n.from.line+1!==o.from.line||0!==o.from.ch))return!1}return!0}(t,e)}function y(t){for(var e=0;e<t.ops.length;e++){for(var r="",n=0;n<t.ops[e].text.length;n++)""!==t.ops[e].text[n]?r+=t.ops[e].text[n]:n+1<t.ops[e].text.length&&""===t.ops[e].text[n+1]&&(r+="\n");t.ops[e].text=r}return t}function d(t){for(var e=["()","[]","{}","''",'""'],r=0;r<t.ops.length;r++)for(var n=0;n<t.ops[r].text.length;n++)if(e.indexOf(t.ops[r].text[n])>=0)return!0;return!1}var g=r(465),m=r.n(g),b=0,_=0;function T(t,e){if(t.crs.length!==e.crs.length)return!1;if(e.delayDuration>=800){if(!function(t,e){return t.delayDuration>=800&&function(t){var e=t.delayDuration;if(0!==b){if(e>=_+400)return!1;if(e<=_-400)return!1}return!0}(e)?(_=(_*b+e.delayDuration)/(b+1),b++,!0):(b=0,_=0,!1)}(t,e))return!1}else if(t.delayDuration>=800)return!1;return!!function(t,e){for(var r=0;r<e.crs.length;r++){var n=t.crs[r],o=e.crs[r];if(o.anchor.line===o.head.line&&o.anchor.ch===o.head.ch)return!1;if(n.anchor.line!==o.anchor.line||n.anchor.ch!==o.anchor.ch)return!1}return!0}(t,e)}function O(t){for(var e=[],r=-1;t.length>0;){var n=t.shift();r!==n.line&&(e.push([n.line]),r=n.line),e[e.length-1].push(n.ch)}for(var o=0;o<e.length;o++){var i=e[o].slice(1);i=x(i),i=x(i,-1),e[o]=[e[o][0],i]}return e}function x(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=[];t.length>0;){var n=t.shift();"number"!=typeof n?r.push(n):0===r.length||Array.isArray(r[r.length-1])?r.push({from:n,to:n}):"to"in r[r.length-1]&&(r[r.length-1].to+e!==n?r.push({from:n,to:n}):r[r.length-1].to=n)}for(var o=0;o<r.length;o++)"to"in r[o]&&(r[o].from===r[o].to?r[o]=r[o].from:r[o]=[r[o].from,r[o].to]);return r}var k=0,A=0;function j(t,e){if(t.ops.length!==e.ops.length)return!1;if(e.delayDuration>=1200){if(!function(t,e){return t.delayDuration>=1200&&function(t){var e=t.delayDuration;if(0!==k){if(e>=A+600)return!1;if(e<=A-600)return!1}return!0}(e)?(A=(A*k+e.delayDuration)/(k+1),k++,!0):(k=0,A=0,!1)}(t,e))return!1}else if(t.delayDuration>=1200)return!1;return!!function(t,e){for(var r=0;r<e.ops.length;r++){var n=t.ops[r],o=e.ops[r];if(n.from.ch!==o.to.ch||n.from.line!==o.to.line)return!1}return!0}(t,e)}function w(t){if(1===t.combo)return t;for(var e=0;e<t.ops.length;e++){for(var r=[],n=[];t.ops[e].removed.length>0;){var o=t.ops[e].removed.shift();"string"==typeof o?0===n.length||n[0].length===o.length?n.push(o):(r.push([n[0].length,n.length]),(n=[]).push(o)):(n.length>0&&(r.push([n[0].length,n.length]),n=[]),r.push([[o[0].line,o[0].ch],[o[1].line,o[1].ch]]))}n.length>0&&r.push([n[0].length,n.length]),t.ops[e].removed=r}return t}const D=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("*compose"===r.ops[0].origin){for(;t.length>0;){var n=t.pop();if("*compose"!==n.ops[0].origin||!o(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var i=0;i<r.ops.length;i++)r.ops[i].from=n.ops[i].from,r.ops[i].to=n.ops[i].to,r.ops[i].text=n.ops[i].text.concat(r.ops[i].text)}e.unshift(r)}else e.unshift(r)}return e}(t)},S=function(t){return t=h(t,1),function(t){for(var e=0;e<t.length;e++)if("crs"in t[e]){t[e].ops=[];for(var r=0;r<t[e].crs.length;r++)t[e].ops.push({from:t[e].crs[r].anchor,to:t[e].crs[r].head,origin:"+move",text:[""],removed:[""]});delete t[e].crs}return t}(t=h(t,-1))},P=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("+input"!==r.ops[0].origin||d(r))e.unshift(r);else{for(;t.length>0;){var n=t.pop();if("+input"!==n.ops[0].origin||d(n)||!v(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var o=0;o<r.ops.length;o++)r.ops[o].from=n.ops[o].from,r.ops[o].to=n.ops[o].to,r.ops[o].text=n.ops[o].text.concat(r.ops[o].text)}r=y(r),e.unshift(r)}}return e}(t)},C=function(t){return function(t){for(var e=0;e<t.length;e++)if("crs"in t[e]&&t[e].combo>1){t[e].ops=[];for(var r=0;r<t[e].crs.length;r++)t[e].ops.push({from:t[e].crs[r].anchor,to:t[e].crs[r].anchor,origin:"select",text:[""],removed:[""],select:O(t[e].crs[r].heads)});delete t[e].crs}return t}(t=function(t){for(var e=[];t.length>0;){var r=m()(t.pop());if("crs"in r){for(;t.length>0;){var n=m()(t.pop());if(!("crs"in n)||!T(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration,r.combo+=1;for(var o=0;o<r.crs.length;o++)"heads"in r.crs[o]?r.crs[o].heads.unshift(n.crs[o].head):r.crs[o].heads=[n.crs[o].head,r.crs[o].head]}e.unshift(r)}else e.unshift(r)}return e}(t))},L=function(t){return function(t){for(var e=[];t.length>0;){var r=t.pop();if("+delete"===r.ops[0].origin){for(;t.length>0;){var n=t.pop();if("+delete"!==n.ops[0].origin||!j(n,r)){t.push(n);break}r.startTime=n.startTime,r.delayDuration=n.delayDuration;for(var o=0;o<r.ops.length;o++)1===r.combo&&r.ops[o].removed.length>1&&(r.ops[o].removed=[[r.ops[o].from,r.ops[o].to]]),n.ops[o].removed.length>1&&(n.ops[o].removed=[[n.ops[o].from,n.ops[o].to]]),r.ops[o].removed=r.ops[o].removed.concat(n.ops[o].removed),r.ops[o].to=n.ops[o].to;r.combo+=1}r=w(r),e.unshift(r)}else e.unshift(r)}return e}(t)};function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var B=function(){function r(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),this.initTime=+new Date,this.lastChangeTime=+new Date,this.lastCursorActivityTime=+new Date,this.operations=[],this.editor=t,this.changesListener=this.changesListener.bind(this),this.cursorActivityListener=this.cursorActivityListener.bind(this),this.swapDocListener=this.swapDocListener.bind(this)}var n,o;return n=r,(o=[{key:"recordExtraActivity",value:function(t){var e=[{origin:"extra",activity:t}];this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),ops:e})}},{key:"listen",value:function(){this.editor.on("changes",this.changesListener),this.editor.on("swapDoc",this.swapDocListener),this.editor.on("cursorActivity",this.cursorActivityListener)}},{key:"getRecords",value:function(){return this.removeRedundantCursorOperations(),this.compressCursorOperations(),this.compressChanges(),JSON.stringify(function(r){for(var n,o=[];r.length>0;){for(var i=r.pop(),a=0;a<i.ops.length;a++)i.ops[a].o=(s=i.ops[a].origin,t[s]),"extra"!==i.ops[a].origin&&(i.ops[a].i=e(i.ops[a]),i.ops[a].a=i.ops[a].text,i.ops[a].d=i.ops[a].removed,1===i.ops[a].a.length&&""===i.ops[a].a[0]&&delete i.ops[a].a,1===i.ops[a].d.length&&""===i.ops[a].d[0]&&delete i.ops[a].d,"select"in i.ops[a]&&(i.ops[a].s=i.ops[a].select,delete i.ops[a].select)),1===i.combo&&delete i.ops[a].d,delete i.ops[a].removed,delete i.ops[a].text,delete i.ops[a].from,delete i.ops[a].origin,delete i.ops[a].to;i.t=(n=[i.startTime,i.endTime])[0]===n[1]?n[0]:n,i.l=i.combo,i.o=i.ops,1===i.l&&delete i.l,delete i.ops,delete i.delayDuration,delete i.combo,delete i.startTime,delete i.endTime,o.unshift(i)}var s;return o}(this.operations))}},{key:"getOperationRelativeTime",value:function(){return+new Date-this.initTime}},{key:"getLastChangePause",value:function(){var t=+new Date,e=t-this.lastChangeTime;return this.lastChangeTime=t,e}},{key:"getLastCursorActivityPause",value:function(){var t=+new Date,e=t-this.lastCursorActivityTime;return this.lastCursorActivityTime=t,e}},{key:"changesListener",value:function(t,e){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastChangePause(),ops:e,combo:1})}},{key:"swapDocListener",value:function(t,e){var r=[{from:{line:0,ch:0},to:{line:e.lastLine(),ch:e.getLine(e.lastLine()).length},origin:"setValue",removed:e.getValue().split("\n"),text:t.getValue().split("\n")}];this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastChangePause(),ops:r,combo:1})}},{key:"cursorActivityListener",value:function(t){this.operations.push({startTime:this.getOperationRelativeTime(),endTime:this.getOperationRelativeTime(),delayDuration:this.getLastCursorActivityPause(),crs:t.listSelections(),combo:1})}},{key:"isPasteOperation",value:function(t){for(var e=0;e<t.ops.length;e++)if("paste"===t.ops[e].origin)return!0;return!1}},{key:"removeRedundantCursorOperations",value:function(){for(var t=this.operations,e=[],r=0;r<t.length;r++)"ops"in t[r]?(e.push(t[r]),r>0&&this.isPasteOperation(t[r])&&(t[r-1].startTime=t[r].startTime+1,t[r-1].endTime=t[r].endTime+1,e.push(t[r-1]))):r<t.length-1&&"ops"in t[r+1]||e.push(t[r]);this.operations=e}},{key:"compressCursorOperations",value:function(){var t=this.operations;t=C(t),t=S(t),this.operations=t}},{key:"compressChanges",value:function(){var t=this.operations;t=P(t),t=L(t),t=D(t),this.operations=t}}])&&R(n.prototype,o),r}();function E(t){for(var e=[],r=0;r<t.length;r++)for(var n=0;n<t[r][1].length;n++)if("number"==typeof t[r][1][n])e.push([t[r][0],t[r][1][n]]);else{var o=t[r][1][n][0]<t[r][1][n][1]?1:-1,i=t[r][1][n][0];for(e.push([t[r][0],i]);i!==t[r][1][n][1];)i+=o,e.push([t[r][0],i])}return e}const V=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],type:"content"};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({a:null,i:null});for(var s=0;s<t.o.length;s++)o.o[s].a=t.o[s].a[e],o.o[s].i=[i[s][0],i[s][1]],i[s][1]+=t.o[s].a[e].length;return o},M=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],type:"cursor"};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)Array.isArray(t.o[a].i[0])||(t.o[a].i=[t.o[a].i,t.o[a].i]),i.push(t.o[a].i),o.o.push({i:null});for(var s=0;s<t.o.length;s++){var u=i[s][0][0],c=i[s][0][1]+(i[s][1][1]-i[s][0][1])/(t.l-1)*e;o.o[s].i=[u,c]}return o},I=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],type:"content"};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({a:null,i:null});for(var s=0;s<t.o.length;s++)o.o[s].a=t.o[s].a[e],o.o[s].i=[i[s][0],i[s][1]],"\n"!==o.o[s].a?i[s][1]++:(i[s][0]++,i[s][1]=0);return o},U=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],type:"cursor"};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i),o.o.push({i:null});for(var s=0;s<t.o.length;s++){var u=[t.o[s].i[0],t.o[s].i[1]],c=E(t.o[s].s),l=[c[e][0],c[e][1]];o.o[s].i=[u,l]}return o},$=function(t,e){var r=t.t[0],n=(t.t[1]-t.t[0])/(t.l-1),o={t:null,o:[],type:"content"};o.t=Math.floor(r+e*n),e===t.l-1&&(o.t=t.t[1]);for(var i=[],a=0;a<t.o.length;a++)i.push(t.o[a].i[1]),o.o.push({i:null});for(var s=0;s<t.o.length;s++){var u=t.o[s].d.pop();"number"==typeof u[0]?(o.o[s].i=[[i[s][0],i[s][1]-u[0]],[i[s][0],i[s][1]]],i[s][1]-=u[0],u[1]-1>0&&t.o[s].d.push([u[0],u[1]-1])):(o.o[s].i=[[u[0][0],u[0][1]],[u[1][0],u[1][1]]],t.o[s].i[1]=[u[0][0],u[0][1]])}return o};function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Y=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.operations=[],this.playedOperations=[],this.editor=e,this.cachedValue=null,this.status="PAUSE",this.timer=null,this.currentOperation=null,this.duration=0,this.lastOperationTime=0,this.lastPlayTime=0,this.seekTime=null,this.playedTimeBeforeOperation=0,this.playedTimeBeforePause=0,this.speedBeforeSeeking=null,r&&(this.maxDelay=r.maxDelay||0,this.autoplay=r.autoplay||!1,this.speed=r.speed||1,this.extraActivityHandler=r.extraActivityHandler||null,this.extraActivityReverter=r.extraActivityReverter||null)}var e,r;return e=t,(r=[{key:"setOption",value:function(t){var e=this.status;"PLAY"===e&&this.pause(),t(),"PLAY"===e&&this.play()}},{key:"setMaxDelay",value:function(t){var e=this;this.setOption((function(){t&&(e.maxDelay=t)}))}},{key:"setAutoplay",value:function(t){var e=this;this.setOption((function(){t&&(e.autoplay=t)}))}},{key:"setSpeed",value:function(t){var e=this;this.setOption((function(){t&&(e.speed=t)}))}},{key:"setExtraActivityHandler",value:function(t){var e=this;this.setOption((function(){t&&(e.extraActivityHandler=t)}))}},{key:"setExtraActivityReverter",value:function(t){var e=this;this.setOption((function(){t&&(e.extraActivityReverter=t)}))}},{key:"addOperations",value:function(t){var e=this.parseOperations(t);this.operations=this.operations.concat(e),this.duration=e[e.length-1].t,this.autoplay&&this.play()}},{key:"isAutoIndent",value:function(t){return"i"===t.o&&""===t.a}},{key:"play",value:function(){"PLAY"!==this.status&&(this.editor.focus(),this.playChanges())}},{key:"pause",value:function(){"PAUSE"!==this.status&&(this.status="PAUSE",this.playedTimeBeforePause=((new Date).getTime()-this.lastPlayTime)*this.speed,this.playedTimeBeforeOperation+=this.playedTimeBeforePause,null!==this.currentOperation&&(clearTimeout(this.timer),this.currentOperation=null))}},{key:"getStatus",value:function(){return this.status}},{key:"getCurrentTime",value:function(){var t=this.lastOperationTime+this.playedTimeBeforeOperation;return"PLAY"===this.status?t+((new Date).getTime()-this.lastPlayTime)*this.speed:t}},{key:"getDuration",value:function(){return this.duration}},{key:"seek",value:function(t){this.speedBeforeSeeking=this.speed,this.statusBeforeSeeking=this.status,this.speed=0,this.seekTime=t,this.editor.focus(),this.pause(),this.lastOperationTime<this.seekTime?this.playChanges():this.lastOperationTime>this.seekTime&&this.revertChanges()}},{key:"stopSeek",value:function(){this.pause(),this.seekTime&&(this.playedTimeBeforeOperation=this.seekTime-this.lastOperationTime,null!==this.speedBeforeSeeking&&this.setSpeed(this.speedBeforeSeeking),this.seekTime=null,"PLAY"===this.statusBeforeSeeking&&this.play())}},{key:"playChanges",value:function(){var t=this;this.lastPlayTime=(new Date).getTime();var e=this.operations;if(e.length>0){this.status="PLAY",this.currentOperation=e[0];var r=this.currentOperation,n=this.getOperationDelay(r);if(this.seekTime&&r.t>this.seekTime)return void this.stopSeek();this.timer=setTimeout((function(){t.lastOperationTime=r.t,t.operations.shift(),t.playChange(t.editor,r),0===t.operations.length&&(t.currentOperation=null,t.stopSeek())}),0===this.speed?0:n/this.speed)}}},{key:"getOperationDelay",value:function(t){var e=t.t-this.lastOperationTime-this.playedTimeBeforeOperation;return e>this.maxDelay&&this.maxDelay>0?this.maxDelay:e}},{key:"playChange",value:function(t,e){this.playedTimeBeforeOperation=0;var r=t.getValue();null!==this.cachedValue&&this.cachedValue===r||(this.cachedValue=r,e.revertValue=r);for(var n=0;n<e.o.length&&!this.playExtraActivity(e);n++){var o=this.insertionText(e.o[n]),i=e.o[n].i;"number"==typeof i[0]&&(i=[i,i]),this.isAutoIndent(e.o[n])||"\n\n"!==e.o[0].a&&(0===n?t.setSelection({line:i[0][0],ch:i[0][1]},{line:i[1][0],ch:i[1][1]}):t.addSelection({line:i[0][0],ch:i[0][1]},{line:i[1][0],ch:i[1][1]})),"content"===e.type&&t.replaceRange(o,{line:i[0][0],ch:i[0][1]},{line:i[1][0],ch:i[1][1]})}this.playedOperations.unshift(e),this.playChanges()}},{key:"playExtraActivity",value:function(t){return"extra"===t.type&&(this.extraActivityHandler?this.extraActivityHandler(t.o[0].activity):console.warn("extraActivityHandler is required in player"),!0)}},{key:"insertionText",value:function(t){var e="";return"string"==typeof t.a?e=t.a:"a"in t&&(e=t.a.join("\n")),e}},{key:"revertChanges",value:function(){var t=this.playedOperations;if(!(t.length>0))return this.lastOperationTime=0,void this.stopSeek();this.currentOperation=t[0],this.revertChange(this.editor,this.currentOperation)}},{key:"revertChange",value:function(t,e){this.lastOperationTime=e.t,this.seekTime&&this.lastOperationTime<=this.seekTime?this.stopSeek():(void 0!==e.revertValue&&t.setValue(e.revertValue),this.revertExtraActivity(e),this.playedOperations.shift(),this.operations.unshift(e),this.revertChanges())}},{key:"revertExtraActivity",value:function(t){return"extra"===t.type&&(this.extraActivityReverter?this.extraActivityReverter(t.o[0].activity):console.warn("extraActivityReverter is required in player"),!0)}},{key:"classifyOperation",value:function(t){return t.type="content","o"===t.o[0].o||"l"===t.o[0].o?t.type="cursor":"e"===t.o[0].o&&(t.type="extra"),t}},{key:"parseOperations",value:function(t){var e,r=[],n=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}(t=JSON.parse(t));try{for(n.s();!(e=n.n()).done;){var o=e.value;if("l"in(o=this.classifyOperation(o)))for(var i=0;i<o.l;i++)"i"===o.o[0].o?r.push(I(o,i)):"c"===o.o[0].o?r.push(V(o,i)):"d"===o.o[0].o?r.push($(o,i)):"o"===o.o[0].o?r.push(M(o,i)):"l"===o.o[0].o&&r.push(U(o,i));else r.push(o)}}catch(t){n.e(t)}finally{n.f()}return r}}])&&H(e.prototype,r),t}()})(),n})()}));