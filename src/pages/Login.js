import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Incial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      button: true,
    };
    this.activeButton = this.activeButton.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillUnmount() {
    const { email } = this.state;
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
  }

  handleInput({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.activeButton());
  }

  activeButton() {
    const { email, senha } = this.state;
    const regex = /\w+@\w+.com(.br)?/;
    const minNumb = 6;
    if (regex.test(email) && senha.length > minNumb) {
      this.setState({ email: email.trim(), senha: senha.trim(), button: false });
    } else {
      this.setState({ button: true });
    }
  }

  render() {
    const { button } = this.state;
    return (
      <div className="container p">
        <h1>App Recipe</h1>
        <form className="align-text-top grid">
          <div className="col-lg-12">
            <label
              htmlFor="inputEmail"
            >
              Email
              <input
                onChange={ this.handleInput }
                data-testid="email-input"
                type="email"
                className="form-control form-control-lg"
                id="inputEmail"
                name="email"
              />
            </label>
          </div>
          <div className="col-lg-12">
            <label htmlFor="inputPassword">
              Senha
              <input
                onChange={ this.handleInput }
                data-testid="password-input"
                type="Password"
                className="form-control form-control-lg"
                id="inputPassword"
                name="senha"
              />
            </label>
          </div>
          <div className="col-auto">
            <Link
              to="/comidas"
            >
              <button
                disabled={ button }
                data-testid="login-submit-btn"
                type="submit"
                className="btn btn-primary"
              >
                Enviar
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Incial;
