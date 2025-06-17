import './App.css';
import { Provider } from 'react-redux';
import appStore from './redux/appStore.js';
import Body from './components/Body.jsx';
import Home from './components/Home.jsx';
import Browse from './components/Browse.jsx'
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function App() {
  const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />, // Always rendered
    children: [
      {
        index: true, // same as path: ''
        element: <Home />
      },
      {
        path: 'browse',
        element: <Browse />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
]);

  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} >
          <Body/>
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
