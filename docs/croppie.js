!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports&&"string"!=typeof exports.nodeName?module.exports=t():e.Croppie=t()}("undefined"!=typeof self?self:this,(function(){"function"!=typeof Promise&&function(e){function t(e,t){return function(){e.apply(t,arguments)}}function n(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],l(e,t(o,this),t(r,this))}function i(e){var t=this;return null===this._state?void this._deferreds.push(e):void c((function(){var n=t._state?e.onFulfilled:e.onRejected;if(null!==n){var i;try{i=n(t._value)}catch(t){return void e.reject(t)}e.resolve(i)}else(t._state?e.resolve:e.reject)(t._value)}))}function o(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if("function"==typeof n)return void l(t(n,e),t(o,this),t(r,this))}this._state=!0,this._value=e,a.call(this)}catch(e){r.call(this,e)}}function r(e){this._state=!1,this._value=e,a.call(this)}function a(){for(var e=0,t=this._deferreds.length;t>e;e++)i.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function l(e,t,n){var i=!1;try{e((function(e){i||(i=!0,t(e))}),(function(e){i||(i=!0,n(e))}))}catch(e){if(i)return;i=!0,n(e)}}var u=setTimeout,c="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};n.prototype.catch=function(e){return this.then(null,e)},n.prototype.then=function(e,t){var o=this;return new n((function(n,r){i.call(o,new s(e,t,n,r))}))},n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new n((function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(e){i(r,e)}),n)}e[r]=a,0==--o&&t(e)}catch(e){n(e)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])}))},n.resolve=function(e){return e&&"object"==typeof e&&e.constructor===n?e:new n((function(t){t(e)}))},n.reject=function(e){return new n((function(t,n){n(e)}))},n.race=function(e){return new n((function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)}))},n._setImmediateFn=function(e){c=e},"undefined"!=typeof module&&module.exports?module.exports=n:e.Promise||(e.Promise=n)}(this),"undefined"!=typeof window&&"function"!=typeof window.CustomEvent&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),"undefined"==typeof HTMLCanvasElement||HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var e,t,n,i=["Webkit","Moz","ms"],o="undefined"!=typeof document?document.createElement("div").style:{},r=[1,8,3,6],a=[2,7,4,5];function s(e){if(e in o)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=i.length;n--;)if((e=i[n]+t)in o)return e}function l(e,t){for(var n in e=e||{},t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},l(e[n],t[n])):e[n]=t[n];return e}function u(e){return l({},e)}function c(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function h(e,t,n){if("string"==typeof t){var i=t;(t={})[i]=n}for(var o in t)e.style[o]=t[o]}function p(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function d(e,t){for(var n in t)e.setAttribute(n,t[n])}function m(e){return parseInt(e,10)}function f(e,t){var n=e.naturalWidth,i=e.naturalHeight,o=t||y(e);if(o&&o>=5){var r=n;n=i,i=r}return{width:n,height:i}}t=s("transform"),e=s("transformOrigin"),n=s("userSelect");var v={translate3d:{suffix:", 0px"},translate:{suffix:""}},g=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};g.parse=function(e){return e.style?g.parse(e.style[t]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?g.fromMatrix(e):g.fromString(e)},g.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new g(m(t[4]),m(t[5]),parseFloat(t[0]))},g.fromString=function(e){var t=e.split(") "),n=t[0].substring(ie.globals.translate.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new g(o,r,i)},g.prototype.toString=function(){var e=v[ie.globals.translate].suffix||"";return ie.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var w=function(t){if(!t||!t.style[e])return this.x=0,void(this.y=0);var n=t.style[e].split(" ");this.x=parseFloat(n[0]),this.y=parseFloat(n[1])};function y(e){return e.exifdata&&e.exifdata.Orientation?m(e.exifdata.Orientation):1}function b(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function x(){var e,t,n,i,o,r,a=this,s=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.enableOrientation||C.call(a),a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=t,p(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),o=a.options.boundary.width,r=a.options.boundary.height,h(e,{width:o+(isNaN(o)?"":"px"),height:r+(isNaN(r)?"":"px")}),p(n,"cr-viewport"),s&&p(n,s),h(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),n.setAttribute("tabindex",0),p(a.elements.preview,"cr-image"),d(a.elements.preview,{alt:"preview","aria-grabbed":"false"}),p(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),p(a.element,"croppie-container"),a.options.customClass&&p(a.element,a.options.customClass),I.call(this),a.options.enableZoom&&L.call(a),a.options.enableResize&&E.call(a)}function C(){return this.options.enableExif&&window.EXIF}function E(){var e,t,i,o,r,a,s,l=this,u=document.createElement("div"),c=!1;function d(a){if((void 0===a.button||0===a.button)&&(a.preventDefault(),!c)){var s=l.elements.overlay.getBoundingClientRect();if(c=!0,t=a.pageX,i=a.pageY,e=-1!==a.currentTarget.className.indexOf("vertical")?"v":"h",o=s.width,r=s.height,a.touches){var u=a.touches[0];t=u.pageX,i=u.pageY}window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[n]="none"}}function m(n){var a=n.pageX,s=n.pageY;if(n.preventDefault(),n.touches){var c=n.touches[0];a=c.pageX,s=c.pageY}var p=a-t,d=s-i,m=l.options.viewport.height+d,f=l.options.viewport.width+p;"v"===e&&m>=50&&m<=r?(h(u,{height:m+"px"}),l.options.boundary.height+=d,h(l.elements.boundary,{height:l.options.boundary.height+"px"}),l.options.viewport.height+=d,h(l.elements.viewport,{height:l.options.viewport.height+"px"})):"h"===e&&f>=50&&f<=o&&(h(u,{width:f+"px"}),l.options.boundary.width+=p,h(l.elements.boundary,{width:l.options.boundary.width+"px"}),l.options.viewport.width+=p,h(l.elements.viewport,{width:l.options.viewport.width+"px"})),M.call(l),k.call(l),Z.call(l),Y.call(l),i=s,t=a}function f(){c=!1,window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[n]=""}p(u,"cr-resizer"),h(u,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(p(a=document.createElement("div"),"cr-resizer-vertical"),u.appendChild(a)),this.options.resizeControls.width&&(p(s=document.createElement("div"),"cr-resizer-horisontal"),u.appendChild(s)),a&&(a.addEventListener("mousedown",d),a.addEventListener("touchstart",d)),s&&(s.addEventListener("mousedown",d),s.addEventListener("touchstart",d)),this.elements.boundary.appendChild(u)}function _(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=U(e,4);t.value=Math.max(parseFloat(t.min),Math.min(parseFloat(t.max),n)).toString()}}function L(){var e=this,t=e.elements.zoomerWrap=document.createElement("div"),n=e.elements.zoomer=document.createElement("input");function i(){R.call(e,{value:parseFloat(n.value),origin:new w(e.elements.preview),viewportRect:e.elements.viewport.getBoundingClientRect(),transform:g.parse(e.elements.preview)})}function o(t){var n,o;if("ctrl"===e.options.mouseWheelZoom&&!0!==t.ctrlKey)return 0;n=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=e._currentZoom+n*e._currentZoom,t.preventDefault(),_.call(e,o),i.call(e)}p(t,"cr-slider-wrap"),p(n,"cr-slider"),n.type="range",n.step="0.0001",n.value="1",n.style.display=e.options.showZoomer?"":"none",n.setAttribute("aria-label","zoom"),e.element.appendChild(t),t.appendChild(n),e._currentZoom=1,e.elements.zoomer.addEventListener("input",i),e.elements.zoomer.addEventListener("change",i),e.options.mouseWheelZoom&&(e.elements.boundary.addEventListener("mousewheel",o),e.elements.boundary.addEventListener("DOMMouseScroll",o))}function R(n){var i=this,o=n?n.transform:g.parse(i.elements.preview),r=n?n.viewportRect:i.elements.viewport.getBoundingClientRect(),a=n?n.origin:new w(i.elements.preview);function s(){var n={};n[t]=o.toString(),n[e]=a.toString(),h(i.elements.preview,n)}if(i._currentZoom=n?n.value:i._currentZoom,o.scale=i._currentZoom,i.elements.zoomer.setAttribute("aria-valuenow",i._currentZoom),s(),i.options.enforceBoundary){var l=B.call(i,r),u=l.translate,c=l.origin;o.x>=u.maxX&&(a.x=c.minX,o.x=u.maxX),o.x<=u.minX&&(a.x=c.maxX,o.x=u.minX),o.y>=u.maxY&&(a.y=c.minY,o.y=u.maxY),o.y<=u.minY&&(a.y=c.maxY,o.y=u.minY)}s(),X.call(i),Y.call(i)}function B(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,s=t.elements.preview.getBoundingClientRect(),l=s.width,u=s.height,c=i/2,h=o/2,p=-1*(c/n-r),d=-1*(h/n-a),m=1/n*c,f=1/n*h;return{translate:{maxX:p,minX:p-(l*(1/n)-i*(1/n)),maxY:d,minY:d-(u*(1/n)-o*(1/n))},origin:{maxX:l*(1/n)-m,minX:m,maxY:u*(1/n)-f,minY:f}}}function Z(n){var i=this,o=i._currentZoom,r=i.elements.preview.getBoundingClientRect(),a=i.elements.viewport.getBoundingClientRect(),s=g.parse(i.elements.preview.style[t]),l=new w(i.elements.preview),u=a.top-r.top+a.height/2,c=a.left-r.left+a.width/2,p={},d={};if(n){var m=l.x,f=l.y,v=s.x,y=s.y;p.y=m,p.x=f,s.y=v,s.x=y}else p.y=u/o,p.x=c/o,d.y=(p.y-l.y)*(1-o),d.x=(p.x-l.x)*(1-o),s.x-=d.x,s.y-=d.y;var b={};b[e]=p.x+"px "+p.y+"px",b[t]=s.toString(),h(i.elements.preview,b)}function I(){var e,i,o,r,a,s=this,l=!1;function u(e,t){var n=s.elements.preview.getBoundingClientRect(),i=a.y+t,o=a.x+e;s.options.enforceBoundary?(r.top>n.top+t&&r.bottom<n.bottom+t&&(a.y=i),r.left>n.left+e&&r.right<n.right+e&&(a.x=o)):(a.y=i,a.x=o)}function p(e){s.elements.preview.setAttribute("aria-grabbed",e),s.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function d(t){if((void 0===t.button||0===t.button)&&(t.preventDefault(),!l)){if(l=!0,e=t.pageX,i=t.pageY,t.touches){var o=t.touches[0];e=o.pageX,i=o.pageY}p(l),a=g.parse(s.elements.preview),window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[n]="none",r=s.elements.viewport.getBoundingClientRect()}}function m(n){n.preventDefault();var r=n.pageX,l=n.pageY;if(n.touches){var p=n.touches[0];r=p.pageX,l=p.pageY}var d=r-e,m=l-i,f={};if("touchmove"===n.type&&n.touches.length>1){var v=n.touches[0],g=n.touches[1],w=Math.sqrt((v.pageX-g.pageX)*(v.pageX-g.pageX)+(v.pageY-g.pageY)*(v.pageY-g.pageY));o||(o=w/s._currentZoom);var y=w/o;return _.call(s,y),void c(s.elements.zoomer)}u(d,m),f[t]=a.toString(),h(s.elements.preview,f),M.call(s),i=l,e=r}function f(){p(l=!1),window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[n]="",Z.call(s),Y.call(s),o=0}s.elements.overlay.addEventListener("mousedown",d),s.elements.viewport.addEventListener("keydown",(function(e){var i;if(!e.shiftKey||38!==e.keyCode&&40!==e.keyCode){if(s.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var l=function(e){switch(e){case 37:return[1,0];case 38:return[0,1];case 39:return[-1,0];case 40:return[0,-1]}}(e.keyCode);a=g.parse(s.elements.preview),document.body.style[n]="none",r=s.elements.viewport.getBoundingClientRect(),function(e){var i={};u(e[0],e[1]),i[t]=a.toString(),h(s.elements.preview,i),M.call(s),document.body.style[n]="",Z.call(s),Y.call(s),o=0}(l)}}else i=38===e.keyCode?parseFloat(s.elements.zoomer.value)+parseFloat(s.elements.zoomer.step):parseFloat(s.elements.zoomer.value)-parseFloat(s.elements.zoomer.step),s.setZoom(i)})),s.elements.overlay.addEventListener("touchstart",d)}function M(){if(this.elements){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();h(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}}w.prototype.toString=function(){return this.x+"px "+this.y+"px"};var z,F,W,X=(z=M,500,function(){var e=this,t=arguments,n=function(){W=null,z.apply(e,t)},i=F;clearTimeout(W),W=setTimeout(n,500),i&&z.apply(e,t)});function Y(){var e,t=this,n=t.get();H.call(t)&&(t.options.update.call(t,n),t.$&&"undefined"==typeof Prototype?t.$(t.element).trigger("update.croppie",n):(window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,n),t.element.dispatchEvent(e)))}function H(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function O(){var n,i=this,o={},r=i.elements.preview,a=new g(0,0,1),s=new w;H.call(i)&&!i.data.bound&&(i.data.bound=!0,o[t]=a.toString(),o[e]=s.toString(),o.opacity=1,h(r,o),n=i.elements.preview.getBoundingClientRect(),i._originalImageWidth=n.width,i._originalImageHeight=n.height,i.data.orientation=C.call(i)?y(i.elements.img):i.data.orientation,i.options.enableZoom?k.call(i,!0):i._currentZoom=1,a.scale=i._currentZoom,o[t]=a.toString(),h(r,o),i.data.points.length?A.call(i,i.data.points):S.call(i),Z.call(i),M.call(i))}function k(e){var t,n,i,o,r=this,a=Math.max(r.options.minZoom,0)||0,s=r.options.maxZoom||1.5,l=r.elements.zoomer,u=parseFloat(l.value),h=r.elements.boundary.getBoundingClientRect(),p=f(r.elements.img,r.data.orientation),d=r.elements.viewport.getBoundingClientRect();r.options.enforceBoundary&&(i=d.width/p.width,o=d.height/p.height,a=Math.max(i,o)),a>=s&&(s=a+1),l.min=U(a,4),l.max=U(s,4),!e&&(u<l.min||u>l.max)?_.call(r,u<l.min?l.min:l.max):e&&(n=Math.max(h.width/p.width,h.height/p.height),t=null!==r.data.boundZoom?r.data.boundZoom:n,_.call(r,t)),c(l)}function A(n){if(4!==n.length)throw"Croppie - Invalid number of points supplied: "+n;var i=this,o=n[2]-n[0],r=i.elements.viewport.getBoundingClientRect(),a=i.elements.boundary.getBoundingClientRect(),s=r.left-a.left,l=r.top-a.top,u=r.width/o,c=n[1],p=n[0],d=-1*n[1]+l,m=-1*n[0]+s,f={};f[e]=p+"px "+c+"px",f[t]=new g(m,d,u).toString(),h(i.elements.preview,f),_.call(i,u),i._currentZoom=u}function S(){var e=this,n=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),o=e.elements.boundary.getBoundingClientRect(),r=i.left-o.left,a=i.top-o.top,s=r-(n.width-i.width)/2,l=a-(n.height-i.height)/2,u=new g(s,l,e._currentZoom);h(e.elements.preview,t,u.toString())}function j(e){var t=this,n=t.elements.canvas,i=t.elements.img;n.getContext("2d").clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height,b(n,i,t.options.enableOrientation&&e||y(i))}function N(e){var t=this,n=e.points,i=m(n[0]),o=m(n[1]),r=m(n[2])-i,a=m(n[3])-o,s=e.circle,l=document.createElement("canvas"),u=l.getContext("2d"),c=e.outputWidth||r,h=e.outputHeight||a;l.width=c,l.height=h,e.backgroundColor&&(u.fillStyle=e.backgroundColor,u.fillRect(0,0,c,h));var p=i,d=o,f=r,v=a,g=0,w=0,y=c,b=h;return i<0&&(p=0,g=Math.abs(i)/r*c),f+p>t._originalImageWidth&&(y=(f=t._originalImageWidth-p)/r*c),o<0&&(d=0,w=Math.abs(o)/a*h),v+d>t._originalImageHeight&&(b=(v=t._originalImageHeight-d)/a*h),u.drawImage(this.elements.preview,p,d,f,v,g,w,y,b),s&&(u.fillStyle="#fff",u.globalCompositeOperation="destination-in",u.beginPath(),u.arc(l.width/2,l.height/2,l.width/2,0,2*Math.PI,!0),u.closePath(),u.fill()),l}function P(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),o=t[2]-t[0],r=t[3]-t[1];return p(n,"croppie-result"),n.appendChild(i),h(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,h(n,{width:o+"px",height:r+"px"}),n}function T(e){return N.call(this,e).toDataURL(e.format,e.quality)}function D(e){var t=this;return new Promise((function(n){N.call(t,e).toBlob((function(e){n(e)}),e.format,e.quality)}))}function q(e){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,(function(t){e.classList.add(t)})),this.elements.img.parentNode.replaceChild(e,this.elements.img),this.elements.preview=e),this.elements.img=e}function K(e,t){var n,i=this,o=[],r=null,a=C.call(i);if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if(void 0===e&&i.data.url)return O.call(i),Y.call(i),null;n=e.url,o=e.points||[],r=void 0===e.zoom?null:e.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=r,function(e,t){if(!e)throw"Source image missing";var n=new Image;return n.style.opacity="0",new Promise((function(i,o){function r(){n.style.opacity="1",setTimeout((function(){i(n)}),1)}n.removeAttribute("crossOrigin"),e.match(/^https?:\/\/|^\/\//)&&n.setAttribute("crossOrigin","anonymous"),n.onload=function(){t?EXIF.getData(n,(function(){r()})):r()},n.onerror=function(e){n.style.opacity=1,setTimeout((function(){o(e)}),1)},n.src=e}))}(n,a).then((function(n){if(q.call(i,n),o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100]);else{var r,a,s=f(n),l=i.elements.viewport.getBoundingClientRect(),u=l.width/l.height;s.width/s.height>u?r=(a=s.height)*u:(r=s.width,a=s.height/u);var c=(s.width-r)/2,h=(s.height-a)/2,p=c+r,d=h+a;i.data.points=[c,h,p,d]}i.data.orientation=e.orientation||1,i.data.points=o.map((function(e){return parseFloat(e)})),i.options.useCanvas&&j.call(i,i.data.orientation),O.call(i),Y.call(i),t&&t()}))}function U(e,t){return parseFloat(e).toFixed(t||0)}function $(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,s=i+e.elements.viewport.offsetWidth+r,l=o+e.elements.viewport.offsetHeight+a,u=e._currentZoom;(u===1/0||isNaN(u))&&(u=1);var c=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(c,i/u),o=Math.max(c,o/u),s=Math.max(c,s/u),l=Math.max(c,l/u),{points:[U(i),U(o),U(s),U(l)],zoom:u,orientation:e.data.orientation}}var Q={type:"canvas",format:"png",quality:1},G=["jpeg","webp","png"];function V(e){var t=this,n=$.call(t),i=l(u(Q),u(e)),o="string"==typeof e?e:i.type||"base64",r=i.size||"viewport",a=i.format,s=i.quality,c=i.backgroundColor,h="boolean"==typeof i.circle?i.circle:"circle"===t.options.viewport.type,p=t.elements.viewport.getBoundingClientRect(),d=p.width/p.height;return"viewport"===r?(n.outputWidth=p.width,n.outputHeight=p.height):"object"==typeof r&&(r.width&&r.height?(n.outputWidth=r.width,n.outputHeight=r.height):r.width?(n.outputWidth=r.width,n.outputHeight=r.width/d):r.height&&(n.outputWidth=r.height*d,n.outputHeight=r.height)),G.indexOf(a)>-1&&(n.format="image/"+a,n.quality=s),n.circle=h,n.url=t.data.url,n.backgroundColor=c,new Promise((function(e){switch(o.toLowerCase()){case"rawcanvas":e(N.call(t,n));break;case"canvas":case"base64":e(T.call(t,n));break;case"blob":D.call(t,n).then(e);break;default:e(P.call(t,n))}}))}function J(){O.call(this)}function ee(e){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var t,n,i,o,s,l=this,u=l.elements.canvas;if(l.data.orientation=(t=l.data.orientation,n=e,o=(i=r.indexOf(t)>-1?r:a).indexOf(t),s=n/90%i.length,i[(i.length+o+s%i.length)%i.length]),b(u,l.elements.img,l.data.orientation),Z.call(l,!0),k.call(l),Math.abs(e)/90%2==1){var c=l._originalImageHeight,h=l._originalImageWidth;l._originalImageWidth=c,l._originalImageHeight=h}}function te(){var e,t,n=this;n.element.removeChild(n.elements.boundary),t="croppie-container",(e=n.element).classList?e.classList.remove(t):e.className=e.className.replace(t,""),n.options.enableZoom&&n.element.removeChild(n.elements.zoomerWrap),delete n.elements}if("undefined"!=typeof window&&window.jQuery){var ne=window.jQuery;ne.fn.croppie=function(e){var t=typeof e;if("string"===t){var n=Array.prototype.slice.call(arguments,1),i=ne(this).data("croppie");return"get"===e?i.get():"result"===e?i.result.apply(i,n):"bind"===e?i.bind.apply(i,n):this.each((function(){var t=ne(this).data("croppie");if(t){var i=t[e];if(!ne.isFunction(i))throw"Croppie "+e+" method not found";i.apply(t,n),"destroy"===e&&ne(this).removeData("croppie")}}))}return this.each((function(){var t=new ie(this,e);t.$=ne,ne(this).data("croppie",t)}))}}function ie(e,t){if(e.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=e,this.options=l(u(ie.defaults),t),"img"===this.element.tagName.toLowerCase()){var n=this.element;p(n,"cr-original-image"),d(n,{"aria-hidden":"true",alt:""});var i=document.createElement("div");this.element.parentNode.appendChild(i),i.appendChild(n),this.element=i,this.options.url=this.options.url||n.src}if(x.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,K.call(this,o)}}return ie.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},ie.globals={translate:"translate3d"},l(ie.prototype,{bind:function(e,t){return K.call(this,e,t)},get:function(){var e=$.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return V.call(this,e)},refresh:function(){return J.call(this)},setZoom:function(e){_.call(this,e),c(this.elements.zoomer)},rotate:function(e){ee.call(this,e)},destroy:function(){return te.call(this)}}),ie}));