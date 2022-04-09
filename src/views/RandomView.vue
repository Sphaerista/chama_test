<template>
  <v-container class="v-container">
    <h1>Click to get a random beer</h1>
    <v-btn class="btn" style='background-color: rgb(111, 0, 255)' color="accent"  @click="randomBeer()">RANDOM!</v-btn>
    <div >
      <transition name="fade">
    <v-col :class="{hideCol:isActive}" class="beercard" v-for="beer in this.beer" :key="beer.id">
        <v-card class="card__beers">
          <v-img class="img__beer"
            :src="beer.image_url"
          ></v-img>
          
          <v-card-title>
            <router-link :to="{ name: 'BeerView', params: { id: beer.id }}">
            <h3 class="h3">{{ beer.name }} </h3>
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
      </transition>
      </div>
  </v-container>
</template>

<script>

export default {
   name: 'RandomView',
  data () {
      return{
        beers: [],
        beer:[],
        randomNum:'',
        condition:[],
        isActive: true
      }
  },

   methods: {
    async getData() {
      try {
        let response = await fetch('https://api.punkapi.com/v2/beers?per_page=40');
        this.beers = await response.json();
        console.log(this.beers);
      } catch (error) {
        console.log(error);
      }
    },
    randomBeer(){
      // random num
    let min = Math.ceil(1);
    let max = Math.floor(this.beers.length);
    this.isActive=true
    // eslint-disable-next-line
    this.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // eslint-disable-next-line
    this.beer = this.beers.filter(b=>+b.id===+this.randomNum)
    this.condition = this.beer[0].image_url
    // console.log(this.beer, this.condition.length)
    setTimeout(() => this.isActive=false, 400);
    return this.beer
    }
},
computed:{
},
 created() {
    this.getData();
  },
}
</script>

<style>
.v-container{
display: flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn{
  background-color: rgb(111, 0, 255);
  width: 300px;
}
.btn{
  margin:2rem 0;
}
.hideCol{
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1.2s;
}
.fade-enter{
  opacity: 0;
}
.beercard{
  width: 30rem;
}
</style>