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
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCard from '../components/HomeCard'

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
        },
        {
          name: 'spain',
          image: 'spain.jpg',
          description: 'spainDescription',
        },
        {
          name: 'italy',
          image: 'italy.jpeg',
          description: 'italyDescription',
        },
        {
          name: 'brazil',
          image: 'brazil.jpg',
          description: 'brazilDescription',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 24px 0;

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
