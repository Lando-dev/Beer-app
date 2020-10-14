import useApi from './api'
import { ref } from 'vue';

export default async function useBeers() {
  const { response: beers, request } = useApi (
    'https://api.punkapi.com/v2/beers'
  );

  const loaded = ref(false);

  if (loaded.value === false) {
    await request();
    loaded.value = true;
  }

  return { beers };
}