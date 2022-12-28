import React from 'react';
import useTheme from '~/theme/useTheme';
import NotFoundImg from '~/images/404.webp';
import './styles.scss';

function NotFoundComponent() {
  const theme = useTheme();
  return (
    <div className='not-found-container'>
      <img className='image' alt='404' src={NotFoundImg} />
    </div>
  );
}

export default NotFoundComponent;
