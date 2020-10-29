<template>
  <div class="details__primary u-center-text u-margin-bottom-sm">
    <h1 class="heading-secondary">{{ product.name }}</h1>
    <p class="tagline tagline--main">{{ product.tagline }}</p>
  </div>
  <div class="details__secondary u-margin-top-lg">
    <div class="info">
      <span class="info__detail info--title">Vol</span>
      <span class="info__detail info--spec">{{ product.abv }}%</span>
    </div>
    <img class="details__image" :src='product.image_url' alt="Beer bottle">
    <div class="info">
      <span class="info__detail info--title">Amount</span>
      <span class="info__detail info--spec">{{ product.volume.value }}ltr</span>
    </div>
    <p class="description u-margin-top-lg">{{ product.description }}</p>
    <div class="specs u-margin-top-lg u-margin-bottom-lg">    
      <div class="info info--1" >
        <span class="info__detail info--title">First Brewed</span>
        <span class="info__detail info--spec">{{ product.first_brewed }}</span>
      </div>
      <div class="info info--2">
        <span class="info__detail info--title">IBU</span>
        <span class="info__detail info--spec">{{ product.ibu }}</span>
      </div>
      <div class="info info--3">
        <span class="info__detail info--title">EBC</span>
        <span class="info__detail info--spec">{{ product.ebc }}</span>
      </div>
      <div class="info info--4">
        <span class="info__detail info--title">Vol</span>
        <span class="info__detail info--spec">{{ product.abv }}%</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options ({
  props: {
    product: {
      required: true
    }
  }
})

export default class Details extends Vue {}
</script>