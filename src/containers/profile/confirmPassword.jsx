import React from 'react';
import './profile.scss';
import ChangePassword from './changePassword';
import UserProfile from './userProfile';

const ConfirmPassword = () => {
  return (
    <div className="confirm_password">
      <UserProfile />
      <ChangePassword />
    </div>
  );
};

export default ConfirmPassword;
