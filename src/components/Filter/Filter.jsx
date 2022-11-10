import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Label, IconSearchFilter, Input } from "./Filter.styled";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();


  return (
    <>
      <Label>
        <IconSearchFilter width="24" height="24" />
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


