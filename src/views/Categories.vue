<template>
  <div class="categories">
    <div class="details-primary">
      <h1 class="heading-secondary u-center-text">
        Explore a wide range of categories
      </h1>
    </div>
    <div class="category">
      <router-link to="/category/ipa">
        <div class="category__item category__item--1">
          <img class="category__item" src="../assets/images/cat-1.jpg" alt="">
          <h4>IPA</h4>
        </div>  
      </router-link>
      <router-link to="/category/lager">
      <div class="category__item category__item--2">
        <img class="category__item" src="../assets/images/cat-2.jpg" alt="">
        <h4>LAGER</h4>
      </div>
      </router-link>
      <router-link to="/category/pale-ale">
      <div class="category__item category__item--3">
        <img class="category__item" src="../assets/images/cat-3.jpg" alt="">
        <h4>PALE ALE</h4>
      </div>
      </router-link>
      <router-link to="/category/pilsner">
      <div class="category__item category__item--4">
        <img class="category__item" src="../assets/images/cat-4.jpg" alt="">
        <h4>PILSNER</h4>
      </div>
      </router-link>
      <router-link to="/category/stout">
      <div class="category__item category__item--5">
        <img class="category__item" src="../assets/images/cat-5.jpg" alt="">
        <h4>STOUT</h4>
      </div>
      </router-link>
      <router-link to="/category/porter">
      <div class="category__item category__item--6">
        <img class="category__item" src="../assets/images/cat-6.jpg" alt="">
        <h4>PORTER</h4>
      </div>
      </router-link>
      <router-link to="/category/belgian">
      <div class="category__item category__item--7">
        <img class="category__item" src="../assets/images/cat-7.jpg" alt="">
        <h4>BELGIAN</h4>
      </div>
      </router-link>
      <router-link to="/category/wheat">
      <div class="category__item category__item--8">
        <img class="category__item" src="../assets/images/cat-8.jpg" alt="">
        <h4>WHEAT</h4>
      </div>
      </router-link>
      <router-link to="/category/sour">
      <div class="category__item category__item--9">
        <img class="category__item" src="../assets/images/cat-9.jpg" alt="">
        <h4>SOUR</h4>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component'
import ProdItem from "../components/ProdItem.vue";

export default class Categories extends Vue {}
</script>
