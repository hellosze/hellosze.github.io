/* prebid.js v4.27.0-pre
Updated : 2021-03-09
Modules: appnexusBidAdapter, consumableBidAdapter, ixBidAdapter, pulsepointBidAdapter, rubiconBidAdapter, sonobiBidAdapter, sovrnBidAdapter, rubiconBidAdapter, openxBidAdapter, rhythmoneBidAdapter, emx_digitalBidAdapter, tripleliftBidAdapter, consentManagement, consentManagementUsp */
!function(u){var s=window.pbjsChunk;window.pbjsChunk=function(e,t,n){for(var r,i,o,a=0,c=[];a<e.length;a++)i=e[a],d[i]&&c.push(d[i][0]),d[i]=0;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(u[r]=t[r]);for(s&&s(e,t,n);c.length;)c.shift()();if(n)for(a=0;a<n.length;a++)o=f(f.s=n[a]);return o};var n={},d={382:0};function f(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,f),t.l=!0,t.exports}f.m=u,f.c=n,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.oe=function(e){throw console.error(e),e},f(f.s=948)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"internal",function(){return k}),n.d(t,"bind",function(){return N}),t.getUniqueIdentifierStr=M,t.generateUUID=function e(t){return t?(t^q()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t.getBidIdParameter=function(e,t){if(t&&t[e])return t[e];return""},t.tryAppendQueryString=function(e,t,n){if(n)return e+t+"="+encodeURIComponent(n)+"&";return e},t.parseQueryStringParameters=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=n+"="+encodeURIComponent(e[n])+"&");return t=t.replace(/&$/,"")},t.transformAdServerTargetingObj=function(t){return t&&0<Object.getOwnPropertyNames(t).length?pe(t).map(function(e){return"".concat(e,"=").concat(encodeURIComponent(t[e]))}).join("&"):""},t.getAdUnitSizes=function(e){if(!e)return;var t=[];{var n;e.mediaTypes&&e.mediaTypes.banner&&Array.isArray(e.mediaTypes.banner.sizes)?(n=e.mediaTypes.banner.sizes,Array.isArray(n[0])?t=n:t.push(n)):Array.isArray(e.sizes)&&(Array.isArray(e.sizes[0])?t=e.sizes:t.push(e.sizes))}return t},t.parseSizesInput=function(e){var t=[];if("string"==typeof e){var n=e.split(","),r=/^(\d)+x(\d)+$/i;if(n)for(var i in n)oe(n,i)&&n[i].match(r)&&t.push(n[i])}else if("object"===h(e)){var o=e.length;if(0<o)if(2===o&&"number"==typeof e[0]&&"number"==typeof e[1])t.push(G(e));else for(var a=0;a<o;a++)t.push(G(e[a]))}return t},t.parseGPTSingleSizeArray=G,t.parseGPTSingleSizeArrayToRtbSize=function(e){if(W(e))return{w:e[0],h:e[1]}},t.getWindowTop=L,t.getWindowSelf=F,t.getWindowLocation=z,t.logMessage=V,t.logInfo=H,t.logWarn=K,t.logError=J,t.hasConsoleLogger=function(){return _},t.debugTurnedOn=Q,t.createInvisibleIframe=function(){var e=document.createElement("iframe");return e.id=M(),e.height=0,e.width=0,e.border="0px",e.hspace="0",e.vspace="0",e.marginWidth="0",e.marginHeight="0",e.style.border="0",e.scrolling="no",e.frameBorder="0",e.src="about:blank",e.style.display="none",e},t.getParameterByName=function(e){return Ie(z().search)[e]||""},t.isA=$,t.isFn=X,t.isStr=Z,t.isArray=ee,t.isNumber=te,t.isPlainObject=ne,t.isBoolean=function(e){return $(e,C)},t.isEmpty=re,t.isEmptyStr=function(e){return Z(e)&&(!e||0===e.length)},t._each=ie,t.contains=function(e,t){if(re(e))return!1;if(X(e.indexOf))return-1!==e.indexOf(t);var n=e.length;for(;n--;)if(e[n]===t)return!0;return!1},t._map=function(n,r){if(re(n))return[];if(X(n.map))return n.map(r);var i=[];return ie(n,function(e,t){i.push(r(e,t,n))}),i},t.hasOwn=oe,t.insertElement=ae,t.triggerPixel=ce,t.callBurl=function(e){var t=e.source,n=e.burl;t===S.S2S.SRC&&n&&k.triggerPixel(n)},t.insertHtmlIntoIframe=function(e){if(!e)return;var t=document.createElement("iframe");t.id=M(),t.width=0,t.height=0,t.hspace="0",t.vspace="0",t.marginWidth="0",t.marginHeight="0",t.style.display="none",t.style.height="0px",t.style.width="0px",t.scrolling="no",t.frameBorder="0",t.allowtransparency="true",k.insertElement(t,document,"body"),t.contentWindow.document.open(),t.contentWindow.document.write(e),t.contentWindow.document.close()},t.insertUserSyncIframe=ue,t.createTrackPixelHtml=function(e){if(!e)return"";var t=encodeURI(e),n='<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';return n+='<img src="'+t+'"></div>'},t.createTrackPixelIframeHtml=se,t.getValueString=de,t.uniques=fe,t.flatten=le,t.getBidRequest=function(n,e){return n?(e.some(function(e){var t=c()(e.bids,function(t){return["bidId","adId","bid_id"].some(function(e){return t[e]===n})});return t&&(r=t),t}),r):void 0;var r},t.getKeys=pe,t.getValue=ge,t.getKeyByValue=function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===t)return n},t.getBidderCodes=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:pbjs.adUnits).map(function(e){return e.bids.map(function(e){return e.bidder}).reduce(le,[])}).reduce(le).filter(fe)},t.isGptPubadsDefined=be,n.d(t,"getHighestCpm",function(){return ve}),n.d(t,"getOldestHighestCpmBid",function(){return ye}),n.d(t,"getLatestHighestCpmBid",function(){return he}),t.shuffle=function(e){var t=e.length;for(;0<t;){var n=Math.floor(Math.random()*t),r=e[--t];e[t]=e[n],e[n]=r}return e},t.adUnitsFilter=function(e,t){return s()(e,t&&t.adUnitCode)},t.deepClone=Se,t.inIframe=function(){try{return k.getWindowSelf()!==k.getWindowTop()}catch(e){return!0}},t.isSafariBrowser=function(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)},t.replaceAuctionPrice=function(e,t){if(!e)return;return e.replace(/\$\{AUCTION_PRICE\}/g,t)},t.replaceClickThrough=function(e,t){if(!e||!t||"string"!=typeof t)return;return e.replace(/\${CLICKTHROUGH}/g,t)},t.timestamp=function(){return(new Date).getTime()},t.getPerformanceNow=function(){return window.performance&&window.performance.now&&window.performance.now()||0},t.hasDeviceAccess=function(){return!1!==r.b.getConfig("deviceAccess")},t.checkCookieSupport=Ae,t.delayExecution=function(e,t){if(t<1)throw new Error("numRequiredCalls must be a positive number. Got ".concat(t));var n=0;return function(){++n===t&&e.apply(this,arguments)}},t.groupBy=function(e,n){return e.reduce(function(e,t){return(e[t[n]]=e[t[n]]||[]).push(t),e},{})},t.getDefinedParams=function(n,e){return e.filter(function(e){return n[e]}).reduce(function(e,t){return y(e,v({},t,n[t]))},{})},t.isValidMediaTypes=function(e){var t=["banner","native","video"];if(!Object.keys(e).every(function(e){return s()(t,e)}))return!1;if(e.video&&e.video.context)return s()(["instream","outstream","adpod"],e.video.context);return!0},t.getBidderRequest=function(e,t,n){return c()(e,function(e){return 0<e.bids.filter(function(e){return e.bidder===t&&e.adUnitCode===n}).length})||{start:null,auctionId:null}},t.getUserConfiguredParams=function(e,t,n){return e.filter(function(e){return e.code===t}).map(function(e){return e.bids}).reduce(le,[]).filter(function(e){return e.bidder===n}).map(function(e){return e.params||{}})},t.getOrigin=function(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")},t.getDNT=function(){return"1"===navigator.doNotTrack||"1"===window.doNotTrack||"1"===navigator.msDoNotTrack||"yes"===navigator.doNotTrack},t.isAdUnitCodeMatchingSlot=function(t){return function(e){return Ee(t,e)}},t.isSlotMatchingAdUnitCode=Oe,t.getGptSlotInfoForAdUnitCode=function(e){var t;be()&&(t=c()(window.googletag.pubads().getSlots(),Oe(e)));if(t)return{gptSlot:t.getAdUnitPath(),divId:t.getSlotElementId()};return{}},t.unsupportedBidderMessage=function(e,t){var n=Object.keys(e.mediaTypes||{banner:"banner"}).join(", ");return"\n    ".concat(e.code," is a ").concat(n," ad unit\n    containing bidders that don't support ").concat(n,": ").concat(t,".\n    This bidder won't fetch demand.\n  ")},t.isInteger=Te,t.convertCamelToUnderscore=function(e){return e.replace(/(?:^|\.?)([A-Z])/g,function(e,t){return"_"+t.toLowerCase()}).replace(/^_/,"")},t.cleanObj=function(n){return Object.keys(n).reduce(function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e},{})},t.pick=function(a,c){return"object"===h(a)?c.reduce(function(e,t,n){if("function"==typeof t)return e;var r=t,i=t.match(/^(.+?)\sas\s(.+?)$/i);i&&(t=i[1],r=i[2]);var o=a[t];return"function"==typeof c[n+1]&&(o=c[n+1](o,e)),void 0!==o&&(e[r]=o),e},{}):{}},t.transformBidderParamKeywords=function(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"keywords",i=[];return ie(e,function(e,t){if(ee(e)){var n=[];ie(e,function(e){!(e=de(r+"."+t,e))&&""!==e||n.push(e)}),e=n}else{if(!Z(e=de(r+"."+t,e)))return;e=[e]}i.push({key:t,value:e})}),i},t.convertTypes=function(r,i){return Object.keys(r).forEach(function(e){var t,n;i[e]&&(X(r[e])?i[e]=r[e](i[e]):i[e]=(t=r[e],n=i[e],"string"===t?n&&n.toString():"number"===t?Number(n):n),isNaN(i[e])&&delete i.key)}),i},t.isArrayOfNums=function(e,t){return ee(e)&&(!t||e.length===t)&&e.every(Te)},t.fill=function(e,t){for(var n=[],r=0;r<t;r++){var i=ne(e)?Se(e):e;n.push(i)}return n},t.chunk=function(e,t){for(var n=[],r=0;r<Math.ceil(e.length/t);r++){var i=r*t,o=i+t;n.push(e.slice(i,o))}return n},t.getMinValueFromArray=function(e){return Math.min.apply(Math,p(e))},t.getMaxValueFromArray=function(e){return Math.max.apply(Math,p(e))},t.compareOn=function(n){return function(e,t){return e[n]<t[n]?1:e[n]>t[n]?-1:0}},t.parseQS=Ie,t.formatQS=Ce,t.parseUrl=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);var r=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:r?n.search:k.parseQS(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}},t.buildUrl=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(k.formatQS(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")},t.deepEqual=je,t.mergeDeep=we,t.cyrb53Hash=function(e){for(var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,r=function(e,t){if(X(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},i=3735928559^n,o=1103547991^n,a=0;a<e.length;a++)t=e.charCodeAt(a),i=r(i^t,2654435761),o=r(o^t,1597334677);return i=r(i^i>>>16,2246822507)^r(o^o>>>13,3266489909),(4294967296*(2097151&(o=r(o^o>>>16,2246822507)^r(i^i>>>13,3266489909)))+(i>>>0)).toString()};var r=n(3),i=n(160),o=n.n(i),a=n(10),c=n.n(a),u=n(12),s=n.n(u),d=n(161);n.d(t,"deepAccess",function(){return d.a});var f=n(162);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||g(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"deepSetValue",function(){return f.a});var m,S=n(5),A="Array",E="String",O="Function",T="Number",I="Object",C="Boolean",j=Object.prototype.toString,w=Boolean(window.console),_=Boolean(w&&window.console.log),B=Boolean(w&&window.console.info),U=Boolean(w&&window.console.warn),x=Boolean(w&&window.console.error),R=n(9),k={checkCookieSupport:Ae,createTrackPixelIframeHtml:se,getWindowSelf:F,getWindowTop:L,getWindowLocation:z,insertUserSyncIframe:ue,insertElement:ae,isFn:X,triggerPixel:ce,logError:J,logWarn:K,logMessage:V,logInfo:H,parseQS:Ie,formatQS:Ce,deepEqual:je},D={},N=function(e,t){return t}.bind(null,1,D)()===D?Function.prototype.bind:function(e){var t=this,n=Array.prototype.slice.call(arguments,1);return function(){return t.apply(e,n.concat(Array.prototype.slice.call(arguments)))}},P=(m=0,function(){return++m});function M(){return P()+Math.random().toString(16).substr(2)}function q(){return window&&window.crypto&&window.crypto.getRandomValues?crypto.getRandomValues(new Uint8Array(1))[0]%16:16*Math.random()}function G(e){if(W(e))return e[0]+"x"+e[1]}function W(e){return ee(e)&&2===e.length&&!isNaN(e[0])&&!isNaN(e[1])}function L(){return window.top}function F(){return window.self}function z(){return window.location}function V(){Q()&&_&&console.log.apply(console,Y(arguments,"MESSAGE:"))}function H(){Q()&&B&&console.info.apply(console,Y(arguments,"INFO:"))}function K(){Q()&&U&&console.warn.apply(console,Y(arguments,"WARNING:"))}function J(){Q()&&x&&console.error.apply(console,Y(arguments,"ERROR:")),R.emit(S.EVENTS.AUCTION_DEBUG,{type:"ERROR",arguments:arguments})}function Y(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cPrebid"),e}function Q(){return!!r.b.getConfig("debug")}function $(e,t){return j.call(e)==="[object "+t+"]"}function X(e){return $(e,O)}function Z(e){return $(e,E)}function ee(e){return $(e,A)}function te(e){return $(e,T)}function ne(e){return $(e,I)}function re(e){if(!e)return!0;if(ee(e)||Z(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t){if(!re(e)){if(X(e.forEach))return e.forEach(t,this);var n=0,r=e.length;if(0<r)for(;n<r;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}function oe(e,t){return e.hasOwnProperty?e.hasOwnProperty(t):void 0!==e[t]&&e.constructor.prototype[t]!==e[t]}function ae(e,t,n,r){var i;t=t||document,i=n?t.getElementsByTagName(n):t.getElementsByTagName("head");try{if((i=i.length?i:t.getElementsByTagName("body")).length){i=i[0];var o=r?null:i.firstChild;return i.insertBefore(e,o)}}catch(e){}}function ce(e,t){var n=new Image;t&&k.isFn(t)&&(n.addEventListener("load",t),n.addEventListener("error",t)),n.src=e}function ue(e,t){var n=k.createTrackPixelIframeHtml(e,!1,"allow-scripts allow-same-origin"),r=document.createElement("div");r.innerHTML=n;var i=r.firstChild;t&&k.isFn(t)&&(i.addEventListener("load",t),i.addEventListener("error",t)),k.insertElement(i,document,"html",!0)}function se(e){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";return e?((!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&(e=encodeURI(e)),t=t&&'sandbox="'.concat(t,'"'),"<iframe ".concat(t,' id="').concat(M(),'"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e,'">\n    </iframe>')):""}function de(e,t,n){return null==t?n:Z(t)?t:te(t)?t.toString():void k.logWarn("Unsuported type for param: "+e+" required type: String")}function fe(e,t,n){return n.indexOf(e)===t}function le(e,t){return e.concat(t)}function pe(e){return Object.keys(e)}function ge(e,t){return e[t]}function be(){if(window.googletag&&X(window.googletag.pubads)&&X(window.googletag.pubads().getSlots))return!0}var ve=me("timeToRespond",function(e,t){return t<e}),ye=me("responseTimestamp",function(e,t){return t<e}),he=me("responseTimestamp",function(e,t){return e<t});function me(n,r){return function(e,t){return e.cpm===t.cpm?r(e[n],t[n])?t:e:e.cpm<t.cpm?t:e}}function Se(e){return o()(e)}function Ae(){if(window.navigator.cookieEnabled||document.cookie.length)return!0}var Ee=function(e,t){return e.getAdUnitPath()===t||e.getSlotElementId()===t};function Oe(t){return function(e){return Ee(e,t)}}function Te(e){return Number.isInteger?Number.isInteger(e):"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function Ie(e){return e?e.replace(/^\?/,"").split("&").reduce(function(e,t){var n=l(t.split("="),2),r=n[0],i=n[1];return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(i)):e[r]=i||"",e},{}):{}}function Ce(e){return Object.keys(e).map(function(t){return Array.isArray(e[t])?e[t].map(function(e){return"".concat(t,"[]=").concat(e)}).join("&"):"".concat(t,"=").concat(e[t])}).join("&")}function je(e,t){if(e===t)return!0;if("object"!==h(e)||null===e||"object"!==h(t)||null===t)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!je(e[n],t[n]))return!1}return!0}function we(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var i=n.shift();if(ne(e)&&ne(i))for(var o in i)ne(i[o])?(e[o]||y(e,v({},o,{})),we(e[o],i[o])):ee(i[o])&&e[o]?ee(e[o])&&(e[o]=e[o].concat(i[o])):y(e,v({},o,i[o]));return we.apply(void 0,[e].concat(n))}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"storage",function(){return I}),t.registerBidder=function(i){var n=Array.isArray(i.supportedMediaTypes)?{supportedMediaTypes:i.supportedMediaTypes}:void 0;function o(e){var t=w(e);c.default.registerBidAdapter(t,e.code,n)}o(i),Array.isArray(i.aliases)&&i.aliases.forEach(function(e){var t,n,r=e;Object(m.isPlainObject)(e)&&(r=e.code,t=e.gvlid,n=e.skipPbsAliasing),c.default.aliasRegistry[r]=i.code,o(T({},i,{code:r,gvlid:t,skipPbsAliasing:n}))})},t.newBidder=w,n.d(t,"registerSyncInner",function(){return _}),t.preloadBidderMappingFile=B,t.getIabSubCategory=function(t,e){var n=c.default.getBidAdapter(t);if(n.getSpec().getMappingFileInfo){var r=n.getSpec().getMappingFileInfo(),i=r.localStorageKey?r.localStorageKey:n.getBidderCode(),o=I.getDataFromLocalStorage(i);if(o){try{o=JSON.parse(o)}catch(e){Object(m.logError)("Failed to parse ".concat(t," mapping data stored in local storage"))}return o.mapping[e]?o.mapping[e]:null}}},t.isValid=U;var r=n(92),c=n(8),u=n(3),v=n(34),s=n(43),o=n(37),a=n(25),i=n(5),y=n.n(i),d=n(9),h=n.n(d),f=n(12),l=n.n(f),p=n(4),m=n(0),g=n(2),b=n(13),S=n(7);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var I=Object(S.a)("bidderFactory"),C=["requestId","cpm","ttl","creativeId","netRevenue","currency"],j=1;function w(p){return T(new r.a(p.code),{getSpec:function(){return Object.freeze(p)},registerSyncs:g,callBids:function(o,a,e,n,c,r){var u,s,t,d,i,f;function l(){e(),h.a.emit(y.a.EVENTS.BIDDER_DONE,o),g(s,o.gdprConsent,o.uspConsent)}Array.isArray(o.bids)&&(u={},s=[],0!==(t=o.bids.filter(b)).length?(d={},t.forEach(function(e){(d[e.bidId]=e).adUnitCode||(e.adUnitCode=e.placementCode)}),(i=p.buildRequests(t,o))&&0!==i.length?(Array.isArray(i)||(i=[i]),f=Object(m.delayExecution)(r(l),i.length),i.forEach(function(i){switch(i.method){case"GET":n("".concat(i.url).concat(function(e){if(e)return"?".concat("object"===O(e)?Object(m.parseQueryStringParameters)(e):e);return""}(i.data)),{success:r(e),error:t},void 0,T({method:"GET",withCredentials:!0},i.options));break;case"POST":n(i.url,{success:r(e),error:t},"string"==typeof i.data?i.data:JSON.stringify(i.data),T({method:"POST",contentType:"text/plain",withCredentials:!0},i.options));break;default:Object(m.logWarn)("Skipping invalid request from ".concat(p.code,". Request type ").concat(i.type," must be GET or POST")),f()}function e(e,t){c(p.code);try{e=JSON.parse(e)}catch(e){}var n;e={body:e,headers:{get:t.getResponseHeader.bind(t)}},s.push(e);try{n=p.interpretResponse(e,i)}catch(e){return Object(m.logError)("Bidder ".concat(p.code," failed to interpret the server's response. Continuing without bids"),null,e),void f()}function r(e){var t,n,r,i=d[e.requestId];i?(e.originalCpm=e.cpm,e.originalCurrency=e.currency,e.meta=e.meta||T({},e[i.bidder]),t=T(Object(v.a)(y.a.STATUS.GOOD,i),e),n=i.adUnitCode,r=t,u[n]=!0,U(n,r,[o])&&a(n,r)):Object(m.logWarn)("Bidder ".concat(p.code," made bid for unknown request ID: ").concat(e.requestId,". Ignoring."))}n&&(Object(m.isArray)(n)?n.forEach(r):r(n)),f(n)}function t(e){c(p.code),Object(m.logError)("Server call for ".concat(p.code," failed: ").concat(e,". Continuing without bids.")),f()}})):l()):l())}});function g(e,t,n){_(p,e,t,n)}function b(e){return!!p.isBidRequestValid(e)||(Object(m.logWarn)("Invalid bid sent to bidder ".concat(p.code,": ").concat(JSON.stringify(e))),!1)}}var _=Object(b.b)("async",function(t,e,n,r){var i,o,a=u.b.getConfig("userSync.aliasSyncEnabled");!t.getUserSyncs||!a&&c.default.aliasRegistry[t.code]||(i=u.b.getConfig("userSync.filterSettings"),(o=t.getUserSyncs({iframeEnabled:!(!i||!i.iframe&&!i.all),pixelEnabled:!(!i||!i.image&&!i.all)},e,n,r))&&(Array.isArray(o)||(o=[o]),o.forEach(function(e){s.a.registerSync(e.type,t.code,e.url)})))},"registerSyncs");function B(e,t){if(!u.b.getConfig("adpod.brandCategoryExclusion"))return e.call(this,t);t.filter(function(e){return Object(m.deepAccess)(e,"mediaTypes.video.context")===g.a}).map(function(e){return e.bids.map(function(e){return e.bidder})}).reduce(m.flatten,[]).filter(m.uniques).forEach(function(n){var e=c.default.getBidAdapter(n);if(e.getSpec().getMappingFileInfo){var t=e.getSpec().getMappingFileInfo(),r=t.refreshInDays?t.refreshInDays:j,i=t.localStorageKey?t.localStorageKey:e.getSpec().code,o=I.getDataFromLocalStorage(i);try{(!(o=o?JSON.parse(o):void 0)||Object(m.timestamp)()>o.lastUpdated+24*r*60*60*1e3)&&Object(p.a)(t.url,{success:function(e){try{e=JSON.parse(e);var t={lastUpdated:Object(m.timestamp)(),mapping:e.mapping};I.setDataInLocalStorage(i,JSON.stringify(t))}catch(e){Object(m.logError)("Failed to parse ".concat(n," bidder translation mapping file"))}},error:function(){Object(m.logError)("Failed to load ".concat(n," bidder translation file"))}})}catch(e){Object(m.logError)("Failed to parse ".concat(n," bidder translation mapping file"))}}}),e.call(this,t)}function U(e,t,n){function r(e){return"Invalid bid from ".concat(t.bidderCode,". Ignoring bid: ").concat(e)}return e?t?(i=Object.keys(t),C.every(function(e){return l()(i,e)&&!l()([void 0,null],t[e])})?"native"!==t.mediaType||Object(o.g)(t,n)?"video"!==t.mediaType||Object(a.d)(t,n)?!("banner"===t.mediaType&&!function(e,t,n){if((t.width||0===parseInt(t.width,10))&&(t.height||0===parseInt(t.height,10)))return t.width=parseInt(t.width,10),t.height=parseInt(t.height,10),1;var r=Object(m.getBidderRequest)(n,t.bidderCode,e),i=r&&r.bids&&r.bids[0]&&r.bids[0].sizes,o=Object(m.parseSizesInput)(i);if(1===o.length){var a=A(o[0].split("x"),2),c=a[0],u=a[1];return t.width=parseInt(c,10),t.height=parseInt(u,10),1}}(e,t,n))||(Object(m.logError)(r("Banner bids require a width and height")),!1):(Object(m.logError)(r("Video bid does not have required vastUrl or renderer property")),!1):(Object(m.logError)(r("Native bid missing some required properties.")),!1):(Object(m.logError)(r("Bidder ".concat(t.bidderCode," is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))),!1)):(Object(m.logWarn)("Some adapter tried to add an undefined bid for ".concat(e,".")),!1):(Object(m.logWarn)("No adUnitCode was supplied to addBidResponse."),!1);var i}Object(b.a)("checkAdUnitSetup").before(B)},10:function(e,t,n){var r=n(98);e.exports=r},100:function(e,t,n){var r=n(30),i=n(101),o=n(46),a=n(47),c=n(55),u=n(28),s=n(73),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t,!0),s)try{return d(e,t)}catch(e){}if(u(e,t))return o(!i.f.call(e,t),e[t])}},101:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},102:function(e,t,n){function r(e,t){var n=c[a(e)];return n==s||n!=u&&("function"==typeof t?i(t):!!t)}var i=n(31),o=/#|\.prototype\./,a=r.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";e.exports=r},103:function(e,t,n){var r=n(27),i=n(104),o=n(21)("species");e.exports=function(e,t){var n;return i(e)&&("function"==typeof(n=e.constructor)&&(n===Array||i(n.prototype))||r(n)&&null===(n=n[o]))&&(n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},104:function(e,t,n){var r=n(48);e.exports=Array.isArray||function(e){return"Array"==r(e)}},105:function(e,t,n){var r=n(26),i=n(32);e.exports=function(t,n){try{i(r,t,n)}catch(e){r[t]=n}return n}},106:function(e,t,n){var r=n(77);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},107:function(e,t,n){n(108);var r=n(52);e.exports=r("Array","includes")},108:function(e,t,n){"use strict";var r=n(14),i=n(78).includes,o=n(51);r({target:"Array",proto:!0,forced:!n(60)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o("includes")},109:function(e,t,n){var r=n(58),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},11:function(e,t,n){"use strict";t.a=i,t.c=function(e){return!(!e||!e.url)},t.b=function(e,t){e.render(t)};var u=n(40),s=n(0),r=n(10),d=n.n(r),f="outstream";function i(e){var t=this,n=e.url,r=e.config,i=e.id,o=e.callback,a=e.loaded,c=e.adUnitCode;this.url=n,this.config=r,this.handlers={},this.id=i,this.loaded=a,this.cmd=[],this.push=function(e){"function"==typeof e?t.loaded?e.call():t.cmd.push(e):s.logError("Commands given to Renderer.push must be wrapped in a function")},this.callback=o||function(){t.loaded=!0,t.process()},this.render=function(){!function(t){var e=pbjs.adUnits,n=d()(e,function(e){return e.code===t});if(!n)return!1;var r=s.deepAccess(n,"renderer"),i=!!(r&&r.url&&r.render),o=s.deepAccess(n,"mediaTypes.video.renderer"),a=!!(o&&o.url&&o.render);return!!(i&&!0!==r.backupOnly||a&&!0!==o.backupOnly)}(c)?Object(u.a)(n,f,this.callback):s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(c)),this._render?this._render.apply(this,arguments):s.logWarn("No render function was provided, please use .setRender on the renderer")}.bind(this)}i.install=function(e){return new i({url:e.url,config:e.config,id:e.id,callback:e.callback,loaded:e.loaded,adUnitCode:e.adUnitCode})},i.prototype.getConfig=function(){return this.config},i.prototype.setRender=function(e){this._render=e},i.prototype.setEventHandlers=function(e){this.handlers=e},i.prototype.handleVideoEvent=function(e){var t=e.id,n=e.eventName;"function"==typeof this.handlers[n]&&this.handlers[n](),s.logMessage("Prebid Renderer event for id ".concat(t," type ").concat(n))},i.prototype.process=function(){for(;0<this.cmd.length;)try{this.cmd.shift().call()}catch(e){s.logError("Error processing Renderer command: ",e)}}},110:function(e,t,n){n(111),n(128),n(89),n(130);var r=n(42);e.exports=r.Set},111:function(e,t,n){"use strict";var r=n(112),i=n(117);e.exports=r("Set",function(t){return function(e){return t(this,arguments.length?e:void 0)}},i)},112:function(e,t,n){"use strict";var f=n(14),l=n(26),p=n(80),g=n(31),b=n(32),v=n(17),y=n(83),h=n(27),m=n(64),S=n(33).f,A=n(56).forEach,E=n(30),r=n(54),O=r.set,T=r.getterFor;e.exports=function(n,e,t){var r,a,i=-1!==n.indexOf("Map"),c=-1!==n.indexOf("Weak"),o=i?"set":"add",u=l[n],s=u&&u.prototype,d={};return E&&"function"==typeof u&&(c||s.forEach&&!g(function(){(new u).entries().next()}))?(r=e(function(e,t){O(y(e,r,n),{type:n,collection:new u}),null!=t&&v(t,e[o],e,i)}),a=T(n),A(["add","clear","delete","forEach","get","has","set","keys","values","entries"],function(i){var o="add"==i||"set"==i;i in s&&(!c||"clear"!=i)&&b(r.prototype,i,function(e,t){var n=a(this).collection;if(!o&&c&&!h(e))return"get"==i&&void 0;var r=n[i](0===e?0:e,t);return o?this:r})}),c||S(r.prototype,"size",{configurable:!0,get:function(){return a(this).collection.size}})):(r=t.getConstructor(e,n,i,o),p.REQUIRED=!0),m(r,n,!1,!0),d[n]=r,f({global:!0,forced:!0},d),c||t.setStrong(r,n,i),r}},113:function(e,t,n){var r=n(31);e.exports=!r(function(){return Object.isExtensible(Object.preventExtensions({}))})},114:function(e,t,n){"use strict";var r=n(63),i=n(62);e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},115:function(e,t,n){var r=n(26),i=n(116),o=r.WeakMap;e.exports="function"==typeof o&&/native code/.test(i(o))},116:function(e,t,n){var r=n(76),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return i.call(e)}),e.exports=r.inspectSource},117:function(e,t,n){"use strict";var s=n(33).f,d=n(84),f=n(122),l=n(24),p=n(83),g=n(17),a=n(66),c=n(127),b=n(30),v=n(80).fastKey,r=n(54),y=r.set,h=r.getterFor;e.exports={getConstructor:function(e,n,r,i){function o(e,t,n){var r,i,o=c(e),a=u(e,t);return a?a.value=n:(o.last=a={index:i=v(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=a),r&&(r.next=a),b?o.size++:e.size++,"F"!==i&&(o.index[i]=a)),e}var a=e(function(e,t){p(e,a,n),y(e,{type:n,index:d(null),first:void 0,last:void 0,size:0}),b||(e.size=0),null!=t&&g(t,e[i],e,r)}),c=h(n),u=function(e,t){var n,r=c(e),i=v(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return f(a.prototype,{clear:function(){for(var e=c(this),t=e.index,n=e.first;n;)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete t[n.index],n=n.next;e.first=e.last=void 0,b?e.size=0:this.size=0},delete:function(e){var t,n,r=c(this),i=u(this,e);return i&&(t=i.next,n=i.previous,delete r.index[i.index],i.removed=!0,n&&(n.next=t),t&&(t.previous=n),r.first==i&&(r.first=t),r.last==i&&(r.last=n),b?r.size--:this.size--),!!i},forEach:function(e,t){for(var n,r=c(this),i=l(e,1<arguments.length?t:void 0,3);n=n?n.next:r.first;)for(i(n.value,n.key,this);n&&n.removed;)n=n.previous},has:function(e){return!!u(this,e)}}),f(a.prototype,r?{get:function(e){var t=u(this,e);return t&&t.value},set:function(e,t){return o(this,0===e?0:e,t)}}:{add:function(e){return o(this,e=0===e?0:e,e)}}),b&&s(a.prototype,"size",{get:function(){return c(this).size}}),a},setStrong:function(e,t,n){var r=t+" Iterator",i=h(t),o=h(r);a(e,t,function(e,t){y(this,{type:r,target:e,state:i(e),kind:t,last:void 0})},function(){for(var e=o(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:{value:e.target=void 0,done:!0}},n?"entries":"values",!n,!0),c(t)}}},118:function(e,t,n){var r=n(30),a=n(33),c=n(15),u=n(119);e.exports=r?Object.defineProperties:function(e,t){c(e);for(var n,r=u(t),i=r.length,o=0;o<i;)a.f(e,n=r[o++],t[n]);return e}},119:function(e,t,n){var r=n(120),i=n(85);e.exports=Object.keys||function(e){return r(e,i)}},12:function(e,t,n){var r=n(107);e.exports=r},120:function(e,t,n){var a=n(28),c=n(47),u=n(78).indexOf,s=n(53);e.exports=function(e,t){var n,r=c(e),i=0,o=[];for(n in r)!a(s,n)&&a(r,n)&&o.push(n);for(;t.length>i;)a(r,n=t[i++])&&(~u(o,n)||o.push(n));return o}},121:function(e,t,n){var r=n(29);e.exports=r("document","documentElement")},122:function(e,t,n){var i=n(86);e.exports=function(e,t,n){for(var r in t)n&&n.unsafe&&e[r]?e[r]=t[r]:i(e,r,t[r],n);return e}},123:function(e,t,n){"use strict";function i(){return this}var o=n(87).IteratorPrototype,a=n(84),c=n(46),u=n(64),s=n(38);e.exports=function(e,t,n){var r=t+" Iterator";return e.prototype=a(o,{next:c(1,n)}),u(e,r,!1,!0),s[r]=i,e}},124:function(e,t,n){var r=n(31);e.exports=!r(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})},125:function(e,t,n){var i=n(15),o=n(126);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,r=!1,e={};try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(e){}return function(e,t){return i(e),o(t),r?n.call(e,t):e.__proto__=t,e}}():void 0)},126:function(e,t,n){var r=n(27);e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},127:function(e,t,n){"use strict";var r=n(29),i=n(33),o=n(21),a=n(30),c=o("species");e.exports=function(e){var t=r(e),n=i.f;a&&t&&!t[c]&&n(t,c,{configurable:!0,get:function(){return this}})}},128:function(e,t){},129:function(e,t,n){function r(c){return function(e,t){var n,r,i=String(s(e)),o=u(t),a=i.length;return o<0||a<=o?c?"":void 0:(n=i.charCodeAt(o))<55296||56319<n||o+1===a||(r=i.charCodeAt(o+1))<56320||57343<r?c?i.charAt(o):n:c?i.slice(o,o+2):r-56320+(n-55296<<10)+65536}}var u=n(58),s=n(49);e.exports={codeAt:r(!1),charAt:r(!0)}},13:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),t.d=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:15;0===e.getHooks({hook:t}).length&&e.before(t,n)},t.c=function(e,n){a("async",function(e){e.forEach(function(e){return n.apply(void 0,function(e){if(Array.isArray(e))return o(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var t})},e)([])},t.e=function(e){for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];c(e).before(function(e,t){t.push(n),e(t)})};var r=n(163),i=n.n(r);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=i()({ready:i.a.SYNC|i.a.ASYNC|i.a.QUEUE}),c=a.get},130:function(e,t,n){n(131);var r=n(132),i=n(26),o=n(62),a=n(32),c=n(38),u=n(21)("toStringTag");for(var s in r){var d=i[s],f=d&&d.prototype;f&&o(f)!==u&&a(f,u,s),c[s]=c.Array}},131:function(e,t,n){"use strict";var r=n(47),i=n(51),o=n(38),a=n(54),c=n(66),u="Array Iterator",s=a.set,d=a.getterFor(u);e.exports=c(Array,"Array",function(e,t){s(this,{type:u,target:r(e),index:0,kind:t})},function(){var e=d(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?{value:e.target=void 0,done:!0}:"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}},"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},132:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},133:function(e,t,n){n(14)({target:"Set",stat:!0},{from:n(134)})},134:function(e,t,n){"use strict";var s=n(19),d=n(24),f=n(17);e.exports=function(e,t,n){var r,i,o,a,c=arguments.length,u=1<c?t:void 0;return s(this),(r=void 0!==u)&&s(u),null==e?new this:(i=[],r?(o=0,a=d(u,2<c?n:void 0,2),f(e,function(e){i.push(a(e,o++))})):f(e,i.push,i),new this(i))}},135:function(e,t,n){n(14)({target:"Set",stat:!0},{of:n(136)})},136:function(e,t,n){"use strict";e.exports=function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}},137:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(138);r({target:"Set",proto:!0,real:!0,forced:i},{addAll:function(){return o.apply(this,arguments)}})},138:function(e,t,n){"use strict";var i=n(15),o=n(19);e.exports=function(){for(var e=i(this),t=o(e.add),n=0,r=arguments.length;n<r;n++)t.call(e,arguments[n]);return e}},139:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(140);r({target:"Set",proto:!0,real:!0,forced:i},{deleteAll:function(){return o.apply(this,arguments)}})},14:function(e,t,n){"use strict";function y(r){function e(e,t,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(e);case 2:return new r(e,t)}return new r(e,t,n)}return r.apply(this,arguments)}return e.prototype=r.prototype,e}var h=n(26),m=n(100).f,S=n(102),A=n(42),E=n(24),O=n(32),T=n(28);e.exports=function(e,t){var n,r,i,o,a,c,u,s,d=e.target,f=e.global,l=e.stat,p=e.proto,g=f?h:l?h[d]:(h[d]||{}).prototype,b=f?A:A[d]||(A[d]={}),v=b.prototype;for(i in t)n=!S(f?i:d+(l?".":"#")+i,e.forced)&&g&&T(g,i),a=b[i],n&&(c=e.noTargetGet?(s=m(g,i))&&s.value:g[i]),o=n&&c?c:t[i],n&&typeof a==typeof o||(u=e.bind&&n?E(o,h):e.wrap&&n?y(o):p&&"function"==typeof o?E(Function.call,o):o,(e.sham||o&&o.sham||a&&a.sham)&&O(u,"sham",!0),b[i]=u,p&&(T(A,r=d+"Prototype")||O(A,r,{}),A[r][i]=o,e.real&&v&&!v[i]&&O(v,i,o)))}},140:function(e,t,n){"use strict";var a=n(15),c=n(19);e.exports=function(){for(var e,t=a(this),n=c(t.delete),r=!0,i=0,o=arguments.length;i<o;i++)e=n.call(t,arguments[i]),r=r&&e;return!!r}},141:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(24),c=n(36),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{every:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return!u(r,function(e){if(!i(e,e,n))return u.stop()},void 0,!1,!0).stopped}})},142:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(29),a=n(15),c=n(19),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{difference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete);return s(e,function(e){r.call(n,e)}),n}})},143:function(e,t,n){"use strict";var r=n(14),i=n(16),c=n(29),u=n(15),s=n(19),d=n(24),f=n(39),l=n(36),p=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{filter:function(e,t){var n=u(this),r=l(n),i=d(e,1<arguments.length?t:void 0,3),o=new(f(n,c("Set"))),a=s(o.add);return p(r,function(e){i(e,e,n)&&a.call(o,e)},void 0,!1,!0),o}})},144:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(24),c=n(36),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{find:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return u(r,function(e){if(i(e,e,n))return u.stop(e)},void 0,!1,!0).result}})},145:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(29),a=n(15),c=n(19),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{intersection:function(e){var t=a(this),n=new(u(t,o("Set"))),r=c(t.has),i=c(n.add);return s(e,function(e){r.call(t,e)&&i.call(n,e)}),n}})},146:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(19),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isDisjointFrom:function(e){var t=o(this),n=a(t.has);return!c(e,function(e){if(!0===n.call(t,e))return c.stop()}).stopped}})},147:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(29),a=n(15),c=n(19),u=n(90),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isSubsetOf:function(e){var t=u(this),n=a(e),r=n.has;return"function"!=typeof r&&(n=new(o("Set"))(e),r=c(n.has)),!s(t,function(e){if(!1===r.call(n,e))return s.stop()},void 0,!1,!0).stopped}})},148:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(19),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{isSupersetOf:function(e){var t=o(this),n=a(t.has);return!c(e,function(e){if(!1===n.call(t,e))return c.stop()}).stopped}})},149:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(36),c=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{join:function(e){var t=o(this),n=a(t),r=void 0===e?",":String(e),i=[];return c(n,i.push,i,!1,!0),i.join(r)}})},15:function(e,t,n){var r=n(27);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},150:function(e,t,n){"use strict";var r=n(14),i=n(16),c=n(29),u=n(15),s=n(19),d=n(24),f=n(39),l=n(36),p=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{map:function(e,t){var n=u(this),r=l(n),i=d(e,1<arguments.length?t:void 0,3),o=new(f(n,c("Set"))),a=s(o.add);return p(r,function(e){a.call(o,i(e,e,n))},void 0,!1,!0),o}})},151:function(e,t,n){"use strict";var r=n(14),i=n(16),a=n(15),c=n(19),u=n(36),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{reduce:function(t,e){var n=a(this),r=u(n),i=arguments.length<2,o=i?void 0:e;if(c(t),s(r,function(e){o=i?(i=!1,e):t(o,e,e,n)},void 0,!1,!0),i)throw TypeError("Reduce of empty set with no initial value");return o}})},152:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(15),a=n(24),c=n(36),u=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{some:function(e,t){var n=o(this),r=c(n),i=a(e,1<arguments.length?t:void 0,3);return u(r,function(e){if(i(e,e,n))return u.stop()},void 0,!1,!0).stopped}})},153:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(29),a=n(15),c=n(19),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{symmetricDifference:function(e){var t=a(this),n=new(u(t,o("Set")))(t),r=c(n.delete),i=c(n.add);return s(e,function(e){r.call(n,e)||i.call(n,e)}),n}})},154:function(e,t,n){"use strict";var r=n(14),i=n(16),o=n(29),a=n(15),c=n(19),u=n(39),s=n(17);r({target:"Set",proto:!0,real:!0,forced:i},{union:function(e){var t=a(this),n=new(u(t,o("Set")))(t);return s(e,c(n.add),n),n}})},155:function(e,t,n){n(89),n(156);var r=n(42);e.exports=r.Array.from},156:function(e,t,n){var r=n(14),i=n(157);r({target:"Array",stat:!0,forced:!n(159)(function(e){Array.from(e)})},{from:i})},157:function(e,t,n){"use strict";var v=n(24),y=n(57),h=n(82),m=n(81),S=n(50),A=n(158),E=n(61);e.exports=function(e,t,n){var r,i,o,a,c,u,s=y(e),d="function"==typeof this?this:Array,f=arguments.length,l=1<f?t:void 0,p=void 0!==l,g=E(s),b=0;if(p&&(l=v(l,2<f?n:void 0,2)),null==g||d==Array&&m(g))for(i=new d(r=S(s.length));b<r;b++)u=p?l(s[b],b):s[b],A(i,b,u);else for(c=(a=g.call(s)).next,i=new d;!(o=c.call(a)).done;b++)u=p?h(a,l,[o.value,b],!0):o.value,A(i,b,u);return i.length=b,i}},158:function(e,t,n){"use strict";var i=n(55),o=n(33),a=n(46);e.exports=function(e,t,n){var r=i(t);r in e?o.f(e,r,a(0,n)):e[r]=n}},159:function(e,t,n){var i=n(21)("iterator"),o=!1;try{var r=0,a={next:function(){return{done:!!r++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}},16:function(e,t){e.exports=!0},160:function(e,t){e.exports=function e(t){var n=Array.isArray(t)?[]:{};for(var r in t){var i=t[r];n[r]=i&&"object"==typeof i?e(i):i}return n}},161:function(e,t,n){"use strict";t.a=function(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}},162:function(e,t,n){"use strict";t.a=function(e,t,n){t.split&&(t=t.split("."));for(var r,i=0,o=t.length,a=e;i<o;++i)r=a[t[i]],a=a[t[i]]=i===o-1?n:null!=r?r:!~t[i+1].indexOf(".")&&-1<+t[i+1]?[]:{}}},163:function(e,t){h.SYNC=1,h.ASYNC=2,h.QUEUE=4;var g="fun-hooks";var n=Object.freeze({useProxy:!0,ready:0}),b=new WeakMap,r="2,1,0"===[1].reduce(function(e,t,n){return[e,t,n]},2).toString()?Array.prototype.reduce:function(e,t){var n,r=Object(this),i=r.length>>>0,o=0;if(t)n=t;else{for(;o<i&&!(o in r);)o++;n=r[o++]}for(;o<i;)o in r&&(n=e(n,r[o],o,r)),o++;return n};function v(e,t){return Array.prototype.slice.call(e,t)}var y=Object.assign||function(e){return r.call(v(arguments,1),function(t,n){return n&&Object.keys(n).forEach(function(e){t[e]=n[e]}),t},e)};function h(u){var s,e={},d=[];function t(e,t){return"function"==typeof e?f.call(null,"sync",e,t):"string"==typeof e&&"function"==typeof t?f.apply(null,arguments):"object"==typeof e?function(o,e,a){var t=!0;void 0===e&&(e=Object.getOwnPropertyNames(o),t=!1);var c={},n=["constructor"];for(;(e=e.filter(function(e){return!("function"!=typeof o[e]||-1!==n.indexOf(e)||e.match(/^_/))})).forEach(function(e){var t,n=e.split(":"),r=n[0],i=n[1]||"sync";c[r]||(t=o[r],c[r]=o[r]=f(i,t,a?[a,r]:void 0))}),o=Object.getPrototypeOf(o),t&&o;);return c}.apply(null,arguments):void 0}function l(o){var a=Array.isArray(o)?o:o.split(".");return r.call(a,function(t,n,e){var r=t[n],i=!1;return r||(e===a.length-1?(s||d.push(function(){i||console.warn(g+": referenced '"+o+"' but it was never created")}),t[n]=p(function(e){t[n]=e,i=!0})):t[n]={})},e)}function p(r){var o=[],a=[],c=function(){},e={before:function(e,t){return n.call(this,o,"before",e,t)},after:function(e,t){return n.call(this,a,"after",e,t)},getHooks:function(n){var e=o.concat(a);"object"==typeof n&&(e=e.filter(function(t){return Object.keys(n).every(function(e){return t[e]===n[e]})}));try{y(e,{remove:function(){return e.forEach(function(e){e.remove()}),this}})}catch(e){console.error("error adding `remove` to array, did you modify Array.prototype?")}return e},removeAll:function(){return this.getHooks().remove()}},t={install:function(e,t,n){this.type=e,(c=n)(o,a),r&&r(t)}};return b.set(e.after,t),e;function n(t,e,n,r){var i={hook:n,type:e,priority:r||10,remove:function(){var e=t.indexOf(i);-1!==e&&(t.splice(e,1),c(o,a))}};return t.push(i),t.sort(function(e,t){return t.priority-e.priority}),c(o,a),this}}function f(f,e,t){var n=e.after&&b.get(e.after);if(n){if(n.type!==f)throw g+": recreated hookable with different type";return e}var r,i,o=t?l(t):p(),a={get:function(e,t){return o[t]||Reflect.get.apply(Reflect,arguments)}};return s||d.push(c),u.useProxy&&"function"==typeof Proxy&&Proxy.revocable?i=new Proxy(e,a):y(i=function(){return a.apply?a.apply(e,this,v(arguments)):e.apply(this,arguments)},o),b.get(i.after).install(f,i,function(e,t){var s,d=[];r=e.length||t.length?(e.forEach(n),s=d.push(void 0)-1,t.forEach(n),function(n,r,e){var i,o=0,a="async"===f&&"function"==typeof e[e.length-1]&&e.pop();function c(e){"sync"===f?i=e:a&&a.apply(null,arguments)}function u(e){if(d[o]){var t=v(arguments);return u.bail=c,t.unshift(u),d[o++].apply(r,t)}"sync"===f?i=e:a&&a.apply(null,arguments)}return d[s]=function(){var e=v(arguments,1);"async"===f&&a&&(delete u.bail,e.push(u));var t=n.apply(r,e);"sync"===f&&u(t)},u.apply(null,e),i}):void 0;function n(e){d.push(e.hook)}c()}),i;function c(){!s&&("sync"!==f||u.ready&h.SYNC)&&("async"!==f||u.ready&h.ASYNC)?"sync"!==f&&u.ready&h.QUEUE?a.apply=function(){var e=arguments;d.push(function(){i.apply(e[1],e[2])})}:a.apply=function(){throw g+": hooked function not ready"}:a.apply=r}}return(u=y({},n,u)).ready?t.ready=function(){s=!0,function(e){for(var t;t=e.shift();)t()}(d)}:s=!0,t.get=l,t}e.exports=h},17:function(e,t,n){function p(e,t){this.stopped=e,this.result=t}var g=n(15),b=n(81),v=n(50),y=n(24),h=n(61),m=n(82);(e.exports=function(e,t,n,r,i){var o,a,c,u,s,d,f,l=y(t,n,r?2:1);if(i)o=e;else{if("function"!=typeof(a=h(e)))throw TypeError("Target is not iterable");if(b(a)){for(c=0,u=v(e.length);c<u;c++)if((s=r?l(g(f=e[c])[0],f[1]):l(e[c]))&&s instanceof p)return s;return new p(!1)}o=a.call(e)}for(d=o.next;!(f=d.call(o)).done;)if("object"==typeof(s=m(o,l,f.value,r))&&s&&s instanceof p)return s;return new p(!1)}).stop=function(e){return new p(!0,e)}},18:function(e,t,n){"use strict";t.a=function(){return window.pbjs},window.pbjs=window.pbjs||{},window.pbjs.cmd=window.pbjs.cmd||[],window.pbjs.que=window.pbjs.que||[],window._pbjsGlobals=window._pbjsGlobals||[],window._pbjsGlobals.push("pbjs")},19:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},2:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r="native",i="video",o="banner",a="adpod"},21:function(e,t,n){var r=n(26),i=n(75),o=n(28),a=n(59),c=n(77),u=n(106),s=i("wks"),d=r.Symbol,f=u?d:d&&d.withoutSetter||a;e.exports=function(e){return o(s,e)||(c&&o(d,e)?s[e]=d[e]:s[e]=f("Symbol."+e)),s[e]}},22:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var y=n(0);var h,r=(h=window,function(){var e,t=[],n=function(e){try{if(!e.location.ancestorOrigins)return;return e.location.ancestorOrigins}catch(e){}}(h),r=!1,i=0,o=!1,a=!1;do{var c,u,s=g,d=a,f=void 0,l=!1,p=null,a=!1,g=g?g.parent:h;try{f=g.location.href||null}catch(e){l=!0}if(l)if(d){var b=s.context;try{u=p=b.sourceUrl,o=!0,g===h.top&&(r=!0),b.canonicalUrl&&(e=b.canonicalUrl)}catch(e){}}else{Object(y.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");try{var v=s.document.referrer;v&&(p=v,g===h.top&&(r=!0))}catch(e){}!p&&n&&n[i-1]&&(p=n[i-1]),p&&!o&&(u=p)}else f&&(u=p=f,o=!1,g===h.top&&(r=!0,(c=function(e){try{var t=e.querySelector("link[rel='canonical']");if(null!==t)return t.href}catch(e){}return null}(g.document))&&(e=c))),g.context&&g.context.sourceUrl&&(a=!0);t.push(p),i++}while(g!==h.top);return t.reverse(),{referer:u||null,reachedTop:r,isAmp:o,numIframes:i-1,stack:t,canonicalUrl:e||null}})},222:function(e,t,n){n(223);var r=n(52);e.exports=r("Array","findIndex")},223:function(e,t,n){"use strict";var r=n(14),i=n(56).findIndex,o=n(51),a=n(60),c="findIndex",u=!0,s=a(c);c in[]&&Array(1)[c](function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{findIndex:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o(c)},23:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),s=n(41),i=n(10),o=n.n(i),a=n(5);var d,c,u=(d=[],(c={}).addWinningBid=function(t){var e=o()(d,function(e){return e.getAuctionId()===t.auctionId});e?(t.status=a.BID_STATUS.RENDERED,e.addWinningBid(t)):Object(r.logWarn)("Auction not found when adding winning bid")},c.getAllWinningBids=function(){return d.map(function(e){return e.getWinningBids()}).reduce(r.flatten,[])},c.getBidsRequested=function(){return d.map(function(e){return e.getBidRequests()}).reduce(r.flatten,[])},c.getNoBids=function(){return d.map(function(e){return e.getNoBids()}).reduce(r.flatten,[])},c.getBidsReceived=function(){return d.map(function(e){if(e.getAuctionStatus()===s.a)return e.getBidsReceived()}).reduce(r.flatten,[]).filter(function(e){return e})},c.getAdUnits=function(){return d.map(function(e){return e.getAdUnits()}).reduce(r.flatten,[])},c.getAdUnitCodes=function(){return d.map(function(e){return e.getAdUnitCodes()}).reduce(r.flatten,[]).filter(r.uniques)},c.createAuction=function(e){var t,n=e.adUnits,r=e.adUnitCodes,i=e.callback,o=e.cbTimeout,a=e.labels,c=e.auctionId,u=Object(s.k)({adUnits:n,adUnitCodes:r,callback:i,cbTimeout:o,labels:a,auctionId:c});return t=u,d.push(t),u},c.findBidByAdId=function(t){return o()(d.map(function(e){return e.getBidsReceived()}).reduce(r.flatten,[]),function(e){return e.adId===t})},c.getStandardBidderAdServerTargeting=function(){return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING]},c.setStatusForBids=function(e,t){var n,r=c.findBidByAdId(e);r&&(r.status=t),!r||t!==a.BID_STATUS.BID_TARGETING_SET||(n=o()(d,function(e){return e.getAuctionId()===r.auctionId}))&&n.setBidTargeting(r)},c.getLastAuctionId=function(){return d.length&&d[d.length-1].getAuctionId()},c)},230:function(e,t,n){"use strict";t.a=function(){window.addEventListener("message",u,!1)};var r=n(9),b=n.n(r),v=n(37),i=n(5),o=n.n(i),y=n(0),h=n(23),a=n(10),m=n.n(a),S=n(11),c=n(12),d=n.n(c),A=o.a.EVENTS.BID_WON;function u(e){var t,n,r,i,o,a,c,u,s,d=e.message?"message":"data",f={};try{f=JSON.parse(e[d])}catch(e){return}if(f&&f.adId){var l,p=m()(h.a.getBidsReceived(),function(e){return e.adId===f.adId});if(p&&"Prebid Request"===f.message&&(n=e,r=(t=p).adId,i=t.ad,o=t.adUrl,a=t.width,c=t.height,u=t.renderer,s=t.cpm,Object(S.c)(u)?Object(S.b)(u,t):r&&(E(t),n.source.postMessage(JSON.stringify({message:"Prebid Response",ad:Object(y.replaceAuctionPrice)(i,s),adUrl:Object(y.replaceAuctionPrice)(o,s),adId:r,width:a,height:c}),n.origin)),h.a.addWinningBid(p),b.a.emit(A,p)),p&&"Prebid Native"===f.message){if("assetRequest"===f.action){var g=Object(v.d)(f,p);return void e.source.postMessage(JSON.stringify(g),e.origin)}if("allAssetRequest"===f.action?(l=Object(v.c)(f,p),e.source.postMessage(JSON.stringify(l),e.origin)):"resizeNativeHeight"===f.action&&(p.height=f.height,p.width=f.width,E(p)),"click"===Object(v.b)(f,p))return;h.a.addWinningBid(p),b.a.emit(A,p)}}}function E(e){var a=e.adId,c=e.adUnitCode,u=e.width,s=e.height;["div","iframe"].forEach(function(e){var t,n,r,i,o=(t=e+':not([style*="display: none"])',n=function(e,t){return window.googletag?function(n){return m()(window.googletag.pubads().getSlots(),function(t){return m()(t.getTargetingKeys(),function(e){return d()(t.getTargeting(e),n)})}).getSlotElementId()}(e):window.apntag?function(e){var t=window.apntag.getTag(e);return t&&t.targetId}(t):t}(a,c),(r=document.getElementById(n))&&r.querySelector(t));o?((i=o.style).width=u+"px",i.height=s+"px"):Object(y.logWarn)("Unable to locate matching page element for adUnitCode ".concat(c,".  Can't resize it to ad's dimensions.  Please review setup."))})}},231:function(e,t,n){"use strict";t.a=function(e){var t;try{e=e||window.sessionStorage,t=JSON.parse(e.getItem(u))}catch(e){}t&&p(t,!0)};var r,i,o=n(3),a=n(0),c=n(41),u="pbjs:debugging";function s(e){Object(a.logMessage)("DEBUG: "+e)}function d(e){Object(a.logWarn)("DEBUG: "+e)}function f(e){r=function(e,t,n){if(b(this.bidders,n.bidderCode))return void d("bidder '".concat(n.bidderCode,"' excluded from auction by bidder overrides"));Array.isArray(this.bids)&&this.bids.forEach(function(e){g(e,n.bidderCode,t)||v(e,n,"bidder")});e(t,n)}.bind(e),c.c.before(r,5),i=function(e,t){var r=this,n=t.filter(function(e){return!b(r.bidders,e.bidderCode)||(d("bidRequest '".concat(e.bidderCode,"' excluded from auction by bidder overrides")),!1)});Array.isArray(r.bidRequests)&&n.forEach(function(n){r.bidRequests.forEach(function(t){n.bids.forEach(function(e){g(t,n.bidderCode,e.adUnitCode)||v(t,e,"bidRequest")})})});e(n)}.bind(e),c.e.before(i,5)}function l(){c.c.getHooks({hook:r}).remove(),c.e.getHooks({hook:i}).remove()}function p(e,t){var n=1<arguments.length&&void 0!==t&&t;o.b.setConfig({debug:!0}),l(),f(e),s("bidder overrides enabled".concat(n?" from session":""))}function g(e,t,n){return e.bidder&&e.bidder!==t||!(!e.adUnitCode||e.adUnitCode===n)}function b(e,t){return Array.isArray(e)&&-1===e.indexOf(t)}function v(n,e,r){return Object.keys(n).filter(function(e){return-1===["adUnitCode","bidder"].indexOf(e)}).reduce(function(e,t){return s("bidder overrides changed '".concat(e.adUnitCode,"/").concat(e.bidderCode,"' ").concat(r,".").concat(t," from '").concat(e[t],".js' to '").concat(n[t],"'")),e[t]=n[t],e},e)}function y(e){if(e.enabled){try{window.sessionStorage.setItem(u,JSON.stringify(e))}catch(e){}p(e)}else{l(),s("bidder overrides disabled");try{window.sessionStorage.removeItem(u)}catch(e){}}}o.b.getConfig("debugging",function(e){return y(e.debugging)})},24:function(e,t,n){var o=n(19);e.exports=function(r,i,e){if(o(r),void 0===i)return r;switch(e){case 0:return function(){return r.call(i)};case 1:return function(e){return r.call(i,e)};case 2:return function(e,t){return r.call(i,e,t)};case 3:return function(e,t,n){return r.call(i,e,t,n)}}return function(){return r.apply(i,arguments)}}},25:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return u}),t.d=function(e,t){var n=Object(o.getBidRequest)(e.requestId,t),r=n&&Object(o.deepAccess)(n,"mediaTypes.video"),i=r&&Object(o.deepAccess)(r,"context");return s(e,n,r,i)},n.d(t,"c",function(){return s});n(8);var o=n(0),i=n(3),r=n(12),a=(n.n(r),n(13)),c="outstream",u="instream";var s=Object(a.b)("sync",function(e,t,n,r){return!t||n&&r!==c?i.b.getConfig("cache.url")||!e.vastXml||e.vastUrl?!(!e.vastUrl&&!e.vastXml):(Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '),!1):r!==c||!!(e.renderer||t.renderer||n.renderer)},"checkVideoBidSetup")},26:function(n,e,t){(function(e){function t(e){return e&&e.Math==Math&&e}n.exports=t("object"==typeof globalThis&&globalThis)||t("object"==typeof window&&window)||t("object"==typeof self&&self)||t("object"==typeof e&&e)||Function("return this")()}).call(e,t(35))},27:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},28:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},29:function(e,t,n){function r(e){return"function"==typeof e?e:void 0}var i=n(42),o=n(26);e.exports=function(e,t){return arguments.length<2?r(i[e])||r(o[e]):i[e]&&i[e][t]||o[e]&&o[e][t]}},3:function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return C});var r=n(45),i=n(10),a=n.n(i),o=n(12),c=n.n(o),u=n(79),s=n.n(u),d=n(0);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=n(91),p=n(0),g=n(5),b="TRUE"===p.getParameterByName(g.DEBUG_MODE).toUpperCase(),v=window.location.origin,y="random",h={};h[y]=!0,h.fixed=!0;var m=y,S={LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"};var A,E,O,T,I,C=(T=[],I=null,j(),{getCurrentBidder:function(){return I},getConfig:function(){if(arguments.length<=1&&"function"!=typeof(arguments.length<=0?void 0:arguments[0])){var e=arguments.length<=0?void 0:arguments[0];return e?p.deepAccess(w(),e):w()}return function(e,t){var n=t;if("string"!=typeof e&&(n=e,e="*"),"function"==typeof n){var r={topic:e,callback:n};return T.push(r),function(){T.splice(T.indexOf(r),1)}}p.logError("listener must be a function")}.apply(void 0,arguments)},setConfig:function(n){var e,r;p.isPlainObject(n)?(e=Object.keys(n),r={},e.forEach(function(e){var t=n[e];p.isPlainObject(A[e])&&p.isPlainObject(t)&&(t=f({},A[e],t)),r[e]=E[e]=t}),_(r)):p.logError("setConfig options must be an object")},setDefaults:function(e){p.isPlainObject(A)?(f(A,e),f(E,e)):p.logError("defaults must be an object")},resetConfig:j,runWithBidder:B,callbackWithBidder:function(o){return function(i){return function(){if("function"==typeof i){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return B(o,(e=p.bind).call.apply(e,[i,this].concat(n)))}p.logWarn("config.callbackWithBidder callback is not a function")}}},setBidderConfig:function(r){try{!function(e){if(!p.isPlainObject(e))throw"setBidderConfig bidder options must be an object";if(!Array.isArray(e.bidders)||!e.bidders.length)throw"setBidderConfig bidder options must contain a bidders list with at least 1 bidder";if(!p.isPlainObject(e.config))throw"setBidderConfig bidder options must contain a config object"}(r),r.bidders.forEach(function(n){O[n]||(O[n]={}),Object.keys(r.config).forEach(function(e){var t=r.config[e];p.isPlainObject(t)?O[n][e]=f({},O[n][e]||{},t):O[n][e]=t})})}catch(e){p.logError(e)}},getBidderConfig:function(){return O}});function j(){A={};var n={_debug:b,get debug(){return this._debug},set debug(e){this._debug=e},_bidderTimeout:3e3,get bidderTimeout(){return this._bidderTimeout},set bidderTimeout(e){this._bidderTimeout=e},_publisherDomain:v,get publisherDomain(){return this._publisherDomain},set publisherDomain(e){this._publisherDomain=e},_priceGranularity:S.MEDIUM,set priceGranularity(e){o(e)&&("string"==typeof e?this._priceGranularity=i(e)?e:S.MEDIUM:p.isPlainObject(e)&&(this._customPriceBucket=e,this._priceGranularity=S.CUSTOM,p.logMessage("Using custom price granularity")))},get priceGranularity(){return this._priceGranularity},_customPriceBucket:{},get customPriceBucket(){return this._customPriceBucket},_mediaTypePriceGranularity:{},get mediaTypePriceGranularity(){return this._mediaTypePriceGranularity},set mediaTypePriceGranularity(n){var r=this;this._mediaTypePriceGranularity=Object.keys(n).reduce(function(e,t){return o(n[t])?"string"==typeof n?e[t]=i(n[t])?n[t]:r._priceGranularity:p.isPlainObject(n)&&(e[t]=n[t],p.logMessage("Using custom price granularity for ".concat(t))):p.logWarn("Invalid price granularity for media type: ".concat(t)),e},{})},_sendAllBids:!0,get enableSendAllBids(){return this._sendAllBids},set enableSendAllBids(e){this._sendAllBids=e},_useBidCache:!1,get useBidCache(){return this._useBidCache},set useBidCache(e){this._useBidCache=e},_deviceAccess:!0,get deviceAccess(){return this._deviceAccess},set deviceAccess(e){this._deviceAccess=e},_bidderSequence:m,get bidderSequence(){return this._bidderSequence},set bidderSequence(e){h[e]?this._bidderSequence=e:p.logWarn("Invalid order: ".concat(e,". Bidder Sequence was not set."))},_timeoutBuffer:400,get timeoutBuffer(){return this._timeoutBuffer},set timeoutBuffer(e){this._timeoutBuffer=e},_disableAjaxTimeout:!1,get disableAjaxTimeout(){return this._disableAjaxTimeout},set disableAjaxTimeout(e){this._disableAjaxTimeout=e},_auctionOptions:{},get auctionOptions(){return this._auctionOptions},set auctionOptions(e){!function(e){if(!p.isPlainObject(e))return p.logWarn("Auction Options must be an object"),!1;for(var t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];if("secondaryBidders"!==r)return p.logWarn("Auction Options given an incorrect param: ".concat(r)),!1;if("secondaryBidders"===r){if(!p.isArray(e[r]))return p.logWarn("Auction Options ".concat(r," must be of type Array")),!1;if(!e[r].every(p.isStr))return p.logWarn("Auction Options ".concat(r," must be only string")),!1}}return!0}(e)||(this._auctionOptions=e)}};function i(t){return a()(Object.keys(S),function(e){return t===S[e]})}function o(e){if(e){if("string"==typeof e)i(e)||p.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");else if(p.isPlainObject(e)&&!Object(r.b)(e))return void p.logError("Invalid custom price value passed to `setPriceGranularity()`");return 1}p.logError("Prebid Error: no value passed to `setPriceGranularity()`")}E&&_(Object.keys(E).reduce(function(e,t){return E[t]!==n[t]&&(e[t]=n[t]||{}),e},{})),E=n,O={}}function w(){if(I&&O&&p.isPlainObject(O[I])){var n=O[I],e=new s.a(Object.keys(E).concat(Object.keys(n)));return l(e).reduce(function(e,t){return void 0===n[t]?e[t]=E[t]:void 0!==E[t]&&p.isPlainObject(n[t])?e[t]=Object(d.mergeDeep)({},E[t],n[t]):e[t]=n[t],e},{})}return f({},E)}function _(i){var t=Object.keys(i);T.filter(function(e){return c()(t,e.topic)}).forEach(function(e){var t,n,r;e.callback((t={},n=e.topic,r=i[e.topic],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t))}),T.filter(function(e){return"*"===e.topic}).forEach(function(e){return e.callback(i)})}function B(e,t){I=e;try{return t()}finally{I=null}}},30:function(e,t,n){var r=n(31);e.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},31:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},32:function(e,t,n){var r=n(30),i=n(33),o=n(46);e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},33:function(e,t,n){var r=n(30),i=n(73),o=n(15),a=n(55),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(o(e),t=a(t,!0),o(n),i)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},34:function(e,t,n){"use strict";t.a=function(e,t){return new r(e,t)};var i=n(0);function r(e,t){var n=t&&t.src||"client",r=e||0;this.bidderCode=t&&t.bidder||"",this.width=0,this.height=0,this.statusMessage=function(){switch(r){case 0:return"Pending";case 1:return"Bid available";case 2:return"Bid returned empty or error response";case 3:return"Bid timed out"}}(),this.adId=i.getUniqueIdentifierStr(),this.requestId=t&&t.bidId,this.mediaType="banner",this.source=n,this.getStatusCode=function(){return r},this.getSize=function(){return this.width+"x"+this.height}}},35:function(e,t){var n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},36:function(e,t,n){var r=n(16),i=n(90);e.exports=r?i:function(e){return Set.prototype.values.call(e)}},362:function(e,t,n){n(363);var r=n(52);e.exports=r("String","includes")},363:function(e,t,n){"use strict";var r=n(14),i=n(364),o=n(49);r({target:"String",proto:!0,forced:!n(366)("includes")},{includes:function(e,t){return!!~String(o(this)).indexOf(i(e),1<arguments.length?t:void 0)}})},364:function(e,t,n){var r=n(365);e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},365:function(e,t,n){var r=n(27),i=n(48),o=n(21)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},366:function(e,t,n){var r=n(21)("match");e.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,"/./"[t](n)}catch(e){}}return!1}},37:function(e,t,n){"use strict";n.d(t,"f",function(){return o}),n.d(t,"a",function(){return c}),t.h=function(e){if(e&&e.type&&function(e){return!(!e||!a()(Object.keys(d),e))||(Object(u.logError)("".concat(e," nativeParam is not supported")),!1)}(e.type))return d[e.type];return e},t.g=function(t,e){var n=Object(u.getBidRequest)(t.requestId,e);if(!n)return!1;if(!Object(u.deepAccess)(t,"native.clickUrl"))return!1;if(Object(u.deepAccess)(t,"native.image")&&(!Object(u.deepAccess)(t,"native.image.height")||!Object(u.deepAccess)(t,"native.image.width")))return!1;if(Object(u.deepAccess)(t,"native.icon")&&(!Object(u.deepAccess)(t,"native.icon.height")||!Object(u.deepAccess)(t,"native.icon.width")))return!1;var r=n.nativeParams;if(!r)return!0;var i=Object.keys(r).filter(function(e){return r[e].required}),o=Object.keys(t.native).filter(function(e){return t.native[e]});return i.every(function(e){return a()(o,e)})},t.b=function(e,t){var n;"click"===e.action?n=t.native&&t.native.clickTrackers:(n=t.native&&t.native.impressionTrackers,t.native&&t.native.javascriptTrackers&&Object(u.insertHtmlIntoIframe)(t.native.javascriptTrackers));return(n||[]).forEach(u.triggerPixel),e.action},t.e=function(i,o){var a={};Object(u.deepAccess)(o,"nativeParams.rendererUrl")?i.native.rendererUrl=f(o.nativeParams.rendererUrl):Object(u.deepAccess)(o,"nativeParams.adTemplate")&&(i.native.adTemplate=f(o.nativeParams.adTemplate));var c=!1!==Object(u.deepAccess)(o,"nativeParams.sendTargetingKeys");return Object.keys(i.native).forEach(function(e){var t,n,r;"adTemplate"!==e&&(t=s.NATIVE_KEYS[e],n=f(i.native[e]),Object(u.deepAccess)(o,"mediaTypes.native.".concat(e,".sendId"))&&(n="".concat(t,":").concat(i.adId)),r=Object(u.deepAccess)(o,"nativeParams.".concat(e,".sendTargetingKeys")),t&&n&&("boolean"==typeof r?r:c)&&(a[t]=n))}),a},t.d=function(e,r){var i={message:"assetResponse",adId:e.adId,assets:[]};r.native.hasOwnProperty("adTemplate")&&(i.adTemplate=f(r.native.adTemplate));r.native.hasOwnProperty("rendererUrl")&&(i.rendererUrl=f(r.native.rendererUrl));return e.assets.forEach(function(e){var t=Object(u.getKeyByValue)(s.NATIVE_KEYS,e),n=f(r.native[t]);i.assets.push({key:t,value:n})}),i},t.c=function(e,r){var i={message:"assetResponse",adId:e.adId,assets:[]};return Object.keys(r.native).forEach(function(e,t){var n;"adTemplate"===e&&r.native[e]?i.adTemplate=f(r.native[e]):"rendererUrl"===e&&r.native[e]?i.rendererUrl=f(r.native[e]):r.native[e]&&s.NATIVE_KEYS.hasOwnProperty(e)&&(n=f(r.native[e]),i.assets.push({key:e,value:n}))}),i};var u=n(0),r=n(12),a=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=n(5),o=[],c=Object.keys(s.NATIVE_KEYS).map(function(e){return s.NATIVE_KEYS[e]}),d={image:{image:{required:!0},title:{required:!0},sponsoredBy:{required:!0},clickUrl:{required:!0},body:{required:!1},icon:{required:!1}}};function f(e){return"object"===i(e)&&e.url?e.url:e}},38:function(e,t){e.exports={}},39:function(e,t,n){var i=n(15),o=n(19),a=n(21)("species");e.exports=function(e,t){var n,r=i(e).constructor;return void 0===r||null==(n=i(r)[a])?t:o(n)}},4:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),t.b=i;var l=n(3);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=n(0),v=4,r=i();function i(){var s=0<arguments.length&&void 0!==arguments[0]?arguments[0]:3e3,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},d=e.request,f=e.done;return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var i,o=r.method||(n?"POST":"GET"),a=document.createElement("a");a.href=e;var c,u="object"===g(t)&&null!==t?t:{success:function(){b.logMessage("xhr success")},error:function(e){b.logError("xhr error",null,e)}};"function"==typeof t&&(u.success=t),(i=new window.XMLHttpRequest).onreadystatechange=function(){var e;i.readyState===v&&("function"==typeof f&&f(a.origin),200<=(e=i.status)&&e<300||304===e?u.success(i.responseText,i):u.error(i.statusText,i))},l.b.getConfig("disableAjaxTimeout")||(i.ontimeout=function(){b.logError("  xhr timeout after ",i.timeout,"ms")}),"GET"===o&&n&&(p((c=b.parseUrl(e,r)).search,n),e=b.buildUrl(c)),i.open(o,e,!0),l.b.getConfig("disableAjaxTimeout")||(i.timeout=s),r.withCredentials&&(i.withCredentials=!0),b._each(r.customHeaders,function(e,t){i.setRequestHeader(t,e)}),r.preflight&&i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.setRequestHeader("Content-Type",r.contentType||"text/plain"),"function"==typeof d&&d(a.origin),"POST"===o&&n?i.send(n):i.send()}catch(e){b.logError("xhr construction",e)}}}},40:function(e,t,n){"use strict";t.a=function(r,e,t){if(!e||!r)return void o.logError("cannot load external script without url and moduleCode");if(!i()(c,e))return void o.logError("".concat(e," not whitelisted for loading external JavaScript"));if(a[r])return t&&"function"==typeof t&&(a[r].loaded?t():a[r].callbacks.push(t)),a[r].tag;a[r]={loaded:!1,tag:null,callbacks:[]},t&&"function"==typeof t&&a[r].callbacks.push(t);return o.logWarn("module ".concat(e," is loading external JavaScript")),function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,(a[r].tag=n).readyState?n.onreadystatechange=function(){"loaded"!==n.readyState&&"complete"!==n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()};return n.src=e,o.insertElement(n),n}(r,function(){a[r].loaded=!0;try{for(var e=0;e<a[r].callbacks.length;e++)a[r].callbacks[e]()}catch(e){o.logError("Error executing callback","adloader.js:loadExternalScript",e)}})};var r=n(12),i=n.n(r),o=n(0),a={},c=["criteo","outstream","adagio","browsi"]},41:function(e,t,n){"use strict";n.d(t,"b",function(){return L}),n.d(t,"a",function(){return F}),t.k=function(e){var t,i,b,v,o=e.adUnits,n=e.adUnitCodes,r=e.callback,a=e.cbTimeout,c=e.labels,u=e.auctionId,y=o,s=c,d=n,h=[],f=[],l=[],p=u||P.generateUUID(),g=r,m=a,S=[],A=new Set;function E(){return{auctionId:p,timestamp:t,auctionEnd:i,auctionStatus:b,adUnits:y,adUnitCodes:d,labels:s,bidderRequests:h,noBids:l,bidsReceived:f,winningBids:S,timeout:m}}function O(n,e){var r,t;e&&clearTimeout(v),void 0===i&&(r=[],n&&(P.logMessage("Auction ".concat(p," timedOut")),t=A,(r=h.map(function(e){return(e.bids||[]).filter(function(e){return!t.has(e.bidder)})}).reduce(j.flatten,[]).map(function(e){return{bidId:e.bidId,bidder:e.bidder,adUnitCode:e.adUnitCode,auctionId:e.auctionId}})).length&&q.emit(G.EVENTS.BID_TIMEOUT,r)),b=F,i=Date.now(),q.emit(G.EVENTS.AUCTION_END,E()),Q(y,function(){try{var e;null!=g&&(e=f.filter(P.bind.call(j.adUnitsFilter,this,d)).reduce(ee,{}),g.apply(pbjs,[e,n,p]),g=null)}catch(e){P.logError("Error executing bidsBackHandler",null,e)}finally{r.length&&M.callTimedOutBidders(o,r,m);var t=B.b.getConfig("userSync")||{};t.enableOverride||N(t.syncDelay)}}))}function T(){P.logInfo("Bids Received for Auction with id: ".concat(p),f),b=F,O(!1,!0)}function I(e){A.add(e)}function C(n){var f=this;n.forEach(function(e){var t;t=e,h=h.concat(t)});var l={},e={bidRequests:n,run:function(){var e,t;e=O.bind(null,!0),t=setTimeout(e,m),v=t,b=L,q.emit(G.EVENTS.AUCTION_INIT,E());var r,i,o,a,c,u,s=(r=T,i=f,o=0,a=!1,c=new Set,u={},{addBidResponse:function(e,t){u[t.requestId]=!0,o++;var n=function(e){var t=e.adUnitCode,n=e.bid,r=e.bidderRequest,i=e.auctionId,o=r.start,a=D({},n,{auctionId:i,responseTimestamp:Object(j.timestamp)(),requestTimestamp:o,cpm:parseFloat(n.cpm)||0,bidder:n.bidderCode,adUnitCode:t});a.timeToRespond=a.responseTimestamp-a.requestTimestamp,q.emit(G.EVENTS.BID_ADJUSTMENT,a);var c=r.bids&&U()(r.bids,function(e){return e.adUnitCode==t}),u=c&&c.renderer,s=a.mediaType,d=c&&c.mediaTypes&&c.mediaTypes[s],f=d&&d.renderer,l=null;!f||!f.url||!0===f.backupOnly&&f.render?!u||!u.url||!0===u.backupOnly&&n.renderer||(l=u):l=f,l&&(a.renderer=_.a.install({url:l.url}),a.renderer.setRender(l.render));var p=Z(n.mediaType,c,B.b.getConfig("mediaTypePriceGranularity")),g=Object(w.a)(a.cpm,"object"===k(p)?p:B.b.getConfig("customPriceBucket"),B.b.getConfig("currency.granularityMultiplier"));return a.pbLg=g.low,a.pbMg=g.med,a.pbHg=g.high,a.pbAg=g.auto,a.pbDg=g.dense,a.pbCg=g.custom,a}({adUnitCode:e,bid:t,bidderRequest:this,auctionId:i.getAuctionId()});"video"===n.mediaType?function(e,t,n,r){var i=!0,o=Object(j.getBidRequest)(t.requestId,[n]),a=o&&Object(j.deepAccess)(o,"mediaTypes.video"),c=a&&Object(j.deepAccess)(a,"context");B.b.getConfig("cache.url")&&c!==R.b&&(t.videoCacheKey?t.vastUrl||(P.logError("videoCacheKey specified but not required vastUrl for video bid"),i=!1):(i=!1,X(e,t,r,o))),i&&($(e,t),r())}(i,n,this,d):($(i,n),d())},adapterDone:function(){var t,e=i.getBidRequests(),n=B.b.getConfig("auctionOptions");c.add(this),!n||P.isEmpty(n)||(t=n.secondaryBidders)&&!e.every(function(e){return x()(t,e.bidderCode)})&&(e=e.filter(function(e){return!x()(t,e.bidderCode)})),a=e.every(function(e){return c.has(e)}),this.bids.forEach(function(e){u[e.bidId]||(i.addNoBid(e),q.emit(G.EVENTS.NO_BID,e))}),a&&0===o&&r()}});function d(){o--,a&&0===o&&r()}M.callBids(y,n,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];J.apply({dispatch:s.addBidResponse,bidderRequest:this},t)},s.adapterDone,{request:function(e,t){g(V,t),g(l,e),H[e]||(H[e]={SRA:!0,origin:t}),1<l[e]&&(H[e].SRA=!1)},done:function(e){V[e]--,K[0]&&p(K[0])&&K.shift()}},m,I)}};function p(e){var r=!0,i=B.b.getConfig("maxRequestsPerOrigin")||z;return e.bidRequests.some(function(e){var t=1,n=void 0!==e.src&&e.src===G.S2S.SRC?"s2s":e.bidderCode;return H[n]&&(!1===H[n].SRA&&(t=Math.min(e.bids.length,i)),V[H[n].origin]+t>i&&(r=!1)),!r}),r&&e.run(),r}function g(e,t){void 0===e[t]?e[t]=1:e[t]++}p(e)||(P.logWarn("queueing auction due to limited endpoint capacity"),K.push(e))}return{addBidReceived:function(e){f=f.concat(e)},addNoBid:function(e){l=l.concat(e)},executeCallback:O,callBids:function(){b=W,t=Date.now();var e=M.makeBidRequests(y,t,p,m,s);P.logInfo("Bids Requested for Auction with id: ".concat(p),e),e.length<1?(P.logWarn("No valid bid requests returned for auction"),T()):Y.call({dispatch:C,context:this},e)},addWinningBid:function(e){S=S.concat(e),M.callBidWonBidder(e.bidder,e,o)},setBidTargeting:function(e){M.callSetTargetingBidder(e.bidder,e)},getWinningBids:function(){return S},getTimeout:function(){return m},getAuctionId:function(){return p},getAuctionStatus:function(){return b},getAdUnits:function(){return y},getAdUnitCodes:function(){return d},getBidRequests:function(){return h},getBidsReceived:function(){return f},getNoBids:function(){return l}}},n.d(t,"c",function(){return J}),n.d(t,"e",function(){return Y}),t.g=d,t.d=$,n.d(t,"f",function(){return X}),n.d(t,"i",function(){return f}),n.d(t,"h",function(){return l}),t.j=g;var j=n(0),w=n(45),a=n(37),o=n(95),_=n(11),B=n(3),r=n(43),i=n(13),c=n(10),U=n.n(c),u=n(12),x=n.n(u),R=n(25),s=n(2);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var N=r.a.syncUsers,P=n(0),M=n(8).default,q=n(9),G=n(5),W="started",L="inProgress",F="completed";q.on(G.EVENTS.BID_ADJUSTMENT,function(e){!function(e){var t,n=e.bidderCode,r=e.cpm;if(pbjs.bidderSettings&&(n&&pbjs.bidderSettings[n]&&"function"==typeof pbjs.bidderSettings[n].bidCpmAdjustment?t=pbjs.bidderSettings[n].bidCpmAdjustment:pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD]&&"function"==typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment&&(t=pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment),t))try{r=t(e.cpm,D({},e))}catch(e){P.logError("Error during bid adjustment","bidmanager.js",e)}0<=r&&(e.cpm=r)}(e)});var z=4,V={},H={},K=[];var J=Object(i.b)("async",function(e,t){this.dispatch.call(this.bidderRequest,e,t)},"addBidResponse"),Y=Object(i.b)("sync",function(e){this.dispatch.call(this.context,e)},"addBidderRequests"),Q=Object(i.b)("async",function(e,t){t&&t()},"bidsBackCallback");function d(e,t){t.timeToRespond>e.getTimeout()+B.b.getConfig("timeoutBuffer")&&e.executeCallback(!0)}function $(e,t){var n=e.getBidRequests(),r=U()(n,function(e){return e.bidderCode===t.bidderCode});!function(t,e){var n;{var r;t.bidderCode&&(0<t.cpm||t.dealId)&&(r=U()(e.bids,function(e){return e.adUnitCode===t.adUnitCode}),n=function(e,t,n){if(!t)return{};var r={},i=pbjs.bidderSettings;{var o;i&&(o=g(t.mediaType,e,n),b(r,o,t),e&&i[e]&&i[e][G.JSON_MAPPING.ADSERVER_TARGETING]&&(b(r,i[e],t),t.sendStandardTargeting=i[e].sendStandardTargeting))}t.native&&(r=D({},r,Object(a.e)(t,n)));return r}(t.bidderCode,t,r))}t.adserverTargeting=D(t.adserverTargeting||{},n)}(t,r),q.emit(G.EVENTS.BID_RESPONSE,t),e.addBidReceived(t),d(e,t)}var X=Object(i.b)("async",function(n,r,i,e){Object(o.b)([r],function(e,t){e?(P.logWarn("Failed to save to the video cache: ".concat(e,". Video bid must be discarded.")),d(n,r)):""===t[0].uuid?(P.logWarn("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."),d(n,r)):(r.videoCacheKey=t[0].uuid,r.vastUrl||(r.vastUrl=Object(o.a)(r.videoCacheKey)),$(n,r),i())},e)},"callPrebidCache");function Z(e,t,n){if(e&&n){if(e===s.d){var r=Object(j.deepAccess)(t,"mediaTypes.".concat(s.d,".context"),"instream");if(n["".concat(s.d,"-").concat(r)])return n["".concat(s.d,"-").concat(r)]}return n[e]}}var f=function(e,t){var n=Z(e,t,B.b.getConfig("mediaTypePriceGranularity"));return"string"==typeof e&&n?"string"==typeof n?n:"custom":B.b.getConfig("priceGranularity")},l=function(t){return function(e){return t===G.GRANULARITY_OPTIONS.AUTO?e.pbAg:t===G.GRANULARITY_OPTIONS.DENSE?e.pbDg:t===G.GRANULARITY_OPTIONS.LOW?e.pbLg:t===G.GRANULARITY_OPTIONS.MEDIUM?e.pbMg:t===G.GRANULARITY_OPTIONS.HIGH?e.pbHg:t===G.GRANULARITY_OPTIONS.CUSTOM?e.pbCg:void 0}},p=function(){return function(e){return e.meta&&e.meta.advertiserDomains&&0<e.meta.advertiserDomains.length?e.meta.advertiserDomains[0]:""}};function g(e,t,n){function r(e,t){return{key:e,val:"function"==typeof t?function(e){return t(e)}:function(e){return Object(j.getValue)(e,t)}}}var i,o,a=G.TARGETING_KEYS,c=f(e,n),u=pbjs.bidderSettings;return u[G.JSON_MAPPING.BD_SETTING_STANDARD]||(u[G.JSON_MAPPING.BD_SETTING_STANDARD]={}),u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING]||(u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING]=[r(a.BIDDER,"bidderCode"),r(a.AD_ID,"adId"),r(a.PRICE_BUCKET,l(c)),r(a.SIZE,"size"),r(a.DEAL,"dealId"),r(a.SOURCE,"source"),r(a.FORMAT,"mediaType"),r(a.ADOMAIN,p())]),"video"===e&&(i=u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING],[a.UUID,a.CACHE_ID].forEach(function(t){void 0===U()(i,function(e){return e.key===t})&&i.push(r(t,"videoCacheKey"))}),!B.b.getConfig("cache.url")||t&&!1===P.deepAccess(u,"".concat(t,".sendStandardTargeting"))||(o=Object(j.parseUrl)(B.b.getConfig("cache.url")),void 0===U()(i,function(e){return e.key===a.CACHE_HOST})&&i.push(r(a.CACHE_HOST,function(e){return P.deepAccess(e,"adserverTargeting.".concat(a.CACHE_HOST))?e.adserverTargeting[a.CACHE_HOST]:o.hostname})))),u[G.JSON_MAPPING.BD_SETTING_STANDARD]}function b(r,i,o){var e=i[G.JSON_MAPPING.ADSERVER_TARGETING];return o.size=o.getSize(),P._each(e,function(e){var t=e.key,n=e.val;if(r[t]&&P.logWarn("The key: "+t+" is getting ovewritten"),P.isFn(n))try{n=n(o)}catch(e){P.logError("bidmanager","ERROR",e)}(void 0===i.suppressEmptyKeys||!0!==i.suppressEmptyKeys)&&t!==G.TARGETING_KEYS.DEAL||!P.isEmptyStr(n)&&null!=n?r[t]=n:P.logInfo("suppressing empty key '"+t+"' from adserver targeting")}),r}function ee(e,t){return e[t.adUnitCode]||(e[t.adUnitCode]={bids:[]}),e[t.adUnitCode].bids.push(t),e}},42:function(e,t){e.exports={}},43:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var a=n(0),r=n(3),i=n(12),o=n.n(i),c=n(7);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}r.b.setDefaults({userSync:a.deepClone({syncEnabled:!0,filterSettings:{image:{bidders:"*",filter:"include"}},syncsPerBidder:5,syncDelay:3e3,auctionDelay:0})});var f=Object(c.a)("usersync");var l,p,g,b,v,y,h,m=!a.isSafariBrowser()&&f.cookiesAreEnabled(),S=(l={config:r.b.getConfig("userSync"),browserSupportsCookies:m},p={},g=A(),b=new Set,y={image:!0,iframe:!(v={})},h=l.config,r.b.getConfig("userSync",function(e){var t;e.userSync&&(t=e.userSync.filterSettings,a.isPlainObject(t)&&(t.image||t.all||(e.userSync.filterSettings.image={bidders:"*",filter:"include"}))),h=d(h,e.userSync)}),p.registerSync=function(e,t,n){return b.has(t)?a.logMessage('already fired syncs for "'.concat(t,'", ignoring registerSync call')):h.syncEnabled&&a.isArray(g[e])?t?0!==h.syncsPerBidder&&Number(v[t])>=h.syncsPerBidder?a.logWarn('Number of user syncs exceeded for "'.concat(t,'"')):p.canBidderRegisterSync(e,t)?(g[e].push([t,n]),(r=v)[i=t]?r[i]+=1:r[i]=1,void(v=r)):a.logWarn('Bidder "'.concat(t,'" not permitted to register their "').concat(e,'" userSync pixels.')):a.logWarn("Bidder is required for registering sync"):a.logWarn('User sync type "'.concat(e,'" not supported'));var r,i},p.syncUsers=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;if(e)return setTimeout(E,Number(e));E()},p.triggerUserSyncs=function(){h.enableOverride&&p.syncUsers()},p.canBidderRegisterSync=function(e,t){return!h.filterSettings||!T(e,t)},p);function A(){return{image:[],iframe:[]}}function E(){if(h.syncEnabled&&l.browserSupportsCookies){try{!function(){if(!y.image)return;O(g.image,function(e){var t=u(e,2),n=t[0],r=t[1];a.logMessage("Invoking image pixel user sync for bidder: ".concat(n)),a.triggerPixel(r)})}(),function(){if(!y.iframe)return;O(g.iframe,function(e){var t=u(e,2),n=t[0],r=t[1];a.logMessage("Invoking iframe user sync for bidder: ".concat(n)),a.insertUserSyncIframe(r)})}()}catch(e){return a.logError("Error firing user syncs",e)}g=A()}}function O(e,t){a.shuffle(e).forEach(function(e){t(e),b.add(e[0])})}function T(e,t){var n=h.filterSettings;if(function(e,t){if(e.all&&e[t])return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t,'" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')),!1;var n=e.all?e.all:e[t],r=e.all?"all":t;if(!n)return!1;var i=n.filter,o=n.bidders;if(i&&"include"!==i&&"exclude"!==i)return a.logWarn('UserSync "filterSettings.'.concat(r,".filter\" setting '").concat(i,"' is not a valid option; use either 'include' or 'exclude'.")),!1;return!!("*"===o||Array.isArray(o)&&0<o.length&&o.every(function(e){return a.isStr(e)&&"*"!==e}))||(a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r,".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")),!1)}(n,e)){y[e]=!0;var r=n.all?n.all:n[e],i="*"===r.bidders?[t]:r.bidders;return{include:function(e,t){return!o()(e,t)},exclude:function(e,t){return o()(e,t)}}[r.filter||"include"](i,t)}}},44:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var A=n(0),E=n(3),O=n(37),r=n(23),i=n(93),o=n(2),a=n(12),T=n.n(a),c=n(10),I=n.n(c);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=n(0),B=n(5),U=[],x=Object.keys(B.TARGETING_KEYS).map(function(e){return B.TARGETING_KEYS[e]}),s=function(e){return e.responseTimestamp+1e3*e.ttl-1e3>Object(A.timestamp)()},d=function(e){return e&&(e.status&&!T()([B.BID_STATUS.RENDERED],e.status)||!e.status)};function R(e,r,t){var i=2<arguments.length&&void 0!==t?t:0,o=[],a=E.b.getConfig("sendBidsControl.dealPrioritization"),c=Object(A.groupBy)(e,"adUnitCode");return Object.keys(c).forEach(function(e){var t=[],n=Object(A.groupBy)(c[e],"bidderCode");Object.keys(n).forEach(function(e){return t.push(n[e].reduce(r))}),0<i?(t=a?t.sort(k(!0)):t.sort(function(e,t){return t.cpm-e.cpm}),o.push.apply(o,w(t.slice(0,i)))):o.push.apply(o,w(t))}),o}function k(e){var n=0<arguments.length&&void 0!==e&&e;return function(e,t){return void 0!==e.adserverTargeting.hb_deal&&void 0===t.adserverTargeting.hb_deal?-1:void 0===e.adserverTargeting.hb_deal&&void 0!==t.adserverTargeting.hb_deal?1:n?t.cpm-e.cpm:t.adserverTargeting.hb_pb-e.adserverTargeting.hb_pb}}var D,N,f,l=(D=r.a,f={},(N={}).setLatestAuctionForAdUnit=function(e,t){f[e]=t},N.resetPresetTargeting=function(e,t){var n,i;Object(A.isGptPubadsDefined)()&&(n=M(e),i=D.getAdUnits().filter(function(e){return T()(n,e.code)}),window.googletag.pubads().getSlots().forEach(function(n){var r=_.isFn(t)&&t(n);U.forEach(function(t){i.forEach(function(e){(e.code===n.getAdUnitPath()||e.code===n.getSlotElementId()||_.isFn(r)&&r(e.code))&&n.setTargeting(t,null)})})}))},N.resetPresetTargetingAST=function(e){M(e).forEach(function(e){var t,n,r=window.apntag.getTag(e);r&&r.keywords&&(t=Object.keys(r.keywords),n={},t.forEach(function(e){T()(U,e.toLowerCase())||(n[e]=r.keywords[e])}),window.apntag.modifyTag(e,{keywords:n}))})},N.getAllTargeting=function(e){var t,n,r,i,o,a,c,u,s,d,f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:q(),l=M(e),p=(c=l,u=f,s=N.getWinningBids(c,u),d=G(),(s=s.map(function(o){return j({},o.adUnitCode,Object.keys(o.adserverTargeting).filter(function(e){return void 0===o.sendStandardTargeting||o.sendStandardTargeting||-1===d.indexOf(e)}).reduce(function(e,t){var n=[o.adserverTargeting[t]],r=j({},t.substring(0,20),n);if(t!==B.TARGETING_KEYS.DEAL)return[].concat(w(e),[r]);var i=j({},"".concat(t,"_").concat(o.bidderCode).substring(0,20),n);return[].concat(w(e),[r,i])},[]))})).concat((a=l,f.filter(function(e){return T()(a,e.adUnitCode)}).map(function(e){return C({},e)}).reduce(W,[]).map(L).filter(function(e){return e}))).concat(E.b.getConfig("enableSendAllBids")?(n=l,r=f,i=x.concat(O.a),o=E.b.getConfig("sendBidsControl.bidLimit"),R(r,A.getHighestCpm,o).map(function(t){if(P(t,n))return j({},t.adUnitCode,F(t,i.filter(function(e){return void 0!==t.adserverTargeting[e]})))}).filter(function(e){return e})):function(e,t){if(!0!==E.b.getConfig("targetingControls.alwaysIncludeDeals"))return[];var n=x.concat(O.a);return R(t,A.getHighestCpm).map(function(t){if(t.dealId&&P(t,e))return j({},t.adUnitCode,F(t,n.filter(function(e){return void 0!==t.adserverTargeting[e]})))}).filter(function(e){return e})}(l,f)).concat((t=l,D.getAdUnits().filter(function(e){return T()(t,e.code)&&g(e)}).map(function(e){return j({},e.code,(t=g(e),Object.keys(t).map(function(e){return j({},e,_.isArray(t[e])?t[e]:t[e].split(","))})));var t}))));function g(e){return Object(A.deepAccess)(e,B.JSON_MAPPING.ADSERVER_TARGETING)}p.map(function(t){Object.keys(t).map(function(e){t[e].map(function(e){-1===U.indexOf(Object.keys(e)[0])&&(U=Object.keys(e).concat(U))})})});var b=Object.keys(C({},B.DEFAULT_TARGETING_KEYS,B.NATIVE_KEYS)),v=E.b.getConfig("targetingControls.allowTargetingKeys")||b;Array.isArray(v)&&0<v.length&&(p=function(e,r){var i=C({},B.TARGETING_KEYS,B.NATIVE_KEYS),o=Object.keys(i),a={};Object(A.logInfo)("allowTargetingKeys - allowed keys [ ".concat(r.map(function(e){return i[e]}).join(", ")," ]")),e.map(function(e){var t=Object.keys(e)[0],n=e[t].filter(function(e){var n=Object.keys(e)[0],t=0===o.filter(function(e){return 0===n.indexOf(i[e])}).length||I()(r,function(e){var t=i[e];return 0===n.indexOf(t)});return a[n]=!t,t});e[t]=n});var t=Object.keys(a).filter(function(e){return a[e]});return Object(A.logInfo)("allowTargetingKeys - removed keys [ ".concat(t.join(", ")," ]")),e.filter(function(e){return 0<e[Object.keys(e)[0]].length})}(p,v)),p=p.map(function(e){return j({},Object.keys(e)[0],e[Object.keys(e)[0]].map(function(e){return j({},Object.keys(e)[0],e[Object.keys(e)[0]].join(", "))}).reduce(function(e,t){return C(t,e)},{}))}).reduce(function(e,t){var n=Object.keys(t)[0];return e[n]=C({},e[n],t[n]),e},{});var y,h,m,S=E.b.getConfig("targetingControls.auctionKeyMaxChars");return S&&(Object(A.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(S," characters.  Running checks on auction keys...")),y=p,h=S,m=Object(A.deepClone)(y),p=Object.keys(m).map(function(e){return{adUnitCode:e,adserverTargeting:m[e]}}).sort(k()).reduce(function(e,t,n,r){var i,o=(i=t.adserverTargeting,Object.keys(i).reduce(function(e,t){return e+"".concat(t,"%3d").concat(encodeURIComponent(i[t]),"%26")},""));n+1===r.length&&(o=o.slice(0,-3));var a=t.adUnitCode,c=o.length;return c<=h?(h-=c,Object(A.logInfo)("AdUnit '".concat(a,"' auction keys comprised of ").concat(c," characters.  Deducted from running threshold; new limit is ").concat(h),m[a]),e[a]=m[a]):Object(A.logWarn)("The following keys for adUnitCode '".concat(a,"' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(c,", the current allotted amount was ").concat(h,".\n"),m[a]),n+1===r.length&&0===Object.keys(e).length&&Object(A.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."),e},{})),l.forEach(function(e){p[e]||(p[e]={})}),p},N.setTargetingForGPT=function(i,e){window.googletag.pubads().getSlots().forEach(function(r){Object.keys(i).filter((e||Object(A.isAdUnitCodeMatchingSlot))(r)).forEach(function(n){return Object.keys(i[n]).forEach(function(t){var e=i[n][t];"string"==typeof e&&(e=e.split(",")),(e=1<e.length?[e]:e).map(function(e){return _.logMessage("Attempting to set key value for slot: ".concat(r.getSlotElementId()," key: ").concat(t," value: ").concat(e)),e}).forEach(function(e){r.setTargeting(t,e)})})})})},N.getWinningBids=function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:q(),t=M(e);return n.filter(function(e){return T()(t,e.adUnitCode)}).filter(function(e){return 0<e.cpm}).map(function(e){return e.adUnitCode}).filter(A.uniques).map(function(t){return n.filter(function(e){return e.adUnitCode===t?e:null}).reduce(A.getHighestCpm)})},N.setTargetingForAst=function(e){var r=N.getAllTargeting(e);try{N.resetPresetTargetingAST(e)}catch(e){_.logError("unable to reset targeting for AST"+e)}Object.keys(r).forEach(function(n){return Object.keys(r[n]).forEach(function(e){var t;_.logMessage("Attempting to set targeting for targetId: ".concat(n," key: ").concat(e," value: ").concat(r[n][e])),(_.isStr(r[n][e])||_.isArray(r[n][e]))&&(t={},e.search(/pt[0-9]/)<0?t[e.toUpperCase()]=r[n][e]:t[e]=r[n][e],window.apntag.setKeywords(n,t,{overrideKeyValue:!0}))})})},N.isApntagDefined=function(){if(window.apntag&&_.isFn(window.apntag.setKeywords))return!0},N);function P(e,t){return e.adserverTargeting&&t&&(_.isArray(t)&&T()(t,e.adUnitCode)||"string"==typeof t&&e.adUnitCode===t)}function M(e){return"string"==typeof e?[e]:_.isArray(e)?e:D.getAdUnitCodes()||[]}function q(){var e=D.getBidsReceived();return E.b.getConfig("useBidCache")||(e=e.filter(function(e){return f[e.adUnitCode]===e.auctionId})),R(e=e.filter(function(e){return Object(A.deepAccess)(e,"video.context")!==o.a}).filter(function(e){return"banner"!==e.mediaType||Object(i.c)([e.width,e.height])}).filter(d).filter(s),A.getOldestHighestCpmBid)}function G(){return D.getStandardBidderAdServerTargeting().map(function(e){return e.key}).concat(x).filter(A.uniques)}function W(r,i,e,t){return Object.keys(i.adserverTargeting).filter(p()).forEach(function(e){var t,n;r.length&&r.filter((n=e,function(e){return e.adUnitCode===i.adUnitCode&&e.adserverTargeting[n]})).forEach((t=e,function(e){_.isArray(e.adserverTargeting[t])||(e.adserverTargeting[t]=[e.adserverTargeting[t]]),e.adserverTargeting[t]=e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(A.uniques),delete i.adserverTargeting[t]}))}),r.push(i),r}function p(){var t=G().concat(O.a);return function(e){return-1===t.indexOf(e)}}function L(t){return j({},t.adUnitCode,Object.keys(t.adserverTargeting).filter(p()).map(function(e){return j({},e.substring(0,20),[t.adserverTargeting[e]])}))}function F(t,e){return e.map(function(e){return j({},"".concat(e,"_").concat(t.bidderCode).substring(0,20),[t.adserverTargeting[e]])})}},45:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return h});var r=n(10),v=n.n(r),i=n(0),y=2,o={buckets:[{max:5,increment:.5}]},a={buckets:[{max:20,increment:.1}]},c={buckets:[{max:20,increment:.01}]},u={buckets:[{max:3,increment:.01},{max:8,increment:.05},{max:20,increment:.5}]},s={buckets:[{max:5,increment:.05},{max:10,increment:.1},{max:20,increment:.5}]};function d(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1,r=parseFloat(e);return isNaN(r)&&(r=""),{low:""===r?"":f(e,o,n),med:""===r?"":f(e,a,n),high:""===r?"":f(e,c,n),auto:""===r?"":f(e,s,n),dense:""===r?"":f(e,u,n),custom:""===r?"":f(e,t,n)}}function f(n,e,r){var i="";if(!h(e))return i;var t,o,a,c,u,s,d,f,l,p=e.buckets.reduce(function(e,t){return e.max>t.max?e:t},{max:0}),g=0,b=v()(e.buckets,function(e){if(n>p.max*r){var t=e.precision;void 0===t&&(t=y),i=(e.max*r).toFixed(t)}else{if(n<=e.max*r&&g*r<=n)return e.min=g,e;g=e.max}});return b&&(t=n,a=r,c=void 0!==(o=b).precision?o.precision:y,u=o.increment*a,s=o.min*a,d=Math.pow(10,c+2),f=(t*d-s*d)/(u*d),l=Math.floor(f)*u+s,i=(l=Number(l.toFixed(10))).toFixed(c)),i}function h(e){if(i.isEmpty(e)||!e.buckets||!Array.isArray(e.buckets))return!1;var t=!0;return e.buckets.forEach(function(e){e.max&&e.increment||(t=!1)}),t}},46:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},47:function(e,t,n){var r=n(72),i=n(49);e.exports=function(e){return r(i(e))}},48:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},49:function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},5:function(e,t){e.exports={JSON_MAPPING:{PL_CODE:"code",PL_SIZE:"sizes",PL_BIDS:"bids",BD_BIDDER:"bidder",BD_ID:"paramsd",BD_PL_ID:"placementId",ADSERVER_TARGETING:"adserverTargeting",BD_SETTING_STANDARD:"standard"},DEBUG_MODE:"pbjs_debug",STATUS:{GOOD:1,NO_BID:2},CB:{TYPE:{ALL_BIDS_BACK:"allRequestedBidsBack",AD_UNIT_BIDS_BACK:"adUnitBidsBack",BID_WON:"bidWon",REQUEST_BIDS:"requestBids"}},EVENTS:{AUCTION_INIT:"auctionInit",AUCTION_END:"auctionEnd",BID_ADJUSTMENT:"bidAdjustment",BID_TIMEOUT:"bidTimeout",BID_REQUESTED:"bidRequested",BID_RESPONSE:"bidResponse",NO_BID:"noBid",BID_WON:"bidWon",BIDDER_DONE:"bidderDone",SET_TARGETING:"setTargeting",BEFORE_REQUEST_BIDS:"beforeRequestBids",REQUEST_BIDS:"requestBids",ADD_AD_UNITS:"addAdUnits",AD_RENDER_FAILED:"adRenderFailed",TCF2_ENFORCEMENT:"tcf2Enforcement",AUCTION_DEBUG:"auctionDebug",BID_VIEWABLE:"bidViewable"},AD_RENDER_FAILED_REASON:{PREVENT_WRITING_ON_MAIN_DOCUMENT:"preventWritingOnMainDocument",NO_AD:"noAd",EXCEPTION:"exception",CANNOT_FIND_AD:"cannotFindAd",MISSING_DOC_OR_ADID:"missingDocOrAdid"},EVENT_ID_PATHS:{bidWon:"adUnitCode"},GRANULARITY_OPTIONS:{LOW:"low",MEDIUM:"medium",HIGH:"high",AUTO:"auto",DENSE:"dense",CUSTOM:"custom"},TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host",ADOMAIN:"hb_adomain"},DEFAULT_TARGETING_KEYS:{BIDDER:"hb_bidder",AD_ID:"hb_adid",PRICE_BUCKET:"hb_pb",SIZE:"hb_size",DEAL:"hb_deal",SOURCE:"hb_source",FORMAT:"hb_format",UUID:"hb_uuid",CACHE_ID:"hb_cache_id",CACHE_HOST:"hb_cache_host"},NATIVE_KEYS:{title:"hb_native_title",body:"hb_native_body",body2:"hb_native_body2",privacyLink:"hb_native_privacy",privacyIcon:"hb_native_privicon",sponsoredBy:"hb_native_brand",image:"hb_native_image",icon:"hb_native_icon",clickUrl:"hb_native_linkurl",displayUrl:"hb_native_displayurl",cta:"hb_native_cta",rating:"hb_native_rating",address:"hb_native_address",downloads:"hb_native_downloads",likes:"hb_native_likes",phone:"hb_native_phone",price:"hb_native_price",salePrice:"hb_native_saleprice",rendererUrl:"hb_renderer_url",adTemplate:"hb_adTemplate"},S2S:{SRC:"s2s",DEFAULT_ENDPOINT:"https://prebid.adnxs.com/pbs/v1/openrtb2/auction",SYNCED_BIDDERS_KEY:"pbjsSyncs"},BID_STATUS:{BID_TARGETING_SET:"targetingSet",RENDERED:"rendered",BID_REJECTED:"bidRejected"}}},50:function(e,t,n){var r=n(58),i=Math.min;e.exports=function(e){return 0<e?i(r(e),9007199254740991):0}},51:function(e,t){e.exports=function(){}},519:function(e,t,n){var r=n(520);e.exports=r},52:function(e,t,n){var r=n(29);e.exports=r},520:function(e,t,n){n(521);var r=n(42);e.exports=r.Number.isInteger},521:function(e,t,n){n(14)({target:"Number",stat:!0},{isInteger:n(522)})},522:function(e,t,n){var r=n(27),i=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&i(e)===e}},53:function(e,t){e.exports={}},54:function(e,t,n){var r,i,o,a,c,u,s,d,f=n(115),l=n(26),p=n(27),g=n(32),b=n(28),v=n(65),y=n(53),h=l.WeakMap;s=f?(r=new h,i=r.get,o=r.has,a=r.set,c=function(e,t){return a.call(r,e,t),t},u=function(e){return i.call(r,e)||{}},function(e){return o.call(r,e)}):(y[d=v("state")]=!0,c=function(e,t){return g(e,d,t),t},u=function(e){return b(e,d)?e[d]:{}},function(e){return b(e,d)}),e.exports={set:c,get:u,has:s,enforce:function(e){return s(e)?u(e):c(e,{})},getterFor:function(n){return function(e){var t;if(!p(e)||(t=u(e)).type!==n)throw TypeError("Incompatible receiver, "+n+" required");return t}}}},55:function(e,t,n){var i=n(27);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},56:function(e,t,n){function r(p){var g=1==p,b=2==p,v=3==p,y=4==p,h=6==p,m=5==p||h;return function(e,t,n,r){for(var i,o,a=E(e),c=A(a),u=S(t,n,3),s=O(c.length),d=0,f=r||T,l=g?f(e,s):b?f(e,0):void 0;d<s;d++)if((m||d in c)&&(o=u(i=c[d],d,a),p))if(g)l[d]=o;else if(o)switch(p){case 3:return!0;case 5:return i;case 6:return d;case 2:I.call(l,i)}else if(y)return!1;return h?-1:v||y?y:l}}var S=n(24),A=n(72),E=n(57),O=n(50),T=n(103),I=[].push;e.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},57:function(e,t,n){var r=n(49);e.exports=function(e){return Object(r(e))}},58:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},59:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},60:function(e,t,n){function a(e){throw e}var c=n(30),u=n(31),s=n(28),d=Object.defineProperty,f={};e.exports=function(e,t){if(s(f,e))return f[e];var n=[][e],r=!!s(t=t||{},"ACCESSORS")&&t.ACCESSORS,i=s(t,0)?t[0]:a,o=s(t,1)?t[1]:void 0;return f[e]=!!n&&!u(function(){if(r&&!c)return!0;var e={length:-1};r?d(e,1,{enumerable:!0,get:a}):e[1]=1,n.call(e,i,o)})}},61:function(e,t,n){var r=n(62),i=n(38),o=n(21)("iterator");e.exports=function(e){if(null!=e)return e[o]||e["@@iterator"]||i[r(e)]}},62:function(e,t,n){var r=n(63),i=n(48),o=n(21)("toStringTag"),a="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),o))?n:a?i(t):"Object"==(r=i(t))&&"function"==typeof t.callee?"Arguments":r}},63:function(e,t,n){var r={};r[n(21)("toStringTag")]="z",e.exports="[object z]"===String(r)},64:function(e,t,n){var o=n(63),a=n(33).f,c=n(32),u=n(28),s=n(114),d=n(21)("toStringTag");e.exports=function(e,t,n,r){var i;e&&(i=n?e:e.prototype,u(i,d)||a(i,d,{configurable:!0,value:t}),r&&!o&&c(i,"toString",s))}},65:function(e,t,n){var r=n(75),i=n(59),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},66:function(e,t,n){"use strict";function y(){return this}var h=n(14),m=n(123),S=n(88),A=n(125),E=n(64),O=n(32),T=n(86),r=n(21),I=n(16),C=n(38),i=n(87),j=i.IteratorPrototype,w=i.BUGGY_SAFARI_ITERATORS,_=r("iterator"),B="values",U="entries";e.exports=function(e,t,n,r,i,o,a){m(n,t,r);function c(e){if(e===i&&b)return b;if(!w&&e in p)return p[e];switch(e){case"keys":case B:case U:return function(){return new n(this,e)}}return function(){return new n(this)}}var u,s,d,f=t+" Iterator",l=!1,p=e.prototype,g=p[_]||p["@@iterator"]||i&&p[i],b=!w&&g||c(i),v="Array"==t&&p.entries||g;if(v&&(u=S(v.call(new e)),j!==Object.prototype&&u.next&&(I||S(u)===j||(A?A(u,j):"function"!=typeof u[_]&&O(u,_,y)),E(u,f,!0,!0),I&&(C[f]=y))),i==B&&g&&g.name!==B&&(l=!0,b=function(){return g.call(this)}),I&&!a||p[_]===b||O(p,_,b),C[t]=b,i)if(s={values:c(B),keys:o?b:c("keys"),entries:c(U)},a)for(d in s)!w&&!l&&d in p||T(p,d,s[d]);else h({target:t,proto:!0,forced:w||l},s);return s}},67:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0),c={};function i(e,t,n){var r,i,o,a=(i=n,o=c[r=e]=c[r]||{bidders:{}},i?o.bidders[i]=o.bidders[i]||{}:o);return a[t]=(a[t]||0)+1,a[t]}var o={incrementRequestsCounter:function(e){return i(e,"requestsCounter")},incrementBidderRequestsCounter:function(e,t){return i(e,"requestsCounter",t)},incrementBidderWinsCounter:function(e,t){return i(e,"winsCounter",t)},getRequestsCounter:function(e){return Object(r.deepAccess)(c,"".concat(e,".requestsCounter"))||0},getBidderRequestsCounter:function(e,t){return Object(r.deepAccess)(c,"".concat(e,".bidders.").concat(t,".requestsCounter"))||0},getBidderWinsCounter:function(e,t){return Object(r.deepAccess)(c,"".concat(e,".bidders.").concat(t,".winsCounter"))||0}}},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"adUnitSetupChecks",function(){return H}),n.d(t,"checkAdUnitSetup",function(){return K}),t.executeCallbacks=Q;var r=n(18),i=n(0),o=n(230),a=n(43),l=n(3),m=n(23),p=n(44),c=n(13),u=n(231),s=n(12),g=n.n(s),b=n(67),S=n(11),d=n(34),f=n(7);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=Object(r.a)(),O=n(5),T=n(0),I=n(8).default,C=n(9),j=a.a.triggerUserSyncs,w=O.EVENTS,_=w.ADD_AD_UNITS,B=w.BID_WON,U=w.REQUEST_BIDS,x=w.SET_TARGETING,R=w.AD_RENDER_FAILED,k=O.AD_RENDER_FAILED_REASON,D=k.PREVENT_WRITING_ON_MAIN_DOCUMENT,N=k.NO_AD,P=k.EXCEPTION,M=k.CANNOT_FIND_AD,q=k.MISSING_DOC_OR_ADID,G={bidWon:function(e){var t=m.a.getBidsRequested().map(function(e){return e.bids.map(function(e){return e.adUnitCode})}).reduce(i.flatten).filter(i.uniques);return!!T.contains(t,e)||void T.logError('The "'+e+'" placement is not defined.')}};function W(e,t,n){e.defaultView&&e.defaultView.frameElement&&(e.defaultView.frameElement.width=t,e.defaultView.frameElement.height=n)}function L(e,t){var n=[];return T.isArray(e)&&(t?e.length===t:0<e.length)&&(e.every(function(e){return Object(i.isArrayOfNums)(e,2)})?n=e:Object(i.isArrayOfNums)(e,2)&&n.push(e)),n}function F(e){var t=T.deepClone(e),n=t.mediaTypes.banner,r=L(n.sizes);return 0<r.length?(n.sizes=r,t.sizes=r):(T.logError("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."),delete t.mediaTypes.banner),t}function z(e){var t,n,r=T.deepClone(e),i=r.mediaTypes.video;return i.playerSize&&(t="number"==typeof i.playerSize[0]?2:1,0<(n=L(i.playerSize,t)).length?(2==t&&T.logInfo("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."),i.playerSize=n,r.sizes=n):(T.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."),delete r.mediaTypes.video.playerSize)),r}function V(e){var t=T.deepClone(e),n=t.mediaTypes.native;return n.image&&n.image.sizes&&!Array.isArray(n.image.sizes)&&(T.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."),delete t.mediaTypes.native.image.sizes),n.image&&n.image.aspect_ratios&&!Array.isArray(n.image.aspect_ratios)&&(T.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."),delete t.mediaTypes.native.image.aspect_ratios),n.icon&&n.icon.sizes&&!Array.isArray(n.icon.sizes)&&(T.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."),delete t.mediaTypes.native.icon.sizes),t}Object(u.a)(),E.bidderSettings=E.bidderSettings||{},E.libLoaded=!0,E.version="v4.27.0-pre",T.logInfo("Prebid.js v4.27.0-pre loaded"),E.adUnits=E.adUnits||[],E.triggerUserSyncs=j;var H={validateBannerMediaType:F,validateVideoMediaType:z,validateNativeMediaType:V,validateSizes:L},K=Object(c.b)("sync",function(e){var c=[];return e.forEach(function(e){var t,n,r,i,o=e.mediaTypes,a=e.bids;a&&T.isArray(a)?o&&0!==Object.keys(o).length?(o.banner&&(t=F(e)),o.video&&(n=z(t||e)),o.native&&(r=V(n||(t||e))),i=A({},t,n,r),c.push(i)):T.logError("Detected adUnit.code '".concat(e.code,"' did not have a 'mediaTypes' object defined.  This is a required field for the auction, so this adUnit has been removed.")):T.logError("Detected adUnit.code '".concat(e.code,"' did not have 'adUnit.bids' defined or 'adUnit.bids' is not an array. Removing adUnit from auction."))}),c},"checkAdUnitSetup");function J(e){var n=m.a[e]().filter(T.bind.call(i.adUnitsFilter,this,m.a.getAdUnitCodes())),r=m.a.getLastAuctionId();return n.map(function(e){return e.adUnitCode}).filter(i.uniques).map(function(t){return n.filter(function(e){return e.auctionId===r&&e.adUnitCode===t})}).filter(function(e){return e&&e[0]&&e[0].adUnitCode}).map(function(e){return t={},n=e[0].adUnitCode,r={bids:e},n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t;var t,n,r}).reduce(function(e,t){return A(e,t)},{})}function Y(e){var t=e.reason,n=e.message,r=e.bid,i=e.id,o={reason:t,message:n};r&&(o.bid=r),i&&(o.adId=i),T.logError(n),C.emit(R,o)}function Q(e,t){function n(e){for(var t;t=e.shift();)t()}n(f.c),n($),e.call(this,t)}E.getAdserverTargetingForAdUnitCodeStr=function(e){if(T.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr",arguments),e){var t=E.getAdserverTargetingForAdUnitCode(e);return T.transformAdServerTargetingObj(t)}T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")},E.getAdserverTargetingForAdUnitCode=function(e){return E.getAdserverTargeting(e)[e]},E.getAdserverTargeting=function(e){return T.logInfo("Invoking pbjs.getAdserverTargeting",arguments),p.a.getAllTargeting(e)},E.getNoBids=function(){return T.logInfo("Invoking pbjs.getNoBids",arguments),J("getNoBids")},E.getNoBidsForAdUnitCode=function(t){return{bids:m.a.getNoBids().filter(function(e){return e.adUnitCode===t})}},E.getBidResponses=function(){return T.logInfo("Invoking pbjs.getBidResponses",arguments),J("getBidsReceived")},E.getBidResponsesForAdUnitCode=function(t){return{bids:m.a.getBidsReceived().filter(function(e){return e.adUnitCode===t})}},E.setTargetingForGPTAsync=function(e,t){var n;T.logInfo("Invoking pbjs.setTargetingForGPTAsync",arguments),Object(i.isGptPubadsDefined)()?(n=p.a.getAllTargeting(e),p.a.resetPresetTargeting(e,t),p.a.setTargetingForGPT(n,t),Object.keys(n).forEach(function(t){Object.keys(n[t]).forEach(function(e){"hb_adid"===e&&m.a.setStatusForBids(n[t][e],O.BID_STATUS.BID_TARGETING_SET)})}),C.emit(x,n)):T.logError("window.googletag is not defined on the page")},E.setTargetingForAst=function(e){T.logInfo("Invoking pbjs.setTargetingForAn",arguments),p.a.isApntagDefined()?(p.a.setTargetingForAst(e),C.emit(x,p.a.getAllTargeting())):T.logError("window.apntag is not defined on the page")},E.renderAd=function(e,t,n){if(T.logInfo("Invoking pbjs.renderAd",arguments),T.logMessage("Calling renderAd with adId :"+t),e&&t)try{var r,i,o,a,c,u,s,d,f,l,p,g,b,v=m.a.findBidByAdId(t);v?(v.ad=T.replaceAuctionPrice(v.ad,v.cpm),v.adUrl=T.replaceAuctionPrice(v.adUrl,v.cpm),n&&n.clickThrough&&(r=n.clickThrough,v.ad=T.replaceClickThrough(v.ad,r),v.adUrl=T.replaceClickThrough(v.adUrl,r)),m.a.addWinningBid(v),C.emit(B,v),i=v.height,o=v.width,a=v.ad,c=v.mediaType,u=v.adUrl,s=v.renderer,d=document.createComment("Creative ".concat(v.creativeId," served by ").concat(v.bidder," Prebid.js Header Bidding")),T.insertElement(d,e,"body"),Object(S.c)(s)?Object(S.b)(s,v):e===document&&!T.inIframe()||"video"===c?(f="Error trying to write ad. Ad render call ad id ".concat(t," was prevented from writing to the main document."),Y({reason:D,message:f,bid:v,id:t})):a?(navigator.userAgent&&-1<navigator.userAgent.toLowerCase().indexOf("firefox/")&&((l=navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1])&&parseInt(l,10)<67&&e.open("text/html","replace")),e.write(a),e.close(),W(e,o,i),T.callBurl(v)):u?((p=T.createInvisibleIframe()).height=i,p.width=o,p.style.display="inline",p.style.overflow="hidden",p.src=u,T.insertElement(p,e,"body"),W(e,o,i),T.callBurl(v)):(g="Error trying to write ad. No ad for bid response id: ".concat(t),Y({reason:N,message:g,bid:v,id:t}))):(b="Error trying to write ad. Cannot find ad by given id : ".concat(t),Y({reason:M,message:b,id:t}))}catch(e){var y="Error trying to write ad Id :".concat(t," to the page:").concat(e.message);Y({reason:P,message:y,id:t})}else{var h="Error trying to write ad Id :".concat(t," to the page. Missing document or adId");Y({reason:q,message:h,id:t})}},E.removeAdUnit=function(e){T.logInfo("Invoking pbjs.removeAdUnit",arguments),e?(T.isArray(e)?e:[e]).forEach(function(e){for(var t=E.adUnits.length-1;0<=t;t--)E.adUnits[t].code===e&&E.adUnits.splice(t,1)}):E.adUnits=[]},E.requestBids=Object(c.b)("async",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.bidsBackHandler,n=e.timeout,r=e.adUnits,i=e.adUnitCodes,o=e.labels,a=e.auctionId;C.emit(U);var c=n||l.b.getConfig("bidderTimeout"),r=r||E.adUnits;T.logInfo("Invoking pbjs.requestBids",arguments);var u=[],s=[];if(l.b.getConfig("s2sConfig",function(e){e&&e.s2sConfig&&(u=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])}),u.forEach(function(e){s.push.apply(s,y(e.bidders))}),r=K(r),i&&i.length?r=r.filter(function(e){return g()(i,e.code)}):i=r&&r.map(function(e){return e.code}),r.forEach(function(i){var o=Object.keys(i.mediaTypes||{banner:"banner"}),e=i.bids.map(function(e){return e.bidder}),a=I.bidderRegistry,t=s?e.filter(function(e){return!g()(s,e)}):e;i.transactionId=T.generateUUID(),t.forEach(function(t){var e=a[t],n=e&&e.getSpec&&e.getSpec(),r=n&&n.supportedMediaTypes||["banner"];o.some(function(e){return g()(r,e)})?b.a.incrementBidderRequestsCounter(i.code,t):(T.logWarn(T.unsupportedBidderMessage(i,t)),i.bids=i.bids.filter(function(e){return e.bidder!==t}))}),b.a.incrementRequestsCounter(i.code)}),r&&0!==r.length){var d=m.a.createAuction({adUnits:r,adUnitCodes:i,callback:t,cbTimeout:c,labels:o,auctionId:a}),f=r.length;15<f&&T.logInfo("Current auction ".concat(d.getAuctionId()," contains ").concat(f," adUnits."),r),i.forEach(function(e){return p.a.setLatestAuctionForAdUnit(e,d.getAuctionId())}),d.callBids()}else if(T.logMessage("No adUnits configured. No bids requested."),"function"==typeof t)try{t()}catch(e){T.logError("Error executing bidsBackHandler",null,e)}}),E.requestBids.before(Q,49),E.addAdUnits=function(e){T.logInfo("Invoking pbjs.addAdUnits",arguments),T.isArray(e)?E.adUnits.push.apply(E.adUnits,e):"object"===v(e)&&E.adUnits.push(e),C.emit(_)},E.onEvent=function(e,t,n){T.logInfo("Invoking pbjs.onEvent",arguments),T.isFn(t)?!n||G[e].call(null,n)?C.on(e,t,n):T.logError('The id provided is not valid for event "'+e+'" and no handler was set.'):T.logError('The event handler provided is not a function and was not set on event "'+e+'".')},E.offEvent=function(e,t,n){T.logInfo("Invoking pbjs.offEvent",arguments),n&&!G[e].call(null,n)||C.off(e,t,n)},E.getEvents=function(){return T.logInfo("Invoking pbjs.getEvents"),C.getEvents()},E.registerBidAdapter=function(e,t){T.logInfo("Invoking pbjs.registerBidAdapter",arguments);try{I.registerBidAdapter(e(),t)}catch(e){T.logError("Error registering bidder adapter : "+e.message)}},E.registerAnalyticsAdapter=function(e){T.logInfo("Invoking pbjs.registerAnalyticsAdapter",arguments);try{I.registerAnalyticsAdapter(e)}catch(e){T.logError("Error registering analytics adapter : "+e.message)}},E.createBid=function(e){return T.logInfo("Invoking pbjs.createBid",arguments),Object(d.a)(e)};var $=[],X=Object(c.b)("async",function(e){e&&!T.isEmpty(e)?(T.logInfo("Invoking pbjs.enableAnalytics for: ",e),I.enableAnalytics(e)):T.logError("pbjs.enableAnalytics should be called with option {}")},"enableAnalyticsCb");function Z(e){e.forEach(function(e){if(void 0===e.called)try{e.call(),e.called=!0}catch(e){T.logError("Error processing command :","prebid.js",e)}})}E.enableAnalytics=function(e){$.push(X.bind(this,e))},E.aliasBidder=function(e,t,n){T.logInfo("Invoking pbjs.aliasBidder",arguments),e&&t?I.aliasBidAdapter(e,t,n):T.logError("bidderCode and alias must be passed as arguments","pbjs.aliasBidder")},E.getAllWinningBids=function(){return m.a.getAllWinningBids()},E.getAllPrebidWinningBids=function(){return m.a.getBidsReceived().filter(function(e){return e.status===O.BID_STATUS.BID_TARGETING_SET})},E.getHighestCpmBids=function(e){return p.a.getWinningBids(e)},E.markWinningBidAsUsed=function(t){var e=[];t.adUnitCode&&t.adId?e=m.a.getBidsReceived().filter(function(e){return e.adId===t.adId&&e.adUnitCode===t.adUnitCode}):t.adUnitCode?e=p.a.getWinningBids(t.adUnitCode):t.adId?e=m.a.getBidsReceived().filter(function(e){return e.adId===t.adId}):T.logWarn("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."),0<e.length&&(e[0].status=O.BID_STATUS.RENDERED)},E.getConfig=l.b.getConfig,E.setConfig=l.b.setConfig,E.setBidderConfig=l.b.setBidderConfig,E.que.push(function(){return Object(o.a)()}),E.cmd.push=function(e){if("function"==typeof e)try{e.call()}catch(e){T.logError("Error processing command :",e.message,e.stack)}else T.logError("Commands written into pbjs.cmd.push must be wrapped in a function")},E.que.push=E.cmd.push,E.processQueue=function(){c.b.ready(),Z(E.que),Z(E.cmd)},t.default=E},7:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"d",function(){return p}),t.a=function(e){return o({moduleName:e,moduleType:"core"})},t.b=function(e,t){return o({gvlid:e,moduleName:t})};var r=n(13),u=n(0),i=n(12),d=n.n(i),f=["core","prebid-module"],l=[];function o(e){var t=0<arguments.length&&void 0!==e?e:{},i=t.gvlid,o=t.moduleName,a=t.moduleType;function s(n){if(d()(f,a)){return n({valid:!0})}var r;return p(i,o,{hasEnforcementHook:!1},function(e){var t;r=e&&e.hasEnforcementHook?n(e):(t={hasEnforcementHook:!1,valid:u.hasDeviceAccess()},n(t))}),r}var c=function(t){function n(e){if(e&&e.valid)try{return!!window.localStorage}catch(e){u.logError("Local storage api disabled")}return!1}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})};return{setCookie:function(i,o,a,c,u,t){function n(e){var t,n,r;e&&e.valid&&(t=u&&""!==u?" ;domain=".concat(encodeURIComponent(u)):"",n=a&&""!==a?" ;expires=".concat(a):"",r=null!=c&&"none"==c.toLowerCase()?"; Secure":"",document.cookie="".concat(i,"=").concat(encodeURIComponent(o)).concat(n,"; path=/").concat(t).concat(c?"; SameSite=".concat(c):"").concat(r))}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},getCookie:function(n,t){function r(e){if(e&&e.valid){var t=window.document.cookie.match("(^|;)\\s*"+n+"\\s*=\\s*([^;]*)\\s*(;|$)");return t?decodeURIComponent(t[2]):null}return null}if(!t||"function"!=typeof t)return s(r);l.push(function(){var e=s(r);t(e)})},localStorageIsEnabled:function(t){function n(e){if(e&&e.valid)try{return localStorage.setItem("prebid.cookieTest","1"),"1"===localStorage.getItem("prebid.cookieTest")}catch(e){}return!1}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},cookiesAreEnabled:function(t){function n(e){return!(!e||!e.valid)&&(!!u.checkCookieSupport()||(window.document.cookie="prebid.cookieTest",-1!==window.document.cookie.indexOf("prebid.cookieTest")))}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})},setDataInLocalStorage:function(t,n,r){function i(e){e&&e.valid&&c()&&window.localStorage.setItem(t,n)}if(!r||"function"!=typeof r)return s(i);l.push(function(){var e=s(i);r(e)})},getDataFromLocalStorage:function(t,n){function r(e){return e&&e.valid&&c()?window.localStorage.getItem(t):null}if(!n||"function"!=typeof n)return s(r);l.push(function(){var e=s(r);n(e)})},removeDataFromLocalStorage:function(t,n){function r(e){e&&e.valid&&c()&&window.localStorage.removeItem(t)}if(!n||"function"!=typeof n)return s(r);l.push(function(){var e=s(r);n(e)})},hasLocalStorage:c,findSimilarCookies:function(o,t){function n(e){if(e&&e.valid){var t=[];if(u.hasDeviceAccess())for(var n=document.cookie.split(";");n.length;){var r=n.pop(),i=(i=r.indexOf("="))<0?r.length:i;0<=decodeURIComponent(r.slice(0,i).replace(/^\s+/,"")).indexOf(o)&&t.push(decodeURIComponent(r.slice(i+1)))}return t}}if(!t||"function"!=typeof t)return s(n);l.push(function(){var e=s(n);t(e)})}}}var p=Object(r.b)("async",function(e,t,n,r){r(n)},"validateStorageEnforcement")},70:function(e,t,n){var r=n(362);e.exports=r},71:function(e,t,n){"use strict";t.a=function(t,n){o.adServers=o.adServers||{},o.adServers[t]=o.adServers[t]||{},Object.keys(n).forEach(function(e){o.adServers[t][e]?Object(i.logWarn)("Attempting to add an already registered function property ".concat(e," for AdServer ").concat(t,".")):o.adServers[t][e]=n[e]})};var r=n(18),i=n(0),o=Object(r.a)()},72:function(e,t,n){var r=n(31),i=n(48),o="".split;e.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},73:function(e,t,n){var r=n(30),i=n(31),o=n(74);e.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},74:function(e,t,n){var r=n(26),i=n(27),o=r.document,a=i(o)&&i(o.createElement);e.exports=function(e){return a?o.createElement(e):{}}},75:function(e,t,n){var r=n(16),i=n(76);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},76:function(e,t,n){var r=n(26),i=n(105),o="__core-js_shared__",a=r[o]||i(o,{});e.exports=a},77:function(e,t,n){var r=n(31);e.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},78:function(e,t,n){function r(c){return function(e,t,n){var r,i=u(e),o=s(i.length),a=d(n,o);if(c&&t!=t){for(;a<o;)if((r=i[a++])!=r)return!0}else for(;a<o;a++)if((c||a in i)&&i[a]===t)return c||a||0;return!c&&-1}}var u=n(47),s=n(50),d=n(109);e.exports={includes:r(!0),indexOf:r(!1)}},79:function(e,t,n){var r=n(110);n(133),n(135),n(137),n(139),n(141),n(142),n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),e.exports=r},8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"gdprDataHandler",function(){return U}),n.d(t,"uspDataHandler",function(){return x}),n.d(t,"clientTestAdapters",function(){return R}),n.d(t,"allS2SBidders",function(){return k}),t.getAllS2SBidders=D,t.setS2STestingModule=function(e){A=e};var h=n(0),p=n(93),g=n(37),l=n(1),y=n(4),a=n(3),r=n(13),i=n(12),m=n.n(i),o=n(10),S=n.n(o),b=n(67),c=n(22);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var A,E=n(0),O=n(5),T=n(9),I={},C=I.bidderRegistry={},j=I.aliasRegistry={},w=[];a.b.getConfig("s2sConfig",function(e){e&&e.s2sConfig&&(w=Array.isArray(e.s2sConfig)?e.s2sConfig:[e.s2sConfig])});var _={};var B=Object(r.b)("sync",function(e){var i=e.bidderCode,s=e.auctionId,d=e.bidderRequestId,t=e.adUnits,f=e.labels,l=e.src;return t.reduce(function(e,c){var t=Object(p.b)(Object(p.a)(c,f),c.mediaTypes,c.sizes),n=t.active,u=t.mediaTypes,r=t.filterResults;return n?r&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" banner sizes from '),r.before,"to ",r.after):E.logInfo('Size mapping disabled adUnit "'.concat(c.code,'"')),n&&e.push(c.bids.filter(function(e){return e.bidder===i}).reduce(function(e,t){var n=c.nativeParams||E.deepAccess(c,"mediaTypes.native");n&&(t=v({},t,{nativeParams:Object(g.h)(n)})),t=v({},t,Object(h.getDefinedParams)(c,["fpd","mediaType","renderer","storedAuctionResponse"]));var r=Object(p.b)(Object(p.a)(t,f),u),i=r.active,o=r.mediaTypes,a=r.filterResults;return i?a&&E.logInfo('Size mapping filtered adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'" banner sizes from '),a.before,"to ",a.after):E.logInfo('Size mapping deactivated adUnit "'.concat(c.code,'" bidder "').concat(t.bidder,'"')),E.isValidMediaTypes(o)?t=v({},t,{mediaTypes:o}):E.logError("mediaTypes is not correctly configured for adunit ".concat(c.code)),i&&e.push(v({},t,{adUnitCode:c.code,transactionId:c.transactionId,sizes:E.deepAccess(o,"banner.sizes")||E.deepAccess(o,"video.playerSize")||[],bidId:t.bid_id||E.getUniqueIdentifierStr(),bidderRequestId:d,auctionId:s,src:l,bidRequestsCount:b.a.getRequestsCounter(c.code),bidderRequestsCount:b.a.getBidderRequestsCounter(c.code,t.bidder),bidderWinsCount:b.a.getBidderWinsCounter(c.code,t.bidder)})),e},[])),e},[]).reduce(h.flatten,[]).filter(function(e){return""!==e})},"getBids");var U={consentData:null,setConsentData:function(e){U.consentData=e},getConsentData:function(){return U.consentData}},x={consentData:null,setConsentData:function(e){x.consentData=e},getConsentData:function(){return x.consentData}},R=[],k=[];function D(){I.s2STestingEnabled=!1,w.forEach(function(e){e&&e.enabled&&e.bidders&&e.bidders.length&&k.push.apply(k,s(e.bidders))})}function N(e){return e&&e.enabled&&e.testing&&A}function P(t,n,e){try{var r=C[t].getSpec();r&&r[n]&&"function"==typeof r[n]&&(E.logInfo("Invoking ".concat(t,".").concat(n)),a.b.runWithBidder(t,h.bind.call(r[n],r,e)))}catch(e){E.logWarn("Error calling ".concat(n," of ").concat(t))}}I.makeBidRequests=Object(r.b)("sync",function(d,f,l,i,p){T.emit(O.EVENTS.BEFORE_REQUEST_BIDS,d);var e=Object(h.getBidderCodes)(d);a.b.getConfig("bidderSequence")===a.a&&(e=Object(h.shuffle)(e));var g=Object(c.a)(),b=e,v=[];0===k.length&&D(),w.forEach(function(e){e&&e.enabled&&N(e)&&(A.calculateBidSources(e),A.getSourceBidderMap(d,k)[A.CLIENT].forEach(function(e){m()(R,e)||R.push(e)}))}),b=e.filter(function(e){return!m()(k,e)||m()(R,e)});var y=k;w.forEach(function(r){var i,o,e,t,n,a,c,u,s;r&&r.enabled&&(s=r,Boolean(N(s)&&s.testServerOnly)&&(c=d,u=r,Boolean(S()(c,function(e){return S()(e.bids,function(e){return(e.bidSource||u.bidderControl&&u.bidderControl[e.bidder])&&e.finalSource===A.SERVER})})))&&(E.logWarn("testServerOnly: True.  All client requests will be suppressed."),b.length=0),e=d,n=(t=r).bidders,(a=E.deepClone(e)).forEach(function(e){e.bids=e.bids.filter(function(e){return m()(n,e.bidder)&&(!N(t)||e.finalSource!==A.CLIENT)}).map(function(e){return e.bid_id=E.getUniqueIdentifierStr(),e})}),i=a=a.filter(function(e){return 0!==e.bids.length}),o=E.generateUUID(),y.forEach(function(e){var t=E.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:l,bidderRequestId:t,tid:o,bids:B({bidderCode:e,auctionId:l,bidderRequestId:t,adUnits:E.deepClone(i),labels:p,src:O.S2S.SRC}),auctionStart:f,timeout:r.timeout,src:O.S2S.SRC,refererInfo:g};0!==n.bids.length&&v.push(n)}),i.forEach(function(e){var t=e.bids.filter(function(t){return S()(v,function(e){return S()(e.bids,function(e){return e.bidId===t.bid_id})})});e.bids=t}),v.forEach(function(e){void 0===e.adUnitsS2SCopy&&(e.adUnitsS2SCopy=i.filter(function(e){return 0<e.bids.length}))}))});var t,n,o=(t=d,(n=E.deepClone(t)).forEach(function(e){e.bids=e.bids.filter(function(e){return!R.length||e.finalSource!==A.SERVER})}),n=n.filter(function(e){return 0!==e.bids.length}));return b.forEach(function(e){var t=E.getUniqueIdentifierStr(),n={bidderCode:e,auctionId:l,bidderRequestId:t,bids:B({bidderCode:e,auctionId:l,bidderRequestId:t,adUnits:E.deepClone(o),labels:p,src:"client"}),auctionStart:f,timeout:i,refererInfo:g},r=C[e];r||E.logError("Trying to make a request for bidder that does not exist: ".concat(e)),r&&n.bids&&0!==n.bids.length&&v.push(n)}),U.getConsentData()&&v.forEach(function(e){e.gdprConsent=U.getConsentData()}),x.getConsentData()&&v.forEach(function(e){e.uspConsent=x.getConsentData()}),v},"makeBidRequests"),I.callBids=function(e,t,d,f,l,p,i){var n,r,g,b,v;t.length?(r=(n=u(t.reduce(function(e,t){return e[Number(void 0!==t.src&&t.src===O.S2S.SRC)].push(t),e},[[],[]]),2))[0],g=n[1],b=[],g.forEach(function(e){for(var t=-1,n=0;n<b.length;++n)if(e.tid===b[n].tid){t=n;break}t<=-1&&b.push(e)}),v=0,w.forEach(function(e){var t,n,r,i,o,a,c,u,s;e&&b[v]&&m()(e.bidders,b[v].bidderCode)&&(t=Object(y.b)(p,l?{request:l.request.bind(null,"s2s"),done:l.done}:void 0),n=e.bidders,r=C[e.adapter],i=b[v].tid,o=b[v].adUnitsS2SCopy,a=g.filter(function(e){return e.tid===i}),r?(c={tid:i,ad_units:o,s2sConfig:e}).ad_units.length&&(u=a.map(function(e){return e.start=Object(h.timestamp)(),f.bind(e)}),s=c.ad_units.reduce(function(e,t){return e.concat((t.bids||[]).reduce(function(e,t){return e.concat(t.bidder)},[]))},[]),E.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(n.filter(function(e){return m()(s,e)}).join(","))),a.forEach(function(e){T.emit(O.EVENTS.BID_REQUESTED,e)}),r.callBids(c,g,function(e,t){var n=Object(h.getBidderRequest)(g,t.bidderCode,e);n&&d.call(n,e,t)},function(){return u.forEach(function(e){return e()})},t)):E.logError("missing "+e.adapter),v++)}),r.forEach(function(t){t.start=Object(h.timestamp)();var e=C[t.bidderCode];E.logMessage("CALLING BIDDER ======= ".concat(t.bidderCode)),T.emit(O.EVENTS.BID_REQUESTED,t);var n=Object(y.b)(p,l?{request:l.request.bind(null,t.bidderCode),done:l.done}:void 0),r=f.bind(t);try{a.b.runWithBidder(t.bidderCode,h.bind.call(e.callBids,e,t,d.bind(t),r,n,i,a.b.callbackWithBidder(t.bidderCode)))}catch(e){E.logError("".concat(t.bidderCode," Bid Adapter emitted an uncaught error when parsing their bidRequest"),{e:e,bidRequest:t}),r()}})):E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")},I.videoAdapters=[],I.registerBidAdapter=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).supportedMediaTypes,r=void 0===n?[]:n;e&&t?"function"==typeof e.callBids?(C[t]=e,m()(r,"video")&&I.videoAdapters.push(t),m()(r,"native")&&g.f.push(t)):E.logError("Bidder adaptor error for bidder code: "+t+"bidder must implement a callBids() function"):E.logError("bidAdapter or bidderCode not specified")},I.aliasBidAdapter=function(n,r,e){var t,i;if(void 0===C[r]){var o=C[n];if(void 0===o){var a=[];w.forEach(function(e){var t;e.bidders&&e.bidders.length&&(t=e&&e.bidders,e&&m()(t,r)?j[r]=n:a.push(n))}),a.forEach(function(e){E.logError('bidderCode "'+e+'" is not an existing bidder.',"adapterManager.aliasBidAdapter")})}else try{var c,u,s,d,f=(t=n,i=[],m()(I.videoAdapters,t)&&i.push("video"),m()(g.f,t)&&i.push("native"),i);o.constructor.prototype!=Object.prototype?(d=new o.constructor).setBidderCode(r):(c=o.getSpec(),u=e&&e.gvlid,s=e&&e.skipPbsAliasing,d=Object(l.newBidder)(v({},c,{code:r,gvlid:u,skipPbsAliasing:s})),j[r]=n),I.registerBidAdapter(d,r,{supportedMediaTypes:f})}catch(e){E.logError(n+" bidder does not currently support aliasing.","adapterManager.aliasBidAdapter")}}else E.logMessage('alias name "'+r+'" has been already specified.')},I.registerAnalyticsAdapter=function(e){var t=e.adapter,n=e.code,r=e.gvlid;t&&n?"function"==typeof t.enableAnalytics?(t.code=n,_[n]={adapter:t,gvlid:r}):E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n,'"\n        analytics adapter must implement an enableAnalytics() function')):E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")},I.enableAnalytics=function(e){E.isArray(e)||(e=[e]),E._each(e,function(e){var t=_[e.provider].adapter;t?t.enableAnalytics(e):E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider,"."))})},I.getBidAdapter=function(e){return C[e]},I.getAnalyticsAdapter=function(e){return _[e]},I.callTimedOutBidders=function(t,n,r){n=n.map(function(e){return e.params=E.getUserConfiguredParams(t,e.adUnitCode,e.bidder),e.timeout=r,e}),n=E.groupBy(n,"bidder"),Object.keys(n).forEach(function(e){P(e,"onTimeout",n[e])})},I.callBidWonBidder=function(e,t,n){t.params=E.getUserConfiguredParams(n,t.adUnitCode,t.bidder),b.a.incrementBidderWinsCounter(t.adUnitCode,t.bidder),P(e,"onBidWon",t)},I.callSetTargetingBidder=function(e,t){P(e,"onSetTargeting",t)},I.callBidViewableBidder=function(e,t){P(e,"onBidViewable",t)},t.default=I},80:function(e,t,n){function r(e){c(e,d,{value:{objectID:"O"+ ++f,weakData:{}}})}var i=n(53),o=n(27),a=n(28),c=n(33).f,u=n(59),s=n(113),d=u("meta"),f=0,l=Object.isExtensible||function(){return!0},p=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,d)){if(!l(e))return"F";if(!t)return"E";r(e)}return e[d].objectID},getWeakData:function(e,t){if(!a(e,d)){if(!l(e))return!0;if(!t)return!1;r(e)}return e[d].weakData},onFreeze:function(e){return s&&p.REQUIRED&&l(e)&&!a(e,d)&&r(e),e}};i[d]=!0},81:function(e,t,n){var r=n(21),i=n(38),o=r("iterator"),a=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||a[o]===e)}},82:function(e,t,n){var o=n(15);e.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&o(i.call(t)),e}}},83:function(e,t){e.exports=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e}},84:function(e,t,n){function r(){}function i(e){return"<script>"+e+"</"+g+">"}var o,a=n(15),c=n(118),u=n(85),s=n(53),d=n(121),f=n(74),l=n(65),p="prototype",g="script",b=l("IE_PROTO"),v=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;v=o?function(e){e.write(i("")),e.close();var t=e.parentWindow.Object;return e=null,t}(o):((t=f("iframe")).style.display="none",d.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(i("document.F=Object")),e.close(),e.F);for(var n=u.length;n--;)delete v[p][u[n]];return v()};s[b]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(r[p]=a(e),n=new r,r[p]=null,n[b]=e):n=v(),void 0===t?n:c(n,t)}},85:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},86:function(e,t,n){var i=n(32);e.exports=function(e,t,n,r){r&&r.enumerable?e[t]=n:i(e,t,n)}},87:function(e,t,n){"use strict";var r,i,o,a=n(88),c=n(32),u=n(28),s=n(21),d=n(16),f=s("iterator"),l=!1;[].keys&&("next"in(o=[].keys())?(i=a(a(o)))!==Object.prototype&&(r=i):l=!0),null==r&&(r={}),d||u(r,f)||c(r,f,function(){return this}),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:l}},88:function(e,t,n){var r=n(28),i=n(57),o=n(65),a=n(124),c=o("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=i(e),r(e,c)?e[c]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null}},89:function(e,t,n){"use strict";var i=n(129).charAt,r=n(54),o=n(66),a="String Iterator",c=r.set,u=r.getterFor(a);o(String,"String",function(e){c(this,{type:a,string:String(e),index:0})},function(){var e,t=u(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=i(n,r),t.index+=e.length,{value:e,done:!1})})},9:function(e,t,n){function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c,i,u=n(0),o=n(5),a=Array.prototype.slice,s=Array.prototype.push,d=u._map(o.EVENTS,function(e){return e}),f=o.EVENT_ID_PATHS,l=[];e.exports=(c={},(i={}).on=function(e,t,n){var r,i;i=e,u.contains(d,i)?(r=c[e]||{que:[]},n?(r[n]=r[n]||{que:[]},r[n].que.push(t)):r.que.push(t),c[e]=r):u.logError("Wrong event name : "+e+" Valid event names :"+d)},i.emit=function(e){!function(e,t){u.logMessage("Emitting event for: "+e);var n=t[0]||{},r=n[f[e]],i=c[e]||{que:[]},o=u._map(i,function(e,t){return t}),a=[];l.push({eventType:e,args:n,id:r,elapsedTime:u.getPerformanceNow()}),r&&u.contains(o,r)&&s.apply(a,i[r].que),s.apply(a,i.que),u._each(a,function(e){if(e)try{e.apply(null,t)}catch(e){u.logError("Error executing handler:","events.js",e)}})}(e,a.call(arguments,1))},i.off=function(e,n,r){var i=c[e];u.isEmpty(i)||u.isEmpty(i.que)&&u.isEmpty(i[r])||r&&(u.isEmpty(i[r])||u.isEmpty(i[r].que))||(r?u._each(i[r].que,function(e){var t=i[r].que;e===n&&t.splice(t.indexOf(e),1)}):u._each(i.que,function(e){var t=i.que;e===n&&t.splice(t.indexOf(e),1)}),c[e]=i)},i.get=function(){return c},i.getEvents=function(){var n=[];return u._each(l,function(e){var t=r({},e);n.push(t)}),n},i)},90:function(e,t,n){var r=n(15),i=n(61);e.exports=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return r(t.call(e))}},91:function(e,t,n){var r=n(155);e.exports=r},92:function(e,t,n){"use strict";t.a=function(e){var t=e;return{callBids:function(){},setBidderCode:function(e){t=e},getBidderCode:function(){return t}}}},93:function(e,t,n){"use strict";t.a=function(e,t){if(e.labelAll)return{labelAll:!0,labels:e.labelAll,activeLabels:t};return{labelAll:!1,labels:e.labelAny,activeLabels:t}},t.c=function(e){var t=v(1<arguments.length&&void 0!==arguments[1]?arguments[1]:b);return!t.shouldFilter||!!t.sizesSupported[e]},t.b=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.labels,n=void 0===t?[]:t,r=e.labelAll,i=void 0!==r&&r,o=e.activeLabels,a=void 0===o?[]:o,c=1<arguments.length?arguments[1]:void 0,u=2<arguments.length?arguments[2]:void 0,s=v(3<arguments.length&&void 0!==arguments[3]?arguments[3]:b);c=Object(p.isPlainObject)(c)?Object(p.deepClone)(c):u?{banner:{sizes:u}}:{};var d=Object(p.deepAccess)(c,"banner.sizes");s.shouldFilter&&d&&(c.banner.sizes=d.filter(function(e){return s.sizesSupported[e]}));var f=Object.keys(c),l={active:f.every(function(e){return"banner"!==e})||f.some(function(e){return"banner"===e})&&0<Object(p.deepAccess)(c,"banner.sizes.length")&&(0===n.length||!i&&(n.some(function(e){return s.labels[e]})||n.some(function(e){return g()(a,e)}))||i&&n.reduce(function(e,t){return e?s.labels[t]||g()(a,t):e},!0)),mediaTypes:c};d&&d.length!==c.banner.sizes.length&&(l.filterResults={before:d,after:c.banner.sizes});return l};var r=n(3),p=n(0),i=n(12),g=n.n(i);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=[];function v(e){return e.reduce(function(n,r){if("object"===o(r)&&"string"==typeof r.mediaQuery){var t=!1;if(""===r.mediaQuery)t=!0;else try{t=Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches}catch(e){Object(p.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"),t=matchMedia(r.mediaQuery).matches}t&&(Array.isArray(r.sizesSupported)&&(n.shouldFilter=!0),["labels","sizesSupported"].forEach(function(t){return(r[t]||[]).forEach(function(e){return n[t][e]=!0})}))}else Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');return n},{labels:{},sizesSupported:{},shouldFilter:!1})}r.b.getConfig("sizeConfig",function(e){return t=e.sizeConfig,void(b=t);var t})},94:function(e,t,n){var r=n(222);e.exports=r},948:function(e,t,n){e.exports=n(69)},95:function(e,t,n){"use strict";t.b=function(e,t,n){var r={puts:e.map(c,n)};Object(i.a)(o.b.getConfig("cache.url"),function(n){return{success:function(e){var t;try{t=JSON.parse(e).responses}catch(e){return void n(e,[])}t?n(null,t):n(new Error("The cache server didn't respond with a responses property."),[])},error:function(e,t){n(new Error("Error storing video ad in the cache: ".concat(e,": ").concat(JSON.stringify(t))),[])}}}(t),JSON.stringify(r),{contentType:"text/plain",withCredentials:!0})},t.a=function(e){return"".concat(o.b.getConfig("cache.url"),"?uuid=").concat(e)};var i=n(4),o=n(3),a=n(0);function c(e){var t,n,r,i={type:"xml",value:e.vastXml?e.vastXml:(t=e.vastUrl,n=e.vastImpUrl,r=n?"<![CDATA[".concat(n,"]]>"):"",'<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t,"]]></VASTAdTagURI>\n        <Impression>").concat(r,"</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),ttlseconds:Number(e.ttl)};return o.b.getConfig("cache.vasttrack")&&(i.bidder=e.bidder,i.bidid=e.requestId,a.isPlainObject(this)&&this.hasOwnProperty("auctionStart")&&(i.timestamp=this.auctionStart)),"string"==typeof e.customCacheKey&&""!==e.customCacheKey&&(i.key=e.customCacheKey),i}},98:function(e,t,n){n(99);var r=n(52);e.exports=r("Array","find")},99:function(e,t,n){"use strict";var r=n(14),i=n(56).find,o=n(51),a=n(60),c="find",u=!0,s=a(c);c in[]&&Array(1).find(function(){u=!1}),r({target:"Array",proto:!0,forced:u||!s},{find:function(e,t){return i(this,e,1<arguments.length?t:void 0)}}),o(c)}});
pbjsChunk([335],{278:function(e,r,a){e.exports=a(279)},279:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",function(){return R});var f=a(11),_=a(0),k=a(3),y=a(1),g=a(2),p=a(23),t=a(10),I=a.n(t),n=a(12),w=a.n(n),v=a(25),i=a(7);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}).apply(this,arguments)}function A(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return o(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=new Array(r);a<r;a++)t[a]=e[a];return t}var d="appnexus",x="https://ib.adnxs.com/ut/v3/prebid",c=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],C=["age","externalUid","segments","gender","dnt","language"],S=["geo","device_id"],T=["enabled","dongle","member_id","debug_timeout"],u={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5}},l={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},m="<script",h=/\/\/cdn\.adnxs\.com\/v/,E="trk.js",O=Object(i.b)(32,d),R={code:d,gvlid:32,aliases:[{code:"appnexusAst",gvlid:32},{code:"brealtime"},{code:"emxdigital",gvlid:183},{code:"pagescience"},{code:"defymedia"},{code:"gourmetads"},{code:"matomy"},{code:"featureforward"},{code:"oftmedia"},{code:"districtm",gvlid:144},{code:"adasta"},{code:"beintoo",gvlid:618}],supportedMediaTypes:[g.b,g.d,g.c],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.member&&e.params.invCode)},buildRequests:function(e,r){var t=e.map(N),n=I()(e,M),i={};!0===k.b.getConfig("coppa")&&(i={coppa:!0}),n&&Object.keys(n.params.user).filter(function(e){return w()(C,e)}).forEach(function(e){var r,a=_.convertCamelToUnderscore(e);"segments"===e&&_.isArray(n.params.user[e])?(r=[],n.params.user[e].forEach(function(e){_.isNumber(e)?r.push({id:e}):_.isPlainObject(e)&&r.push(e)}),i[a]=r):"segments"!==e&&(i[a]=n.params.user[e])});var a,s=I()(e,B);s&&s.params&&s.params.app&&(a={},Object.keys(s.params.app).filter(function(e){return w()(S,e)}).forEach(function(e){return a[e]=s.params.app[e]}));var o,d=I()(e,D);d&&d.params&&s.params.app&&s.params.app.id&&(o={appid:d.params.app.id});var p={},c={},u=O.getCookie("apn_prebid_debug")||null;if(u)try{p=JSON.parse(u)}catch(e){_.logError("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{var l=I()(e,V);l&&l.debug&&(p=l.debug)}p&&p.enabled&&Object.keys(p).filter(function(e){return w()(T,e)}).forEach(function(e){c[e]=p[e]});var m,f,y=I()(e,z),g=y?parseInt(y.params.member,10):0,v=e[0].schain,b=I()(e,W),h={tags:A(t),user:i,sdk:{source:"pbjs",version:"4.27.0-pre"},schain:v};return b&&(h.iab_support={omidpn:"Appnexus",omidpv:"4.27.0-pre"}),0<g&&(h.member_id=g),s&&(h.device=a),d&&(h.app=o),k.b.getConfig("adpod.brandCategoryExclusion")&&(h.brand_category_uniqueness=!0),c.enabled&&(h.debug=c,_.logInfo("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(c,null,4))),r&&r.gdprConsent&&(h.gdpr_consent={consent_string:r.gdprConsent.consentString,consent_required:r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(h.us_privacy=r.uspConsent),r&&r.refererInfo&&(m={rd_ref:encodeURIComponent(r.refererInfo.referer),rd_top:r.refererInfo.reachedTop,rd_ifs:r.refererInfo.numIframes,rd_stk:r.refererInfo.stack.map(function(e){return encodeURIComponent(e)}).join(",")},h.referrer_detection=m),I()(e,J)&&e.filter(J).forEach(function(r){var e=function(e,r){var a=r.mediaTypes.video,t=a.durationRangeSec,n=a.requireExactDuration,i=function(e){var r=e.adPodDurationSec,a=e.durationRangeSec,t=e.requireExactDuration,n=_.getMinValueFromArray(a),i=Math.floor(r/n);return t?Math.max(i,a.length):i}(r.mediaTypes.video),s=_.getMaxValueFromArray(t),o=e.filter(function(e){return e.uuid===r.bidId}),d=_.fill.apply(_,A(o).concat([i]));{var p,c;n?(p=Math.ceil(i/t.length),c=_.chunk(d,p),t.forEach(function(r,e){c[e].map(function(e){F(e,"minduration",r),F(e,"maxduration",r)})})):d.map(function(e){return F(e,"maxduration",s)})}return d}(t,r),a=h.tags.filter(function(e){return e.uuid!==r.bidId});h.tags=[].concat(A(a),A(e))}),e[0].userId&&(L(f=[],_.deepAccess(e[0],"userId.criteoId"),"criteo.com",null),L(f,_.deepAccess(e[0],"userId.netId"),"netid.de",null),L(f,_.deepAccess(e[0],"userId.idl_env"),"liveramp.com",null),L(f,_.deepAccess(e[0],"userId.tdid"),"adserver.org","TDID"),f.length&&(h.eids=f)),t[0].publisher_id&&(h.publisher_id=t[0].publisher_id),function(e,a){var t=[],n={};!function(e){var r=!0;e&&e.gdprConsent&&e.gdprConsent.gdprApplies&&2===e.gdprConsent.apiVersion&&(r=!(!0!==_.deepAccess(e.gdprConsent,"vendorData.purpose.consents.1")));return r}(a)&&(n={withCredentials:!1});"TRUE"!==_.getParameterByName("apn_test").toUpperCase()&&!0!==k.b.getConfig("apn_test")||(n.customHeaders={"X-Is-Test":1});{var i,r;15<e.tags.length?(i=_.deepClone(e),_.chunk(e.tags,15).forEach(function(e){i.tags=e;var r=JSON.stringify(i);t.push({method:"POST",url:x,data:r,bidderRequest:a,options:n})})):(r=JSON.stringify(e),t={method:"POST",url:x,data:r,bidderRequest:a,options:n})}return t}(h,r)},interpretResponse:function(e,r){var i=this,s=r.bidderRequest;e=e.body;var a,o=[];if(e&&!e.error)return e.tags&&e.tags.forEach(function(e){var r,a,t,n=(r=e)&&r.ads&&r.ads.length&&I()(r.ads,function(e){return e.rtb});n&&0!==n.cpm&&w()(i.supportedMediaTypes,n.ad_type)&&((a=function(r,e,a){var t=_.getBidRequest(r.uuid,[a]),n={requestId:r.uuid,cpm:e.cpm,creativeId:e.creative_id,dealId:e.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:t.adUnitCode,appnexus:{buyerMemberId:e.buyer_member_id,dealPriority:e.deal_priority,dealCode:e.deal_code}};e.advertiser_id&&(n.meta=b({},n.meta,{advertiserId:e.advertiser_id}));if(e.rtb.video){var i,s;switch(b(n,{width:e.rtb.video.player_width,height:e.rtb.video.player_height,vastImpUrl:e.notify_url,ttl:3600}),_.deepAccess(t,"mediaTypes.video.context")){case g.a:var o=Object(y.getIabSubCategory)(t.bidder,e.brand_category_id);n.meta=b({},n.meta,{primaryCatId:o});var d=e.deal_priority;n.video={context:g.a,durationSeconds:Math.floor(e.rtb.video.duration_ms/1e3),dealTier:d},n.vastUrl=e.rtb.video.asset_url;break;case v.b:n.adResponse=r,n.adResponse.ad=n.adResponse.ads[0],n.adResponse.ad.video=n.adResponse.ad.rtb.video,n.vastXml=e.rtb.video.content,e.renderer_url&&(i=I()(a.bids,function(e){return e.bidId===r.uuid}),s=_.deepAccess(i,"renderer.options"),n.renderer=function(e,r){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=f.a.install({id:r.renderer_id,url:r.renderer_url,config:a,loaded:!1,adUnitCode:e});try{t.setRender(H)}catch(e){_.logWarn("Prebid Error calling setRender on renderer",e)}return t.setEventHandlers({impression:function(){return _.logMessage("AppNexus outstream video impression event")},loaded:function(){return _.logMessage("AppNexus outstream video loaded event")},ended:function(){_.logMessage("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),t}(n.adUnitCode,e,s));break;case v.a:n.vastUrl=e.notify_url+"&redir="+encodeURIComponent(e.rtb.video.asset_url)}}else if(e.rtb[g.c]){var p=e.rtb[g.c],c=e.viewability.config.replace("src=","data-src="),u=p.javascript_trackers;null==u?u=c:_.isStr(u)?u=[u,c]:u.push(c),n[g.c]={title:p.title,body:p.desc,body2:p.desc2,cta:p.ctatext,rating:p.rating,sponsoredBy:p.sponsored,privacyLink:p.privacy_link,address:p.address,downloads:p.downloads,likes:p.likes,phone:p.phone,price:p.price,salePrice:p.saleprice,clickUrl:p.link.url,displayUrl:p.displayurl,clickTrackers:p.link.click_trackers,impressionTrackers:p.impression_trackers,javascriptTrackers:u},p.main_img&&(n.native.image={url:p.main_img.url,height:p.main_img.height,width:p.main_img.width}),p.icon&&(n.native.icon={url:p.icon.url,height:p.icon.height,width:p.icon.width})}else{b(n,{width:e.rtb.banner.width,height:e.rtb.banner.height,ad:e.rtb.banner.content});try{var l,m;e.rtb.trackers&&(l=e.rtb.trackers[0].impression_urls[0],m=_.createTrackPixelHtml(l),n.ad+=m)}catch(e){_.logError("Error appending tracking pixel",e)}}return n}(e,n,s)).mediaType=(t=n.ad_type)===g.d?g.d:t===g.c?g.c:g.b,o.push(a))}),e.debug&&e.debug.debug_info&&(a=(a="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info).replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),_.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"),_.logMessage(a)),o;var t="in response for ".concat(s.bidderCode," adapter");return e&&e.error&&(t+=": ".concat(e.error)),_.logError(t),o},getMappingFileInfo:function(){return{url:"https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json",refreshInDays:2}},getUserSyncs:function(e){if(e.iframeEnabled)return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}]},transformBidParams:function(a,e){return a=_.convertTypes({member:"string",invCode:"string",placementId:"number",keywords:_.transformBidderParamKeywords,publisherId:"number"},a),e&&(a.use_pmt_rule="boolean"==typeof a.usePaymentRule&&a.usePaymentRule,a.usePaymentRule&&delete a.usePaymentRule,j(a.keywords)&&a.keywords.forEach(P),Object.keys(a).forEach(function(e){var r=_.convertCamelToUnderscore(e);r!==e&&(a[r]=a[e],delete a[e])})),a},onBidWon:function(e){e.native&&function(e){var r=function(e){var r;if(_.isStr(e)&&U(e))r=e;else if(_.isArray(e))for(var a=0;a<e.length;a++){var t=e[a];U(t)&&(r=t)}return r}(e.native.javascriptTrackers);if(r)for(var a="pbjs_adid="+e.adId+";pbjs_auc="+e.adUnitCode,t=function(e){var r=e.indexOf('src="')+5,a=e.indexOf('"',r);return e.substring(r,a)}(r),n=t.replace("dom_id=%native_dom_id%",a),i=document.getElementsByTagName("iframe"),s=!1,o=0;o<i.length&&!s;o++){var d=i[o];try{var p=d.contentDocument||d.contentWindow.document;if(p)for(var c=p.getElementsByTagName("script"),u=0;u<c.length&&!s;u++){var l=c[u];l.getAttribute("data-src")==t&&(l.setAttribute("src",n),l.setAttribute("data-src",""),l.removeAttribute&&l.removeAttribute("data-src"),s=!0)}}catch(e){if(!(e instanceof DOMException&&"SecurityError"===e.name))throw e}}}(e)}};function j(e){return _.isArray(e)&&0<e.length}function P(e){j(e.value)&&""===e.value[0]&&delete e.value}function U(e){var r=e.match(h),a=null!=r&&1<=r.length,t=e.match(E),n=null!=t&&1<=t.length;return e.startsWith(m)&&n&&a}function N(a){var e,r,n,i,t={};t.sizes=q(a.sizes),t.primary_size=t.sizes[0],t.ad_types=[],t.uuid=a.bidId,a.params.placementId?t.id=parseInt(a.params.placementId,10):t.code=a.params.invCode,t.allow_smaller_sizes=a.params.allowSmallerSizes||!1,t.use_pmt_rule=a.params.usePaymentRule||!1,t.prebid=!0,t.disable_psa=!0,a.params.reserve&&(t.reserve=a.params.reserve),a.params.position&&(t.position={above:1,below:2}[a.params.position]||0),a.params.trafficSourceCode&&(t.traffic_source_code=a.params.trafficSourceCode),a.params.privateSizes&&(t.private_sizes=q(a.params.privateSizes)),a.params.supplyType&&(t.supply_type=a.params.supplyType),a.params.pubClick&&(t.pubclick=a.params.pubClick),a.params.extInvCode&&(t.ext_inv_code=a.params.extInvCode),a.params.publisherId&&(t.publisher_id=parseInt(a.params.publisherId,10)),a.params.externalImpId&&(t.external_imp_id=a.params.externalImpId),_.isEmpty(a.params.keywords)||(0<(e=_.transformBidderParamKeywords(a.params.keywords)).length&&e.forEach(P),t.keywords=e),a.mediaType!==g.c&&!_.deepAccess(a,"mediaTypes.".concat(g.c))||(t.ad_types.push(g.c),0===t.sizes.length&&(t.sizes=q([1,1])),a.nativeParams&&(n=a.nativeParams,i={},Object.keys(n).forEach(function(e){var r,a=l[e]&&l[e].serverName||l[e]||e,t=l[e]&&l[e].requiredParams;i[a]=b({},t,n[e]),a!==l.image.serverName&&a!==l.icon.serverName||!i[a].sizes||(r=i[a].sizes,(_.isArrayOfNums(r)||_.isArray(r)&&0<r.length&&r.every(function(e){return _.isArrayOfNums(e)}))&&(i[a].sizes=q(i[a].sizes))),a===l.privacyLink&&(i.privacy_supported=!0)}),r=i,t[g.c]={layouts:[r]}));var s=_.deepAccess(a,"mediaTypes.".concat(g.d)),o=_.deepAccess(a,"mediaTypes.video.context");t.hb_source=s&&"adpod"===o?7:1,a.mediaType!==g.d&&!s||t.ad_types.push(g.d),(a.mediaType===g.d||s&&"outstream"!==o)&&(t.require_asset_url=!0),a.params.video&&(t.video={},Object.keys(a.params.video).filter(function(e){return w()(c,e)}).forEach(function(e){switch(e){case"context":case"playback_method":var r=a.params.video[e],r=_.isArray(r)?r[0]:r;t.video[e]=u[e][r];break;case"frameworks":break;default:t.video[e]=a.params.video[e]}}),a.params.video.frameworks&&_.isArray(a.params.video.frameworks)&&(t.video_frameworks=a.params.video.frameworks)),a.renderer&&(t.video=b({},t.video,{custom_renderer_present:!0})),a.params.frameworks&&_.isArray(a.params.frameworks)&&(t.banner_frameworks=a.params.frameworks);var d=I()(p.a.getAdUnits(),function(e){return a.transactionId===e.transactionId});return d&&d.mediaTypes&&d.mediaTypes.banner&&t.ad_types.push(g.b),0===t.ad_types.length&&delete t.ad_types,t}function q(e){var r=[],a={};if(_.isArray(e)&&2===e.length&&!_.isArray(e[0]))a.width=parseInt(e[0],10),a.height=parseInt(e[1],10),r.push(a);else if("object"===s(e))for(var t=0;t<e.length;t++){var n=e[t];(a={}).width=parseInt(n[0],10),a.height=parseInt(n[1],10),r.push(a)}return r}function M(e){return!!e.params.user}function z(e){return!!parseInt(e.params.member,10)}function B(e){if(e.params)return!!e.params.app}function D(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function V(e){return!!e.debug}function J(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===g.a}function W(e){var r=!1,a=e.params,t=e.params.video;return a.frameworks&&_.isArray(a.frameworks)&&(r=w()(e.params.frameworks,6)),!r&&t&&t.frameworks&&_.isArray(t.frameworks)&&(r=w()(e.params.video.frameworks,6)),r}function F(e,r,a){_.isEmpty(e.video)&&(e.video={}),e.video[r]=a}function H(e){var r,a;r=e.adUnitCode,(a=document.getElementById(r).querySelectorAll("div[id^='google_ads']"))[0]&&a[0].style.setProperty("display","none"),function(e){try{var r=document.getElementById(e).querySelectorAll("script[id^='sas_script']");r[0].nextSibling&&"iframe"===r[0].nextSibling.localName&&r[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push(function(){window.ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},function(e,r,a){e.renderer.handleVideoEvent({id:r,eventName:a})}.bind(null,e))})}function L(e,r,a,t){return r&&(t?e.push({source:a,id:r,rti_partner:t}):e.push({source:a,id:r})),e}Object(y.registerBidder)(R)}},[278]);
pbjsChunk([298],{360:function(n,t,e){n.exports=e(361)},361:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"allowAuction",function(){return w}),e.d(t,"userCMP",function(){return d}),e.d(t,"consentTimeout",function(){return l}),e.d(t,"gdprScope",function(){return g}),e.d(t,"staticConsentData",function(){return m}),t.requestBidsHook=h,t.resetConsentData=function(){C=void 0,d=void 0,D=0,a.gdprDataHandler.setConsentData(null)},t.setConsentConfig=_;var u=e(0),o=e(3),a=e(8),i=e(12),s=e.n(i),r=e(70),f=e.n(r);function c(n){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var d,l,g,m,C,v="iab",b=1e4,y=!0,w={value:y,definedInConfig:!1},D=0,k=!1,M={iab:function(o,e,s){function n(n,t){u.logInfo("Received a response from CMP",n),t?!1!==n.gdprApplies&&"tcloaded"!==n.eventStatus&&"useractioncomplete"!==n.eventStatus||o(n,s):e("CMP unable to register callback function.  Please check CMP setup.",s)}var t=function(){var t={};function e(){t.getConsentData&&t.getVendorConsents&&(u.logInfo("Received all requested responses from CMP",t),o(t,s))}return{consentDataCallback:function(n){t.getConsentData=n,e()},vendorConsentsCallback:function(n){t.getVendorConsents=n,e()}}}(),c={},a=function(){for(var n,t,e=window;!n;){try{if("function"==typeof e.__tcfapi||"function"==typeof e.__cmp){t="function"==typeof e.__tcfapi?(D=2,e.__tcfapi):(D=1,e.__cmp),n=e;break}}catch(n){}try{if(e.frames.__tcfapiLocator){D=2,n=e;break}}catch(n){}try{if(e.frames.__cmpLocator){D=1,n=e;break}}catch(n){}if(e===window.top)break;e=e.parent}return{cmpFrame:n,cmpFunction:t}}(),i=a.cmpFrame,r=a.cmpFunction;if(!i)return e("CMP not found.",s);u.isFn(r)?(u.logInfo("Detected CMP API is directly accessible, calling it now..."),1===D?(r("getConsentData",null,t.consentDataCallback),r("getVendorConsents",null,t.vendorConsentsCallback)):2===D&&r("addEventListener",D,n)):1===D&&window.$sf&&window.$sf.ext&&"function"==typeof window.$sf.ext.cmp?(u.logInfo("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."),d("getConsentData",t.consentDataCallback),d("getVendorConsents",t.vendorConsentsCallback)):(u.logInfo("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."),1===D?(l("getConsentData",i,t.consentDataCallback),l("getVendorConsents",i,t.vendorConsentsCallback)):2===D&&l("addEventListener",i,n));function d(o,a){var n,t=s.adUnits,e=1,i=1;Array.isArray(t)&&0<t.length&&(e=(n=u.getAdUnitSizes(t[0]))[0][0],i=n[0][1]),window.$sf.ext.register(e,i,function(n,t){var e;"cmpReturn"===n&&(e="getConsentData"===o?t.vendorConsentData:t.vendorConsents,a(e))}),window.$sf.ext.cmp(o)}function l(n,i,t){var a=2===D?"__tcfapi":"__cmp",s=Math.random()+"",r="".concat(a,"Call");function e(n){var t,e="".concat(a,"Return"),o="string"==typeof n.data&&f()(n.data,e)?JSON.parse(n.data):n.data;o[e]&&o[e].callId&&(t=o[e],void 0!==c[t.callId]&&c[t.callId](t.returnValue,t.success))}2===D?(window[a]=function(n,t,e,o){var a=p({},r,{command:n,version:t,parameter:o,callId:s});c[s]=e,i.postMessage(a,"*")},window.addEventListener("message",e,!1),window[a](n,D,t)):(window[a]=function(n,t,e){var o=p({},r,{command:n,parameter:t,callId:s});c[s]=e,i.postMessage(o,"*")},window.addEventListener("message",e,!1),window[a](n,void 0,t))}},static:function(n,t,e){n(m,e)}};function h(n,t){var e={context:this,args:[t],nextFn:n,adUnits:t.adUnits||pbjs.adUnits,bidsBackHandler:t.bidsBackHandler,haveExited:!1,timer:null};return C?(u.logInfo("User consent information already known.  Pulling internally stored information..."),S(null,e)):s()(Object.keys(M),d)?(M[d].call(this,A,P,e),void(e.haveExited||(0===l?A(void 0,e):e.timer=setTimeout(function(n){P("CMP workflow exceeded timeout threshold.",n)}.bind(null,e),l)))):(u.logWarn("CMP framework (".concat(d,") is not a supported framework.  Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args))}function A(e,n){"static"===d&&2===(D=e.getConsentData?1:e.getTCData?2:0)&&(e=e.getTCData);var t=1===D?function(n){var t=n&&n.getConsentData&&n.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||u.isStr(n.getConsentData.consentData)&&u.isPlainObject(n.getVendorConsents)&&1<Object.keys(n.getVendorConsents).length))}:2===D?function(){var n=e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:g,t=e&&e.tcString;return!("boolean"==typeof n&&(!0!==n||u.isStr(t)))}:null;w.definedInConfig&&2===D?u.logWarn("'allowAuctionWithoutConsent' ignored for TCF 2"):w.definedInConfig||1!==D||u.logInfo("'allowAuctionWithoutConsent' using system default: (".concat(y,").")),u.isFn(t)?t(e)?P("CMP returned unexpected value during lookup process.",n,e):(clearTimeout(n.timer),I(e),S(null,n)):P("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.",n,e)}function P(n,t,e){clearTimeout(t.timer),w.value&&1===D&&I(void 0),S(n,t,e)}function I(n){1===D?C={consentString:n?n.getConsentData.consentData:void 0,vendorData:n?n.getVendorConsents:void 0,gdprApplies:n?n.getConsentData.gdprApplies:g}:(C={consentString:n?n.tcString:void 0,vendorData:n||void 0,gdprApplies:n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:g},n&&n.addtlConsent&&u.isStr(n.addtlConsent)&&(C.addtlConsent=n.addtlConsent)),C.apiVersion=D,a.gdprDataHandler.setConsentData(C)}function S(n,t,e){var o,a,i;!1===t.haveExited&&(t.haveExited=!0,o=t.context,a=t.args,i=t.nextFn,n?w.value&&1===D?(u.logWarn(n+" 'allowAuctionWithoutConsent' activated.",e),i.apply(o,a)):(u.logError(n+" Canceling auction as per consentManagement config.",e),"function"==typeof t.bidsBackHandler?t.bidsBackHandler():u.logError("Error executing bidsBackHandler")):i.apply(o,a))}function _(n){(n=n&&(n.gdpr||n.usp?n.gdpr:n))&&"object"===c(n)?(u.isStr(n.cmpApi)?d=n.cmpApi:(d=v,u.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(v,")."))),u.isNumber(n.timeout)?l=n.timeout:(l=b,u.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(b,")."))),"boolean"==typeof n.allowAuctionWithoutConsent&&(w.value=n.allowAuctionWithoutConsent,w.definedInConfig=!0),g=!0===n.defaultGdprScope,u.logInfo("consentManagement module has been activated..."),"static"===d&&(u.isPlainObject(n.consentData)?(m=n.consentData,l=0):u.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),k||pbjs.requestBids.before(h,50),k=!0):u.logWarn("consentManagement config not defined, exiting consent manager")}o.b.getConfig("consentManagement",function(n){return _(n.consentManagement)})}},[360]);
pbjsChunk([297],{367:function(t,n,e){t.exports=e(368)},368:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"consentAPI",function(){return s}),e.d(n,"consentTimeout",function(){return c}),e.d(n,"staticConsentData",function(){return u}),n.requestBidsHook=m,n.resetConsentData=function(){l=void 0,s=void 0,o.uspDataHandler.setConsentData(null)},n.setConsentConfig=P;var r=e(0),a=e(3),o=e(8);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s,c,u,l,d="iab",p=50,f=!1,g={iab:function(a,o,i){var t=function(){var e={};return{consentDataCallback:function(t,n){n&&t.uspString&&(e.usPrivacy=t.uspString),e.usPrivacy?a(e,i):o("Unable to get USP consent string.",i)}}}(),s={},n=function(){for(var t,n,e=window;!t;){try{if("function"==typeof e.__uspapi){n=e.__uspapi,t=e;break}}catch(t){}try{if(e.frames.__uspapiLocator){t=e;break}}catch(t){}if(e===window.top)break;e=e.parent}return{uspapiFrame:t,uspapiFunction:n}}(),e=n.uspapiFrame,c=n.uspapiFunction;if(!e)return o("USP CMP not found.",i);r.isFn(c)?(r.logInfo("Detected USP CMP is directly accessible, calling it now..."),c("getUSPData",1,t.consentDataCallback)):(r.logInfo("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."),function(t,i,n){window.__uspapi=function(t,n,e){var a=Math.random()+"",o={__uspapiCall:{command:t,version:n,callId:a}};s[a]=e,i.postMessage(o,"*")},window.addEventListener("message",function(t){var n=t&&t.data&&t.data.__uspapiReturn;n&&n.callId&&void 0!==s[n.callId]&&(s[n.callId](n.returnValue,n.success),delete s[n.callId])},!1),window.__uspapi(t,1,n)}("getUSPData",e,t.consentDataCallback))},static:function(t,n,e){t(u,e)}};function m(t,n){var e={context:this,args:[n],nextFn:t,adUnits:n.adUnits||pbjs.adUnits,bidsBackHandler:n.bidsBackHandler,haveExited:!1,timer:null};if(!g[s])return r.logWarn("USP framework (".concat(s,") is not a supported framework. Aborting consentManagement module and resuming auction.")),e.nextFn.apply(e.context,e.args);g[s].call(this,b,y,e),e.haveExited||(0===c?b(void 0,e):e.timer=setTimeout(function(t){y("USPAPI workflow exceeded timeout threshold.",t)}.bind(null,e),c))}function b(t,n){var e;!t||!t.usPrivacy?y("USPAPI returned unexpected value during lookup process.",n,t):(clearTimeout(n.timer),(e=t)&&e.usPrivacy&&(l=e.usPrivacy,o.uspDataHandler.setConsentData(l)),v(null,n))}function y(t,n,e){clearTimeout(n.timer),v(t,n,e)}function v(t,n,e){var a,o,i;!1===n.haveExited&&(n.haveExited=!0,a=n.context,o=n.args,i=n.nextFn,t&&r.logWarn(t+" Resuming auction without consent data as per consentManagement config.",e),i.apply(a,o))}function P(t){(t=t&&t.usp)&&"object"===i(t)?(r.isStr(t.cmpApi)?s=t.cmpApi:(s=d,r.logInfo("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(d,")."))),r.isNumber(t.timeout)?c=t.timeout:(c=p,r.logInfo("consentManagement.usp config did not specify timeout. Using system default setting (".concat(p,")."))),r.logInfo("USPAPI consentManagement module has been activated..."),"static"===s&&(r.isPlainObject(t.consentData)&&r.isPlainObject(t.consentData.getUSPData)?(t.consentData.getUSPData.uspString&&(u={usPrivacy:t.consentData.getUSPData.uspString}),c=0):r.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")),f||pbjs.requestBids.before(m,50),f=!0):r.logWarn("consentManagement.usp config not defined, exiting usp consent manager")}a.b.getConfig("consentManagement",function(t){return P(t.consentManagement)})}},[367]);
pbjsChunk([296],{369:function(e,r,n){e.exports=n(370)},370:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),n.d(r,"spec",function(){return s});var c=n(0),t=n(1);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var a=0,d="consumable",s={code:"consumable",isBidRequestValid:function(e){return!!(e.params.networkId&&e.params.siteId&&e.params.unitId&&e.params.unitName)},buildRequests:function(e,r){var n={method:"POST",url:"",data:"",bidRequest:[]};if(e.length<1)return n;a=e[0].params.siteId,d=e[0].bidder;var s=i({placements:[],time:Date.now(),url:r.refererInfo.referer,referrer:document.referrer,source:[{name:"prebidjs",version:"4.27.0-pre"}]},e[0].params);return r&&r.gdprConsent&&(s.gdpr={consent:r.gdprConsent.consentString,applies:"boolean"!=typeof r.gdprConsent.gdprApplies||r.gdprConsent.gdprApplies}),r&&r.uspConsent&&(s.ccpa=r.uspConsent),e.map(function(e){var n,r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes||[],t=i({divName:e.bidId,adTypes:e.adTypes||(n=[],r.forEach(function(e){var r=p.indexOf(e[0]+"x"+e[1]);0<=r&&n.push(r)}),n)},e.params);t.networkId&&t.siteId&&t.unitId&&t.unitName&&s.placements.push(t)}),n.data=JSON.stringify(s),n.bidRequest=e,n.bidderRequest=r,n.url="https://e.serverbid.com/api/v2",n},interpretResponse:function(e,r){var n=[],t=r.bidRequest;e=(e||{}).body;for(var s,i=0;i<t.length;i++){var a,d,p,u={},o=(p=t[i]).bidId;e&&(d=(a=e.decisions&&e.decisions[o])&&a.pricing&&a.pricing.clearPrice,a&&d&&(u.requestId=o,u.cpm=d,u.width=a.width,u.height=a.height,u.unitId=p.params.unitId,u.unitName=p.params.unitName,u.ad=(s=a,u.unitId,u.unitName,s.contents&&s.contents[0]&&s.contents[0].body+c.createTrackPixelHtml(s.impressionUrl)),u.currency="USD",u.creativeId=a.adId,u.ttl=30,u.netRevenue=!0,u.referrer=r.bidderRequest.refererInfo.referer,n.push(u)))}return n},getUserSyncs:function(e,r){return e.iframeEnabled?[{type:"iframe",url:"https://sync.serverbid.com/ss/"+a+".html"}]:e.pixelEnabled&&0<r.length?r[0].body.pixels:void c.logWarn(d+": Please enable iframe based user syncing.")}},p=[null,"120x90","120x90","468x60","728x90","300x250","160x600","120x600","300x100","180x150","336x280","240x400","234x60","88x31","120x60","120x240","125x125","220x250","250x250","250x90","0x0","200x90","300x50","320x50","320x480","185x185","620x45","300x125","800x250"];p[77]="970x90",p[123]="970x250",p[43]="300x600",p[286]="970x66",p[3230]="970x280",p[429]="486x60",p[374]="700x500",p[934]="300x1050",p[1578]="320x100",p[331]="320x250",p[3301]="320x267",p[2730]="728x250",Object(t.registerBidder)(s)}},[369]);
pbjsChunk([276],{416:function(e,r,t){e.exports=t(417)},417:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"emxAdapter",function(){return m}),t.d(r,"spec",function(){return v});var s=t(0),i=t(1),o=t(2),n=t(11),a=t(12),d=t.n(a),u=t(10),p=t.n(u);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var l="emx_digital",g="https://js.brealtime.com/outstream/1.30.0/bundle.js",m={validateSizes:function(e){return s.isArray(e)&&void 0!==e[0]?e.every(function(e){return s.isArray(e)&&2===e.length}):(s.logWarn(l+": Sizes should be an array"),!1)},checkVideoContext:function(e){return e&&e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context&&("instream"===e.mediaTypes.video.context||"outstream"===e.mediaTypes.video.context)},buildBanner:function(e){var r=[],r=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;return m.validateSizes(r)||(s.logWarn(l+": could not detect mediaType banner sizes. Assigning to bid sizes instead"),r=e.sizes),{format:r.map(function(e){return{w:e[0],h:e[1]}}),w:r[0][0],h:r[0][1]}},formatVideoResponse:function(r,e,t){return r.vastXml=e.adm,t.bidderRequest&&t.bidderRequest.bids&&0<t.bidderRequest.bids.length&&p()(t.bidderRequest.bids,function(e){return r.requestId&&e.bidId&&r.requestId===e.bidId&&e.mediaTypes&&e.mediaTypes.video&&"outstream"===e.mediaTypes.video.context})&&(r.renderer=m.createRenderer(r,{id:e.id,url:g})),r},isMobile:function(){return/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)},isConnectedTV:function(){return/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)},getDevice:function(){return{ua:navigator.userAgent,js:1,dnt:"yes"===navigator.doNotTrack||"1"===navigator.doNotTrack||"1"===navigator.msDoNotTrack?1:0,h:screen.height,w:screen.width,devicetype:m.isMobile()?1:m.isConnectedTV()?3:2,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage}},cleanProtocols:function(e){return e.protocols&&d()(e.protocols,7)&&(s.logWarn(l+": VAST 4.0 is currently not supported. This protocol has been filtered out of the request."),e.protocols=e.protocols.filter(function(e){return 7!==e})),e},outstreamRender:function(r){r.renderer.push(function(){var e=r&&r.params&&r.params[0]&&r.params[0].video?r.params[0].video:{};window.emxVideoQueue=window.emxVideoQueue||[],window.queueEmxVideo({id:r.adUnitCode,adsResponses:r.vastXml,options:e}),window.emxVideoReady&&window.videojs&&window.emxVideoReady()})},createRenderer:function(e,r){var t=n.a.install({id:r.id,url:g,loaded:!1});try{t.setRender(m.outstreamRender)}catch(e){s.logWarn("Prebid Error calling setRender on renderer",e)}return t},buildVideo:function(e){var r=c(e.mediaTypes.video,e.params.video);return s.isArray(e.mediaTypes.video.playerSize[0])?(r.w=e.mediaTypes.video.playerSize[0][0],r.h=e.mediaTypes.video.playerSize[0][1]):(r.w=e.mediaTypes.video.playerSize[0],r.h=e.mediaTypes.video.playerSize[1]),m.cleanProtocols(r)},parseResponse:function(e){try{return decodeURIComponent(e.replace(/%(?![0-9][0-9a-fA-F]+)/g,"%25"))}catch(e){s.logError("emx_digitalBidAdapter","error",e)}},getReferrer:function(){try{return window.top.document.referrer}catch(e){return document.referrer}},getSite:function(e){return{domain:s.parseUrl(e.referer).hostname,page:e.referer,ref:m.getReferrer()}},getGdpr:function(e,r){return e.gdprConsent&&(r.regs={ext:{gdpr:!0===e.gdprConsent.gdprApplies?1:0}}),e.gdprConsent&&e.gdprConsent.gdprApplies&&(r.user={ext:{consent:e.gdprConsent.consentString}}),r},getSupplyChain:function(e,r){return e.bids[0]&&e.bids[0].schain&&(r.source={ext:{schain:e.bids[0].schain}}),r}},v={code:l,gvlid:183,supportedMediaTypes:[o.b,o.d],isBidRequestValid:function(e){if(!e||!e.params)return s.logWarn(l+": Missing bid or bid params."),!1;if(e.bidder!==l)return s.logWarn(l+': Must use "emx_digital" as bidder code.'),!1;if(!e.params.tagid||!s.isStr(e.params.tagid))return s.logWarn(l+": Missing tagid param or tagid present and not type String."),!1;if(e.mediaTypes&&e.mediaTypes.banner){var r=e.mediaTypes.banner.sizes?e.mediaTypes.banner.sizes:e.sizes;if(!m.validateSizes(r))return s.logWarn(l+": Missing sizes in bid"),!1}else if(e.mediaTypes&&e.mediaTypes.video){if(!m.checkVideoContext(e))return s.logWarn(l+": Missing video context: instream or outstream"),!1;if(!e.mediaTypes.video.playerSize)return s.logWarn(l+": Missing video playerSize"),!1}return!0},buildRequests:function(e,r){var a=[],t="https://hb.emxdgt.com?t="+(r.timeout||"")+"&ts="+Date.now()+"&src=pbjs",o=-1<location.protocol.indexOf("https")?1:0,i=m.getDevice(),n=m.getSite(r.refererInfo);s._each(e,function(e){var r=s.getBidIdParameter("tagid",e.params),t=parseFloat(s.getBidIdParameter("bidfloor",e.params))||0,i=!!e.mediaTypes.video,n=c({id:e.bidId,tid:e.transactionId,tagid:r,secure:o},i?{video:m.buildVideo(e)}:{banner:m.buildBanner(e)},0<t?{bidfloor:t,bidfloorcur:"USD"}:{});a.push(n)});var d={id:r.auctionId,imp:a,device:i,site:n,cur:"USD",version:"1.5.1"},d=m.getGdpr(r,c({},d));return d=m.getSupplyChain(r,c({},d)),r&&r.uspConsent&&(d.us_privacy=r.uspConsent),{method:"POST",url:t,data:JSON.stringify(d),options:{withCredentials:!0},bidderRequest:r}},interpretResponse:function(e,n){var a=[],r=e.body||{};return r.seatbid&&0<r.seatbid.length&&r.seatbid[0].bid&&r.seatbid.forEach(function(e){e=e.bid[0];var r=!1,t=m.parseResponse(e.adm)||"",i={requestId:e.id,cpm:e.price,width:e.w,height:e.h,creativeId:e.crid||e.id,dealId:e.dealid||null,currency:"USD",netRevenue:!0,ttl:e.ttl,ad:t};e.adm&&-1<e.adm.indexOf("<?xml version=")&&(r=!0,i=m.formatVideoResponse(i,c({},e),n)),i.mediaType=r?o.d:o.b,a.push(i)}),a},getUserSyncs:function(e,r,t){var i,n=[];return e.iframeEnabled&&(i="https://biddr.brealtime.com/check.html",t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):i+="?gdpr_consent=".concat(t.consentString)),n.push({type:"iframe",url:i})),n}};Object(i.registerBidder)(v)}},[416]);
pbjsChunk([231],{517:function(e,r,t){e.exports=t(518)},518:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return p});var U=t(0),A=t(2),B=t(3),i=t(10),y=t.n(i),n=t(519),s=t.n(n),a=t(1);function J(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,i=new Array(r);t<r;t++)i[t]=e[t];return i}function d(r,e){var t,i=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),i.push.apply(i,t)),i}function M(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach(function(e){var r,t,i;r=n,i=s[t=e],t in r?Object.defineProperty(r,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[t]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))})}return n}function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var f=[A.b,A.d],b=100,g=300,h=3600,v=!0,x={JPY:1};function T(e){var r={};return r.id=e.bidId,r.ext={},r.ext.siteID=e.params.siteId,!e.params.hasOwnProperty("id")||"string"!=typeof e.params.id&&"number"!=typeof e.params.id?r.ext.sid="".concat(e.params.size[0],"x").concat(e.params.size[1]):r.ext.sid=String(e.params.id),e.params.hasOwnProperty("bidFloor")&&e.params.hasOwnProperty("bidFloorCur")&&(r.bidfloor=e.params.bidFloor,r.bidfloorcur=e.params.bidFloorCur),r}function O(e){return Array.isArray(e)&&2===e.length&&s()(e[0])&&s()(e[1])}function j(e,r){if(O(e))return e[0]===r[0]&&e[1]===r[1];for(var t=0;t<e.length;t++)if(e[t][0]===r[0]&&e[t][1]===r[1])return 1}function C(e,r,t,i){var n=[],s="https://htlb.casalemedia.com/cygnus",a={},o=e[0].userId;if(o&&"object"===N(o)&&o.idl_env&&function(e,r,t,i,n,s){if(t)return r[n]=1,e.push({source:i,uids:[{id:t,ext:{rtiPartner:s}}]});U.logWarn("Tried to add a user ID from Prebid, the ID received was null")}(n,a,o.idl_env,"liveramp.com","LiveRampIp","idl"),window.headertag&&"function"==typeof window.headertag.getIdentityInfo){var d,p=window.headertag.getIdentityInfo();if(p&&"object"===N(p))for(var c in p){p.hasOwnProperty(c)&&(a.hasOwnProperty(c)||!(d=p[c]).responsePending&&d.data&&"object"===N(d.data)&&Object.keys(d.data).length&&n.push(d.data))}}var m={};m.id=e[0].bidderRequestId,m.site={},m.ext={},m.ext.source="prebid",m.ext.ixdiag={};var u,l=function(t){for(var i,n=t.map(function(e){return e.transactionId}).filter(function(e,r,t){return t.indexOf(e)===r}),s={mfu:0,bu:0,iu:0,nu:0,ou:0,allU:0,ren:!1},e=0;e<n.length;e++)!function(r){var e;i=t.filter(function(e){return e.transactionId===n[r]})[0],U.deepAccess(i,"mediaTypes")&&(1<Object.keys(i.mediaTypes).length&&s.mfu++,U.deepAccess(i,"mediaTypes.native")&&s.nu++,U.deepAccess(i,"mediaTypes.banner")&&s.bu++,"outstream"===U.deepAccess(i,"mediaTypes.video.context")&&(s.ou++,e="object"===N(U.deepAccess(i,"renderer")||U.deepAccess(i,"mediaTypes.video.renderer")),s.ren=s.ren&&e?U.deepAccess(s,"ren"):e),"instream"===U.deepAccess(i,"mediaTypes.video.context")&&s.iu++,s.allU++)}(e);return s}(e);for(var y in l)m.ext.ixdiag[y]=l[y];e[0].schain&&(m.source={ext:{schain:e[0].schain}}),0<n.length&&(m.user={},m.user.eids=n),document.referrer&&""!==document.referrer&&(m.site.ref=document.referrer),r&&(r.gdprConsent&&((u=r.gdprConsent).hasOwnProperty("gdprApplies")&&(m.regs={ext:{gdpr:u.gdprApplies?1:0}}),u.hasOwnProperty("consentString")&&(m.user=m.user||{},m.user.ext={consent:u.consentString||""},u.hasOwnProperty("addtlConsent")&&u.addtlConsent&&(m.user.ext.consented_providers_settings={consented_providers:u.addtlConsent}))),r.uspConsent&&U.deepSetValue(m,"regs.ext.us_privacy",r.uspConsent),r.refererInfo&&(m.site.page=r.refererInfo.referer));var f={},b=r&&r.bidderCode||"ix",g=B.b.getConfig(b);if(g){if("object"===N(g.firstPartyData)){var h=g.firstPartyData,v="?";for(var x in h)h.hasOwnProperty(x)&&(v+="".concat(encodeURIComponent(x),"=").concat(encodeURIComponent(h[x]),"&"));v=v.slice(0,-1),m.site.page+=v}"number"==typeof g.timeout&&(f.t=g.timeout),"boolean"==typeof g.detectMissingSizes?m.ext.ixdiag.dms=g.detectMissingSizes:m.ext.ixdiag.dms=!0}f.s=e[0].params.siteId,f.v=i,f.ac="j",f.sd=1,8.1===i&&(f.nf=1);var O=[],w={method:"GET",url:s,data:f},I=new Blob(["".concat(w.url).concat(U.parseQueryStringParameters(M(M({},w.data),{},{r:JSON.stringify(m)})))]).size,P=I,z=0,S=0,A=0;m.ext.ixdiag.msd=0,m.ext.ixdiag.msi=0,m.imp=[];for(var T,j,C,k,E,D=0,R=Object.keys(t),F=[];D<R.length&&O.length<4;){t[R[D]].hasOwnProperty("missingCount")&&(A=t[R[D]].missingCount),function(e,r){var t=new Blob([encodeURIComponent(JSON.stringify(e))]).size;if(t<r)return;for(;r<t;)e.hasOwnProperty("missingImps")&&0<e.missingImps.length?e.missingImps.pop():e.hasOwnProperty("ixImps")&&0<e.ixImps.length&&e.ixImps.pop(),t=new Blob([encodeURIComponent(JSON.stringify(e))]).size}(t[R[D]],8e3-I),t[R[D]].hasOwnProperty("missingImps")&&(S=t[R[D]].missingImps.length),(P+=new Blob([encodeURIComponent(JSON.stringify(t[R[D]]))]).size)<8e3?((T=m.imp).push.apply(T,J(t[R[D]].ixImps)),m.ext.ixdiag.msd+=A,m.ext.ixdiag.msi+=S,t[R[D]].hasOwnProperty("missingImps")&&F.push.apply(F,J(t[R[D]].missingImps)),D++):(C=U.deepClone(f),(j=m.imp).push.apply(j,J(F)),m.ext.ixdiag.sn=z,C.sn=z,z++,C.r=JSON.stringify(m),O.push({method:"GET",url:s,data:C}),F=[],P=I,m.imp=[],S=A=0,m.ext.ixdiag.msd=0,m.ext.ixdiag.msi=0)}return I<P&&P<8e3&&O.length<4&&(E=U.deepClone(f),(k=m.imp).push.apply(k,J(F)),0<O.length&&(m.ext.ixdiag.sn=z,E.sn=z),E.r=JSON.stringify(m),O.push({method:"GET",url:s,data:E})),O}function k(e,r){for(var t=0;t<e.length;t++)if(r[0]==e[t][0]&&r[1]==e[t][1])return e.splice(t,1),1}var p={code:"ix",gvlid:10,supportedMediaTypes:f,isBidRequestValid:function(e){var r,t,i=U.deepAccess(e,"params.video"),n=U.deepAccess(e,"params.size"),s=U.deepAccess(e,"mediaTypes.banner.sizes"),a=U.deepAccess(e,"mediaTypes.video"),o=U.deepAccess(e,"mediaTypes.video.playerSize"),d=e.params.hasOwnProperty("bidFloor"),p=e.params.hasOwnProperty("bidFloorCur");if(!O(e.params.size))return U.logError("ix bidder params: bid size has invalid format."),!1;if(e.hasOwnProperty("mediaType")&&!U.contains(f,e.mediaType))return!1;if(e.hasOwnProperty("mediaTypes")&&!s&&!o)return!1;if(!j(e.sizes,n)&&!(o&&j(o,n)||s&&j(s,n)))return U.logError("ix bidder params: bid size is not included in ad unit sizes or player size."),!1;if(a&&i){for(var c=!0,m=0,u=["mimes","minduration","maxduration","protocols"];m<u.length;m++){var l=u[m];if(!a.hasOwnProperty(l)&&!i.hasOwnProperty(l)){if("protocols"===l&&(a.hasOwnProperty("protocol")||i.hasOwnProperty("protocol")))continue;U.logError("ix bidder params: "+l+" is not included in either the adunit or params level"),c=!1}}if(!c)return!1}return"string"!=typeof e.params.siteId&&"number"!=typeof e.params.siteId?(U.logError("ix bidder params: siteId must be string or number value."),!1):!!(!d&&!p||d&&p&&(r=e.params.bidFloor,t=e.params.bidFloorCur,Boolean("number"==typeof r&&"string"==typeof t&&t.match(/^[A-Z]{3}$/))))||(U.logError("ix bidder params: bidFloor / bidFloorCur parameter has invalid format."),!1)},buildRequests:function(e,r){for(var t,i,n,s,a,o,d,p,c,m,u,l,y,f=[],b={},g={},h=null,v={},x=M(M({},{detectMissingSizes:!0}),B.b.getConfig("ix")),O=0;O<e.length;O++){(h=e[O]).mediaType!==A.d&&!U.deepAccess(h,"mediaTypes.video")||h.mediaType!==A.d&&!j(h.mediaTypes.video.playerSize,h.params.size)||(g.hasOwnProperty(h.transactionId)||(g[h.transactionId]={}),g[h.transactionId].hasOwnProperty("ixImps")||(g[h.transactionId].ixImps=[]),g[h.transactionId].ixImps.push(function(e){var r=T(e),t=U.deepAccess(e,"mediaTypes.video"),i=U.deepAccess(e,"mediaTypes.video.context"),n=["mimes","minduration","maxduration","protocols","protocol","startdelay","placement","linearity","skip","skipmin","skipafter","sequence","battr","maxextended","minbitrate","maxbitrate","boxingallowed","playbackmethod","playbackend","delivery","pos","companionad","api","companiontype","ext"];for(var s in r.video=U.deepClone(e.params.video),r.video.w=e.params.size[0],r.video.h=e.params.size[1],i&&("instream"===i?r.video.placement=1:"outstream"===i?r.video.placement=4:U.logWarn("ix bidder params: video context '".concat(i,"' is not supported"))),t)-1===n.indexOf(s)||r.video.hasOwnProperty(s)||(r.video[s]=t[s]);return r}(h))),(h.mediaType===A.b||U.deepAccess(h,"mediaTypes.banner")&&j(U.deepAccess(h,"mediaTypes.banner.sizes"),h.params.size)||!h.mediaType&&!h.mediaTypes)&&(m=void 0,(m=T(c=h)).banner={},m.banner.w=c.params.size[0],m.banner.h=c.params.size[1],m.banner.topframe=U.inIframe()?0:1,t=m,b.hasOwnProperty(h.transactionId)||(b[h.transactionId]={}),b[h.transactionId].hasOwnProperty("ixImps")||(b[h.transactionId].ixImps=[]),b[h.transactionId].ixImps.push(t),x.hasOwnProperty("detectMissingSizes")&&x.detectMissingSizes&&(n=v,s=t,p=d=o=a=void 0,p=(i=h).transactionId,n.hasOwnProperty(p)?(a=[],n[p].hasOwnProperty("missingSizes")&&(a=n[p].missingSizes),k(a,i.params.size),n[p].missingSizes=a):U.deepAccess(i,"mediaTypes.banner.sizes")&&(k(o=U.deepClone(i.mediaTypes.banner.sizes),i.params.size),d={missingSizes:o,impression:s},n[p]=d)))}for(var w in v)if(v.hasOwnProperty(w)){var I=v[w].missingSizes;b.hasOwnProperty(w)||(b[w]={}),b[w].hasOwnProperty("missingImps")||(b[w].missingImps=[],b[w].missingCount=0);for(var P=v[w].impression,z=0;z<I.length;z++){var S=(u=P,l=I[z],y=void 0,(y=U.deepClone(u)).ext.sid="".concat(l[0],"x").concat(l[1]),y.banner.w=l[0],y.banner.h=l[1],y);b[w].missingImps.push(S),b[w].missingCount++}}return 0<Object.keys(b).length&&f.push.apply(f,J(C(e,r,b,7.2))),0<Object.keys(g).length&&f.push.apply(f,J(C(e,r,g,8.1))),f},interpretResponse:function(e,r){var t=[];if(!e.hasOwnProperty("body")||!e.body.hasOwnProperty("seatbid"))return t;for(var i,n,s,a,o=e.body,d=o.seatbid,p=0;p<d.length;p++)if(d[p].hasOwnProperty("bid"))for(var c=d[p].bid,m=JSON.parse(r.data.r),u=0;u<c.length;u++){var l=function(r,e){if(r)return y()(e,function(e){return e.id===r})}(c[u].impid,m.imp);i=c[u],n=o.cur,s=l,a=void 0,a={},x.hasOwnProperty(n)?a.cpm=i.price/x[n]:a.cpm=i.price/b,a.requestId=i.impid,a.dealId=U.deepAccess(i,"ext.dealid"),a.netRevenue=v,a.currency=n,a.creativeId=i.hasOwnProperty("crid")?i.crid:"-",U.deepAccess(i,"ext.vasturl")?(a.vastUrl=i.ext.vasturl,a.width=s.video.w,a.height=s.video.h,a.mediaType=A.d,a.ttl=h):(a.ad=i.adm,a.width=i.w,a.height=i.h,a.mediaType=A.b,a.ttl=g),a.meta={},a.meta.networkId=U.deepAccess(i,"ext.dspid"),a.meta.brandId=U.deepAccess(i,"ext.advbrandid"),a.meta.brandName=U.deepAccess(i,"ext.advbrand"),i.adomain&&0<i.adomain.length&&(a.meta.advertiserDomains=i.adomain),t.push(a)}return t},transformBidParams:function(e){return U.convertTypes({siteID:"number"},e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://js-sec.indexww.com/um/ixmatch.html"}]:[]}};Object(a.registerBidder)(p)}},[517]);
pbjsChunk([181],{643:function(e,t,r){e.exports=r(644)},644:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"USER_ID_CODE_TO_QUERY_ARG",function(){return f}),r.d(t,"spec",function(){return o});var c=r(3),n=r(1),d=r(0),u=r(2);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=[u.b,u.d],p="hb_pb",m="3.0.3",l="USD",f={britepoolid:"britepoolid",criteoId:"criteoid",digitrustid:"digitrustid",id5id:"id5id",idl_env:"lre",lipb:"lipbid",netId:"netid",parrableId:"parrableid",pubcid:"pubcid",tdid:"ttduuid"},o={code:"openx",gvlid:69,supportedMediaTypes:a,isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;return d.deepAccess(e,"mediaTypes.banner")&&t?!!e.params.unit||0<d.deepAccess(e,"mediaTypes.banner.sizes.length"):!(!e.params.unit||!t)},buildRequests:function(e,n){if(0===e.length)return[];var i=[],t=s(e.reduce(function(e,t){var r;return r=t,d.deepAccess(r,"mediaTypes.video")&&!d.deepAccess(r,"mediaTypes.banner")||r.mediaType===u.d?e[0].push(t):e[1].push(t),e},[[],[]]),2),r=t[0],a=t[1];return 0<a.length&&i.push(function(e,t){var n=[],i=!1,r=h(e,t),a=d._map(e,function(e){return e.params.unit});r.aus=d._map(e,function(e){return d.parseSizesInput(e.mediaTypes.banner.sizes).join(",")}).join("|"),r.divIds=d._map(e,function(e){return encodeURIComponent(e.adUnitCode)}).join(","),a.some(function(e){return e})&&(r.auid=a.join(","));e.some(function(e){return e.params.doNotTrack})&&(r.ns=1);!0!==c.b.getConfig("coppa")&&!e.some(function(e){return e.params.coppa})||(r.tfcd=1);e.forEach(function(t){var e,r;t.params.customParams?(e=d._map(Object.keys(t.params.customParams),function(e){return function(e,t){var r=t[e];d.isArray(r)&&(r=r.join(","));return(e.toLowerCase()+"="+r.toLowerCase()).replace("+",".").replace("/","_")}(e,t.params.customParams)}),r=window.btoa(e.join("&")),i=!0,n.push(r)):n.push("")}),i&&(r.tps=n.join(","));var s=[],o=!1;e.forEach(function(e){var t=function(e,t){var r={},n=c.b.getConfig("currency.adServerCurrency")||l;"function"==typeof e.getFloor&&(r=e.getFloor({currency:n,mediaType:t,size:"*"}));var i=r.floor||e.params.customFloor||0;return Math.round(1e3*i)}(e,u.b);t?(s.push(t),o=!0):s.push(0)}),o&&(r.aumfs=s.join(","));return{method:"GET",url:r.ph?"https://u.openx.net/w/1.0/arj":"https://".concat(e[0].params.delDomain,"/w/1.0/arj"),data:r,payload:{bids:e,startTime:new Date}}}(a,n)),0<r.length&&r.forEach(function(e){var t,r;i.push({method:"GET",url:(r=function(e,t){var r,n,i=h([e],t),a=d.deepAccess(e,"params.video")||{},s=d.deepAccess(e,"mediaTypes.video.context"),o=d.deepAccess(e,"mediaTypes.video.playerSize");d.isArray(e.sizes)&&2===e.sizes.length&&!d.isArray(e.sizes[0])?(r=parseInt(e.sizes[0],10),n=parseInt(e.sizes[1],10)):d.isArray(e.sizes)&&d.isArray(e.sizes[0])&&2===e.sizes[0].length?(r=parseInt(e.sizes[0][0],10),n=parseInt(e.sizes[0][1],10)):d.isArray(o)&&2===o.length&&(r=parseInt(o[0],10),n=parseInt(o[1],10));Object.keys(a).forEach(function(e){"openrtb"===e?(a[e].w=r||a[e].w,a[e].v=n||a[e].v,i[e]=JSON.stringify(a[e])):e in i||"url"===e||(i[e]=a[e])}),i.auid=e.params.unit,i.vwd=r||a.vwd,i.vht=n||a.vht,"outstream"===s&&(i.vos="101");a.mimes&&(i.vmimes=a.mimes);e.params.test&&(i.vtest=1);return i}(t=e,n)).ph?"https://u.openx.net/v/1.0/avjp":"https://".concat(t.params.delDomain,"/v/1.0/avjp"),data:r,payload:{bid:t,startTime:new Date}})}),i},interpretResponse:function(e,t){var r=e.body;return((/avjp$/.test(t.url)?u.d:u.b)===u.d?function(e,t){var r=t.bid,n=(t.startTime,[]);{var i,a;void 0!==e&&""!==e.vastUrl&&0<e.pub_rev&&(i=d.parseUrl(e.vastUrl).search||{},(a={}).requestId=r.bidId,a.ttl=300,a.netRevenue=!0,a.currency=e.currency,a.cpm=parseInt(e.pub_rev,10)/1e3,a.width=parseInt(e.width,10),a.height=parseInt(e.height,10),a.creativeId=e.adid,a.vastUrl=e.vastUrl,a.mediaType=u.d,e.ph=i.ph,e.colo=i.colo,e.ts=i.ts,n.push(a))}return n}:function(e,t){for(var r=t.bids,n=(t.startTime,e.ads.ad),i=[],a=0;a<n.length;a++){var s,o=n[a],c=parseInt(o.idx,10),d={};d.requestId=r[c].bidId,o.pub_rev&&(d.cpm=Number(o.pub_rev)/1e3,(s=o.creative[0])&&(d.width=s.width,d.height=s.height),d.creativeId=s.id,d.ad=o.html,o.deal_id&&(d.dealId=o.deal_id),d.ttl=300,d.netRevenue=!0,d.currency=o.currency,o.tbd&&(d.tbd=o.tbd),d.ts=o.ts,d.meta={},o.brand_id&&(d.meta.brandId=o.brand_id),o.adv_id&&(d.meta.dspid=o.adv_id),i.push(d))}return i})(r,t.payload)},getUserSyncs:function(e,t,r,n){if(e.iframeEnabled||e.pixelEnabled)return[{type:e.iframeEnabled?"iframe":"image",url:d.deepAccess(t,"0.body.ads.pixels")||d.deepAccess(t,"0.body.pixels")||function(e,t){var r=[];e&&(r.push("gdpr="+(e.gdprApplies?1:0)),r.push("gdpr_consent="+encodeURIComponent(e.consentString||"")));t&&r.push("us_privacy="+encodeURIComponent(t));return"".concat("https://u.openx.net/w/1.0/pd").concat(0<r.length?"?"+r.join("&"):"")}(r,n)}]},transformBidParams:function(e){return d.convertTypes({unit:"string",customFloor:"number"},e)}};function h(e,t){var r,n,i,a,s=d.inIframe(),o={ju:c.b.getConfig("pageUrl")||t.refererInfo.referer,ch:document.charSet||document.characterSet,res:"".concat(screen.width,"x").concat(screen.height,"x").concat(screen.colorDepth),ifr:s,tz:(new Date).getTimezoneOffset(),tws:function(e){var t,r,n,i=window,a=document,s=a.documentElement;if(e){try{i=window.top,a=window.top.document}catch(e){return}s=a.documentElement,n=a.body,t=i.innerWidth||s.clientWidth||n.clientWidth,r=i.innerHeight||s.clientHeight||n.clientHeight}else s=a.documentElement,t=i.innerWidth||s.clientWidth,r=i.innerHeight||s.clientHeight;return"".concat(t,"x").concat(r)}(s),be:1,bc:e[0].params.bc||"".concat(p,"_").concat(m),dddid:d._map(e,function(e){return e.transactionId}).join(","),nocache:(new Date).getTime()};return e[0].params.platform&&(o.ph=e[0].params.platform),t.gdprConsent&&(void 0!==(r=t.gdprConsent).consentString&&(o.gdpr_consent=r.consentString),void 0!==r.gdprApplies&&(o.gdpr=r.gdprApplies?1:0),"iab"===c.b.getConfig("consentManagement.cmpApi")&&(o.x_gdpr_f=1)),t&&t.uspConsent&&(o.us_privacy=t.uspConsent),d.deepAccess(e[0],"crumbs.pubcid")&&d.deepSetValue(e[0],"userId.pubcid",d.deepAccess(e[0],"crumbs.pubcid")),n=o,i=e[0].userId,d._each(i,function(e,t){var r=f[t];if(f.hasOwnProperty(t))switch(t){case"digitrustid":n[r]=d.deepAccess(e,"data.id");break;case"lipb":n[r]=e.lipbid;break;case"parrableId":n[r]=e.eid;break;case"id5id":n[r]=e.uid;break;default:n[r]=e}}),o=n,e[0].schain&&(o.schain=(a=e[0].schain,"".concat(a.ver,",").concat(a.complete,"!").concat(function(e){var r=["asi","sid","hp","rid","name","domain"];return e.map(function(t){return r.map(function(e){return t[e]||""}).join(",")}).join("!")}(a.nodes)))),o}Object(n.registerBidder)(o)}},[643]);
pbjsChunk([158],{706:function(e,r,t){e.exports=t(707)},707:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return i});var c=t(0),n=t(1),p=t(11);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={TITLE_LEN:100,DESCR_LEN:200,SPONSORED_BY_LEN:50,IMG_MIN:150,ICON_MIN:50},d=["cp","ct","cf","video","battr","bcat","badv","bidfloor"],i={code:"pulsepoint",gvlid:81,aliases:["pulseLite","pulsepointLite"],supportedMediaTypes:["banner","native","video"],isBidRequestValid:function(e){return!!(e&&e.params&&e.params.cp&&e.params.ct)},buildRequests:function(e,r){var t,n,i;return{method:"POST",url:"https://bid.contextweb.com/header/ortb?src=prebid",data:{id:e[0].bidderRequestId,imp:e.map(function(e){return{id:(r=e).bidId,banner:function(e){var r=function(e){var r=c.deepAccess(e,"mediaTypes.banner.sizes");return r&&c.isArray(r)?r.filter(function(e){return c.isArray(e)&&2===e.length}).map(function(e){return{w:e[0],h:e[1]}}):null}(e),t=function(e,r){if(e.params.cf){var t=e.params.cf.toUpperCase().split("X"),n=parseInt(e.params.cw||t[0],10),i=parseInt(e.params.ch||t[1],10);return[n,i]}return r&&0<r.length?[r[0].w,r[0].h]:[1,1]}(e,r);return e.mediaTypes&&e.mediaTypes.banner?{w:t[0],h:t[1],battr:e.params.battr,format:r}:null}(r),native:function(e){if(e.nativeParams){var r=[];return u(r,function(e,r,t){return r?{id:e,required:r.required?1:0,title:{len:r.len||t}}:null}(r.length+1,e.nativeParams.title,s.TITLE_LEN)),u(r,l(r.length+1,e.nativeParams.body,2,s.DESCR_LEN)),u(r,l(r.length+1,e.nativeParams.sponsoredBy,1,s.SPONSORED_BY_LEN)),u(r,o(r.length+1,e.nativeParams.icon,1,s.ICON_MIN,s.ICON_MIN)),u(r,o(r.length+1,e.nativeParams.image,3,s.IMG_MIN,s.IMG_MIN)),{request:JSON.stringify({assets:r}),ver:"1.1",battr:e.params.battr}}return null}(r),tagid:r.params.ct.toString(),video:function(e){return e.params.video?a({},e.params.video,{battr:e.params.battr}):null}(r),bidfloor:r.params.bidfloor,ext:function(r){var t={},n={};return d.forEach(function(e){return n[e]=1}),Object.keys(r.params).forEach(function(e){n[e]||(t[e]=r.params[e])}),0<Object.keys(t).length?{prebid:t}:null}(r)};var r}),site:(n=r,i=(t=e)&&0<t.length?t[0].params.cp:"0",t[0].params.app?null:{publisher:{id:i.toString()},ref:function(){try{return window.top.document.referrer}catch(e){return document.referrer}}(),page:n&&n.refererInfo?n.refererInfo.referer:""}),app:function(e){var r=e&&0<e.length?e[0].params.cp:"0",t=e[0].params.app;if(t)return{publisher:{id:r.toString()},bundle:t.bundle,storeurl:t.storeUrl,domain:t.domain};return null}(e),device:{ua:navigator.userAgent,language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage},bcat:e[0].params.bcat,badv:e[0].params.badv,user:function(e,r){var t={};r&&r.gdprConsent&&(t.consent=r.gdprConsent.consentString);{var n,i;e&&e.userId&&(t.eids=[],m(t.eids,e.userId.pubcid,"pubcommon"),m(t.eids,e.userId.britepoolid,"britepool.com"),m(t.eids,e.userId.criteoId,"criteo"),m(t.eids,e.userId.idl_env,"identityLink"),m(t.eids,c.deepAccess(e,"userId.id5id.uid"),"id5-sync.com",c.deepAccess(e,"userId.id5id.ext")),m(t.eids,c.deepAccess(e,"userId.parrableId.eid"),"parrable.com"),e.userId.lipb&&e.userId.lipb.lipbid&&m(t.eids,e.userId.lipb.lipbid,"liveintent.com"),m(t.eids,e.userId.tdid,"adserver.org",{rtiPartner:"TDID"}),(n=e.userId.digitrustid)&&n.data&&(i={},n.data.id&&(i.id=n.data.id),n.data.keyv&&(i.keyv=n.data.keyv),t.digitrust=i))}return{ext:t}}(e[0],r),regs:function(e){if(e.gdprConsent||e.uspConsent){var r={};return e.gdprConsent&&(r.gdpr=e.gdprConsent.gdprApplies?1:0),e.uspConsent&&(r.us_privacy=e.uspConsent),{ext:r}}return null}(r),source:function(e){if(e)return{ext:{schain:e}};return null}(e[0].schain)},bidderRequest:r}},interpretResponse:function(e,r){return function(e,r){var a={},s={},d={},u=r.body;e.data.imp.forEach(function(e){a[e.id]=e}),u&&u.seatbid.forEach(function(e){return e.bid.forEach(function(e){s[e.impid]=e})});e.bidderRequest&&e.bidderRequest.bids&&e.bidderRequest.bids.forEach(function(e){d[e.bidId]=e});var o=[];return Object.keys(a).forEach(function(e){var r,t,n,i;s[e]&&(r={requestId:e,cpm:s[e].price,creative_id:s[e].crid,creativeId:s[e].crid,adId:e,ttl:s[e].exp||20,netRevenue:!0,currency:u.cur||"USD"},a[e].video?(d[e]&&"outstream"===c.deepAccess(d[e],"mediaTypes.video.context")&&(r.renderer=(t=c.deepAccess(d[e],"renderer.options"),n=c.deepAccess(s[e],"ext.outstream"),(i=p.a.install({url:n.rendererUrl,config:{defaultOptions:n.config,rendererOptions:t,type:n.type},loaded:!1})).setRender(function(r){r.renderer.push(function(){var e=r.renderer.getConfig();(new window.PulsePointOutstreamRenderer).render({adUnitCode:r.adUnitCode,vastXml:r.vastXml,type:e.type,defaultOptions:e.defaultOptions,rendererOptions:t})})}),i)),r.vastXml=s[e].adm,r.mediaType="video",r.width=s[e].w,r.height=s[e].h):a[e].banner?(r.ad=s[e].adm,r.width=s[e].w||a[e].banner.w,r.height=s[e].h||a[e].banner.h):a[e].native&&(r.native=function(e,r){if(e.native){var t=function(e){try{if(e)return JSON.parse(e)}catch(e){c.logError("pulsepointLite.safeParse","ERROR",e)}return null}(r.adm),n={};if(t&&t.native&&t.native.assets)return t.native.assets.forEach(function(e){n.title=e.title?e.title.text:n.title,n.body=e.data&&2===e.data.type?e.data.value:n.body,n.sponsoredBy=e.data&&1===e.data.type?e.data.value:n.sponsoredBy,n.image=e.img&&3===e.img.type?e.img.url:n.image,n.icon=e.img&&1===e.img.type?e.img.url:n.icon}),t.native.link&&(n.clickUrl=encodeURIComponent(t.native.link.url)),n.impressionTrackers=t.native.imptrackers,n}return null}(a[e],s[e]),r.mediaType="native"),o.push(r))}),o}(r,e)},getUserSyncs:function(e){return e.iframeEnabled?[{type:"iframe",url:"https://bh.contextweb.com/visitormatch"}]:e.pixelEnabled?[{type:"image",url:"https://bh.contextweb.com/visitormatch/prebid"}]:void 0},transformBidParams:function(e){return c.convertTypes({cf:"string",cp:"number",ct:"number"},e)}};function u(e,r){r&&e.push(r)}function o(e,r,t,n,i){return r?{id:e,required:r.required?1:0,img:{type:t,wmin:r.wmin||n,hmin:r.hmin||i}}:null}function l(e,r,t,n){return r?{id:e,required:r.required?1:0,data:{type:t,len:r.len||n}}:null}function m(e,r,t,n){var i;r&&(i={id:r},n&&(i.ext=n),e.push({source:t,uids:[i]}))}Object(n.registerBidder)(i)}},[706]);
pbjsChunk([144],{738:function(e,r,a){e.exports=a(739)},739:function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),a.d(r,"spec",function(){return i});var g=a(0),t=a(1),s=a(2);var i=new function(){this.code="rhythmone",this.supportedMediaTypes=[s.d,s.b];var o=[2,3,5,6],c=["video/mp4"],m=[1,2,3,4],l=[1],u=[1,2,5],v={},h=this;function d(e,r){var a,t=[],s=0;r&&r.refererInfo&&r.refererInfo.stack.length&&((a=document.createElement("a")).href=r.refererInfo.stack[0],s="https:"==a.protocol?1:0);for(var i,n=0;n<e.length;n++){v[e[n].adUnitCode]=e[n];var d,p={};p.id=e[n].adUnitCode,p.bidfloor=parseFloat(g.deepAccess(e[n],"params.floor"))||0,p.secure=s,!g.deepAccess(e[n],"mediaTypes.banner")&&"banner"!==g.deepAccess(e[n],"mediaType")||(d=function(e){var r=e.sizes;e.mediaTypes&&e.mediaTypes.banner&&(r=e.mediaTypes.banner.sizes);var a=g.parseSizesInput(r),t=[];if(a.forEach(function(e){var r;!e||(r=f(e.split("x")))&&t.push({w:r[0],h:r[1]})}),t.length)return{format:t};return!1}(e[n]))&&(p.banner=d),!g.deepAccess(e[n],"mediaTypes.video")&&"video"!==g.deepAccess(e[n],"mediaType")||(p.video=function(e){var r=[];{var a,t;g.deepAccess(e,"mediaTypes.video.playerSize")&&(a=e.mediaTypes.video.playerSize,g.isArray(e.mediaTypes.video.playerSize[0])&&(a=e.mediaTypes.video.playerSize[0]),(t=f(a))&&(r=t))}return{mimes:g.deepAccess(e,"mediaTypes.video.mimes")||c,protocols:g.deepAccess(e,"mediaTypes.video.protocols")||o,w:r[0],h:r[1],startdelay:g.deepAccess(e,"mediaTypes.video.startdelay")||0,skip:g.deepAccess(e,"mediaTypes.video.skip")||0,playbackmethod:g.deepAccess(e,"mediaTypes.video.playbackmethod")||m,delivery:g.deepAccess(e,"mediaTypes.video.delivery")||l,api:g.deepAccess(e,"mediaTypes.video.api")||u}}(e[n])),(p.banner||p.video)&&(p.ext={bidder:{placementId:(i=e[n]).params.placementId,zone:i.params&&i.params.zone?i.params.zone:"1r",path:i.params&&i.params.path?i.params.path:"mvo"}},t.push(p))}return t}function f(e){var r=parseInt(e[0]),a=parseInt(e[1]);return r==r&&a==a&&[r,a]}function p(e,r){var a,t,s,i,n={id:e[0].bidderRequestId,imp:d(e,r),site:(i={domain:"",page:"",ref:""},(a=r)&&a.refererInfo&&(t=a.refererInfo,i.ref=t.referer,t.stack.length&&(i.page=t.stack[t.stack.length-1],(s=document.createElement("a")).href=t.stack[0],i.domain=s.hostname)),i),device:{ua:navigator.userAgent,ip:"",dnt:g.getDNT()?1:0},user:{ext:{consent:g.deepAccess(r,"gdprConsent.gdprApplies")?r.gdprConsent.consentString:""}},at:1,tmax:1e3,regs:{ext:{gdpr:!!g.deepAccess(r,"gdprConsent.gdprApplies")&&Boolean(1&r.gdprConsent.gdprApplies)}}};return e[0].schain&&(n.source={ext:{schain:e[0].schain}}),n}function y(e,r){for(var a=0;a<r.length;a++)if(r[a].params&&r[a].params[e])return r[a].params[e]}this.isBidRequestValid=function(e){return!(!e.params||!e.params.placementId)},this.getUserSyncs=function(e,r,a){return[]},this.buildRequests=function(e,r){var a=y("placementId",e);if(void 0===a||e.length<1)return[];var t=y("endpoint",e)||"https://tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",s=y("zone",e)||"1r",i=y("path",e)||"mvo";t=(t=(t=t.replace(/\{placementId\}/i,a)).replace(/\{zone\}/i,s)).replace(/\{path\}/i,i);var n=/(^v|(\.0)+$)/gi;t+="&hbv="+"4.27.0-pre".replace(n,"")+","+"2.1".replace(n,"");var d=p(e,r);return d.imp.length?{method:"POST",url:t,data:JSON.stringify(d)}:{}},this.interpretResponse=function(e){var r=e.body||[],a=[],t=0;if(r.seatbid){for(var s=[],t=0;t<r.seatbid.length;t++)for(var i=0;i<r.seatbid[t].bid.length;i++)s.push(r.seatbid[t].bid[i]);r=s}for(t=0;t<r.length;t++){var n=r[t],d=v[n.impid],p={requestId:d.bidId,bidderCode:h.code,cpm:parseFloat(n.price),width:n.w,height:n.h,creativeId:n.crid,currency:"USD",netRevenue:!0,ttl:350};d.mediaTypes&&d.mediaTypes.video?(p.vastUrl=n.nurl,p.mediaType="video",p.ttl=600):p.ad=n.adm,a.push(p)}return a}};Object(t.registerBidder)(i)}},[738]);
pbjsChunk([136],{760:function(e,r,t){e.exports=t(761)},761:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"spec",function(){return h}),r.hasVideoMediaType=d,t.d(r,"resetRubiConf",function(){return C}),r.masSizeOrdering=I,r.determineRubiconVideoSizeId=O,r.getPriceGranularity=k,r.hasValidVideoParams=w,r.hasValidSupplyChainParams=R,r.encodeParam=z,r.resetUserSync=function(){T=!1};var p=t(0),n=t(1),l=t(3),m=t(2),i=t(10),u=t.n(i);function o(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function f(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach(function(e){v(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(t.push(a.value),!r||t.length!==r);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(i)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y={};l.b.getConfig("rubicon",function(e){p.mergeDeep(y,e.rubicon)});var x={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",548:"500x1000"};p._each(x,function(e,r){return x[e]=r});var h={code:"rubicon",gvlid:52,supportedMediaTypes:[m.b,m.d],isBidRequestValid:function(e){if("object"!==g(e.params))return!1;for(var r=0,t=["accountId","siteId","zoneId"];r<t.length;r++)if(e.params[t[r]]=parseInt(e.params[t[r]]),isNaN(e.params[t[r]]))return p.logError("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var n=S(e,!0);return!!n&&("video"!==n||w(e))},buildRequests:function(e,c){var i,r=e.filter(function(e){return"video"===S(e)}).map(function(e){e.startTime=(new Date).getTime();var r,t,n,i={id:e.transactionId,test:l.b.getConfig("debug")?1:0,cur:["USD"],source:{tid:e.auctionId},tmax:c.timeout,imp:[{exp:l.b.getConfig("s2sConfig.defaultTtl"),id:e.adUnitCode,secure:1,ext:v({},e.bidder,e.params),video:p.deepAccess(e,"mediaTypes.video")||{}}],ext:{prebid:{cache:{vastxml:{returnCreative:!0===y.returnVast}},targeting:{includewinners:!0,includebidderkeys:!1,pricegranularity:k(l.b)},bidders:{rubicon:{integration:y.int_type||"pbjs"}}}}};if("rubicon"!==e.bidder&&(i.ext.prebid.aliases=v({},e.bidder,"rubicon")),"function"!=typeof e.getFloor||y.disableFloors)r=parseFloat(p.deepAccess(e,"params.floor"));else{try{t=e.getFloor({currency:"USD",mediaType:"video",size:j(e,"video")})}catch(e){p.logError("Rubicon: getFloor threw an error: ",e)}r="object"!==g(t)||"USD"!==t.currency||isNaN(parseInt(t.floor))?void 0:parseFloat(t.floor)}isNaN(r)||(i.imp[0].bidfloor=r),i.imp[0].ext[e.bidder].video.size_id=O(e),function(r,t,e){if(!r)return;"object"===g(l.b.getConfig("app"))?r.app=l.b.getConfig("app"):r.site={page:_(t,e)};"object"===g(l.b.getConfig("device"))&&(r.device=l.b.getConfig("device"));t.params.video.language&&["site","device"].forEach(function(e){r[e]&&(r[e].content=s({language:t.params.video.language},r[e].content))})}(i,e,c),function(e,r){"object"===g(e.imp[0].video)&&void 0===e.imp[0].video.skip&&(e.imp[0].video.skip=r.params.video.skip);"object"===g(e.imp[0].video)&&void 0===e.imp[0].video.skipafter&&(e.imp[0].video.skipafter=r.params.video.skipdelay);"object"===g(e.imp[0].video)&&void 0===e.imp[0].video.pos&&("atf"===r.params.position?e.imp[0].video.pos=1:"btf"===r.params.position&&(e.imp[0].video.pos=3));var t=j(r,"video");e.imp[0].video.w=t[0],e.imp[0].video.h=t[1]}(i,e),c.gdprConsent&&("boolean"==typeof c.gdprConsent.gdprApplies&&(n=c.gdprConsent.gdprApplies?1:0),p.deepSetValue(i,"regs.ext.gdpr",n),p.deepSetValue(i,"user.ext.consent",c.gdprConsent.consentString)),c.uspConsent&&p.deepSetValue(i,"regs.ext.us_privacy",c.uspConsent);var o=p.deepAccess(c,"bids.0.userIdAsEids");o&&o.length&&p.deepSetValue(i,"user.ext.eids",o);var a=l.b.getConfig("user.id");return a&&p.deepSetValue(i,"user.id",a),!0===l.b.getConfig("coppa")&&p.deepSetValue(i,"regs.coppa",1),e.schain&&R(e.schain)&&p.deepSetValue(i,"source.ext.schain",e.schain),A(e,m.d,i),e.storedAuctionResponse&&p.deepSetValue(i.imp[0],"ext.prebid.storedauctionresponse.id",e.storedAuctionResponse.toString()),p.deepSetValue(i.imp[0],"ext.prebid.auctiontimestamp",c.auctionStart),{method:"POST",url:"https://".concat(y.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:i,bidRequest:e}});return!0!==y.singleRequest?r.concat(e.filter(function(e){return"banner"===S(e)}).map(function(e){var n=h.createSlotParams(e,c);return{method:"GET",url:"https://".concat(y.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:h.getOrderedParams(n).reduce(function(e,r){var t=n[r];return p.isStr(t)&&""!==t||p.isNumber(t)?"".concat(e).concat(z(r,t),"&"):e},"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})):(i=e.filter(function(e){return"banner"===S(e)}).reduce(function(e,r){return(e[r.params.siteId]=e[r.params.siteId]||[]).push(r),e},{}),r.concat(Object.keys(i).reduce(function(r,e){var t,n;return t=i[e],n=10,t.map(function(e,r){return r%n==0?t.slice(r,r+n):null}).filter(function(e){return e}).forEach(function(e){var n=h.combineSlotUrlParams(e.map(function(e){return h.createSlotParams(e,c)}));r.push({method:"GET",url:"https://".concat(y.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:h.getOrderedParams(n).reduce(function(e,r){var t=n[r];return p.isStr(t)&&""!==t||p.isNumber(t)?"".concat(e).concat(z(r,t),"&"):e},"")+"slots=".concat(e.length,"&rand=").concat(Math.random()),bidRequest:e})}),r},[])))},getOrderedParams:function(e){var r=/^tg_v/,t=/^tg_i/,n=/^eid_|^tpid_/,i=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","rp_schain"].concat(Object.keys(e).filter(function(e){return n.test(e)})).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter(function(e){return r.test(e)})).concat(Object.keys(e).filter(function(e){return t.test(e)})).concat(["tk_flint","x_source.tid","x_source.pchain","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return i.concat(Object.keys(e).filter(function(e){return-1===i.indexOf(e)}))},combineSlotUrlParams:function(i){if(1===i.length)return i[0];var n=i.reduce(function(r,t,n){return Object.keys(t).forEach(function(e){r.hasOwnProperty(e)||(r[e]=new Array(i.length)),r[e].splice(n,1,t[e])}),r},{}),o=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(n).forEach(function(e){var r=n[e].join(";"),t=r.match(o);n[e]=t?t[1]:r}),n},createSlotParams:function(e,r){e.startTime=(new Date).getTime();var t,n=e.params,i=j(e,"banner"),o=b(n.latLong||[],2),a=o[0],c=o[1],s={account_id:n.accountId,site_id:n.siteId,zone_id:n.zoneId,size_id:i[0],alt_size_ids:i.slice(1).join(",")||void 0,rp_floor:.01<=(n.floor=parseFloat(n.floor))?n.floor:void 0,rp_secure:"1",tk_flint:"".concat(y.int_type||"pbjs_lite","_v4.27.0-pre"),"x_source.tid":e.auctionId,"x_source.pchain":n.pchain,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:n.userId,"p_geo.latitude":isNaN(parseFloat(a))?void 0:parseFloat(a).toFixed(4),"p_geo.longitude":isNaN(parseFloat(c))?void 0:parseFloat(c).toFixed(4),"tg_fl.eid":e.code,rf:_(e,r)};if("function"==typeof e.getFloor&&!y.disableFloors){try{t=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){p.logError("Rubicon: getFloor threw an error: ",e)}s.rp_hard_floor="object"!==g(t)||"USD"!==t.currency||isNaN(parseInt(t.floor))?void 0:t.floor}s.p_pos="atf"===n.position||"btf"===n.position?n.position:"";var d=l.b.getConfig("user.id");return d&&(s.ppuid=d),e.userIdAsEids&&e.userIdAsEids.forEach(function(r){try{var e;"adserver.org"===r.source?(s.tpid_tdid=r.uids[0].id,s["eid_adserver.org"]=r.uids[0].id):"liveintent.com"===r.source?(s["tpid_liveintent.com"]=r.uids[0].id,s["eid_liveintent.com"]=r.uids[0].id,r.ext&&Array.isArray(r.ext.segments)&&r.ext.segments.length&&(s["tg_v.LIseg"]=r.ext.segments.join(","))):"liveramp.com"===r.source?s.x_liverampidl=r.uids[0].id:"sharedid.org"===r.source?s["eid_sharedid.org"]="".concat(r.uids[0].id,"^").concat(r.uids[0].atype,"^").concat(r.uids[0].ext&&r.uids[0].ext.third||""):"id5-sync.com"===r.source?s["eid_id5-sync.com"]="".concat(r.uids[0].id,"^").concat(r.uids[0].atype,"^").concat(r.uids[0].ext&&r.uids[0].ext.linkType||""):s["eid_".concat(r.source)]="".concat(r.uids[0].id,"^").concat(r.uids[0].atype||""),s.ppuid||(e=u()(r.uids,function(e){return e.ext&&"ppuid"===e.ext.stype}))&&e.id&&(s.ppuid=e.id)}catch(e){p.logWarn("Rubicon: error reading eid:",r,e)}}),r.gdprConsent&&("boolean"==typeof r.gdprConsent.gdprApplies&&(s.gdpr=Number(r.gdprConsent.gdprApplies)),s.gdpr_consent=r.gdprConsent.consentString),r.uspConsent&&(s.us_privacy=encodeURIComponent(r.uspConsent)),A(e,m.b,s),!0===l.b.getConfig("coppa")&&(s.coppa=1),e.schain&&R(e.schain)&&(s.rp_schain=h.serializeSupplyChain(e.schain)),s},serializeSupplyChain:function(e){if(!R(e))return"";var r=e.ver,t=e.complete,n=e.nodes;return"".concat(r,",").concat(t,"!").concat(h.serializeSupplyChainNodes(n))},serializeSupplyChainNodes:function(e){var t=["asi","sid","hp","rid","name","domain"];return e.map(function(r){return t.map(function(e){return encodeURIComponent(r[e]||"")}).join(",")}).join("!")},interpretResponse:function(s,e){var d=e.bidRequest;if(!(s=s.body)||"object"!==g(s))return[];if(s.seatbid){var r=p.deepAccess(s,"ext.errors.rubicon");Array.isArray(r)&&0<r.length&&p.logWarn("Rubicon: Error in video response");var o=[];return s.seatbid.forEach(function(i){(i.bid||[]).forEach(function(e){var r={requestId:d.bidId,currency:s.cur||"USD",creativeId:e.crid,cpm:e.price||0,bidderCode:i.seat,ttl:300,netRevenue:!1!==y.netRevenue,width:e.w||p.deepAccess(d,"mediaTypes.video.w")||p.deepAccess(d,"params.video.playerWidth"),height:e.h||p.deepAccess(d,"mediaTypes.video.h")||p.deepAccess(d,"params.video.playerHeight")};e.id&&(r.seatBidId=e.id),e.dealid&&(r.dealId=e.dealid),e.adomain&&p.deepSetValue(r,"meta.advertiserDomains",Array.isArray(e.adomain)?e.adomain:[e.adomain]),p.deepAccess(e,"ext.bidder.rp.advid")&&p.deepSetValue(r,"meta.advertiserId",e.ext.bidder.rp.advid);var t,n=p.deepAccess(s,"ext.responsetimemillis.rubicon");d&&n&&(d.serverResponseTimeMs=n),p.deepAccess(e,"ext.prebid.type")===m.d?(r.mediaType=m.d,p.deepSetValue(r,"meta.mediaType",m.d),(t=p.deepAccess(e,"ext.prebid.targeting"))&&"object"===g(t)&&(r.adserverTargeting=t),e.ext.prebid.cache&&"object"===g(e.ext.prebid.cache.vastXml)&&e.ext.prebid.cache.vastXml.cacheId&&e.ext.prebid.cache.vastXml.url?(r.videoCacheKey=e.ext.prebid.cache.vastXml.cacheId,r.vastUrl=e.ext.prebid.cache.vastXml.url):t&&t.hb_uuid&&t.hb_cache_host&&t.hb_cache_path&&(r.videoCacheKey=t.hb_uuid,r.vastUrl="https://".concat(t.hb_cache_host).concat(t.hb_cache_path,"?uuid=").concat(t.hb_uuid)),e.adm&&(r.vastXml=e.adm),e.nurl&&(r.vastUrl=e.nurl),!r.vastUrl&&e.nurl&&(r.vastUrl=e.nurl)):p.logWarn("Rubicon: video response received non-video media type"),o.push(r)})}),o}var t=s.ads;return"object"!==g(d)||Array.isArray(d)||"video"!==S(d)||"object"!==g(t)||(t=t[d.adUnitCode]),!Array.isArray(t)||t.length<1?[]:t.reduce(function(e,r,t){if("ok"!==r.status)return e;var n,i,o,a,c=Array.isArray(d)?d[t]:d;return c&&"object"===g(c)?(n={requestId:c.bidId,currency:"USD",creativeId:r.creative_id||"".concat(r.network||"","-").concat(r.advertiser||""),cpm:r.cpm||0,dealId:r.deal,ttl:300,netRevenue:!1!==y.netRevenue,rubicon:{advertiserId:r.advertiser,networkId:r.network},meta:{advertiserId:r.advertiser,networkId:r.network,mediaType:m.b}},r.creative_type&&(n.mediaType=r.creative_type),r.adomain&&(n.meta.advertiserDomains=Array.isArray(r.adomain)?r.adomain:[r.adomain]),r.creative_type===m.d?(n.width=c.params.video.playerWidth,n.height=c.params.video.playerHeight,n.vastUrl=r.creative_depot_url,n.impression_id=r.impression_id,n.videoCacheKey=r.impression_id):(n.ad=(o=r.script,a=r.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(a,"'>\n<script type='text/javascript'>").concat(o,"<\/script>\n</div>\n</body>\n</html>")),i=b(x[r.size_id].split("x").map(function(e){return Number(e)}),2),n.width=i[0],n.height=i[1]),n.rubiconTargeting=(Array.isArray(r.targeting)?r.targeting:[]).reduce(function(e,r){return e[r.key]=r.values[0],e},{rpfl_elemid:c.adUnitCode}),e.push(n)):p.logError("Rubicon: bidRequest undefined at index position:".concat(t),d,s),e},[]).sort(function(e,r){return(r.cpm||0)-(e.cpm||0)})},getUserSyncs:function(e,r,t,n){if(!T&&e.iframeEnabled){var i="";return t&&"string"==typeof t.consentString&&("boolean"==typeof t.gdprApplies?i+="?gdpr=".concat(Number(t.gdprApplies),"&gdpr_consent=").concat(t.consentString):i+="?gdpr_consent=".concat(t.consentString)),n&&(i+="".concat(i?"&":"?","us_privacy=").concat(encodeURIComponent(n))),T=!0,{type:"iframe",url:"https://".concat(y.syncHost||"eus",".rubiconproject.com/usync.html")+i}}},transformBidParams:function(e){return p.convertTypes({accountId:"number",siteId:"number",zoneId:"number"},e)}};function _(e,r){var t=l.b.getConfig("pageUrl"),t=e.params.referrer?e.params.referrer:t||r.refererInfo.referer;return e.params.secure?t.replace(/^http:/i,"https:"):t}function j(e,r){var t=e.params;if("video"===r){var n=[];return t.video&&t.video.playerWidth&&t.video.playerHeight?n=[t.video.playerWidth,t.video.playerHeight]:Array.isArray(p.deepAccess(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?n=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&0<e.sizes.length&&Array.isArray(e.sizes[0])&&1<e.sizes[0].length&&(n=e.sizes[0]),n}var i=[];return Array.isArray(t.sizes)?i=t.sizes:void 0!==p.deepAccess(e,"mediaTypes.banner.sizes")?i=c(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&0<e.sizes.length?i=c(e.sizes):p.logWarn("Rubicon: no sizes are setup or found"),I(i)}function A(e,r,i){var t={user:f({},e.params.visitor),context:f({},e.params.inventory)};e.params.keywords&&(t.context.keywords=p.isArray(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);function o(e,r){if("object"!==g(e)||Array.isArray(e)){if(void 0!==e)return Array.isArray(e)?e.filter(function(e){return"object"!==g(e)&&void 0!==e?e.toString():void p.logWarn("Rubicon: Filtered value: ",e,"for key",r,": Expected value to be string, integer, or an array of strings/ints")}).toString():e.toString()}else p.logWarn("Rubicon: Filtered FPD key: ",r,": Expected value to be string, integer, or an array of strings/ints")}var n,a=p.mergeDeep({},l.b.getConfig("fpd")||{},e.fpd||{},t),c={user:{banner:"tg_v.",code:"user"},context:{banner:"tg_i.",code:"site"},adserver:"dfp_ad_unit_code"},s={},d={},u=[];Object.keys(a).filter(function(e){return a[e]&&c[e]&&"object"===g(a[e])}).forEach(function(n){var t;s[c[n].code]=Object.keys(a[n]).filter(function(e){return void 0!==a[n][e]}).reduce(function(e,t){return"keywords"===t?(Array.isArray(a[n][t])||r!==m.b||(a[n][t]=[a[n][t]]),e[t]=a[n][t],r===m.b&&(u=u.concat(a[n][t]))):"data"===t?p.mergeDeep(e,{ext:{data:a[n][t]}}):"adServer"===t||"pbAdSlot"===t?"adServer"===t?["name","adSlot"].forEach(function(e){var r=o(a[n][t][e]);r&&p.deepSetValue(d,"adserver.".concat(e.toLowerCase()),r.replace(/^\/+/,""))}):d[t.toLowerCase()]=a[n][t].replace(/^\/+/,""):p.mergeDeep(e,{ext:{data:v({},t,a[n][t])}}),e},{}),r===m.b&&(t="object"===g(s[c[n].code].ext)&&s[c[n].code].ext.data||{},Object.keys(t).forEach(function(e){var r="adserver"===e?t.adserver.adslot:o(t[e],e);r&&(i[c[e]?"".concat(c[n][m.b]).concat(c[e]):"".concat(c[n][m.b]).concat(e)]=r)}))}),Object.keys(d).forEach(function(e){r===m.b?c[e]?i["tg_i.".concat(c[e])]=d[e].adslot:i["tg_i.".concat(e.toLowerCase())]=d[e]:p.mergeDeep(i.imp[0],{ext:{context:{data:v({},e,d[e])}}})}),r===m.b?(n=o(u,"keywords"))&&(i.kw=n):p.mergeDeep(i,s)}function c(e){return p.parseSizesInput(e).reduce(function(e,r){var t=parseInt(x[r],10);return t&&e.push(t),e},[])}function d(e){return"object"===g(p.deepAccess(e,"params.video"))&&void 0!==p.deepAccess(e,"mediaTypes.".concat(m.d))}function S(e,r){var t=1<arguments.length&&void 0!==r&&r;return d(e)?-1===["outstream","instream"].indexOf(p.deepAccess(e,"mediaTypes.".concat(m.d,".context")))?void(t&&p.logError("Rubicon: mediaTypes.video.context must be outstream or instream")):j(e,"video").length<2?void(t&&p.logError("Rubicon: could not determine the playerSize of the video")):(t&&p.logMessage("Rubicon: making video request for adUnit",e.adUnitCode),"video"):0===j(e,"banner").length?void(t&&p.logError("Rubicon: could not determine the sizes for banner request")):(t&&p.logMessage("Rubicon: making banner request for adUnit",e.adUnitCode),"banner")}var C=function(){return y={}};function I(e){var i=[15,2,9];return e.sort(function(e,r){var t=i.indexOf(e),n=i.indexOf(r);return-1<t||-1<n?-1===t?1:-1===n?-1:t-n:e-r})}function O(e){var r=parseInt(p.deepAccess(e,"params.video.size_id"));return isNaN(r)?"outstream"===p.deepAccess(e,"mediaTypes.".concat(m.d,".context"))?203:201:r}function k(e){return{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:e.getConfig("customPriceBucket")&&e.getConfig("customPriceBucket").buckets}[e.getConfig("priceGranularity")]}}function w(r){var t=!0,e=Object.prototype.toString.call([]),n=Object.prototype.toString.call(0),i={mimes:e,protocols:e,maxduration:n,linearity:n,api:e};return Object.keys(i).forEach(function(e){Object.prototype.toString.call(p.deepAccess(r,"mediaTypes.video."+e))!==i[e]&&(t=!1,p.logError("Rubicon: mediaTypes.video."+e+" is required and must be of type: "+i[e]))}),t}function R(e){var r=!1,t=["asi","sid","hp"];return e.nodes&&((r=e.nodes.reduce(function(e,r){return e?t.every(function(e){return r.hasOwnProperty(e)}):e},!0))||p.logError("Rubicon: required schain params missing")),r}function z(e,r){return"rp_schain"===e?"rp_schain=".concat(r):"".concat(e,"=").concat(encodeURIComponent(r))}var T=!1;Object(n.registerBidder)(h)}},[760]);
pbjsChunk([116],{810:function(e,t,r){e.exports=r(811)},811:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return a}),r.d(t,"_isInbounds",function(){return m}),t._getPlatform=v;var n=r(1),y=r(0),i=r(2),o=r(3),g=r(11),c=r(43);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(n=(a=o.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){i=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw s}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p="sonobi",b=Object(y.generateUUID)(),a={code:p,supportedMediaTypes:[i.b,i.d],isBidRequestValid:function(e){if(!e.params)return!1;if(!e.params.ad_unit&&!e.params.placement_id)return!1;if(!Object(y.deepAccess)(e,"mediaTypes.banner")&&!Object(y.deepAccess)(e,"mediaTypes.video"))return!1;if(Object(y.deepAccess)(e,"mediaTypes.banner")){if(!Object(y.deepAccess)(e,"mediaTypes.banner.sizes")&&!e.params.sizes)return!1}else if(Object(y.deepAccess)(e,"mediaTypes.video")){if("outstream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!e.params.sizes)return!1;if("instream"===Object(y.deepAccess)(e,"mediaTypes.video.context")&&!Object(y.deepAccess)(e,"mediaTypes.video.playerSize"))return!1}return!0},buildRequests:function(e,t){var r=e.map(function(e){var t=function(e){if(e.params.ad_unit)return e.params.ad_unit;return e.params.placement_id}(e);return/^[\/]?[\d]+[[\/].+[\/]?]?$/.test(t)?(t="/"===t.charAt(0)?t:"/"+t,u({},"".concat(t,"|").concat(e.bidId),"".concat(l(e)).concat(f(e)))):/^[0-9a-fA-F]{20}$/.test(t)&&20===t.length?u({},e.bidId,"".concat(t,"|").concat(l(e)).concat(f(e))):void Object(y.logError)("The ad unit code or Sonobi Placement id for slot ".concat(e.bidId," is invalid"))}),n={};r.forEach(function(e){d(n,e)});var i={key_maker:JSON.stringify(n),ref:t.refererInfo.referer,s:Object(y.generateUUID)(),pv:b,vp:v(),lib_name:"prebid",lib_v:"4.27.0-pre",us:0};o.b.getConfig("userSync")&&o.b.getConfig("userSync").syncsPerBidder&&(i.us=o.b.getConfig("userSync").syncsPerBidder),c.a.canBidderRegisterSync("iframe",p)?i.ius=1:i.ius=0,Object(y.deepAccess)(e[0],"params.hfa")&&(i.hfa=Object(y.deepAccess)(e[0],"params.hfa")),e[0].params.referrer&&(i.ref=e[0].params.referrer),t&&t.gdprConsent&&(i.gdpr=t.gdprConsent.gdprApplies?"true":"false",t.gdprConsent.consentString&&(i.consent_string=t.gdprConsent.consentString)),e[0].schain&&(i.schain=JSON.stringify(e[0].schain)),Object(y.deepAccess)(e[0],"userId")&&0<Object.keys(e[0].userId).length&&(i.userid=JSON.stringify(e[0].userId));var s=e[0].params.keywords;if(s&&(i.kw=s),t&&t.uspConsent&&(i.us_privacy=t.uspConsent),Object(y.isEmpty)(n))return null;var a="https://apex.go.sonobi.com/trinity.json";return Object(y.deepAccess)(e[0],"params.bid_request_url")&&(a=Object(y.deepAccess)(e[0],"params.bid_request_url")),{method:"GET",url:a,withCredentials:!0,data:i,bidderRequests:e}},interpretResponse:function(e,l){var f=e.body,m=[],v=l.data.ref;return 0===Object.keys(f.slots).length||Object.keys(f.slots).forEach(function(e){var t=f.slots[e],r=e.split("|").slice(-1)[0],n=function(e,t){for(var r=0;r<e.length;r++)if(e[r].bidId===t)return e[r]}(l.bidderRequests,r),i=null;"video"===t.sbi_ct&&(i="video","outstream"===Object(y.deepAccess)(n,"mediaTypes.video.context")&&(i="outstream"));var s,a,o,c,d,u,p,b=j(i,v);t.sbi_aid&&t.sbi_mouse&&t.sbi_size&&(o=void 0===(a=(s=h(t.sbi_size.split("x"),2))[0])?1:a,d=void 0===(c=s[1])?1:c,u={requestId:r,cpm:Number(t.sbi_mouse),width:Number(o),height:Number(d),ad:b(f.sbi_dc,t.sbi_aid),ttl:500,creativeId:t.sbi_crid||t.sbi_aid,aid:t.sbi_aid,netRevenue:!0,currency:"USD"},t.sbi_dozer&&(u.dealId=t.sbi_dozer),"video"===i?(u.mediaType="video",u.vastUrl=b(f.sbi_dc,t.sbi_aid),delete u.ad,delete u.width,delete u.height):"outstream"===i&&n&&(u.mediaType="video",u.vastUrl=b(f.sbi_dc,t.sbi_aid),u.renderer=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=g.a.install({id:t.aid,url:"https://mtrx.go.sonobi.com/sbi_outstream_renderer.js",config:r,loaded:!1,adUnitCode:e});try{n.setRender(O)}catch(e){Object(y.logWarn)("Prebid Error calling setRender on renderer",e)}return n.setEventHandlers({impression:function(){return Object(y.logMessage)("Sonobi outstream video impression event")},loaded:function(){return Object(y.logMessage)("Sonobi outstream video loaded event")},ended:function(){Object(y.logMessage)("Sonobi outstream renderer video event")}}),n}(n.adUnitCode,u,Object(y.deepAccess)(n,"renderer.options")),p=Object(y.deepAccess)(n,"params.sizes"),Array.isArray(p)&&Array.isArray(p[0])&&(p=p[0]),p&&(u.width=p[0],u.height=p[1])),m.push(u))}),m},getUserSyncs:function(e,t){var r=[];try{e.pixelEnabled&&t[0].body.sbi_px.forEach(function(e){r.push({type:e.type,url:e.url})})}catch(e){}return r}};function l(e){return Object(y.deepAccess)(e,"mediaTypes.video")?"":e.params.sizes?Object(y.parseSizesInput)(e.params.sizes).join(","):Object(y.deepAccess)(e,"mediaTypes.banner.sizes")?Object(y.parseSizesInput)(Object(y.deepAccess)(e,"mediaTypes.banner.sizes")).join(","):e.sizes?Object(y.parseSizesInput)(e.sizes).join(","):void 0}function f(e){return e.params.floor?"|f=".concat(e.params.floor):""}var j=function(i,s){return function(e,t){return"video"===i||"outstream"===i?(r=t,n=s,"https://".concat(e,"apex.go.sonobi.com/vast.xml?vid=").concat(r,"&ref=").concat(encodeURIComponent(n))):'<script type="text/javascript" src="'+"https://".concat(e,"apex.go.sonobi.com/sbi.js?aid=").concat(t,"&as=null&ref=").concat(encodeURIComponent(s))+'"><\/script>';var r,n}};var m=function(e){var r=0<arguments.length&&void 0!==e?e:window;return function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Number.MAX_SAFE_INTEGER;return r.innerWidth>=e&&r.innerWidth<t}};function v(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:window,t=m(e),r=992,n=768;return t(0,768)?"mobile":t(n,r)?"tablet":"desktop"}function O(i){i.renderer.push(function(){var e=h(i.getSize().split("x"),2),t=e[0],r=e[1],n=new window.SbiOutstreamRenderer;n.init({vastUrl:i.vastUrl,height:r,width:t}),n.setRootElement(i.adUnitCode)})}Object(n.registerBidder)(a)}},[810]);
pbjsChunk([10],{20:function(e,t,r){"use strict";t.a=function(e){var t=[];for(var r in e){var i;e.hasOwnProperty(r)&&("pubProvidedId"===r?t=t.concat(e.pubProvidedId):(i=function(e,t){var r=u[t];if(r&&e){var i={};i.source=r.source;var n=s.isFn(r.getValue)?r.getValue(e):e;if(s.isStr(n)){var a,o,d={id:n,atype:r.atype};return!s.isFn(r.getUidExt)||(a=r.getUidExt(e))&&(d.ext=a),i.uids=[d],!s.isFn(r.getEidExt)||(o=r.getEidExt(e))&&(i.ext=o),i}}return null}(e[r],r))&&t.push(i))}return t};var s=r(0),u={intentIqId:{source:"intentiq.com",atype:1},pubcid:{source:"pubcid.org",atype:1},tdid:{source:"adserver.org",atype:1,getUidExt:function(){return{rtiPartner:"TDID"}}},id5id:{getValue:function(e){return e.uid},source:"id5-sync.com",atype:1,getUidExt:function(e){if(e.ext)return e.ext}},parrableId:{source:"parrable.com",atype:1,getValue:function(e){return e.eid?e.eid:e.ccpaOptout?"":null},getUidExt:function(e){var t=s.pick(e,["ibaOptout","ccpaOptout"]);if(Object.keys(t).length)return t}},idl_env:{source:"liveramp.com",atype:1},lipb:{getValue:function(e){return e.lipbid},source:"liveintent.com",atype:1,getEidExt:function(e){if(Array.isArray(e.segments)&&e.segments.length)return{segments:e.segments}}},britepoolid:{source:"britepool.com",atype:1},lotamePanoramaId:{source:"crwdcntrl.net",atype:1},criteoId:{source:"criteo.com",atype:1},merkleId:{source:"merkleinc.com",atype:1},netId:{source:"netid.de",atype:1},sharedid:{source:"sharedid.org",atype:1,getValue:function(e){return e.id},getUidExt:function(e){return e&&e.third?{third:e.third}:void 0}},IDP:{source:"zeotap.com",atype:1},haloId:{source:"audigent.com",atype:1},quantcastId:{source:"quantcast.com",atype:1},idx:{source:"idx.lat",atype:1},connectid:{source:"verizonmedia.com",atype:1},fabrickId:{source:"neustar.biz",atype:1},tapadId:{source:"tapad.com",atype:1}}},818:function(e,t,r){e.exports=r(819)},819:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"spec",function(){return n});var l=r(0),i=r(1),a=r(2),g=r(20),n={code:"sovrn",supportedMediaTypes:[a.b],gvlid:13,isBidRequestValid:function(e){return!(!e.params.tagid||isNaN(parseFloat(e.params.tagid))||!isFinite(e.params.tagid))},buildRequests:function(e,t){try{var o,d,s,u,c=[],p=[];l._each(e,function(e){!s&&e.userId&&(s=Object(g.a)(e.userId)).forEach(function(e){e.uids&&e.uids[0]&&("criteo.com"===e.source&&(u=e.uids[0].id),p.push({source:e.source,uid:e.uids[0].id}))}),e.schain&&(d=d||e.schain),o=o||l.getBidIdParameter("iv",e.params);var t=e.mediaTypes&&e.mediaTypes.banner&&e.mediaTypes.banner.sizes||e.sizes,r=(t=(t=l.isArray(t)&&l.isArray(t[0])?t:[t]).filter(function(e){return l.isArray(e)})).map(function(e){return{w:parseInt(e[0],10),h:parseInt(e[1],10)}}),i=e.getFloor&&"function"==typeof e.getFloor?e.getFloor({currency:"USD",mediaType:"banner",size:"*"}):{};i.floor=i.floor||l.getBidIdParameter("bidfloor",e.params);var n={adunitcode:e.adUnitCode,id:e.bidId,banner:{format:r,w:1,h:1},tagid:String(l.getBidIdParameter("tagid",e.params)),bidfloor:i.floor},a=l.getBidIdParameter("segments",e.params);a&&(n.ext={deals:a.split(",").map(function(e){return e.trim()})}),c.push(n)});var r=t.refererInfo.referer,i=l.parseUrl(r).hostname,n={id:l.getUniqueIdentifierStr(),imp:c,site:{page:r,domain:i}};d&&(n.source={ext:{schain:d}}),t.gdprConsent&&(l.deepSetValue(n,"regs.ext.gdpr",+t.gdprConsent.gdprApplies),l.deepSetValue(n,"user.ext.consent",t.gdprConsent.consentString)),t.uspConsent&&l.deepSetValue(n,"regs.ext.us_privacy",t.uspConsent),s&&(l.deepSetValue(n,"user.ext.eids",s),l.deepSetValue(n,"user.ext.tpid",p),u&&l.deepSetValue(n,"user.ext.prebid_criteoid",u));var a="https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.27.0-pre";return o&&(a+="&iv=".concat(o)),{method:"POST",url:a,data:JSON.stringify(n),options:{contentType:"text/plain"}}}catch(e){l.logError("Could not build bidrequest, error deatils:",e)}},interpretResponse:function(e){var t=e.body,r=t.id,i=t.seatbid;try{var n=[];return r&&i&&0<i.length&&i[0].bid&&0<i[0].bid.length&&i[0].bid.map(function(e){n.push({requestId:e.impid,cpm:parseFloat(e.price),width:parseInt(e.w),height:parseInt(e.h),creativeId:e.crid||e.id,dealId:e.dealid||null,currency:"USD",netRevenue:!0,mediaType:a.b,ad:decodeURIComponent("".concat(e.adm,'<img src="').concat(e.nurl,'">')),ttl:e.ext&&e.ext.ttl||90})}),n}catch(e){l.logError("Could not intrepret bidresponse, error deatils:",e)}},getUserSyncs:function(e,t,r,i){try{var n,a,o=[];return t&&0!==t.length&&(e.iframeEnabled&&(n=t.filter(function(e){return l.deepAccess(e,"body.ext.iid")}).map(function(e){return e.body.ext.iid}),a=[],r&&r.gdprApplies&&"string"==typeof r.consentString&&a.push(["gdpr_consent",r.consentString]),i&&a.push(["us_privacy",i]),n[0]&&(a.push(["informer",n[0]]),o.push({type:"iframe",url:"https://ap.lijit.com/beacon?"+a.map(function(e){return e.join("=")}).join("&")}))),e.pixelEnabled&&t.filter(function(e){return l.deepAccess(e,"body.ext.sync.pixels")}).reduce(function(e,t){return e.concat(t.body.ext.sync.pixels)},[]).map(function(e){return e.url}).forEach(function(e){return o.push({type:"image",url:e})})),o}catch(e){return[]}}};Object(i.registerBidder)(n)}},[818]);
pbjsChunk([95],{862:function(e,r,t){e.exports=t(863)},863:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),t.d(r,"tripleliftAdapterSpec",function(){return m});var n=t(2),i=t(1),u=t(0),a=t(3);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(r,e){var t,n=Object.keys(r);return Object.getOwnPropertySymbols&&(t=Object.getOwnPropertySymbols(r),e&&(t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),n.push.apply(n,t)),n}function s(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?d(Object(o),!0).forEach(function(e){var r,t,n;r=i,n=o[t=e],t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))})}return i}function f(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return o(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=!0,y=null,m={gvlid:28,code:"triplelift",supportedMediaTypes:[n.b,n.d],isBidRequestValid:function(e){return void 0!==e.params.inventoryCode},buildRequests:function(e,r){var t,n="https://tlx.3lift.com/header/auction?",i=function(e){var r={},t=e[0].schain,n=function(){var e={},r={},t={},n=p({},a.b.getConfig("fpd.context")),i=p({},a.b.getConfig("fpd.user"));g(r,n),g(t,i),u.isEmpty(r)||(e.context=r);u.isEmpty(t)||(e.user=t);return e}();r.imp=e.map(function(e,r){var t={id:r,tagid:e.params.inventoryCode,floor:function(e){var r=null;{var t;"function"==typeof e.getFloor&&("object"!==c(t=e.getFloor({currency:"USD",mediaType:b(e)?"video":"banner",size:"*"}))||"USD"!==t.currency||isNaN(parseFloat(t.floor))||(r=parseFloat(t.floor)))}return null!==r?r:e.params.floor}(e)};return b(e)?t.video=function(e){var r=s(s({},e.params.video),e.mediaTypes.video);r.w||(r.w=r.playerSize[0][0]);r.h||(r.h=r.playerSize[0][1]);"instream"===r.context&&(r.placement=1);return delete r.playerSize,r}(e):e.mediaTypes.banner&&(t.banner={format:e.sizes.filter(S).map(function(e){return{w:e[0],h:e[1]}})}),u.isEmpty(e.fpd)||(t.fpd=function(e){var r={},t={};g(t,e.context),u.isEmpty(t)||(r.context=t);return r}(e.fpd)),t});var i=[].concat(f(function(e){return v(e,"tdid","adserver.org","TDID")}(e)),f(function(e){return v(e,"idl_env","liveramp.com","idl")}(e)),f(function(e){return v(e,"criteoId","criteo.com","criteoId")}(e)));0<i.length&&(r.user={ext:{eids:i}});var o=function(e,r){var t={};u.isEmpty(e)||(t.schain=s({},e));u.isEmpty(r)||(t.fpd=s({},r));return t}(t,n);u.isEmpty(o)||(r.ext=o);return r}(e);return n=u.tryAppendQueryString(n,"lib","prebid"),n=u.tryAppendQueryString(n,"v","4.27.0-pre"),r&&r.refererInfo&&(t=r.refererInfo.referer,n=u.tryAppendQueryString(n,"referrer",t)),r&&r.timeout&&(n=u.tryAppendQueryString(n,"tmax",r.timeout)),r&&r.gdprConsent&&(void 0!==r.gdprConsent.gdprApplies&&(l=r.gdprConsent.gdprApplies,n=u.tryAppendQueryString(n,"gdpr",l.toString())),void 0!==r.gdprConsent.consentString&&(y=r.gdprConsent.consentString,n=u.tryAppendQueryString(n,"cmp_cs",y))),r&&r.uspConsent&&(n=u.tryAppendQueryString(n,"us_privacy",r.uspConsent)),!0===a.b.getConfig("coppa")&&(n=u.tryAppendQueryString(n,"coppa",!0)),n.lastIndexOf("&")===n.length-1&&(n=n.substring(0,n.length-1)),u.logMessage("tlCall request built: "+n),{method:"POST",url:n,data:i,bidderRequest:r}},interpretResponse:function(e,r){var t=r.bidderRequest;return(e.body.bids||[]).map(function(e){return function(e,r){var t={},n=r.width||1,i=r.height||1,o=r.deal_id||"",u=r.crid||"",a=e.bids[r.imp_id];0!=r.cpm&&r.ad&&(t={requestId:a.bidId,cpm:r.cpm,width:n,height:i,netRevenue:!0,ad:r.ad,creativeId:u,dealId:o,currency:"USD",ttl:300,tl_source:r.tl_source,meta:{}},b(a)&&(t.vastXml=r.ad,t.mediaType="video"),r.advertiser_name&&(t.meta.advertiserName=r.advertiser_name),r.adomain&&r.adomain.length&&(t.meta.advertiserDomains=r.adomain),r.tl_source&&"hdx"==r.tl_source&&(t.meta.mediaType="banner"),r.tl_source&&"tlx"==r.tl_source&&(t.meta.mediaType="native"));return t}(t,e)})},getUserSyncs:function(e,r,t,n){var i=function(e){if(!e)return;if(e.iframeEnabled)return"iframe";if(e.pixelEnabled)return"image"}(e);if(i){var o="https://eb2.3lift.com/sync?";return"image"===i&&(o=u.tryAppendQueryString(o,"px",1),o=u.tryAppendQueryString(o,"src","prebid")),null!==y&&(o=u.tryAppendQueryString(o,"gdpr",l),o=u.tryAppendQueryString(o,"cmp_cs",y)),n&&(o=u.tryAppendQueryString(o,"us_privacy",n)),[{type:i,url:o}]}}};function b(e){return e.mediaTypes.video&&e.mediaTypes.video.context&&"instream"===e.mediaTypes.video.context.toLowerCase()}function g(r,t){u.isEmpty(t)||Object.keys(t).forEach(function(e){null!=t[e]&&(r[e]=t[e])})}function v(e,r,t,n){return e.map((u=r,function(e){return e&&e.userId&&e.userId[u]})).filter(function(e){return!!e}).map((i=t,o=n,function(e){return{source:i,uids:[{id:e,ext:{rtiPartner:o}}]}}));var i,o,u}function S(e){return 2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}Object(i.registerBidder)(m)}},[862]);
pbjs.processQueue();window.adUnits = [
{
    code: "div-gpt-ad-1579798144601-0",
    mediaTypes: {
        banner: {
            sizes: [
                [320,50]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692549",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "320x50",
                    cp: 566203,
                    ct: 711412
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489901",
                    size: [320,50]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276786',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8921',
                        unitName: 'cnsmbl-audio-320x50-slider',
                        zoneIds: [2004161]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798144601-0",
    mediaTypes: {
        banner: {
            sizes: [
                [970,90],[728,90]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692548",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "970x90",
                    cp: 566203,
                    ct: 711411
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489899",
                    size: [970,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276789',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8799',
                        unitName: 'cnsmbl-audio-728x90-slider',
                        zoneIds: [2004098]
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692546",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "728x90",
                    cp: 566203,
                    ct: 711409
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489896",
                    size: [728,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276785',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798263022-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798263022-0-abc",
    mediaTypes: {
        banner: {
            sizes: [
                [300,600]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692550",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x600",
                    cp: 566203,
                    ct: 711413
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489900",
                    size: [300,600]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276788',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8923',
                        unitName: 'cnsmbl-audio-300x600',
                        zoneIds: [2004159]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798356063-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798390676-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798441325-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798480553-0",
    mediaTypes: {
        banner: {
            sizes: [
                [320,50],[300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692549",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "320x50",
                    cp: 566203,
                    ct: 711412
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489901",
                    size: [320,50]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276786',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8921',
                        unitName: 'cnsmbl-audio-320x50-slider',
                        zoneIds: [2004161]
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798480553-0",
    mediaTypes: {
        banner: {
            sizes: [
                [728,90]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692546",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "728x90",
                    cp: 566203,
                    ct: 711409
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489896",
                    size: [728,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276785',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8799',
                        unitName: 'cnsmbl-audio-728x90-slider',
                        zoneIds: [2004098]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798199883-0",
    mediaTypes: {
        banner: {
            sizes: [
                [970,90],[728,90]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692548",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "970x90",
                    cp: 566203,
                    ct: 711411
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489899",
                    size: [970,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276789',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8799',
                        unitName: 'cnsmbl-audio-728x90-slider',
                        zoneIds: [2004098]
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692546",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "728x90",
                    cp: 566203,
                    ct: 711409
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489896",
                    size: [728,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276785',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798199883-0",
    mediaTypes: {
        banner: {
            sizes: [
                [320,50],[300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692549",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "320x50",
                    cp: 566203,
                    ct: 711412
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489901",
                    size: [320,50]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276786',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8921',
                        unitName: 'cnsmbl-audio-320x50-slider',
                        zoneIds: [2004161]
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1580759089764-0",
    mediaTypes: {
        banner: {
            sizes: [
                [320,50]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692549",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "320x50",
                    cp: 566203,
                    ct: 711412
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489901",
                    size: [320,50]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276786',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8921',
                        unitName: 'cnsmbl-audio-320x50-slider',
                        zoneIds: [2004161]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798144602-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798144602-0",
    mediaTypes: {
        banner: {
            sizes: [
                [970,250],[970,90]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692548",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "970x90",
                    cp: 566203,
                    ct: 711411
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489899",
                    size: [970,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276789',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8799',
                        unitName: 'cnsmbl-audio-728x90-slider',
                        zoneIds: [2004098]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798144603-0",
    mediaTypes: {
        banner: {
            sizes: [
                [300,250]
            ]
        }
    },
    labelAny: ["mobile","tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692547",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "300x250",
                    cp: 566203,
                    ct: 711410
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489897",
                    size: [300,250]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276787',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8922',
                        unitName: 'cnsmbl-audio-300x250-slider',
                        zoneIds: [2004160]
                    }
                }
    ]},{
    code: "div-gpt-ad-1579798144603-0",
    mediaTypes: {
        banner: {
            sizes: [
                [970,250],[970,90]
            ]
        }
    },
    labelAny: ["tablet","desktop"],
    bids: [
        { 
                bidder: "appnexus",
                params: {
                    placementId: "18764241"
                    }
                },{ 
                bidder: "rhythmone",
                params: {
                    placementId: "210580"
                    }
                },{ 
                bidder: "sonobi",
                params: {
                    placement_id: "fe201e544f11b1defddf"
                    }
                },{
                bidder: "sovrn",
                params: {
                    tagid: "692548",
                    bidfloor: "0.01"
                    }
                },{
                bidder: "pulsepoint",
                params: {
                    cf: "970x90",
                    cp: 566203,
                    ct: 711411
                    }
                },{ 
                bidder: "emx_digital",
                params: {
                    tagid: "121376"
                    }
                },{
                bidder: "ix",
                params: {
                    siteId: "489899",
                    size: [970,90]
                    }
                },{ 
                bidder: "openx",
                params: {
                    unit: '542276789',
                    delDomain: 'mpw-enterprises-d.openx.net',
                    }
                },{
                bidder: "triplelift",
                params: {
                    inventoryCode: "MC_Hot97_ROS_HDX", 
                    floor: 0
                    }
                },{
                bidder: "rubicon",
                params: {
                    accountId: 22138,
                    siteId: 316030,
                    zoneId: 1615104
                    }
                },{
                    bidder: 'consumable',
                    params: {
                        networkId: '9969',
                        siteId: '2001047',
                        unitId: '8799',
                        unitName: 'cnsmbl-audio-728x90-slider',
                        zoneIds: [2004098]
                    }
                }
    ]}
];
var PREBID_TIMEOUT = 2000;
var FAILSAFE_TIMEOUT = 3000;
var REFRESH_TIMEOUT = 60000;

const customConfigObject = {
    "buckets": [
        {
            "precision": 2, //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
            "min": 0.01,
            "max": 5,
            "increment": 0.01
        },
        {
            "precision": 2,
            "min": 5.0,
            "max": 20,
            "increment": 0.05
        },
        {
            "precision": 2,
            "min": 20,
            "max": 50,
            "increment": 1.00
        }
    ]
};
            
            var MAX_RETRIES = 20;

            pbjs.que.push(function() {
                pbjs.addAdUnits(window.adUnits);        

                pbjs.setConfig({
                priceGranularity: customConfigObject,
                userSync: {
                    iframeEnabled: true,
                    filterSettings: {
                      iframe: {
                        bidders: '*',      // '*' represents all bidders
                        filter: 'include'
                      }
                    }
                  },   
                bidderTimeout: 2000,
                sizeConfig: [{
                    mediaQuery: '(min-width: 1200px)',
                    sizesSupported: [[320,50],[728,90],[970,90], [300,250], [300, 600]],
                    labels: [ "desktop"]
                    }, {
                    mediaQuery: '(min-width: 768px) and (max-width: 1199px)',
                    sizesSupported: [[320,50],[300,250],[970,90], [728,90],[300,600]],
                    labels: [ "tablet"]
                    }, {
                    mediaQuery: '(min-width: 0px) and (max-width: 767px)',
                    sizesSupported: [[320,50],[300, 250]],
                    labels: [ "mobile"]
                    }
                ],                
                enableSendAllBids: false,
                targetingControls: {
                    alwaysIncludeDeals: true
                }
                });
            });
             
            function requestBids() {
                console.log('requesting bids');
                pbjs.requestBids({
                    bidsBackHandler: initAdserver,
                    timeout: PREBID_TIMEOUT
                });
            }
            
            function reRequestBids() {
                console.log('requesting bids');
                pbjs.requestBids({
                    bidsBackHandler: refreshAdserver,
                    timeout: PREBID_TIMEOUT
                });
            }

            function initAdserver() {
                console.log('init AdServer');
                if (pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;
                console.log('pushing to googletag.cmd');
                console.log(window.googletag && googletag.apiReady);
                googletag.cmd.push(function() {
                    console.log('resolving from googletag.cmd');
            
                    pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
                    console.log('refreshing pubads');
                    googletag.pubads().refresh();
                    console.log('setting refresh timeout');
                    setTimeout(function() {
                        console.log('resolving refresh timeout');
                        reRequestBids();
                    }, REFRESH_TIMEOUT);
                });
            }

            function refreshAdserver() {
                console.log('refresh AdServer');
                if (!pbjs.initAdserverSet) return;
                pbjs.initAdserverSet = true;
                console.log('pushing to googletag.cmd');
                console.log(window.googletag && googletag.apiReady);
                googletag.cmd.push(function() {
                    console.log('resolving from googletag.cmd');
            
                    pbjs.setTargetingForGPTAsync && pbjs.setTargetingForGPTAsync();
                    console.log('refreshing pubads');
                    // googletag.pubads().setTargeting('test', 'test02');
                    googletag.pubads().refresh();
                    console.log('setting refresh timeout');
                    setTimeout(function() {
                        console.log('resolving refresh timeout');
                        reRequestBids();
                    }, REFRESH_TIMEOUT);
                });
            }

                // in case PBJS doesn't load
    setTimeout(function() {
        initAdserver();
    }, FAILSAFE_TIMEOUT);
