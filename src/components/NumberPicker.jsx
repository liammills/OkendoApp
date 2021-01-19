import React from 'react';
import PropTypes from 'prop-types';
// import Slider, { createSliderWithTooltip } from 'rc-slider';

// const SliderWithTooltip = createSliderWithTooltip(Slider);

const Picker = () => (
  <div className="helper-text picker">
    <h2 className="number">1</h2>
    <h2 className="number">2</h2>
    <h2 className="number">3</h2>
    <h2 className="number">4</h2>
    <h2 className="number">5</h2>
  </div>
);

// const style = { width: 400 };
const NumberPicker = ({ start, end, num }) => (
  <div>
    <div className="numberPicker">
      <Picker num={num} />
      {/* <div style={style}>
        <Slider dots min={1} max={5} step={1} defaultValue={3} />
      </div> */}
      <div className="helper-text">
        <h5 className="start">{start}</h5>
        <h5 className="end">{end}</h5>
      </div>
    </div>
    <h5>
      (for eslint) num:
      {num}
    </h5>
  </div>
);

NumberPicker.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  num: PropTypes.number,
};

NumberPicker.defaultProps = {
  start: null,
  end: null,
  num: 0,
};

export default NumberPicker;
