<template>
  <div class="hotel-card">
    <Card hoverable>
      <img :src="hotelImage" alt="Hotel Image" class="hotel-card__image" />

      <div class="hotel-card__content">
        <h2>{{ hotelData.hotel.name }}</h2>
        <p class="hotel-card__price">$ {{ hotelData.offers[0].price.total }}</p>

        <p>{{ $t('hotelCard.weather') }}</p>
        <span>{{ weatherData.WeatherText }}</span>
        <div style="display: flex">
          <span>{{ weatherData.Temperature.Metric.Value }}</span
          ><small>c</small>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from '../Card'

export default {
  name: 'HotelCard',
  components: {
    Card,
  },
  props: {
    hotelData: {
      type: Object,
      default: () => ({}),
      required: true,
    },
    weatherData: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },
  computed: {
    // If hotel has no image, return placeholder image
    hotelImage() {
      if (this.hotelData.hotel.media) {
        return this.hotelData.hotel.media[0].uri
      }

      return 'https://via.placeholder.com/266'
    },
  },
}
</script>

<style lang="scss" scoped>
.hotel-card {
  margin-bottom: 20px;
  cursor: pointer;

  .card {
    display: flex;
    align-items: flex-start;
    width: 550px;
    height: 250px;
    overflow: hidden;
  }

  &__image {
    height: 266px;
    width: 266px;
    margin: -8px 0 -8px -8px;
  }

  &__price {
    font-size: 24px;
    font-weight: bold;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 260px;
    margin-left: 30px;

    h2 {
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
