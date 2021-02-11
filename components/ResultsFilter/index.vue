<template>
  <div class="results-filter">
    <Dropdown :options="orderOptions">
      <template #options="slotProps">
        {{ $t(`resultsFilter.${slotProps.option.name}`) }}
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
      orderOptions: [
        {
          name: 'name',
          value: 'nameAsc',
          icon: 'arrow-up',
        },
        {
          name: 'name',
          value: 'nameDesc',
          icon: 'arrow-down',
        },
        {
          name: 'value',
          value: 'valueAsc',
          icon: 'arrow-up',
        },
        {
          name: 'value',
          value: 'valueDesc',
          icon: 'arrow-down',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.results-filter {
  .dropdown {
    width: 150px;
  }
}
</style>
