"use strict";(self["webpackChunkchama_app"]=self["webpackChunkchama_app"]||[]).push([[443],{9791:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"v-container"},[r("h1",[t._v("Click to get a random beer")]),r("v-btn",{staticClass:"btn",staticStyle:{"background-color":"rgb(111, 0, 255)"},attrs:{color:"accent"},on:{click:function(e){return t.randomBeer()}}},[t._v("RANDOM!")]),r("div",[r("transition",{attrs:{name:"fade"}},t._l(this.beer,(function(e){return r("v-col",{key:e.id,staticClass:"beercard",class:{hideCol:t.isActive}},[r("v-card",{staticClass:"card__beers"},[r("v-img",{staticClass:"img__beer",attrs:{src:e.image_url}}),r("v-card-title",[r("router-link",{attrs:{to:{name:"BeerView",params:{id:e.id}}}},[r("h3",{staticClass:"h3"},[t._v(t._s(e.name)+" ")])])],1),r("v-card-text",[r("p",{staticClass:"text-body-1"},[t._v("alc: "+t._s(e.abv)+" %")])]),r("v-card-text",[r("p",{staticClass:"text-body-1"},[t._v("tonality by srm: "+t._s(e.srm))])]),r("v-card-text",[r("ul",{staticClass:"foodPairingUl"},[t._v(" Food Pairing: "),t._l(e.food_pairing,(function(e){return r("li",{key:e,staticClass:"foodPairingLi"},[t._v(" "+t._s(e)+" ")])}))],2)])],1)],1)})),1)],1)],1)},n=[],i=r(6198),s=(r(5666),r(1539),r(7327),{name:"RandomView",data:function(){return{beers:[],beer:[],randomNum:"",condition:[],isActive:!0}},methods:{getData:function(){var t=this;return(0,i.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.punkapi.com/v2/beers?per_page=40");case 3:return r=e.sent,e.next=6,r.json();case 6:t.beers=e.sent,console.log(t.beers),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},randomBeer:function(){var t=this,e=Math.ceil(1),r=Math.floor(this.beers.length);return this.isActive=!0,this.randomNum=Math.floor(Math.random()*(r-e+1))+e,this.beer=this.beers.filter((function(e){return+e.id===+t.randomNum})),this.condition=this.beer[0].image_url,setTimeout((function(){return t.isActive=!1}),400),this.beer}},computed:{},created:function(){this.getData()}}),c=s,o=r(1001),l=r(3453),u=r.n(l),d=r(7723),h=r(3685),m=r(7118),v=r(2102),b=r(247),f=r(7047),_=(0,o.Z)(c,a,n,!1,null,null,null),p=_.exports;u()(_,{VBtn:d.Z,VCard:h.Z,VCardText:m.ZB,VCardTitle:m.EB,VCol:v.Z,VContainer:b.Z,VImg:f.Z})}}]);
//# sourceMappingURL=about-legacy.185c56bb.js.map