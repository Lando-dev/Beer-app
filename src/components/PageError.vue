<template>
  <div class="page-error">
    <div class="error">
      <h5>
        <span class="main">404</span> 
        <span class="sub">Page not found!</span>
      </h5>
    <img src="../assets/images/beer-spill.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class PageError extends Vue {}
</script>

<style lang="scss" scoped>

  .page-error{
    display: grid;
    justify-content: center;
  }

  .error {
    position: relative;
    padding: 5rem 10rem;
  }

  h5 {
    position: absolute;
    z-index: 1;
    left: 70%;
    top: 20%;
    
    .main {
      font-size: 14rem;
      letter-spacing: 6px;
      display: block;
    }

    .sub {
      font-size: 3rem;
    }
  }

  img {
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);

  width: 100%;
}
</style>