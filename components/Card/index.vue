<template>
  <div :class="cardClasses">
    <p v-if="title" class="card__title">
      {{ title }}
    </p>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: null,
    },
    hoverable: {
      type: Boolean,
    },
  },
  computed: {
    // Handle Card classes dynamically
    cardClasses() {
      // Default class
      let classes = 'card'

      if (this.hoverable) classes = classes + ' hoverable'

      return classes
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 8px;
  background: #ffffff;

  &__title {
    color: #092a5e;
    font-size: 24px;
    font-weight: bold;
  }

  &.hoverable {
    &:hover {
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
