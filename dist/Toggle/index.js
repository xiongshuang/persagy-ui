/*! @xs 2019-12-08 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Toggle",[],t):"object"==typeof exports?exports.Toggle=t():e.Toggle=t()}(this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=401)}({11:function(e,t,n){"use strict";function o(e,t,n,o,r,i,l,u){var a,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),l?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},s._ssrRegister=a):r&&(a=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(s.functional){s._injectStyles=a;var c=s.render;s.render=function(e,t){return a.call(t),c(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:s}}n.d(t,"a",(function(){return o}))},236:function(e,t,n){},304:function(e,t,n){"use strict";var o=n(236);n.n(o).a},401:function(e,t,n){"use strict";n.r(t);var o={name:"Toggle",props:{value:{type:Boolean,default:!1},disable:{type:Boolean,default:!1}},model:{props:"value",event:"change"},methods:{handleToggle:function(){this.disable||this.$emit("change",!this.value)}}},r=(n(304),n(11)),i=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:["p-toggle",e.value?"p-toggle-on":"p-toggle-off",e.disable&&(e.value?"p-toggle-disable-on":"p-toggle-disable-off")],on:{click:function(t){return t.target!==t.currentTarget?null:e.handleToggle(t)}}},[n("input",{attrs:{type:"checkbox"},domProps:{value:e.value}})])}),[],!1,null,null,null).exports;i.install=function(e){return e.component(i.name,i)};t.default=i}})}));