<template>
  <div v-if="product ==null">
    <PageError />
  </div>
  <div class="details" v-if="product !=null">
    <div class="details-primary u-center-text">
      <h1 class="heading-secondary">{{product.name}}</h1>
      <p class="tagline tagline--main">{{product.tagline}}</p>
    </div>
    <div class="details-secondary u-margin-top-lg">
      <div class="info">
        <span class="info__detail info--title">Vol</span>
        <span class="info__detail info--spec">{{product.abv}}%</span>
      </div>
      <img class="details-image" :src='product.image_url' alt="Beer bottle">
      <div class="info">
        <span class="info__detail info--title">Amount</span>
        <span class="info__detail info--spec">{{product.volume.value}}ltr</span>
      </div>
      <p class="description u-margin-top-lg">{{product.description}}
      </p>
      <div class="specs u-margin-top-lg u-margin-bottom-lg">    
        <div class="info info--1" >
          <span class="info__detail info--title">First Brewed</span>
          <span class="info__detail info--spec">{{product.first_brewed}}</span>
        </div>
        <div class="info info--2">
          <span class="info__detail info--title">IBU</span>
          <span class="info__detail info--spec">{{product.ibu}}</span>
        </div>
        <div class="info info--3">
          <span class="info__detail info--title">EBC</span>
          <span class="info__detail info--spec">{{product.ebc}}</span>
        </div>
        <div class="info info--4">
          <span class="info__detail info--title">Vol</span>
          <span class="info__detail info--spec">{{product.abv}}%</span>
        </div>
      </div>
    </div>
  </div>

  <div class="related-products u-margin-bottom-lg">
    <div class="card" v-for="item of relatedItems" v-bind:key="item.id">
      <router-link class="card__link" :to="`/prod-details/${item.id}`">
        <img class="card__link-thumbnail" :src='item.image_url' alt="Beer bottle">
        <h3 class="heading-tertiary" style="height: 1.5em; white-space: nowrap; overflow: hidden; width: 100%; text-overflow: ellipsis;">{{item.name}}</h3>
        <span class="tagline tagline--main">{{item.tagline}}</span>
        <span class="tagline tagline--sub">{{item.abv}}% alc./vol.</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Options, Vue } from 'vue-class-component';
  import PageError from '../components/PageError.vue';
  import ProdItem from "../components/ProdItem.vue";
  import Categories from './Categories.vue';

  @Options({
    components: {
      PageError
    },

    data() {
      return {
        product: null,
        relatedItems: []
      }
    },

    // Call to api using api to avoid nesting
    async mounted() {
      const prodId: string = this.$route.params.id;

      const res = await axios.get(`https://api.punkapi.com/v2/beers/${prodId}`).catch(err => console.log(err));

      if (res === undefined) return;

      this.product = res.data[0];

      // Related products by alcohol level

      const abv = this.product.abv;

      const minAbv = Math.floor(abv); 
      const maxAbv = Math.ceil(abv);

      // 2nd Call to api to provide related items
      axios.get(`https://api.punkapi.com/v2/beers`)
        .then(res => { 
          this.relatedItems = res.data.filter((item: any) => item.id != prodId).sort((a: any, b: any) => {
            if (a.abv >= minAbv && a.abv <= maxAbv) return -1;
            if (b.abv >= minAbv && b.abv <= maxAbv) return -1;
            return Math.random() - 0.5;
          }).slice(0, 3);
          console.log(this.relatedItems);
        })
        .catch(err => console.log(err));
      }, 
  })

  export default class ProdDetails extends Vue {}
</script>