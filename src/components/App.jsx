import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contactsOperations";
import { Layout } from 'components/Layout/Layout';
import { PhonebookPage } from "pages/PhonebookPage/PhonebookPage";
import { AboutPage } from "pages/AboutPage/AboutPage";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes >
        <Route path="/" element={<Layout />}>
          <Route index element={<PhonebookPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
