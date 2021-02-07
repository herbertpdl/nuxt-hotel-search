<template>
  <div>
    <LoadingSpinner v-if="false" />
    <Nuxt />
  </div>
</template>

<script>
import LoadingSpinner from '../components/LoadingSpinner'

export default {
  name: 'Default',
  components: {
    LoadingSpinner,
  },
}
</script>

<style>
* {
  font-family: 'TUITypeLight';
}

body {
  margin: 0;
}

h1,
p {
  margin-top: 0;
}
</style>
