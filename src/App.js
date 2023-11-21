import "./App.css";
import Posts from "./components/Posts/Posts";
import PostEdit from "./components/PostEdit/PostEdit";
import NewPost from "./components/NewPost/NewPost";
import NewUser from "./components/NewUser/NewUser";
// import reportWebVitals from "./reportWebVitals";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(){
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


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Posts />,
//   },
//   {
//     path: "/createPost",
//     element: <NewPost />,
//   },
//   {
//     path: "/postEdit/:id",
//     element: <PostEdit />,
//   },
//   {
//     path: "/registration",
//     element: <NewUser isRegistration={true} />,
//   },
//   {
//     path: "/auth",
//     element: <NewUser isRegistration={false} />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <RouterProvider router={router} />
//     <ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="light"
//     />
//   </>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
   
//   );
// }

// export default App;
