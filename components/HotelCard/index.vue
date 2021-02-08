<template>
  <div class="hotel-card">
    <Card hoverable>
      <img
        src="http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/A15115741A8747538ECDBB2AA76B7DE9"
        alt="Hotel Image"
        class="hotel-card__image"
      />

      <div class="hotel-card__content">
        <h2>{{ hotelData.hotel.name }}</h2>
        <p>$ {{ hotelData.offers[0].price.total }}</p>

        <p>WEATHER</p>
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
    width: 750px;
    height: 250px;
    overflow: hidden;
  }

  &__image {
    height: 266px;
    width: 266px;
    margin: -8px 0 -8px -8px;
  }

  &__content {
    max-width: 460px;
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
