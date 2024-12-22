import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layout/HomeLayout.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import AllBooks from './page/AllBooks.jsx';
import AddBooks from './page/AddBooks.jsx';
import BorrowedBooks from './page/BorrowedBooks.jsx';
import LibraryPlans from './page/LibraryPlans.jsx';
import Tutorials from './page/Tutorials.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import AuthLayout from './layout/AuthLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allBooks',
        element: <AllBooks></AllBooks>
      },
      {
        path: '/addBooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/borrowedBooks',
        element: <BorrowedBooks></BorrowedBooks>
      },
      {
        path: '/libraryPlans',
        element: <LibraryPlans></LibraryPlans>
      },
      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element: <Login></Login>
      },
      {
        path:'/auth/register',
        element: <Register></Register>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
