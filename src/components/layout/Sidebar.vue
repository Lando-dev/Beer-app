<template>
  <div class="sidebar">
    <ul class="sidebar__menu">
      <li>
        <router-link to="/categories">Categories</router-link>
      </li>
      <li>
        <router-link to="/random">Surprise me</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class Sidebar extends Vue {}
</script>