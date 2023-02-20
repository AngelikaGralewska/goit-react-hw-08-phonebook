import { useEffect, lazy } from 'react';
import { Route, Routes} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from './App.module.css';

import { refresh } from 'redux/api';
import { useAuth } from 'hooks/auth';

import { Layout } from '../layout/Layout';
import { PrivateRoute, RestrictedRoute } from '../routes/Routes';
import { Loader } from './Loader/Loader';


const Home = lazy(() => import('pages/Home'));
const Registration = lazy(() => import('pages/Registration'));
const LogIn = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p className={style.text}>Refreshing user... <Loader /></p>
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