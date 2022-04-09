
<template>
  <v-container>
    <ModalMo :show="showModal" :favs="favs" @close="showModal = false">
    </ModalMo>
    <div class="head">
    <div>
      <v-col>
        <h2>List of beers</h2>
        <v-btn style='background-color: rgb(243, 152, 32)' color="primary" class="favsBtn" id="show-modal" @click="showModal = true">Show Favs</v-btn>
      </v-col>
    </div>
    <div class="sort__beers">
      <div>
        <v-col>
        <div class="sortBtns">
        <h3>sorting</h3>
          <v-btn class="btnSort" @click="sortedArray('name')">name {{sortedAsc ? 'A - Z' : 'Z - A'}}</v-btn>
          <v-btn class="btnSort" @click="sortedArray('abv')">vol {{sortedToMax ? 'Min to Max' : 'Max to Min'}}</v-btn>
        </div>
        </v-col>
      </div>
    </div>
      <div>
        <div>
          <v-col>
          <div class="sortBtns">
          <h3>filtering</h3>
          <div class="filterSection">
          <input class="checkbox" type="checkbox" id="checkbox" v-model="toFilter" />
          <div class="filterText">
            <span> Alcohol
            <select v-model="selected" class="filterSelect">
            <option checked>less</option>
            <option>more</option>
            </select>
            than</span>
            <input v-model="numero" placeholder="-" type="number" min="0" class="filterInput" />%
          </div>
          </div>
          </div>
          </v-col>
        </div>
      </div>
        <div>
        <v-col>
        <div class="sortBtns">
          <h3>searching</h3>
          <div class="searchSection">
            <div class="radio">
            <input type="radio" id="name-radio" value="name" v-model="picked">
            <label for="name-radio">By name</label>
          </div>
          <div class="radio">
            <input type="radio" id="pair-radio" value="pair" v-model="picked">
            <label for="pair-radio">By food</label>
          </div>
          
          <textarea v-model="message" placeholder="search here..." maxlength="15"></textarea>
          </div>
        </div>
        </v-col>
      </div> 
      <div class="sortBtns">
        <v-col>
        <v-btn style='background-color: rgb(197, 5, 5)' color="primary" @click="clearHandler()">Clear all</v-btn>
        </v-col>
      </div>
    </div>
    
    <v-row class="list__beers-content">
      <v-col md="4" v-for="beer in searchResult" :key="beer.id">
        <v-card class="card__beers">
        <v-btn class="toFavsBtn" style='background-color: rgb(243, 152, 32)' color="primary" @click="favsHandler(beer.id)">Add to Favs</v-btn>
          <v-img class="img__beer"
            :src="beer.image_url"
          ></v-img>
          
          <v-card-title>
            <router-link :to="{ name: 'BeerView', params: { id: beer.id }}">
            <h3>{{ beer.name }} </h3>
            </router-link>
          </v-card-title>
          
          <v-card-text>
            <p class="text-body-1">alc: {{ beer.abv }} %</p>
          </v-card-text>
          <v-card-text> 
            <p class="text-body-1">tonality by srm: {{ beer.srm }}</p>
          </v-card-text>
          <v-card-text>
            <ul class="foodPairingUl"> Food Pairing:
            <li class="foodPairingLi" v-for="foodpair in beer.food_pairing" :key="foodpair">
               {{ foodpair }}
            </li>
            </ul>
          </v-card-text>
        
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ModalMo from './ModalMo.vue'
export default {
  components:{
    ModalMo
  },
  data() {
    return {
      beers: [],
      sortedBeers:[],
      sortedAsc:true,
      sortedToMax:true,
      toFilter:false,
      numero:'',
      message: '',
      selected:'less',
      picked:'name',
      tempRecipes:[],
      favs:[],
      showModal: false
    };
  },

  methods: {
    async getData() {
      try {
        let response = await fetch('https://api.punkapi.com/v2/beers?per_page=40');
        this.beers = await response.json();
        // console.log(this.beers);
      } catch (error) {
        console.log(error);
      }
    },

    // eslint-disable-next-line
  sortedArray(action) {
  //  console.log(action)
   let sortedAll;
   if(action==='name'){
     this.sortedAsc = !this.sortedAsc;
     sortedAll=this.sortedAsc
   } 
   if(action==='abv') {
     this.sortedToMax = !this.sortedToMax;
     sortedAll=this.sortedToMax
   } 

		let sortBeers = this.beers;
		// eslint-disable-next-line
		this.sortedBeers = sortBeers.sort((a,b) => {
			let fa,fb;
      if(action==='name'){
        fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
      }
      if(action==='abv'){
        fa = a.abv, fb = b.abv;
      }
			if (sortedAll) {
				return fa > fb ? 1 : -1;
			}
			else {
        return fa < fb ? 1 : -1;
			}
			// return 0
		})
    // console.log(this.sortedBeers)
	},
  filterHandler(){
    this.toFilter = !this.toFilter;
  },
  clearHandler(){
    this.numero=''
    this.message=''
    this.selected=''
  },
  favsHandler(id){
    let fav=this.beers.filter(b=>b.id===id)
    let permFavs =[]
    this.favs.push(fav[0])
    permFavs = this.favs.filter((el,idx)=>{return this.favs.indexOf(el)===idx})
    this.favs = permFavs
  }
  },
  computed: {
     searchResult() {
      let tempRecipes = this.beers
  
      if (this.message != '' && this.message) {
        //  console.log(this.message,this.picked)
          tempRecipes = tempRecipes.filter((item) => {
            // search by food
            if (this.picked==='pair'){
              let wordsFood = item.food_pairing.join(' ').split(' ');
            let exist = wordsFood.filter(word=>{
              return word.toUpperCase()
              .startsWith(this.message.toUpperCase())
            })
            if (exist.length>0){
              return item
            }
            }
            // search by name
            if (this.picked==='name'){
              return item.name
            .toUpperCase()
            .includes(this.message.toUpperCase())
            }
        })
      }
      // eslint-disable-next-line
       if(tempRecipes.length>0 && this.toFilter && this.selected==='more')
    return tempRecipes.filter(n => n.abv > this.numero)
    if(tempRecipes.length>0 && this.toFilter && this.selected==='less')
    return tempRecipes.filter(n => n.abv < this.numero)
      // eslint-disable-next-line
      // console.log(tempRecipes)
    return tempRecipes
  }
},

  created() {
    this.getData();
  },
};
</script>

