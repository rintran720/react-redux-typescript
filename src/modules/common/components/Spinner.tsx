import React from 'react';
// import { CircularProgress } from './core';

function Spinner() {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* <CircularProgress /> */}
      Loading...
    </div>
  );
}

export default Spinner;
