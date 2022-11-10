import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthError, selectIsFetchingCurrentUser } from 'redux/auth/authSelectors';
import { fetchCurrentUser } from "redux/auth/authOperations";
import { Layout } from 'components/Layout/Layout';
import { HomePage } from "pages/HomePage/HomePage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { RegisterPage } from "pages/RegisterPage/RegisterPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
// import { AboutPage } from "pages/AboutPage/AboutPage";
import { PublicRoute } from 'HOCs/PublicRoute';
import { PrivateRoute } from 'HOCs/PrivateRoute';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const App = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      navigate("/login", { replace: true });
      Notify.failure(`Authorization failed, please try to re-authorize.`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authError]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>

      {!isFetchingCurrentUser &&
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
        </Routes>}
    </div>
  );
}
