<template>
  <div
    id="dropdown"
    class="dropdown"
    :class="{ isOpen: isOpen }"
    @click="toggle"
  >
    <span> {{ value || placeholder }} </span>

    <div class="dropdown__options">
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          class="dropdown__option"
          :class="{ selected: option === value }"
          @click="handleValue(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    placeholder: {
      type: String,
      default: 'Select',
    },
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    document.body.addEventListener('click', this.validateClickArea)
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.validateClickArea)
  },
  methods: {
    handleValue(value) {
      this.$emit('input', value)
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    validateClickArea(event) {
      // Check if click ocurred outside this component
      if (
        this.isOpen &&
        !(event.path && event.path.find((element) => element.id === 'dropdown'))
      ) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  border: 1px solid #092a5e;
  border-radius: 3px;
  padding: 10px 16px;
  color: #092a5e;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &.isOpen {
    .dropdown__options {
      max-height: 200px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      opacity: 1;
      overflow: initial;
    }
  }

  &__options {
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    max-height: 0px;
    border-radius: 3px;
    padding: 0;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    opacity: 0;
    transition: 0.3s;

    ul {
      position: relative;
      margin: 0;
      padding: 0;
      z-index: 1;
    }

    &:before {
      content: '';
      position: absolute;
      display: block;
      top: -8px;
      left: 8px;
      width: 16px;
      height: 16px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      border-bottom-color: transparent;
      border-right-color: transparent;
      background: #ffffff;
      transform: rotate(45deg);
      z-index: 0;
    }
  }

  &__option {
    list-style: none;
    padding: 10px 16px;
    cursor: pointer;
    z-index: 1;

    &:hover {
      background-color: #e2f3fe;
    }

    &.selected {
      background-color: #c2e6fa;
    }
  }
}
</style>
