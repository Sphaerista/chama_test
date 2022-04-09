<template>
  <v-row class="v-row">

    <v-col md="6" v-for="beer in showBeer" :key="beer.id">
        <v-card class="card__beers">
          <v-img class="img__beer"
            :src="beer.image_url"
          ></v-img>
          
          <v-card-title>
            <h3>{{ beer.name }} </h3>
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
  
</template>
<script>
export default {
  name: 'BeerInfo',
  data () {
      return{
        beers: [],
        beer:[],
        id:'',
      }
  },
  methods: {
    async getData() {
      try {
        let response = await fetch('https://api.punkapi.com/v2/beers?per_page=40');
        this.beers = await response.json();
        // console.log(this.beers);
        // console.log(this.$route.params.id)
      } catch (error) {
        console.log(error);
      }
    },
},
computed:{
    // eslint-disable-next-line
    showBeer(){
        // eslint-disable-next-line
        this.id = this.$route.params.id
        // eslint-disable-next-line
        this.beer = this.beers.filter(b=>+b.id===+this.id)
        // console.log(this.beer)
        return this.beer
    }
},
 created() {
    this.getData();
  },
  }
</script>

<style>
.row {
  justify-content: center;
}
</style>