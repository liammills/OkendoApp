import React from 'react';

const Button = (string) => (
  <p className="clickable-button">{string}</p>
);

const ButtonPickers = ({ options, max }) => (
  <div className="subtitle">
    {options && options.map((txt) => Button(txt))}
    Pick max:
    {max}
  </div>
);

export default ButtonPickers;
