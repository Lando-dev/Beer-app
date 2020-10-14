<template>
<input class="prod-search" type="text" v-model="search" placeholder="Search Beer">
  <div class="card" v-for="item in filteredBeers.slice(0, 10)" v-bind:key="item.id" >
    <router-link class="card__link" to="/id:">
      <img class="card__link-thumbnail" :src='item.image_url' alt="Beer bottle">
      <h3 class="heading-tertiary">{{item.name.slice(0, 20)}}</h3>
      <span class="tagline tagline--main">{{item.tagline}}</span>
      <span class="tagline tagline--sub">{{item.abv}}% alc./vol.</span>
    </router-link>
  </div>

  <!-- <div class="card" v-for="beer in beers" v-bind:key="beer.id" >
    <router-link class="card__link" to="/id:">
      <img class="card__link-thumbnail" :src='beer.image_url' alt="Beer bottle">
      <h3 class="heading-tertiary">{{beer.name.slice(0, 20)}}</h3>
      <span class="tagline tagline--main">{{beer.tagline}}</span>
      <span class="tagline tagline--sub">{{beer.abv}}% alc./vol.</span>
    </router-link>
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import useBeers from '@/modules/beers'
import axios from 'axios';


@Options({
  data() {
    return{
      items: [],
      search: ''
    }
  },

  mounted() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => this.items = res.data)
    .catch(err => console.log(err));
  },

  computed: {
    filteredBeers: function() {
      return this.items.filter((item: any) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
    }
  }
})

export default class ProdItem extends Vue {

  // async setup() {
  //   const { beers } = await useBeers();

  //   return { beers };
  // } 
}
</script>



