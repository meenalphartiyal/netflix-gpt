import './App.css';
import Home from './components/Home.jsx';
import { createBrowserRouter } from 'react-router-dom'
import Browse from './components/Browse.jsx'
import { RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';

function App() {
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

  return (
    <div>
      <RouterProvider router={appRouter} >
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
