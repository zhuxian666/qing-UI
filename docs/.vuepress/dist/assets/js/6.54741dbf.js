(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{307:function(t,e,r){"use strict";var n=r(7),a=r(4),s=r(95),i=r(11),c=r(9),o=r(24),u=r(312),l=r(43),f=r(2),p=r(27),h=r(65).f,g=r(23).f,v=r(8).f,d=r(310).trim,m=a.Number,w=m.prototype,_="Number"==o(p(w)),b=function(t){var e,r,n,a,s,i,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=d(u)).charCodeAt(0))||45===e){if(88===(r=u.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(i=(s=u.slice(2)).length,c=0;c<i;c++)if((o=s.charCodeAt(c))<48||o>a)return NaN;return parseInt(s,n)}return+u};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(_?f((function(){w.valueOf.call(r)})):"Number"!=o(r))?u(new m(b(e)),r,y):b(e)},C=n?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;C.length>E;E++)c(m,N=C[E])&&!c(y,N)&&v(y,N,g(m,N));y.prototype=w,w.constructor=y,i(a,"Number",y)}},308:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},310:function(t,e,r){var n=r(22),a="["+r(308)+"]",s=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(i,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},312:function(t,e,r){var n=r(5),a=r(96);t.exports=function(t,e,r){var s,i;return a&&"function"==typeof(s=e.constructor)&&s!==r&&n(i=s.prototype)&&i!==r.prototype&&a(t,i),t}},313:function(t,e,r){},314:function(t,e,r){},318:function(t,e,r){"use strict";r(313)},319:function(t,e,r){"use strict";r(314)},320:function(t,e,r){"use strict";r(168),r(93),r(167),r(307),r(97),r(94);var n=r(29),a=function(t){var e=Object.keys(t),r=!0;return e.forEach((function(t){["span","offset"].indexOf(t)<0&&(r=!1)})),r},s={name:"QCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:a},narrowPc:{type:Object,validator:a},pc:{type:Object,validator:a},widePc:{type:Object,validator:a}},data:function(){return{gutter:0}},computed:{colClass:function(){var t=this.span,e=this.offset,r=this.ipad,a=this.narrowPc,s=this.pc,i=this.widePc,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var r=[];return t.span&&r.push("col-".concat(e).concat(t.span)),t.offset&&r.push("offset-".concat(e).concat(t.offset)),r};return[].concat(Object(n.a)(c({span:t,offset:e})),Object(n.a)(c(r,"ipad-")),Object(n.a)(c(a,"narrow-pc-")),Object(n.a)(c(s,"pc-")),Object(n.a)(c(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(r(318),r(42)),c=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)}),[],!1,null,"0aa6ee64",null);e.a=c.exports},321:function(t,e,r){"use strict";r(93),r(167),r(307),r(94);var n={name:"QRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},mounted:function(){var t=this;this.$children.forEach((function(e){e.gutter=t.gutter}))},computed:{rowStyle:function(){return{marginLeft:-this.gutter/2+"px",marginRight:-this.gutter/2+"px"}},rowClass:function(){return[this.align&&"align-"+this.align]}}},a=(r(319),r(42)),s=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)}),[],!1,null,"4160ef14",null);e.a=s.exports},354:function(t,e,r){},408:function(t,e,r){"use strict";r(354)},447:function(t,e,r){"use strict";r.r(e);var n=r(320),a=r(321),s={components:{"q-col":n.a,"q-row":a.a}},i=(r(408),r(42)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"align-wrapper"},[r("q-row",{staticClass:"row",attrs:{align:"left"}},[r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("left")]),t._v(" "),r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("left")])],1),t._v(" "),r("q-row",{staticClass:"row",attrs:{align:"center"}},[r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("center")]),t._v(" "),r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("center")])],1),t._v(" "),r("q-row",{staticClass:"row",attrs:{align:"right"}},[r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("right")]),t._v(" "),r("q-col",{staticClass:"item",attrs:{span:"8"}},[t._v("right")])],1)],1)}),[],!1,null,"5c51df24",null);e.default=c.exports}}]);