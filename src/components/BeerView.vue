<template>
  <v-container>
    
    <BeerInfo></BeerInfo> <!-- Этот компонент мы сейчас создадим -->
    
  </v-container>
</template>

<script>
import BeerInfo from './BeerInfo.vue'
export default {
  name: 'BeerView',
  components: {
    BeerInfo
  }
}
</script>