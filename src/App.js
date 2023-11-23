import "./App.css";
import Posts from "./components/Posts/Posts";
import PostEdit from "./components/PostEdit/PostEdit";
import NewPost from "./components/NewPost/NewPost";
import NewUser from "./components/NewUser/NewUser";
// import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import { useEffect } from "react";

function App(){
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
    useEffect(() => {
        dispatch(fetchAuthMe())
    },[])
    return (
        <>
        <Routes>
            <Route path="/" element={<Posts />}/>
            <Route path="/createPost" element={<NewPost />}/>
            <Route path="/postEdit/:id" element={<PostEdit />}/>
            <Route path="/registration" element={<NewUser isRegistration={true} />}/>
            <Route path="/auth" element={<NewUser isRegistration={false} />}/>
        </Routes>
        <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
        </>
    )
}
// reportWebVitals();
export default App;
