import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/api';

import style from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const contact = useSelector(selectContacts);

    const handleSubmit = event => {
      event.preventDefault();
       const name = event.target.name.value;
       const phone = event.target.phone.value;
       if (contact.items.find(item => item.name.toLowerCase() === name.toLowerCase())) {
         return alert(`${name} is already in contacts`);
       }
       dispatch(addContact({ name, phone }));
       event.target.reset();
     };

  return (
      <form className={style.phonebookInputs} onSubmit={handleSubmit}>
        <label className={style.phonebookLabel}>
          <h4 className={style.phonebookInputTitle}>Name:</h4>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={style.phonebookInput}
            />
        </label>
        <label className={style.phonebookLabel}>
          <h4 className={style.phonebookInputTitle}>Number:</h4>
            <input
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={style.phonebookInput}
            />
        </label>
        <button type="submit" className={style.buttonAdd}>
          add contact
        </button>
      </form>
    );
  }