(function(){"use strict";var e={7783:function(e,t,r){var a=r(144),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/random"}},[e._v("Random")])],1),r("router-view")],1)},o=[],s=r(1001),i={},l=(0,s.Z)(i,n,o,!1,null,null,null),c=l.exports,d=r(1910);a.Z.use(d.Z);var u=new d.Z({}),v=r(8345),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("ModalMo",{attrs:{show:e.showModal,favs:e.favs},on:{close:function(t){e.showModal=!1}}}),r("div",{staticClass:"head"},[r("div",[r("v-col",[r("h2",[e._v("List of beers")]),r("v-btn",{staticClass:"favsBtn",staticStyle:{"background-color":"rgb(243, 152, 32)"},attrs:{color:"primary",id:"show-modal"},on:{click:function(t){e.showModal=!0}}},[e._v("Show Favs")])],1)],1),r("div",{staticClass:"sort__beers"},[r("div",[r("v-col",[r("div",{staticClass:"sortBtns"},[r("h3",[e._v("sorting")]),r("v-btn",{staticClass:"btnSort",on:{click:function(t){return e.sortedArray("name")}}},[e._v("name "+e._s(e.sortedAsc?"A - Z":"Z - A"))]),r("v-btn",{staticClass:"btnSort",on:{click:function(t){return e.sortedArray("abv")}}},[e._v("vol "+e._s(e.sortedToMax?"Min to Max":"Max to Min"))])],1)])],1)]),r("div",[r("div",[r("v-col",[r("div",{staticClass:"sortBtns"},[r("h3",[e._v("filtering")]),r("div",{staticClass:"filterSection"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.toFilter,expression:"toFilter"}],staticClass:"checkbox",attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.toFilter)?e._i(e.toFilter,null)>-1:e.toFilter},on:{change:function(t){var r=e.toFilter,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,s=e._i(r,o);a.checked?s<0&&(e.toFilter=r.concat([o])):s>-1&&(e.toFilter=r.slice(0,s).concat(r.slice(s+1)))}else e.toFilter=n}}}),r("div",{staticClass:"filterText"},[r("span",[e._v(" Alcohol "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"filterSelect",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{checked:""}},[e._v("less")]),r("option",[e._v("more")])]),e._v(" than")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.numero,expression:"numero"}],staticClass:"filterInput",attrs:{placeholder:"-",type:"number",min:"0"},domProps:{value:e.numero},on:{input:function(t){t.target.composing||(e.numero=t.target.value)}}}),e._v("% ")])])])])],1)]),r("div",[r("v-col",[r("div",{staticClass:"sortBtns"},[r("h3",[e._v("searching")]),r("div",{staticClass:"searchSection"},[r("div",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"name-radio",value:"name"},domProps:{checked:e._q(e.picked,"name")},on:{change:function(t){e.picked="name"}}}),r("label",{attrs:{for:"name-radio"}},[e._v("By name")])]),r("div",{staticClass:"radio"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.picked,expression:"picked"}],attrs:{type:"radio",id:"pair-radio",value:"pair"},domProps:{checked:e._q(e.picked,"pair")},on:{change:function(t){e.picked="pair"}}}),r("label",{attrs:{for:"pair-radio"}},[e._v("By food")])]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{placeholder:"search here...",maxlength:"15"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])])])],1),r("div",{staticClass:"sortBtns"},[r("v-col",[r("v-btn",{staticStyle:{"background-color":"rgb(197, 5, 5)"},attrs:{color:"primary"},on:{click:function(t){return e.clearHandler()}}},[e._v("Clear all")])],1)],1)]),r("v-row",{staticClass:"list__beers-content"},e._l(e.searchResult,(function(t){return r("v-col",{key:t.id,attrs:{md:"4"}},[r("v-card",{staticClass:"card__beers"},[r("v-btn",{staticClass:"toFavsBtn",staticStyle:{"background-color":"rgb(243, 152, 32)"},attrs:{color:"primary"},on:{click:function(r){return e.favsHandler(t.id)}}},[e._v("Add to Favs")]),r("v-img",{staticClass:"img__beer",attrs:{src:t.image_url}}),r("v-card-title",[r("router-link",{attrs:{to:{name:"BeerView",params:{id:t.id}}}},[r("h3",[e._v(e._s(t.name)+" ")])])],1),r("v-card-text",[r("p",{staticClass:"text-body-1"},[e._v("alc: "+e._s(t.abv)+" %")])]),r("v-card-text",[r("p",{staticClass:"text-body-1"},[e._v("tonality by srm: "+e._s(t.srm))])]),r("v-card-text",[r("ul",{staticClass:"foodPairingUl"},[e._v(" Food Pairing: "),e._l(t.food_pairing,(function(t){return r("li",{key:t,staticClass:"foodPairingLi"},[e._v(" "+e._s(t)+" ")])}))],2)])],1)],1)})),1)],1)},m=[],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Transition",{attrs:{name:"modal"}},[e.show?r("div",{staticClass:"modal-mask"},[r("div",{staticClass:"modal-wrapper"},[r("div",{staticClass:"modal-container"},[r("div",{staticClass:"modal-header"},[r("h3",[e._v("My favs")])]),e.favs.length<1?r("div",{staticClass:"no-favs"},[e._v("No favs yet!")]):e._e(),e._l(e.favs,(function(t){return r("div",{key:t.id,staticClass:"modal-body"},[e._t("body",(function(){return[e._v("name: "+e._s(t.name))]})),r("br"),e._t("body",(function(){return[e._v("alc: "+e._s(t.abv)+" %")]}))],2)})),r("div",{staticClass:"modal-footer"},[e._t("footer",(function(){return[r("button",{staticClass:"modal-default-button",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])]}))],2)],2)])]):e._e()])},h=[],_={props:{show:Boolean,favs:Array}},b=_,g=(0,s.Z)(b,p,h,!1,null,null,null),y=g.exports,C={components:{ModalMo:y},data(){return{beers:[],sortedBeers:[],sortedAsc:!0,sortedToMax:!0,toFilter:!1,numero:"",message:"",selected:"less",picked:"name",tempRecipes:[],favs:[],showModal:!1}},methods:{async getData(){try{let e=await fetch("https://api.punkapi.com/v2/beers?per_page=40");this.beers=await e.json()}catch(e){console.log(e)}},sortedArray(e){let t;"name"===e&&(this.sortedAsc=!this.sortedAsc,t=this.sortedAsc),"abv"===e&&(this.sortedToMax=!this.sortedToMax,t=this.sortedToMax);let r=this.beers;this.sortedBeers=r.sort(((r,a)=>{let n,o;return"name"===e&&(n=r.name.toLowerCase(),o=a.name.toLowerCase()),"abv"===e&&(n=r.abv,o=a.abv),t?n>o?1:-1:n<o?1:-1}))},filterHandler(){this.toFilter=!this.toFilter},clearHandler(){this.numero="",this.message="",this.selected=""},favsHandler(e){let t=this.beers.filter((t=>t.id===e)),r=[];this.favs.push(t[0]),r=this.favs.filter(((e,t)=>this.favs.indexOf(e)===t)),this.favs=r}},computed:{searchResult(){let e=this.beers;return""!=this.message&&this.message&&(e=e.filter((e=>{if("pair"===this.picked){let t=e.food_pairing.join(" ").split(" "),r=t.filter((e=>e.toUpperCase().startsWith(this.message.toUpperCase())));if(r.length>0)return e}if("name"===this.picked)return e.name.toUpperCase().includes(this.message.toUpperCase())}))),e.length>0&&this.toFilter&&"more"===this.selected?e.filter((e=>e.abv>this.numero)):e.length>0&&this.toFilter&&"less"===this.selected?e.filter((e=>e.abv<this.numero)):e}},created(){this.getData()}},k=C,w=r(3453),x=r.n(w),Z=r(7723),A=r(3685),B=r(7118),F=r(2102),M=r(247),T=r(7047),E=r(2877),P=(0,s.Z)(k,f,m,!1,null,null,null),S=P.exports;x()(P,{VBtn:Z.Z,VCard:A.Z,VCardText:B.ZB,VCardTitle:B.EB,VCol:F.Z,VContainer:M.Z,VImg:T.Z,VRow:E.Z});var V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("BeerInfo")],1)},O=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"v-row"},e._l(e.showBeer,(function(t){return r("v-col",{key:t.id,attrs:{md:"6"}},[r("v-card",{staticClass:"card__beers"},[r("v-img",{staticClass:"img__beer",attrs:{src:t.image_url}}),r("v-card-title",[r("h3",[e._v(e._s(t.name)+" ")])]),r("v-card-text",[r("p",{staticClass:"text-body-1"},[e._v("alc: "+e._s(t.abv)+" %")])]),r("v-card-text",[r("p",{staticClass:"text-body-1"},[e._v("tonality by srm: "+e._s(t.srm))])]),r("v-card-text",[r("ul",{staticClass:"foodPairingUl"},[e._v(" Food Pairing: "),e._l(t.food_pairing,(function(t){return r("li",{key:t,staticClass:"foodPairingLi"},[e._v(" "+e._s(t)+" ")])}))],2)])],1)],1)})),1)},N=[],L={name:"BeerInfo",data(){return{beers:[],beer:[],id:""}},methods:{async getData(){try{let e=await fetch("https://api.punkapi.com/v2/beers?per_page=40");this.beers=await e.json()}catch(e){console.log(e)}}},computed:{showBeer(){return this.id=this.$route.params.id,this.beer=this.beers.filter((e=>+e.id===+this.id)),this.beer}},created(){this.getData()}},$=L,H=(0,s.Z)($,j,N,!1,null,null,null),I=H.exports;x()(H,{VCard:A.Z,VCardText:B.ZB,VCardTitle:B.EB,VCol:F.Z,VImg:T.Z,VRow:E.Z});var U={name:"BeerView",components:{BeerInfo:I}},D=U,R=(0,s.Z)(D,V,O,!1,null,null,null),q=R.exports;x()(R,{VContainer:M.Z}),a.Z.use(v.Z);const K=[{path:"/",name:"ListLi",component:S},{path:"/random",name:"random",component:()=>r.e(443).then(r.bind(r,9791))},{path:"/beer/:id",name:"BeerView",component:q}],W=new v.Z({mode:"history",base:"/chama_test/",routes:K});var z=W;a.Z.config.productionTip=!1,new a.Z({vuetify:u,router:z,render:e=>e(c)}).$mount("#app")}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,a,n,o){if(!a){var s=1/0;for(d=0;d<e.length;d++){a=e[d][0],n=e[d][1],o=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,n,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,a){return r.f[a](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.bedc5deb.js"}}(),function(){r.miniCssF=function(e){return"css/about.cad9e389.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="chama-app:";r.l=function(a,n,o,s){if(e[a])e[a].push(n);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=a),e[a]=[n];var v=function(t,r){i.onerror=i.onload=null,clearTimeout(f);var n=e[a];if(delete e[a],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/chama_test/"}(),function(){var e=function(e,t,r,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var s=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=i,n.parentNode.removeChild(n),a(l)}};return n.onerror=n.onload=o,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===t))return n}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){n=s[a],o=n.getAttribute("data-href");if(o===e||o===t)return n}},a=function(a){return new Promise((function(n,o){var s=r.miniCssF(a),i=r.p+s;if(t(s,i))return n();e(a,i,n,o)}))},n={143:0};r.f.miniCss=function(e,t){var r={443:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=a(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,a){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(r,a){n=e[t]=[r,a]}));a.push(n[2]=o);var s=r.p+r.u(t),i=new Error,l=function(a){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};r.l(s,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,a){var n,o,s=a[0],i=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(l)var d=l(r)}for(t&&t(a);c<s.length;c++)o=s[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},a=self["webpackChunkchama_app"]=self["webpackChunkchama_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(7783)}));a=r.O(a)})();
//# sourceMappingURL=app.d3327629.js.map