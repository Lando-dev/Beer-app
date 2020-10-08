import Vue from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

window.axios = require('axios');

new Vue({
  el: '#app',

  data() {
    return {
      beers: []
    }
  },

  mounted: () => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
})

export default Beers;