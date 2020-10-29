<template>
  <div class="category-banner" v-if="category !== null">
    <div class="">
      <h1 class="heading-secondary u-center-text">{{ category.toUpperCase() }}</h1>
      <router-link to="/categories">Go Back</router-link> 
    </div>
  </div>

  <div v-if="!apiCall">Loading items</div>

  <div class="products u-margin-bottom-md" v-if="apiCall && !hasError">
    <div v-if="searchBox" class="filter u-margin-top-md u-margin-bottom-md">
      <input class="search" type="text" v-model="search" placeholder="Search Beer">
      <div class="sort">
        <button class="btn btn--sort" @click="sortAscending">A-Z</button>
        <button class="btn btn--sort" @click="sortDescending">Z-A</button>
        <button class="btn btn--sort" @click="AlcoholHighest">Alc % High</button>
        <button class="btn btn--sort" @click="AlcoholLowest">Alc % Low</button>
      </div>
      <div v-if="!searchBox"></div>
    </div>

    <div class="card" v-for="item of filteredBeers.slice(start, end)" v-bind:key="item.id">
      <card v-bind:item="item"></card>
    </div>
  </div>

  <div class="pagination" v-if="pageNumbers.length > 1">
    <div class="page" v-for="page of pageNumbers" v-bind:key="page">
      <a href="#" v-if="page != currentPage" @click="changePage($event, page)">{{ page }}</a>
      <span v-if="page == currentPage">{{ page }}</span>
    </div>
  </div>

  <div class="data-error" v-if="apiCall && hasError">Sorry! There was an error loading the item list.</div>
  <div class="data-error" v-if="apiCall && items.length == 0">Sorry! There are no items here.</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Card from './Card.vue';
import ApiService from '../components/Service';

@Options({
  components: {
    'card': Card
  },

  data() {
    return{
      maxPerPage: 10,
      currentPage: 1,
      start: 0,
      end: 10,
      pageNumbers: [],

      // to check if the api was called.
      apiCall: false,

      // Errors loading
      hasError: false,

      items: [],
      search: '',
      category: null,
      searchBox: true,
    }
  },

  // set route params for categories
  async mounted() {
    if (this.$route.params.category !== undefined) {
      this.category = this.$route.params.category;
      this.searchBox = false; 
    }

    this.end = this.maxPerPage;

    this.items = await ApiService.getAll();
    
    this.apiCall = true;
    if (this.items === undefined)
    {
      this.hasError = true;
      return;
    }

    this.hasError = false; 

    // Match category by keyword from description
    if (this.category != null) {
      this.items = this.items.filter((beer: any) => {
        return beer.description.toLowerCase().indexOf(this.category) > -1;
      });
    }
    // Pagination
    const totalPages = Math.ceil(this.items.length / this.maxPerPage);
    for (let page = 0; page < totalPages; page++)
    {
      this.pageNumbers.push(page + 1);
    }
  },

  // Sorting
  methods:{
    sortAscending() {
      this.items.sort((a:any, b:any) => (a.name < b.name ? -1 : 1));
    },
    sortDescending() {
      this.items.sort((a:any, b:any) => (a.name < b.name ? 1 : -1));  
    },
    AlcoholHighest() {
      this.items.sort((a:any, b:any) => (a.abv < b.abv ? 1 : -1));
    },
    AlcoholLowest() {
      this.items.sort((a:any, b:any) => (a.abv < b.abv ? -1 : 1));
    },
    
    changePage(e: any, page: number) {
      this.currentPage = page;
      this.start = (this.currentPage - 1) * this.maxPerPage;
      this.end = this.currentPage * this.maxPerPage;

      e.preventDefault();
    }
  },

  // Search
  computed: {
    filteredBeers: function() {
      return this.items.filter((item: any) => {
        return item.name.toLowerCase().match(this.search.toLowerCase());
      })
    }
  }
})

export default class ProdItem extends Vue {}
</script>