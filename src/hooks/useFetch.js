import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useReducer, useRef } from 'react';

function useFetch(url, options) {
  const cache = useRef({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false);

  const initialState = {
    error: undefined,
    data: undefined,
  };

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState };
      case 'fetched':
        return { ...initialState, data: action.payload };
      case 'error':
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'loading' });
    const token = await AsyncStorage.getItem('token');

    // If a cache exists for this url, return it
    if (cache.current[url]) {
      dispatch({ type: 'fetched', payload: cache.current[url] });
      return;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      cache.current[url] = data;
      if (cancelRequest.current) return;

      dispatch({ type: 'fetched', payload: data });
    } catch (error) {
      if (cancelRequest.current) return;

      dispatch({ type: 'error', payload: error });
    }
  };

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return;

    cancelRequest.current = false;

    fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { ...state, fetchData };
}

export default useFetch;
