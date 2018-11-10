import {
  array,
  arrayOf,
  bool,
  func,
  oneOfType,
  number,
  shape,
  string
} from 'prop-types';

export const favoritesTypes = {
  favorites: arrayOf(
    shape({
      description: string,
      label: string,
      placeId: string,
      gmaps: shape({
        address_components: arrayOf(
          shape({
            long_name: string,
            short_name: string,
            types: arrayOf(string)
          })
        ),
        adr_address: string,
        formatted_address: string,
        formatted_phone_number: string,
        geometry: shape({
          location: shape({
            lat: oneOfType([number, func]),
            lng: oneOfType([number, func])
          }),
          viewport: shape({
            south: number,
            west: number,
            north: number,
            east: number
          })
        }),
        icon: string,
        id: string,
        international_phone_number: string,
        name: string,
        opening_hours: shape({
          open_now: bool,
          periods: arrayOf(
            shape({
              open: shape({
                day: number,
                time: string,
                hours: number,
                minutes: number
              })
            })
          ),
          weekday_text: arrayOf(string)
        }),
        photos: array,
        place_id: string,
        plus_code: shape({
          compound_code: string,
          global_code: string
        }),
        rating: number,
        reference: string,
        reviews: arrayOf(
          shape({
            author_name: string,
            author_url: string,
            language: string,
            profile_photo_url: string,
            rating: number,
            relative_time_description: string,
            text: string,
            time: number
          })
        ),
        scope: string,
        types: array,
        url: string,
        utc_offset: number,
        vicinity: string,
        website: string,
        html_attributions: array
      }),
      location: shape({
        lat: number,
        lng: number
      }),
      photo: string,
      photos: arrayOf(string),
      favorited: bool,
      rating: number
    })
  )
};
