<template>
  <div class="loading-spinner">
    <img src="../../assets/images/spinner.svg" alt="loading" />
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style lang="scss" scoped>
.loading-spinner {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;

  img {
    width: 60px;
    height: 60px;
  }
}
</style>
