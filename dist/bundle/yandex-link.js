!function(r){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return r[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=r,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=18)}({1:function(t,e,r){t.exports=r(19)},18:function(t,e,r){"use strict";r.r(e);var n=r(1),u=r.n(n),o=r(2),i=r.n(o);document.addEventListener("DOMContentLoaded",function(){var t=document.querySelectorAll("[data-yd-link]"),a=[],c=function(){var r=i()(u.a.mark(function t(e,r){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://cloud-api.yandex.net/v1/disk/public/resources","?public_key=").concat(r));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t)}));return function(t,e){return r.apply(this,arguments)}}();t.forEach(function(){var r=i()(u.a.mark(function t(n,o){var i;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.dataset.ydLink)return t.next=3,c(n,n.dataset.ydLink);t.next=6;break;case 3:i=t.sent,e=i,r=void 0,(r=document.createElement("form")).style.display="none",r.method="POST",r.innerHTML='<input type="hidden" name="link" value="'.concat(e.file,'" />')+'<input type="hidden" name="filename" value="'.concat(e.name,'" />')+'<input type="hidden" name="mimetype" value="'.concat(e.mime_type,'" />')+'<input type="submit" value="Download" />',document.body.appendChild(r),a.push(r),n.addEventListener("click",function(t){t.preventDefault(),a[o].submit()});case 6:case"end":return t.stop()}var e,r},t)}));return function(t,e){return r.apply(this,arguments)}}())})},19:function(t,e,r){var n=function(a){"use strict";var u,t=Object.prototype,s=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",n=e.toStringTag||"@@toStringTag";function c(t,e,r,n){var i,a,c,u,o=e&&e.prototype instanceof m?e:m,f=Object.create(o.prototype),s=new k(n||[]);return f._invoke=(i=t,a=r,c=s,u=h,function(t,e){if(u===d)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return S()}for(c.method=t,c.arg=e;;){var r=c.delegate;if(r){var n=_(r,c);if(n){if(n===v)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=y,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=d;var o=l(i,a,c);if("normal"===o.type){if(u=c.done?y:p,o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg)}}),f}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function i(){}function f(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==t&&s.call(x,o)&&(g=x);var b=f.prototype=m.prototype=Object.create(g);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(u,f){var e;this._invoke=function(r,n){function t(){return new f(function(t,e){!function e(t,r,n,o){var i=l(u[t],u,r);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?f.resolve(c.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):f.resolve(c).then(function(t){a.value=t,n(a)},function(t){return e("throw",t,n,o)})}o(i.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function _(t,e){var r=t.iterator[e.method];if(r===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=u,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:S}}function S(){return{value:u,done:!0}}return i.prototype=b.constructor=f,f.constructor=i,f[n]=i.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(b),t},a.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[r]=function(){return this},a.AsyncIterator=E,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new E(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(b),b[n]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=u),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=u),v}},a}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},2:function(t,e){function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){u(n,e,r,o,i,"next",t)}function i(t){u(n,e,r,o,i,"throw",t)}o(void 0)})}}}});