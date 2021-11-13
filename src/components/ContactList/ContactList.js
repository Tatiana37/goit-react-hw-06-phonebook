// import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/Contacts/contact-actions';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function ContactList({contacts, onDeleteContact}) {
  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.contacts);
  
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.contactBtn}
            type="button"
            onClick={()=>onDeleteContact(id)}
            // onClick={()=> dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibleContacts = (contact, filter) => {
  return contact.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({   items, filter }) => ({
  contacts: getVisibleContacts(items, filter),
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: dataId=> dispatch(deleteContact(dataId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};


