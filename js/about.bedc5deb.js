"use strict";(self["webpackChunkchama_app"]=self["webpackChunkchama_app"]||[]).push([[443],{9791:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"v-container"},[a("h1",[t._v("Click to get a random beer")]),a("v-btn",{staticClass:"btn",staticStyle:{"background-color":"rgb(111, 0, 255)"},attrs:{color:"accent"},on:{click:function(e){return t.randomBeer()}}},[t._v("RANDOM!")]),a("div",[a("transition",{attrs:{name:"fade"}},t._l(this.beer,(function(e){return a("v-col",{key:e.id,staticClass:"beercard",class:{hideCol:t.isActive}},[a("v-card",{staticClass:"card__beers"},[a("v-img",{staticClass:"img__beer",attrs:{src:e.image_url}}),a("v-card-title",[a("router-link",{attrs:{to:{name:"BeerView",params:{id:e.id}}}},[a("h3",{staticClass:"h3"},[t._v(t._s(e.name)+" ")])])],1),a("v-card-text",[a("p",{staticClass:"text-body-1"},[t._v("alc: "+t._s(e.abv)+" %")])]),a("v-card-text",[a("p",{staticClass:"text-body-1"},[t._v("tonality by srm: "+t._s(e.srm))])]),a("v-card-text",[a("ul",{staticClass:"foodPairingUl"},[t._v(" Food Pairing: "),t._l(e.food_pairing,(function(e){return a("li",{key:e,staticClass:"foodPairingLi"},[t._v(" "+t._s(e)+" ")])}))],2)])],1)],1)})),1)],1)],1)},i=[],r={name:"RandomView",data(){return{beers:[],beer:[],randomNum:"",condition:[],isActive:!0}},methods:{async getData(){try{let t=await fetch("https://api.punkapi.com/v2/beers?per_page=40");this.beers=await t.json(),console.log(this.beers)}catch(t){console.log(t)}},randomBeer(){let t=Math.ceil(1),e=Math.floor(this.beers.length);return this.isActive=!0,this.randomNum=Math.floor(Math.random()*(e-t+1))+t,this.beer=this.beers.filter((t=>+t.id===+this.randomNum)),this.condition=this.beer[0].image_url,setTimeout((()=>this.isActive=!1),400),this.beer}},computed:{},created(){this.getData()}},n=r,c=a(1001),o=a(3453),l=a.n(o),d=a(7723),h=a(3685),u=a(7118),m=a(2102),v=a(247),b=a(7047),_=(0,c.Z)(n,s,i,!1,null,null,null),p=_.exports;l()(_,{VBtn:d.Z,VCard:h.Z,VCardText:u.ZB,VCardTitle:u.EB,VCol:m.Z,VContainer:v.Z,VImg:b.Z})}}]);
//# sourceMappingURL=about.bedc5deb.js.map