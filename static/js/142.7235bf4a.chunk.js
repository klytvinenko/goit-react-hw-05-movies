/*! For license information please see 142.7235bf4a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[142],{142:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n,o,i,a=r(861),c=r(439),s=r(752),u=r(689),l=r(87),h=r(168),f=r(867),p=f.ZP.div(n||(n=(0,h.Z)(["\n  display: flex;\n  gap: 10px;\n  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);\n"]))),v=f.ZP.div(o||(o=(0,h.Z)(["\n  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),\n    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);\n"]))),d=f.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n"]))),g=r(184),y=function(t){var e,r,n=t.img,o=t.title,i=t.genres,a=t.overview,c=t.rating,s=(0,u.TH)(),h=null!==(e=null===(r=s.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies";return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{children:(0,g.jsx)(l.rU,{to:h,children:"Go back"})}),(0,g.jsxs)(p,{children:[(0,g.jsx)("img",{src:"".concat(n?"https://image.tmdb.org/t/p/w500/"+n:"https://via.placeholder.com/182x273?text="+o),alt:o,width:"150"}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:o}),(0,g.jsxs)("p",{children:["User Score: ",Math.round(c)]}),(0,g.jsx)("h4",{children:"Overview"}),(0,g.jsx)("p",{children:a}),i&&i.length>0?(0,g.jsxs)("div",{children:[(0,g.jsx)("h4",{children:"Genres"}),(0,g.jsx)(d,{children:i.map((function(t,e){return(0,g.jsx)("li",{children:t},e)}))})]}):(0,g.jsx)("p",{children:"No genres available"})]})]}),(0,g.jsxs)(v,{children:[(0,g.jsx)("h2",{children:"Additional information"}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"cast",state:s.state,children:"Cast"})}),(0,g.jsx)("li",{children:(0,g.jsx)(l.rU,{to:"reviews",state:s.state,children:"Reviews"})})]})]})]}),(0,g.jsx)(u.j3,{})]})},x=r(596),m=r(791);function w(){w=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var f="suspendedStart",p="executing",v="completed",d={};function g(){}function y(){}function x(){}var m={};u(m,a,(function(){return this}));var j=Object.getPrototypeOf,b=j&&j(j(P([])));b&&b!==r&&n.call(b,a)&&(m=b);var L=x.prototype=g.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=h(e,r,n);if("normal"===u.type){if(o=n.done?v:"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:y,configurable:!0}),y.displayName=u(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(_.prototype),u(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,s,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}var j=function(){var t=(0,m.useState)(""),e=(0,c.Z)(t,2),r=e[0],n=e[1],o=(0,m.useState)(!1),i=(0,c.Z)(o,2),l=i[0],h=i[1],f=(0,m.useState)(null),p=(0,c.Z)(f,2),v=p[0],d=p[1],j=(0,u.UO)().movieId;return(0,m.useEffect)((function(){var t=function(){var t=(0,a.Z)(w().mark((function t(){var e,r,o,i,a,c,s,u;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(null),h(!0),t.next=5,(0,x.Y5)(j);case 5:e=t.sent,r=e.genres,o=e.id,i=e.overview,a=e.poster_path,c=e.title,s=e.vote_average,u=r.map((function(t){return t.name})),n({genreList:u,id:o,overview:i,poster_path:a,title:c,vote_average:s}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),d(t.t0.message);case 19:return t.prev=19,h(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[0,16,19,22]])})));return function(){return t.apply(this,arguments)}}();t()}),[j]),null!==v?(0,g.jsxs)("p",{children:["Something went wrong. Error: ",v]}):(0,g.jsx)(g.Fragment,{children:l?(0,g.jsx)(s.Z,{}):(0,g.jsx)(y,{id:r.id,img:r.poster_path,title:r.title,genres:r.genresList,overview:r.overview,rating:r.vote_average})})}}}]);
//# sourceMappingURL=142.7235bf4a.chunk.js.map