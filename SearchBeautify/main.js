!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t(require("React"),require("ReactDOM"),require("mobx"),require("mobxReactLite")):"function"===typeof define&&define.amd?define(["React","ReactDOM","mobx","mobxReactLite"],t):"object"===typeof exports?exports.SearchBeautify=t(require("React"),require("ReactDOM"),require("mobx"),require("mobxReactLite")):e.SearchBeautify=t(e.React,e.ReactDOM,e.mobx,e.mobxReactLite)}(self,(function(e,t,n,r){return function(){"use strict";var o={145:function(e,t,n){n.r(t),n.d(t,{hidden:function(){return le},run:function(){return ue}});var r=n(3144),o=n(5671),i=n(1024),a=n.n(i),c=n(1739),s=n(8575),u=n(8536),l=n(1630),d=n(8907),f=n(1413),A=n(259),g=(0,r.Z)((function e(){(0,o.Z)(this,e)}));g.open=function(){var e,t=window,n=t.GM_addStyle,r=t.GM_getResourceText;if(!document.querySelector("#__ant-theme-dark")){var o=n(r("antdDarkCss"));o.id="__ant-theme-dark",o.remove(),document.body.appendChild(o)}null===(e=document.querySelector("html"))||void 0===e||e.setAttribute("dark","true")},g.close=function(){var e,t=document.querySelector("#__ant-theme-dark");t&&(t.remove(),null===(e=document.querySelector("html"))||void 0===e||e.removeAttribute("dark"))};var m=new(function(){function e(){var t=this;(0,o.Z)(this,e),this._appConf={},this._loading=!1,this._account=null,this._list=[],this._pagination={current:1,total:0},this.setAppConf=function(e){t._appConf=(0,f.Z)((0,f.Z)({},t.appConf),e),window.GM_setValue("__appConfig",JSON.stringify(t.appConf))},this.setDarkMode=function(e){t.setAppConf({darkMode:e||"system"}),"dark"===e&&g.open(),"light"===e&&g.close(),"system"===e&&(window.matchMedia("(prefers-color-scheme: dark)").matches?g.open():g.close())},this.setLoading=function(e){t._loading=e},this.setPagination=function(e){t._pagination=e},this.setList=function(e){t._list=e},this.setAccount=function(e){t._account=e},(0,A.makeAutoObservable)(this);var n=JSON.parse(window.GM_getValue("__appConfig","{}"));this._appConf=n,"dark"===n.darkMode?this.setDarkMode("dark"):n.darkMode&&"system"!==n.darkMode||this.setDarkMode("system")}return(0,r.Z)(e,[{key:"appConf",get:function(){return(0,A.toJS)(this._appConf)}},{key:"loading",get:function(){return(0,A.toJS)(this._loading)}},{key:"account",get:function(){return(0,A.toJS)(this._account)}},{key:"list",get:function(){return(0,A.toJS)(this._list)}},{key:"pagination",get:function(){return(0,A.toJS)(this._pagination)}}]),e}());var h=(0,r.Z)((function e(){(0,o.Z)(this,e)}));h.parserBaidu=function(e){var t=e||window.document;return{account:t.querySelector("#user .s-top-username")?{userName:(t.querySelector("#user .s-top-username")||{}).innerText||"",avatar:(t.querySelector("#user .s-top-img-wrapper img")||{}).src||"",myIndex:(t.querySelector("#u .usermenu a.first")||{}).href||"",mySeeting:(t.querySelector("#u .usermenu a.tj_user")||{}).href||""}:null,list:function(){var e=[],n=[],r=t.querySelectorAll('#content_left .c-container.new-pmd[tpl*="_"]');return Array.from(r||[]).forEach((function(t){"recommend_list"!==t.getAttribute("tpl")&&e.push(t)})),e.forEach((function(e){var r=e.getAttribute("tpl"),o="",i="",a="",c="",s=[];c=(e.querySelector('a[target="_blank"]')||{}).href||"";var u=e.querySelector(".c-title")||e.querySelector(".ec_title")||e.querySelector(".t.c-line-clamp1")||e.querySelector(".t");(o=(u||{}).innerText||"",u)&&u.querySelectorAll("em").forEach((function(e){o=o.replaceAll(e.innerText,"<em>".concat(e.innerText,"</em>"))}));s=Array.from(e.querySelectorAll("div.c-img-radius-large img")).map((function(e){return e.src}));var l=e.querySelector(".source_1Vdff");if(l&&(a=(l.querySelector("a")||l.querySelector(".site_3BHdI")||{}).innerText||""),"bk_polysemy"===r){var d=e.querySelector(".c-font-normal")||e.querySelector(".c-color-text")||{};i=d.innerText||""}else if("wenda_abstract_pc"===r)c=(e.querySelector('.c-border>a[target="_blank"]')||{}).href||"",o=(e.querySelector('.c-border>a[target="_blank"]')||{}).innerText||"",i="",t.querySelectorAll(".c-border div.list-top_1fe-X .list-row_a3wj1").forEach((function(e,t){0!==t&&(i+="\n"),i+=e.innerText||""}));else if("img_normal"===r)s=Array.from(e.querySelectorAll('div[class*="image-content_"] img')).map((function(e){return e.src})),i="";else if("kaifa_pc_blog_weak"===r){var f=e.querySelector(".c-row.c-color-text")||{},A=e.querySelectorAll(".c-row.c-color-text em");i=f.innerText||"",A.forEach((function(e){i=i.replaceAll(e.innerText,"<em>".concat(e.innerText,"</em>"))}))}else if("kaifa_pc_open_source_software"===r){var g=e.querySelector(".c-color-text.c-line-clamp2")||{},m=e.querySelectorAll(".c-color-text.c-line-clamp2 em");i=g.innerText||"",m.forEach((function(e){i=i.replaceAll(e.innerText,"<em>".concat(e.innerText,"</em>"))}))}else if("se_st_single_video_zhanzhang"===r){a=(e.querySelector("span.c-showurl")||{}).innerText||"";var h=e.querySelectorAll("p")[1]||{};i=h.innerText||""}else if("se_com_default"===r){var p=e.querySelector(".c-color-gray2")||{},x=e.querySelector(".content-right_8Zs40")||{},y=e.querySelectorAll(".content-right_8Zs40 em");i=(p.innerText||"")+(x.innerText||""),y.forEach((function(e){i=i.replaceAll(e.innerText,"<em>".concat(e.innerText,"</em>"))}))}n.push({platform:"baidu",title:o,content:i,source:a,url:c,images:s})})),n}(),pagination:function(){var e={current:1,total:0},n=t.querySelector("#page");if(n){var r=n.querySelectorAll(".page-item_M4MDr.pc");r.forEach((function(t,n){"STRONG"===t.parentNode.tagName&&(e.current=Number(t.innerText||"0"))})),e.total=10*Number(r[r.length-1].innerText||"0")}return e}()}},h.parser=function(e,t){var n=h;if(window.location.origin.includes("baidu.com"))if(document.getElementById("content_left"))e(n.parserBaidu(t));else{document.getElementById("wrapper").addEventListener("DOMNodeInserted",(function r(){e(n.parserBaidu(t)),document.getElementById("wrapper").removeEventListener("DOMNodeInserted",r)}))}};var p=n(6417),x=a().memo((function(e){return(0,p.jsx)("div",{className:"ant-layout-header-logo",children:(0,p.jsx)("a",{href:"/",className:"flex",children:(0,p.jsx)("img",{src:"//www.baidu.com/img/flexible/logo/pc/result.png",alt:"\u767e\u5ea6",title:"\u767e\u5ea6"})})})})),y=n(3927),E=n(2884),v=n(4462),Q=n(9439),b=n(79),k=n(1747);function S(){return function(e,t,n,r){t=t||"&",n=n||"=";var o={};if("string"!==typeof e||0===e.length)return o;var i=/\+/g;e=e.split(t);var a=1e3;r&&"number"===typeof r.maxKeys&&(a=r.maxKeys);var c=e.length;a>0&&c>a&&(c=a);for(var s=0;s<c;++s){var u,l,d,f,A=e[s].replace(i,"%20"),g=A.indexOf(n);g>=0?(u=A.substr(0,g),l=A.substr(g+1)):(u=A,l=""),d=decodeURIComponent(u),f=decodeURIComponent(l),Object.hasOwnProperty.call(o,d)?Array.isArray(o[d])?o[d].push(f):o[d]=[o[d],f]:o[d]=f}return o}(document.location.href.split("?")[1])}var w=n(5948),j=a().memo((function(e){var t=(0,w.Z)(!1),n=(0,Q.Z)(t,2),r=n[0],o=n[1],i=o.setTrue,a=o.set;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(E.Z,{preview:{visible:!1},height:80,src:e.list[0]||"",onClick:i}),(0,p.jsx)("div",{style:{display:"none"},children:(0,p.jsx)(E.Z.PreviewGroup,{preview:{visible:r,onVisibleChange:function(e){return a(e)},getContainer:function(){return document.querySelector("#__search-beautify")||document.body}},children:e.list.map((function(e,t){return(0,p.jsx)(E.Z,{src:e},t)}))})})]})})),B=(0,k.observer)((function(){var e=m.list,t=m.loading;return(0,p.jsx)(b.default,{loading:t,size:"large",className:"search-result-list",itemLayout:"vertical",dataSource:e,renderItem:function(e,t){return(0,p.jsx)(C,{data:e},e.url)}})})),C=a().memo((function(e){var t,n=e.data,r=(0,i.useState)(n.url),o=(0,Q.Z)(r,2),a=o[0],c=o[1];return(0,l.Z)((function(){n.url.includes("baidu.com/link?url=")&&function(e){return e=e.replace(/^http:/,"https:")+"&wd=&eqid=",new Promise((function(t){window.GM_xmlhttpRequest({url:e,method:"get",headers:{Accept:"*/*"},onload:function(e){if(e.finalUrl.includes("baidu.com/link?url=")){var n=e.responseText.match(/window.location.replace\("(.+)"\)/);if(n&&2===n.length)return void t(n[1])}t(e.finalUrl)},onerror:function(){t(e)}})}))}(n.url).then((function(e){return c(e)}))})),(0,p.jsx)(b.default.Item,{actions:(t=n,t.source?[(0,p.jsxs)(y.Z.Text,{type:"secondary",children:["\u6765\u6e90: ",t.source]})]:[]),extra:(0,p.jsx)(p.Fragment,{children:function(e){if(!e.images)return;if(e.images&&e.images.length<1)return;return(0,p.jsx)(j,{list:e.images})}(n)}),children:(0,p.jsx)(b.default.Item.Meta,{title:function(e){if(!e.title)return null;if(a)return(0,p.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:(0,p.jsxs)(v.default,{children:[s(),(0,p.jsx)("span",{dangerouslySetInnerHTML:{__html:e.title||""}})]})});return(0,p.jsx)("span",{dangerouslySetInnerHTML:{__html:e.title||""}})}(n),description:(0,p.jsx)("pre",{dangerouslySetInnerHTML:{__html:n.content||""}})})});function s(){return a?(0,p.jsx)(E.Z,{preview:!1,width:16,height:16,src:new URL(a).origin+"/favicon.ico",alt:"favicon",fallback:"data:image/png;base64,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"}):null}})),I=B,N=n(2576),_=n(6600),Z=n(137),q=n(1337),M=n(4122);function J(){var e="";return window.location.origin.includes("baidu.com")&&(e=S().wd||""),e}var R={wait:500},T=a().memo((function(){(0,l.Z)((function(){return A(J())}));var e=(0,i.useState)([]),t=(0,Q.Z)(e,2),n=t[0],r=t[1],o=(0,i.useState)(J()),a=(0,Q.Z)(o,2),c=a[0],s=a[1],u=(0,q.Z)((function(e){e.target.value&&A(e.target.value)}),R).run,d=(0,M.Z)((function(e){s(e.target.value),u(e)})),f=(0,M.Z)((function(e){if(e&&window.location.origin.includes("baidu.com")){var t="".concat(e,"_\u767e\u5ea6\u641c\u7d22"),n="https://www.baidu.com/s?wd=".concat(e);window.history.pushState({},t,n),window.document.title=t,m.setLoading(!0),window.GM_xmlhttpRequest({url:n,method:"GET",onload:function(e){if(e.response){var t=(new DOMParser).parseFromString(e.response,"text/html");h.parser((function(e){m.setList(e.list),m.setPagination(e.pagination),m.setLoading(!1)}),t)}},onerror:function(e){m.setLoading(!1),console.log(e)}})}})),A=(0,M.Z)((function(e){e&&window.location.origin.includes("baidu.com")&&window.GM_xmlhttpRequest({url:"https://www.baidu.com/sugrec?prod=pc&wd=".concat(e),method:"GET",headers:{Accept:"*/*"},onload:function(e){var t=JSON.parse(e.response||"{}");if(t.g&&t.g.length>0){var n=t.g.map((function(e){return e.q}));r(n)}}})})),g=(0,M.Z)((function(e){s(e.key),f(e.key),A(e.key)}));return(0,p.jsx)(_.Z,{overlay:n.length<1?(0,p.jsx)(p.Fragment,{}):(0,p.jsx)(N.Z,{items:n.map((function(e){return{key:e,label:e}})),onClick:g}),trigger:["click"],children:(0,p.jsx)("div",{style:{height:40},children:(0,p.jsx)(Z.Z.Search,{size:"large",className:"ant-layout-header-search",allowClear:!0,enterButton:"\u641c\u7d22",value:c,style:{width:700},onSearch:f,onChange:d})})})})),K=n(7468),L=(0,k.observer)((function(){var e=m.pagination,t=(0,M.Z)((function(e,t){if(window.location.origin.includes("baidu.com")){var n=S().wd,r="";r=1===e?"https://www.baidu.com/s?wd=".concat(n):"https://www.baidu.com/s?wd=".concat(n,"&pn=").concat(10*(e-1)),m.setLoading(!0),window.GM_xmlhttpRequest({url:r,method:"GET",onload:function(e){if(e.response){var t=(new DOMParser).parseFromString(e.response,"text/html");h.parser((function(e){m.setList(e.list),m.setPagination(e.pagination),m.setLoading(!1)}),t)}},onerror:function(e){m.setLoading(!1),console.log(e)}})}}));return(0,p.jsx)(K.default,(0,f.Z)((0,f.Z)({},e),{},{showSizeChanger:!1,style:{textAlign:"center"},onChange:t}))})),D=n(8818),P=n(8723),U=n(9190),O=n(6722),z=n.n(O),G=n(6810),Y=n.n(G),H=n(3433),F=new(function(){function e(){var t=this;(0,o.Z)(this,e),this._menus=[],this.init=function(e){t._menus=[e]},this.goBack=function(){var e=t.menus;e.pop(),t._menus=e},this.goNext=function(e){t._menus=[].concat((0,H.Z)(t.menus),[e])},(0,A.makeAutoObservable)(this)}return(0,r.Z)(e,[{key:"menus",get:function(){return(0,A.toJS)(this._menus)}}]),e}()),X=n(7223),W=n(1892),V=n(8165),$=n.n(V),ee=(0,k.observer)((function(){var e=m.account;return e?(0,p.jsx)(W.ZP,{src:e.avatar}):(0,p.jsx)(X.default,{size:"large",className:"ant-settings",type:"text",shape:"circle",icon:(0,p.jsx)($(),{})})})),te=(0,k.observer)((function(){(0,l.Z)((function(){return F.init(ie)}));var e=F.menus;return(0,p.jsx)(_.Z,{overlay:(0,p.jsx)(N.Z,{items:e[e.length-1]}),trigger:["click"],overlayStyle:{minWidth:200},placement:"bottomRight",getPopupContainer:function(e){return e.parentElement||document.body},children:(0,p.jsx)("span",{style:{cursor:"pointer"},children:(0,p.jsx)(ee,{})})})})),ne=a().memo((function(e){var t=(0,M.Z)((function(t){t.stopPropagation(),t.preventDefault(),e.onClick&&e.onClick(t),e.goNext?e.goNext&&e.goNext(e.nexMenus):e.goBack&&e.goBack(t)}));return(0,p.jsxs)("span",{className:"flex-row-between",style:{gap:4,margin:"-5px -12px",padding:"5px 12px"},onClick:t,children:[(0,p.jsx)("span",{className:"flex-align-justify-center",style:{flexBasis:22},children:e.leftIcon}),(0,p.jsx)("span",{className:"flex-block",children:e.text}),(0,p.jsx)("span",{className:"flex-align-justify-center",style:{flexBasis:22},children:e.rightIcon})]})})),re=(0,k.observer)((function(e){var t=m.appConf;if("dark"===e.mode&&t.darkMode===e.mode)return(0,p.jsx)(D.default,{});if("light"===e.mode&&t.darkMode===e.mode)return(0,p.jsx)(D.default,{});if("system"===e.mode){if(t.darkMode===e.mode)return(0,p.jsx)(D.default,{});if(void 0===t.darkMode)return(0,p.jsx)(D.default,{})}return null})),oe=[{key:1,label:(0,p.jsx)(ne,{text:"\u4e3b\u9898\u5916\u89c2",leftIcon:(0,p.jsx)(P.default,{}),goBack:F.goBack})},{key:2,type:"divider"},{key:3,label:(0,p.jsx)(ne,{text:"\u8ddf\u968f\u7cfb\u7edf",leftIcon:(0,p.jsx)(re,{mode:"system"}),onClick:function(e){return m.setDarkMode("system")}})},{key:4,label:(0,p.jsx)(ne,{text:"\u6df1\u8272\u4e3b\u9898",leftIcon:(0,p.jsx)(re,{mode:"dark"}),onClick:function(e){return m.setDarkMode("dark")}})},{key:5,label:(0,p.jsx)(ne,{text:"\u6d45\u8272\u4e3b\u9898",leftIcon:(0,p.jsx)(re,{mode:"light"}),onClick:function(e){return m.setDarkMode("light")}})}],ie=[{key:1,label:(0,p.jsx)(ne,{text:"\u9000\u51fa\u767b\u5f55",leftIcon:(0,p.jsx)(U.Z,{})})},{key:2,label:(0,p.jsx)(ne,{text:"\u4e3b\u9898\u5916\u89c2",nexMenus:oe,leftIcon:(0,p.jsx)(Y(),{}),rightIcon:(0,p.jsx)(z(),{}),goBack:F.goBack,goNext:function(){return F.goNext(oe)}})}],ae=te;var ce=function(){return(0,l.Z)((function(){m.setLoading(!0),h.parser((function(e){m.setList(e.list),m.setAccount(e.account),m.setPagination(e.pagination),m.setLoading(!1)}))})),(0,p.jsx)(s.default,{locale:d.Z,children:(0,p.jsxs)(u.Z,{children:[(0,p.jsxs)(u.Z.Header,{style:{background:"var(--ant-layout-header-bg)"},children:[(0,p.jsx)(x,{}),(0,p.jsx)("div",{className:"flex-full flex-align-center",children:(0,p.jsx)(T,{})}),(0,p.jsx)(ae,{})]}),(0,p.jsxs)(u.Z.Content,{children:[(0,p.jsx)(I,{}),(0,p.jsx)(L,{})]})]})})},se=(0,r.Z)((function e(){(0,o.Z)(this,e)}));function ue(){se.run()}function le(){se.hidden()}se._root=void 0,se.run=function(){se._root||(se._root=document.createElement("div"),se._root.id="__search-beautify",document.body.childNodes.length<1?document.body.appendChild(se._root):document.body.insertBefore(se._root,document.body.firstChild)),c.createRoot(se._root).render((0,p.jsx)(a().StrictMode,{children:(0,p.jsx)(ce,{})}))},se.hidden=function(){se._root&&(se._root.style.display="none")}},1024:function(t){t.exports=e},314:function(e){e.exports=t},259:function(e){e.exports=n},1747:function(e){e.exports=r}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return o[e](n,n.exports,a),n.loaded=!0,n.exports}a.m=o,function(){var e=[];a.O=function(t,n,r,o){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]}}(),a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,i=n[0],c=n[1],s=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var l=s(a)}for(t&&t(n);u<i.length;u++)o=i[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},n=self.webpackChunkSearchBeautify=self.webpackChunkSearchBeautify||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=a.O(void 0,[24,977],(function(){return a(145)}));return c=a.O(c)}()}));