import idx from 'idx';

export const initialStreetAddress = customPlace => {
  const streetNumber =
    idx(customPlace, _ => _.gmaps.address_components[0].long_name) || '';
  const streetName =
    idx(customPlace, _ => _.gmaps.address_components[1].long_name) || '';
  return `${streetNumber} ${streetName}`;
};

export const initialRestaurantName = customPlace => {
  const customPlaceStreetAddress = initialStreetAddress(customPlace);
  // ugly js for nicer UX in case of an edge case - refactor this or delete it
  if (
    customPlaceStreetAddress &&
    idx(customPlaceStreetAddress, _ => _.split(' ')) &&
    idx(customPlace, _ => _.gmaps.name.split(' '))
  ) {
    const matchingAddressValues = initialStreetAddress(customPlace)
      .split(' ')
      .filter(substringInAddress =>
        customPlace.gmaps.name.split(' ').includes(substringInAddress)
      );
    if (!matchingAddressValues) {
      return customPlace.gmaps.name || customPlace.description;
    }
  } else {
    return '';
  }
};

export const initialCity = customPlace => {
  return idx(customPlace, _ => _.gmaps.address_components[3].long_name) || '';
};

export const initialRegion = customPlace => {
  return idx(customPlace, _ => _.gmaps.address_components[2].long_name) || '';
};

export const initialPlz = customPlace => {
  const plz = idx(
    customPlace,
    _ => _.gmaps.address_components[6].long_name.length
  );
  if (plz === 5 && !/[a-z]/.test(plz)) {
    return idx(customPlace, _ => _.gmaps.address_components[6].long_name);
  } else {
    return '';
  }
};
