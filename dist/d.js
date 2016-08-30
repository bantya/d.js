"use strict";!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t()}):"object"==typeof module&&module.exports?module.exports=t():e.d=t()}(this,function(){function e(n){return this instanceof e?void Array.prototype.splice.apply(this,[0,0].concat(n)):new e(t(n))}function t(t){return"string"==typeof t&&"<"===t[0]?e.parse(t,!0)||[]:e.getAll(t)}function n(e){if(e=e.replace(/(-\w)/g,function(e){return e[1].toUpperCase()}),e in i.style)return e;for(var t,n=e.charAt(0).toUpperCase()+e.slice(1),r=["Moz","Webkit","O","ms"],o=0;o<r.length;o++)if(t=r[o]+n,t in i.style)return t}function r(e,t){var n;return"on"+e in i?(n=document.createEvent("HTMLEvents"),n.initEvent(e,!0,!1),n):window.CustomEvent?new CustomEvent(e,{detail:t||{}}):(n=document.createEvent("CustomEvent"),n.initCustomEvent(e,!0,!0,t||{}),n)}var i=document.createElement("div");return e.get=function(t,n){return"string"==typeof t?(n||document).querySelector(t):Array.isArray(t)||t instanceof NodeList||t instanceof HTMLCollection||t instanceof e?t[0]:t},e.getAll=function(t,n){return Array.isArray(t)?t:("string"==typeof t&&(t=(n||document).querySelectorAll(t)),t instanceof NodeList||t instanceof HTMLCollection||t instanceof e?Array.prototype.slice.call(t):[t])},e.is=function(e,t){return"string"==typeof t?(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t):e===t},e.on=function(t,n,r,i){e.getAll(n).forEach(function(e){t.split(" ").forEach(function(t){e.addEventListener(t,r,i||!1)})})},e.off=function(t,n,r,i){e.getAll(n).forEach(function(e){t.split(" ").forEach(function(t){e.removeEventListener(t,r,i||!1)})})},e.trigger=function(t,n,i){"string"==typeof t&&(t=r(t,i)),e.getAll(n).forEach(function(e){e.dispatchEvent(t)})},e.remove=function(t){e.getAll(t).forEach(function(e){e.parentNode.removeChild(e)})},e.insertBefore=function(n,r){var i=e.get(n);i&&t(r).forEach(function(e){i.parentNode.insertBefore(e,i)})},e.insertAfter=function(n,r){var i=e.get(n);i&&t(r).reverse().forEach(function(e){i.parentNode.insertBefore(e,i.nextSibling)})},e.prepend=function(n,r){var i=e.get(n);i&&t(r).reverse().forEach(function(e){i.insertBefore(e,i.firstChild)})},e.append=function(n,r){var i=e.get(n);i&&t(r).forEach(function(e){i.appendChild(e)})},e.css=function(t,r,i){if(arguments.length<3&&"object"!=typeof r){var o=getComputedStyle(e.get(t));return 1===arguments.length?o:o[n(r)]}var c={};"object"==typeof r?c=r:c[r]=i,e.getAll(t).forEach(function(e,t,r){for(var i in c){var o=c[i];"function"==typeof o?o=o.call(this,e,t,r):Array.isArray(o)&&(o=o[t%o.length]),e.style[n(i)]=o}})},e.parse=function(t,n){return i.innerHTML=t,0===i.children.length?n?[]:null:1!==i.children.length||n?e.getAll(i.children):i.children[0]},e.prototype=Object.create(Array.prototype,{on:{value:function(t,n,r){return e.on(t,this,n,r),this}},off:{value:function(t,n,r){return e.off(t,this,n,r),this}},trigger:{value:function(t,n){return e.trigger(t,this,n),this}},css:{value:function(t){var n=Array.prototype.slice.call(arguments);return n.unshift(this),n.length<3&&"object"!=typeof t?e.css.apply(null,n):(e.css.apply(null,n),this)}},insertBefore:{value:function(t){return e.insertBefore(this,t),this}},insertAfter:{value:function(t){return e.insertAfter(this,t),this}},prepend:{value:function(t){return e.prepend(this,t),this}},append:{value:function(t){return e.append(this,t),this}},insertBeforeTo:{value:function(t){return e.insertBefore(t,this),this}},insertAfterTo:{value:function(t){return e.insertAfter(t,this),this}},prependTo:{value:function(t){return e.prepend(t,this),this}},appendTo:{value:function(t){return e.append(t,this),this}}}),e});