import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Label, Input } from "./Filter.styled";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>
        <Input
          type="text"
          value={filter}
          placeholder="Find contacts by name"
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </Label>
    </>
  );
}


