import React from 'react';
import './profile.scss';
import UserProfile from './userProfile';
import EditProfile from './editProfile';

const ProfileSettings = () => {
  return (
    <div className="profile_setting">
      <UserProfile />
      <EditProfile />
    </div>
  );
};

export default ProfileSettings;
