import React, { useReducer} from "react";
import axios from "axios";


export const postContext = React.createContext();
// export const usePost = useContext(postContext)

const INIT_STATE = {
  posts: [],
  pages: 0,
//   categories: [],
  onePost: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: action.payload.results,
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

const API = "http://34.125.224.223/api/v1";

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPost() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API}/fanfic/${window.location.search}`,  //RAUF
        config
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
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/fanfic/`, newProduct, config); //RAUF
      console.log(res);
      navigate("/");
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

  async function getCategories() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/category/list/`, config);  //RAUF
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePost(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/posts/${id}/`, config); //RAUF
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

//   async function toggleLike(id) {
//     try {
//       const tokens = JSON.parse(localStorage.getItem("tokens"));
//       const Authorization = `Bearer ${tokens.access}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//       };

//       const res = await axios(`${API}/products/${id}/toggle_like/`, config);
//       getProducts();
//     } catch (err) {
//       console.log(err);
//     }
//   }

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        pages: state.pages,
        categories: state.categories,
        onePost: state.onePost,

        getPost,
        createPost,
        getCategories,
        deletePost,
        
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostsContextProvider;
