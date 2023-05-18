/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { LOGGED_IN, LOGGED_OUT } from "../constant/userTypes";
import StoreContext from "./store-context";

const initialState = {
  isUserLoggedIn: false,
  userData: {},
  updateUserAuthetication: {
    userisLoggedIn: () => {},
    userisLoggedOut: () => {},
  },
};

const userReducer = (state, action) => {
  if (action.type === LOGGED_IN) {
    return {
      ...state,
      isUserLoggedIn: true,
      userData: action.userDetail,
    };
  }

  if (action.type === LOGGED_OUT) {
    return {
      ...state,
      isUserLoggedIn: false,
      userData: {},
    };
  }

  return state;
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const userIsLoggedIn = (userLoginDetail) => {
    dispatch({ type: LOGGED_IN, userDetail: userLoginDetail });
  };

  const userIsLoggedOut = () => {
    dispatch({ type: LOGGED_OUT });
  };

  const userStateData = {
    ...state,
    updateUserAuthetication: {
      userIsLoggedIn,
      userIsLoggedOut,
    },
  };

  return (
    <StoreContext.Provider value={userStateData}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
