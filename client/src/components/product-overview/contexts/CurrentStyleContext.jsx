import React from 'react';
import sampleStyle from '../../../../spec/sampleStyle';
console.log(sampleStyle);

const CurrentStyleContext = React.createContext(sampleStyle);

export default CurrentStyleContext;
