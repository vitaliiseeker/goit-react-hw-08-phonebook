import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/auth/authOperations";
// import { selectToken } from 'redux/auth/authSelectors';
// import { fetchContacts } from "redux/contacts/contactsOperations";
import { Layout } from 'components/Layout/Layout';
import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { PhonebookPage } from "pages/PhonebookPage/PhonebookPage";
// import { AboutPage } from "pages/AboutPage/AboutPage";
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchCurrentUser());
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   if (token) dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Routes >
        <Route
          path="/"
          element={
            <Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>}
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>}
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>}
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <PhonebookPage />
              </PrivateRoute>}
          />
          {/* <Route
            path="about"
            element={
              <PublicRoute>
                <AboutPage />
              </PublicRoute>}
          /> */}
        </Route>
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace />}
        />
      </Routes>
    </>
  );
}
