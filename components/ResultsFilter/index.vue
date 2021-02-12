<template>
  <div class="results-filter">
    <label>{{ $t('results.orderBy') }}</label>
    <Dropdown
      v-model="selectedOption"
      :options="orderOptions"
      option-value="value"
    >
      <template #value="slotProps">
        {{ $t(`resultsFilter.${slotProps.value}`) }}

        <img
          class="results-filter__option-icon"
          :src="
            returnOptionIcon(
              slotProps.value.includes('Desc') ? 'arrow-down' : 'arrow-up'
            )
          "
        />
      </template>
      <template #options="slotProps">
        {{ $t(`resultsFilter.${slotProps.option.value}`) }}

        <img
          :src="returnOptionIcon(slotProps.option.icon)"
          class="results-filter__option-icon"
        />
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from '../Dropdown'

export default {
  name: 'ResultsFilter',
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedOption: null,
      orderOptions: [
        {
          value: 'nameAsc',
          icon: 'arrow-up',
        },
        {
          value: 'nameDesc',
          icon: 'arrow-down',
        },
        {
          value: 'valueAsc',
          icon: 'arrow-up',
        },
        {
          value: 'valueDesc',
          icon: 'arrow-down',
        },
      ],
    }
  },
  watch: {
    selectedOption(newValue) {
      this.$emit('filterResults', newValue)
    },
  },
  methods: {
    returnOptionIcon(iconName) {
      return require(`../../assets/images/${iconName}.svg`)
    },
  },
}
</script>

<style lang="scss">
.results-filter {
  &__option-icon {
    width: 10px;
    height: 10px;
    margin-left: 8px;
  }

  .dropdown {
    width: 150px;

    &__option {
      display: flex;
      align-items: center;
    }
  }
}
</style>
