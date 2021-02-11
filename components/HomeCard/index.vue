<template>
  <Card hoverable>
    <div class="home-card" :style="returnStyle()">
      <div class="home-card__content">
        <p class="home-card__title">
          {{ label }}
        </p>

        <p class="home-card__description">
          {{ description }}
        </p>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from '../Card'

export default {
  name: 'HomeCard',
  components: {
    Card,
  },
  props: {
    bgImage: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  methods: {
    returnStyle() {
      if (this.bgImage) {
        return {
          backgroundImage:
            'url(' + require(`../../assets/images/${this.bgImage}`) + ')',
          backgroundSize: '100%',
          backgroundPosition: 'center',
        }
      }

      return {}
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  padding: 0;
  overflow: hidden;
}

.home-card {
  width: 550px;
  height: 300px;
  box-sizing: border-box;
  transition: 0.5s;
  cursor: pointer;

  p {
    margin: 0;
    color: #ffffff;
  }

  &__content {
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.4);
  }

  &__title {
    font-size: 40px;
    font-weight: bold;
  }

  &:hover {
    background-size: 105% !important;
  }
}
</style>
