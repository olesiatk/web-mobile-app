import React from 'react';
import PropTypes from 'prop-types';

export const Eye = ({ typeOfPasword, showPassword }) => (
  <>
    {typeOfPasword === 'password'
      ? (
        <i
          className="eye fa fa-eye"
          onClick={() => showPassword()}
          aria-hidden="true"
        />
      )
      : (
        <i
          className="eye fa fa-eye-slash"
          onClick={() => showPassword()}
          aria-hidden="true"
        />
      )
    }
  </>
);

Eye.propTypes = {
  typeOfPasword: PropTypes.string.isRequired,
  showPassword: PropTypes.func.isRequired,
};
