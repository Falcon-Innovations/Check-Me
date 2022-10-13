import useFetch from "../hooks/useFetch";
import { BASE_URL } from "./client";

const url = `${BASE_URL}api/v1/specialists`;

export const useSpecialists = () => {
  const { loading, data, error, fetchData } = useFetch(url);
  return { loading, data, error, fetchData };
};

export const useSpecialist = (id) => {
  const { loading, data, error, fetchData } = useFetch(`${url}/${id}`);
  return { loading, data, error, fetchData };
};
