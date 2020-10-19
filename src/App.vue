<template>
  <Sidebar />
  <Header />
  <Footer />
</template>

<script lang="ts">
import Header from "./components/layout/Header.vue"; 
import Footer from "./components/layout/Footer.vue"; 

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
}

</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}

</style>