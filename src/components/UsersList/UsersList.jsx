import { Button } from 'components/Button/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleUsers } from 'redux/users/usersSelectors';
import { UpdateUserForm } from 'components/UpdateUserForm/UpdateUserForm';

export const UsersList = () => {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const users = useSelector(selectVisibleUsers);

  const showForm = userId => {
    const user = users.find(({ id }) => id === userId);
    setUserToUpdate(user);
  };

  const closeForm = () => {
    setUserToUpdate(null);
  };

  return (
    <ul>
      {users.map(({ id, name, avatar, email, company }) => (
        <li key={id}>
          <img src={avatar} alt={name} />
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Company name: {company}</p>
          <Button
            type="button"
            text="Change company"
            clickHandler={() => {
              showForm(id);
            }}
          />
          {userToUpdate && userToUpdate.id === id && (
            <UpdateUserForm user={userToUpdate} closeForm={closeForm} />
          )}
        </li>
      ))}
    </ul>
  );
};
