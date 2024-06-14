!function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function r(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:String(r)}var n=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements=t,this.type=r,this.prepareElements()}var r,n;return r=e,n=[{key:"fadeIn",value:function(){var e=this;this.applyStyleToElements((function(t){t.classList.add("frm-fadein-up"),t.addEventListener("animationend",(function(){e.resetOpacity(),t.classList.remove("frm-fadein-up")}),{once:!0})}))}},{key:"cascadeFadeIn",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.03;setTimeout((function(){e.applyStyleToElements((function(e,r){e.classList.remove("frm-animate"),e.style.transitionDelay=(r+1)*t+"s"}))}),200)}},{key:"prepareElements",value:function(){var e=this;this.applyStyleToElements((function(t){"default"===e.type&&(t.style.opacity="0.0"),"cascade"===e.type&&t.classList.add("frm-init-cascade-animation"),"cascade-3d"===e.type&&t.classList.add("frm-init-fadein-3d"),t.classList.add("frm-animate")}))}},{key:"resetOpacity",value:function(){this.applyStyleToElements((function(e){return e.style.opacity="1.0"}))}},{key:"applyStyleToElements",value:function(e){this.elements instanceof Element?e(this.elements,0):0<this.elements.length&&this.elements.forEach((function(t,r){return e(t,r)}))}}],n&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){var n,o,a;n=e,o=t,a=r[t],(o=c(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.body=document.body}var t,r;return t=e,(r=[{key:"open",value:function(e){this.overlayData={hero_image:null,heading:null,copy:null,buttons:[]},this.overlayData=i(i({},this.overlayData),e),this.bodyAddOverflowHidden(),this.body.insertBefore(this.buildOverlay(),this.body.firstChild),this.initCloseButton(),this.initOverlayIntroAnimation(200)}},{key:"bodyAddOverflowHidden",value:function(){this.body.classList.add("frm-hidden-overflow"),setTimeout((function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}),80)}},{key:"close",value:function(){var e=document.querySelector(".frm-overlay--wrapper");e&&(document.body.classList.remove("frm-hidden-overflow"),e.remove())}},{key:"initCloseButton",value:function(){var e=document.querySelector(".frm-overlay--wrapper");if(e){var t=document.createElement("span");t.classList.add("frm-overlay--close"),t.addEventListener("click",this.close),e.prepend(t)}}},{key:"getHeroImage",value:function(){return this.overlayData.hero_image?frmDom.img({src:this.overlayData.hero_image}):""}},{key:"getButtons",value:function(){var e=this.overlayData.buttons.map((function(e,t){if(!e.url||""===e.url)return"";var r=1===t?"frm-button-primary":"frm-button-secondary",n={href:e.url,text:e.label,className:"button frm_animate_bg "+r};return e.target&&(n.target=e.target),frmDom.a(n)}));if(e){var t={className:"frm-overlay--cta frm-flex-box",children:e};return frmDom.div(t)}return""}},{key:"getHeading",value:function(){return this.overlayData.heading?frmDom.tag("h2",{className:"frm-overlay--heading frm-text-xl",text:this.overlayData.heading}):""}},{key:"getCopy",value:function(){if(this.overlayData.copy){var e=frmDom.tag("div");return e.innerHTML=this.overlayData.copy,frmDom.div({className:"frm-overlay--copy",child:e})}return""}},{key:"initOverlayIntroAnimation",value:function(e){setTimeout((function(){var e=document.querySelectorAll(".frm-overlay--hero-image, .frm-overlay--heading, .frm-overlay--copy, .frm-overlay--cta a");new n(e,"cascade-3d").cascadeFadeIn(.07)}),e)}},{key:"buildOverlay",value:function(){var e=frmDom.div({className:"frm-overlay--container",children:[frmDom.div({className:"frm-overlay--hero-image frm-mb-md",children:[this.getHeroImage()]}),this.getHeading(),this.getCopy(),this.getButtons()]});return frmDom.div({className:"frm-overlay--wrapper frm_wrap",children:[e]})}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();window.frmOverlay=new s}();