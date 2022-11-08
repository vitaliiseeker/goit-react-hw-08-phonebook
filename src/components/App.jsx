import React, { useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/auth/authOperations";
// import { selectToken, selectAuthError } from 'redux/auth/authSelectors';
// import { fetchContacts } from "redux/contacts/contactsOperations";
import { Layout } from 'components/Layout/Layout';
import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
// import { AboutPage } from "pages/AboutPage/AboutPage";
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // const authError = useSelector(selectAuthError);
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>

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
                <ContactsPage />
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
    </div>
  );
}
