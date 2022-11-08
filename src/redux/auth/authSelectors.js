export const selectName = state => state.auth.user.name;
// export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
