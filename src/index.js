import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Posts from './components/Posts/Posts';
import PostEdit from './components/PostEdit/PostEdit';
import NewPost from './components/NewPost/NewPost';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/new",
    element: <NewPost />,
  },
  {
    path: "/PostEdit/:id",
    element: <PostEdit />,
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
