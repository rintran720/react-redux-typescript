import React from 'react';
import NotFoundImg from '~/images/404.webp';
import './styles.scss';

function NotFoundComponent() {
  return (
    <div className='not-found-container'>
      <img className='image' alt='404' src={NotFoundImg} />
    </div>
  );
}

export default NotFoundComponent;
