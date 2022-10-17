!function(t,i,e,s){"use strict";var o="parallax",n={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!0,precision:1};function r(i,e){this.element=i,this.$context=t(i).data("api",this),this.$layers=this.$context.find(".layer");var s={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null,pointerEvents:this.$context.data("pointer-events")||!0,precision:parseFloat(this.$context.data("precision"))||1};for(var o in s)null===s[o]&&delete s[o];t.extend(this,n,e,s),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}r.prototype.transformSupport=function(t){for(var s=e.createElement("div"),o=!1,n=null,r=!1,a=null,h=null,l=0,p=this.vendors.length;l<p;l++)if(null!==this.vendors[l]?(a=this.vendors[l][0]+"transform",h=this.vendors[l][1]+"Transform"):(a="transform",h="transform"),void 0!==s.style[h]){o=!0;break}switch(t){case"2D":r=o;break;case"3D":if(o){var c=e.body||e.createElement("body"),y=e.documentElement,d=y.style.overflow,u=!1;e.body||(u=!0,y.style.overflow="hidden",y.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(s),s.style[h]="translate3d(1px,1px,1px)",r=void 0!==(n=i.getComputedStyle(s).getPropertyValue(a))&&n.length>0&&"none"!==n,y.style.overflow=d,c.removeChild(s),u&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return r},r.prototype.ww=null,r.prototype.wh=null,r.prototype.wcx=null,r.prototype.wcy=null,r.prototype.wrx=null,r.prototype.wry=null,r.prototype.portrait=null,r.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),r.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],r.prototype.motionSupport=!!i.DeviceMotionEvent,r.prototype.orientationSupport=!!i.DeviceOrientationEvent,r.prototype.orientationStatus=0,r.prototype.transform2DSupport=r.prototype.transformSupport("2D"),r.prototype.transform3DSupport=r.prototype.transformSupport("3D"),r.prototype.propertyCache={},r.prototype.initialise=function(){"static"===this.$context.css("position")&&this.$context.css({position:"relative"}),this.pointerEvents||this.$context.css({pointerEvents:"none"}),this.accelerate(this.$context),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},r.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer"),this.depthsX=[],this.depthsY=[],this.$layers.css({position:"absolute",display:"block",left:0,top:0}),this.$layers.first().css({position:"relative"}),this.accelerate(this.$layers),this.$layers.each(t.proxy(function(i,e){var s=t(e).data("depth")||0;this.depthsX.push(t(e).data("depth-x")||s),this.depthsY.push(t(e).data("depth-y")||s)},this))},r.prototype.updateDimensions=function(){this.ww=i.innerWidth,this.wh=i.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},r.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},r.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},r.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,i.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,i.addEventListener("mousemove",this.onMouseMove)),i.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},r.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?i.removeEventListener("deviceorientation",this.onDeviceOrientation):i.removeEventListener("mousemove",this.onMouseMove),i.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},r.prototype.calibrate=function(t,i){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===i?this.calibrateY:i},r.prototype.invert=function(t,i){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===i?this.invertY:i},r.prototype.friction=function(t,i){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===i?this.frictionY:i},r.prototype.scalar=function(t,i){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===i?this.scalarY:i},r.prototype.limit=function(t,i){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===i?this.limitY:i},r.prototype.origin=function(t,i){this.originX=void 0===t?this.originX:t,this.originY=void 0===i?this.originY:i},r.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},r.prototype.css=function(i,e,s){var o=this.propertyCache[e];if(!o)for(var n=0,r=this.vendors.length;n<r;n++)if(o=null!==this.vendors[n]?t.camelCase(this.vendors[n][1]+"-"+e):e,void 0!==i.style[o]){this.propertyCache[e]=o;break}i.style[o]=s},r.prototype.accelerate=function(t){for(var i=0,e=t.length;i<e;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},r.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},r.prototype.onOrientationTimer=function(t){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},r.prototype.onCalibrationTimer=function(t){this.calibrationFlag=!0},r.prototype.onWindowResize=function(t){this.updateDimensions()},r.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;e<s;e++){var o=this.depthsX[e],n=this.depthsY[e],r=this.$layers[e],a=this.vx*(o*(this.invertX?-1:1)),h=this.vy*(n*(this.invertY?-1:1));this.setPosition(r,a,h)}this.raf=requestAnimationFrame(this.onAnimationFrame)},r.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var e=(t.beta||0)/30,s=(t.gamma||0)/30,o=i.innerHeight>i.innerWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s}},r.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)};var a={enable:r.prototype.enable,disable:r.prototype.disable,updateLayers:r.prototype.updateLayers,calibrate:r.prototype.calibrate,friction:r.prototype.friction,invert:r.prototype.invert,scalar:r.prototype.scalar,limit:r.prototype.limit,origin:r.prototype.origin};t.fn[o]=function(i){var e=arguments;return this.each(function(){var s=t(this),n=s.data(o);n||(n=new r(this,i),s.data(o,n)),a[i]&&n[i].apply(n,Array.prototype.slice.call(e,1))})}}(window.jQuery||window.Zepto,window,document)