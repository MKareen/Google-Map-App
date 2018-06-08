import axios from 'axios';
import { serverHost } from '../../config';

export const signupUser = (formProps) => {
  return (axios.post(`${serverHost}/signup`, formProps));
}

export const signinUser = (formProps) => {
  return (axios.post(`${serverHost}/signin`, formProps));
}
