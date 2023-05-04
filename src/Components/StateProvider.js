//setup data layer - react context API
// We need this to track the basket

// import { createContext } from "react";
import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//this is how we use it in a component
export const useStateValue = () => useContext(StateContext);
