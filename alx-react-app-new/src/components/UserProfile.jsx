import React from 'react';

function UserProfile(props) {
  return (
    <div>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ color: 'green' }}>Age: {props.age}</p>
      <p style={{ color: 'red', fontStyle: 'italic' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;