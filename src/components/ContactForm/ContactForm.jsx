import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact, updateContact } from 'redux/contacts/contactsOperations';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Form, Label, Input } from "./ContactForm.styled"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const ContactForm = ({ contact, closeUpdateForm, hideContactForm = () => { } }) => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contactId, setContactId] = useState("");

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch("");
  const nameInputId = nanoid("");
  const numberInputId = nanoid("");

  const isUpdateForm = contact?.id ? true : false;

  useEffect(() => {
    setName(contact?.name ?? "");
    setNumber(contact?.number ?? "");
    setContactId(contact?.id ?? "");
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
      number,
    };

    const normalizedName = name.toLowerCase();

    if (contacts.filter(contact => contact.id !== contactId).find(contact => contact.name.toLowerCase() === normalizedName)) {
      Notify.failure(`${name} is already in contacts!`);
      return;
    }

    if (isUpdateForm) {
      dispatch(updateContact(currentContact));
      Notify.info(`The contact ${name} successfully updated.`);
      closeUpdateForm();
    } else {
      dispatch(addContact(currentContact));
      Notify.success(`The contact ${name} has been successfully added to the phone book.`);
    }
    hideContactForm();
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
          pattern="^[a-zA-Z??-????-??]+(([' -][a-zA-Z??-????-?? ])?[a-zA-Z??-????-??]*)*$"
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

        <div style={{ display: "flex", gap: 28 }}>
          <Button
            type="submit"
            children={
              isUpdateForm ?
                "Update contact" :
                "Add contact"}
          />

          {isUpdateForm &&
            <Button
              type="button"
              children="Cancel"
              onClick={onCancel}
            />}

        </div>

      </Form>
    </>)
}

ContactForm.propTypes = {
  contact: PropTypes.object,
  closeUpdateForm: PropTypes.func.isRequired,
  hideContactForm: PropTypes.func,
}