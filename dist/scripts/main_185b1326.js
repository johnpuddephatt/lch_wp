!function(t){var i={};function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="/app/themes/LCH-theme/dist/",n(n.s=0)}([function(t,i,n){n(1),t.exports=n(8)},function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n(2),a=n(4),s=n(5),r=n(7),o=new e.a({common:a.a,home:s.a,aboutUs:r.a});document.addEventListener("DOMContentLoaded",function(){o.loadEvents()})},function(t,i,n){"use strict";var e=n(3),a=function(t){this.routes=t};a.prototype.fire=function(t,i,n){void 0===i&&(i="init"),document.dispatchEvent(new CustomEvent("routed",{bubbles:!0,detail:{route:t,fn:i}}));var e=""!==t&&this.routes[t]&&"function"==typeof this.routes[t][i];e&&this.routes[t][i](n)},a.prototype.loadEvents=function(){var t=this;this.fire("common"),document.body.className.toLowerCase().replace(/-/g,"_").split(/\s+/).map(e.a).forEach(function(i){t.fire(i),t.fire(i,"finalize")}),this.fire("common","finalize")},i.a=a},function(t,i,n){"use strict";i.a=function(t){return""+t.charAt(0).toLowerCase()+t.replace(/[\W_]/g,"|").split("|").map(function(t){return""+t.charAt(0).toUpperCase()+t.slice(1)}).join("").slice(1)}},function(t,i,n){"use strict";i.a={init:function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var i=t.dataset.target,n=document.getElementById(i);t.classList.toggle("is-active"),n.classList.toggle("is-active")})})},finalize:function(){}}},function(t,i,n){"use strict";var e=n(6);i.a={init:function(){},finalize:function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var t=!1,i=document.querySelector(".container--progress"),n=new e.a("figure-members",178),a=new e.a("figure-money",360),s=new e.a("figure-homes",16);new IntersectionObserver(function(i){i.forEach(function(i){i.intersectionRatio>=.65&&!t&&(n.start(),setTimeout(a.start(),1e3),setTimeout(s.start(),5e3),t=!0)})},{threshold:[.1,.65],rootMargin:"0px -40px"}).observe(i)}}}},function(t,i,n){"use strict";n.d(i,"a",function(){return a});var e=this&&this.__assign||function(){return(e=Object.assign||function(t){for(var i,n=1,e=arguments.length;n<e;n++)for(var a in i=arguments[n])Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);return t}).apply(this,arguments)},a=function(){function t(t,i,n){var a=this;this.target=t,this.endVal=i,this.options=n,this.version="2.0.5",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){a.startTime||(a.startTime=t);var i=t-a.startTime;a.remaining=a.duration-i,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(i,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(i,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(i/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(i/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Math.round(a.frameVal*a.decimalMult)/a.decimalMult,a.printValue(a.frameVal),i<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var i,n,e,s,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(a.options.decimalPlaces),e=(n=(i+="").split("."))[0],s=n.length>1?a.options.decimal+n[1]:"",a.options.useGrouping){r="";for(var u=0,l=e.length;u<l;++u)0!==u&&u%3==0&&(r=a.options.separator+r),r=e[l-u-1]+r;e=r}return a.options.numerals&&a.options.numerals.length&&(e=e.replace(/[0-9]/g,function(t){return a.options.numerals[+t]}),s=s.replace(/[0-9]/g,function(t){return a.options.numerals[+t]})),o+a.options.prefix+e+s+a.options.suffix},this.easeOutExpo=function(t,i,n,e){return n*(1-Math.pow(2,-10*t/e))*1024/1023+i},this.options=e(e({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},function(t,i,n){"use strict";i.a={init:function(){}}},function(t,i){}]);