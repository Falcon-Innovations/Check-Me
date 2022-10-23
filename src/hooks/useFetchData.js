import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useContext,
} from "react";

const useDataFetching = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    const token = await AsyncStorage.getItem("token");

    setLoading(true);

    try {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await data.json();

      if (result) {
        setData(result);
        // console.log('result', result);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
    // TODO: delete cash
  }, [url]);

  return [loading, error, data, fetchData];
};

export default useDataFetching;
