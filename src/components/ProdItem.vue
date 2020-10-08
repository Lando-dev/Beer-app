<template>
<input type="text" v-model="search" placeholder="Search Beer">
  <div class="card" v-for="item in filteredBeers.slice(0, 10)" v-bind:key="item.id" >
    <router-link class="card__link" to="/id:">
      <img class="card__link-thumbnail" :src='item.image_url' alt="Beer bottle">
      <h3 class="heading-tertiary">{{item.name.slice(0, 20)}}</h3>
      <span class="tagline tagline--main">{{item.tagline}}</span>
      <span class="tagline tagline--sub">{{item.abv}}% alc./vol.</span>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';

export default {
  name: 'ProdItem',

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
      return this.items.filter((item) => {
        return item.name.match(this.search);
      })
    }
  }
}
</script>



