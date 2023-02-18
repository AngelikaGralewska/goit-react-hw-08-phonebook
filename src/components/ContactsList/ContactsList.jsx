import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/api';
import { selectContacts, selectFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const getFilteredContacts = (filter, contact) => {
  const filteredContact = filter.toLowerCase().trim();
  return contact.items.filter(item => item.name.toLowerCase().includes(filteredContact));
};

export const ContactsList = () => {

  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = getFilteredContacts(filter, contact);

return(
  <ul className={style.contactsList}>
  {filteredContacts.map(({id, name, number}) => (
    <li key={id} className={style.contactsListItem}>
      <p>
        <span className={style.contactsListName}>{name}</span>
        <span className={style.contactsListName}>{number}</span>
      </p>
      <button
        className={style.buttonDelete}
        type="submit"
        onClick={() => dispatch(deleteContact(id))}
      >
        x
      </button>
    </li>
  ))}
</ul>
);
};

  ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
          PropTypes.shape({
              id: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              phone: PropTypes.string.isRequired,
          })
    ),
  };