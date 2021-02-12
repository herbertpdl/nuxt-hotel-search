<template>
  <header class="header">
    <div class="header__blurred-background"></div>
    <div class="container">
      <Card :title="$t('header.cardTitle')">
        <div class="header__card-options">
          <div>
            <label>{{ $t('header.destinationCountry') }}</label>
            <Dropdown
              id="country-select"
              v-model="selectedCountry"
              :options="countries"
              :placeholder="$t('header.select')"
            >
              <template #value="slotProps">
                {{ $t(`destinationOptions.${slotProps.value}`) }}
              </template>
              <template #options="slotProps">
                {{ $t(`destinationOptions.${slotProps.option}`) }}
              </template>
            </Dropdown>
          </div>

          <div>
            <label>{{ $t('header.destinationCity') }}</label>
            <Dropdown
              id="city-select"
              v-model="searchData.cityCode"
              :options="citiesbyCountry[selectedCountry]"
              :placeholder="$t('header.select')"
              :disabled="disableCityDropdown"
              option-label="label"
              option-value="code"
            />
          </div>
        </div>

        <label>{{ $t('header.adults') }}</label>
        <NumberStepper
          v-model="searchData.adults"
          :min="1"
          :max="4"
          :disable-keyboard-edition="true"
        />

        <Button
          :label="$t('header.search')"
          :disabled="disableSearchButton"
          @click="findHotels"
        />
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
      selectedCountry: null,
      searchData: {
        cityCode: null,
        adults: 1,
      },
      // List only the 3 airports by country
      citiesbyCountry: {
        brazil: [
          {
            code: 'GRU',
            label: 'São Paulo',
          },
          {
            code: 'SDU',
            label: 'Rio de Janeiro',
          },
          {
            code: 'CNF',
            label: 'Belo Horizonte',
          },
        ],
        portugal: [
          {
            code: 'LIS',
            label: 'Lisboa',
          },
          {
            code: 'OPO',
            label: 'Porto',
          },
          {
            code: 'FAO',
            label: 'Faro',
          },
        ],
        spain: [
          {
            code: 'PMI',
            label: 'Palma de Maiorca',
          },
          {
            code: 'BCN',
            label: 'Barcelona',
          },
          {
            code: 'MAD',
            label: 'Madrid',
          },
        ],
        italy: [
          {
            code: 'FCO',
            label: 'Roma',
          },
          {
            code: 'MXP',
            label: 'Varese',
          },
          {
            code: 'BGY',
            label: 'Bergamo',
          },
        ],
      },
      countries: ['brazil', 'portugal', 'spain', 'italy'],
    }
  },
  computed: {
    // Disable city dropdown while country is not selected
    disableCityDropdown() {
      if (!this.selectedCountry) {
        return true
      }

      return false
    },
    // Disable search button while city is not selected
    disableSearchButton() {
      if (!this.searchData.cityCode) {
        return true
      }

      return false
    },
  },
  methods: {
    ...mapMutations([
      'setLoading',
      'setHotelsList',
      'setWeatherData',
      'setSearchData',
    ]),
    // TODO: Move it to a mixin to be reused
    findHotels() {
      this.setLoading(true)
      getHotelList(this.searchData).then((resp) => {
        this.setHotelsList(resp)
        this.setLoading(false)

        this.setSearchData({
          country: this.$t(`destinationOptions.${this.selectedCountry}`),
          city: this.citiesbyCountry[this.selectedCountry].find(
            (el) => el.code === this.searchData.cityCode
          ).label,
        })

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
    background-image: url('../../assets/images/background-beach-hills.jpeg');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0px -420px;
    filter: blur(3px);
    z-index: -1;
  }

  &__card-options {
    width: 100%;
    display: flex;
    justify-content: space-between;

    > div {
      width: 49%;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 380px;
    padding: 8px 16px 16px 16px;
  }

  .button {
    align-self: flex-end;
  }

  .dropdown {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
