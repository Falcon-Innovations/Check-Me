import React from 'react';

/**
 * It returns a callback that calls dispatch if the component is mounted
 * @param dispatch - The dispatch function from the useReducer hook.
 * @returns A function that will dispatch an action if the component is mounted.
 * The function helps us avoid memory leaks
 */
function useSafeDispatch(dispatch) {
  const mounted = React.useRef(false);

  React.useLayoutEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  }, []);

  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch]
  );
}

export default useSafeDispatch;
