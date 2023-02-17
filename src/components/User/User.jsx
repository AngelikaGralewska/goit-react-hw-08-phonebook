import { useDispatch } from "react-redux";

import { logOut } from "redux/api";
import { useAuth } from "redux/auth";

export const UserView = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    );
  };