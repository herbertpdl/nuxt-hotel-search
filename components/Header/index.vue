<template>
  <header class="header">
    <div class="container">
      <Card :title="$t('header.cardTitle')">
        <Dropdown v-model="selectedCountry" :options="options" />

        <input type="number" v-model="adults" />
      </Card>
    </div>
  </header>
</template>

<script>
import Card from '../Card'
import Dropdown from '../Dropdown'

export default {
  name: 'Header',
  components: {
    Card,
    Dropdown,
  },
  data() {
    return {
      selectedCountry: null,
      adults: 0,
      options: [
        this.$t('destinationOptions.portugal'),
        this.$t('destinationOptions.spain'),
        this.$t('destinationOptions.italy'),
        this.$t('destinationOptions.brazil'),
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 300px;
  padding: 16px 0;
  background-color: #1e4785;

  .card {
    width: 380px;
    padding: 8px 16px 16px 16px;
  }

  .dropdown {
    width: 50%;
  }
}
</style>
