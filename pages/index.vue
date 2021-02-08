<template>
  <div>
    <div>
      <h1 class="title">{{ $t('welcome') }}</h1>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('pt_BR')">Português</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style></style>
