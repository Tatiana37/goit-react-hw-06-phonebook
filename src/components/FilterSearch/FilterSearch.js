
import { useDispatch, useSelector } from 'react-redux';
import s from './FilterSearch.module.css';
import { filterContact } from '../../redux/Contacts/contact-actions';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


function FilterSearch() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);
  return (
    <div className={s.filter}>
      <label className={s.label}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        name="name"
        value={value}
        onChange={(e)=>dispatch(filterContact(e.target.value))}
        // onChange={onChange}
      />
    </div>
  );
}


export default FilterSearch;

// const mapStateToProps = state => ({
//   value: state.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(filterContact(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);


// FilterSearch.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func.isRequired,
// };