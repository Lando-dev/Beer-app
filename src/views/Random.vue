<template>
  <div class="details" v-for="item in items" v-bind:key="item.id">
    <div class="details-primary u-center-text">
      <h1 class="heading-secondary">{{item.name}}</h1>
      <p class="tagline--main">{{item.tagline}}</p>
    </div>
    <div class="details-secondary u-margin-top-big">
      <div class="info">
        <span class="info__detail info--title">Vol</span>
        <span class="info__detail info--spec">{{item.abv}}%</span>
      </div>
      <img class="details-image" :src='item.image_url' alt="">
      <div class="info">
        <span class="info__detail info--title">Amount</span>
        <span class="info__detail info--spec">1ltr</span>
      </div>
    </div>
  </div>
  <div class="rand-gen">
    <button @click="generate" href="" class="btn btn--rand">Pick another</button>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import axios from 'axios';

@Options({
  data() {
    return{
      items: []
    }
  },

  mounted() {
    axios.get('https://api.punkapi.com/v2/beers/random')
    .then(res => this.items = res.data)
    .catch(err => console.log(err));
  },

  methods: {
  generate() {
     axios.get('https://api.punkapi.com/v2/beers/random')
    .then(res => this.items = res.data)
    .catch(err => console.log(err));
  }
}
})


export default class Random extends Vue {}
</script>
