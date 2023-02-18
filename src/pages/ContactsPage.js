import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/api";

import { selectContacts, selectIsLoading, selectError } from "redux/selectors";

import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactsList/ContactsList";
import { FilterContact } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";

import style from "./Pages.module.css"

 const Contacts = () => {
    const dispatch = useDispatch();
    const contact = useSelector(selectContacts);
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return(
        <div className= {style.mainDiv} >
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={style.title}>Contacts</h2>
        {isLoading && !error && <Loader isLoading={isLoading} />}
        {contact.items.length > 0 ? (
        <>
        <FilterContact />
        <ContactsList />
        </>
      ) : (
        <div className={style.text}>
          Your phone book is empty.
        </div>
      )}
      </div> 
    );
};
export default Contacts;