import React, { useReducer } from "react";
import axios from "axios";


export const fanficContext = React.createContext();
// export const usePost = useContext(postContext)

const INIT_STATE = {
  fanfic: [],
  chapter: {},
  pages: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FANFIC":
      return {
        ...state,
        fanfic: action.payload,
      };
    case "GET_FANFIC_CHAPTER":
      return {
        ...state,
        chapter: action.payload,
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
      const res = await axios(
        `${API}/fanfic/${id}/${window.location.search}`, config);

      console.log(res)
      dispatch({
        type: "GET_FANFIC",
        payload: res.data,
      });

      const { data } = await axios(`${API}/fanfic/${id}/pages/`)
      console.log(data)
    } catch (err) {
      console.log(err);
    }
    // console.log('jessica')
  }

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

      // * Удалил getFanfic(), тк он запрашивает только на один

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

      let res = await axios.post(`${API}/fanfic/${id}/comment/`, comment, config)  // * Отсутсвовало /fanfic/
      console.log(res);
      getFanfic(id);
    } catch (err) {
      console.log(err);
    }
  }

  const deleteComment = async (text, id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.delete(`${API}/fanfic/${id}/comment/`,text, config)  // * Отсутсвовало /fanfic/
      console.log(res);
          

            getFanfic(id)
      
          } catch (error) {
            console.log(error)
          }
        }


      // let deleteCommentForm = new FormData();
      // deleteCommentForm.append("id",)


      // let { data } = await axios.delete(`${API}/fanfic/${fanficId}/comment/`, deleteCommentForm, config)

      // fetch('https://example.com/profile', {
      //   method: 'DELETE', // or 'PUT'
      //   headers: {
      //     'Content-Type': 'application/json',
      //     "Authorization": Authorization,
      //   },
      //   body: JSON.stringify(deleteCommentForm),
      // })

      // await fetch('http://httpbin.org/delete', {
      //   method: 'DELETE',
      //   body: JSON.stringify(deleteCommentForm),
      //   headers: {
      //     "Authorization": Authorization
      //   }
      // })
      // await axios.delete(`${API}/fanfic/${fanficId}/comment/`, {
      //   headers: {
      //     "Authorization": Authorization,
      //   },
      //   body: {
      //     "text": text,
      //     "id": `${commentId}`
      //   }
      // });


      // console.log(data)

  const addChapter = async (newPage, id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const { data } = await axios.post(`${API}/fanfic/${id}/pages/`, newPage, config);

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getChapter = async (page) => {
    try {
      dispatch({
        type: "GET_FANFIC_CHAPTER",
        payload: page,
      })

    } catch (error) {
      console.log(error)
    }
  }

  const deleteChapter = async (id) => {
    try {

    } catch (error) {

    }
  }



  return (
    <fanficContext.Provider
      value={{
        fanfic: state.fanfic,
        chapter: state.chapter,
        getFanfic,
        createFanfic,
        getFanfic,
        addComment,
        addChapter,
        getChapter,
        deleteComment
      }}
    >
      {children}
    </fanficContext.Provider>
  );
};

export default FanficContextProvider