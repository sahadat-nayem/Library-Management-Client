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
import BorrowedBooks from './page/BorrowedBooks.jsx';
import AddBooks from './page/AddBooks.jsx';
import LibraryPlans from './page/LibraryPlans.jsx';
import Tutorials from './page/Tutorials.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Login from './page/Login.jsx';
import Register from './page/Register.jsx';
import AuthLayout from './layout/AuthLayout.jsx';
import BookDetails from './page/BookDetails.jsx';
import PrivateRouter from './routes/PrivateRoutes.jsx';
import UpdateBooks from './page/UpdateBooks.jsx';
import MyProfile from './page/MyProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assignment-11-server-ivory-two.vercel.app/book/two')
      },
      {
        path: '/allBooks',
        element: <PrivateRouter><AllBooks></AllBooks></PrivateRouter>,
        loader: () => fetch('https://assignment-11-server-ivory-two.vercel.app/book')
      },
      {
        path: '/addBooks',
        element: <PrivateRouter><AddBooks></AddBooks></PrivateRouter>
      },
      {
        path: '/updateBooks/:id',
        element: <UpdateBooks></UpdateBooks>,
        loader: ({params}) => fetch(`https://assignment-11-server-ivory-two.vercel.app/book/${params.id}`)
      },
      {
        path: '/borrowBooks',
        element: <PrivateRouter><BorrowedBooks></BorrowedBooks></PrivateRouter>,
        loader: () => fetch('https://assignment-11-server-ivory-two.vercel.app/borrow')
      },
      {
        path: '/libraryPlans',
        element: <LibraryPlans></LibraryPlans>
      },
      {
        path: '/tutorials',
        element: <Tutorials></Tutorials>
      },
      {
        path:'/book/:id',
        element: <PrivateRouter><BookDetails></BookDetails></PrivateRouter>,
        loader: ({params}) => fetch(`https://assignment-11-server-ivory-two.vercel.app/books/${params.id}`)
      },
      {
        path: '/myProfile',
        element: <MyProfile></MyProfile>
      },
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
