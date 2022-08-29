import React from "react";
import { Text, View } from "react-native";

import { Context as UserContext } from "../../contexts/userContext";

const ResolveAuth = () => {
  const { tryLocalSignIn } = React.useContext(UserContext);

  React.useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default ResolveAuth;
