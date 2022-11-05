import { createSelector } from '@reduxjs/toolkit';
export const selectUsers = state => state.users.items;
export const selectFilter = state => state.users.filter;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    return users.filter(({ email }) => email.includes(filter));
  }
);
