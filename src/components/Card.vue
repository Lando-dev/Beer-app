<template>
  <router-link class="card__link" :to="`/prod-details/${item.id}`">
    <img class="card__link-thumbnail" :src='item.image_url' alt="Beer bottle">
    <h3 class="heading-tertiary">{{ item.name }}</h3>
    <span class="tagline tagline--main">{{ item.tagline }}</span>
    <span class="tagline tagline--sub">{{ item.abv }}% alc./vol.</span>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options ({
  props: {
    listdata: {
      type: Array,
      required: true
    }
  }
})

export default class Card extends Vue {}
</script>