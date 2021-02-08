import Amadeus from 'amadeus'

// TODO - Move keys to another place
const amadeus = new Amadeus({
  clientId: '5r4Nm0rL1kw8QlcAPc9FfI36W4931Adx',
  clientSecret: '4fFK7UEgKat8PNEX',
})

export const getHotelList = (data) =>
  amadeus.shopping.hotelOffers
    .get({
      ...data,
      pageLimit: 10,
    })
    .then((resp) => resp.data)
