import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/reducer';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <>
      <label>
        <p>Find contacts by name</p>
        <input type="text" name="filter" onChange={handleChange} />
      </label>
    </>
  );
};

export default Filter;
