import { createContext, useReducer } from "react";

export const UserContext = createContext();

const userReducer = (state, action) => {
  if (action.type === "VISITED") {
    return { ...state, userData: action.payload };
  } else {
    return state;
  }
};

export function UserProvider({ children }) {
  // initial value is empty user
  const [state, dispatch] = useReducer(userReducer, {
    userData: null,
  });

  //   sign in dispatcher
  const visitedContext = (user) => {
    dispatch({ type: "VISITED", payload: user });
  };

  //   we provide the user and two functions to all the components
  return (
    <UserContext.Provider value={{ ...state, visitedContext }}>
      {children}
    </UserContext.Provider>
  );
}
