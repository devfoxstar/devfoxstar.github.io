(self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2=self.webpackChunk_elegantstack_gatsby_starter_flexiblog_minimal_v2||[]).push([[142],{7135:function(t,e,r){t.exports=r(6248)},8676:function(t){"use strict";t.exports=function(t,e){e=e||JSON.stringify;for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e(i);n[a]||(r.push(i),n[a]=!0)}return r}},3033:function(t,e){"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;e.validate=function(t){if(!t)return!1;if(t.length>254)return!1;if(!r.test(t))return!1;var e=t.split("@");return!(e[0].length>64)&&!e[1].split(".").some((function(t){return t.length>63}))}},617:function(t,e,r){var n=r(4916)("jsonp");t.exports=function(t,e,r){"function"==typeof e&&(r=e,e={});e||(e={});var a,s,c=e.prefix||"__jp",u=e.name||c+o++,l=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,p=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;f&&(s=setTimeout((function(){h(),r&&r(new Error("Timeout"))}),f));function h(){a.parentNode&&a.parentNode.removeChild(a),window[u]=i,s&&clearTimeout(s)}return window[u]=function(t){n("jsonp got",t),h(),r&&r(null,t)},t=(t+=(~t.indexOf("?")?"&":"?")+l+"="+p(u)).replace("?&","?"),n('jsonp req "%s"',t),(a=document.createElement("script")).src=t,d.parentNode.insertBefore(a,d),function(){window[u]&&h()}};var o=0;function i(){}},4916:function(t,e,r){function n(){var t;try{t=e.storage.debug}catch(r){}return!t&&"undefined"!=typeof process&&"env"in process&&(t={}.DEBUG),t}(e=t.exports=r(3157)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},e.formatArgs=function(t){var r=this.useColors;if(t[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+t[0]+(r?"%c ":" ")+"+"+e.humanize(this.diff),!r)return;var n="color: "+this.color;t.splice(1,0,n,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,(function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))})),t.splice(i,0,n)},e.save=function(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(r){}},e.load=n,e.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(n())},3157:function(t,e,r){var n;function o(t){function r(){if(r.enabled){var t=r,o=+new Date,i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o;for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&a.unshift("%O");var c=0;a[0]=a[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;c++;var o=e.formatters[n];if("function"==typeof o){var i=a[c];r=o.call(t,i),a.splice(c,1),c--}return r})),e.formatArgs.call(t,a);var u=r.log||e.log||console.log.bind(console);u.apply(t,a)}}return r.namespace=t,r.enabled=e.enabled(t),r.useColors=e.useColors(),r.color=function(t){var r,n=0;for(r in t)n=(n<<5)-n+t.charCodeAt(r),n|=0;return e.colors[Math.abs(n)%e.colors.length]}(t),"function"==typeof e.init&&e.init(r),r}(e=t.exports=o.debug=o.default=o).coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){e.enable("")},e.enable=function(t){e.save(t),e.names=[],e.skips=[];for(var r=("string"==typeof t?t:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(t=r[o].replace(/\*/g,".*?"))[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))},e.enabled=function(t){var r,n;for(r=0,n=e.skips.length;r<n;r++)if(e.skips[r].test(t))return!1;for(r=0,n=e.names.length;r<n;r++)if(e.names[r].test(t))return!0;return!1},e.humanize=r(4207),e.names=[],e.skips=[],e.formatters={}},4207:function(t){var e=1e3,r=60*e,n=60*r,o=24*n,i=365.25*o;function a(t,e,r){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+r:Math.ceil(t/e)+" "+r+"s"}t.exports=function(t,s){s=s||{};var c,u=typeof t;if("string"===u&&t.length>0)return function(t){if((t=String(t)).length>100)return;var a=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(!a)return;var s=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*i;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(t);if("number"===u&&!1===isNaN(t))return s.long?a(c=t,o,"day")||a(c,n,"hour")||a(c,r,"minute")||a(c,e,"second")||c+" ms":function(t){if(t>=o)return Math.round(t/o)+"d";if(t>=n)return Math.round(t/n)+"h";if(t>=r)return Math.round(t/r)+"m";if(t>=e)return Math.round(t/e)+"s";return t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},5828:function(t,e,r){"use strict";e.Z=void 0;var n,o=(n=r(617))&&n.__esModule?n:{default:n},i=r(3033);var a=function(t){var e=t.url,r=t.timeout;return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:r},(function(e,r){e&&n(e),r&&t(r)}))}))},s=function(t){var e="";for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n="group["===r.substring(0,6)?r:r.toUpperCase();e=e.concat("&".concat(n,"=").concat(t[r]))}return e},c=function(t,e,r){var n=(0,i.validate)(t),o=encodeURIComponent(t);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var c=__GATSBY_PLUGIN_MAILCHIMP_ADDRESS__,u=__GATSBY_PLUGIN_MAILCHIMP_TIMEOUT__;arguments.length<3&&"string"==typeof e?c=e:"string"==typeof r&&(c=r),c=c.replace(/\/post/g,"/post-json");var l="&EMAIL=".concat(o).concat(s(e)),f="".concat(c).concat(l);return a({url:f,timeout:u})};e.Z=c},9015:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return $}});var n=r(5773),o=r(808),i=r(7378),a=r(7814),s=r(7425),c=r(4459),u=r(6196),l=r(1025),f=r(8945),p=r(6495),d={msg:{mb:0},button:{display:"block",mx:"auto"}},h=function(t){var e=t.handleSubmit,r=t.canSubmit,n=t.submitting,o=t.message,a=t.success;return(0,p.tZ)("form",{onSubmit:e},o&&(0,p.tZ)(f.v0,{variant:a?"success":"error",sx:d.msg,dangerouslySetInnerHTML:{__html:o}}),r&&(0,p.tZ)(i.Fragment,null,(0,p.tZ)(f.xu,{variant:"forms.row"},(0,p.tZ)(f.II,{name:"email",type:"email",placeholder:"Email Address","aria-label":"Email Address",required:!0})),(0,p.tZ)(f.zx,{type:"submit",variant:a||n?"disabled":"primary",disabled:a||n,sx:d.button},"Subscribe ",n&&(0,p.tZ)(f.$j,{size:"20"}))))};function m(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}var g=r(7135),v=r.n(g),y=r(5828),b=function(){var t=(0,i.useState)(),e=t[0],r=t[1],n=(0,i.useState)(!1),o=n[0],a=n[1],s=function(){var t,e=(t=v().mark((function t(e){var n,o,i;return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a(!0),n=new FormData(e.target),o=n.get("email"),t.next=6,(0,y.Z)(o);case 6:i=t.sent,r(i),a(!1);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){m(i,n,o,a,s,"next",t)}function s(t){m(i,n,o,a,s,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}(),c=e&&"success"===e.result,u=e&&"success"!==e.result;return{handleSubmit:s,canSubmit:!e||u,submitting:o,message:e&&e.msg,success:c,error:u}},w=r(7566),x={card:{position:"relative"},wrapper:{maxWidth:500,textAlign:"center",mx:"auto",py:3},icons:{display:["none",null,"block"],position:"absolute",top:"-3rem",left:"5rem",svg:{display:"block"}},plane:{fontSize:"9rem",color:"beta"},wind:{fontSize:"7rem",color:"omegaLight",transform:"rotate(120deg)",mt:"0.5rem",ml:"-3rem"},form:{maxWidth:300,mx:"auto",mt:4}},Z=function(t){var e=t.simple,r=b(),n=r.handleSubmit,o=r.canSubmit,i=r.submitting,a=r.message,s=r.success;return(0,p.tZ)(f.Zb,{variant:"paper",sx:x.card},(0,p.tZ)(f.xu,{sx:x.wrapper},!e&&(0,p.tZ)(f.xu,{sx:x.icons},(0,p.tZ)(w.P58,{css:(0,l.i)(x.plane)}),(0,p.tZ)(w.J00,{css:(0,l.i)(x.wind)})),(0,p.tZ)(f.X6,{variant:"h2"},"Subscribe to our newsletter!"),(0,p.tZ)(f.xv,{variant:"p"},"We'll send you the best of our blog just once a month. We promise."),(0,p.tZ)(f.xu,{sx:x.form},(0,p.tZ)(h,{handleSubmit:n,canSubmit:o,submitting:i,message:a,success:s}))))};Z.defaultProps={simple:!1};var k=Z,O=r(9341),P=r(4649),j=["children","sx"],S=["children"];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){(0,P.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L={alignItems:"center",justifyContent:"space-between",position:"relative",zIndex:2,pt:4,pb:5},A={flexBasis:"2/3",flex:1,textAlign:["center",null,"left"]},C=function(t){return t.children},I=function(t){var e=t.children,r=(0,o.Z)(t,S),n=i.Children.toArray(e),a=n.filter((function(t){var e=t.type;return e.displayName===C.name||e.name===C.name})),s=n.filter((function(t){var e=t.type;return e.displayName!==C.name&&e.name!==C.name}));return(0,p.tZ)(i.Fragment,null,(0,p.tZ)(f.kC,{sx:_(_({},L),r.sx)},s),a)},T=function(t){var e=t.children,r=t.sx,i=(0,o.Z)(t,j);return(0,p.tZ)(f.xu,(0,n.Z)({sx:_(_({},A),r)},i),e)},N=C,z={heading:{background:function(t){return"\n      linear-gradient(\n        45deg,\n        "+t.colors.alpha+" 32.5%,\n        "+t.colors.betaDark+" 50.5%)\n    "},color:"beta",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold"},running:{color:"omegaDark",fontWeight:"normal",maxWidth:["full",null,"2/3"]}},D=function(){return(0,p.tZ)(i.Fragment,null,(0,p.tZ)(c.Z,{space:3}),(0,p.tZ)(f.X6,{variant:"h1",sx:z.heading},"개기심사 - 개발 블로그"),(0,p.tZ)(c.Z,{space:3}),(0,p.tZ)(f.X6,{variant:"h3",sx:z.running},"개발의 기초와 심화 사이! 여우별의 개발 블로그입니다."))},M=r(5414),F=function(t){return{width:"full",height:"100vh",position:"absolute",zIndex:0,top:-150,right:"15%",opacity:.4,backgroundImage:"url("+t+")",backgroundRepeat:"no-repeat",backgroundPosition:"top right"}},G=function(){var t=(0,M.useStaticQuery)(R),e=(t&&t.file||{}).publicURL;return e?(0,p.tZ)(f.xu,{sx:F(e)}):""},R="3138140905",U={wrapper:{pb:0}},W=function(t){return t.location.pathname!==t.pageContext.basePath?null:(0,p.tZ)(I,{sx:U.wrapper},(0,p.tZ)(T,null,(0,p.tZ)(D,null)),(0,p.tZ)(N,null,(0,p.tZ)(G,null)))},B=["data"],$=function(t){var e=t.data,r=e.paginatedPosts,i=void 0===r?{}:r,l=(e.posts,(0,o.Z)(t,B)),f=l.pageContext,d=(f=void 0===f?{}:f).services,h=void 0===d?{}:d,m=f.basePath;return(0,p.tZ)(a.Ar,l,(0,p.tZ)(O.Z,{title:"Home"}),(0,p.tZ)(a.VM,null,(0,p.tZ)(W,l)),(0,p.tZ)(c.Z,null),(0,p.tZ)(a.Kq,null,(0,p.tZ)(a.or,{sx:{zIndex:1}},(0,p.tZ)(s.Z,{variant:["horizontal"],title:"Kotlin, Java, ASP.NET",nodes:i.nodes,columns:[1,2],omitMedia:!0}))),(0,p.tZ)(c.Z,null),(0,p.tZ)(a.jS,null,(0,p.tZ)(u.Z,(0,n.Z)({},i.pageInfo,{basePath:m}))),(0,p.tZ)(c.Z,{space:5}),(0,p.tZ)(a.Kq,null,(0,p.tZ)(a.or,{sx:{zIndex:1}},h.mailchimp&&(0,p.tZ)(k,{simple:!0}))))}},7425:function(t,e,r){"use strict";r.d(e,{Z:function(){return S}});var n=r(5773),o=r(808),i=r(7378),a=r(8945),s=r(6741),c=r(8175),u=r(8676),l=r.n(u),f=r(7619),p=r(4649),d=r(5987),h=r(1025),m=r(7566),g={slide:{width:"full",".slick-slide":{transition:"all 600ms ease",opacity:1,transform:[null,"scale(1)"],transformOrigin:"left"},".slick-slide.slick-active + :not(.slick-active)":{opacity:[null,0],transform:[null,"scale(0.7)"]},".slick-track":{left:"0 !important"}},fade:{width:"full",".slick-slide:not(.slick-active)":{left:"-9999px !important"},".slick-track":{display:"flex",alignItems:"center",left:"0 !important"}},controlBottom:{".slick-prev, .slick-next":{top:"auto",bottom:3,left:"50%",transform:"translate(-125%, 0)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:0},".slick-dots li":{verticalAlign:"middle"}},controlCenter:{".slick-prev, .slick-next":{top:"50%",left:"50%",transform:"translate(-125%, -50%)"},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:["full","auto"],top:["100%","auto"],bottom:4,right:4}},controlOver:{width:"full",".slick-prev, .slick-next":{top:"auto",bottom:[-2,3],left:[4,6]},".slick-next":{ml:5},".slick-dots":{textAlign:"center",width:"auto",top:["auto",5],bottom:[3,"auto"],left:[2,4],p:0,ml:3},".slick-dots li":{display:["inline-block","block"]},".slick-dots li.slick-active button":{bg:"alpha"}}},v=r(72),y=r(6495);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,p.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var x=(0,v.ZP)((function(){return r.e(636).then(r.bind(r,2324))})),Z=i.forwardRef((function(t,e){var r=t.columns,o=t.slidesToScroll,i=t.smoothAutoScroll,s=t.autoPlay,c=t.autoplaySpeed,u=t.fade,l=t.dots,f=t.arrows,p=t.centerMode,v=t.centerPadding,b=t.controlPosition,Z=t.beforeChange,k=t.children,O=(0,d.B7)(),P={slidesToScroll:1,autoplay:!0,cssEase:"linear"},j={centerMode:!u,centerPadding:"40px",swipeToSlide:!0,arrows:!1,dots:!(!l||!u)},S=O.theme.breakpoints.map((function(t,e){var n=r[e>=r.length?r.length-1:e],i=o[e>=o.length?o.length-1:e];return{breakpoint:parseInt(t),settings:w({slidesToShow:n,slidesToScroll:i},0===e?j:{})}})),E={ref:e,beforeChange:Z,slidesToShow:r[r.length-1],slidesToScroll:o[o.length-1],speed:800,dots:l,arrows:f,centerMode:p,centerPadding:v,infinite:!0,cssEase:u?"ease-out":"cubic-bezier(0.23, 1, 0.32, 1)",fade:u,responsive:S,css:(0,h.i)(w(w(w(w({},u?g.fade:g.slide),"bottom"===b&&g.controlBottom),"center"===b&&g.controlCenter),"over"===b&&g.controlOver)),prevArrow:(0,y.tZ)(a.hU,{sx:g.arrowPrev},(0,y.tZ)(m.bUI,null)),nextArrow:(0,y.tZ)(a.hU,{sx:g.arrowNext},(0,y.tZ)(m.Dli,null))};i&&(E=w(w(w({},E),P),{},{speed:1e4,autoplaySpeed:0,arrows:!1,dots:!1})),!i&&s&&(E=w(w(w({},E),P),{},{speed:300,autoplaySpeed:c}));var _=k.slice(0,r[r.length-1]);return(0,y.tZ)(x,(0,n.Z)({},E,{fallback:_}),k)})),k=Z;Z.defaultProps={fade:!1,dots:!0,arrows:!0,centerMode:!1,centerPadding:"50px",autoPlay:!1,autoplaySpeed:3e3,smoothAutoScroll:!1,slidesToScroll:[1],rows:1,controlPosition:"sides"};var O=r(8092),P=["nodes","variant","title","withTitleLink","limit","skip","distinct","slider","aside","asNavFor","loading"],j=i.forwardRef((function(t,e){var r=t.nodes,i=t.variant,u=t.title,p=t.withTitleLink,d=t.limit,h=t.skip,m=t.distinct,g=t.slider,v=t.aside,b=t.asNavFor,w=t.loading,x=(0,o.Z)(t,P),Z=function(t,e){var r=e.limit,n=e.skip,o=e.distinct;if(!t)return null;if(!r&&!n&&!o)return t;var i=t;return o&&(i=l()(i,(function(t){return t.id}))),n&&(i=i.slice(n)),r&&(i=i.slice(0,r)),i}(r,{distinct:m,limit:d,skip:h});if(!Z||!Z.length)return null;var j=p?Z[0].category&&Z[0].category.slug:"",S=u&&""+(0,c.Z)(Z.map((function(t){return t.id})).join()),E=(0,s.Z)(g?"lists.cards.slider":"lists.cards.fixed",i),_=function(t){b&&b.current&&(b.current.slickPause(),b.current.slickGoTo(t))},L=Z.map((function(e,r){return(0,y.tZ)(O.Z,(0,n.Z)({key:e.id,variant:i,onMouseOver:function(){return _(r)},onFocus:function(){return _(r)},loading:t.fade?0===r?w:void 0:w},e,x))})),A=function(){return(0,y.tZ)(a.xu,{sx:{variant:E}},g?(0,y.tZ)(k,(0,n.Z)({ref:e},x),L):L)};return u?(0,y.tZ)(f.Z,{title:u,titleLink:j,key:S,aside:v},(0,y.tZ)(A,null)):(0,y.tZ)(A,null)})),S=j;j.defaultProps={variant:"vertical",columns:[1],aside:!1}},6196:function(t,e,r){"use strict";r.d(e,{Z:function(){return p}});var n=r(4649),o=(r(7378),r(5414)),i=r(8945),a=r(7566),s=function(t){return t.replace(/\/*$/,"/")},c=r(6495);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={wrapper:{justifyContent:"space-between",alignItems:"center",textAlign:"center",borderRadius:"full",bg:"contentBg",maxWidth:["none",500],mx:"auto",p:1},item:{width:"1/3"},number:{py:2},button:{minWidth:"full"}},p=function(t){var e=t.currentPage,r=t.pageCount,n=t.hasPreviousPage,u=t.hasNextPage,p=t.basePath,d=void 0===p?"":p,h=t.slug;if(!u&&!n)return"";var m=s(d+(void 0===h?"":h)),g=s(m+"page"),v=e>=3?""+g+(e-1):m,y=""+g+(e+1);return(0,c.tZ)(i.kC,{sx:f.wrapper},(0,c.tZ)(i.xu,{sx:f.item},n&&(0,c.tZ)(i.zx,{variant:"mute",as:o.Link,to:v,sx:f.button},(0,c.tZ)(a.bUI,null),"Previous")),(0,c.tZ)(i.xu,{sx:l(l({},f.item),f.number)},"Page ",(0,c.tZ)("strong",null,e)," of ",(0,c.tZ)("strong",null,r)),(0,c.tZ)(i.xu,{sx:f.item},u&&(0,c.tZ)(i.zx,{variant:"dark",as:o.Link,to:y,sx:f.button},"Next",(0,c.tZ)(a.Dli,null))))}},6248:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",m={};function g(){}function v(){}function y(){}var b={};c(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(_([])));x&&x!==r&&n.call(x,i)&&(b=x);var Z=y.prototype=g.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return v.prototype=y,c(Z,"constructor",y),c(y,"constructor",v),v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(Z),t},t.awrap=function(t){return{__await:t}},k(O.prototype),c(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(Z),c(Z,s,"Generator"),c(Z,i,(function(){return this})),c(Z,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---packages-blog-gatsby-blog-core-src-templates-posts-js-73acd6ddb25c0032fdd0.js.map