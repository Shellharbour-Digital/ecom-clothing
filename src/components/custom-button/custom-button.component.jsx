import React from 'react';

import './custom-button.styles.scss';

import { CustomButtonContainer } from './custom-button.styles';

{/*
  use below when collection-item.styles has been converted to styled components and remove ref to styles.scss

  const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
      {children}
    </CustomButtonContainer>
  );
*/}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : '' } ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
