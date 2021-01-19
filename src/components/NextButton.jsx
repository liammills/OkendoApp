import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ data }) => (
  <button type="submit" className="nextButton">
    <h3>Next</h3>
    <h5>{data}</h5>
  </button>
);

NextButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

NextButton.defaultProps = {
  data: null,
};

export default NextButton;
