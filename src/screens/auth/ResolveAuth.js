import React from 'react';
import { Context as AuthContext } from '../../contexts/authContext';

const ResolveAuth = () => {
  const { tryLocalSignIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    tryLocalSignIn();
  }, []);
  return null;
};

export default ResolveAuth;
