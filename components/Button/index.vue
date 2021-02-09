<template>
  <button class="button" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      default: 'Button label',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  height: 40px;
  padding: 4px 16px 8px 16px;
  border: 0;
  border-radius: 3px;
  background-color: #092a5e;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.013em;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #436da8;
  }

  &:focus {
    outline-color: #6cc5ef;
  }

  &[disabled] {
    background-color: #cdcdcd;
    cursor: not-allowed;
  }
}
</style>
