import React from 'react';

const Button = (string) => (
    <label className="clickable-button">{string}</label>
);

const ButtonPickers = ( { options, max } ) => (
    <div className="subtitle">
        {options.map(txt => Button(txt))}
    </div>
);

export default ButtonPickers;
