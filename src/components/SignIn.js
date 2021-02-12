import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { Eye } from './Eye';

export const SignIn = ({
  email,
  password,
  hideButton,
  setEmail,
  setPassword,
  setHideButton,
  wrongEmail,
  wrongPassword,
  setWrongEmail,
  setWrongPassword,
  noUser,
  setNoUser,
  checkUser,
  goToSignUp,
}) => {
  const [typeOfPasword, setTypeOfPasword] = useState('password');

  useEffect(() => {
    setHideButton(false);
  }, [email, password, setHideButton]);

  const showPassword = () => {
    if (typeOfPasword === 'password') {
      setTypeOfPasword('text');
    } else {
      setTypeOfPasword('password');
    }
  };

  const clearErrors = () => {
    setWrongEmail(false);
    setWrongPassword(false);
    setNoUser(false);
    setTypeOfPasword('password');
    setEmail('');
    setPassword('12345678');
    setHideButton(false);
  };

  return (
    <section className="App__page-signIN">
      <h1 className="App__header">Sign In</h1>
      <form
        className="App__form"
        onSubmit={(event) => {
          event.preventDefault();
          checkUser();
        }}
      >
        <label className="App__label">
          <p className="App__label-text">Email</p>
          <input
            className={classNames('App__input', { 'wrong-input': wrongEmail })}
            name="email"
            type="email"
            placeholder="example@acme.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className="App__label">
          <p className="App__label-text">Password</p>
          <input
            className={classNames(
              'App__input',
              { 'wrong-input': wrongPassword },
            )}
            type={typeOfPasword}
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Eye
            typeOfPasword={typeOfPasword}
            showPassword={showPassword}
          />
        </label>
        <button
          className={classNames(
            'App__form-button',
            { 'not-active': hideButton },
          )}
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p className="App__text-question"> Don&apos;t have an account yet?</p>
      <button
        type="button"
        className=" App__text-question App__button-link"
        onClick={() => goToSignUp()}
      >
        Sign Up
      </button>

      {noUser && (
        <div className="App__error">
          Wrong email or password
          <span
            className="App__error-close"
            onClick={() => clearErrors()}
            aria-hidden="true"
          >
            &#10006;
          </span>
        </div>
      )}

    </section>
  );
};

SignIn.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  hideButton: PropTypes.bool.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setHideButton: PropTypes.func.isRequired,
  wrongEmail: PropTypes.bool.isRequired,
  wrongPassword: PropTypes.bool.isRequired,
  setWrongEmail: PropTypes.func.isRequired,
  setWrongPassword: PropTypes.func.isRequired,
  noUser: PropTypes.bool.isRequired,
  setNoUser: PropTypes.func.isRequired,
  checkUser: PropTypes.func.isRequired,
  goToSignUp: PropTypes.func.isRequired,
};
