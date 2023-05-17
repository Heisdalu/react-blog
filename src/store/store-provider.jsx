/* eslint-disable react/prop-types */
import { useState } from "react";
import StoreContext from "./store-context";

const StoreProvider = (props) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const userisLoggedIn = () => {
    setIsUserLoggedIn(true);
  };
  const userisLoggedOut = () => {
    setIsUserLoggedIn(false);
  };

  const userData = {
    isUserLoggedIn,
    updateUserAuthetication: {
      userisLoggedIn,
      userisLoggedOut,
    },
  };

  return (
    <StoreContext.Provider value={userData}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
