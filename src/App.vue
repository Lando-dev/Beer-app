<template>
  <div class="main">
    <Header />  
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "./components/layout/Header.vue"; 
import Footer from "./components/layout/Footer.vue"; 

export default {

  name: "app",
  components: {
    Header,
    // Sidebar,
    Footer
  },  
}
</script>