<template>
  <div class="container">
    <div class="hotel">
      <template v-if="hotelData">
        <div class="hotel__name">
          <h1>{{ hotelData.hotel.name }}</h1>
          <h2>{{ mountHotelAdress(hotelData.hotel.address) }}</h2>
        </div>

        <div class="hotel__info">
          <Card>
            <img
              :src="hotelData.hotel.media[0].uri"
              alt="hotel image"
              class="hotel__image"
            />

            <div class="hotel_amenities">
              <span
                v-for="(amenitie, index) in hotelData.hotel.amenities"
                :key="index"
              >
                {{ amenitie }}
              </span>
            </div>

            <h3>
              {{ hotelData.hotel.description.text }}
            </h3>
          </Card>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { getHotelOffer } from '../../services'

import Card from '../../components/Card'

export default {
  name: 'Hotel',
  components: {
    Card,
  },
  async asyncData({ params }) {
    const hotelId = params.hotel
    let hotelData = ''

    await getHotelOffer(hotelId).then((resp) => {
      hotelData = resp
    })

    return { hotelData }
  },
  head() {
    return {
      title: this.hotelData?.hotel?.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.hotelData?.hotel?.description.text,
        },
      ],
    }
  },
  methods: {
    mountHotelAdress(addressInfo) {
      if (addressInfo) {
        return `
          ${addressInfo.lines[0]},
          ${addressInfo.cityName} ,
          ${addressInfo.stateCode}
          ${addressInfo.countryCode}
        `
      }

      return addressInfo
    },
  },
}
</script>

<style lang="scss" scoped>
.hotel {
  padding: 24px 0;

  h1 {
    margin: 0;
  }

  &__name {
    margin-bottom: 60px;
  }

  &__info {
    width: 100%;

    .card {
      width: 100%;
    }

    h3 {
      font-size: 16px;
    }
  }

  &__image {
    max-width: 250px;
    margin-right: 24px;
    border-right: 1px solid #cccc;
    border-bottom: 1px solid #cccc;
    border-radius: 3px;
  }

  &__amenities {
    display: inline-block;
  }
}
</style>
