export const state = () => ({
  loading: false,
  hotelsList: [],
  weatherData: {},
  searchData: {
    country: null,
    city: null,
  },
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
  searchData: (state) => {
    return state.searchData
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
  setSearchData(state, value) {
    state.searchData = { ...value }
  },
}
