(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/FXl":function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return y})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return l}));var r=n("mXGw"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,i({},t,{components:n}))}},p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),s=p(n),l=r,d=s["".concat(i,".").concat(l)]||s[l]||h[l]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"===typeof e?e:r,i[1]=u;for(var f=2;f<a;f++)i[f]=n[f];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),a=n("ShTl"),i=n("sJOi");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},"5IsQ":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,f=[],s=!1,l=-1;function p(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new h(e,t)),1!==f.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"5dyF":function(e,t,n){e.exports=n("9CGT")},"8VmE":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"9CGT":function(e,t,n){"use strict";var r=n("yXh+"),o=n("HIQq");t.__esModule=!0,t.default=void 0;var a=o(n("mXGw")),i=n("a4i1"),u=n("bBV7"),c=n("hY8M"),f={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.pathname||"/",l=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),p=l.href,d=l.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=a.Children.only(h),w=b&&"object"===typeof b&&b.ref,O=(0,c.useIntersection)({rootMargin:"200px"}),M=r(O,2),E=M[0],j=M[1],x=a.default.useCallback((function(e){E(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,E]);(0,a.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(p),r="undefined"!==typeof g?g:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,j,g,t,n]);var k={ref:x,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,n,p,d,v,y,m,g)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),s(n,p,d,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var C="undefined"!==typeof g?g:n&&n.locale,A=(0,i.getDomainLocale)(d,C,n&&n.locales,n&&n.domainLocales);k.href=A||(0,i.addBasePath)((0,i.addLocale)(d,C,n&&n.defaultLocale))}return a.default.cloneElement(b,k)};t.default=l},"9fEB":function(e,t,n){"use strict";n("OQL8");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=(r=n("GlZI"))&&r.__esModule?r:{default:r},i=n("9rrO"),u=n("bxxT"),c=n("vI6Y");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,f=p.length;c<f;c++){var s=p[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],d=r[s]||new Set;"name"===s&&i||!d.has(l)?(d.add(l),r[s]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},FIWN:function(e,t,n){"use strict";var r=function(){};e.exports=r},Fcif:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},GlZI:function(e,t,n){"use strict";var r=n("2LUv"),o=n("fwM5"),a=n("bkNG"),i=(n("0pOA"),n("5YB7")),u=n("Y8Bl"),c=n("7osH");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("mXGw"),l=function(e){i(n,e);var t=f(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=l},I08b:function(e,t,n){"use strict";n.r(t),n.d(t,"SkipNavContent",(function(){return d})),n.d(t,"SkipNavLink",(function(){return p}));var r=n("mXGw"),o=n("FIWN"),a=n.n(o);i()?r.useLayoutEffect:r.useEffect,a.a,"undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math&&self;function i(){return!("undefined"===typeof window||!window.document||!window.document.createElement)}function u(e){return Object(r.forwardRef)(e)}function c(){}var f=c;function s(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var l="reach-skip-nav",p=u((function(e,t){var n=e.as,o=void 0===n?"a":n,a=e.children,i=void 0===a?"Skip to content":a,u=e.contentId,c=s(e,["as","children","contentId"]),p=u||l;return f("skip-nav"),Object(r.createElement)(o,Object.assign({},c,{ref:t,href:"#"+p,"data-reach-skip-link":"","data-reach-skip-nav-link":""}),i)}));var d=u((function(e,t){var n=e.as,o=void 0===n?"div":n,a=e.id,i=s(e,["as","id"]),u=a||l;return Object(r.createElement)(o,Object.assign({},i,{ref:t,id:u,"data-reach-skip-nav-content":""}))}))},"O2/E":function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),i="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),a=r(n.split("/")),i=Math.min(o.length,a.length),u=i,c=0;c<i;c++)if(o[c]!==a[c]){u=c;break}var f=[];for(c=u;c<o.length;c++)f.push("..");return(f=f.concat(a.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){r=a;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,a=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47!==u)-1===r&&(o=!1,r=i+1),46===u?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){n=i+1;break}}return-1===t||-1===r||0===a||1===a&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("5IsQ"))},OQL8:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},PDtE:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.r(t),t.default=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},V5Fo:function(e,t,n){"use strict";n.r(t),n.d(t,"titleCase",(function(){return c}));var r=/\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i,o=/[^\s:\u2013\u2014-]+|./g,a=/\s/,i=/.(?=[A-Z]|\..)/,u=/[A-Za-z0-9\u00C0-\u00FF]/;function c(e){for(var t,n="";null!==(t=o.exec(e));){var c=t[0],f=t.index;i.test(c)||r.test(c)&&0!==f&&f+c.length!==e.length||":"===e.charAt(f+c.length)&&!a.test(e.charAt(f+c.length+1))?n+=c:n+=c.replace(u,(function(e){return e.toUpperCase()}))}return n}},YO29:function(e,t,n){"use strict";n.r(t);var r=n("mXGw");const o=r["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];t.default=o},"dV/x":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},hY8M:function(e,t,n){"use strict";var r=n("yXh+"),o=n("mYab");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!u,o=(0,a.useRef)(),f=(0,a.useState)(!1),s=r(f,2),l=s[0],p=s[1],d=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||l||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,a.useEffect)((function(){u||l||(0,i.default)((function(){return p(!0)}))}),[l]),[d,l]};var a=n("mXGw"),i=o(n("pksY")),u="undefined"!==typeof IntersectionObserver;var c=new Map},m1Oa:function(e,t,n){var r=n("z3mR");e.exports=function(e){if(Array.isArray(e))return r(e)}},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},pWCa:function(e,t,n){e.exports=n("9fEB")},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}}}]);