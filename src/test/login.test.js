/* import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { fireEvent, screen, render } from '@testing-library/react';
import App from '../App';
function renderWithRouter(
  app,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={ history }>{app}</Router>),
    history,
  };
}

const EMAIL_INPUT_TEST_ID = 'email-input';
const PASSWORD_INPUT_TEST_ID = 'password-input';
const VALID_EMAIL = 'alguem@email.com';
const VALID_PASSWORD = '123456';

describe(' A pagina de login deve:', () => {
  it('Ter como rota a página \'/\'', () => {
    const { history } = renderWithRouter(<App />);
    expect(history.location.pathname).toBe('/');
  });
 /*  it('existir os elementos com data-testids email-input, password-input e login-submit-btn', () => {

  })) */
