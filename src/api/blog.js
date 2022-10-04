import useFetch from '../hooks/useFetch';

const url = 'https://check-me-backend.herokuapp.com/api/v1/blogs';

const useBlogs = () => {
  const { loading, data, error } = useFetch(url);
  return { loading, data, error };
};
