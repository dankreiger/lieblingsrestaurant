import idx from 'idx';

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
    return idx(item, _ => _.gmaps.photos[0].getUrl()) || item.gmaps.icon;
  } else {
    return null;
  }
};

export const fetchAllPhotos = item => {
  if (idx(item, _ => _.gmaps.photos)) {
    return item.gmaps.photos.map(photo => {
      try {
        return photo.getUrl();
      } catch {
        return 'https://placebear.com/g/965/787';
      }
    });
  } else if (item.gmaps.icon) {
    return [item.gmaps.icon];
  } else {
    return null;
  }
};

export const cardinalize = num => {
  if (num === 1) {
    return '1st';
  } else if (num === 2) {
    return '2nd';
  } else if (num === 3) {
    return '3rd';
  } else {
    return `${num}th`;
  }
};
