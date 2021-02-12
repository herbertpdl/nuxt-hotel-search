<template>
  <div
    :id="id"
    class="dropdown"
    :class="{ isOpen: isOpen, disabled: disabled }"
    @click="toggle"
  >
    <span>
      <template v-if="optionLabel">
        {{ selectedValueLabel }}
      </template>
      <template v-else>
        <slot v-if="value" name="value" :value="value">
          {{ value }}
        </slot>
        <template v-else>
          {{ placeholder }}
        </template>
      </template>
    </span>

    <img
      src="../../assets/images/caret-down-solid.svg"
      alt="dropdown caret arrow"
      class="dropdown__arrow"
    />

    <div class="dropdown__options">
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          class="dropdown__option"
          :class="{ selected: option === value }"
          @click="handleValue(option)"
        >
          <slot name="options" :option="option">
            {{ optionLabel ? option[optionLabel] : option }}
          </slot>
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
      default: '',
    },
    value: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
    },
    optionValue: {
      type: String,
      default: null,
    },
    optionLabel: {
      type: String,
      default: null,
    },
    id: {
      type: String,
      default: 'dropdown-id',
    },
  },
  data() {
    return {
      isOpen: false,
      selectedValueLabel: null,
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
      if (this.optionValue) {
        this.$emit('input', value[this.optionValue])

        this.selectedValueLabel = value[this.optionLabel]
      } else {
        this.$emit('input', value)
      }
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    validateClickArea(event) {
      // Check if click ocurred outside this component
      if (
        this.isOpen &&
        !(event.path && event.path.find((element) => element.id === this.id))
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
  height: 40px;
  border: 1px solid #092a5e;
  border-radius: 3px;
  padding: 8px 16px 10px 16px;
  color: #092a5e;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  cursor: pointer;

  &.isOpen {
    .dropdown__options {
      &::before {
        display: block;
      }

      ul {
        max-height: 200px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        opacity: 1;
        overflow: auto;
      }
    }

    .dropdown__arrow {
      transform: rotate(180deg);
    }
  }

  &.disabled {
    color: #cccccc;
    border-color: #cccccc;
    pointer-events: none;
    cursor: not-allowed;
  }

  &__arrow {
    position: absolute;
    right: 16px;
    width: 10px;
    transition: 0.3s;
  }

  &__options {
    position: absolute;
    top: 56px;
    left: 0;
    width: 100%;
    border-radius: 3px;
    padding: 0;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    z-index: 1;

    ul {
      position: relative;
      max-height: 0px;
      margin: 0;
      padding: 0;
      z-index: 1;
      opacity: 0;
      overflow: hidden;
      transition: 0.3s;
    }

    &:before {
      content: '';
      position: absolute;
      display: none;
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
