import sendRequest from './send-request';

const BASE_URL = '/api/orders';

// Retrieve an unpaid order for the logged in user
export function getFavorite() {
  return sendRequest(`${BASE_URL}/favorite`);
}

// Add an bike to the favorite
export function addBikeToFavorite(bikeId) {
  // Just send bikeId for best security (no pricing)
  return sendRequest(`${BASE_URL}/favorite/bikes/${bikeId}`, 'POST');
}

// Update the bike's qty in the favorite
// Will add the bike to the order if not currently in the favorite
// Sending info via the data payload instead of a long URL
export function setBikeQtyInFavorite(bikeId, newQty) {
  return sendRequest(`${BASE_URL}/favorite/qty`, 'PUT', { bikeId, newQty });
}

// Updates the order's (favorite's) isPaid property to true
export function save() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/favorite/save`, 'POST');
}
