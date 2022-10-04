import useFetch from '../hooks/useFetch';
import { BASE_URL } from './client';

const url = `${BASE_URL}api/v1/hospitals`;

export const useHospitals = () => {
  const { loading, data, error } = useFetch(url);
  return { loading, data, error };
};

export const useHospital = (id) => {
  const { loading, data, error } = useFetch(`${url}/${id}`);
  return { loading, data, error };
};
