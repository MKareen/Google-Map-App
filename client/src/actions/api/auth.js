import axios from 'axios';

export const signupUser = (formProps) => {
  return (axios.post('http://localhost:3090/signup', formProps));
}

export const signinUser = (formProps) => {
  return (axios.post('http://localhost:3090/signin', formProps));
}
