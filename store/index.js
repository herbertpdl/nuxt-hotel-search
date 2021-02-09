export const state = () => ({
  loading: false,
  hotelsList: [],
  weatherData: {},
})

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
  hotelsList: (state) => {
    return state.hotelsList
  },
  weatherData: (state) => {
    return state.weatherData
  },
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
  setHotelsList(state, value) {
    state.hotelsList = [...value]
  },
  setWeatherData(state, value) {
    state.weatherData = value
  },
}
