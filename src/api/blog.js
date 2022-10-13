import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import useFetch from '../hooks/useFetch';
import client, { BASE_URL } from './client';

const url = 'https://check-me-backend.herokuapp.com/api/v1/articles';

export const useBlogs = () => {
  const { loading, data, error } = useFetch(url);
  return { loading, data, error };
};

export const voteBlog = async (articleId) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await client.patch(
      `${url}/${articleId}/vote`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response?.data?.data?.message);
  } catch (error) {
    console.log(error);
    Alert.alert(
      'Error',
      error?.response?.data?.message
        ? `${error?.response?.data?.message}`
        : 'Something went wrong, please try again later.'
    );
  }
};