<style>
.head{
  margin-bottom: 30px;
}

a{
  color: black;

}
  a:hover{
    text-decoration: none;
    color: rgb(114, 139, 139);
  }

.img__beer{
width:30%;
margin: auto;
object-fit: cover;
}
.card__beers{
  height: 100%;
}
.favsBtn{
  margin-top: 1rem;
  color: rgb(243, 152, 32);
  width: 120px;
}
.toFavsBtn{
  float: right;
}
.toFavsBtn span{
  font-size:10px;
}
.toFavsBtn.v-btn:not(.v-btn--round).v-size--default{
  padding: 0 5px;
}

/* sort */
.sortBtns{
display: flex;
align-items: center;
}
.btnSort{
  margin-left: 3.5rem;
  width: 150px;
}

/* filter */
.filterSection{
  margin-left: 3.2rem;
  display: flex;
  align-items: center;
}
.filterSelect{
  border-bottom: 1px solid rgb(209, 209, 209);
  font-weight: bolder;
  padding: 3px 2px 7px;
  text-align: center;
}
.filterInput{
  border-bottom: 1px solid rgb(209, 209, 209);
  width: 40px;
  margin-left:10px;
  font-weight: bolder;
  padding: 5px;
}
.checkbox{
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
}
.filterText{
  padding-top: 4px;
  display: flex;
  align-items: center;
}

/* search */
.searchSection{
  display: flex;
  margin-left: 2rem;
  align-items: center;
}
.radio{
  display: flex;
  align-items: center;
}
.radio input{
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .2rem;
}
.radio label{
  margin-right: 1rem;
}
textarea{
  /* margin-left: 1rem; */
  resize: none;
  height: 2rem;
  padding: 0.4rem 0.5rem;
  border: 1px solid rgb(209, 209, 209);
  overflow: hidden;
  border-radius: 5px;
}

/* cards */
.foodPairingUl{
  font-size: 1.2rem;
}
.foodPairingLi{
  margin-top: .5rem;
  font-size: 1rem;
  list-style: none;
}
</style>