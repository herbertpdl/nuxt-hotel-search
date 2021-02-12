<template>
  <div class="number-stepper">
    <span
      class="number-stepper__decrement"
      :disabled="value === min"
      @click="decrement"
    />
    <input
      :value="value"
      class="number-stepper__input"
      type="number"
      :readonly="disableKeyboardEdition"
      @keyup="handleValue"
    />
    <span
      class="number-stepper__increment"
      :disabled="value === max"
      @click="increment"
    />
  </div>
</template>

<script>
export default {
  name: 'NumberStepper',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    disableKeyboardEdition: {
      type: Boolean,
    },
  },
  methods: {
    handleValue(event) {
      /* TODO: Implement logic to prevent user to type an
      invalid value based on min and max properties */
      this.$emit('input', parseInt(event.target.value))
    },
    // Increment input value
    increment() {
      if (this.max === null || this.value < this.max) {
        this.$emit('input', this.value + 1)
      }
    },
    // Decrement input value
    decrement() {
      if (this.min === null || this.value > this.min) {
        this.$emit('input', this.value - 1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.number-stepper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  &__increment,
  &__decrement {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 40px;
    border: 1px solid #cdcdcd;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
    box-sizing: border-box;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      border-color: #092a5e;
    }

    &:active {
      border: 2px solid #092a5e;
    }

    &:focus {
      border: 2px solid #2fb2eb;
    }
  }

  &__increment {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-image: url('../../assets/images/icon-plus.svg');
  }

  &__decrement {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-image: url('../../assets/images/icon-minus.svg');
  }

  &__input {
    width: 60px;
    height: 40px;
    border: 1px solid #cdcdcd;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    box-sizing: border-box;
    font-size: 20px;
    font-weight: bold;
    color: #092a5e;
    text-align: center;

    &:focus {
      border: 2px solid #2fb2eb;
      border-radius: 0;
      outline: 0;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }
}
</style>
