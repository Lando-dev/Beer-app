<template>
  <div v-if="!apiCall">Loading items</div>

  <div v-if="product == null">
    <PageError />
  </div>
  
  <div class="details u-margin-bottom-lg" v-if="apiCall && product != null">
    <product-details v-bind:product="product"></product-details>
  </div>

  <div class="related-products u-margin-bottom-lg">
    <div class="card" v-for="item of relatedItems" v-bind:key="item.id">
      <card v-bind:item="item"></card>
    </div>
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import { Options, Vue } from 'vue-class-component';
  import PageError from '../components/PageError.vue';
  import ProdItem from "../components/ProdItem.vue";
  import Categories from './Categories.vue';
  import Details from '../components/Details.vue';
  import Card from '../components/Card.vue';
  import ApiSerivce from '../components/Service';

  @Options({
    components: {
      PageError,
      'product-details': Details,
      'card': Card
    },

    data() {
      return {
        product: null,
        apiCall: false,
        relatedItems: []
      }
    },

    // Call to api using api to avoid nesting
    async mounted() {
      const prodId: string = this.$route.params.id;

      this.product = await ApiSerivce.getById(Number.parseInt(prodId));
      this.apiCall = true;
      if (this.product === undefined) return;

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
        })
        .catch(err => console.log(err));
      }, 
  })

  export default class ProdDetails extends Vue {}
</script>