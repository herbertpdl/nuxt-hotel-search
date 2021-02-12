<template>
  <div class="results">
    <div class="container">
      <h3>{{ $t('results.title') }}</h3>

      <ResultsFilter />

      <div class="results__list">
        <NuxtLink
          v-for="(hotelData, index) in hotelsList"
          :key="index"
          :to="`hotel/${hotelData.hotel.hotelId}`"
        >
          <HotelCard :hotel-data="hotelData" :weather-data="weatherData" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HotelCard from '../components/HotelCard'
import ResultsFilter from '../components/ResultsFilter'

export default {
  nuxtI18n: {
    paths: {
      'en-us': '/results',
      'pt-BR': '/resultados',
    },
  },
  name: 'Results',
  components: {
    HotelCard,
    ResultsFilter,
  },
  head() {
    return {
      title: this.$t('results.pageTitle', {
        city: this.searchData.city,
        country: this.searchData.country,
      }),
      description: this.$t('results.pageDescription', {
        city: this.searchData.city,
        country: this.searchData.country,
      }),
    }
  },
  computed: {
    ...mapGetters(['hotelsList', 'weatherData', 'searchData']),
  },
}
</script>

<style lang="scss" scoped>
.results {
  padding: 24px 0;

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
