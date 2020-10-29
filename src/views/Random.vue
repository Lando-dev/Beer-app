<template>
  <div class="details">
    <product-details :product="product" v-if="product != null"></product-details>
  </div>
  <div class="rand-gen">
    <button @click="generate" href="" class="btn btn--rand">Pick another</button>
  </div>
</template>

<script lang="ts">
import ApiService from '../components/Service';
import { Options, Vue } from 'vue-class-component'
import axios from 'axios';
import Details from '../components/Details.vue';

@Options({
  data() {
    return{
      product: null
    }
  },

  components: {
    'product-details': Details
  },

  async mounted() {
    this.product = await ApiService.getRandom();    
  },

  methods: {
  async generate() {
    this.product = await ApiService.getRandom();
  }
}
})
export default class Random extends Vue {}
</script>
