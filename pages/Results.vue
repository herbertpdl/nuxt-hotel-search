<template>
  <div class="results">
    <div class="container">
      <h3>{{ $t('results.title') }}</h3>

      <div class="results__list">
        <HotelCard
          v-for="(hotel, index) in hotelsList"
          :key="index"
          :hotel-data="hotel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import HotelCard from '../components/HotelCard'

export default {
  name: 'Results',
  components: {
    HotelCard,
  },
  computed: {
    ...mapGetters(['hotelsList']),
  },
}
</script>

<style lang="scss" scoped>
.results {
  padding: 24px 0;
}
</style>
