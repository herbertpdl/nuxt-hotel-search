<template>
  <div class="home">
    <div class="container">
      <h1 class="title">{{ $t('welcome') }}</h1>

      <div class="home__content">
        <HomeCard
          v-for="(country, index) in countryList"
          :key="index"
          :label="$t(`destinationOptions.${country.name}`)"
          :description="$t(`destinationOptions.${country.description}`)"
          :bg-image="country.image"
          @click.native="findHotels(country.queryData)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import HomeCard from '../components/HomeCard'

import { getHotelList, getLocationKey, getCurrentConditions } from '../services'

export default {
  name: 'Index',
  components: {
    HomeCard,
  },
  data() {
    return {
      countryList: [
        {
          name: 'portugal',
          image: 'portugal.jpg',
          description: 'portugalDescription',
          queryData: {
            cityCode: 'LIS',
            adults: 1,
          },
        },
        {
          name: 'spain',
          image: 'spain.jpg',
          description: 'spainDescription',
          queryData: {
            cityCode: 'BCN',
            adults: 1,
          },
        },
        {
          name: 'italy',
          image: 'italy.jpeg',
          description: 'italyDescription',
          queryData: {
            cityCode: 'FCO',
            adults: 1,
          },
        },
        {
          name: 'brazil',
          image: 'brazil.jpg',
          description: 'brazilDescription',
          queryData: {
            cityCode: 'CNF',
            adults: 1,
          },
        },
      ],
    }
  },
  methods: {
    ...mapMutations(['setLoading', 'setHotelsList', 'setWeatherData']),
    // TODO: Get this methods from a mixin
    findHotels(params) {
      this.setLoading(true)
      getHotelList(params).then((resp) => {
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

        /* If is not on results page, redirect.
          NOTE: This validation consider that exist only
          one route with "results" in it's path
        */
        if (!this.$route.path.includes('results')) {
          this.$router.push(this.returnResultsPageUrl())
        }
      })
      // TODO: Add error handling
    },
    returnLanguageCode() {
      return this.$i18n.localeProperties.code
    },
    // Return results page URL based on selected language
    returnResultsPageUrl() {
      if (this.$i18n.localeProperties.code === 'en-us') {
        return '/en-us/results'
      }

      return '/pt-BR/resultados'
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 24px 0;

  h1 {
    font-size: 48px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    margin-bottom: 24px;
  }
}
</style>
