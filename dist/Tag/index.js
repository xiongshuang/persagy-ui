/*! @xs 2019-12-18 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Tag",[],n):"object"==typeof exports?exports.Tag=n():t.Tag=n()}(this,(function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=418)}({0:function(t,n,r){"use strict";var e=r(6),o=r(35).f,i=r(82),u=r(3),c=r(46),f=r(8),a=r(7),s=function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var r,p,l,d,v,y,h,g,x=t.target,b=t.global,m=t.stat,_=t.proto,w=b?e:m?e[x]:(e[x]||{}).prototype,S=b?u:u[x]||(u[x]={}),j=S.prototype;for(l in n)r=!i(b?l:x+(m?".":"#")+l,t.forced)&&w&&a(w,l),v=S[l],r&&(y=t.noTargetGet?(g=o(w,l))&&g.value:w[l]),d=r&&y?y:n[l],r&&typeof v==typeof d||(h=t.bind&&r?c(d,e):t.wrap&&r?s(d):_&&"function"==typeof d?c(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&f(h,"sham",!0),S[l]=h,_&&(a(u,p=x+"Prototype")||f(u,p,{}),u[p][l]=d,t.real&&j&&!j[l]&&f(j,l,d)))}},1:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},10:function(t,n,r){var e=r(44),o=r(43);t.exports=function(t){return e(o(t))}},11:function(t,n,r){var e=r(4),o=r(59),i=r(17),u=r(31),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},12:function(t,n,r){"use strict";function e(t,n,r,e,o,i,u,c){var f,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=r,a._compiled=!0),e&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},a._ssrRegister=f):o&&(f=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(a.functional){a._injectStyles=f;var s=a.render;a.render=function(t,n){return f.call(n),s(t,n)}}else{var p=a.beforeCreate;a.beforeCreate=p?[].concat(p,f):[f]}return{exports:t,options:a}}r.d(n,"a",(function(){return e}))},17:function(t,n,r){var e=r(9);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},172:function(t,n,r){t.exports=r(173)},173:function(t,n,r){var e=r(174),o=r(176),i=Array.prototype,u=String.prototype;t.exports=function(t){var n=t.includes;return t===i||t instanceof Array&&n===i.includes?e:"string"==typeof t||t===u||t instanceof String&&n===u.includes?o:n}},174:function(t,n,r){r(175);var e=r(20);t.exports=e("Array").includes},175:function(t,n,r){"use strict";var e=r(0),o=r(56).includes,i=r(69);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},176:function(t,n,r){r(177);var e=r(20);t.exports=e("String").includes},177:function(t,n,r){"use strict";var e=r(0),o=r(178),i=r(43);e({target:"String",proto:!0,forced:!r(180)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},178:function(t,n,r){var e=r(179);t.exports=function(t){if(e(t))throw TypeError("The method doesn't accept regular expressions");return t}},179:function(t,n,r){var e=r(9),o=r(40),i=r(2)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},180:function(t,n,r){var e=r(2)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},2:function(t,n,r){var e=r(6),o=r(33),i=r(41),u=r(63),c=e.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=u&&c[t]||(u?c:i)("Symbol."+t))}},20:function(t,n,r){var e=r(3);t.exports=function(t){return e[t+"Prototype"]}},22:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},3:function(t,n){t.exports={}},302:function(t,n,r){},31:function(t,n,r){var e=r(9);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},33:function(t,n,r){var e=r(6),o=r(83),i=r(34),u=e["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.2.1",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},34:function(t,n){t.exports=!0},35:function(t,n,r){var e=r(4),o=r(45),i=r(22),u=r(10),c=r(31),f=r(7),a=r(59),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},36:function(t,n,r){var e=r(49),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},396:function(t,n,r){"use strict";var e=r(302);r.n(e).a},4:function(t,n,r){var e=r(1);t.exports=!e((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},40:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},41:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},418:function(t,n,r){"use strict";r.r(n);var e=r(80),o=r.n(e),i={name:"Tag",props:{size:{type:String,default:"big"},type:{type:String,default:"grey"}},computed:{status:function(){var t,n;return o()(t=this.type).call(t,"weak")?"weak":o()(n=this.type).call(n,"better")?"better":void 0}}},u=(r(396),r(12)),c=Object(u.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["p-tag","p-tag-"+this.size,"p-tag-"+this.type,"p-tag-"+this.status]},[this._t("default")],2)}),[],!1,null,null,null).exports;c.install=function(t){return t.component(c.name,c)};n.default=c},43:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},44:function(t,n,r){var e=r(1),o=r(40),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},45:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},46:function(t,n,r){var e=r(79);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},49:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},56:function(t,n,r){var e=r(10),o=r(36),i=r(78),u=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},59:function(t,n,r){var e=r(4),o=r(1),i=r(62);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6:function(t,n,r){(function(n){var r="object",e=function(t){return t&&t.Math==Math&&t};t.exports=e(typeof globalThis==r&&globalThis)||e(typeof window==r&&window)||e(typeof self==r&&self)||e(typeof n==r&&n)||Function("return this")()}).call(this,r(81))},62:function(t,n,r){var e=r(6),o=r(9),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},63:function(t,n,r){var e=r(1);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},69:function(t,n){t.exports=function(){}},7:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},78:function(t,n,r){var e=r(49),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},79:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},8:function(t,n,r){var e=r(4),o=r(11),i=r(22);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},80:function(t,n,r){t.exports=r(172)},81:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},82:function(t,n,r){var e=r(1),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==a||r!=f&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},83:function(t,n,r){var e=r(6),o=r(8);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},9:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}})}));