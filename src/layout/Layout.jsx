import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Bar } from 'components/Bar/Bar';

import style from "./Layout.module.css"

export const Layout = () => {
  return (
    <div className={style.layoutDiv}>
      <Bar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};