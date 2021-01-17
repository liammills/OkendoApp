import React from 'react';

const NextButton = ( { data } ) => (
        <button className="nextButton" onPress={console.log(data)}>
            <h3>Next</h3>
        </button>
);

export default NextButton;
