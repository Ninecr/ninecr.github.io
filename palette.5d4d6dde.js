!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,_){return(o=r()?Reflect.construct:function(e,t,r){var o=[null];o.push.apply(o,t);var _=new(Function.bind.apply(e,o));return r&&n(_,r.prototype),_}).apply(null,arguments)}function _(e){var r="function"==typeof Map?new Map:void 0;return(_=function(e){if(null===e||(_=e,-1===Function.toString.call(_).indexOf("[native code]")))return e;var _;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,l)}function l(){return o(e,arguments,t(this).constructor)}return l.prototype=Object.create(e.prototype,{constructor:{value:l,enumerable:!1,writable:!0,configurable:!0}}),n(l,e)})(e)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,_=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,_=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw _}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c,a,f,s,p={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function y(e,t){for(var n in t)e[n]=t[n];return e}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function m(e,t,n){var r,o,_,l=arguments,i={};for(_ in t)"key"==_?r=t[_]:"ref"==_?o=t[_]:i[_]=t[_];if(arguments.length>3)for(n=[n],_=3;_<arguments.length;_++)n.push(l[_]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(_ in e.defaultProps)void 0===i[_]&&(i[_]=e.defaultProps[_]);return b(e,i,r,o,null)}function b(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++c.__v:o};return null!=c.vnode&&c.vnode(_),_}function g(e){return e.children}function k(e,t){this.props=e,this.context=t}function w(e,t){if(null==t)return e.__?w(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?w(e):null}function x(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return x(e)}}function S(e){(!e.__d&&(e.__d=!0)&&a.push(e)&&!E.__r++||s!==c.debounceRendering)&&((s=c.debounceRendering)||f)(E)}function E(){for(var e;E.__r=a.length;)e=a.sort((function(e,t){return e.__v.__b-t.__v.__b})),a=[],e.some((function(e){var t,n,r,o,_,l;e.__d&&(_=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=y({},o)).__v=o.__v+1,N(l,o,r,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[_]:null,n,null==_?w(o):_,o.__h),D(n,o),o.__e!=_&&x(o)))}))}function C(e,t,n,r,o,_,l,i,u,c){var a,f,s,d,y,v,m,k=r&&r.__k||h,x=k.length;for(n.__k=[],a=0;a<t.length;a++)if(null!=(d=n.__k[a]=null==(d=t[a])||"boolean"==typeof d?null:"string"==typeof d||"number"==typeof d?b(null,d,null,null,d):Array.isArray(d)?b(g,{children:d},null,null,null):d.__b>0?b(d.type,d.props,d.key,null,d.__v):d)){if(d.__=n,d.__b=n.__b+1,null===(s=k[a])||s&&d.key==s.key&&d.type===s.type)k[a]=void 0;else for(f=0;f<x;f++){if((s=k[f])&&d.key==s.key&&d.type===s.type){k[f]=void 0;break}s=null}N(e,d,s=s||p,o,_,l,i,u,c),y=d.__e,(f=d.ref)&&s.ref!=f&&(m||(m=[]),s.ref&&m.push(s.ref,null,d),m.push(f,d.__c||y,d)),null!=y?(null==v&&(v=y),"function"==typeof d.type&&null!=d.__k&&d.__k===s.__k?d.__d=u=P(d,u,e):u=O(e,d,s,k,y,u),c||"option"!==n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&s.__e==u&&u.parentNode!=e&&(u=w(s))}for(n.__e=v,a=x;a--;)null!=k[a]&&("function"==typeof n.type&&null!=k[a].__e&&k[a].__e==n.__d&&(n.__d=w(r,a+1)),U(k[a],k[a]));if(m)for(a=0;a<m.length;a++)F(m[a],m[++a],m[++a])}function P(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,t="function"==typeof o.type?P(o,t,n):O(n,o,o,e.__k,o.__e,t));return t}function O(e,t,n,r,o,_){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=_||null==o.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(o),l=null;else{for(i=_,u=0;(i=i.nextSibling)&&u<r.length;u+=2)if(i==o)break e;e.insertBefore(o,_),l=_}return void 0!==l?l:o.nextSibling}function A(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px"}function T(e,t,n,r,o){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||A(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||A(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?H:j,_):e.removeEventListener(t,_?H:j,_);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function j(e){this.l[e.type+!1](c.event?c.event(e):e)}function H(e){this.l[e.type+!0](c.event?c.event(e):e)}function N(e,t,n,r,o,_,l,i,u){var a,f,s,p,h,d,v,m,b,w,x,S=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(u=n.__h,i=t.__e=n.__e,t.__h=null,_=[i]),(a=c.__b)&&a(t);try{e:if("function"==typeof S){if(m=t.props,b=(a=S.contextType)&&r[a.__c],w=a?b?b.props.value:a.__:r,n.__c?v=(f=t.__c=n.__c).__=f.__E:("prototype"in S&&S.prototype.render?t.__c=f=new S(m,w):(t.__c=f=new k(m,w),f.constructor=S,f.render=R),b&&b.sub(f),f.props=m,f.state||(f.state={}),f.context=w,f.__n=r,s=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=y({},f.__s)),y(f.__s,S.getDerivedStateFromProps(m,f.__s))),p=f.props,h=f.state,s)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&m!==p&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(m,w),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(m,f.__s,w)||t.__v===n.__v){f.props=m,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(m,f.__s,w),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(p,h,d)}))}f.context=w,f.props=m,f.state=f.__s,(a=c.__r)&&a(t),f.__d=!1,f.__v=t,f.__P=e,a=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(r=y(y({},r),f.getChildContext())),s||null==f.getSnapshotBeforeUpdate||(d=f.getSnapshotBeforeUpdate(p,h)),x=null!=a&&a.type===g&&null==a.key?a.props.children:a,C(e,Array.isArray(x)?x:[x],t,n,r,o,_,l,i,u),f.base=t.__e,t.__h=null,f.__h.length&&l.push(f),v&&(f.__E=f.__=null),f.__e=!1}else null==_&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,r,o,_,l,u);(a=c.diffed)&&a(t)}catch(e){t.__v=null,(u||null!=_)&&(t.__e=i,t.__h=!!u,_[_.indexOf(i)]=null),c.__e(e,t,n)}}function D(e,t){c.__c&&c.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){c.__e(e,t.__v)}}))}function M(e,t,n,r,o,_,l,i){var u,c,a,f,s=n.props,d=t.props,y=t.type,m=0;if("svg"===y&&(o=!0),null!=_)for(;m<_.length;m++)if((u=_[m])&&(u===e||(y?u.localName==y:3==u.nodeType))){e=u,_[m]=null;break}if(null==e){if(null===y)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),_=null,i=!1}if(null===y)s===d||i&&e.data===d||(e.data=d);else{if(_=_&&h.slice.call(e.childNodes),c=(s=n.props||p).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!i){if(null!=_)for(s={},f=0;f<e.attributes.length;f++)s[e.attributes[f].name]=e.attributes[f].value;(a||c)&&(a&&(c&&a.__html==c.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(function(e,t,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in t||T(e,_,null,n[_],r);for(_ in t)o&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||T(e,_,t[_],n[_],r)}(e,d,s,o,i),a)t.__k=[];else if(m=t.props.children,C(e,Array.isArray(m)?m:[m],t,n,r,o&&"foreignObject"!==y,_,l,e.firstChild,i),null!=_)for(m=_.length;m--;)null!=_[m]&&v(_[m]);i||("value"in d&&void 0!==(m=d.value)&&(m!==e.value||"progress"===y&&!m)&&T(e,"value",m,s.value,!1),"checked"in d&&void 0!==(m=d.checked)&&m!==e.checked&&T(e,"checked",m,s.checked,!1))}return e}function F(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){c.__e(e,n)}}function U(e,t,n){var r,o,_;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||F(r,null,t)),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){c.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&U(r[_],t,n);null!=o&&v(o)}function R(e,t,n){return this.constructor(e,n)}function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return t&&e.push(t),e}),[]).join(" ")}c={__e:function(e,t){for(var n,r,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((r=n.constructor)&&null!=r.getDerivedStateFromError&&(n.setState(r.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e},__v:0},k.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof e&&(e=e(y({},n),this.props)),e&&y(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),S(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),S(this))},k.prototype.render=g,a=[],f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E.__r=0;var W,I,q,z=0,$=[],B=c.__b,G=c.__r,V=c.diffed,J=c.__c,K=c.unmount;function Q(e,t){c.__h&&c.__h(I,e,z||t),z=0;var n=I.__H||(I.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function X(e){return z=1,function(e,t,n){var r=Q(W++,2);return r.t=e,r.__c||(r.__=[n?n(t):ne(void 0,t),function(e){var t=r.t(r.__[0],e);r.__[0]!==t&&(r.__=[t,r.__[1]],r.__c.setState({}))}],r.__c=I),r.__}(ne,e)}function Y(){$.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(ee),e.__H.__h.forEach(te),e.__H.__h=[]}catch(t){e.__H.__h=[],c.__e(t,e.__v)}})),$=[]}c.__b=function(e){I=null,B&&B(e)},c.__r=function(e){G&&G(e),W=0;var t=(I=e.__c).__H;t&&(t.__h.forEach(ee),t.__h.forEach(te),t.__h=[])},c.diffed=function(e){V&&V(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==$.push(t)&&q===c.requestAnimationFrame||((q=c.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),Z&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Z&&(t=requestAnimationFrame(n))})(Y)),I=void 0},c.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ee),e.__h=e.__h.filter((function(e){return!e.__||te(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],c.__e(n,e.__v)}})),J&&J(e,t)},c.unmount=function(e){K&&K(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ee)}catch(e){c.__e(e,t.__v)}};var Z="function"==typeof requestAnimationFrame;function ee(e){var t=I;"function"==typeof e.__c&&e.__c(),I=t}function te(e){var t=I;e.__c=e.__(),I=t}function ne(e,t){return"function"==typeof t?t(e):t}var re=i(JSON.parse('[":host{display:block;margin:1em auto}section{display:flex;flex-wrap:wrap;justify-content:center;line-height:1;margin:auto}a{margin:1px;width:24px;height:24px;border-radius:24px;background-size:60px!important;font-size:24px;box-sizing:border-box;cursor:pointer;border:1px solid transparent;transition:transform .15s}a:hover{transform:scale(1.1);border-color:inherit}a.a{width:calc(3rem + 2px)}",{"is-lg":"a"}]'),2),oe=re[0],_e=re[1];function le(e){var t=e.color,n=Math.min(t.length,e.col>0?e.col:5)||1,r=i(X(-1),2),o=r[0],_=r[1];return m("section",{className:_e.root,style:{width:"".concat(24*n+2*n,"px")}},t.map((function(e,t){return m("a",{style:{background:e,margin:"1px"},className:L(o===t&&_e["is-active"]),title:e,onClick:function(){var n;_(t),n={accent_color:e},document.dispatchEvent(new CustomEvent("inside",{detail:{type:"theme",data:n}}))}})})))}!function(o,i){var u={root:null};i.shared&&i.shared(u),customElements.define("is-".concat(o),function(o){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(h,o);var _,c,a,f,s,p=(_=h,c=r(),function(){var e,n=t(_);if(c){var r=t(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function h(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h);var t=(e=p.call(this)).attachShadow({mode:"open"}),n=document.createElement("style");return n.textContent=i.style,i.created&&Object.assign(u,i.created(t)),u.root=t,t.appendChild(n),e}return a=h,s=[{key:"observedAttributes",get:function(){return i.attrs}}],(f=[{key:"connectedCallback",value:function(){i.connected&&i.connected(u)}},{key:"attributeChangedCallback",value:function(e,t,n){i.changed&&i.changed(u,[e,t,n])}}])&&e(a.prototype,f),s&&e(a,s),h}(_(HTMLElement)))}("palette",{style:oe,attrs:["theme","col"],created:function(e){return{render:function(t){!function(e,t,n){var r,o,_;c.__&&c.__(e,t),o=(r="function"==typeof n)?null:n&&n.__k||t.__k,_=[],N(t,e=(!r&&n||t).__k=m(g,null,[e]),o||p,p,void 0!==t.ownerSVGElement,!r&&n?[n]:o?null:t.firstChild?h.slice.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r),D(_,e)}(m(le,t),e)},props:{}}},changed:function(e,t){var n=e.props,r=e.render,o=i(t,3),_=o[0],l=o[2];"theme"===_?r(Object.assign(n,{color:l.split(",")})):"col"!==_||Number.isNaN(+l)||r(Object.assign(n,{col:+l}))}})}();
