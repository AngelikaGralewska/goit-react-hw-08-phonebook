import { NavLink } from "react-router-dom";

import style from "./AuthNavigation.module.css";

export const AuthNav = () => {
    return (
      <div className={style.authNavigation}>
        <NavLink className={style.authNavigationLink} to="/register">Register</NavLink>
        <NavLink className={style.authNavigationLink} to="/login">Log In</NavLink>
      </div>
    );
  };