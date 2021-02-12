import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Eye } from './Eye';

export const SignUp = ({
  name,
  email,
  password,
  confirmPassword,
  hideButton,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setHideButton,
  wrongEmail,
  wrongPassword,
  wrongConfirm,
  addUser,
  goToSignIn,
}) => {
  const [typeOfPasword, setTypeOfPasword] = useState('password');
  const [typeOfConfirm, setTypeOfConfirm] = useState('password');
  const [openedHelp, setOpenedHelp] = useState(false);

  useEffect(() => {
    setHideButton(false);
  }, [email, password, confirmPassword, setHideButton]);

  const showPassword = () => {
    if (typeOfPasword === 'password') {
      setTypeOfPasword('text');
    } else {
      setTypeOfPasword('password');
    }
  };

  const showConfirm = () => {
    if (typeOfConfirm === 'password') {
      setTypeOfConfirm('text');
    } else {
      setTypeOfConfirm('password');
    }
  };

  return (
    <section className="App__page-signUP">
      <h1 className="App__header">Sign Up</h1>
      <form
        className="App__form"
        onSubmit={(event) => {
          event.preventDefault();
          addUser();
        }}
      >
        <label className="App__label">
          <p className="App__label-text">Full name</p>
          <input
            className="App__input"
            name="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className="App__label">
          <p
            className={classNames(
              'App__label-text',
              { 'wrong-email': wrongEmail },
            )}
          >
            Email
          </p>
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
          <div className="App__lable-password">
            <p className="App__label-text">Password</p>
            <div
              className={classNames(
                'App__help',
                { 'App__help--active': openedHelp },
              )}
              onClick={() => setOpenedHelp(!openedHelp)}
              aria-hidden="true"
            >
              ?
            </div>
          </div>
          <input
            className={classNames(
              'App__input',
              { 'wrong-input': wrongPassword },
            )}
            name="password"
            type={typeOfPasword}
            placeholder=""
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Eye
            typeOfPasword={typeOfPasword}
            showPassword={showPassword}
          />
        </label>
        <label className="App__label">
          <p className="App__label-text">Repeat password</p>
          <input
            className={classNames(
              'App__input',
              { 'wrong-input': wrongConfirm },
            )}
            name="password"
            type={typeOfConfirm}
            placeholder="********"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          <Eye
            typeOfPasword={typeOfConfirm}
            showPassword={showConfirm}
          />
        </label>

        <button
          className={classNames(
            'App__form-button',
            { 'not-active': hideButton },
          )}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="App__text-question"> Already have an account?</p>
      <button
        type="button"
        className=" App__text-question App__button-link"
        onClick={() => goToSignIn()}
      >
        Sign In
      </button>
    </section>
  );
};

SignUp.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  hideButton: PropTypes.bool.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
  setHideButton: PropTypes.func.isRequired,
  wrongEmail: PropTypes.bool.isRequired,
  wrongPassword: PropTypes.bool.isRequired,
  wrongConfirm: PropTypes.bool.isRequired,
  addUser: PropTypes.func.isRequired,
  goToSignIn: PropTypes.func.isRequired,
};
