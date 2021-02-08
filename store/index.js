export const state = () => ({
  loading: false,
})

export const getters = {
  isLoading: (state) => {
    return state.loading
  },
}

export const mutations = {
  setLoading(state, value) {
    state.loading = value
  },
}
