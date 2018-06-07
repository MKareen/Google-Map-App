import axios from 'axios';

const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const EbToken = 'D2OVINUDXO2ZEUG4YNIA';

export const getEvents = (name) => {
  const url = `${ROOT_URL}?q=${name}&sort_by=date&expand=venue&token=${EbToken}`;
  return axios.get(url);
}