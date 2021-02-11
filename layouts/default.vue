<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Header from '../components/Header'
import LoadingSpinner from '../components/LoadingSpinner'

export default {
  name: 'Default',
  components: {
    Header,
    LoadingSpinner,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
}
</script>

<style lang="scss">
.default-layout {
  min-height: 100vh;
}
</style>
