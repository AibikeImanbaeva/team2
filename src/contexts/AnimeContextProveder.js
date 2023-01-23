import React, { useReducer } from "react";
import axios from "axios";


export const animeContext = React.createContext();

const INIT_STATE = {
  posts: [],
  pages: 0,
  onePost: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: action.payload,
        // pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ONE_POST":
      return { ...state, onePost: action.payload };
    default:
      return state;
  }
}

const API = "http://34.125.224.223";

const AnimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPost() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API}/anime/${window.location.search}`, config
      );

      dispatch({
        type: "GET_POST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }

  }

  async function createPost(newProduct, navigate) {
    console.log('jessica')
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/anime/`, newProduct, config);
      console.log(res);
      navigate("/");
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

  // async function getCategories() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("token"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/category/list/`, config);  //RAUF
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: res.data.results,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }



//   async function deletePost(id) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
//       await axios.delete(`${API}/fanfic/${id}/`, config); //RAUF
//       getPost();
//     } catch (err) {
//       console.log(err);
//     }
//   }



  
//   async function editFanficPost(edittedProduct, id) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };
      
//       await axios.patch(`${API}/fanfic/${id}/`, edittedProduct, config);
//       getPost();
//     } catch (error) {
//       console.log(error)
//     }
//   }
  










  return (
    <animeContext.Provider
      value={{
        posts: state.posts,
        pages: state.pages,
        categories: state.categories,
        onePost: state.onePost,


        getPost,
        createPost,
        // getCategories,
        // deletePost,
        // editFanficPost
      }}
    >
      {children}
    </animeContext.Provider>
  );
};

export default AnimeContextProvider;
