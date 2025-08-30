import React from "react";

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.username}</p> {/* 🐛 Bug: wrong prop key */}
      <p>Age: {user.age}</p>
    </div>
  );
}

export default UserProfile;
