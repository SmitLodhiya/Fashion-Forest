import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">Joined on: {user.joinDate}</p>
    </div>
  );
};

export default UserProfile;
