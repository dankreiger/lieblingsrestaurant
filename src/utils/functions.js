import { NAVIGATION_HEIGHT } from '../constants';

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

export const fixedTopButton = () =>
  `
  background: #f57c00;
  font-size: 2em;
  display: flex;
  align-items: center;
  height: ${NAVIGATION_HEIGHT}px;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  flex-grow: 1;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus {
    outline: none;
  }

  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
`;
