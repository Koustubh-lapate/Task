import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/authService';
import { isAuthenticated } from '../services/authService';
import { Navigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<{ name: string, email: string, role: string } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const data = await getProfile(token);
          setProfile(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchProfile();
  }, []);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      {profile ? (
        <>
          <h1>Profile</h1>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Role: {profile.role}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
