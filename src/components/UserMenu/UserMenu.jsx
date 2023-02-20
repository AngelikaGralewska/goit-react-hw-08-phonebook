import { useDispatch } from "react-redux";

import { logOut } from "redux/api";
import { useAuth } from "hooks/auth";

import style from "./UserMenu.module.css"

export const UserView = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
        <div className={style.userDiv}>
            <p className={style.userText}>Welcome {user.name}</p>
            <button className={style.userButton} onClick={() => dispatch(logOut())}>Log out</button>
        </div>
    );
  };