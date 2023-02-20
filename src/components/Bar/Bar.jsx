import { NavLink } from "react-router-dom";
import { useAuth } from "hooks/auth";

import { AuthNav } from "components/AuthNavigation/AuthNavigation";
import { UserView } from "components/UserMenu/UserMenu";

import style from "./Bar.module.css"


export const Bar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <header className={style.barDiv}>
        <nav>
            <NavLink className={style.barLink} to="/">Home</NavLink>
            {isLoggedIn && <NavLink className={style.barLink} to="/contacts">Contacts</NavLink>}
        </nav>
        {isLoggedIn ? <UserView /> : <AuthNav />}
      </header>
    );
  };