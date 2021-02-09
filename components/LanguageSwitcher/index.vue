<template>
  <div class="language-switcher">
    <nuxt-link :to="switchLocalePath('en-us')">
      <img
        class="language-switcher__image"
        src="../../assets/images/united-states.svg"
        alt="USA flag"
      />
    </nuxt-link>

    <nuxt-link :to="switchLocalePath('pt-BR')">
      <img
        class="language-switcher__image"
        src="../../assets/images/brazil.svg"
        alt="Brazil flag"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
}
</script>

<style lang="scss" scoped>
.language-switcher {
  display: flex;

  &__image {
    width: 25px;
    height: 25px;
    cursor: pointer;

    &:first-child {
      margin-right: 4px;
    }
  }

  a {
    height: fit-content;
  }
}
</style>
