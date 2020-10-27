<template>
  <section class="banner">
    <div class="bg-video">
      <video class="bg-video__content" autoplay muted loop>
        <source src="../assets/images/Beer.mp4" type="video/mp4">
        Your browser is not supported!
      </video>
    </div>
    <div class="banner__content">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Get in touch with the worlds most loved beverage.</span>
        <span class="heading-primary--sub">Explore a vast catalog of beers and discover their origins.</span>
      </h1>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomeBanner extends Vue {}
</script>