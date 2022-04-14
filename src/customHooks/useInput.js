import React, { useState } from 'react';

const useInput = (input, callback) => {
    const [value, setValue] = useState(input);

    const onChange = (event) => {
        const { target: { value } } = event;
        let willUpdate = true;
        
        if (typeof callback === 'function') {
            willUpdate = callback(value);
        }

        if (willUpdate) {
            setValue(value);
        }     
    }

    return { value, onChange };
}

export default useInput;