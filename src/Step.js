import React from 'react';

const Step = props => {
    return (<p>Krok: <input type="number" onChange={props.changeStepValue} /></p>)    
}

export default Step;