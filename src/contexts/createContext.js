import React, { useReducer } from 'react';
import useSafeDispatch from '../hooks/useSafeDispatch';

/**
 * @param {object} defaultValue
 * @param {function} reducer
 * @param {object} actions
 * @returns {object} context,provider
 *
 */

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);
    const safeDispatch = useSafeDispatch(dispatch);

    const boundActions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](safeDispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
