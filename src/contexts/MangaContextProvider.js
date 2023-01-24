import axios from 'axios';
import React, { createContext, useReducer } from 'react';

export const mangaContext = createContext();

const INIT_STATE = {
  manga: []
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MANGA":
      return {
        ...state,
        manga: action.payload
      };
  }
}

const API = "http://34.125.224.223";

const MangaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getManga() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };


      const { data } = await axios(`${API}/manga/`, config);

      console.log(data)

      dispatch({
        type: "GET_MANGA",
        payload: data,
      })

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <mangaContext.Provider
      value={{
        getManga,
      }}
    >
      {children}
    </mangaContext.Provider>
  );
};

export default MangaContextProvider;