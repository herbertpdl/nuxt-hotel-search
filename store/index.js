export const state = () => ({
  loading: false,
  hotelsList: [],
})

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
  hotelsList: (state) => {
    return state.hotelsList
  },
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setHotelsList(state, value) {
    state.hotelsList = [...value]
  },
}
