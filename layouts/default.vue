<template>
  <div>
    <LoadingSpinner v-if="isLoading" />
    <Nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import LoadingSpinner from '../components/LoadingSpinner'

export default {
  name: 'Default',
  components: {
    LoadingSpinner,
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
}
</script>

<style></style>
