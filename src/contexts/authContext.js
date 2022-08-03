import { Alert } from 'react-native';
import createContext from './createContext';
import client from '../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as customNav from '../navigation/customNavigator';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {
        ...state,
        errorMessage: '',
        message: 'Account created !',
      };
    case 'SIGN_IN':
      return {
        ...state,
        message: 'logged in succesfully',
        errorMessage: '',
        token: action.payload.token,
        user: action.payload.user,
      };
    case 'REPORT_ERROR':
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case 'SIGN_OUT':
      return { ...state, token: null, account: null, user: null };
    default:
      return state;
  }
};

const logout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    customNav.navigate('Login');
    dispatch({ type: 'SIGN_OUT' });
  } catch (err) {
    console.error(err);
  }
};

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await client.post('api/v1/users/login', {
        email,
        password,
      });

      const { token, data: userData } = data;

      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(userData?.user));
      dispatch({
        type: 'SIGN_IN',
        payload: { token, user: data?.data?.user },
      });
      Alert.alert('Success', `Logged in as ${email}`);
      customNav.navigate('Root');
    } catch (error) {
      console.log(error.response);
      Alert.alert(
        'Error',
        error?.response?.data?.message
          ? `${error?.response?.data?.message}`
          : 'Something went wrong, please try again later.'
      );
    }
  };

const signUp =
  (dispatch) =>
  async ({ name, email, telephone, password }) => {
    try {
      const response = await client.post('api/v1/users/signup', {
        name,
        email,
        telephone,
        password,
      });

      if (response.status === 201) {
        Alert.alert('Success', `Account created for ${email}`);
        customNav.navigate('Login', { email });
        dispatch({ type: 'SIGN_UP' });
      }
    } catch (err) {
      Alert.alert(
        'Error',
        err.response.data.message
          ? `${err.response.data.message}`
          : 'Something went wrong, please try again later.'
      );
      console.log(err);
      dispatch({ type: 'REPORT_ERROR', payload: err });
    }
  };

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  const user = await AsyncStorage.getItem('user');

  if (token && user) {
    customNav.navigate('Root');
    dispatch({
      type: 'SIGN_IN',
      payload: { token, user: JSON.parse(user) },
    });
  } else {
    customNav.navigate('Login');
  }
};

export const { Context, Provider } = createContext(
  authReducer,
  { signUp, logout, signIn, tryLocalSignIn },
  {
    token: null,
    message: '',
    errorMessage: '',
    user: { name: '', email: '' },
    account: null,
  }
);
