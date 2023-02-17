import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filtersSlice';

 export const FilterContact = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label className={style.filterLabel}>
        <p>Find contacts by name</p>
          <input
            type="text"
            name="filter"
            onChange={event => dispatch(setFilter(event.target.value))}
            className={style.filterInput}
          />
      </label>
    </div>
    );
 };