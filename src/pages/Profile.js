import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>

      <div>
        <Header canSearch={ false } text="Perfil" />
        <div className="email-cont">
          <p data-testid="profile-email">{ user !== null ? user.email : 'email' }</p>
        </div>
        <div className="prof-cont">
          <Link to="/receitas-feitas">
            <button
              type="button"
              data-testid="profile-done-btn"
              className="prof-btn"
            >
              Receitas Feitas
            </button>
          </Link>
          <Link to="/receitas-favoritas">
            <button
              type="button"
              data-testid="profile-favorite-btn"
              className="prof-btn"
            >
              Receitas Favoritas
            </button>
          </Link>
          <Link to="/">
            <button
              onClick={ () => localStorage.clear() }
              type="button"
              data-testid="profile-logout-btn"
              className="prof-btn"
            >
              Sair
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
