import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Pages/Header/Header';
import Blogs from './Pages/Blogs/Blogs';
import Main from './Pages/Main/Main';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import Content from './Pages/Content/Content';
import Author from './Pages/Author/Author';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,

    children : [
      {
        path : '/header',
        element : <Header></Header>,
      },

      {
        path : '/blogs',
        element : <Blogs></Blogs>,
        loader : ()=> fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
     
     {
      path : '/blog/:id',
      element : <SingleBlog></SingleBlog>,
      loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),

      children : [
        {
          index : true,
          element : <Content></Content>,
          loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        },

        {
          path : 'author',
          element : <Author></Author>,
          loader : ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        }

      ]
      
     },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
