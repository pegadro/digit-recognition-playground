(()=>{var e={99:function(e,t,n){var i,o;"undefined"!=typeof self&&self,i=function(){"function"!=typeof Promise&&function(t){function n(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],c(e,n(r,this),n(a,this))}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void d((function(){var n=t._state?e.onFulfilled:e.onRejected;if(null!==n){var i;try{i=n(t._value)}catch(t){return void e.reject(t)}e.resolve(i)}else(t._state?e.resolve:e.reject)(t._value)}))}function r(e){try{if(e===this)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void c(n(t,e),n(r,this),n(a,this))}this._state=!0,this._value=e,l.call(this)}catch(e){a.call(this,e)}}function a(e){this._state=!1,this._value=e,l.call(this)}function l(){for(var e=0,t=this._deferreds.length;t>e;e++)o.call(this,this._deferreds[e]);this._deferreds=null}function s(e,t,n,i){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=i}function c(e,t,n){var i=!1;try{e((function(e){i||(i=!0,t(e))}),(function(e){i||(i=!0,n(e))}))}catch(e){if(i)return;i=!0,n(e)}}var u=setTimeout,d="function"==typeof setImmediate&&setImmediate||function(e){u(e,1)},h=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i((function(i,r){o.call(n,new s(e,t,i,r))}))},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&h(arguments[0])?arguments[0]:arguments);return new i((function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var l=a.then;if("function"==typeof l)return void l.call(a,(function(e){i(r,e)}),n)}e[r]=a,0==--o&&t(e)}catch(e){n(e)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var i=0,o=e.length;o>i;i++)e[i].then(t,n)}))},i._setImmediateFn=function(e){d=e},e.exports?e.exports=i:t.Promise||(t.Promise=i)}(this),"undefined"!=typeof window&&"function"!=typeof window.CustomEvent&&function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),"undefined"==typeof HTMLCanvasElement||HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(e,t,n){for(var i=atob(this.toDataURL(t,n).split(",")[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;a++)r[a]=i.charCodeAt(a);e(new Blob([r],{type:t||"image/png"}))}});var t,n,i,o=["Webkit","Moz","ms"],r="undefined"!=typeof document?document.createElement("div").style:{},a=[1,8,3,6],l=[2,7,4,5];function s(e){if(e in r)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=o.length;n--;)if((e=o[n]+t)in r)return e}function c(e,t){for(var n in e=e||{},t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},c(e[n],t[n])):e[n]=t[n];return e}function u(e){return c({},e)}function d(e){if("createEvent"in document){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}else e.fireEvent("onchange")}function h(e,t,n){if("string"==typeof t){var i=t;(t={})[i]=n}for(var o in t)e.style[o]=t[o]}function p(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function m(e,t){for(var n in t)e.setAttribute(n,t[n])}function f(e){return parseInt(e,10)}function v(e,t){var n=e.naturalWidth,i=e.naturalHeight,o=t||b(e);if(o&&o>=5){var r=n;n=i,i=r}return{width:n,height:i}}n=s("transform"),t=s("transformOrigin"),i=s("userSelect");var g={translate3d:{suffix:", 0px"},translate:{suffix:""}},w=function(e,t,n){this.x=parseFloat(e),this.y=parseFloat(t),this.scale=parseFloat(n)};w.parse=function(e){return e.style?w.parse(e.style[n]):e.indexOf("matrix")>-1||e.indexOf("none")>-1?w.fromMatrix(e):w.fromString(e)},w.fromMatrix=function(e){var t=e.substring(7).split(",");return t.length&&"none"!==e||(t=[1,0,0,1,0,0]),new w(f(t[4]),f(t[5]),parseFloat(t[0]))},w.fromString=function(e){var t=e.split(") "),n=t[0].substring(re.globals.translate.length+1).split(","),i=t.length>1?t[1].substring(6):1,o=n.length>1?n[0]:0,r=n.length>1?n[1]:0;return new w(o,r,i)},w.prototype.toString=function(){var e=g[re.globals.translate].suffix||"";return re.globals.translate+"("+this.x+"px, "+this.y+"px"+e+") scale("+this.scale+")"};var y=function(e){if(!e||!e.style[t])return this.x=0,void(this.y=0);var n=e.style[t].split(" ");this.x=parseFloat(n[0]),this.y=parseFloat(n[1])};function b(e){return e.exifdata&&e.exifdata.Orientation?f(e.exifdata.Orientation):1}function x(e,t,n){var i=t.width,o=t.height,r=e.getContext("2d");switch(e.width=t.width,e.height=t.height,r.save(),n){case 2:r.translate(i,0),r.scale(-1,1);break;case 3:r.translate(i,o),r.rotate(180*Math.PI/180);break;case 4:r.translate(0,o),r.scale(1,-1);break;case 5:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.scale(1,-1);break;case 6:e.width=o,e.height=i,r.rotate(90*Math.PI/180),r.translate(0,-o);break;case 7:e.width=o,e.height=i,r.rotate(-90*Math.PI/180),r.translate(-i,o),r.scale(1,-1);break;case 8:e.width=o,e.height=i,r.translate(0,i),r.rotate(-90*Math.PI/180)}r.drawImage(t,0,0,i,o),r.restore()}function E(){var e,t,n,i,o,r,a=this,l=a.options.viewport.type?"cr-vp-"+a.options.viewport.type:null;a.options.useCanvas=a.options.enableOrientation||C.call(a),a.data={},a.elements={},e=a.elements.boundary=document.createElement("div"),n=a.elements.viewport=document.createElement("div"),t=a.elements.img=document.createElement("img"),i=a.elements.overlay=document.createElement("div"),a.options.useCanvas?(a.elements.canvas=document.createElement("canvas"),a.elements.preview=a.elements.canvas):a.elements.preview=t,p(e,"cr-boundary"),e.setAttribute("aria-dropeffect","none"),o=a.options.boundary.width,r=a.options.boundary.height,h(e,{width:o+(isNaN(o)?"":"px"),height:r+(isNaN(r)?"":"px")}),p(n,"cr-viewport"),l&&p(n,l),h(n,{width:a.options.viewport.width+"px",height:a.options.viewport.height+"px"}),n.setAttribute("tabindex",0),p(a.elements.preview,"cr-image"),m(a.elements.preview,{alt:"preview","aria-grabbed":"false"}),p(i,"cr-overlay"),a.element.appendChild(e),e.appendChild(a.elements.preview),e.appendChild(n),e.appendChild(i),p(a.element,"croppie-container"),a.options.customClass&&p(a.element,a.options.customClass),M.call(this),a.options.enableZoom&&B.call(a),a.options.enableResize&&L.call(a)}function C(){return this.options.enableExif&&window.EXIF}function L(){var e,t,n,o,r,a,l,s=this,c=document.createElement("div"),u=!1;function d(a){if((void 0===a.button||0===a.button)&&(a.preventDefault(),!u)){var l=s.elements.overlay.getBoundingClientRect();if(u=!0,t=a.pageX,n=a.pageY,e=-1!==a.currentTarget.className.indexOf("vertical")?"v":"h",o=l.width,r=l.height,a.touches){var c=a.touches[0];t=c.pageX,n=c.pageY}window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[i]="none"}}function m(i){var a=i.pageX,l=i.pageY;if(i.preventDefault(),i.touches){var u=i.touches[0];a=u.pageX,l=u.pageY}var d=a-t,p=l-n,m=s.options.viewport.height+p,f=s.options.viewport.width+d;"v"===e&&m>=50&&m<=r?(h(c,{height:m+"px"}),s.options.boundary.height+=p,h(s.elements.boundary,{height:s.options.boundary.height+"px"}),s.options.viewport.height+=p,h(s.elements.viewport,{height:s.options.viewport.height+"px"})):"h"===e&&f>=50&&f<=o&&(h(c,{width:f+"px"}),s.options.boundary.width+=d,h(s.elements.boundary,{width:s.options.boundary.width+"px"}),s.options.viewport.width+=d,h(s.elements.viewport,{width:s.options.viewport.width+"px"})),Z.call(s),H.call(s),k.call(s),j.call(s),n=l,t=a}function f(){u=!1,window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[i]=""}p(c,"cr-resizer"),h(c,{width:this.options.viewport.width+"px",height:this.options.viewport.height+"px"}),this.options.resizeControls.height&&(p(a=document.createElement("div"),"cr-resizer-vertical"),c.appendChild(a)),this.options.resizeControls.width&&(p(l=document.createElement("div"),"cr-resizer-horisontal"),c.appendChild(l)),a&&(a.addEventListener("mousedown",d),a.addEventListener("touchstart",d)),l&&(l.addEventListener("mousedown",d),l.addEventListener("touchstart",d)),this.elements.boundary.appendChild(c)}function I(e){if(this.options.enableZoom){var t=this.elements.zoomer,n=Q(e,4);t.value=Math.max(parseFloat(t.min),Math.min(parseFloat(t.max),n)).toString()}}function B(){var e=this,t=e.elements.zoomerWrap=document.createElement("div"),n=e.elements.zoomer=document.createElement("input");function i(){_.call(e,{value:parseFloat(n.value),origin:new y(e.elements.preview),viewportRect:e.elements.viewport.getBoundingClientRect(),transform:w.parse(e.elements.preview)})}function o(t){var n,o;if("ctrl"===e.options.mouseWheelZoom&&!0!==t.ctrlKey)return 0;n=t.wheelDelta?t.wheelDelta/1200:t.deltaY?t.deltaY/1060:t.detail?t.detail/-60:0,o=e._currentZoom+n*e._currentZoom,t.preventDefault(),I.call(e,o),i.call(e)}p(t,"cr-slider-wrap"),p(n,"cr-slider"),n.type="range",n.step="0.0001",n.value="1",n.style.display=e.options.showZoomer?"":"none",n.setAttribute("aria-label","zoom"),e.element.appendChild(t),t.appendChild(n),e._currentZoom=1,e.elements.zoomer.addEventListener("input",i),e.elements.zoomer.addEventListener("change",i),e.options.mouseWheelZoom&&(e.elements.boundary.addEventListener("mousewheel",o),e.elements.boundary.addEventListener("DOMMouseScroll",o))}function _(e){var i=this,o=e?e.transform:w.parse(i.elements.preview),r=e?e.viewportRect:i.elements.viewport.getBoundingClientRect(),a=e?e.origin:new y(i.elements.preview);function l(){var e={};e[n]=o.toString(),e[t]=a.toString(),h(i.elements.preview,e)}if(i._currentZoom=e?e.value:i._currentZoom,o.scale=i._currentZoom,i.elements.zoomer.setAttribute("aria-valuenow",i._currentZoom),l(),i.options.enforceBoundary){var s=R.call(i,r),c=s.translate,u=s.origin;o.x>=c.maxX&&(a.x=u.minX,o.x=c.maxX),o.x<=c.minX&&(a.x=u.maxX,o.x=c.minX),o.y>=c.maxY&&(a.y=u.minY,o.y=c.maxY),o.y<=c.minY&&(a.y=u.maxY,o.y=c.minY)}l(),Y.call(i),j.call(i)}function R(e){var t=this,n=t._currentZoom,i=e.width,o=e.height,r=t.elements.boundary.clientWidth/2,a=t.elements.boundary.clientHeight/2,l=t.elements.preview.getBoundingClientRect(),s=l.width,c=l.height,u=i/2,d=o/2,h=-1*(u/n-r),p=-1*(d/n-a),m=1/n*u,f=1/n*d;return{translate:{maxX:h,minX:h-(s*(1/n)-i*(1/n)),maxY:p,minY:p-(c*(1/n)-o*(1/n))},origin:{maxX:s*(1/n)-m,minX:m,maxY:c*(1/n)-f,minY:f}}}function k(e){var i=this,o=i._currentZoom,r=i.elements.preview.getBoundingClientRect(),a=i.elements.viewport.getBoundingClientRect(),l=w.parse(i.elements.preview.style[n]),s=new y(i.elements.preview),c=a.top-r.top+a.height/2,u=a.left-r.left+a.width/2,d={},p={};if(e){var m=s.x,f=s.y,v=l.x,g=l.y;d.y=m,d.x=f,l.y=v,l.x=g}else d.y=c/o,d.x=u/o,p.y=(d.y-s.y)*(1-o),p.x=(d.x-s.x)*(1-o),l.x-=p.x,l.y-=p.y;var b={};b[t]=d.x+"px "+d.y+"px",b[n]=l.toString(),h(i.elements.preview,b)}function M(){var e,t,o,r,a,l=this,s=!1;function c(e,t){var n=l.elements.preview.getBoundingClientRect(),i=a.y+t,o=a.x+e;l.options.enforceBoundary?(r.top>n.top+t&&r.bottom<n.bottom+t&&(a.y=i),r.left>n.left+e&&r.right<n.right+e&&(a.x=o)):(a.y=i,a.x=o)}function u(e){l.elements.preview.setAttribute("aria-grabbed",e),l.elements.boundary.setAttribute("aria-dropeffect",e?"move":"none")}function p(n){if((void 0===n.button||0===n.button)&&(n.preventDefault(),!s)){if(s=!0,e=n.pageX,t=n.pageY,n.touches){var o=n.touches[0];e=o.pageX,t=o.pageY}u(s),a=w.parse(l.elements.preview),window.addEventListener("mousemove",m),window.addEventListener("touchmove",m),window.addEventListener("mouseup",f),window.addEventListener("touchend",f),document.body.style[i]="none",r=l.elements.viewport.getBoundingClientRect()}}function m(i){i.preventDefault();var r=i.pageX,s=i.pageY;if(i.touches){var u=i.touches[0];r=u.pageX,s=u.pageY}var p=r-e,m=s-t,f={};if("touchmove"===i.type&&i.touches.length>1){var v=i.touches[0],g=i.touches[1],w=Math.sqrt((v.pageX-g.pageX)*(v.pageX-g.pageX)+(v.pageY-g.pageY)*(v.pageY-g.pageY));o||(o=w/l._currentZoom);var y=w/o;return I.call(l,y),void d(l.elements.zoomer)}c(p,m),f[n]=a.toString(),h(l.elements.preview,f),Z.call(l),t=s,e=r}function f(){u(s=!1),window.removeEventListener("mousemove",m),window.removeEventListener("touchmove",m),window.removeEventListener("mouseup",f),window.removeEventListener("touchend",f),document.body.style[i]="",k.call(l),j.call(l),o=0}l.elements.overlay.addEventListener("mousedown",p),l.elements.viewport.addEventListener("keydown",(function(e){var t;if(!e.shiftKey||38!==e.keyCode&&40!==e.keyCode){if(l.options.enableKeyMovement&&e.keyCode>=37&&e.keyCode<=40){e.preventDefault();var s=function(e){switch(e){case 37:return[1,0];case 38:return[0,1];case 39:return[-1,0];case 40:return[0,-1]}}(e.keyCode);a=w.parse(l.elements.preview),document.body.style[i]="none",r=l.elements.viewport.getBoundingClientRect(),function(e){var t={};c(e[0],e[1]),t[n]=a.toString(),h(l.elements.preview,t),Z.call(l),document.body.style[i]="",k.call(l),j.call(l),o=0}(s)}}else t=38===e.keyCode?parseFloat(l.elements.zoomer.value)+parseFloat(l.elements.zoomer.step):parseFloat(l.elements.zoomer.value)-parseFloat(l.elements.zoomer.step),l.setZoom(t)})),l.elements.overlay.addEventListener("touchstart",p)}function Z(){if(this.elements){var e=this,t=e.elements.boundary.getBoundingClientRect(),n=e.elements.preview.getBoundingClientRect();h(e.elements.overlay,{width:n.width+"px",height:n.height+"px",top:n.top-t.top+"px",left:n.left-t.left+"px"})}}y.prototype.toString=function(){return this.x+"px "+this.y+"px"};var O,z,S,X,Y=(O=Z,z=500,function(){var e=this,t=arguments,n=function(){X=null,S||O.apply(e,t)},i=S&&!X;clearTimeout(X),X=setTimeout(n,z),i&&O.apply(e,t)});function j(){var e,t=this,n=t.get();F.call(t)&&(t.options.update.call(t,n),t.$&&"undefined"==typeof Prototype?t.$(t.element).trigger("update.croppie",n):(window.CustomEvent?e=new CustomEvent("update",{detail:n}):(e=document.createEvent("CustomEvent")).initCustomEvent("update",!0,!0,n),t.element.dispatchEvent(e)))}function F(){return this.elements.preview.offsetHeight>0&&this.elements.preview.offsetWidth>0}function W(){var e,i=this,o={},r=i.elements.preview,a=new w(0,0,1),l=new y;F.call(i)&&!i.data.bound&&(i.data.bound=!0,o[n]=a.toString(),o[t]=l.toString(),o.opacity=1,h(r,o),e=i.elements.preview.getBoundingClientRect(),i._originalImageWidth=e.width,i._originalImageHeight=e.height,i.data.orientation=C.call(i)?b(i.elements.img):i.data.orientation,i.options.enableZoom?H.call(i,!0):i._currentZoom=1,a.scale=i._currentZoom,o[n]=a.toString(),h(r,o),i.data.points.length?P.call(i,i.data.points):A.call(i),k.call(i),Z.call(i))}function H(e){var t,n,i,o,r=this,a=Math.max(r.options.minZoom,0)||0,l=r.options.maxZoom||1.5,s=r.elements.zoomer,c=parseFloat(s.value),u=r.elements.boundary.getBoundingClientRect(),h=v(r.elements.img,r.data.orientation),p=r.elements.viewport.getBoundingClientRect();r.options.enforceBoundary&&(i=p.width/h.width,o=p.height/h.height,a=Math.max(i,o)),a>=l&&(l=a+1),s.min=Q(a,4),s.max=Q(l,4),!e&&(c<s.min||c>s.max)?I.call(r,c<s.min?s.min:s.max):e&&(n=Math.max(u.width/h.width,u.height/h.height),t=null!==r.data.boundZoom?r.data.boundZoom:n,I.call(r,t)),d(s)}function P(e){if(4!==e.length)throw"Croppie - Invalid number of points supplied: "+e;var i=this,o=e[2]-e[0],r=i.elements.viewport.getBoundingClientRect(),a=i.elements.boundary.getBoundingClientRect(),l=r.left-a.left,s=r.top-a.top,c=r.width/o,u=e[1],d=e[0],p=-1*e[1]+s,m=-1*e[0]+l,f={};f[t]=d+"px "+u+"px",f[n]=new w(m,p,c).toString(),h(i.elements.preview,f),I.call(i,c),i._currentZoom=c}function A(){var e=this,t=e.elements.preview.getBoundingClientRect(),i=e.elements.viewport.getBoundingClientRect(),o=e.elements.boundary.getBoundingClientRect(),r=i.left-o.left,a=i.top-o.top,l=r-(t.width-i.width)/2,s=a-(t.height-i.height)/2,c=new w(l,s,e._currentZoom);h(e.elements.preview,n,c.toString())}function T(e){var t=this,n=t.elements.canvas,i=t.elements.img;n.getContext("2d").clearRect(0,0,n.width,n.height),n.width=i.width,n.height=i.height,x(n,i,t.options.enableOrientation&&e||b(i))}function N(e){var t=this,n=e.points,i=f(n[0]),o=f(n[1]),r=f(n[2])-i,a=f(n[3])-o,l=e.circle,s=document.createElement("canvas"),c=s.getContext("2d"),u=e.outputWidth||r,d=e.outputHeight||a;s.width=u,s.height=d,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,u,d));var h=i,p=o,m=r,v=a,g=0,w=0,y=u,b=d;return i<0&&(h=0,g=Math.abs(i)/r*u),m+h>t._originalImageWidth&&(y=(m=t._originalImageWidth-h)/r*u),o<0&&(p=0,w=Math.abs(o)/a*d),v+p>t._originalImageHeight&&(b=(v=t._originalImageHeight-p)/a*d),c.drawImage(this.elements.preview,h,p,m,v,g,w,y,b),l&&(c.fillStyle="#fff",c.globalCompositeOperation="destination-in",c.beginPath(),c.arc(s.width/2,s.height/2,s.width/2,0,2*Math.PI,!0),c.closePath(),c.fill()),s}function D(e){var t=e.points,n=document.createElement("div"),i=document.createElement("img"),o=t[2]-t[0],r=t[3]-t[1];return p(n,"croppie-result"),n.appendChild(i),h(i,{left:-1*t[0]+"px",top:-1*t[1]+"px"}),i.src=e.url,h(n,{width:o+"px",height:r+"px"}),n}function U(e){return N.call(this,e).toDataURL(e.format,e.quality)}function q(e){var t=this;return new Promise((function(n){N.call(t,e).toBlob((function(e){n(e)}),e.format,e.quality)}))}function K(e){this.elements.img.parentNode&&(Array.prototype.forEach.call(this.elements.img.classList,(function(t){e.classList.add(t)})),this.elements.img.parentNode.replaceChild(e,this.elements.img),this.elements.preview=e),this.elements.img=e}function $(e,t){var n,i=this,o=[],r=null,a=C.call(i);if("string"==typeof e)n=e,e={};else if(Array.isArray(e))o=e.slice();else{if(void 0===e&&i.data.url)return W.call(i),j.call(i),null;n=e.url,o=e.points||[],r=void 0===e.zoom?null:e.zoom}return i.data.bound=!1,i.data.url=n||i.data.url,i.data.boundZoom=r,function(e,t){if(!e)throw"Source image missing";var n=new Image;return n.style.opacity="0",new Promise((function(i,o){function r(){n.style.opacity="1",setTimeout((function(){i(n)}),1)}n.removeAttribute("crossOrigin"),e.match(/^https?:\/\/|^\/\//)&&n.setAttribute("crossOrigin","anonymous"),n.onload=function(){t?EXIF.getData(n,(function(){r()})):r()},n.onerror=function(e){n.style.opacity=1,setTimeout((function(){o(e)}),1)},n.src=e}))}(n,a).then((function(n){if(K.call(i,n),o.length)i.options.relative&&(o=[o[0]*n.naturalWidth/100,o[1]*n.naturalHeight/100,o[2]*n.naturalWidth/100,o[3]*n.naturalHeight/100]);else{var r,a,l=v(n),s=i.elements.viewport.getBoundingClientRect(),c=s.width/s.height;l.width/l.height>c?r=(a=l.height)*c:(r=l.width,a=l.height/c);var u=(l.width-r)/2,d=(l.height-a)/2,h=u+r,p=d+a;i.data.points=[u,d,h,p]}i.data.orientation=e.orientation||1,i.data.points=o.map((function(e){return parseFloat(e)})),i.options.useCanvas&&T.call(i,i.data.orientation),W.call(i),j.call(i),t&&t()}))}function Q(e,t){return parseFloat(e).toFixed(t||0)}function G(){var e=this,t=e.elements.preview.getBoundingClientRect(),n=e.elements.viewport.getBoundingClientRect(),i=n.left-t.left,o=n.top-t.top,r=(n.width-e.elements.viewport.offsetWidth)/2,a=(n.height-e.elements.viewport.offsetHeight)/2,l=i+e.elements.viewport.offsetWidth+r,s=o+e.elements.viewport.offsetHeight+a,c=e._currentZoom;(c===1/0||isNaN(c))&&(c=1);var u=e.options.enforceBoundary?0:Number.NEGATIVE_INFINITY;return i=Math.max(u,i/c),o=Math.max(u,o/c),l=Math.max(u,l/c),s=Math.max(u,s/c),{points:[Q(i),Q(o),Q(l),Q(s)],zoom:c,orientation:e.data.orientation}}var V={type:"canvas",format:"png",quality:1},J=["jpeg","webp","png"];function ee(e){var t=this,n=G.call(t),i=c(u(V),u(e)),o="string"==typeof e?e:i.type||"base64",r=i.size||"viewport",a=i.format,l=i.quality,s=i.backgroundColor,d="boolean"==typeof i.circle?i.circle:"circle"===t.options.viewport.type,h=t.elements.viewport.getBoundingClientRect(),p=h.width/h.height;return"viewport"===r?(n.outputWidth=h.width,n.outputHeight=h.height):"object"==typeof r&&(r.width&&r.height?(n.outputWidth=r.width,n.outputHeight=r.height):r.width?(n.outputWidth=r.width,n.outputHeight=r.width/p):r.height&&(n.outputWidth=r.height*p,n.outputHeight=r.height)),J.indexOf(a)>-1&&(n.format="image/"+a,n.quality=l),n.circle=d,n.url=t.data.url,n.backgroundColor=s,new Promise((function(e){switch(o.toLowerCase()){case"rawcanvas":e(N.call(t,n));break;case"canvas":case"base64":e(U.call(t,n));break;case"blob":q.call(t,n).then(e);break;default:e(D.call(t,n))}}))}function te(){W.call(this)}function ne(e){if(!this.options.useCanvas||!this.options.enableOrientation)throw"Croppie: Cannot rotate without enableOrientation && EXIF.js included";var t,n,i,o,r,s=this,c=s.elements.canvas;if(s.data.orientation=(t=s.data.orientation,n=e,i=a.indexOf(t)>-1?a:l,o=i.indexOf(t),r=n/90%i.length,i[(i.length+o+r%i.length)%i.length]),x(c,s.elements.img,s.data.orientation),k.call(s,!0),H.call(s),Math.abs(e)/90%2==1){var u=s._originalImageHeight,d=s._originalImageWidth;s._originalImageWidth=u,s._originalImageHeight=d}}function ie(){var e,t,n=this;n.element.removeChild(n.elements.boundary),e=n.element,t="croppie-container",e.classList?e.classList.remove(t):e.className=e.className.replace(t,""),n.options.enableZoom&&n.element.removeChild(n.elements.zoomerWrap),delete n.elements}if("undefined"!=typeof window&&window.jQuery){var oe=window.jQuery;oe.fn.croppie=function(e){if("string"==typeof e){var t=Array.prototype.slice.call(arguments,1),n=oe(this).data("croppie");return"get"===e?n.get():"result"===e?n.result.apply(n,t):"bind"===e?n.bind.apply(n,t):this.each((function(){var n=oe(this).data("croppie");if(n){var i=n[e];if(!oe.isFunction(i))throw"Croppie "+e+" method not found";i.apply(n,t),"destroy"===e&&oe(this).removeData("croppie")}}))}return this.each((function(){var t=new re(this,e);t.$=oe,oe(this).data("croppie",t)}))}}function re(e,t){if(e.className.indexOf("croppie-container")>-1)throw new Error("Croppie: Can't initialize croppie more than once");if(this.element=e,this.options=c(u(re.defaults),t),"img"===this.element.tagName.toLowerCase()){var n=this.element;p(n,"cr-original-image"),m(n,{"aria-hidden":"true",alt:""});var i=document.createElement("div");this.element.parentNode.appendChild(i),i.appendChild(n),this.element=i,this.options.url=this.options.url||n.src}if(E.call(this),this.options.url){var o={url:this.options.url,points:this.options.points};delete this.options.url,delete this.options.points,$.call(this,o)}}return re.defaults={viewport:{width:100,height:100,type:"square"},boundary:{},orientationControls:{enabled:!0,leftClass:"",rightClass:""},resizeControls:{width:!0,height:!0},customClass:"",showZoomer:!0,enableZoom:!0,enableResize:!1,mouseWheelZoom:!0,enableExif:!1,enforceBoundary:!0,enableOrientation:!1,enableKeyMovement:!0,update:function(){}},re.globals={translate:"translate3d"},c(re.prototype,{bind:function(e,t){return $.call(this,e,t)},get:function(){var e=G.call(this),t=e.points;return this.options.relative&&(t[0]/=this.elements.img.naturalWidth/100,t[1]/=this.elements.img.naturalHeight/100,t[2]/=this.elements.img.naturalWidth/100,t[3]/=this.elements.img.naturalHeight/100),e},result:function(e){return ee.call(this,e)},refresh:function(){return te.call(this)},setZoom:function(e){I.call(this,e),d(this.elements.zoomer)},rotate:function(e){ne.call(this,e)},destroy:function(){return ie.call(this)}}),re},void 0===(o=i.call(t,n,t,e))||(e.exports=o)}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(99),t=n.n(e);const i=document.getElementById("board300"),o=document.getElementById("board28"),r=document.getElementById("buttonErase"),a=document.getElementById("buttonImage"),l=document.getElementById("imageInput"),s=document.getElementById("modalCrop"),c=document.getElementById("cancelBtnModal"),u=document.getElementById("continueBtnModal"),d=document.getElementById("prediction"),h=i.getContext("2d"),p=o.getContext("2d");let m,f=!1,v=0,g=0,w=0,y=0;const b=e=>e-i.getBoundingClientRect().left,x=e=>e-i.getBoundingClientRect().top;h.fillStyle="black",h.fillRect(0,0,i.width,i.height);const E=()=>{f=!1,C()},C=()=>{let e=L(),t=m.predict(e).dataSync();for(let e=0;e<t.length;e++)document.getElementById(`prediction${e}`).innerText=Number(+t[e]).toFixed(3);d.innerText=t.indexOf(Math.max(...t))},L=()=>{p.filter="blur(0.470px)",p.drawImage(h.canvas,0,0,o.width,o.height);const e=p.getImageData(0,0,o.width,o.height);let t=[];for(let n=0;n<e.data.length;n+=4)t.push(e.data[n]/255);return console.log(t),t=(e=>{let t=new Array(e.length).fill(null);for(let n=0;n<e.length;n++)e[n]<.25?t[n]=0:t[n]=e[n];return t})(t),console.log(t),t=tf.reshape(t,[1,28,28,1]),t},I=()=>{s.style.display="none"};i.addEventListener("mousedown",(e=>{v=w,g=y,w=b(e.clientX),y=x(e.clientY),h.beginPath(),h.fillStyle="black",h.lineTo(w,y),h.closePath(),f=!0})),i.addEventListener("mouseup",E),i.addEventListener("mouseout",E),i.addEventListener("mousemove",(e=>{f&&(v=w,g=y,w=b(e.clientX),y=x(e.clientY),h.beginPath(),h.moveTo(v,g),h.lineTo(w,y),h.strokeStyle="white",h.lineWidth=30,h.lineCap="round",h.stroke(),h.closePath())})),r.addEventListener("click",(()=>{h.fillStyle="black",h.fillRect(0,0,i.width,i.height),d.innerText="-"})),a.addEventListener("click",(()=>{l.click()})),l.addEventListener("change",(e=>{const n=e.target.files[0],i=window.URL||window.webkitURL,o=i.createObjectURL(n);s.style.display="block";const r=new(t())(document.querySelector(".crop"),{viewport:{width:200,height:200},boundary:{width:300,height:300},showZoomer:!0});r.bind({url:o}),u.addEventListener("click",(()=>{i.revokeObjectURL(o),r.result("blob").then((e=>{const t=new Image,n=i.createObjectURL(e);t.src=n,t.onload=()=>{h.filter="invert(100%)",h.drawImage(t,0,0,300,300),C(),h.filter="invert(0)",i.revokeObjectURL(n),r.destroy()}})),I()}))})),c.addEventListener("click",I),(async()=>{m=await tf.loadLayersModel("https://pegadro.github.io/digit-recognition-playground/model.json")})()})()})();