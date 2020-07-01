import React from 'react';
import ReactVivus from 'react-vivus';

import Fastlab from 'images/Fastlab_LR.svg';

import Wrapper from './Wrapper';

const FLLoadingIndicator = () => (
  <Wrapper>
    <ReactVivus
      id="foo"
      option={{
        file: Fastlab,
        animTimingFunction: 'EASE',
        type: 'oneByOne',
      }}
      style={{ height: '80px', width: '80px' }}
    />
  </Wrapper>
);

export default FLLoadingIndicator;
