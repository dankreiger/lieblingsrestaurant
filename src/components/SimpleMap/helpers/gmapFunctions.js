// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach(place => {
    bounds.extend(new maps.LatLng(place.location.lat, place.location.lng));
  });
  return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

// Fit map to its bounds after the api is loaded
export const apiIsLoaded = (map, maps, places) => {
  // Get bounds by our places
  if (places.length) {
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);

    // Don't zoom in too closely for 1 item
    if (places.length === 1) {
      map.setZoom(Math.min(map.getZoom(), 12));
    }
  }
};

export const appendGmapScript = () => {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = `https://maps.google.com/maps/api/js?key=${
    process.env.REACT_APP_RESTAURANT_API_KEY
  }&v=3.exp&libraries=geometry,drawing,places`;
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);

  return s;
};
