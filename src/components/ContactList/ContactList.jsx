import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilteredContacts, } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { Button } from 'components/Button/Button';
import { TotalNumberContacts } from 'components/TotalNumberContacts/TotalNumberContacts';
import { Filter } from 'components/Filter/Filter';
import { Wrap, Title, Item, BoxData, BoxEdit, Inner, Avatarstyled, Name, Number, Link, IconPhoneLink } from './ContactList.styled';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const ContactList = ({ changeContact }) => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const [currentContactId, setCurrentContactId] = useState(null);
  const dispatch = useDispatch();

  const editContact = contactId => {
    changeContact(getContact(contactId));
    setCurrentContactId(contactId);
  }

  const delContact = contactId => {
    Notify.info(`The contact ${getContact(contactId).name} successfully deleted from the phone book.`);
    dispatch(deleteContact(contactId));
    if (contactId === currentContactId) {
      changeContact({ name: "", number: "" });
      setCurrentContactId(null);
    }
  }

  const getContact = contactId => {
    return contacts.find(({ id }) => id === contactId);
  }

  return (
    <>
      <Wrap>

        <Title>Contacts</Title>

        <TotalNumberContacts value={contacts.length} />
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 && filteredContacts.length === 0 && (
          <h3>Sorry, no contacts were found for your search.</h3>
        )}

        <ul>
          {filteredContacts.map(({ id, name, number }) => (
            <Item key={id}>

              <BoxData>
                <Inner>
                  <Avatarstyled round={true} size={25} name={name} />
                  <Name>{name}</Name>
                </Inner>
                <Inner>
                  <Link href={'tel: ' + number} type="tel">
                    <IconPhoneLink width="25" height="25" />
                  </Link>
                  <Number>{number}</Number>
                </Inner>
              </BoxData>

              <BoxEdit>
                <Button
                  type="button"
                  onClick={() => editContact(id)}
                  children="Edit"
                />
                <Button
                  type="button"
                  onClick={() => delContact(id)}
                  children="Delete"
                />
              </BoxEdit>

            </Item>
          ))}
        </ul>

      </Wrap>
    </>
  );
};

ContactList.propTypes = {
  changeContact: PropTypes.func.isRequired,
}
