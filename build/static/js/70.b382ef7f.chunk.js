/*! For license information please see 70.b382ef7f.chunk.js.LICENSE.txt */
(self.webpackChunkskyinvest=self.webpackChunkskyinvest||[]).push([[70],{78262:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!==o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},65464:function(e,t,n){"use strict";var r=n(72791);function o(e){return Array.prototype.slice.call(e)}function a(e,t){var n=Math.floor(e);return n===t||n+1===t?e:t}function i(){return Date.now()}function u(e,t,n){if(t="data-keen-slider-"+t,null===n)return e.removeAttribute(t);e.setAttribute(t,n||"")}function s(e,t){return t=t||document,"function"==typeof e&&(e=e(t)),Array.isArray(e)?e:"string"==typeof e?o(t.querySelectorAll(e)):e instanceof HTMLElement?[e]:e instanceof NodeList?o(e):[]}function l(e){e.raw&&(e=e.raw),e.cancelable&&!e.defaultPrevented&&e.preventDefault()}function c(e){e.raw&&(e=e.raw),e.stopPropagation&&e.stopPropagation()}function f(){var e=[];return{add:function(t,n,r,o){t.addListener?t.addListener(r):t.addEventListener(n,r,o),e.push([t,n,r,o])},input:function(e,t,n,r){this.add(e,t,function(e){return function(t){t.nativeEvent&&(t=t.nativeEvent);var n=t.changedTouches||[],r=t.targetTouches||[],o=t.detail&&t.detail.x?t.detail:null;return e({id:o?o.identifier?o.identifier:"i":r[0]?r[0]?r[0].identifier:"e":"d",idChanged:o?o.identifier?o.identifier:"i":n[0]?n[0]?n[0].identifier:"e":"d",raw:t,x:o&&o.x?o.x:r[0]?r[0].screenX:o?o.x:t.pageX,y:o&&o.y?o.y:r[0]?r[0].screenY:o?o.y:t.pageY})}}(n),r)},purge:function(){e.forEach((function(e){e[0].removeListener?e[0].removeListener(e[2]):e[0].removeEventListener(e[1],e[2],e[3])})),e=[]}}}function d(e,t,n){return Math.min(Math.max(e,t),n)}function p(e){return(e>0?1:0)-(e<0?1:0)||+e}function y(e){var t=e.getBoundingClientRect();return{height:a(t.height,e.offsetHeight),width:a(t.width,e.offsetWidth)}}function v(e,t,n,r){var o=e&&e[t];return null==o?n:r&&"function"==typeof o?o():o}function h(e){return Math.round(1e6*e)/1e6}function m(e,t){if(e===t)return!0;var n=typeof e;if(n!==typeof t)return!1;if("object"!==n||null===e||null===t)return"function"===n&&e.toString()===t.toString();if(e.length!==t.length||Object.getOwnPropertyNames(e).length!==Object.getOwnPropertyNames(t).length)return!1;for(var r in e)if(!m(e[r],t[r]))return!1;return!0}function g(e,t){return m(e.current,t)||(e.current=t),e.current}var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)};function P(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function w(e){var t,n,r,o,a,u,s,l,c,f,y,m,g,b,w=1/0,E=[],k=null,x=0;function C(e){D(x+e)}function S(e){var t=O(x+e).abs;return _(t)?t:null}function O(e){var t=Math.floor(Math.abs(e/n)),r=h((e%n+n)%n),o=p(e),a=s.indexOf(P([],s,!0).reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}))),i=a;return o<0&&0!==r&&t++,a===u&&(i=0,t+=o>0?1:-1),{abs:i+t*u*o,origin:a,rel:i}}function A(e,t,n){var r;if(t||!I())return T(e,n);if(!_(e))return null;var o=O(null!=n?n:x),a=o.abs,i=e-o.rel,s=a+i;r=T(s);var l=T(s-u*p(i));return(null!==l&&Math.abs(l)<Math.abs(r)||null===r)&&(r=l),h(r)}function T(e,t){if(null==t&&(t=h(x)),!_(e)||null===e)return null;e=Math.round(e);var r=O(t),o=r.abs,a=r.rel,i=r.origin,l=R(e),c=(t%n+n)%n,f=s[i],d=Math.floor((e-(o-a))/u)*n;return h(f-c-f+s[l]+d+(i===u?n:0))}function _(e){return M(e)===e}function M(e){return d(e,c,f)}function I(){return o.loop}function R(e){return(e%u+u)%u}function D(t){var n;n=t-x,E.push({distance:n,timestamp:i()}),E.length>6&&(E=E.slice(-6)),x=Math.round(1e6*t)/1e6;var r=j().abs;if(r!==k){var o=null!==k;k=r,o&&e.emit("slideChanged")}}function j(i){var s=i?null:function(){if(u){var e=I(),t=e?(x%n+n)%n:x,i=(e?x%n:x)-a[0][2],s=0-(i<0&&e?n-Math.abs(i):i),l=0,d=O(x),v=d.abs,h=d.rel,P=a[h][2],w=a.map((function(t,r){var a=s+l;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>n-1&&e?n:0)*p(-a));var i=r-h,c=p(i),f=i+v;e&&(-1===c&&a>P&&(f+=u),1===c&&a<P&&(f-=u),null!==y&&f<y&&(a+=n),null!==m&&f>m&&(a-=n));var d=a+t[0]+t[1],g=Math.max(a>=0&&d<=1?1:d<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return l+=t[0]+t[1],{abs:f,distance:o.rtl?-1*a+1-t[0]:a,portion:g,size:t[0]}}));return v=M(v),h=R(v),{abs:M(v),length:r,max:b,maxIdx:f,min:g,minIdx:c,position:x,progress:e?t/n:x/r,rel:h,slides:w}}}();return t.details=s,e.emit("detailsChanged"),s}return t={absToRel:R,add:C,details:null,distToIdx:S,idxToDist:A,init:function(t){if(function(){if(o=e.options,a=(o.trackConfig||[]).map((function(e){return[v(e,"size",1),v(e,"spacing",0),v(e,"origin",0)]})),u=a.length){n=h(a.reduce((function(e,t){return e+t[0]+t[1]}),0));var t,i=u-1;r=h(n+a[0][2]-a[i][0]-a[i][2]-a[i][1]),s=a.reduce((function(e,n){if(!e)return[0];var r=a[e.length-1],o=e[e.length-1]+(r[0]+r[2])+r[1];return o-=n[2],e[e.length-1]>o&&(o=e[e.length-1]),o=h(o),e.push(o),(!t||t<o)&&(l=e.length-1),t=o,e}),null),0===r&&(l=0),s.push(n)}}(),!u)return j(!0);var i;!function(){var t=e.options.range,n=e.options.loop;y=c=n?v(n,"min",-1/0):0,m=f=n?v(n,"max",w):l;var r=v(t,"min",null),o=v(t,"max",null);r&&(c=r),o&&(f=o),g=c===-1/0?c:e.track.idxToDist(c||0,!0,0),b=f===w?f:A(f,!0,0),null===o&&(m=f),v(t,"align",!1)&&f!==w&&0===a[R(f)][2]&&(b-=1-a[R(f)][0],f=S(b)),g=h(g),b=h(b)}(),i=t,Number(i)===i?C(T(M(t))):j()},to:D,velocity:function(){var e=i(),t=E.reduce((function(t,n){var r=n.distance,o=n.timestamp;return e-o>200||(p(r)!==p(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=r),t.lastTimestamp&&(t.time+=o-t.lastTimestamp),t.lastTimestamp=o),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function E(e){var t,n,r,o,a,i,u;function s(e){return 2*e}function l(e){return d(e,i,u)}function c(e){return 1-Math.pow(1-e,3)}function f(){h();var t="free-snap"===e.options.mode,n=e.track,i=n.velocity();r=p(i);var u=e.track.details,f=[];if(i||!t){var d=y(i),v=d.dist,m=d.dur;if(m=s(m),v*=r,t){var g=n.idxToDist(n.distToIdx(v),!0);g&&(v=g)}f.push({distance:v,duration:m,easing:c});var b=u.position,P=b+v;if(P<o||P>a){var w=P<o?o-b:a-b,E=0,k=i;if(p(w)===r){var x=Math.min(Math.abs(w)/Math.abs(v),1),C=function(e){return 1-Math.pow(1-e,1/3)}(x)*m;f[0].earlyExit=C,k=i*(1-x)}else f[0].earlyExit=0,E+=w;var S=y(k,100),O=S.dist*r;e.options.rubberband&&(f.push({distance:O,duration:s(S.dur),easing:c}),f.push({distance:-O+E,duration:500,easing:c}))}e.animator.start(f)}else e.moveToIdx(l(u.abs),!0,{duration:500,easing:function(e){return 1+--e*e*e*e*e}})}function y(e,t){void 0===t&&(t=1e3);var n=147e-9+(e=Math.abs(e))/t;return{dist:Math.pow(e,2)/n,dur:e/n}}function v(){var t=e.track.details;t&&(o=t.min,a=t.max,i=t.minIdx,u=t.maxIdx)}function h(){e.animator.stop()}e.on("updated",v),e.on("optionsChanged",v),e.on("created",v),e.on("dragStarted",(function(){h(),t=n=e.track.details.abs})),e.on("dragEnded",(function(){var r=e.options.mode;"snap"===r&&function(){var r=e.track,i=e.track.details,u=i.position,s=p(r.velocity());(u>a||u<o)&&(s=0);var c=t+s;0===i.slides[r.absToRel(c)].portion&&(c-=s),t!==n&&(c=n),p(r.idxToDist(c,!0))!==s&&(c+=s),c=l(c);var f=r.idxToDist(c,!0);e.animator.start([{distance:f,duration:500,easing:function(e){return 1+--e*e*e*e*e}}])}(),"free"!==r&&"free-snap"!==r||f()})),e.on("dragged",(function(){n=e.track.details.abs}))}function k(e){var t,n,r,o,a,i,y,v,h,m,g,b,P,w,E,k,x,C,S=f();function O(s){if(i&&v===s.id){var f=M(s);if(h){if(!_(s))return T(s);m=f,h=!1,e.emit("dragChecked")}if(k)return m=f;l(s);var P=function(t){if(x===-1/0&&C===1/0)return t;var r=e.track.details,i=r.length,u=r.position,s=d(t,x-u,C-u);if(0===i)return 0;if(!e.options.rubberband)return s;if(u<=C&&u>=x)return t;if(u<x&&n>0||u>C&&n<0)return t;var l=(u<x?u-x:u-C)/i,c=o*i,f=Math.abs(l*c),p=Math.max(0,1-f/a*2);return p*p*t}(y(m-f)/o*r);n=p(P);var w=e.track.details.position;(w>x&&w<C||w===x&&n>0||w===C&&n<0)&&c(s),g+=P,!b&&Math.abs(g*o)>5&&(b=!0,u(t,"moves","")),e.track.add(P),m=f,e.emit("dragged")}}function A(t){!i&&e.track.details&&e.track.details.length&&(b=!1,g=0,i=!0,h=!0,v=t.id,_(t),m=M(t),e.emit("dragStarted"))}function T(n){i&&v===n.idChanged&&(u(t,"moves",null),i=!1,e.emit("dragEnded"))}function _(e){var t=I(),n=t?e.y:e.x,r=t?e.x:e.y,o=void 0!==P&&void 0!==w&&Math.abs(w-r)<=Math.abs(P-n);return P=n,w=r,o}function M(e){return I()?e.y:e.x}function I(){return e.options.vertical}function R(){o=e.size,a=I()?window.innerHeight:window.innerWidth;var t=e.track.details;t&&(x=t.min,C=t.max)}function D(){if(S.purge(),e.options.drag&&!e.options.disabled){var n;n=e.options.dragSpeed||1,y="function"==typeof n?n:function(e){return e*n},r=e.options.rtl?-1:1,R(),t=e.container,function(){var e="data-keen-slider-clickable";s("[".concat(e,"]:not([").concat(e,"=false])"),t).map((function(e){S.add(e,"mousedown",c),S.add(e,"touchstart",c)}))}(),S.add(t,"dragstart",(function(e){l(e)})),S.input(t,"ksDragStart",A),S.input(t,"ksDrag",O),S.input(t,"ksDragEnd",T),S.input(t,"mousedown",A),S.input(t,"mousemove",O),S.input(t,"mouseleave",T),S.input(t,"mouseup",T),S.input(t,"touchstart",A,{passive:!0}),S.input(t,"touchmove",O,{passive:!1}),S.input(t,"touchend",T),S.input(t,"touchcancel",T),S.add(window,"wheel",(function(e){i&&l(e)}));var o="data-keen-slider-scrollable";s("[".concat(o,"]:not([").concat(o,"=false])"),e.container).map((function(e){return function(e){var t;S.input(e,"touchstart",(function(e){t=M(e),k=!0,E=!0}),{passive:!0}),S.input(e,"touchmove",(function(n){var r=I(),o=r?e.scrollHeight-e.clientHeight:e.scrollWidth-e.clientWidth,a=t-M(n),i=r?e.scrollTop:e.scrollLeft,u=r&&"scroll"===e.style.overflowY||!r&&"scroll"===e.style.overflowX;if(t=M(n),(a<0&&i>0||a>0&&i<o)&&E&&u)return k=!0;E=!1,l(n),k=!1})),S.input(e,"touchend",(function(){k=!1}))}(e)}))}}e.on("updated",R),e.on("optionsChanged",D),e.on("created",D),e.on("destroyed",S.purge)}function x(e){var t,n,r=null;function o(t,n,r){e.animator.active?i(t,n,r):requestAnimationFrame((function(){return i(t,n,r)}))}function a(){o(!1,!1,n)}function i(n,o,a){var i=0,u=e.size,c=e.track.details;if(c&&t){var f=c.slides;t.forEach((function(e,t){if(n)!r&&o&&s(e,null,a),l(e,null,a);else{if(!f[t])return;var c=f[t].size*u;!r&&o&&s(e,c,a),l(e,f[t].distance*u-i,a),i+=c}}))}}function u(t){return"performance"===e.options.renderMode?Math.round(t):t}function s(e,t,n){var r=n?"height":"width";null!==t&&(t=u(t)+"px"),e.style["min-"+r]=t,e.style["max-"+r]=t}function l(e,t,n){if(null!==t){t=u(t);var r=n?t:0;t="translate3d(".concat(n?0:t,"px, ").concat(r,"px, 0)")}e.style.transform=t,e.style["-webkit-transform"]=t}function c(){t&&(i(!0,!0,n),t=null),e.on("detailsChanged",a,!0)}function f(){o(!1,!0,n)}function d(){c(),n=e.options.vertical,e.options.disabled||"custom"===e.options.renderMode||(r="auto"===v(e.options.slides,"perView",null),e.on("detailsChanged",a),(t=e.slides).length&&f())}e.on("created",d),e.on("optionsChanged",d),e.on("beforeOptionsChanged",(function(){c()})),e.on("updated",f),e.on("destroyed",c)}function C(e,t){return function(n){var r,o,a,i,l,c=f();function d(e){var t;u(n.container,"reverse","rtl"!==(t=n.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||e?null:""),u(n.container,"v",n.options.vertical&&!e?"":null),u(n.container,"disabled",n.options.disabled&&!e?"":null)}function p(){h()&&E()}function h(){var e=null;if(i.forEach((function(t){t.matches&&(e=t.__media)})),e===r)return!1;r||n.emit("beforeOptionsChanged"),r=e;var t=e?a.breakpoints[e]:a;return n.options=b(b({},a),t),d(),O(),A(),x(),!0}function m(e){var t=y(e);return(n.options.vertical?t.height:t.width)/n.size||1}function g(){return n.options.trackConfig.length}function P(e){for(var u in r=!1,a=b(b({},t),e),c.purge(),o=n.size,i=[],a.breakpoints||[]){var s=window.matchMedia(u);s.__media=u,i.push(s),c.add(s,"change",p)}c.add(window,"orientationchange",S),c.add(window,"resize",C),h()}function w(e){n.animator.stop();var t=n.track.details;n.track.init(null!=e?e:t?t.abs:0)}function E(e){w(e),n.emit("optionsChanged")}function k(e,t){if(e)return P(e),void E(t);O(),A();var r=g();x(),g()!==r?E(t):w(t),n.emit("updated")}function x(){var e=n.options.slides;if("function"==typeof e)return n.options.trackConfig=e(n.size,n.slides);for(var t=n.slides,r=t.length,o="number"==typeof e?e:v(e,"number",r,!0),a=[],i=v(e,"perView",1,!0),u=v(e,"spacing",0,!0)/n.size||0,s="auto"===i?u:u/i,l=v(e,"origin","auto"),c=0,f=0;f<o;f++){var d="auto"===i?m(t[f]):1/i-u+s,p="center"===l?.5-d/2:"auto"===l?0:l;a.push({origin:p,size:d,spacing:u}),c+=d}if(c+=u*(o-1),"auto"===l&&!n.options.loop&&1!==i){var y=0;a.map((function(e){var t=c-y;return y+=e.size+u,t>=1||(e.origin=1-t-(c>1?0:1-c)),e}))}n.options.trackConfig=a}function C(){O();var e=n.size;n.options.disabled||e===o||(o=e,k())}function S(){C(),setTimeout(C,500),setTimeout(C,2e3)}function O(){var e=y(n.container);n.size=(n.options.vertical?e.height:e.width)||1}function A(){n.slides=s(n.options.selector,n.container)}n.container=(l=s(e,document)).length?l[0]:null,n.destroy=function(){c.purge(),n.emit("destroyed"),d(!0)},n.prev=function(){n.moveToIdx(n.track.details.abs-1,!0)},n.next=function(){n.moveToIdx(n.track.details.abs+1,!0)},n.update=k,P(n.options)}}var S=function(e,t,n){try{return function(e,t){var n,r={};return n={emit:function(e){r[e]&&r[e].forEach((function(e){e(n)}));var t=n.options&&n.options[e];t&&t(n)},moveToIdx:function(e,t,r){var o=n.track.idxToDist(e,t);if(o){var a=n.options.defaultAnimation;n.animator.start([{distance:o,duration:v(r||a,"duration",500),easing:v(r||a,"easing",(function(e){return 1+--e*e*e*e*e}))}])}},on:function(e,t,n){void 0===n&&(n=!1),r[e]||(r[e]=[]);var o=r[e].indexOf(t);o>-1?n&&delete r[e][o]:n||r[e].push(t)},options:e},function(){if(n.track=w(n),n.animator=function(e){var t,n,r,o,a,i;function u(t){i||(i=t),s(!0);var a=t-i;a>r&&(a=r);var f=o[n];if(f[3]<a)return n++,u(t);var d=f[2],p=f[4],y=f[0],v=f[1]*(0,f[5])(0===p?1:(a-d)/p);if(v&&e.track.to(y+v),a<r)return c();i=null,s(!1),l(null),e.emit("animationEnded")}function s(e){t.active=e}function l(e){t.targetIdx=e}function c(){var e;e=u,a=window.requestAnimationFrame(e)}function f(){var t;t=a,window.cancelAnimationFrame(t),s(!1),l(null),i&&e.emit("animationStopped"),i=null}return t={active:!1,start:function(t){if(f(),e.track.details){var a=0,i=e.track.details.position;n=0,r=0,o=t.map((function(e){var t,n=i,o=null!==(t=e.earlyExit)&&void 0!==t?t:e.duration,u=e.easing,s=e.distance*u(o/e.duration)||0;i+=s;var l=r;return r+=o,a+=s,[n,e.distance,l,r,e.duration,u]})),l(e.track.distToIdx(a)),c(),e.emit("animationStarted")}},stop:f,targetIdx:null}}(n),t)for(var e=0,r=t;e<r.length;e++)(0,r[e])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,P([C(e,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),x,k,E],n||[],!0))}catch(e){console.error(e)}};t.E=function(e,t){var n=r.useRef(null),o=r.useRef(!1),a=r.useRef(e),i=r.useCallback((function(r){r?(a.current=e,n.current=new S(r,e,t),o.current=!1):(n.current&&n.current.destroy&&n.current.destroy(),n.current=null)}),[]);return r.useEffect((function(){o.current?n.current&&n.current.update(a.current):o.current=!0}),[g(a,e)]),[i,n]}},15102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof r&&(o=r,r={}),r=r||{},o=o||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,o),i.onload||t(i,o),a.appendChild(i)}},80888:function(e,t,n){"use strict";var r=n(79047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},52007:function(e,t,n){e.exports=n(80888)()},79047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},83457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=t},16364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(35439),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},71698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(42788)),o=u(n(65506)),a=u(n(30626)),i=u(n(16364));function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("youtube-player"),l={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){s('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var u,l=a.default[Symbol.iterator]();!(r=(u=l.next()).done);r=!0){n(u.value)}}catch(c){o=!0,i=c}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,u=!1,s=void 0;try{for(var l,c=o.default[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var f=l.value;r(f)}}catch(d){u=!0,s=d}finally{try{!a&&c.return&&c.return()}finally{if(u)throw s}}return n}};t.default=l,e.exports=t.default},35439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},30626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},65506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},86071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=u(n(83457)),a=u(n(31642)),i=u(n(71698));function u(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=(0,o.default)();if(s||(s=(0,a.default)(u)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(u);var l=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):s.then((function(r){var o=new r.Player(e,t);return u.on("ready",(function(){n(o)})),null}))})),c=i.default.promisifyPlayer(l,n);return c.on=u.on,c.off=u.off,c},e.exports=t.default},31642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(15102),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},42788:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_DEFAULT_URL:"https://trusttrade.pro/api/"}.DEBUG),e}(t=e.exports=n(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},3572:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),u=0;u<i.length;u++)i[u]=arguments[u];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;s++;var o=t.formatters[r];if("function"===typeof o){var a=i[s];n=o.call(e,a),i.splice(s,1),s--}return n})),t.formatArgs.call(e,i);var l=n.log||t.log||console.log.bind(console);l.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(29426),t.names=[],t.skips=[],t.formatters={}},29426:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,u){u=u||{};var s,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var u=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*a;case"days":case"day":case"d":return u*o;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*n;case"seconds":case"second":case"secs":case"sec":case"s":return u*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}(e);if("number"===l&&!1===isNaN(e))return u.long?i(s=e,o,"day")||i(s,r,"hour")||i(s,n,"minute")||i(s,t,"second")||s+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},12340:function(){},69008:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}n.d(t,{Z:function(){return S}});var l=n(37762),c=n(52007),f=n(72791),d=n(78262),p=n(86071),y=Object.defineProperty,v=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,P=function(e,t,n){return t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},w=function(e,t){for(var n in t||(t={}))g.call(t,n)&&P(e,n,t[n]);if(m){var r,o=(0,l.Z)(m(t));try{for(o.s();!(r=o.n()).done;){n=r.value;b.call(t,n)&&P(e,n,t[n])}}catch(a){o.e(a)}finally{o.f()}}return e},E=function(e,t){return v(e,h(t))};function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return E(w({},e),{height:0,width:0,playerVars:E(w({},e.playerVars),{autoplay:0,start:0,end:0})})}var x={videoId:c.string,id:c.string,className:c.string,iframeClassName:c.string,style:c.object,title:c.string,loading:c.oneOf(["lazy","eager"]),opts:c.objectOf(c.any),onReady:c.func,onError:c.func,onPlay:c.func,onPause:c.func,onEnd:c.func,onStateChange:c.func,onPlaybackRateChange:c.func,onPlaybackQualityChange:c.func},C=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}(u,e);var t,n,a,i=s(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).destroyPlayerPromise=void 0,t.onPlayerReady=function(e){var n,r;return null==(r=(n=t.props).onReady)?void 0:r.call(n,e)},t.onPlayerError=function(e){var n,r;return null==(r=(n=t.props).onError)?void 0:r.call(n,e)},t.onPlayerStateChange=function(e){var n,r,o,a,i,s,l,c;switch(null==(r=(n=t.props).onStateChange)||r.call(n,e),e.data){case u.PlayerState.ENDED:null==(a=(o=t.props).onEnd)||a.call(o,e);break;case u.PlayerState.PLAYING:null==(s=(i=t.props).onPlay)||s.call(i,e);break;case u.PlayerState.PAUSED:null==(c=(l=t.props).onPause)||c.call(l,e)}},t.onPlayerPlaybackRateChange=function(e){var n,r;return null==(r=(n=t.props).onPlaybackRateChange)?void 0:r.call(n,e)},t.onPlayerPlaybackQualityChange=function(e){var n,r;return null==(r=(n=t.props).onPlaybackQualityChange)?void 0:r.call(n,e)},t.destroyPlayer=function(){return t.internalPlayer?(t.destroyPlayerPromise=t.internalPlayer.destroy().then((function(){return t.destroyPlayerPromise=void 0})),t.destroyPlayerPromise):Promise.resolve()},t.createPlayer=function(){if("undefined"!==typeof document)if(t.destroyPlayerPromise)t.destroyPlayerPromise.then(t.createPlayer);else{var e=E(w({},t.props.opts),{videoId:t.props.videoId});t.internalPlayer=p(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange),(t.props.title||t.props.loading)&&t.internalPlayer.getIframe().then((function(e){t.props.title&&e.setAttribute("title",t.props.title),t.props.loading&&e.setAttribute("loading",t.props.loading)}))}},t.resetPlayer=function(){return t.destroyPlayer().then(t.createPlayer)},t.updatePlayer=function(){var e;null==(e=t.internalPlayer)||e.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.iframeClassName?e.setAttribute("class",t.props.iframeClassName):e.removeAttribute("class"),t.props.opts&&t.props.opts.width?e.setAttribute("width",t.props.opts.width.toString()):e.removeAttribute("width"),t.props.opts&&t.props.opts.height?e.setAttribute("height",t.props.opts.height.toString()):e.removeAttribute("height"),t.props.title?e.setAttribute("title",t.props.title):e.setAttribute("title","YouTube video player"),t.props.loading?e.setAttribute("loading",t.props.loading):e.removeAttribute("loading")}))},t.getInternalPlayer=function(){return t.internalPlayer},t.updateVideo=function(){var e,n,r,o;if("undefined"!==typeof t.props.videoId&&null!==t.props.videoId){var a=!1,i={videoId:t.props.videoId};(null==(n=t.props.opts)?void 0:n.playerVars)&&(a=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(i.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(i.endSeconds=t.props.opts.playerVars.end)),a?null==(r=t.internalPlayer)||r.loadVideoById(i):null==(o=t.internalPlayer)||o.cueVideoById(i)}else null==(e=t.internalPlayer)||e.stopVideo()},t.refContainer=function(e){t.container=e},t.container=null,t.internalPlayer=null,t}return t=u,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){var n,r,o,a;return e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!d(k(e.opts),k(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){var n,r;if(e.videoId!==t.videoId)return!0;var o=(null==(n=e.opts)?void 0:n.playerVars)||{},a=(null==(r=t.opts)?void 0:r.playerVars)||{};return o.start!==a.start||o.end!==a.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return f.createElement("div",{className:this.props.className,style:this.props.style},f.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}}])&&r(t.prototype,n),a&&r(t,a),Object.defineProperty(t,"prototype",{writable:!1}),u}(f.Component);C.propTypes=x,C.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},C.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var S=C}}]);
//# sourceMappingURL=70.b382ef7f.chunk.js.map