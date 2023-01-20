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

  async function getFanfic(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
console.log(id)                                           
      const res = await axios(
        `${API}/fanfic/${id}/pages/${window.location.search}`,config);
      console.log('qwertyu')
   
      dispatch({
        type: "GET_FANFIC",
        payload: res.data,
      });

      const { data } = await axios(`${API}/fanfic/${id}/pages/`)
      console.log(data)
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

  
  const addComment = async (comment, id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.post(`${API}/${id}/comment/`, comment, config)
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
      getFanfic,
      addComment
      }}
    >
      {children}
    </fanficContext.Provider>
  );
};

export default FanficContextProvider