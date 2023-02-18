import { useEffect, lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';

//import style from './App.module.css';

import { refresh } from 'redux/api';
import { useAuth } from 'redux/auth';

import { Layout } from './Layout/Layout';
import { PrivateRoute, RestrictedRoute } from './Routes/Routes';


const Home = lazy(() => import('pages/HomePage'));
const Registration = lazy(() => import('pages/RegistrationPages'));
const LogIn = lazy(() => import('pages/LoginPage'));
const Contacts = lazy(() => import('pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Registration />} />
          }
        />
        <Route path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
          }
        />
        <Route path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
    );
};