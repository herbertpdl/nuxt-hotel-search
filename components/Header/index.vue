<template>
  <header class="header">
    <div class="container">
      <Card :title="$t('header.cardTitle')">
        <Dropdown v-model="searchData.cityCode" :options="options" />

        <label>Adultos</label>
        <input v-model="searchData.adults" type="number" min="1" />

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

export default {
  name: 'Header',
  components: {
    Card,
    Dropdown,
  },
  data() {
    return {
      searchData: {
        cityCode: null,
        adults: 0,
      },
      options: ['CWB', 'NYC', 'LAS'],
    }
  },
  methods: {
    ...mapMutations(['setLoading']),
    findHotels() {
      this.setLoading(true)
      getHotelList(this.searchData).then((resp) => {
        console.log(resp)
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
