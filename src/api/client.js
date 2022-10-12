import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const BASE_URL = 'https://check-me-backend.herokuapp.com/';

let token;
const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (err) {
    console.error(err);
  }
};

getToken()
  .then((result) => {
    token = result;
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => console.log(token));

const headers = {
  'Content-type': 'Application/json',
  Authorization: `Bearer ${token}`,
};

export default axios.create({
  baseURL: BASE_URL,
  headers: { ...headers },
});
