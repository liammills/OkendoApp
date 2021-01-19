import React from 'react';
import PropTypes from 'prop-types';

const NextButton = ({ data }) => (
  <button type="submit" className="nextButton" onPress={() => console.log(data)}>
    <h3>Next</h3>
  </button>
);

NextButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

NextButton.defaultProps = {
  data: null,
};

export default NextButton;
