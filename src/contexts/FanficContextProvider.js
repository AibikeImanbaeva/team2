import React, { useReducer } from "react";
import axios from "axios";


export const fanficContext = React.createContext();
// export const usePost = useContext(postContext)

const INIT_STATE = {
  fanfic: [],
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FANFIC":
      return {
        ...state,
        fanfic: action.payload,
        // pages: Math.ceil(action.payload.count / 5),
      };
    default:
      return state;
  }
}

const API = "http://34.125.224.223";

const FanficContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getFanfic(id, getRead) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API}/fanfic/${id}/pages/${window.location.search}`, getRead, config);
      console.log('qwertyu')

      dispatch({
        type: "GET_FANFIC",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
    console.log('jessica')}

//   }


  async function createFanfic(newChapter, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/fanfic/${id}/pages/`, newChapter, config); //RAUF
      console.log(res);
      getFanfic();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <fanficContext.Provider
      value={{
      fanfic: state.fanfic,
      createFanfic,
      getFanfic
      }}
    >
      {children}
    </fanficContext.Provider>
  );
};

export default FanficContextProvider