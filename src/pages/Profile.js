import React from 'react';
import Footer from '../components/Footer';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      Profile
      <p data-testid="profile-email">{user.email}</p>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
