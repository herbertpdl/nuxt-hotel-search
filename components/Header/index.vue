<template>
  <header class="header">
    <div class="container">
      <Card :title="$t('header.cardTitle')" />
    </div>
  </header>
</template>

<script>
import Card from '../Card'

export default {
  name: 'Header',
  components: {
    Card,
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
    padding: 8px 16px 16px 16px;
  }
}
</style>
