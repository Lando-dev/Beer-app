<template>
  <div v-if="product ==null">
    <PageError />
  </div>
  <div class="details" v-if="product !=null">
    <div class="details-primary u-center-text">
      <h1 class="heading-secondary">{{product.name}}</h1>
      <p class="tagline tagline--main">{{product.tagline}}</p>
    </div>
    <div class="details-secondary u-margin-top-big">
      <div class="info">
        <span class="info__detail info--title">Vol</span>
        <span class="info__detail info--spec">{{product.abv}}%</span>
      </div>
      <img class="details-image" :src='product.image_url' alt="">
      <div class="info">
        <span class="info__detail info--title">Amount</span>
        <span class="info__detail info--spec">{{product.volume.value}}ltr</span>
      </div>
      <p class="description u-margin-top-big">{{product.description}}
      </p>
      <div class="specs u-margin-top-big u-margin-bottom-big">    
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
  <div class="similar-products">
    
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Options, Vue } from 'vue-class-component';
import PageError from '../components/PageError.vue';
import ProdItem from "../components/ProdItem.vue";

@Options({
  components: {
    PageError
  },

  data() {
    return {
      product: null
    }
  },

  mounted() {
    const prodId: string = this.$route.params.id;
    axios.get(`https://api.punkapi.com/v2/beers/${prodId}`)
      .then(res => { const product = res.data[0]; this.product = product; })
      .catch(err => console.log(err));
    },
})


export default class ProdDetails extends Vue {

}
</script>