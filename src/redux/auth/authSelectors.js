export const selectName = state => state.auth.user.name;
export const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthError = state => state.auth.error;
