<template>
  <div class="page-error">
    <div class="page-error__content">
      <h5 class="heading-error">
        <span class="heading-error--main">404</span> 
        <span class="heading-error--sub">Page not found!</span>
      </h5>
      <img class="page-error__img" src="../assets/images/beer-spill.jpg" alt="Spilled Beer">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class PageError extends Vue {}
</script>