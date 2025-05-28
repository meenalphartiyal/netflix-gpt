import { createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx';
import Browse from './Browse.jsx'
import { RouterProvider } from 'react-router-dom'
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home /> 
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <RouterProvider router={appRouter} >
      <Home />
    </RouterProvider>
  )
}

export default Body