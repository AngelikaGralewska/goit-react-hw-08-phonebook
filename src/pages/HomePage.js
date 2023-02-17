import style from "./Pages.module.css"

export const Home = () => {
    return (
      <div className={style.mainDiv}>
        <h2 className={style.title}>
        This is your place for saving contacts
        </h2>
      </div>
    );
  }