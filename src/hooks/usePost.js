import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { config } from "../utility";
// import UserContext from "../contexts/UserContext";

const usePost = (url, method = "POST") => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const postAxiosData = async (data) => {
    try {
      const token = await AsyncStorage.getItem("token");
      setLoading(true);

      await fetch(`${config.app.api_url}/${url}`, {
        method: method,
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          setLoading(false);
          if (
            res.statusCode !== null &&
            res.statusCode !== undefined &&
            res.statusCode >= 300
          ) {
            console.log("res err", res);
            Alert.alert("Oups!", "Something went wrong please try again.");
          } else if (res.data && res.status === "success") {
            console.log("res", res);
            Alert.alert("success!", res.message, [
              {
                title: "Ok",
                onPress: () => {
                  navigation.goBack();
                },
              },
            ]);
            setResult(res);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", err);
          Alert.alert("Oups!", "Something went wrong please try again.");
        });
    } catch (err) {
      console.log("err", err);
      Alert.alert("Oups!", "Something went wrong please try again.");
      setLoading(false);
    }
    console.log("result", result);
    return result;
  };
  return [loading, postAxiosData];
};

export default usePost;
