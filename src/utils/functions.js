export const pluralize = (word, items) => {
  if (!items) {
    return `0 ${word}s`;
  } else if (items.length === 1) {
    return `1 ${word}`;
  } else {
    return `${items.length} ${word}s`;
  }
};

export const getPhoto = item => {
  if (item.photo) {
    return item.photo;
  } else if (item.gmaps) {
    return item.gmaps.photos ? item.gmaps.photos[0].getUrl() : item.gmaps.icon;
  } else {
    return null;
  }
};

export const fetchAllPhotos = item => {
  if (item.gmaps && item.gmaps.photos) {
    return item.gmaps.photos.map(photo => photo.getUrl());
  } else if (item.gmaps.icon) {
    return item.gmaps.icon;
  } else {
    return null;
  }
};
