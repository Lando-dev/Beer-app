<template>
<div class="navigation-menu" @click="showNav = !showNav">
  <img src="./assets/images/menu.svg" alt="Menu bar" class="menu-bar">
</div>
  <Sidebar :class="{'open':showNav }" />
  <Header />  
  <Footer />
</template>

<script>
import Header from "./components/layout/Header.vue"; 
import Footer from "./components/layout/Footer.vue"; 
import Sidebar from "./components/layout/Sidebar.vue"; 

export default {

  data: () => {
    return {
      mobileView: false,
      showNav: false
    }
  },

  name: "app",
  components: {
    Header,
    Sidebar,
    Footer
  },

  
}

</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
}

</style>