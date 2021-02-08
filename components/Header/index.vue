<template>
  <header class="header">
    <div class="container">
      <Card :title="$t('header.cardTitle')">
        <Dropdown v-model="searchData.cityCode" :options="options" />

        <label>Adultos</label>

        <NumberStepper v-model="searchData.adults" :min="1" :max="7" />

        <button @click="findHotels">BUSCAR</button>
      </Card>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

import { getHotelList } from '../../services'

import Card from '../Card'
import Dropdown from '../Dropdown'
import NumberStepper from '../NumberStepper'

export default {
  name: 'Header',
  components: {
    Card,
    Dropdown,
    NumberStepper,
  },
  data() {
    return {
      searchData: {
        cityCode: null,
        adults: 0,
      },
      options: ['NCE', 'MIA', 'LON', 'SYD', 'NYC', 'BKK'],
    }
  },
  methods: {
    ...mapMutations(['setLoading', 'setHotelsList']),
    findHotels() {
      this.setLoading(true)
      getHotelList(this.searchData).then((resp) => {
        console.log(resp)
        this.setHotelsList(resp)
        this.setLoading(false)
      })
      // TODO: Add error handling
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 300px;
  padding: 16px 0;
  background-color: #1e4785;

  .card {
    width: 380px;
    padding: 8px 16px 16px 16px;
  }

  .dropdown {
    width: 50%;
  }
}
</style>
