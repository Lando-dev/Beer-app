<template>
  <div class="home">
    <HomeBanner />
    <section class="products">
      <h2 class="heading-secondary u-center-text u-margin-top-mid">Craft beers, sour, hoppy or seasonal</h2> 
      <div class="search">
        <input type="text" class="searchTerm" placeholder="What are you looking for?">
        <!-- <button type="submit" class="searchButton">
          <i class="fas fa-search"></i>
        </button> --> 
      </div>
      <div class="sort-dropdown">
        <div class="sort-dropdown__current js-dropdown">
            <h4 class="sort-dropdown__text">Sort By</h4>
            <div class="sort-dropdown__icon">
              <span class="sort-dropdown__span"></span>
            </div>
        </div>
        <!-- <ul class="sort-dropdown__list">
            <li class="sort-dropdown__item">From low to high</li>
            <li class="sort-dropdown__item">From high to low</li>
            <li class="sort-dropdown__item">Sale</li>
            <li class="sort-dropdown__item">20% Discounts</li>
            <li class="sort-dropdown__item">New</li>
        </ul> -->
      </div>
    </section>

    <div class="product u-margin-top-mid">
      <Suspense>
        <ProdItem />
      </Suspense>
    </div>
    <Gallery />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HomeBanner from '../components/HomeBanner.vue';
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ProdItem from "../components/ProdItem.vue";
import Gallery from "../components/Gallery.vue";

@Options({
  components: {
    HelloWorld,
    HomeBanner,
    ProdItem,
    Gallery
  }
})
export default class Home extends Vue {}
</script>
