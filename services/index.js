import axios from 'axios'

// create an axios instance with for Amadeus API requests
export const HTTP_AMADEUS = axios.create({
  baseURL: 'https://test.api.amadeus.com/v2',
  headers: {
    Authorization: 'Bearer 4tUC8DuNxf4dW8PGXR8jVCiG1WKE',
  },
})

export const getHotelList = (query) =>
  HTTP_AMADEUS.get(`/shopping/hotel-offers?${query}`).then((resp) => resp.data)
