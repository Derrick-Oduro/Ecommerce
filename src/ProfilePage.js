import React from 'react';

const ProfilePage = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is your profile page. You can manage your account details here.</p>
    </div>
  );
};

export default ProfilePage;
