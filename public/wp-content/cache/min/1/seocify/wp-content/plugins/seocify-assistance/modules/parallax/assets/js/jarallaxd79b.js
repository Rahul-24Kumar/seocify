!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=11)}([,,function(e,t,o){"use strict";e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},,function(e,t,o){"use strict";(function(t){var o;o="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=o}).call(this,o(5))},function(e,t,o){"use strict";var n,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(n=window)}e.exports=n},,,,,,function(e,t,o){e.exports=o(12)},function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=l(o(2)),a=o(4),r=l(o(13));function l(e){return e&&e.__esModule?e:{default:e}}var s=a.window.jarallax;if(a.window.jarallax=r.default,a.window.jarallax.noConflict=function(){return a.window.jarallax=s,this},void 0!==a.jQuery){var c=function(){var e=arguments||[];Array.prototype.unshift.call(e,this);var t=r.default.apply(a.window,e);return"object"!==(void 0===t?"undefined":n(t))?t:this};c.constructor=r.default.constructor;var u=a.jQuery.fn.jarallax;a.jQuery.fn.jarallax=c,a.jQuery.fn.jarallax.noConflict=function(){return a.jQuery.fn.jarallax=u,this}}(0,i.default)(function(){(0,r.default)(document.querySelectorAll("[data-jarallax]"))})},function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,i=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(n=(r=l.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(i)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=c(o(2)),l=c(o(14)),s=o(4);function c(e){return e&&e.__esModule?e:{default:e}}var u=-1<navigator.userAgent.indexOf("MSIE ")||-1<navigator.userAgent.indexOf("Trident/")||-1<navigator.userAgent.indexOf("Edge/"),d=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),o=0;o<e.length;o++)if(t&&void 0!==t.style[e[o]])return e[o];return!1}(),p=void 0,m=void 0,f=void 0,y=!1,g=!1;function b(e){p=s.window.innerWidth||document.documentElement.clientWidth,m=s.window.innerHeight||document.documentElement.clientHeight,"object"!==(void 0===e?"undefined":a(e))||"load"!==e.type&&"dom-loaded"!==e.type||(y=!0)}b(),s.window.addEventListener("resize",b),s.window.addEventListener("orientationchange",b),s.window.addEventListener("load",b),(0,r.default)(function(){b({type:"dom-loaded"})});var v=[],h=!1;function x(){if(v.length){f=void 0!==s.window.pageYOffset?s.window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;var e=y||!h||h.width!==p||h.height!==m,t=g||e||!h||h.y!==f;g=y=!1,(e||t)&&(v.forEach(function(o){e&&o.onResize(),t&&o.onScroll()}),h={width:p,height:m,y:f}),(0,l.default)(x)}}var w=!!e.ResizeObserver&&new e.ResizeObserver(function(e){e&&e.length&&(0,l.default)(function(){e.forEach(function(e){e.target&&e.target.jarallax&&(y||e.target.jarallax.onResize(),g=!0)})})}),$=0,j=function(){function e(t,o){!function(t,o){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this);var i=this;i.instanceID=$++,i.$item=t,i.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,automaticResize:!0,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var r=i.$item.getAttribute("data-jarallax"),l=JSON.parse(r||"{}");r&&console.warn("Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53");var s=i.$item.dataset||{},c={};if(Object.keys(s).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==i.defaults[t]&&(c[t]=s[e])}),i.options=i.extend({},i.defaults,l,c,o),i.pureOptions=i.extend({},i.options),Object.keys(i.options).forEach(function(e){"true"===i.options[e]?i.options[e]=!0:"false"===i.options[e]&&(i.options[e]=!1)}),i.options.speed=Math.min(2,Math.max(-1,parseFloat(i.options.speed))),(i.options.noAndroid||i.options.noIos)&&(console.warn("Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices"),i.options.disableParallax||(i.options.noIos&&i.options.noAndroid?i.options.disableParallax=/iPad|iPhone|iPod|Android/:i.options.noIos?i.options.disableParallax=/iPad|iPhone|iPod/:i.options.noAndroid&&(i.options.disableParallax=/Android/))),"string"==typeof i.options.disableParallax&&(i.options.disableParallax=new RegExp(i.options.disableParallax)),i.options.disableParallax instanceof RegExp){var u=i.options.disableParallax;i.options.disableParallax=function(){return u.test(navigator.userAgent)}}if("function"!=typeof i.options.disableParallax&&(i.options.disableParallax=function(){return!1}),"string"==typeof i.options.disableVideo&&(i.options.disableVideo=new RegExp(i.options.disableVideo)),i.options.disableVideo instanceof RegExp){var d=i.options.disableVideo;i.options.disableVideo=function(){return d.test(navigator.userAgent)}}"function"!=typeof i.options.disableVideo&&(i.options.disableVideo=function(){return!1});var p=i.options.elementInViewport;p&&"object"===(void 0===p?"undefined":a(p))&&void 0!==p.length&&(p=n(p,1)[0]),p instanceof Element||(p=null),i.options.elementInViewport=p,i.image={src:i.options.imgSrc||null,$container:null,useImgTag:!1,position:/iPad|iPhone|iPod|Android/.test(navigator.userAgent)?"absolute":"fixed"},i.initImg()&&i.canInitParallax()&&i.init()}return i(e,[{key:"css",value:function(e,t){return"string"==typeof t?s.window.getComputedStyle(e).getPropertyValue(t):(t.transform&&d&&(t[d]=t.transform),Object.keys(t).forEach(function(o){e.style[o]=t[o]}),e)}},{key:"extend",value:function(e){var t=arguments;return e=e||{},Object.keys(arguments).forEach(function(o){t[o]&&Object.keys(t[o]).forEach(function(n){e[n]=t[o][n]})}),e}},{key:"getWindowData",value:function(){return{width:p,height:m,y:f}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return t&&"string"==typeof t&&(t=e.$item.querySelector(t)),t instanceof Element||(t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!(!e.image.$item&&(null===e.image.src&&(e.image.src=e.css(e.$item,"background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!e.image.src||"none"===e.image.src))}},{key:"canInitParallax",value:function(){return d&&!this.options.disableParallax()}},{key:"init",value:function(){var e=this,t={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none"},o={};if(!e.options.keepImg){var n=e.$item.getAttribute("style");if(n&&e.$item.setAttribute("data-jarallax-original-styles",n),e.image.useImgTag){var i=e.image.$item.getAttribute("style");i&&e.image.$item.setAttribute("data-jarallax-original-styles",i)}}if("static"===e.css(e.$item,"position")&&e.css(e.$item,{position:"relative"}),"auto"===e.css(e.$item,"z-index")&&e.css(e.$item,{zIndex:0}),e.image.$container=document.createElement("div"),e.css(e.image.$container,t),e.css(e.image.$container,{"z-index":e.options.zIndex}),u&&e.css(e.image.$container,{opacity:.9999}),e.image.$container.setAttribute("id","jarallax-container-"+e.instanceID),e.$item.appendChild(e.image.$container),e.image.useImgTag?o=e.extend({"object-fit":e.options.imgSize,"object-position":e.options.imgPosition,"font-family":"object-fit: "+e.options.imgSize+"; object-position: "+e.options.imgPosition+";","max-width":"none"},t,o):(e.image.$item=document.createElement("div"),e.image.src&&(o=e.extend({"background-position":e.options.imgPosition,"background-size":e.options.imgSize,"background-repeat":e.options.imgRepeat,"background-image":'url("'+e.image.src+'")'},t,o))),"opacity"!==e.options.type&&"scale"!==e.options.type&&"scale-opacity"!==e.options.type&&1!==e.options.speed||(e.image.position="absolute"),"fixed"===e.image.position)for(var a=0,r=e.$item;null!==r&&r!==document&&0===a;){var l=e.css(r,"-webkit-transform")||e.css(r,"-moz-transform")||e.css(r,"transform");l&&"none"!==l&&(a=1,e.image.position="absolute"),r=r.parentNode}o.position=e.image.position,e.css(e.image.$item,o),e.image.$container.appendChild(e.image.$item),e.onResize(),e.onScroll(!0),e.options.automaticResize&&w&&w.observe(e.$item),e.options.onInit&&e.options.onInit.call(e),"none"!==e.css(e.$item,"background-image")&&e.css(e.$item,{"background-image":"none"}),e.addToParallaxList()}},{key:"addToParallaxList",value:function(){v.push(this),1===v.length&&x()}},{key:"removeFromParallaxList",value:function(){var e=this;v.forEach(function(t,o){t.instanceID===e.instanceID&&v.splice(o,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t=e.$item.getAttribute("data-jarallax-original-styles");if(e.$item.removeAttribute("data-jarallax-original-styles"),t?e.$item.setAttribute("style",t):e.$item.removeAttribute("style"),e.image.useImgTag){var o=e.image.$item.getAttribute("data-jarallax-original-styles");e.image.$item.removeAttribute("data-jarallax-original-styles"),o?e.image.$item.setAttribute("style",t):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)}e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){if("fixed"===this.image.position){var e=this,t=e.image.$container.getBoundingClientRect(),o=t.width,n=t.height;e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-"+e.instanceID),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));var i="#jarallax-container-"+e.instanceID+" {\n           clip: rect(0 "+o+"px "+n+"px 0);\n           clip: rect(0, "+o+"px, "+n+"px, 0);\n        }";e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=i:e.$clipStyles.innerHTML=i}}},{key:"coverImage",value:function(){var e,t=this,o=t.image.$container.getBoundingClientRect(),n=o.height,i=t.options.speed,a="scroll"===t.options.type||"scroll-opacity"===t.options.type,r=0,l=n;return a&&(i<0?(r=i*Math.max(n,m),m<n&&(r-=i*(n-m))):r=i*(n+m),1<i?l=Math.abs(r-m):i<0?l=r/i+Math.abs(r):l+=(m-n)*(1-i),r/=2),t.parallaxScrollDistance=r,e=a?(m-l)/2:(n-l)/2,t.css(t.image.$item,{height:l+"px",marginTop:e+"px",left:"fixed"===t.image.position?o.left+"px":"0",width:o.width+"px"}),t.options.onCoverImage&&t.options.onCoverImage.call(t),{image:{height:l,marginTop:e},container:o}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t=this,o=t.$item.getBoundingClientRect(),n=o.top,i=o.height,a={},r=o;if(t.options.elementInViewport&&(r=t.options.elementInViewport.getBoundingClientRect()),t.isElementInViewport=0<=r.bottom&&0<=r.right&&r.top<=m&&r.left<=p,e||t.isElementInViewport){var l=Math.max(0,n),s=Math.max(0,i+n),c=Math.max(0,-n),u=Math.max(0,n+i-m),d=Math.max(0,i-(n+i-m)),f=Math.max(0,-n+m-i),y=1-2*(m-n)/(m+i),g=1;if(i<m?g=1-(c||u)/i:s<=m?g=s/m:d<=m&&(g=d/m),"opacity"!==t.options.type&&"scale-opacity"!==t.options.type&&"scroll-opacity"!==t.options.type||(a.transform="translate3d(0,0,0)",a.opacity=g),"scale"===t.options.type||"scale-opacity"===t.options.type){var b=1;t.options.speed<0?b-=t.options.speed*g:b+=t.options.speed*(1-g),a.transform="scale("+b+") translate3d(0,0,0)"}if("scroll"===t.options.type||"scroll-opacity"===t.options.type){var v=t.parallaxScrollDistance*y;"absolute"===t.image.position&&(v-=n),a.transform="translate3d(0,"+v+"px,0)"}t.css(t.image.$item,a),t.options.onScroll&&t.options.onScroll.call(t,{section:o,beforeTop:l,beforeTopEnd:s,afterTop:c,beforeBottom:u,beforeBottomEnd:d,afterBottom:f,visiblePercent:g,fromViewportCenter:y})}}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}]),e}(),S=function(e){("object"===("undefined"==typeof HTMLElement?"undefined":a(HTMLElement))?e instanceof HTMLElement:e&&"object"===(void 0===e?"undefined":a(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)&&(e=[e]);for(var t=arguments[1],o=Array.prototype.slice.call(arguments,2),n=e.length,i=0,r=void 0;i<n;i++)if("object"===(void 0===t?"undefined":a(t))||void 0===t?e[i].jarallax||(e[i].jarallax=new j(e[i],t)):e[i].jarallax&&(r=e[i].jarallax[t].apply(e[i].jarallax,o)),void 0!==r)return r;return e};S.constructor=j,t.default=S}).call(this,o(5))},function(e,t,o){"use strict";var n=o(4),i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||function(e){var t=+new Date,o=Math.max(0,16-(t-a)),n=setTimeout(e,o);return a=t,n},a=+new Date,r=n.cancelAnimationFrame||n.webkitCancelAnimationFrame||n.mozCancelAnimationFrame||clearTimeout;Function.prototype.bind&&(i=i.bind(n),r=r.bind(n)),(e.exports=i).cancel=r}])