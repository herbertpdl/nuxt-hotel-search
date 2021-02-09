<template>
  <header class="header">
    <div class="header__blurred-background"></div>
    <div class="container">
      <Card :title="$t('header.cardTitle')">
        <Dropdown v-model="searchData.cityCode" :options="options" />

        <label>Adultos</label>

        <NumberStepper v-model="searchData.adults" :min="1" :max="7" />

        <Button label="Buscar" />
        <button @click="findHotels">BUSCAR</button>
      </Card>

      <LanguageSwitcher />
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

import {
  getHotelList,
  getLocationKey,
  getCurrentConditions,
} from '../../services'

import Card from '../Card'
import Button from '../Button'
import Dropdown from '../Dropdown'
import NumberStepper from '../NumberStepper'
import LanguageSwitcher from '../LanguageSwitcher'

export default {
  name: 'Header',
  components: {
    Card,
    Button,
    Dropdown,
    NumberStepper,
    LanguageSwitcher,
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
    ...mapMutations(['setLoading', 'setHotelsList', 'setWeatherData']),
    findHotels() {
      this.setLoading(true)
      getHotelList(this.searchData).then((resp) => {
        this.setHotelsList(resp)
        this.setLoading(false)

        if (resp.length > 0) {
          // Get location key based on postal code
          getLocationKey(
            resp[0].hotel.address.postalCode,
            this.returnLanguageCode()
          ).then((resp) => {
            // Get conditions based on location key
            getCurrentConditions(
              resp[0].Key,
              this.returnLanguageCode()
            ).then((resp) => this.setWeatherData(resp[0]))
          })
        }

        /* If is not in results page, redirect
          NOTE: This validation consider that exist only
          one route with "results" in it's path
        */
        if (!this.$route.path.includes('results')) {
          this.$router.push({ name: `results___${this.returnLanguageCode()}` })
        }
      })
      // TODO: Add error handling
    },
    returnLanguageCode() {
      return this.$i18n.localeProperties.code
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.header {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 16px 0;
  overflow: hidden;

  &__blurred-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/background-beach-hills.jpg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px -420px;
    filter: blur(3px);
    z-index: -1;
  }

  .card {
    width: 380px;
    padding: 8px 16px 16px 16px;
  }

  .dropdown {
    width: 50%;
  }
}
</style>
