<template>
  <section class="results">
    <div class="container">
      <h3>{{ $t('results.title') }}</h3>

      <ResultsFilter @filterResults="orderData" />

      <div class="results__list">
        <NuxtLink
          v-for="(hotelData, index) in orderedData"
          :key="index"
          :to="`hotel/${hotelData.hotel.hotelId}`"
        >
          <HotelCard :hotel-data="hotelData" :weather-data="weatherData" />
        </NuxtLink>
      </div>
    </div>
  </section>
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
  data() {
    return {
      orderedData: [],
    }
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
  watch: {
    hotelsList(newValue) {
      this.orderedData = [...newValue]
    },
  },
  mounted() {
    this.orderedData = this.hotelsList
  },
  methods: {
    orderData(value) {
      const list = [...this.hotelsList]

      // TODO: Move all ordering methods to a single dynamic method
      if (value === 'nameAsc') {
        this.orderedData = list.sort((a, b) => {
          if (a.hotel.name < b.hotel.name) {
            return -1
          }

          if (a.hotel.name > b.hotel.name) {
            return 1
          }

          return 0
        })
      } else if (value === 'nameDesc') {
        this.orderedData = list.sort((a, b) => {
          if (a.hotel.name > b.hotel.name) {
            return -1
          }

          if (a.hotel.name < b.hotel.name) {
            return 1
          }

          return 0
        })
      } else if (value === 'valueAsc') {
        this.orderedData = list.sort((a, b) => {
          if (
            parseFloat(a.offers[0].price.total) <
            parseFloat(b.offers[0].price.total)
          ) {
            return -1
          }

          if (
            parseFloat(a.offers[0].price.total) >
            parseFloat(b.offers[0].price.total)
          ) {
            return 1
          }

          return 0
        })
      } else if (value === 'valueDesc') {
        this.orderedData = list.sort((a, b) => {
          if (
            parseFloat(a.offers[0].price.total) >
            parseFloat(b.offers[0].price.total)
          ) {
            return -1
          }

          if (
            parseFloat(a.offers[0].price.total) <
            parseFloat(b.offers[0].price.total)
          ) {
            return 1
          }

          return 0
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.results {
  padding: 24px 0;

  .results-filter {
    margin-bottom: 24px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
