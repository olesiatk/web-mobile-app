import React from 'react';
import PropTypes from 'prop-types';

export const Enter = ({ goToSignUp, goToSignIn }) => (
  <section className="App__page-enter">
    <h1 className="App__header">Ready for a great User experiance?</h1>
    <p className="App__text-info"> Bring your media to the next level!</p>
    <button
      type="button"
      className="App__button"
      onClick={() => goToSignUp()}
    >
      SignUp
    </button>
    <button
      type="button"
      className="App__button-go"
      onClick={() => goToSignIn()}
    >
      &rarr;
    </button>
  </section>
);

Enter.propTypes = {
  goToSignUp: PropTypes.string.isRequired,
  goToSignIn: PropTypes.string.isRequired,
};
