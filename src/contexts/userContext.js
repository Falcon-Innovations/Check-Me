import { Alert } from "react-native";
import createContext from "./createContext";
import client from "../api/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as customNav from "../navigation/customNavigator";

const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        errorMessage: "",
        message: "Account created !",
      };
    case "SIGN_IN":
      return {
        ...state,
        message: "logged in succesfully",
        errorMessage: "",
        token: action.payload.token,
        user: action.payload.user,
      };
    case "PROFILE_UPDATE":
      return {
        ...state,
        errorMessage: "",
        message: "Profile updated !",
        user: action.payload.user,
      };
    case "REPORT_ERROR":
      return {
        ...state,
        errorMessage: action.payload.error,
      };
    case "SIGN_OUT":
      return { ...state, token: null, account: null, user: null };
    default:
      return state;
  }
};

const logout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("user");
    await AsyncStorage.removeItem("token");
    customNav.navigate("Login");
    dispatch({ type: "SIGN_OUT" });
  } catch (err) {
    console.error(err);
  }
};

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const { data } = await client.post("api/v1/users/login", {
        email,
        password,
      });

      const { token, data: userData } = data;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(userData?.user));
      dispatch({
        type: "SIGN_IN",
        payload: { token, user: data?.data?.user },
      });
      Alert.alert("Success", `Logged in as ${email}`);
      customNav.navigate("Root");
    } catch (error) {
      console.log(error?.data);
      Alert.alert(
        "Error",
        error?.response?.data?.message
          ? `${error?.response?.data?.message}`
          : "Something went wrong, please try again later."
      );
    }
  };

const sendOTP =
  (dispatch) =>
  async ({ phoneNumber }) => {
    try {
      const { data } = await client.post("api/v1/users/sendOTP", {
        phoneNumber,
      });
      if (data.message) {
        Alert.alert("Success", `OTP sent to ${phoneNumber}`);
        customNav.navigate("OTPVerification", { phoneNumber });
      }
    } catch (error) {
      console.log(error?.data);
      Alert.alert(
        "Error",
        error?.response?.data?.message
          ? `${error?.response?.data?.message}`
          : "Something went wrong, please try again later."
      );
    }
  };

const checkOTP =
  (dispatch) =>
  async ({ phoneNumber, smsCode }) => {
    try {
      const { data } = await client.post("api/v1/users/checkOTP", {
        phoneNumber,
        smsCode,
      });

      const { token, data: userData } = data;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(userData?.user));
      dispatch({
        type: "SIGN_IN",
        payload: { token, user: data?.data?.user },
      });
      Alert.alert("Success", `Logged in`);
      customNav.navigate("Root");
    } catch (error) {
      console.log(error?.data);
      Alert.alert(
        "Error",
        error?.response?.data?.message
          ? `${error?.response?.data?.message}`
          : "Something went wrong, please try again later."
      );
    }
  };

const signUp =
  (dispatch) =>
  async ({ name, email, telephone }) => {
    try {
      const response = await client.post("api/v1/users/signup", {
        name,
        email,
        telephone,
      });

      if (response.status === 201) {
        Alert.alert("Success", `OTP sent to ${telephone}`);
        customNav.navigate("OTPVerification", { phoneNumber: telephone });
        dispatch({ type: "SIGN_UP" });
      }
    } catch (err) {
      Alert.alert(
        "Error",
        err.response.data.message
          ? `${err.response.data.message}`
          : "Something went wrong, please try again later."
      );
      console.log(err);
      dispatch({ type: "REPORT_ERROR", payload: err });
    }
  };

const updateProfile =
  (dispatch) =>
  async ({ name, email, bio, birthDate }) => {
    const token = await AsyncStorage.getItem("token");
    try {
      const response = await client.patch(
        "api/v1/users/updateMe",
        {
          name,
          email,
          bio,
          birthDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const { data: userData } = response?.data;
        await AsyncStorage.setItem("user", JSON.stringify(userData?.user));
        dispatch({
          type: "PROFILE_UPDATE",
          payload: { user: userData?.user },
        });
        Alert.alert("Success", `Profile updated`);
      }
    } catch (err) {
      Alert.alert(
        "Error",
        err.response.data.message
          ? `${err.response.data.message}`
          : "Something went wrong, please try again later."
      );
      console.log(err);
      dispatch({ type: "REPORT_ERROR", payload: err });
    }
  };

const updateMyAvatar =
  (dispatch) =>
  async ({ file }) => {
    const token = await AsyncStorage.getItem("token");
    const user = await AsyncStorage.getItem("user");
    const parsedUser = JSON.parse(user);

    const formData = new FormData();

    formData.append("image", {
      name: "image",
      uri: file,
      type: "image/jpeg",
    });

    try {
      const response = await client.patch(
        "api/v1/users/updateAvatar",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        const updatedUser = {
          ...parsedUser,
          avatar: response?.data?.data?.avatar,
        };
        dispatch({
          type: "PROFILE_UPDATE",
          payload: { user: updatedUser },
        });
        await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        Alert.alert("Success", "Profile image updated");
      }
    } catch (err) {
      Alert.alert(
        "Error",
        err.response.data.message
          ? `${err.response.data.message}`
          : "Something went wrong, please try again later."
      );
      console.log(err);
      dispatch({ type: "REPORT_ERROR", payload: err });
    }
  };

const updatePassword =
  (dispatch) =>
  async ({ oldPassword, newPassword }) => {
    try {
      const { data } = await client.patch("api/v1/users/updatePassword", {
        oldPassword,
        newPassword,
      });

      const { token, data: userData } = data;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(userData?.user));
      dispatch({
        type: "SIGN_IN",
        payload: { token, user: data?.data?.user },
      });
      Alert.alert("Success", `Logged in as ${email}`);
      customNav.navigate("Root");
    } catch (error) {
      console.log(error?.data);
      Alert.alert(
        "Error",
        error?.response?.data?.message
          ? `${error?.response?.data?.message}`
          : "Something went wrong, please try again later."
      );
    }
  };

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  const user = await AsyncStorage.getItem("user");

  if (token && user) {
    customNav.navigate("Root");
    dispatch({
      type: "SIGN_IN",
      payload: { token, user: JSON.parse(user) },
    });
  } else {
    customNav.navigate("Login");
  }
};

export const { Context, Provider } = createContext(
  userReducer,
  {
    signUp,
    signIn,
    sendOTP,
    checkOTP,
    logout,
    tryLocalSignIn,
    updateProfile,
    updateMyAvatar,
    updatePassword,
  },
  {
    token: null,
    message: "",
    errorMessage: "",
    user: { name: "", email: "" },
    account: null,
  }
);
