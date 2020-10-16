<template>
  <div class="cards" v-if="dataLoaded">
    <div v-if="searchBox" class="filter">
      <input class="prod-search" type="text" v-model="search" placeholder="Search Beer">
      <!-- <label for="">Sort</label>
      <select v-model="sort" name="" id="">
        <option v-for="sort" v-bind:key="sort">{{sort}}</option>
        
      </select> -->
      <button class="btn btn--sort" @click="sortAscending">A-Z</button>
      <button class="btn btn--sort" @click="sortDescending">Z-A</button>
      <button class="btn btn--sort" @click="AlcoholHighest">Alc % High</button>
      <button class="btn btn--sort" @click="AlcoholLowest">Alc % Low</button>
      <div v-if="!searchBox"></div>
    </div>
    <div class="card" v-for="item of filteredBeers.slice(0, 10)" v-bind:key="item.id" >
      <router-link class="card__link" :to="`/prod-details/${item.id}`">
        <img class="card__link-thumbnail" :src='item.image_url' alt="Beer bottle">
        <h3 class="heading-tertiary" style="height: 1.5em; white-space: nowrap; overflow: hidden; width: 100%; text-overflow: ellipsis;">{{item.name}}</h3>
        <span class="tagline tagline--main">{{item.tagline}}</span>
        <span class="tagline tagline--sub">{{item.abv}}% alc./vol.</span>
      </router-link>
    </div>
  </div>
  <div v-if="!dataLoaded">There are no items.</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from 'axios';
import Filter from './Filter.vue';

@Options({

  data() {
    return{
      dataLoaded: false,
      items: [].slice(0,10),
      search: '',
      category: null,
      searchBox: true,

      // sort: [ 'A-Z', 'Z-A' ]
    }
  },

  mounted() {
    if (this.$route.params.category !== undefined) {
      this.category = this.$route.params.category;
      this.searchBox = false;
    }

    axios.get('https://api.punkapi.com/v2/beers/')
        .then(res => { 
          this.items = res.data; 
          console.log(res); 
          this.dataLoaded = true; 
        
          if (this.category != null) {
            this.items = this.items.filter((beer: any) => {
              return beer.description.toLowerCase().indexOf(this.category) > -1;
            });
          }
        })
        .catch(err => { this.dataLoaded = false; console.log(err) });
      },

  methods:{
    sortAscending() {
      this.items.sort((a:any, b:any) => 0 - (a.name > b.name ? -1 : 1));
    },
    sortDescending() {
      this.items.sort((a:any, b:any) => 0 - (a.name > b.name ? 1 : -1));  
    },
    AlcoholHighest() {
      this.items.sort((a:any, b:any) => 0 - (a.abv > b.abv ? 1 : -1));
    },
    AlcoholLowest() {
      this.items.sort((a:any, b:any) => 0 - (a.abv > b.abv ? -1 : 1));
    }
  },

  computed: {
    filteredBeers: function() {
      return this.items.filter((item: any) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
    }


  }
})

export default class ProdItem extends Vue {}
</script>