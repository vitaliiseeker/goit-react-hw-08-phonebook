import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useMedia } from 'react-use';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from "redux/contacts/contactsOperations";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Notification } from "components/Notification/Notification";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import { Wrap } from "./ContactsPage.styled";

export const ContactsPage = () => {
  const [contact, setContact] = useState(null);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMedia('(max-width: 767px)');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const changeContact = currentContact => {
    setContact(currentContact);
  }

  const closeUpdateForm = () => {
    setContact(null);
    hideContactForm();
  }

  const showContactForm = () => {
    setIsModalOpen(true);
  };

  const hideContactForm = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {error && <Notification message={error} />}
      {!error &&
        <>
          <Wrap>
            {isLoading && <Loader />}
            <ContactList
              showContactForm={showContactForm}
              changeContact={changeContact}
            />

            {!isMobile &&
              <ContactForm
                contact={contact}
                closeUpdateForm={closeUpdateForm}
              />}

            {isModalOpen && isMobile &&
              <Modal closeModal={hideContactForm}>
                <ContactForm
                  contact={contact}
                  closeUpdateForm={closeUpdateForm}
                  hideContactForm={hideContactForm}
                />
              </Modal>}

          </Wrap>
        </>}
    </>

  )
};


