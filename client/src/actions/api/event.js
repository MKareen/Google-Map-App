import axios from 'axios';
import { EbToken, EventBritesApi } from '../../config';

export const getEvents = (name) => {
  const url = `${EventBritesApi}?q=${name}&sort_by=date&expand=venue&token=${EbToken}`;
  return axios.get(url);
}