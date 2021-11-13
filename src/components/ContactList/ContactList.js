import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { deleteContact } from '../../redux/Contacts/contact-actions';

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.items);
  const value = useSelector(state => state.filter);

  const getVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
  
  return (
    <ul>
      {getVisibleContacts(contacts, value).map(({ name, number, id }) => (
        <li key={id}>
          <Contact name={name} number={number} />
          <button
            className={s.contactBtn}
            type="button"
            // onClick={()=>onDeleteContact(id)}
            onClick={()=> dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const getVisibleContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

// const mapStateToProps = ({   items, filter }) => ({
//   contacts: getVisibleContacts(items, filter),
// });
// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: dataId=> dispatch(deleteContact(dataId))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };


export default ContactList;