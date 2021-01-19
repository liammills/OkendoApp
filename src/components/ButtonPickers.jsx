import React from 'react';
import PropTypes from 'prop-types';

const Button = (string) => (
  <p className="clickable-button">{string}</p>
);

const ButtonPickers = ({ options, max }) => (

  <div className="subtitle">
    {options && options.map((txt) => Button(txt))}
    <h5>
      (for eslint) max:
      {max}
    </h5>
  </div>
);

ButtonPickers.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  max: PropTypes.number,
};

ButtonPickers.defaultProps = {
  options: null,
  max: 0,
};

export default ButtonPickers;
