import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { addContact, updateContact } from 'redux/contacts/contactsOperations';
import { Button } from 'components/Button/Button';
import { Notification } from "components/Notification/Notification";
import { Loader } from "components/Loader/Loader";
import PropTypes from 'prop-types';

import { nanoid } from "nanoid";
import { Form, Label, Input } from "./ContactForm.styled"

export const ContactForm = ({ contact, closeUpdateForm }) => {

  const [name, setName] = useState(contact?.name ?? "");
  const [number, setNumber] = useState(contact?.phone ?? "");
  const [contactId, setContactId] = useState(contact?.id ?? nanoid());

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const isUpdateForm = contact?.id ? true : false;

  useEffect(() => {
    setName(contact?.name);
    setNumber(contact?.phone);
    setContactId(contact?.id);
  }, [contact]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    const currentContact = {
      id: contactId,
      name,
      phone: number,
    };

    if (isUpdateForm) {
      dispatch(updateContact(currentContact));
      closeUpdateForm();
      reset();
      return;
    }

    const normalizedName = name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(currentContact));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  }

  const onCancel = () => {
    closeUpdateForm();
    reset();
  }

  return (
    <>
      {error && <Notification message={error} />}
      {isLoading && <Loader />}
      {!error && !isLoading &&
        <Form onSubmit={handleSubmit}>
          <h3>{isUpdateForm ? "Edit contact" : "Create contact"}</h3>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange={handleChange}
            placeholder="Enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor={numberInputId}>Number</Label>
          <Input
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            onChange={handleChange}
            placeholder="Enter a number telephone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <div>
            <Button type="submit" children={isUpdateForm ? "Update contact" : "Add contact"}></Button>
            {isUpdateForm &&
              <Button
                type="button"
                children="Cancel"
                onClick={onCancel}
              />}
          </div>

        </Form>}
    </>)
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  closeUpdateForm: PropTypes.func.isRequired,
}