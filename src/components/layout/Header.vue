<template>
  <header class="header" :class="{change_color: scrollPosition > 400}">
    <nav class="nav" id="navbar" :class="{invert: scrollPosition > 400}" >
      <div class="sidebar-menu" id="navigation-mobile">
        
      </div>
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

<script lang="ts">
import {Options, Vue} from 'vue-class-component'

@Options({
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

    if (this.$route.path === "/category/:category") { 
        this.colorNav = true
    }
    
  },
})

export default class Header extends Vue {}
</script>
