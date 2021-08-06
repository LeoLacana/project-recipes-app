import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>

      Profile
      <div>
        <p data-testid="profile-email">{ user !== null ? user.email : 'email' }</p>
        <Link to="/receitas-feitas">
          <button
            type="button"
            data-testid="profile-done-btn"
          >
            Receitas Feitas
          </button>
        </Link>
        <Link to="/receitas-favoritas">
          <button
            type="button"
            data-testid="profile-favorite-btn"
          >
            Receitas Favoritas
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={ () => localStorage.clear() }
            type="button"
            data-testid="profile-logout-btn"
          >
            Sair
          </button>
        </Link>

      </div>

      <Footer />
    </>
  );
}

export default Profile;
