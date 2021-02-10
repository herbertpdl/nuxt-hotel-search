<template>
  <div class="hotel">
    <p>teste</p>
    <p>{{ hotel }}</p>
    <p>{{ teste }}</p>
  </div>
</template>

<script>
import { getHotelOffer } from '../../services'

export default {
  name: 'Hotel',
  async asyncData({ params }) {
    const hotel = params.hotel // When calling /abc the hotel will be "abc"
    let teste = ''
    await getHotelOffer('HLLON101').then((resp) => {
      teste = resp
    })
    return { hotel, teste }
  },
}
</script>

<style lang="scss" scoped>
.hotel {
  background-color: red;
}
</style>
