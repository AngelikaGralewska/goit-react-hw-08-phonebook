///import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useAuth } from "redux/auth";

import { AuthNav } from "components/AuthNavigation/AuthNavigation";
import { UserView } from "components/User/User";

export const Bar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        </nav>
        {isLoggedIn ? <UserView /> : <AuthNav />}
      </header>
    );
  };