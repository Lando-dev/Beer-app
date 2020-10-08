<template>
  <header class="header" :class="{change_color: scrollPosition > 500}">
    <nav class="nav" id="navbar" :class="{invert: scrollPosition > 600}" >
      <router-link class="nav__brand" to="/">
        TheBeerCo.
      </router-link>
      <ul class="menu">
        <li class="menu__item">
          <router-link to="/categories">Categories</router-link>
        </li>
        <li class="menu__item">
          <router-link to="/random">Surprise me</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "Header",

  data() {
    return{
      scrollPosition: null
    }
  },

  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>
