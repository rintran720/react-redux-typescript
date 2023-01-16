import React from 'react';
import OopsImg from '~/images/oops.webp';
import './styles.scss';

function OopsComponent() {
  return (
    <div className='oops-container'>
      <img className='image' alt='oops' src={OopsImg} />
    </div>
  );
}

export default OopsComponent;
