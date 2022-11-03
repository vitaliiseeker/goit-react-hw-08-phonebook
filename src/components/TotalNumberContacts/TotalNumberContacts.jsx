import React from 'react';
import PropTypes from 'prop-types';
import { Text, Total } from './TotalNumberContacts.styled';

export const TotalNumberContacts = ({ value }) => (

  <>
    {value ?
      <Text>The total number of contacts in the phone book:
        <Total>{value}</Total>contacts.
      </Text>
      :
      <Text>There are no entries in the phone book of contacts.</Text>}
  </>
)

TotalNumberContacts.propTypes = {
  value: PropTypes.number.isRequired,
}
