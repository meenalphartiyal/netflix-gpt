import Home from './Home.jsx';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice.js';
import { Outlet, useNavigate } from 'react-router-dom';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({uid: uid, email:email, displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => subscribe();
  }, []);

  return (
    <Outlet />
  )
}

export default Body