!function(t){var n={};function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(e,r,t){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=1)}([function(e,r){e.exports={shuffleArray:function(e){return e.map(function(e){return[Math.random(),e]}).sort(function(e,r){return e[0]-r[0]}).map(function(e){return e[1]})}}},function(e,r,t){"use strict";t.r(r);t(2);var u=t(0);function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}window.addEventListener("DOMContentLoaded",function(){var n=0,e=document.querySelector(".navbar-toggler"),o=document.querySelector(".black-back");e.addEventListener("click",function(e){e.stopImmediatePropagation();var r=e.target.closest(".navbar-toggler"),t=n%2==0;r.classList[t?"add":"remove"]("is-active"),o.classList[t?"add":"remove"]("show"),n++});var r=document.querySelector(".shuffle-btn"),a=document.querySelector(".works");r&&a&&r.addEventListener("click",function(e){var r=Object(u.shuffleArray)(i(a.querySelectorAll(".work")));a.innerHTML="",r.forEach(function(e,r){e.className="",e.classList.add("work"),0===r&&e.classList.add("work_first");var t=r%2==0;e.classList.add("work_".concat(t?"even":"odd")),a.appendChild(e)})})})},function(e,r,t){}]);