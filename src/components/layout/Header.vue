<template>
  <header class="header" :class="{change_color: scrollPosition > 50}">
    <nav class="navigation" id="navbar" :class="{invert: scrollPosition > 50}">
      <div class="navigation__menu" @click="showNav = !showNav">
        <svg fill="white" :class="{'close':showNav }" viewBox="0 0 100 80" width="30" height="20">
          <rect width="100" height="5"></rect>
          <rect y="30" x="30" width="70" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
        <svg v-if="showNav = showNav"  viewBox="0 0 100 110" width="20" height="20">
          <line x1="10" y1="10" x2="100" y2="100" stroke="black" stroke-width="7" />
          <line x1="100" y1="10" x2="10" y2="100" stroke="black" stroke-width="7" />
        </svg>
      </div>
      <Sidebar :class="{'open':showNav }" />
      <router-link class="navigation__brand" to="/">
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
import Sidebar from './Sidebar.vue'

@Options({
  data() {
    return{
      scrollPosition: null,
      showNav: false
    }
  },

  components: {
    Sidebar
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll); 
    // if (this.$route.path === "/category/:category") { 
        
    // }
  }
})

export default class Header extends Vue {}
</script>
