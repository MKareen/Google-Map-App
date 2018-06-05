import axios from 'axios';

export const FETCH_EVENTS = 'fetch-events';

const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const EbToken = 'D2OVINUDXO2ZEUG4YNIA';

export function fetchEvents(name) {
  let url = `${ROOT_URL}?q=${name}&sort_by=date&expand=venue&token=${EbToken}`;
  return async dispatch => {
    const response = await axios.get(url);
    dispatch({
      type: FETCH_EVENTS,
      payload: response
    });
  };
};
