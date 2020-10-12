<template>
  <div class="details">
    <div class="details-primary u-center-text">
      <h1 class="heading-secondary">Bramling X</h1>
      <p class="tagline--main">Single Hop IPA Series - 2011.</p>
    </div>
    <div class="details-secondary">
      <div class="info">
        <span class="info__detail info--title">Vol</span>
        <span class="info__detail info--spec">7%</span>
      </div>
      <img class="details-image" src="../assets/images/beer.png" alt="">
      <div class="info">
        <span class="info__detail info--title">Amount</span>
        <span class="info__detail info--spec">1ltr</span>
      </div>
    </div>
  </div>
  <div class="rand-gen">
    <a href="" class="btn">Pick another</a>
  </div>
</template>

<script lang="ts">
import {Vue} from 'vue-class-component'

export default class Random extends Vue {}
</script>
