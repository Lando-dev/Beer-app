<template>
  <div class="home">
    <HomeBanner />
    <section class="section-products">
      <h2 class="heading-secondary u-center-text u-margin-top-md">Craft beers, sour, hoppy or seasonal</h2>       
    </section>
    <div class="product-list">
      <ProdItem />
    </div>
    <Gallery />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomeBanner from '../components/HomeBanner.vue';
import ProdItem from '../components/ProdItem.vue';
import Gallery from '../components/Gallery.vue';

@Options({
  components: {
    HomeBanner,
    ProdItem,
    Gallery
  }
})
export default class Home extends Vue {}
</script>
