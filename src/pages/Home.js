import style from "./Pages.module.css"

const Home = () => {
    return (
      <div className={style.mainDiv}>
        <h1 className={style.titleHome}>Phonebook</h1>
        <h2 className={style.titleHome}> This is your place for saving contacts</h2>
      </div>
    );
  }
  export default Home;