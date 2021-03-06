import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { AUTH_USER, AUTH_ERROR } from './types';
import { signupUser, signinUser } from './api/auth';


function *signup({ payload: { formProps, callback } }) {
  try {
    const response = yield call(signupUser, formProps);
    yield put({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    yield callback();
  } catch(e) {
    yield put({ type: AUTH_ERROR, payload: 'Email in use'});
  }
}


function *signin({ payload: { formProps, callback } } ) {
  try {
    const response = yield call(signinUser, formProps);
    yield put({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    yield callback();
  } catch(e) {
    yield put({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
}


export const authSaga = [
  takeLatest('AUTH_USER_SIGNUP', signup),
  takeLatest('AUTH_USER_SIGNIN', signin)
];


export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
