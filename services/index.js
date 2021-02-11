import axios from 'axios'
import Amadeus from 'amadeus'

// TODO: Move keys to another place
const amadeus = new Amadeus({
  clientId: '5r4Nm0rL1kw8QlcAPc9FfI36W4931Adx',
  clientSecret: '4fFK7UEgKat8PNEX',
})

const accuweatherKey = '0aZZpopkXrnxwReeBYm0AW1116nhnvnG'

export const getHotelList = (data) =>
  amadeus.shopping.hotelOffers
    .get({
      ...data,
      pageLimit: 10,
    })
    .then((resp) => resp.data)

export const getHotelOffer = (id) =>
  amadeus.shopping.hotelOffersByHotel
    .get({ hotelId: id })
    .then((resp) => resp.data)

export const getLocationKey = (city, lang) =>
  axios
    .get(
      `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${accuweatherKey}&q=${city}&language=${lang}`
    )
    .then((resp) => resp.data)

export const getCurrentConditions = (locationKey, lang) =>
  axios
    .get(
      `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${accuweatherKey}&language=${lang}`
    )
    .then((resp) => resp.data)
